import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchWrapper from "@/components/SearchWrapper";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-xl">⚡</span>
          <span className="hidden text-lg font-bold text-zinc-900 dark:text-zinc-100 sm:inline">
            Cursor Rules <span className="text-sm font-normal text-zinc-400">中文库</span>
          </span>
        </Link>
        <div className="flex-1 px-4">
          <SearchWrapper />
        </div>
        <nav className="flex shrink-0 items-center gap-4 text-sm text-zinc-500">
          <ThemeToggle />
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            首页
          </Link>
          <a
            href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-blue-600 px-3 py-1 font-medium text-white transition-colors hover:bg-blue-700 sm:inline-block"
          >
            + 提交规则
          </a>
          <a
            href="https://github.com/ningfd-ux/cursor-rules-cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
