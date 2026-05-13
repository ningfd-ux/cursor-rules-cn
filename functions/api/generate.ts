// Cloudflare Pages Function: POST /api/generate
// Handles AI rule generation via DeepSeek API (deepseek-chat, cheapest model)
// Rate-limited: 2 free calls per IP per hour

interface Env {
  DEEPSEEK_API_KEY: string;
}

// In-memory rate limiter (resets on cold start, but covers basic abuse)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const FREE_LIMIT = 2; // 2 free calls per IP
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function getRateLimit(ip: string): { remaining: number; resetIn: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entries
  if (entry && now > entry.resetAt) {
    rateLimitMap.delete(ip);
  }

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 0, resetAt: now + RATE_WINDOW_MS });
    return { remaining: FREE_LIMIT, resetIn: RATE_WINDOW_MS / 1000 };
  }

  const current = rateLimitMap.get(ip)!;
  const remaining = Math.max(0, FREE_LIMIT - current.count);
  return { remaining, resetIn: Math.floor((current.resetAt - now) / 1000) };
}

function isBotUserAgent(ua: string): boolean {
  const botPatterns = /bot|spider|crawler|scraper|curl|wget|python-requests|go-http/i;
  return botPatterns.test(ua);
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.DEEPSEEK_API_KEY) {
    return Response.json(
      { error: "API Key not configured" },
      { status: 500 }
    );
  }

  // Block obvious bots/automated requests
  const userAgent = request.headers.get("user-agent") || "";
  if (isBotUserAgent(userAgent)) {
    return Response.json(
      { error: "Automated requests are not allowed. Please use the web interface." },
      { status: 403 }
    );
  }

  // Rate limiting by IP
  const clientIp = request.headers.get("cf-connecting-ip") || "unknown";
  const rateLimit = getRateLimit(clientIp);

  if (rateLimit.remaining <= 0) {
    return Response.json(
      {
        error: `You've used all ${FREE_LIMIT} free generations. Please try again in ${Math.ceil(rateLimit.resetIn / 60)} minutes.`,
        retryAfter: rateLimit.resetIn,
      },
      { status: 429 }
    );
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

    // Increment rate limit counter
    const entry = rateLimitMap.get(clientIp);
    if (entry) {
      entry.count++;
    }

    // Resolve package.json
    let resolvedPackageJson = body.packageJson || "";
    if (body.repoUrl && body.repoUrl.trim().length > 0) {
      try {
        const fetched = await fetchPackageJsonFromRepo(body.repoUrl.trim());
        if (fetched) resolvedPackageJson = fetched;
      } catch (e) {
        return Response.json(
          { error: "无法从该仓库获取 package.json，请确认仓库地址正确且为公开仓库" },
          { status: 400 }
        );
      }
    }

    const prompt = buildPrompt(
      body.techStack,
      body.strictness,
      body.model,
      body.outputFormat || "cursorrules",
      resolvedPackageJson,
    );

    // Use deepseek-chat (cheapest model)
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: [
          {
            role: "system",
            content: getSystemPrompt(body.outputFormat || "cursorrules"),
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return Response.json(
        { error: `API error: ${err}` },
        { status: response.status }
      );
    }

    const data = await response.json() as {
      choices: Array<{ message: { content: string } }>;
    };

    const ruleContent = data.choices[0]?.message?.content || "";
    return Response.json({
      content: ruleContent,
      remaining: rateLimit.remaining - 1,
    });
  } catch (e) {
    return Response.json(
      { error: String(e) },
      { status: 500 }
    );
  }
}

function getSystemPrompt(outputFormat: string): string {
  switch (outputFormat) {
    case "cursorrules":
      return (
        "You are an expert software engineer who writes .cursorrules files. " +
        "Output ONLY the .cursorrules content. No explanations. " +
        "Use clear sections with ## headers. Each section should have bullet points. " +
        "Make every rule practical and specific, not generic."
      );
    case "mdc":
      return (
        "You are an expert software engineer who writes .cursor/rules/*.mdc files for Cursor IDE. " +
        "Output with YAML frontmatter (title, description, globs). " +
        "Use the format:\n---\ntitle: Rule Name\ndescription: What this rule enforces\nglobs: **/*.{ts,tsx}\n---\n\n# Rule\n\nRule content.\n" +
        "Make every rule practical and specific."
      );
    case "agents":
      return (
        "You are an expert software engineer who writes AGENTS.md files for Claude Code CLI. " +
        "Output ONLY the AGENTS.md content. Focus on conversational instructions." +
        "Make every instruction practical and specific."
      );
    case "copilot":
      return (
        "You are an expert software engineer who writes .github/copilot-instructions.md files. " +
        "Output ONLY the copilot-instructions.md content. " +
        "Focus on inline completion patterns and conventions." +
        "Make every instruction practical and specific."
      );
    default:
      return (
        "You are an expert software engineer who writes AI coding standards files. " +
        "Output ONLY the rules content. No explanations. " +
        "Make every rule practical and specific, not generic."
      );
  }
}

function buildPrompt(
  techStack: string,
  strictness: string,
  model: string,
  outputFormat: string,
  packageJson: string,
): string {
  const strictnessMap: Record<string, string> = {
    relaxed: "suggest best practices, allow some flexibility",
    moderate: "enforce conventions, warn on violations",
    strict: "enforce all rules strictly, no exceptions",
  };

  const outputFormatLabel: Record<string, string> = {
    cursorrules: ".cursorrules file format (for Cursor IDE)",
    mdc: ".cursor/rules/*.mdc format (for new Cursor IDE)",
    agents: "AGENTS.md format (for Claude Code CLI)",
    copilot: ".github/copilot-instructions.md format (for GitHub Copilot)",
  };

  let depAnalysis = "";
  if (packageJson && packageJson.trim().length > 0) {
    depAnalysis = `
The user's package.json:
\`\`\`json
${packageJson}
\`\`\`
Analyze dependencies and generate rules specific to detected libraries (Next.js, React, Prisma, Zod, Tailwind, etc.).`;
  }

  return `Generate ${outputFormatLabel[outputFormat] || ".cursorrules"} for a project using: ${techStack}.
${depAnalysis}
Strictness: ${strictnessMap[strictness] || strictnessMap.moderate}

Include: Technology Stack, Code Style, Architecture Constraints, Error Handling, Security, Common Patterns, Anti-Patterns.
Be specific and practical. Avoid generic advice.`;
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
      const fallbackUrl = `https://raw.githubusercontent.com/${user}/${repo}/master/package.json`;
      const fb = await fetch(fallbackUrl);
      if (!fb.ok) return null;
      return await fb.text();
    }
    return null;
  }
  return await response.text();
}

export {};
