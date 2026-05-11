import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import RuleGrid from "@/components/RuleGrid";
import BackToTop from "@/components/BackToTop";
import { rules, categories } from "@/data/rules";

const featuredRules = rules.slice(0, 3);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          🆕 持续更新中 · 全部免费复制
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          复制即用的 <span className="text-blue-600">Cursor Rules</span>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          精选 Cursor、Claude Code、GitHub Copilot、Windsurf 等 AI 编程工具的
          Rules 和 Prompt 模板。<br />
          找到适合你的规则 → 一键复制 → 粘贴到项目根目录，立即生效。
        </p>
        <div className="flex items-center justify-center gap-3 text-sm text-zinc-400 dark:text-zinc-500">
          <span className="flex items-center gap-1">📦 {rules.length} 条规则</span>
          <span>·</span>
          <span className="flex items-center gap-1">📂 {categories.length} 个分类</span>
          <span>·</span>
          <span className="flex items-center gap-1">⚡ 即搜即用</span>
        </div>
      </section>

      {/* 精选推荐 (server-rendered) */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          🔥 精选推荐
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>

      {/* 分类导航 + Rules 列表 (client-side interactive) */}
      <RuleGrid rules={rules} />

      {/* 社区贡献 (server-rendered) */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          🤝 分享你的规则
        </h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          有自己总结的好规则？提交到社区，帮助更多开发者。
        </p>
        <a
          href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          通过 GitHub Issues 提交
        </a>
      </section>

      <BackToTop />
    </div>
  );
}
