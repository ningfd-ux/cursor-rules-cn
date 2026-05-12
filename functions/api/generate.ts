// Cloudflare Pages Function: POST /api/generate
// Handles AI rule generation via DeepSeek API

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
    };

    const prompt = buildPrompt(body.techStack, body.strictness, body.model);

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
            content:
              "You are an expert software engineer who writes .cursorrules files. " +
              "Output ONLY the .cursorrules content. No explanations, no markdown code blocks outside the rules file. " +
              "Use clear sections with ## headers. Each section should have bullet points.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 1500,
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

function buildPrompt(techStack: string, strictness: string, model: string): string {
  const strictnessMap: Record<string, string> = {
    relaxed: "suggest best practices, allow some flexibility",
    moderate: "enforce conventions, warn on violations",
    strict: "enforce all rules strictly, no exceptions",
  };

  const modelMap: Record<string, string> = {
    cursor: "optimized for Cursor IDE. Use .cursorrules format.",
    claude: "optimized for Claude Code CLI. Focus on conversation-style instructions.",
    copilot: "optimized for GitHub Copilot. Use copilot-instructions.md format.",
    general: "use general AI coding assistant format.",
  };

  return `Generate a .cursorrules file for a project using: ${techStack}.

Strictness level: ${strictnessMap[strictness] || strictnessMap.moderate}
Model optimization: ${modelMap[model] || modelMap.general}

Include these sections:
1. Technology Stack (specify versions and tools)
2. Code Style (naming, formatting, conventions)
3. Architecture Constraints (file structure, component limits, patterns)
4. Error Handling (approach and patterns)
5. Security Rules (input validation, auth, data handling)
6. Common Patterns (code patterns to use, not just avoid)
7. Anti-Patterns (what NOT to do)

Make it practical and action-oriented. Each rule should be specific, not generic advice.`;
}
