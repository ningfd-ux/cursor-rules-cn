import Link from "next/link";
import type { Rule } from "@/data/rules";
import { getCategoryName } from "@/data/rules";

interface RuleCardProps {
  rule: Rule;
}

function contentPreview(content: string, lines = 3): string {
  return content
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("```"))
    .slice(0, lines)
    .map((l) => l.replace(/^[-*]\s*/, "").replace(/`([^`]+)`/g, "$1"))
    .join("  ·  ");
}

export default function RuleCard({ rule }: RuleCardProps) {
  const preview = contentPreview(rule.content);

  return (
    <Link
      href={`/rules/${rule.slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{rule.icon}</span>
        <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {getCategoryName(rule.category)}
        </span>
      </div>
      <h2 className="mb-1.5 text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
        {rule.title}
      </h2>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {rule.description}
      </p>
      {preview && (
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
          {preview}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {rule.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded bg-zinc-50 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500"
          >
            #{tag}
          </span>
        ))}
        <span className="ml-auto text-xs text-zinc-300 dark:text-zinc-600">
          {rule.updatedAt}
        </span>
      </div>
    </Link>
  );
}
