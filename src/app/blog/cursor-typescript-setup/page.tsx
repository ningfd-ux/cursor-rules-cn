import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Cursor TypeScript Setup Guide: Best Rules from Strict to Safe",
  description: "Complete Cursor rules configuration for TypeScript strict mode, covering type safety, generic constraints, and error handling best practices.",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to blog</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">TypeScript</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Configuration</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Cursor TypeScript Setup Guide</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">In TypeScript strict mode, good Cursor Rules let AI automatically produce type-safe code, drastically reducing `any` and implicit errors.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Core Configuration</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">## TypeScript Strict Mode
- Enable strict: true in tsconfig.json
- noUncheckedIndexedAccess: true
- exactOptionalPropertyTypes: true

## Type Definitions
- Prefer interface over type for object shapes
- Use type for union types
- Avoid any; use unknown instead
- All functions must have explicit return types</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Common AI Mistakes</h2>
          <ul>
            <li>AI often omits type annotations → rules require explicit types on all functions</li>
            <li>AI frequently uses `any` as a quick fix → rules ban `any` entirely</li>
            <li>AI skips null/undefined handling → rules mandate optional chaining and nullish coalescing</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Full Rules</h2>
          <p>Check out the <Link href="/rules/cursor-typescript-rules" className="text-blue-600 dark:text-blue-400">TypeScript Strict Mode Rules</Link> for the complete configuration. Or use the <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link> to produce a full config file with TypeScript rules included.</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Related Rules</h2>
          <ul>
            <li><Link href="/rules/cursor-react-rules" className="text-blue-600 dark:text-blue-400">React + TypeScript Rules</Link></li>
            <li><Link href="/rules/cursor-nextjs-rules" className="text-blue-600 dark:text-blue-400">Next.js + TypeScript Rules</Link></li>
          </ul>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
