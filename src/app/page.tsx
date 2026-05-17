import Link from "next/link";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 flex min-h-[80vh] flex-col items-center justify-center lg:flex-row lg:gap-16 pt-20 lg:pt-16">
        <div className="max-w-xl text-center lg:text-left">
          <span className="mb-4 inline-block rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-400">
            Repository-aware · Not template-based · Engineering-first
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Generate AI-Native Repository Rules
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            Generate Cursor Project Rules (.mdc), AGENTS.md, CLAUDE.md and repository standards automatically.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-start justify-center">
            <a
              href="https://reporules.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Generate Rules on RepoRules.dev
            </a>
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              See Real Examples
            </Link>
          </div>
        </div>
        <div className="mt-10 hidden w-full max-w-md lg:mt-0 lg:block">
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="ml-2 text-[10px] text-zinc-400 dark:text-zinc-600">package.json → standards</span>
            </div>
            <pre className="overflow-x-auto bg-white p-5 font-mono text-xs leading-relaxed text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">{`// Input
{
  "next": "^15.0",
  "react": "^19.0",
  "prisma": "^6.0",
  "zod": "^3.23"
}

// Detected
Next.js 15 → App Router
Prisma 6 → ORM

// Standards
Prefer Server Components
Use Prisma transactions
Validate with Zod`}</pre>
          </div>
        </div>
      </section>

      {/* Cursor Now Uses Project Rules (.mdc) */}
      <section className="py-16">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-8 text-center dark:border-blue-800 dark:bg-blue-950">
          <h2 className="mb-3 text-xl font-bold text-blue-900 dark:text-blue-100">Cursor Now Uses Project Rules (.mdc)</h2>
          <p className="mb-4 text-sm text-blue-700 dark:text-blue-300">
            Cursor has deprecated .cursorrules in favor of .cursor/rules/*.mdc files. Project Rules are now split by file type and stored in a rules directory.
          </p>
          <Link
            href="/migrate-to-mdc"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn How to Migrate →
          </Link>
        </div>
      </section>

      {/* Without Rules vs With Rules */}
      <section className="py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100">What Happens Without Repository Rules</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900 dark:bg-red-950/30">
            <h3 className="mb-4 text-lg font-semibold text-red-800 dark:text-red-300">Without Rules</h3>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-400">
              <li>AI generates inconsistent code across sessions</li>
              <li>No shared architecture conventions</li>
              <li>Validation and error handling vary per prompt</li>
              <li>File structure drifts over time</li>
              <li>Each developer invents their own patterns</li>
            </ul>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900 dark:bg-green-950/30">
            <h3 className="mb-4 text-lg font-semibold text-green-800 dark:text-green-300">With Rules</h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
              <li>AI follows project-specific architecture standards</li>
              <li>Shared conventions enforced across all sessions</li>
              <li>Consistent validation and error handling patterns</li>
              <li>Predictable file structure and naming</li>
              <li>Team-wide coding standards, auto-enforced</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <h2 className="mb-5 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">How it works</h2>
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

      {/* Bottom CTA */}
      <section className="text-center">
        <a
          href="https://reporules.dev"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Repository Rules
        </a>
      </section>

      <BackToTop />
    </div>
  );
}
