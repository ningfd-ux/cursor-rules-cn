import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Cursor TypeScript 配置指南：从 strict 到 safe 的最佳规则",
  description: "TypeScript 严格模式下 Cursor 的完整规则配置，包括类型安全、泛型约束、错误处理的最佳实践。",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">TypeScript</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">配置</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Cursor TypeScript 配置指南</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">TypeScript 严格模式下，好的 Cursor Rules 能让 AI 自动写出类型安全的代码，大幅减少 any 和隐式错误。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">核心配置</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">## TypeScript 严格模式
- tsconfig.json 中启用 strict: true
- noUncheckedIndexedAccess: true
- exactOptionalPropertyTypes: true

## 类型定义
- 优先使用 interface 而不是 type
- 联合类型使用 type
- 避免 any，使用 unknown
- 函数必须标注返回类型</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">常见 AI 错误</h2>
          <ul>
            <li>AI 经常省略类型注解 → 规则要求所有函数显式标注类型</li>
            <li>AI 喜欢用 any 快速解决问题 → 规则强制禁止 any</li>
            <li>AI 不处理 null/undefined → 规则要求可选链和空值合并</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">完整规则</h2>
          <p>查看 <Link href="/rules/cursor-typescript-rules" className="text-blue-600 dark:text-blue-400">TypeScript 严格模式规则</Link> 获取完整配置。或使用 <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link> 生成包含 TypeScript 规则的完整配置文件。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">相关规则</h2>
          <ul>
            <li><Link href="/rules/cursor-react-rules" className="text-blue-600 dark:text-blue-400">React + TypeScript 规则</Link></li>
            <li><Link href="/rules/cursor-nextjs-rules" className="text-blue-600 dark:text-blue-400">Next.js + TypeScript 规则</Link></li>
          </ul>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
