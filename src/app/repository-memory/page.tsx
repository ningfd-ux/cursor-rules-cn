import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Repository Memory for AI Coding Agents",
  description: "How repository memory works for AI coding agents: persistent project context, architecture awareness, and knowledge retention across sessions.",
};

export default function RepositoryMemoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>

      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Repository Memory for AI Coding Agents</h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        Repository memory is what allows AI coding agents to maintain context about your project across sessions — remembering architecture patterns, conventions, and technical decisions.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is repository memory?</h2>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Repository memory is a collection of files (AGENTS.md, CLAUDE.md, .cursor/rules/) that together form a persistent knowledge base
          for AI coding agents. Instead of starting from scratch each session, the AI reads these files and immediately understands:
        </p>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>Project architecture and design decisions</li>
          <li>Code style preferences and conventions</li>
          <li>Common patterns and anti-patterns</li>
          <li>Technical debt and migration notes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Building your repository memory</h2>
        <ol className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li><strong>1. AGENTS.md</strong> — High-level project context and conventions</li>
          <li><strong>2. CLAUDE.md</strong> — Claude-specific behavior and preferences</li>
          <li><strong>3. .cursor/rules/</strong> — Framework-specific coding standards</li>
          <li><strong>4. memory.md</strong> — Migration history, technical debt, architecture decisions</li>
        </ol>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate your repository memory</h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Paste your package.json and get a complete set of repository memory files generated automatically.
        </p>
        <a
          href="https://reporules.dev"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Generate on RepoRules.dev
        </a>
      </section>
    </div>
  );
}
