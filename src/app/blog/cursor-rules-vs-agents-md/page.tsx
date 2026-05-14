import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: ".cursorrules vs AGENTS.md vs CLAUDE.md: Which One Should You Use?",
  description: "A comparison of three AI coding config file formats — their use cases and best practices. Cursor old vs new format, Claude Code, and Copilot — how to choose?",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>

      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Format Comparison</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">.cursorrules vs AGENTS.md vs CLAUDE.md: Which One Should You Use?</h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">AI coding config formats keep multiplying, but most developers still don't know how they differ. This article clears it all up.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Core Differences Between the Three Formats</h2>

          <div className="overflow-auto rounded-lg border border-zinc-200 not-prose dark:border-zinc-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800">
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Feature</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">.cursorrules</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">AGENTS.md</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">CLAUDE.md</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {[
                  ["Tool", "Cursor", "Cursor (new)", "Claude Code"],
                  ["Format", "Plain text", "Markdown", "Markdown"],
                  ["Location", "Project root", ".cursor/rules/*.mdc", "Project root"],
                  ["Scope", "Global", "Glob-matched", "Global"],
                  ["Multiple Files", "Not supported", "Supports split files", "Not supported"],
                  ["Loading", "Auto on start", "Matched on demand", "Auto on start"],
                  ["Current Status", "Legacy", "Recommended", "Recommended"],
                ].map((row, i) => (
                  <tr key={i} className="text-zinc-600 dark:text-zinc-400">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 ${j === 0 ? "font-medium text-zinc-800 dark:text-zinc-200" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">When to Use Which?</h2>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">Use .cursorrules (legacy)</h3>
          <p>Your Cursor version hasn't been updated to the latest. Your project is simple and doesn't need per-file-type control. Use as a universal fallback config.</p>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">Use AGENTS.md (recommended)</h3>
          <p>Your project has multiple file types and needs granular control. You want to split rules by tech stack. You want to use Cursor's latest Project Rules feature. This is Cursor's current officially recommended format.</p>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">Use CLAUDE.md</h3>
          <p>Your primary tool is the Claude Code CLI. You need conversational instructions rather than rule files. You want Claude to automatically understand your project context.</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">Generate All Formats With One Click</h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">No need to agonize over the choice — the AI Rule Generator supports all 4 output formats. Just pick one.</p>
            <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Generate Now →</Link>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Future Trends</h2>
          <p>Cursor is deprecating .cursorrules in favor of the .cursor/rules/*.mdc split-file pattern. If you're starting a new project, go straight to AGENTS.md format — no migration needed later.</p>
          <p>Meanwhile, Claude Code is pushing CLAUDE.md toward becoming an industry standard — similar to .cursorrules but more conversational than a rule list.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Our Recommendation</h2>
          <p><strong>New projects:</strong> Use AGENTS.md (Cursor new format) or CLAUDE.md (Claude Code) directly.</p>
          <p><strong>Existing projects:</strong> Keep .cursorrules as-is and gradually migrate to the new format.</p>
          <p><strong>Universal solution:</strong> Use our <Link href="/generator" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">AI Rule Generator</Link> to produce whatever format you need in one go.</p>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
