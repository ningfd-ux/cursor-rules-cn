import Link from "next/link";
import type { Metadata } from "next";
import { comparisons } from "@/data/comparisons";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI Coding Tool Comparison",
  description: "Cursor vs Copilot vs Windsurf vs Claude Code 全面对比，帮你选最合适的 AI 编程工具。",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI Coding Tool Comparison</h1>
      <p className="mb-8 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
        Cursor vs GitHub Copilot vs Windsurf vs Claude Code. Full comparison of features, pricing, and experience.
      </p>

      <div className="grid gap-6">
        {comparisons.map((cmp) => (
          <Link
            key={cmp.slug}
            href={`/compare/${cmp.slug}`}
            className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-2xl">{cmp.icon}</span>
              <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {cmp.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{cmp.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cmp.tags.map((t) => (
                <span key={t} className="rounded bg-zinc-50 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                  #{t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}
