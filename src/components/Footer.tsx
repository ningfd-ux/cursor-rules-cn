import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 text-sm text-zinc-400">
        <span>© 2026 Cursor Rules 中文库</span>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            首页
          </Link>
          <Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            关于
          </Link>
          <Link href="/privacy" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            隐私
          </Link>
          <Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            联系
          </Link>
        </div>
      </div>
    </footer>
  );
}
