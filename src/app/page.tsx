import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import CategoryBadge from "@/components/CategoryBadge";
import { rules, categories } from "@/data/rules";

export default function Home() {
  const featuredRules = rules.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          🆕 持续更新中
        </span>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Cursor Rules <span className="text-blue-600">中文库</span>
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          收录 Cursor、Claude Code、GitHub Copilot、Windsurf 等 AI 编程工具的
          Rules、Prompt 模板和最佳实践。
        </p>
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
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white transition-colors"
          >
            全部
            <span className="text-xs text-blue-200">{rules.length}</span>
          </Link>
          {categories.map((cat) => (
            <CategoryBadge
              key={cat.slug}
              name={cat.name}
              slug={cat.slug}
              count={cat.count}
            />
          ))}
        </div>
      </section>

      {/* Rules 列表 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            📖 全部规则
          </h2>
          <span className="text-sm text-zinc-400">{rules.length} 条</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>
    </div>
  );
}
