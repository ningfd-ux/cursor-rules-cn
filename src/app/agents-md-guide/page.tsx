import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AGENTS.md Works in AI Coding Repositories",
  description: "A guide to AGENTS.md: what it is, how it works, and how to use it alongside .cursor/rules for AI coding governance.",
};

export default function AgentsMdGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>

      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">How AGENTS.md Works in AI Coding Repositories</h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        AGENTS.md is a repository-level instruction file that defines how AI coding agents should work within your codebase — covering conventions, architecture, and workflow rules.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is AGENTS.md?</h2>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          AGENTS.md sits at the root of your repository and acts as a system prompt for AI coding agents. It describes project conventions,
          architecture decisions, common patterns, and rules the AI must follow. Unlike .cursorrules (which is Cursor-specific), AGENTS.md
          is a more universal format supported by multiple tools including Cursor and Claude Code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">AGENTS.md vs .cursor/rules</h2>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li><strong>AGENTS.md:</strong> Universal format, conversational style, supported by Cursor and Claude Code</li>
          <li><strong>.cursor/rules/*.mdc:</strong> Cursor-specific, per-file-type matching, YAML frontmatter + globs</li>
          <li><strong>Best practice:</strong> Use both — AGENTS.md for project-wide conventions, .cursor/rules for framework-specific patterns</li>
        </ul>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate AGENTS.md automatically</h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Get a complete AGENTS.md file generated from your package.json — with project-specific conventions, architecture rules, and workflow patterns.
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
