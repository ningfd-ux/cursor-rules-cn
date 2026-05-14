import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Show HN: I built an AI coding rules platform — 0 dollars, 7 days, 81 rules",
  description: "A Show HN style post about building cursorrules.fun from scratch with Next.js + Cloudflare Pages.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Show HN</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Launch</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Show HN: I Built an AI Coding Rules Platform in 7 Days for $0</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">Hi HN. I built cursorrules.fun in 7 days. Total cost: $7 (domain). Everything else: free.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">What I Built</h2>
          <p>cursorrules.fun is an AI coding context platform. It has three parts:</p>
          <ul>
            <li><strong>Rule Library:</strong> 81 curated AI coding rules covering 40+ tech stacks. Every rule includes usage scenarios and "never do this" anti-patterns.</li>
            <li><strong>AI Generator:</strong> Paste a GitHub repo URL, the AI analyzes your package.json and generates complete coding config files in 4 formats (.cursorrules / AGENTS.md / CLAUDE.md / copilot-instructions.md).</li>
            <li><strong>Blog:</strong> Real-world dev workflows, not AI-generated SEO spam.</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Tech Stack (all free)</h2>
          <ul>
            <li>Next.js 16 (Static Export) + Tailwind CSS 4</li>
            <li>Cloudflare Pages (unlimited free hosting)</li>
            <li>Cloudflare Functions (Generator API)</li>
            <li>DeepSeek API (cost: pennies per generation)</li>
          </ul>
          <p>No database. No server. No monthly bill.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Why I Built This</h2>
          <p>I noticed a pattern: every time I set up a new project with Cursor, I wasted 30 minutes rewriting .cursorrules from scratch. The existing sites were either too generic or too scattered. I wanted one place where I could find <em>or generate</em> the right rules in 30 seconds.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Lessons Learned</h2>
          <ul>
            <li>AI-generated content alone doesn't rank. Every rule on the site has human-written "When to use" and "Common mistakes" sections.</li>
            <li>Static sites are powerful. 108 pages, all SSG, zero hosting cost.</li>
            <li>Build the tool, not just the list. The Generator is the real differentiator.</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Try It</h2>
          <p><Link href="/" className="text-blue-600 dark:text-blue-400">cursorrules.fun</Link> — <Link href="/generator" className="text-blue-600 dark:text-blue-400">Generator</Link> — <Link href="https://github.com/ningfd-ux/cursor-rules-cn" className="text-blue-600 dark:text-blue-400">GitHub</Link></p>
          <p>Feedback welcome. What would make this useful for your workflow?</p>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "build-saas-with-cursor-7-days", title: "7 Days from 0 to Launch", excerpt: "Complete build log of this site" },
          { slug: "how-to-write-cursor-rules", title: "How to Write AI Coding Standards", excerpt: "Complete guide with templates" },
        ]}
      />
      <BackToTop />
    </div>
  );
}
