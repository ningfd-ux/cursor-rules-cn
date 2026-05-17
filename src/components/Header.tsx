import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchWrapper from "@/components/SearchWrapper";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#0d0f14]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          </svg>
          <span className="hidden text-lg font-bold text-zinc-900 dark:text-zinc-100 sm:inline">
            RepoRules
          </span>
        </Link>
        <div className="flex-1 px-4">
          <SearchWrapper />
        </div>
        <nav className="flex shrink-0 items-center gap-4 text-sm text-zinc-500">
          <ThemeToggle />
          <Link href="/generator" className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Generator
          </Link>
          <a
            href="https://github.com/ningfd-ux/cursor-rules-cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://reporules.dev"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            RepoRules.dev
          </a>
        </nav>
      </div>
    </header>
  );
}
