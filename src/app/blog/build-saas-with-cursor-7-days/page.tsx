import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";
import SidebarComments from "@/components/SidebarComments";

export const metadata: Metadata = {
  title: "7 Days from 0 to Launch: Building a Standards Site with Cursor + Claude Code",
  description: "Complete build log of cursorrules.fun. All prompts, standards, and AI workflows shared openly.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to blog
      </Link>

      <article className="prose max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span>
            <span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Build Log</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            7 Days from 0 to Launch: Building a Standards Site with Cursor + Claude Code
          </h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">
            7 days. From buying a domain to launching 108 pages, 81 standards, and an AI Generator. Complete build log with all prompts and configs.
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Why build this</h2>
          <p>I've been coding in Cursor for half a year. Cursor is powerful, but by default the AI generates code that doesn't match project conventions. The fix is a standards file — but every new project needs one from scratch.</p>
          <p>So I decided: build a site that collects standards and adds a generator. Developers pick their stack and get a ready-to-use file. Domain: $7. Hosting: $0.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Tech Stack</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
            <ul className="space-y-1 text-sm">
              <li>Framework: Next.js 16 (Static Export)</li>
              <li>Styling: Tailwind CSS 4</li>
              <li>Hosting: Cloudflare Pages (free)</li>
              <li>API: Cloudflare Pages Functions</li>
              <li>AI Model: DeepSeek (Generator)</li>
              <li>Domain: cursorrules.fun ($7, Spaceship)</li>
              <li>Version Control: GitHub</li>
            </ul>
          </div>
          <p>Fully static export, zero server cost. Generator runs on Cloudflare Functions, pay-per-invocation, currently $0/month.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 1-2: Infrastructure</h2>
          <ul>
            <li>Buy domain, configure DNS to Cloudflare</li>
            <li>Scaffold Next.js project with Tailwind</li>
            <li>Build base layout (Header + Footer + homepage skeleton)</li>
            <li>Write first 18 coding standards as data files</li>
          </ul>
          <p>Key decision: use <code>output: "export"</code> for static export. Cloudflare Pages serves pure static — fast, free tier is generous. Trade-off: later needed Pages Functions for the API.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 3-4: Content pipeline</h2>
          <p>The critical phase. My content generation prompt:</p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">// Prompt for each standard</p>
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">Generate a coding standard for a [framework] project.
Include: code style, architecture constraints,
error handling patterns, common anti-patterns.
Format: ## sections, bullet rules. ~30-40 lines.</pre>
          </div>
          <p>Each standard got manually-added "Use Cases" and "Common Mistakes" sections. Users don't just see instructions — they understand when and how to apply them. From 18 to 81 standards, powered by this pipeline. A Python script handled batch insertion.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 5-6: AI Standards Generator</h2>
          <p>Halfway through the library, I realized: users won't browse each time. What they want: input their stack, get custom standards in one click.</p>
          <ul>
            <li>Frontend: select tech stack + strictness + output format</li>
            <li>Cloudflare Function calls DeepSeek API</li>
            <li>4 output formats: .cursor/rules, AGENTS.md, copilot-instructions.md, .cursorrules</li>
            <li>GitHub repo import with auto package.json analysis</li>
          </ul>
          <p>This is the most product-like feature. Users paste their GitHub repo URL, AI analyzes dependencies, and generates custom standards.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 7: SEO infrastructure</h2>
          <ul>
            <li>sitemap.xml + robots.txt + RSS Feed</li>
            <li>GA4 + Google Search Console</li>
            <li>Article + Website Schema (JSON-LD)</li>
            <li>Cross-linked internal links (Topic Cluster structure)</li>
            <li>Framework hub pages (React / Next.js / Vue / Python / Go)</li>
            <li>Comparison pages (Cursor vs Copilot vs Windsurf vs Claude Code)</li>
          </ul>
          <p>All statically generated, indexable by search engines with no JS required.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">By the numbers</h2>
          <div className="grid grid-cols-2 gap-4 not-prose sm:grid-cols-4">
            {[
              ["81", "standards"],
              ["108", "static pages"],
              ["7", "days to build"],
              ["$7", "total cost"],
            ].map(([num, label]) => (
              <div key={num} className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-700 dark:bg-zinc-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{num}</div>
                <div className="text-xs text-zinc-400">{label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Pitfalls</h2>
          <ul>
            <li><strong>Template literal conflict:</strong> TypeScript template literals clash with Markdown backticks. Solved with <code>~~~</code> for code blocks.</li>
            <li><strong>Windows EBUSY:</strong> Local build hangs on <code>out/</code> cleanup. Doesn't affect Cloudflare deployment.</li>
            <li><strong>GSC indexing delay:</strong> New sites need 2-4 weeks before search data appears. Be patient.</li>
            <li><strong>Domain TLD:</strong> .fun isn't ideal for dev tools. Considering .dev for the future.</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">The biggest lesson</h2>
          <p>I thought the value was in "the content". After finishing, the real value is the <strong>workflow</strong> — using AI tools to produce content efficiently, building SEO assets, and creating a product that accumulates authority.</p>
          <p>Standards themselves have no moat — anyone can copy them. But domain authority, Google indexing, cross-linking, user trust — these accumulate through time and can't be copied.</p>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "cursor-rules-vs-agents-md", title: ".cursorrules vs AGENTS.md", excerpt: "Which format to use for your project" },
          { slug: "ai-coding-workflow-beginners", title: "AI Coding Workflow Guide", excerpt: "Getting started with AI-assisted development" },
        ]}
        prev={{ slug: "build-saas-with-cursor-7-days", title: "7 Days from 0 to Launch" }}
      />
      <BackToTop />
      <SidebarComments page="build-saas-with-cursor-7-days" />
    </div>
  );
}
