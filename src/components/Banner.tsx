import Link from "next/link";

export default function Banner() {
  return (
    <div className="border-b border-zinc-200 bg-zinc-100 dark:border-[#2a2d35] dark:bg-[#111318]">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-center border-l-2 border-[#7c8cff] px-4">
        <a
          href="https://reporules.dev/generator"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'banner_click', { source: 'cursorrules' });
            }
          }}
          className="text-center text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-[#d2d7e0] dark:hover:text-white"
        >
          Generate modern Cursor Project Rules (.mdc) automatically on RepoRules.dev &rarr;
        </a>
      </div>
    </div>
  );
}
