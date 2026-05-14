"use client";

export default function FloatingShare() {
  return (
    <a
      href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 top-40 z-50 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-lg transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      <span className="hidden sm:inline">Submit</span>
    </a>
  );
}
