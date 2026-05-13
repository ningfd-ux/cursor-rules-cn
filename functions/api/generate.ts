// Cloudflare Pages Function: POST /api/generate
// Handles AI rule generation via DeepSeek API (deepseek-v4-flash)
// Rate-limited: 2 free calls per IP per hour

interface Env {
  DEEPSEEK_API_KEY: string;
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const FREE_LIMIT = 2;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getRateLimit(ip: string): { remaining: number; resetIn: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now > entry.resetAt) rateLimitMap.delete(ip);
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 0, resetAt: now + RATE_WINDOW_MS });
    return { remaining: FREE_LIMIT, resetIn: RATE_WINDOW_MS / 1000 };
  }
  const current = rateLimitMap.get(ip)!;
  return { remaining: Math.max(0, FREE_LIMIT - current.count), resetIn: Math.floor((current.resetAt - now) / 1000) };
}

function isBotUserAgent(ua: string): boolean {
  return /bot|spider|crawler|scraper|curl|wget|python-requests|go-http/i.test(ua);
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.DEEPSEEK_API_KEY) {
    return Response.json({ error: "API Key not configured" }, { status: 500 });
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (isBotUserAgent(userAgent)) {
    return Response.json({ error: "Automated requests are not allowed." }, { status: 403 });
  }

  const clientIp = request.headers.get("cf-connecting-ip") || "unknown";
  const rateLimit = getRateLimit(clientIp);
  if (rateLimit.remaining <= 0) {
    return Response.json({
      error: `You've used all ${FREE_LIMIT} free generations. Try again in ${Math.ceil(rateLimit.resetIn / 60)} minutes.`,
      retryAfter: rateLimit.resetIn,
    }, { status: 429 });
  }

  try {
    const body = await request.json() as {
      techStack: string;
      strictness: string;
      model: string;
      outputFormat: string;
      packageJson: string;
      repoUrl: string;
    };

    const entry = rateLimitMap.get(clientIp);
    if (entry) entry.count++;

    let resolvedPackageJson = body.packageJson || "";
    if (body.repoUrl && body.repoUrl.trim().length > 0) {
      try {
        const fetched = await fetchPackageJsonFromRepo(body.repoUrl.trim());
        if (fetched) resolvedPackageJson = fetched;
      } catch (e) {
        return Response.json({ error: "Unable to fetch package.json from this repo." }, { status: 400 });
      }
    }

    const prompt = buildPrompt(body.techStack, body.strictness, body.outputFormat || "cursorrules", resolvedPackageJson);

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: [
          { role: "system", content: getSystemPrompt(body.outputFormat || "cursorrules") },
          { role: "user", content: prompt },
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return Response.json({ error: `API error: ${err}` }, { status: response.status });
    }

    const data = await response.json() as { choices: Array<{ message: { content: string } }> };
    const ruleContent = data.choices[0]?.message?.content || "";
    return Response.json({ content: ruleContent, remaining: rateLimit.remaining - 1 });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

// === Step 2: Senior Tech Lead persona ===
function getSystemPrompt(outputFormat: string): string {
  const basePersona =
    "You are a senior tech lead writing a coding standards file for a real production team. " +
    "Your standards are specific enough that a junior dev could follow them and produce code indistinguishable from a senior. " +
    "You NEVER write generic advice like \"use TypeScript\" or \"write clean code.\" " +
    "Instead, you write enforceable rules referencing actual libraries, file paths, and patterns. " +
    "Be opinionated. A real tech lead doesn't say \"choose wisely\" — they say \"do it this way.\" ";

  switch (outputFormat) {
    case "cursorrules":
      return basePersona +
        "Output ONLY the .cursorrules content. No explanations. " +
        "## headers. - bullet items. " +
        "Start with \"## Detected Architecture.\" " +
        "Rules MUST reference specific detected libraries. " +
        "Include: server/client boundaries, data flow, file naming, error handling, validation, testing, and anti-patterns.";
    case "mdc":
      return basePersona +
        "Output .cursor/rules/*.mdc content with YAML frontmatter. " +
        "Each block: ---\\ntitle: X\\ndescription: Y\\nglobs: **/*.{ts,tsx}\\n---\\n\\n# Rule\\n\\nContent. " +
        "Start with ## Detected Architecture.";
    case "agents":
      return basePersona +
        "Output ONLY the AGENTS.md content. " +
        "Focus on conversational instructions Claude can follow. " +
        "Start with ## Detected Architecture.";
    case "copilot":
      return basePersona +
        "Output ONLY .github/copilot-instructions.md content. " +
        "Focus on inline completion patterns. " +
        "Start with ## Detected Architecture.";
    default:
      return basePersona +
        "Output ONLY the standards content. " +
        "Start with ## Detected Architecture. " +
        "Be opinionated and specific.";
  }
}

function buildPrompt(techStack: string, strictness: string, outputFormat: string, packageJson: string): string {
  const strictnessMap: Record<string, string> = {
    relaxed: "suggest best practices, allow some flexibility",
    moderate: "enforce conventions, warn on violations",
    strict: "enforce all rules strictly, no exceptions",
  };

  const outputFormatLabel: Record<string, string> = {
    cursorrules: ".cursorrules file (Cursor IDE)",
    mdc: ".cursor/rules/*.mdc format (Cursor IDE v2)",
    agents: "AGENTS.md format (Claude Code CLI)",
    copilot: ".github/copilot-instructions.md (GitHub Copilot)",
  };

  let depAnalysis = "";
  if (packageJson && packageJson.trim().length > 0) {
    depAnalysis = `
CRITICAL: Analyze these exact dependencies. For EACH detected library, write ONE specific enforceable rule.
Examples of BAD vs GOOD rules:
BAD: "Write clean maintainable code."
GOOD: "Server Components must not import 'use client' libraries. Keep data fetching in Server Components, pass data as props to client leaves."

BAD: "Use proper error handling."
GOOD: "Wrap all Server Actions in try/catch. Return { error: string } for user-facing errors. Log full stack with console.error."

The user's package.json:
\`\`\`json
${packageJson}
\`\`\`
`;
  }

  return `Generate ${outputFormatLabel[outputFormat] || ".cursorrules"} for a project using: ${techStack}.
${depAnalysis}
Strictness: ${strictnessMap[strictness] || strictnessMap.moderate}

Sections: Detected Architecture, File Structure, Code Style, Data Flow, Error Handling, Security, Testing, Anti-Patterns.
Each rule must reference a specific library or pattern detected in the dependencies.
Be a tech lead, not a checklist writer. Choose one approach and commit to it.`;
}

async function fetchPackageJsonFromRepo(repoUrl: string): Promise<string | null> {
  const githubMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/\s?#]+)/);
  if (!githubMatch) return null;
  const user = githubMatch[1];
  const repo = githubMatch[2].replace(/\.git$/, "");
  const branchMatch = repoUrl.match(/\/tree\/([^\/\s?#]+)/);
  const branch = branchMatch ? branchMatch[1] : "main";

  const rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/package.json`;
  const response = await fetch(rawUrl);
  if (!response.ok) {
    if (branch === "main") {
      const fb = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/master/package.json`);
      if (!fb.ok) return null;
      return await fb.text();
    }
    return null;
  }
  return await response.text();
}

export {};
