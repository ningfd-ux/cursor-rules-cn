import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "AI Coding Workflow Guide 2026: Get Started with Cursor From Scratch",
  description: "For coding beginners and developers looking to boost productivity — a complete workflow from installing Cursor to shipping production-ready code.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>

      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Beginner</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Workflow</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI Coding Workflow Guide 2026</h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">New to AI coding tools? Not sure where to start? This article helps you build a complete workflow — from setup and configuration to daily development and deployment.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Step 1: Choose Your Tool</h2>
          <p>There are four major AI coding tools in 2026:</p>
          <ul>
            <li><strong>Cursor</strong> — AI-native IDE, best for daily development. Agent mode supports multi-file editing and terminal ops.</li>
            <li><strong>Claude Code</strong> — CLI tool, ideal for CI/CD and automation tasks.</li>
            <li><strong>GitHub Copilot</strong> — VS Code extension, great for teams already comfortable with their IDE.</li>
            <li><strong>Windsurf</strong> — AI IDE with a solid Cascade feature, priced lower than Cursor.</li>
          </ul>
          <p>Beginners should <Link href="/compare/cursor-vs-copilot" className="text-blue-600 dark:text-blue-400">start with Cursor</Link> — the lowest learning curve and most complete feature set.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Step 2: Configure Rules</h2>
          <p>Once Cursor is installed, the most important thing is configuring your .cursorrules file. This file tells AI your tech stack, coding style, and project conventions.</p>
          <p>You don't need to write it by hand. Open our <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Rule Generator</Link>, pick your tech stack, and AI auto-generates a complete config file. Download it and drop it in your project root.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Step 3: Daily Development Workflow</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 not-prose dark:border-zinc-700 dark:bg-zinc-800/50">
            <ol className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><strong>1. Open your project in Cursor</strong> — AI auto-reads .cursorrules</li>
              <li><strong>2. Press Ctrl+K to open AI chat</strong> — Describe what you want in natural language</li>
              <li><strong>3. AI generates code</strong> — Review the diff, accept once verified</li>
              <li><strong>4. Press Ctrl+Enter to run tests</strong> — Make sure nothing is broken</li>
              <li><strong>5. Commit your code</strong> — AI helps write the commit message</li>
            </ol>
          </div>
          <p>This workflow looks simple, but step one is critical — without a good .cursorrules file, AI output quality is a roll of the dice.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Step 4: Avoid Common Pitfalls</h2>
          <ul>
            <li><strong>Don't ask AI to do too much at once</strong> — Break work into small tasks and tackle them one by one</li>
            <li><strong>Always review AI-generated code</strong> — AI can produce code that looks correct but has real bugs</li>
            <li><strong>Keep your rules file up to date</strong> — As your project evolves, your rules should too</li>
            <li><strong>Don't rely 100% on AI</strong> — Understand the code logic. AI is your accelerator, not your replacement</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Next Steps</h2>
          <ul>
            <li><Link href="/frameworks/react" className="text-blue-600 dark:text-blue-400">Browse React Project Rules</Link> — Check out ready-to-use config examples</li>
            <li><Link href="/compare" className="text-blue-600 dark:text-blue-400">Tool Comparison</Link> — Understand the pros and cons of different AI coding tools</li>
            <li><Link href="/generator" className="text-blue-600 dark:text-blue-400">Generate Your First Rules File with the Generator</Link></li>
          </ul>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
