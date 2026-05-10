import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { rules } from "@/data/rules";

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
  const html: string[] = [];

  for (const line of lines) {
    if (line.startsWith("```")) {
      continue;
    }
    if (line.startsWith("# ")) {
      html.push(`<h1>${line.replace(/^# /, "")}</h1>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2>${line.replace(/^## /, "")}</h2>`);
    } else if (line.startsWith("### ")) {
      html.push(`<h3>${line.replace(/^### /, "")}</h3>`);
    } else if (line.startsWith("- ")) {
      html.push(`<li>${line.replace(/^- /, "")}</li>`);
    } else if (/^\d+\. /.test(line)) {
      html.push(`<li>${line.replace(/^\d+\. /, "")}</li>`);
    } else if (line.trim() === "") {
      html.push("</ul><ul>".replace("</ul><ul>", "</ul><ul>"));
    } else {
      const escaped = line
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      html.push(`<p>${escaped}</p>`);
    }
  }

  // Wrap consecutive <li> in <ul>
  const result: string[] = [];
  let inList = false;
  for (const el of html) {
    if (el === "<li>" || el.startsWith("<li>")) {
      if (!inList) {
        result.push("<ul>");
        inList = true;
      }
      result.push(el);
    } else {
      if (inList) {
        result.push("</ul>");
        inList = false;
      }
      result.push(el);
    }
  }
  if (inList) result.push("</ul>");

  return result.join("");
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
              {rule.category === "cursor" && "Cursor"}
              {rule.category === "claude" && "Claude Code"}
              {rule.category === "copilot" && "Copilot"}
              {rule.category === "windsurf" && "Windsurf"}
              {rule.category === "general" && "通用"}
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {rule.title}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {rule.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {rule.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

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
    </div>
  );
}
