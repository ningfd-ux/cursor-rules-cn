import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Migrate from .cursorrules to .cursor/rules",
  description: "Complete guide to migrating from legacy .cursorrules to modern .cursor/rules/*.mdc format with Cursor Project Rules.",
};

export default function MigrateToMdcPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>

      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">How to Migrate from .cursorrules to .cursor/rules</h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        Cursor has deprecated the legacy .cursorrules file format. The new system uses .cursor/rules/*.mdc files with per-file-type rule matching and globs.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why migrate?</h2>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>.cursorrules is a single global file — too broad for modern projects</li>
          <li>.cursor/rules/*.mdc supports per-file-type matching via globs</li>
          <li>Split rules by concern: architecture, testing, styling, database</li>
          <li>Cursor officially recommends .cursor/rules for all new projects</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Migration steps</h2>
        <ol className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <li><strong>1. Create the rules directory:</strong> <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">mkdir .cursor/rules/</code></li>
          <li><strong>2. Split your .cursorrules</strong> into multiple .mdc files by concern</li>
          <li><strong>3. Add YAML frontmatter</strong> with title, description, and globs patterns</li>
          <li><strong>4. Delete</strong> the legacy .cursorrules file</li>
        </ol>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate .mdc rules automatically</h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Paste your package.json and get modern .cursor/rules/*.mdc files instantly.
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
