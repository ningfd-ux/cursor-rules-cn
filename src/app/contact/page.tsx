import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Cursor Rules team. Submit standards or provide feedback.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Contact</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Submit a standard</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Got solid coding standards? Contribute to the community via GitHub Issues:
        </p>
        <a
          href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Submit via GitHub Issues
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Feedback & suggestions</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Found a bug, have a feature idea, or spotted content errors? Report via GitHub Issues or discuss on GitHub Discussions.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Open source</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          This site is fully open source: <a href="https://github.com/ningfd-ux/cursor-rules-cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">github.com/ningfd-ux/cursor-rules-cn</a>
        </p>
      </section>
    </div>
  );
}
