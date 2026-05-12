import Link from "next/link";
import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI 编码工作流 - 实战案例与教程",
  description: "用 Cursor、Claude Code 构建真实项目的实战经验和编码工作流教程。",
};

const posts = [
  {
    slug: "build-saas-with-cursor-7-days",
    title: "7 天从 0 到上线：我用 Cursor + Claude Code 搭了一个规则站",
    excerpt: "从头搭建 cursorrules.fun 的真实记录，使用的 Prompt、Rules 和 AI 工作流全部公开。",
    date: "2026-05-12",
    tags: ["Cursor", "Claude Code", "实战"],
    featured: true,
  },
  {
    slug: "cursor-rules-vs-agents-md",
    title: ".cursorrules vs AGENTS.md vs CLAUDE.md：到底用哪个？",
    excerpt: "三种 AI 编码配置文件格式的完整对比，适用场景和最佳实践。",
    date: "2026-05-12",
    tags: ["Cursor", "格式对比", "教程"],
  },
  {
    slug: "how-to-write-cursor-rules",
    title: "如何编写 Cursor Rules：完整指南",
    excerpt: "从零学习编写 .cursorrules、AGENTS.md 的结构、语法和最佳实践。含完整模板。",
    date: "2026-05-12",
    tags: ["教程", "Cursor", "指南"],
  },
  {
    slug: "cursor-typescript-setup",
    title: "Cursor TypeScript 配置指南：从 strict 到 safe",
    excerpt: "TypeScript 严格模式下 Cursor 的完整规则配置，类型安全和错误处理的最佳实践。",
    date: "2026-05-12",
    tags: ["TypeScript", "配置", "教程"],
  },
  {
    slug: "ai-coding-workflow-beginners",
    title: "AI 编码工作流入门指南 2026：从零开始用 Cursor",
    excerpt: "面向编程新手，从装好 Cursor 到写出第一个生产级代码的完整工作流。",
    date: "2026-05-12",
    tags: ["入门", "工作流", "教程"],
  },
  {
    slug: "cursor-agent-mode-workflow",
    title: "Cursor Agent 模式实战：一天写出 20 条规则的工作流",
    excerpt: "如何用 Cursor Agent 批量生成高质量编码规则，效率提升 10 倍的真实案例。",
    date: "2026-05-12",
    tags: ["Agent", "Cursor", "效率"],
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>

      <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">文章</h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        用 AI 编程工具构建真实项目的实战记录和编码工作流教程。
      </p>

      {/* Featured Article - Hero Style */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-8 block rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 transition-all hover:shadow-lg dark:border-blue-800 dark:from-blue-950 dark:to-zinc-900"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">🔥 精选</span>
            <span className="text-xs text-zinc-400">{featured.date}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {featured.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">{featured.excerpt}</p>
          <div className="flex gap-2">
            {featured.tags.map((t) => (
              <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">#{t}</span>
            ))}
          </div>
          <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">阅读全文 →</div>
        </Link>
      )}

      {/* Rest of articles - Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
          >
            <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
              <span>{post.date}</span>
              {post.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded bg-zinc-50 px-1.5 py-0.5 dark:bg-zinc-800 dark:text-zinc-500">{t}</span>
              ))}
            </div>
            <h2 className="mb-2 text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}
