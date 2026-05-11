import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { comparisons } from "@/data/comparisons";
import CopyButton from "@/components/CopyButton";
import BackToTop from "@/components/BackToTop";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cmp = comparisons.find((c) => c.slug === slug);
  if (!cmp) return {};
  return { title: cmp.title, description: cmp.description };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const result: string[] = [];

  for (const line of lines) {
    if (line.startsWith("| ") && line.endsWith(" |")) {
      result.push(`<p class="text-sm text-zinc-600 dark:text-zinc-400 font-mono">${line}</p>`);
    } else if (line.startsWith("|")) {
      // skip markdown table formatting lines
    } else if (line.startsWith("## ")) {
      result.push(`<h2 class="text-lg font-semibold mt-6 mb-3 text-zinc-900 dark:text-zinc-100">${line.slice(3)}</h2>`);
    } else if (line.startsWith("- ")) {
      result.push(`<li class="text-sm text-zinc-500 dark:text-zinc-400 ml-4">${line.slice(2)}</li>`);
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      result.push(`<p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-2">${line}</p>`);
    }
  }
  return result.join("\n");
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const cmp = comparisons.find((c) => c.slug === slug);
  if (!cmp) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/compare" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回对比
      </Link>
      <Link href="/" className="ml-4 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        首页
      </Link>

      <article className="mt-6">
        <header className="mb-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">{cmp.icon}</span>
            <div className="flex flex-wrap gap-1.5">
              {cmp.tags.map((t) => (
                <span key={t} className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">#{t}</span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{cmp.title}</h1>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">{cmp.description}</p>
        </header>

        <div
          className="rounded-xl border border-zinc-200 bg-white p-6 leading-relaxed dark:border-zinc-800 dark:bg-zinc-900"
          dangerouslySetInnerHTML={{ __html: renderContent(cmp.content) }}
        />
      </article>
      <BackToTop />
    </div>
  );
}
