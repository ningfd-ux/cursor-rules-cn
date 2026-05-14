import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs — AI Coding Standards",
  description: "What are AI coding standards, repo-aware generation, and why AI-generated code becomes inconsistent.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Documentation</h1>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">What are AI coding standards?</h2>
          <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI coding standards are project-specific instructions that tell AI coding tools (Cursor, Claude Code,
            GitHub Copilot) how to write code in <em>your</em> codebase. They describe conventions for component
            structure, data fetching, error handling, file naming, and architecture — specific to the libraries
            and frameworks you actually use.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Unlike generic style guides, AI coding standards are <strong>enforceable</strong>. A code reviewer
            can answer yes or no whether a pull request follows each rule. They act as a shared contract
            between the human developer and the AI agent.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Repository-aware generation</h2>
          <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            Most AI coding standard generators ask you to select a framework from a dropdown and produce generic
            advice. Repository-aware generation works differently — it <strong>analyzes your actual package.json</strong>,
            detects your stack, and generates rules that reference your specific libraries by name.
          </p>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <strong className="text-zinc-900 dark:text-zinc-100">Example:</strong> Generic generators tell you to
              &ldquo;validate user input.&rdquo; Repository-aware generation tells you to &ldquo;define Zod schemas in
              <code className="mx-1 rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">lib/schemas/</code>
              and import them in every route handler and Server Action, returning 400 with Zod error messages on
              validation failure.&rdquo;
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why AI-generated code becomes inconsistent</h2>
          <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI coding tools are powerful but they lack <strong>persistent memory</strong> across sessions.
            Each generation starts fresh, with no awareness of conventions established in previous sessions.
            Over time, the codebase accumulates:
          </p>
          <ul className="mb-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li><strong>Architecture drift</strong> — Each AI session may choose a different layering pattern.</li>
            <li><strong>Validation gaps</strong> — AI often skips input validation unless explicitly instructed.</li>
            <li><strong>Transaction inconsistencies</strong> — Multi-step writes lack atomicity without explicit guidance.</li>
            <li><strong>File structure entropy</strong> — New files land in different directories depending on the session.</li>
            <li><strong>Client/server boundary violations</strong> — Server-side code sneaks into client bundles.</li>
          </ul>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI coding standards prevent this by giving every AI session the <strong>same starting context</strong>.
            The result is a codebase that stays consistent regardless of how many sessions or which tool generated the code.
          </p>
        </section>
      </div>

      <section className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate standards for your repo</h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Paste your package.json. AI detects your stack and generates project-specific standards.
        </p>
        <Link
          href="/generator"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go to Generator
        </Link>
      </section>
    </div>
  );
}
