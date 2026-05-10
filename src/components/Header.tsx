import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Cursor Rules <span className="text-sm font-normal text-zinc-400">中文库</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            首页
          </Link>
          <a
            href="https://github.com"
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
