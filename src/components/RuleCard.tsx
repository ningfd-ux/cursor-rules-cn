import Link from "next/link";
import type { Rule } from "@/data/rules";

interface RuleCardProps {
  rule: Rule;
}

export default function RuleCard({ rule }: RuleCardProps) {
  return (
    <Link
      href={`/rules/${rule.slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{rule.icon}</span>
        <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {rule.category === "cursor" && "Cursor"}
          {rule.category === "claude" && "Claude Code"}
          {rule.category === "copilot" && "Copilot"}
          {rule.category === "windsurf" && "Windsurf"}
          {rule.category === "general" && "通用"}
        </span>
      </div>
      <h2 className="mb-1.5 text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
        {rule.title}
      </h2>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {rule.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {rule.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded bg-zinc-50 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
