import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchWrapper from "@/components/SearchWrapper";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-xl">⚡</span>
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
          <Link
            href="/generator"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Generate
          </Link>
        </nav>
      </div>
    </header>
  );
}
