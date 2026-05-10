import Link from "next/link";

interface CategoryBadgeProps {
  name: string;
  slug: string;
  count: number;
  active?: boolean;
}

export default function CategoryBadge({ name, slug, count, active }: CategoryBadgeProps) {
  return (
    <Link
      href={active ? "/" : `/?category=${slug}`}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      }`}
    >
      {name}
      <span className={`text-xs ${active ? "text-blue-200" : "text-zinc-400 dark:text-zinc-500"}`}>
        {count}
      </span>
    </Link>
  );
}
