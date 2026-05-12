import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { frameworks } from "@/data/frameworks";
import { rules } from "@/data/rules";
import RuleCard from "@/components/RuleCard";
import BackToTop from "@/components/BackToTop";

interface Props {
  params: Promise<{ framework: string }>;
}

export async function generateStaticParams() {
  return frameworks.map((fw) => ({ framework: fw.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { framework } = await params;
  const fw = frameworks.find((f) => f.slug === framework);
  if (!fw) return {};
  return {
    title: `Best Cursor Rules for ${fw.name} Projects`,
    description: fw.description,
    openGraph: {
      title: `Cursor Rules for ${fw.name}`,
      description: fw.description,
    },
  };
}

export default async function FrameworkPage({ params }: Props) {
  const { framework } = await params;
  const fw = frameworks.find((f) => f.slug === framework);
  if (!fw) notFound();

  const fwRules = rules.filter((r) =>
    fw.tags.some((t) => r.tags.includes(t) || r.category === fw.slug)
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>

      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-3xl">{fw.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Best Cursor Rules for {fw.name} Projects
            </h1>
            <p className="mt-1 text-sm text-zinc-400">{fwRules.length} 条相关规则</p>
          </div>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {fw.longDesc}
        </p>
      </div>

      {fwRules.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200 p-12 text-center text-zinc-400 dark:border-zinc-800">
          暂无相关规则
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fwRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      )}

      {/* 相关推荐 */}
      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          其他 Framework
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {frameworks
            .filter((f) => f.slug !== fw.slug)
            .slice(0, 4)
            .map((f) => (
              <Link
                key={f.slug}
                href={`/frameworks/${f.slug}`}
                className={`rounded-xl border ${f.border} ${f.color} p-4 transition-colors hover:shadow-md`}
              >
                <span className="text-xl">{f.icon}</span>
                <h3 className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">{f.name}</h3>
                <p className="text-xs text-zinc-400">{f.description.slice(0, 30)}...</p>
              </Link>
            ))}
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
