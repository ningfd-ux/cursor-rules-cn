import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import { rules, categories } from "@/data/rules";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          Repository-aware · Not template-based · Engineering-first
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Make AI-generated code <span className="text-blue-600">maintainable</span>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          Paste your repo. Get project-specific coding standards based on your actual
          dependencies — not generic advice. Works with Cursor, Claude Code, Copilot and AI agents.
        </p>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate from your repo
          </Link>
          <a
            href="/compare"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Compare AI tools
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["🎯", rules.length, "repository-aware rules"],
          ["📄", "111", "static pages"],
          ["📦", "4", "output formats"],
          ["⚡", `${categories.length}`, "tech stacks covered"],
        ].map(([icon, num, label]) => (
          <div key={label as string} className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-2xl">{icon}</div>
            <div className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{num}</div>
            <div className="text-xs text-zinc-400">{label}</div>
          </div>
        ))}
      </div>

      {/* See it in action */}
      <section className="mb-10">
        <div className="mb-5 flex items-center justify-center gap-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">See it in action</h2>
          <Link href="/examples" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400">
            More examples →
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-0 sm:grid-cols-3">
            <div className="border-b border-zinc-100 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:border-b-0 sm:border-r">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Input</p>
              <p className="mb-2 text-xs text-zinc-500">Your package.json</p>
              <pre className="overflow-x-auto rounded bg-zinc-100 px-3 py-2 font-mono text-[11px] leading-relaxed text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{`{
  "next": "^15.0",
  "react": "^19.0",
  "tailwindcss": "^4.0",
  "prisma": "^6.0",
  "zod": "^3.23"
}`}</pre>
            </div>
            <div className="border-b border-zinc-100 p-6 dark:border-zinc-800 sm:border-b-0 sm:border-r">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Detected</p>
              <p className="mb-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">Next.js 15 · React 19 · Tailwind v4 · Prisma · Zod</p>
              <ul className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                <li>- App Router with Server Components</li>
                <li>- ORM: Prisma with PostgreSQL</li>
                <li>- Validation: Zod schemas</li>
                <li>- Styling: Tailwind CSS v4</li>
              </ul>
            </div>
            <div className="p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">Generated Standards</p>
              <ul className="space-y-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                <li><strong className="text-zinc-800 dark:text-zinc-200">Prefer Server Components</strong> by default. Only add &apos;use client&apos; when using hooks or event handlers.</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Never fetch in client components.</strong> Fetch data in Server Components, pass as props.</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Wrap Server Actions in Prisma transactions.</strong> Use interactive transactions for multi-table writes.</li>
                <li><strong className="text-zinc-800 dark:text-zinc-200">Validate all external input with Zod.</strong> Define schemas in lib/schemas/, reuse across routes and actions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Stacks */}
      <section className="mb-10">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-zinc-400">Supported Stacks</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { href: "/frameworks/react", icon: "⚛️", name: "React" },
            { href: "/frameworks/nextjs", icon: "▲", name: "Next.js" },
            { href: "/frameworks/vue", icon: "🟢", name: "Vue" },
            { href: "/frameworks/python", icon: "🐍", name: "Python" },
            { href: "/frameworks/go", icon: "🔷", name: "Go" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
            >
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Our Generator Is Different */}
      <section className="mb-10">
        <h2 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Why our generator is different</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🎯", "Repository-aware", "Analyzes your package.json dependencies and project architecture to generate relevant rules."],
            ["🧩", "Framework-specific", "Understands Next.js, React, Python, Go — generates rules that reference your actual libraries."],
            ["🤖", "AI-tool optimized", "Outputs .cursorrules, AGENTS.md, copilot-instructions.md — formatted for your tool of choice."],
            ["🛡️", "Maintainability-first", "Enforceable, opinionated rules — not vague advice. Written like a senior tech lead would."],
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-2 text-xl">{icon}</div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Prevent */}
      <section className="mb-10">
        <h2 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Problems generator-written standards prevent</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🚫", "Fetching in wrong component", "Next.js: data fetching in client components causing waterfall requests and broken SSR."],
            ["🚫", "Missing validation", "External input hitting your database unvalidated — no Zod schemas, no type safety."],
            ["🚫", "Inconsistent architecture", "Each AI session invents its own file structure, creating an unmaintainable codebase."],
            ["🚫", "Transaction bugs", "Prisma writes without transactions — partial saves, race conditions, corrupted data."],
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="rounded-xl border border-red-100 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/30">
              <div className="mb-2 text-lg">{icon}</div>
              <h3 className="text-sm font-semibold text-red-800 dark:text-red-300">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-red-600 dark:text-red-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Compare */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Compare AI coding tools</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/compare/cursor-vs-windsurf" className="rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800">
            <span className="text-xs text-zinc-400">Cursor vs Windsurf</span>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">Compare repo awareness, context memory, and multi-file editing.</p>
          </Link>
          <Link href="/compare/cursor-vs-copilot" className="rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800">
            <span className="text-xs text-zinc-400">Cursor vs Copilot</span>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">Repo understanding, context limits, and agent workflows compared.</p>
          </Link>
          <Link href="/compare/cursor-vs-claude-code" className="rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800">
            <span className="text-xs text-zinc-400">Cursor vs Claude Code</span>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">IDE vs CLI. Compare automation, autonomy, and CI/CD integration.</p>
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center">
        <Link
          href="/generator"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate standards from your repo
        </Link>
      </section>

      <BackToTop />
    </div>
  );
}
