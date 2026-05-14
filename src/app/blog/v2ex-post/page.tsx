import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "How I Built an AI Coding Standards Site in 7 Days for $7",
  description: "Complete build story: from buying a domain to launching 108 pages. Total cost: $7.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Share</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Chinese Community</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">How I Built an AI Coding Standards Site in 7 Days for $7</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">The problem: every new Cursor project needs fresh .cursorrules config, and finding good ones takes time. So I built one with an AI generator.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">What did it cost?</h2>
          <ul>
            <li>Domain (cursorrules.fun): $7 (Spaceship)</li>
            <li>Hosting: $0 (Cloudflare Pages free tier)</li>
            <li>API: $0/month (DeepSeek free tier)</li>
            <li>Dev tools: $0 (Cursor + Claude Code)</li>
          </ul>
          <p><strong>Total cost: $7. One-time.</strong></p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">What was built?</h2>
          <ul>
            <li><strong>81  rules, 108 pages</strong> — All SSG-rendered. Search engines can index directly with zero JS.</li>
            <li><strong>AI Rule Generator</strong> — Paste a GitHub repo URL. AI analyzes package.json and generates config in .cursorrules, AGENTS.md, CLAUDE.md, and copilot-instructions.md formats with download support.</li>
            <li><strong>Cross-linked + Schema markup</strong> — 14 core rules form a Topic Cluster with Article, Website, and SearchAction schemas.</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Tech Stack</h2>
          <ul>
            <li>Next.js 16 (Static Export, zero server)</li>
            <li>Tailwind CSS 4 + Cloudflare Pages + Cloudflare Functions</li>
            <li>Generator uses DeepSeek API</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Lessons learned</h2>
          <ul>
            <li>TS template literals vs Markdown backticks conflict - solved with tildes after a dozen tries</li>
            <li>Windows EBUSY lock on out dir - doesn't affect Cloudflare build</li>
            <li>New site SEO takes 2-4 weeks before search data appears</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Open source & links</h2>
          <p>🏠 <Link href="/" className="text-blue-600 dark:text-blue-400">cursorrules.fun</Link></p>
          <p>🎛️ <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Rule Generator</Link></p>
          <p>💻 <a href="https://github.com/ningfd-ux/cursor-rules-cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub Repository</a> (⭐ welcome)</p>
          <p>Feedback welcome 🚀</p>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "build-saas-with-cursor-7-days", title: "7 Days from 0 to Launch", excerpt: "Complete build log with all prompts" },
          { slug: "cursor-rules-vs-agents-md", title: "Format Comparison", excerpt: ".cursorrules vs AGENTS.md — which to use" },
        ]}
      />
      <BackToTop />
    </div>
  );
}
