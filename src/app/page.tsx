"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import RuleCard from "@/components/RuleCard";
import CategoryBadge from "@/components/CategoryBadge";
import BackToTop from "@/components/BackToTop";
import { rules, categories } from "@/data/rules";

function HomeContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const filteredRules = activeCategory
    ? rules.filter((r) => r.category === activeCategory)
    : rules;
  const featuredRules = rules.slice(0, 3);

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

      {/* 精选推荐 */}
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

      {/* 分类导航 */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          📂 分类浏览
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            全部
            <span className={`text-xs ${!activeCategory ? "text-blue-200" : "text-zinc-400 dark:text-zinc-500"}`}>
              {rules.length}
            </span>
          </Link>
          {categories.map((cat) => (
            <CategoryBadge
              key={cat.slug}
              name={cat.name}
              slug={cat.slug}
              count={cat.count}
              active={activeCategory === cat.slug}
            />
          ))}
        </div>
      </section>

      {/* Rules 列表 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            📖 {activeCategory ? `${categories.find((c) => c.slug === activeCategory)?.name} ` : "全部"}规则
          </h2>
          <span className="text-sm text-zinc-400">{filteredRules.length} 条</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>
      <BackToTop />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-4 py-12 text-center text-zinc-400">加载中...</div>}>
      <HomeContent />
    </Suspense>
  );
}
