import Link from "next/link";
import Comments from "@/components/Comments";

interface BlogFooterProps {
  prev?: { slug: string; title: string };
  related?: { slug: string; title: string; excerpt: string }[];
}

export default function BlogFooter({ prev, related }: BlogFooterProps) {
  return (
    <div className="mt-12 space-y-8 not-prose">
      {/* Related articles */}
      {related && related.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">📖 Related Articles</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">{r.title}</h4>
                <p className="mt-1 text-xs text-zinc-400">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Previous / Next navigation */}
      <div className="flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <div>
          {prev && (
            <Link href={`/blog/${prev.slug}`} className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400">
              ← {prev.title.length > 30 ? prev.title.slice(0, 30) + "..." : prev.title}
            </Link>
          )}
        </div>
        <Link href="/blog" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
          All articles →
        </Link>
        <div />
      </div>

      {/* Comments */}
      <Comments page={prev?.slug || ""} />

      {/* CTA */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
        <h3 className="font-semibold text-blue-900 dark:text-blue-200">🚀 Generate custom standards for your project</h3>
        <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">Paste your package.json. AI generates .cursor/rules, AGENTS.md, or copilot-instructions.md.</p>
        <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Generate →
        </Link>
      </div>
    </div>
  );
}
