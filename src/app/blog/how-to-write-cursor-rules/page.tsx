import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "如何编写 Cursor Rules：完整指南 2026",
  description: "从零开始学习编写 .cursorrules、AGENTS.md 文件的结构、语法和最佳实践。含完整模板。",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">教程</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">如何编写 Cursor Rules：完整指南</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">编写好的 Cursor Rules 是让 AI 写出高质量代码的关键。本文从基础语法到高级技巧，一次性讲清楚。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">基础结构</h2>
          <p>一个 .cursorrules 文件就是纯文本，用 ## 分割章节，用 - 列举规则：</p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap"># 技术栈
- Next.js 15 with App Router
- TypeScript strict mode
- Tailwind CSS v4

## 组件规范
- 使用函数组件 + Hooks
- 组件文件名使用 PascalCase
- 每个组件不超过 200 行</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">核心原则</h2>
          <ul>
            <li><strong>具体不要抽象</strong> — "用 TypeScript" 不如 "所有文件必须 .ts/.tsx"</li>
            <li><strong>告诉 AI 做什么，不只是不做什么</strong> — "优先使用 Server Component" 比 "不要用客户端渲染" 更好</li>
            <li><strong>按技术栈分节</strong> — React 规范、样式规范、测试规范分开写</li>
            <li><strong>控制在 50 行内</strong> — 太长会导致 AI 忽略部分规则</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">高级技巧</h2>
          <p>在规则中引用具体文件路径，让 AI 理解项目结构：</p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">## 文件结构
- API 路由放在 src/app/api/
- 组件放在 src/components/
- 工具函数放在 src/lib/
- 类型定义放在 src/types/</pre>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">模板参考</h2>
          <p>查看我们的 <Link href="/frameworks/react" className="text-blue-600 dark:text-blue-400">React 规则合集</Link> 或直接用 <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link> 自动生成。</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">不想手写？用 Generator 一键生成</h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">选择技术栈 + 严格程度，AI 自动生成完整的配置文件。</p>
            <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">去生成 →</Link>
          </div>
        </section>
      </article>
      <BlogFooter />
      <BackToTop />
    </div>
  );
}
