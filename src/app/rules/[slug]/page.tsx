import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { rules, getCategoryName } from "@/data/rules";
import CopyButton from "@/components/CopyButton";
import BackToTop from "@/components/BackToTop";

interface RulePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export async function generateMetadata({ params }: RulePageProps): Promise<Metadata> {
  const { slug } = await params;
  const rule = rules.find((r) => r.slug === slug);
  if (!rule) return {};

  return {
    title: rule.title,
    description: rule.description,
    keywords: rule.tags.join(", "),
    openGraph: {
      title: rule.title,
      description: rule.description,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 代码块
    if (line.startsWith("```")) {
      result.push("<pre><code>");
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        result.push(escapeHtml(lines[i]));
        result.push("\n");
        i++;
      }
      result.push("</code></pre>");
      i++; // skip closing ```
      continue;
    }

    // 标题
    if (line.startsWith("### ")) {
      result.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      result.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      result.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
      i++;
      continue;
    }

    // 无序列表
    if (line.startsWith("- ")) {
      result.push("<ul>");
      while (i < lines.length && lines[i].startsWith("- ")) {
        result.push(`<li>${inlineMarkdown(lines[i].slice(2))}</li>`);
        i++;
      }
      result.push("</ul>");
      continue;
    }

    // 有序列表
    if (/^\d+\.\s/.test(line)) {
      result.push("<ol>");
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const text = lines[i].replace(/^\d+\.\s/, "");
        result.push(`<li>${inlineMarkdown(text)}</li>`);
        i++;
      }
      result.push("</ol>");
      continue;
    }

    // 空行
    if (line.trim() === "") {
      i++;
      continue;
    }

    // 普通段落
    result.push(`<p>${inlineMarkdown(line)}</p>`);
    i++;
  }

  return result.join("");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export default async function RulePage({ params }: RulePageProps) {
  const { slug } = await params;
  const rule = rules.find((r) => r.slug === slug);

  if (!rule) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
      >
        ← 返回首页
      </Link>

      <article>
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">{rule.icon}</span>
            <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              {getCategoryName(rule.category)}
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {rule.title}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {rule.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {rule.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <CopyButton content={rule.content} />
          </div>
        </header>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
          <p className="flex items-center gap-2 font-medium">
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            如何使用？
          </p>
          <p className="mt-1">
            将以下内容复制到项目根目录的 <code className="rounded bg-blue-100 px-1 py-0.5 text-xs dark:bg-blue-900 dark:text-blue-200">.cursorrules</code> 文件，
            或直接在 Cursor 设置中粘贴即可生效。每条规则按场景分类，可根据需要自由组合。
          </p>
        </div>

        <div
          className="prose rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          dangerouslySetInnerHTML={{ __html: renderContent(rule.content) }}
        />
      </article>

      {/* 相关推荐 */}
      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          相关规则
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {rules
            .filter((r) => r.category === rule.category && r.slug !== rule.slug)
            .slice(0, 4)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/rules/${related.slug}`}
                className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
              >
                <span className="text-lg">{related.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {related.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{related.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <BackToTop />
    </div>
  );
}
