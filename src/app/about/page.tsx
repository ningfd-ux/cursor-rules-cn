import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Cursor Rules — Production-ready AI coding standards and AI-powered rule generator.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">About Cursor Rules</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is this?</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Cursor Rules is a curated collection of AI coding standards for Cursor, Claude Code,
          GitHub Copilot, Windsurf, and more. 81 production-tested rules across 40+ tech stacks.
        </p>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Every rule includes usage scenarios and common mistakes — not just generic templates.
          Built for developers who ship production code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why we built this</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          AI coding tools are changing how teams build software. We built this platform
          to curate the best practices — with real context, anti-patterns, and a code generator.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Content sources</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Content is community-contributed covering React, Vue, Next.js, Python, Go, and more.
          Each rule is tagged with tool version compatibility and last update date.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Contact</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Have suggestions or want to contribute? Submit via <a href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">GitHub Issues</a>,
          or visit the <a href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">contact page</a>.
        </p>
      </section>
    </div>
  );
}
