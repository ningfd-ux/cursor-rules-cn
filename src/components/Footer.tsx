import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <span className="text-sm text-zinc-500">CursorRules.fun is a discovery site for AI repository workflows.</span>
            <div className="text-xs text-zinc-400">
              Powered by{" "}
              <a href="https://reporules.dev" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                RepoRules.dev
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
            <Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-300">About</Link>
            <Link href="/privacy" className="hover:text-zinc-600 dark:hover:text-zinc-300">Privacy</Link>
            <Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
