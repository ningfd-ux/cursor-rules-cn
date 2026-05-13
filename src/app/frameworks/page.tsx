import Link from "next/link";
import type { Metadata } from "next";
import { frameworks } from "@/data/frameworks";
import { rules } from "@/data/rules";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Framework Standards Collection",
  description: "Cursor Rules organized by tech stack. Best AI coding standards for React, Next.js, Vue, Python, Go, and more.",
};

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Framework Standards</h1>
      <p className="mb-8 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
        AI coding standards organized by framework.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {frameworks.map((fw) => {
          const fwRules = rules.filter((r) =>
            fw.tags.some((t) => r.tags.includes(t) || r.category === fw.slug)
          );
          return (
            <Link
              key={fw.slug}
              href={`/frameworks/${fw.slug}`}
              className={`group rounded-xl border ${fw.border} ${fw.color} p-6 transition-all hover:shadow-md`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{fw.icon}</span>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {fw.name}
                  </h2>
                  <p className="text-sm text-zinc-400">{fwRules.length}  standards</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {fw.description}
              </p>
            </Link>
          );
        })}
      </div>
      <BackToTop />
    </div>
  );
}
