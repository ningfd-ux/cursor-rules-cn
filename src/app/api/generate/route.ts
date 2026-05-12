import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "";
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

export async function POST(request: NextRequest) {
  try {
    const { framework, strictness, model } = await request.json();

    if (!DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { error: "DEEPSEEK_API_KEY environment variable is not set" },
        { status: 500 }
      );
    }

    const systemPrompt = `You are an expert AI coding assistant specialized in creating high-quality .cursorrules files.
Your output must be a valid, production-ready .cursorrules file.
Do NOT include any explanations, markdown formatting, or code blocks.
Output ONLY the raw content of the .cursorrules file.`;

    const userPrompt = `Generate a comprehensive .cursorrules file for the following configuration:

FRAMEWORK: ${framework}
STRICTNESS LEVEL: ${strictness}
AI MODEL OPTIMIZATION: ${model}

Create rules that:
1. Enforce production-ready code quality
2. Are specific to ${framework} best practices
3. Include code style conventions, architecture guidelines, and anti-patterns to avoid
4. Include testing requirements
5. Include performance considerations
6. Be specific enough to actually improve AI output quality

Strictness guidelines:
- "宽松": Basic conventions, focus on readability
- "中等": Full style guide, type safety requirements, testing requirements
- "严格": Enterprise-grade rules, strict type safety, performance requirements, security rules, comprehensive testing

Output ONLY the raw .cursorrules content, no explanations.`;

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("DeepSeek API error:", error);
      return NextResponse.json(
        { error: "Failed to generate rules" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const generatedRules = data.choices[0].message.content.trim();

    return NextResponse.json({ rules: generatedRules });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
