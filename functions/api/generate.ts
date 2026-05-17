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
        max_tokens: 3500,
        temperature: 0.6,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return Response.json({ error: `API error: ${err}` }, { status: response.status });
    }

    const data = await response.json() as { choices: Array<{ message: { content: string } }> };
    const ruleContent = data.choices[0]?.message?.content || "";
    return Response.json({ files: parseGeneratedFiles(ruleContent), remaining: rateLimit.remaining - 1 });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

// === Step 2: Senior Tech Lead persona ===
function getSystemPrompt(outputFormat: string): string {
  const basePersona =
    "You are a senior tech lead generating repository governance files for a real production team. Return JSON only. " +
    "Your standards are specific enough that a junior dev could follow them and produce code indistinguishable from a senior. " +
    "You NEVER write generic advice like \"use TypeScript\" or \"write clean code.\" " +
    "Instead, you write enforceable rules referencing actual libraries, file paths, and patterns. " +
    "Be opinionated. A real tech lead doesn't say \"choose wisely\" 鈥?they say \"do it this way.\" " +
    "Every rule must reference a SPECIFIC library or framework detected. " +
    "Rules must be testable: a code reviewer can answer yes/no whether a PR follows each rule. " +
    "Anti-patterns section is REQUIRED 鈥?list 3-5 common mistakes with the detected stack. " +
    "For each rule, add a one-line \"Why:\" explanation referencing the detected dependency or architecture pattern. " +
    "DO NOT add introductory text or meta-commentary outside the standards content. ";

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
        "Be opinionated and specific. Return JSON only. Output MUST be valid parsable JSON. Format: { \"rules\": \"...\", \"memory\": \"...\", \"architecture\": \"...\", \"cursorRules\": \"...\", \"claude\": \"...\", \"testingWorkflow\": \"...\" }. Each field = real repository file with migration notes, technical debt, architecture constraints. No generic AI language.";
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
CRITICAL: The user has provided a real package.json. This is NOT a hypothetical project.
Step 1: Parse the JSON and identify the EXACT libraries and versions.
Step 2: For EACH detected library, write ONE specific enforceable rule that references that library by name.
Step 3: Infer architecture from dependency combinations (e.g. next + prisma 鈫?App Router + ORM pattern).

BAD vs GOOD rules (MANDATORY to follow this pattern):
BAD: "Write clean, maintainable code."
GOOD: "Server Components (default) must not import client-side libraries. Fetch data in Server Components, pass as props to client leaves."

BAD: "Use proper error handling."
GOOD: "Wrap every Server Action in try/catch. Return { error: string } for user-facing errors. Log full stack trace with console.error(error)."

BAD: "Validate user input."
GOOD: "Define Zod schemas in lib/schemas/. Import and parse in every route handler and Server Action. Return 400 with Zod error messages on validation failure."

BAD: "Use TypeScript properly."
GOOD: "No 'any' types. Use Zod inference (z.infer<typeof schema>) for all data models. Create type aliases in lib/types.ts for reused types."

The user's package.json:
\`\`\`json
${packageJson}
\`\`\`
`;
  }

  return `Generate ${outputFormatLabel[outputFormat] || ".cursorrules"} for a project using: ${techStack}.
${depAnalysis}
Strictness: ${strictnessMap[strictness] || strictnessMap.moderate}

Required sections (in order). Use ## for section headings. Each section gets 2-4 specific bullet rules.
DO NOT write generic advice like "write clean code" or "use TypeScript." Every rule must reference a SPECIFIC library detected in the package.json.

## Architecture Standards
- Framework-specific structural rules. Name the framework (e.g. "Next.js App Router").

## Data Fetching
- Server/Client boundary rules. Where and how data is fetched. Name specific patterns.

## Validation Rules
- Input validation rules. Name the specific validation library (Zod, Pydantic, etc.).

## Database Conventions
- Database interaction patterns. Name the ORM (Prisma, SQLAlchemy, etc.) and transaction rules.

## AI Coding Constraints
- 3-5 rules that prevent common AI-generated mistakes with this specific stack.

FORMAT: Each rule is a bullet (-). Reference libraries by NAME. Do NOT preface with meta-commentary.
Never write "Use clean code" or "Write maintainable code." Those are not standards 鈥?they are platitudes.`;
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


function parseGeneratedFiles(raw: string): {
  rules: string; memory: string; architecture: string;
  cursorRules: string; claude: string; testingWorkflow: string;
} {
  try {
    const parsed = JSON.parse(raw);
    return {
      rules: parsed.rules || "",
      memory: parsed.memory || "",
      architecture: parsed.architecture || "",
      cursorRules: parsed.cursorRules || "",
      claude: parsed.claude || "",
      testingWorkflow: parsed.testingWorkflow || "",
    };
  } catch {
    // If AI didn't return valid JSON, return raw content as rules
    return {
      rules: raw,
      memory: "",
      architecture: "",
      cursorRules: "",
      claude: "",
      testingWorkflow: "",
    };
  }
}

export {};
