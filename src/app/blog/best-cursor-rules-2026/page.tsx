import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Best Cursor Rules 2026: Top 10 AI Coding Rules Worth Using",
  description: "The 10 most practical Cursor Rules for 2026, covering React, Next.js, Vue, Python, and TypeScript. Ready to copy and use.",
};

export default function PostPage() {
  const topRules = [
    { slug: "cursor-react-rules", name: "React Project Rules", why: "Most used, covering components/Hooks/styles end to end" },
    { slug: "cursor-nextjs-rules", name: "Next.js Project Rules", why: "Server Component conventions for App Router" },
    { slug: "cursor-typescript-rules", name: "TypeScript Strict Mode Rules", why: "Eliminate `any`, boost code reliability" },
    { slug: "cursor-vue-rules", name: "Vue 3 Rules", why: "Composition API + Pinia best practices" },
    { slug: "cursor-python-rules", name: "Python Dev Rules", why: "PEP 8 + FastAPI, all in one" },
    { slug: "cursor-testing-rules", name: "Testing Rules", why: "Complete spec for AI-assisted unit testing" },
    { slug: "cursor-api-rules", name: "API Dev Rules", why: "Standard template for RESTful API development" },
    { slug: "cursor-docker-rules", name: "Docker Rules", why: "Multi-stage builds + security best practices" },
    { slug: "cursor-tailwind-rules", name: "Tailwind CSS Rules", why: "CSS conventions + responsive design guide" },
    { slug: "cursor-saas-rules", name: "SaaS Project Rules", why: "Full-stack dev standards for startup teams" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Featured</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Ranking</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Best Cursor Rules 2026: Top 10 AI Coding Rules Worth Using</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">The 10 most practical rules, hand-picked from 81. Each includes use cases and common pitfalls — copy and use immediately.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Top 10 Rules</h2>

          <div className="space-y-4 not-prose">
            {topRules.map((rule, i) => (
              <Link
                key={rule.slug}
                href={`/rules/${rule.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">{rule.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{rule.why}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Quick-Start Option</h2>
          <p>Don't want to pick one by one? Use the <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link> — paste your repo URL and get all the configs you need in one shot.</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">More Recommendations</h3>
            <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li><Link href="/frameworks/react" className="hover:underline">→ All React Rules</Link></li>
              <li><Link href="/compare" className="hover:underline">→ Cursor vs Other AI Tools</Link></li>
            </ul>
          </div>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "build-saas-with-cursor-7-days", title: "7 Days From Zero to Launch", excerpt: "Complete build log of this site" },
          { slug: "ai-coding-workflow-beginners", title: "AI Coding Workflow for Beginners", excerpt: "Get started with Cursor from scratch" },
        ]}
      />
      <BackToTop />
    </div>
  );
}
