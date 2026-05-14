import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "How to Write Cursor Rules: The Complete Guide 2026",
  description: "Learn to write .cursorrules and AGENTS.md files from scratch — structure, syntax, and best practices. Includes full templates.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Tutorial</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">How to Write Cursor Rules: The Complete Guide</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">Writing good Cursor Rules is the key to getting AI to produce high-quality code. This article covers everything from basic syntax to advanced techniques.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Basic Structure</h2>
          <p>A .cursorrules file is plain text — use ## to separate sections and - to list rules:</p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap"># Tech Stack
- Next.js 15 with App Router
- TypeScript strict mode
- Tailwind CSS v4

## Component Conventions
- Use function components + Hooks
- Component filenames in PascalCase
- Keep each component under 200 lines</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Core Principles</h2>
          <ul>
            <li><strong>Be specific, not abstract</strong> — "Use TypeScript" is worse than "All files must be .ts/.tsx"</li>
            <li><strong>Tell AI what to do, not just what not to do</strong> — "Prefer Server Components" is better than "Don't use client rendering"</li>
            <li><strong>Organize by tech stack</strong> — Keep React conventions, styling rules, and testing standards in separate sections</li>
            <li><strong>Keep it under 50 lines</strong> — Overly long rules cause AI to ignore parts of them</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Advanced Tips</h2>
          <p>Reference specific file paths in your rules so AI understands the project structure:</p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">## File Structure
- API routes in src/app/api/
- Components in src/components/
- Utilities in src/lib/
- Type definitions in src/types/</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Template Reference</h2>
          <p>Browse our <Link href="/frameworks/react" className="text-blue-600 dark:text-blue-400">React Rules Collection</Link> or use the <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link> to auto-generate your config.</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">Don't Want to Write Manually? One-Click Generate</h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">Choose your tech stack + strictness level, and AI auto-generates a complete config file.</p>
            <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Generate Now →</Link>
          </div>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
