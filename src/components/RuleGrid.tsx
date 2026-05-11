"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import CategoryBadge from "@/components/CategoryBadge";
import type { Rule } from "@/data/rules";
import { categories, getCategoryName } from "@/data/rules";

interface RuleGridProps {
  rules: Rule[];
}

function GridInner({ rules }: RuleGridProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const sortBy = searchParams.get("sort") || "default";

  let filteredRules = activeCategory
    ? rules.filter((r) => r.category === activeCategory)
    : rules;

  if (sortBy === "newest") {
    filteredRules = [...filteredRules].sort(
      (a, b) => b.updatedAt.localeCompare(a.updatedAt)
    );
  }

  return (
    <>
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
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={activeCategory ? `/?category=${activeCategory}&sort=default` : "/"}
              className={`rounded-md px-2.5 py-1 transition-colors ${
                sortBy === "default"
                  ? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
            >
              默认
            </Link>
            <Link
              href={activeCategory ? `/?category=${activeCategory}&sort=newest` : "/?sort=newest"}
              className={`rounded-md px-2.5 py-1 transition-colors ${
                sortBy === "newest"
                  ? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              }`}
            >
              最新
            </Link>
            <span className="text-xs text-zinc-300 dark:text-zinc-600">|</span>
            <span className="text-zinc-400">{filteredRules.length} 条</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function RuleGrid({ rules }: RuleGridProps) {
  return (
    <Suspense fallback={
      <>
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">📂 分类浏览</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white">
              全部 <span className="text-xs text-blue-200">{rules.length}</span>
            </span>
            {categories.map((cat) => (
              <span key={cat.slug} className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {cat.name} <span className="text-xs text-zinc-400 dark:text-zinc-500">{cat.count}</span>
              </span>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">📖 全部规则</h2>
            <span className="text-zinc-400">{rules.length} 条</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rules.map((rule) => (
              <RuleCard key={rule.slug} rule={rule} />
            ))}
          </div>
        </section>
      </>
    }>
      <GridInner rules={rules} />
    </Suspense>
  );
}
