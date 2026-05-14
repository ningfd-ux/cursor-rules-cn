import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Examples — AI Coding Standards Generator",
  description: "Real examples: paste a package.json, see what standards the AI generates for Next.js, Python, Go, and more stacks.",
};

const examples = [
  {
    label: "Next.js + Prisma + Zod",
    packageJson: `{
  "dependencies": {
    "next": "^15.0",
    "react": "^19.0",
    "tailwindcss": "^4.0",
    "prisma": "^6.0",
    "@prisma/client": "^6.0",
    "zod": "^3.23"
  }
}`,
    detected: [
      "Next.js 15 App Router",
      "React 19 Server Components",
      "Tailwind CSS v4",
      "Prisma ORM with PostgreSQL",
      "Zod validation",
    ],
    standards: [
      { rule: "Prefer Server Components by default", why: "Next.js 15 + React 19. Server Components reduce client bundle size and improve data fetching consistency." },
      { rule: "Never fetch data in client components", why: "App Router pattern. Server Components fetch data, pass as props to client leaves. Prevents waterfall requests." },
      { rule: "Wrap multi-table writes in Prisma transactions", why: "Prisma $transaction ensures atomicity. Without it, partial writes create inconsistent state." },
      { rule: "Validate all external input with Zod schemas", why: "Define schemas in lib/schemas/. Zod infers TypeScript types, eliminating duplication." },
      { rule: "Use Server Actions for form mutations", why: "Next.js 15 native pattern. Avoids API routes for form submissions, keeps logic co-located." },
    ],
  },
  {
    label: "FastAPI + SQLAlchemy",
    packageJson: `{
  "dependencies": {
    "fastapi": "^0.115",
    "uvicorn": "^0.32",
    "sqlalchemy": "^2.0",
    "pydantic": "^2.9",
    "alembic": "^1.14"
  }
}`,
    detected: [
      "Python 3.12+",
      "FastAPI 0.115",
      "SQLAlchemy 2.0 ORM",
      "Pydantic v2 schemas",
      "Alembic migrations",
    ],
    standards: [
      { rule: "Use Pydantic v2 model_validate, not dict()", why: "Pydantic v2's model_validate provides strict type checking. dict() bypasses validation." },
      { rule: "Never use sync SQLAlchemy sessions in async routes", why: "FastAPI is async-native. Sync sessions block the event loop. Use AsyncSession exclusively." },
      { rule: "Alembic migrations required before deploy", why: "Without alembic upgrade head in CI, schema drift will cause production errors." },
      { rule: "Return Pydantic response models, never raw ORM objects", why: "ORM objects leak internal DB structure. Pydantic models define public API contracts." },
      { rule: "Use lifespan context for DB pool initialization", why: "FastAPI lifespan replaces deprecated on_event. Ensures clean startup/shutdown of connection pools." },
    ],
  },
  {
    label: "Go + Chi + sqlc",
    packageJson: `{
  "dependencies": {
    "go": "1.23",
    "chi": "^5.1",
    "sqlc": "^1.27",
    "pgx": "^5.7",
    "validator": "^10"
  }
}`,
    detected: [
      "Go 1.23",
      "Chi router",
      "sqlc for type-safe SQL",
      "pgx PostgreSQL driver",
      "validator v10",
    ],
    standards: [
      { rule: "Never write raw SQL strings — use sqlc generated code", why: "sqlc generates type-safe Go from SQL. Prevents SQL injection and type mismatches at compile time." },
      { rule: "Context passed as first parameter to every function", why: "Go convention. Enables request-scoped cancellation and timeout propagation." },
      { rule: "Validate all request structs before processing", why: "validator tags on structs catch bad input at the boundary. Never trust payloads, even internal ones." },
      { rule: "Wrap errors with fmt.Errorf and %w, never return bare errors", why: "Go 1.13+ error wrapping preserves the error chain. Callers can use errors.Is and errors.As." },
      { rule: "Use pgx pool, not single connection", why: "pgxpool manages connection lifecycle. Single connections leak and don't recover from network failures." },
    ],
  },
];

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Example outputs</h1>
      <p className="mb-10 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
        Real package.json files → detected stack → generated standards. No templates — every rule references specific detected libraries.
      </p>

      <div className="space-y-10">
        {examples.map((ex) => (
          <section key={ex.label} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-xs text-zinc-600">{ex.label}</span>
            </div>

            <div className="grid gap-0 lg:grid-cols-3">
              {/* Input */}
              <div className="border-b border-zinc-800 p-5 lg:border-b-0 lg:border-r">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Input</p>
                <pre className="overflow-x-auto text-xs leading-relaxed text-green-400 font-mono">{ex.packageJson}</pre>
              </div>

              {/* Detected */}
              <div className="border-b border-zinc-800 p-5 lg:border-b-0 lg:border-r">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Detected Stack</p>
                <ul className="space-y-1 text-xs text-zinc-400">
                  {ex.detected.map((d) => (
                    <li key={d}>- {d}</li>
                  ))}
                </ul>
              </div>

              {/* Standards */}
              <div className="p-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Generated Standards</p>
                <ul className="space-y-2.5">
                  {ex.standards.map((s) => (
                    <li key={s.rule}>
                      <p className="text-xs font-medium text-zinc-200">{s.rule}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{s.why}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-12 text-center">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Try it with your own repo</h2>
        <Link
          href="/generator"
          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-green-700"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Standards
        </Link>
      </section>
    </div>
  );
}
