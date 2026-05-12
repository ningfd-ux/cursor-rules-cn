// Cloudflare Pages Function: POST /api/generate
// Handles AI rule generation via DeepSeek API
// Supports: .cursorrules, .cursor/rules/*.mdc, AGENTS.md, copilot-instructions.md

interface Env {
  DEEPSEEK_API_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.DEEPSEEK_API_KEY) {
    return Response.json(
      { error: "API Key not configured" },
      { status: 500 }
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

    // Resolve package.json: use provided text, or fetch from GitHub repo
    let resolvedPackageJson = body.packageJson || "";
    if (body.repoUrl && body.repoUrl.trim().length > 0) {
      try {
        const fetched = await fetchPackageJsonFromRepo(body.repoUrl.trim());
        if (fetched) {
          resolvedPackageJson = fetched;
        }
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

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: getSystemPrompt(body.outputFormat || "cursorrules"),
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 2500,
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
    return Response.json({ content: ruleContent });
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
        "Output ONLY the .cursorrules content. No explanations, no markdown code blocks outside the rules file. " +
        "Use clear sections with ## headers. Each section should have bullet points. " +
        "Start with a ## Detected Architecture section that summarizes what this project looks like based on its dependencies. " +
        "Make every rule practical and specific to the actual libraries detected, not generic advice."
      );
    case "mdc":
      return (
        "You are an expert software engineer who writes .cursor/rules/*.mdc files for Cursor IDE. " +
        "Each rule file should be a separate .mdc file with YAML frontmatter (title, description, globs). " +
        "Output a single consolidated rules page with each rule as a separate .mdc block. " +
        "Use the format:\n" +
        "---\ntitle: Rule Name\ndescription: What this rule enforces\nglobs: **/*.{ts,tsx}\n---\n\n# Rule\n\nRule description and enforcement details.\n" +
        "Start with a ## Detected Architecture section summarizing the project. " +
        "Make each rule practical and specific to actual libraries detected."
      );
    case "agents":
      return (
        "You are an expert software engineer who writes AGENTS.md files for Claude Code CLI. " +
        "Output ONLY the AGENTS.md content. No explanations, no extra markdown. " +
        "Use clear sections with ## headers. Focus on conversational instructions that Claude can follow. " +
        "Start with a ## Detected Architecture section that summarizes the project. " +
        "Make every instruction practical and specific to actual libraries detected."
      );
    case "copilot":
      return (
        "You are an expert software engineer who writes .github/copilot-instructions.md files for GitHub Copilot. " +
        "Output ONLY the copilot-instructions.md content. No explanations, no extra markdown. " +
        "Use clear sections with ## headers. Focus on inline completion patterns and conventions. " +
        "Start with a ## Detected Architecture section that summarizes the project. " +
        "Make every instruction practical and specific to actual libraries detected."
      );
    default:
      return (
        "You are an expert software engineer who writes AI coding standards and rules files. " +
        "Output ONLY the rules content. No explanations. " +
        "Start with a ## Detected Architecture section that summarizes the project. " +
        "Make every rule practical and specific to actual libraries detected."
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

  const modelMap: Record<string, string> = {
    cursor: "optimized for Cursor IDE",
    claude: "optimized for Claude Code CLI",
    copilot: "optimized for GitHub Copilot",
    general: "general AI coding assistant",
  };

  let depAnalysis = "";
  if (packageJson && packageJson.trim().length > 0) {
    depAnalysis = `
The user has provided their package.json content below. Analyze ALL dependencies and devDependencies to:
1. Detect the framework (Next.js, React, Vue, etc.)
2. Detect the styling solution (Tailwind, CSS Modules, styled-components, etc.)
3. Detect testing tools (Vitest, Jest, Playwright, Cypress, etc.)
4. Detect the ORM/database (Prisma, Drizzle, TypeORM, etc.)
5. Detect auth solution (NextAuth, Clerk, Auth0, etc.)
6. Detect validation tools (Zod, Yup, Joi, etc.)
7. Detect API patterns (tRPC, GraphQL, REST, etc.)
8. Detect monorepo tools (Turborepo, Nx, Lerna, etc.)
9. Detect formatting/linting (ESLint, Prettier, Biome, etc.)
10. Detect build tools (Vite, Webpack, Turbopack, etc.)

Then output rules that are SPECIFIC to these exact libraries. For example:
- If Zod is detected, include Zod validation patterns
- If Prisma is detected, include Prisma schema conventions
- If Tailwind is detected, include Tailwind class ordering rules
- If Next.js App Router is detected, include server component rules

Package.json content:
\`\`\`json
${packageJson}
\`\`\`
`;
  }

  const outputFormatLabel: Record<string, string> = {
    cursorrules: ".cursorrules file format (for Cursor IDE)",
    mdc: ".cursor/rules/*.mdc format (for new Cursor IDE)",
    agents: "AGENTS.md format (for Claude Code CLI)",
    copilot: ".github/copilot-instructions.md format (for GitHub Copilot)",
  };

  return `Generate ${
    outputFormatLabel[outputFormat] || ".cursorrules"
  } for a project using: ${techStack}.
${depAnalysis}
Strictness level: ${strictnessMap[strictness] || strictnessMap.moderate}
Target tool: ${modelMap[model] || modelMap.general}

IMPORTANT: Start your output with a ## Detected Architecture section that lists what you detected from the project (tech stack, patterns, structure). Make it feel like the tool truly understands the project.

Then include these sections:
1. Technology Stack (specify versions, exact tools, and libraries detected)
2. Code Style (naming, formatting, conventions — specific to detected libraries)
3. Architecture Constraints (file structure, component limits, patterns — specific to detected framework)
4. Error Handling (approach and patterns specific to detected tools)
5. Security Rules (input validation, auth, data handling — specific to detected stack)
6. Common Patterns (code patterns to use, drawing from the actual project structure)
7. Anti-Patterns (what NOT to do — specific to detected libraries and their common pitfalls)

Make it extremely practical and action-oriented. Each rule must be specific to the exact libraries and versions detected. Avoid generic advice like "use TypeScript" or "write clean code" — instead say things like "Prefer Server Components in App Router" or "Validate all API inputs with Zod" or "Use Prisma's createMany for bulk inserts".`;
}

// Fetch package.json from a public GitHub repository
async function fetchPackageJsonFromRepo(repoUrl: string): Promise<string | null> {
  // Normalize GitHub URL to raw.githubusercontent.com URL
  let rawUrl = "";

  // Pattern: https://github.com/user/repo
  const githubMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/\s?#]+)/);
  if (!githubMatch) return null;

  const user = githubMatch[1];
  const repo = githubMatch[2].replace(/\.git$/, "");

  // Check if a specific branch is in the URL
  const branchMatch = repoUrl.match(/\/tree\/([^\/\s?#]+)/);
  const branch = branchMatch ? branchMatch[1] : "main";

  rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/package.json`;

  const response = await fetch(rawUrl);
  if (!response.ok) {
    // Try "master" branch if "main" fails
    if (branch === "main") {
      const fallbackUrl = `https://raw.githubusercontent.com/${user}/${repo}/master/package.json`;
      const fallbackResponse = await fetch(fallbackUrl);
      if (!fallbackResponse.ok) return null;
      return await fallbackResponse.text();
    }
    return null;
  }

  return await response.text();
}

export {};
