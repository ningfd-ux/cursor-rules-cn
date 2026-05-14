import Link from "next/link";
import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI Coding Workflow — Tutorials & Real-World Cases",
  description: "Practical experience and tutorials for building real projects with Cursor, Claude Code, and AI coding agents.",
};

const posts = [
  {
    slug: "build-saas-with-cursor-7-days",
    title: "7 Days from 0 to Launch: Building a Standards Site with Cursor + Claude Code",
    excerpt: "Complete build log of cursorrules.fun — every prompt, standard, and workflow revealed.",
    date: "2026-05-12",
    tags: ["Cursor", "Claude Code", "Build Log"],
    featured: true,
  },
  {
    slug: "cursor-rules-vs-agents-md",
    title: ".cursorrules vs AGENTS.md vs CLAUDE.md — Which One Should You Use?",
    excerpt: "Complete comparison of three AI coding config formats: use cases, trade-offs, and recommendations.",
    date: "2026-05-12",
    tags: ["Cursor", "Comparison", "Guide"],
  },
  {
    slug: "how-to-write-cursor-rules",
    title: "How to Write AI Coding Standards: Complete Guide",
    excerpt: "Learn to write .cursor/rules, AGENTS.md — structure, syntax, and best practices. Includes templates.",
    date: "2026-05-12",
    tags: ["Guide", "Cursor", "Standards"],
  },
  {
    slug: "cursor-typescript-setup",
    title: "TypeScript Standards for AI Coding: Strict Mode Done Right",
    excerpt: "Complete TypeScript coding standards for AI tools. Type safety, error handling, and strict mode.",
    date: "2026-05-12",
    tags: ["TypeScript", "Config", "Guide"],
  },
  {
    slug: "ai-coding-workflow-beginners",
    title: "AI Coding Workflow Guide 2026: Start from Zero with Cursor",
    excerpt: "A complete workflow for beginners: from installing Cursor to shipping your first production-ready code.",
    date: "2026-05-12",
    tags: ["Beginner", "Workflow", "Tutorial"],
  },
  {
    slug: "best-cursor-rules-2026",
    title: "Best Cursor Rules 2026: The 10 Most Valuable Coding Rules",
    excerpt: "The 10 most practical rules for 2026, covering React, Next.js, Vue, and Python — ready to use.",
    date: "2026-05-12",
    tags: ["Curated", "Ranked", "2026"],
  },
  {
    slug: "cursor-agent-mode-workflow",
    title: "Cursor Agent Mode in Action: Ship 20 Rules in a Single Day",
    excerpt: "How to batch-generate high-quality coding rules with Cursor Agent — a real case of 10x productivity gains.",
    date: "2026-05-12",
    tags: ["Agent", "Cursor", "Productivity"],
  },
  {
    slug: "v2ex-post",
    title: "How I Built an AI Coding Rules Site in 7 Days with Cursor — Total Cost $7",
    excerpt: "Full build story: from buying a domain to launching 108 static pages on Cloudflare for $7.",
    date: "2026-05-12",
    tags: ["Story", "Build Log", "Experience"],
  },
  {
    slug: "show-hn-launch",
    title: "Show HN: I Built an AI Coding Rules Platform in 7 Days for $0",
    excerpt: "A technical write-up for the global dev community. Total cost $7, fully static, zero servers.",
    date: "2026-05-12",
    tags: ["Show HN", "Launch", "English"],
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>

      <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Blog</h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        Real-world build logs, workflow tutorials, and AI coding guides.
      </p>

      {/* Featured Article - Hero Style */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-8 block rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 transition-all hover:shadow-lg dark:border-blue-800 dark:from-blue-950 dark:to-zinc-900"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">🔥 Featured</span>
            <span className="text-xs text-zinc-400">{featured.date}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {featured.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">{featured.excerpt}</p>
          <div className="flex gap-2">
            {featured.tags.map((t) => (
              <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">#{t}</span>
            ))}
          </div>
          <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">Read article →</div>
        </Link>
      )}

      {/* Rest of articles - Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
          >
            <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
              <span>{post.date}</span>
              {post.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded bg-zinc-50 px-1.5 py-0.5 dark:bg-zinc-800 dark:text-zinc-500">{t}</span>
              ))}
            </div>
            <h2 className="mb-2 text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}
