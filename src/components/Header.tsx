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
            AI Coding Standards
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
          <Link href="/compare" className="hidden hover:text-zinc-900 dark:hover:text-zinc-300 sm:inline-block">
            Compare
          </Link>
          <Link href="/frameworks" className="hidden hover:text-zinc-900 dark:hover:text-zinc-300 sm:inline-block">
            Frameworks
          </Link>
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
