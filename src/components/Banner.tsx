import Link from "next/link";

export default function Banner() {
  return (
    <div className="border-b border-zinc-200 bg-zinc-100 dark:border-[#2a2d35] dark:bg-[#111318]">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-center px-6">
        <a
          href="https://reporules.dev/generator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-[13px] text-zinc-600 transition-colors hover:text-zinc-900 dark:text-[#b7bcc6] dark:hover:text-white"
        >
          Looking for repository-wide AI governance? Try RepoRules.dev &rarr;
        </a>
      </div>
    </div>
  );
}
