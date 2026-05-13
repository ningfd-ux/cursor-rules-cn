import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "Best Cursor Rules 2026：最值得用的 10 条 AI 编码规则",
  description: "2026 年最实用的 10 条 Cursor Rules，覆盖 React、Next.js、Vue、Python、TypeScript，直接可用。",
};

export default function PostPage() {
  const topRules = [
    { slug: "cursor-react-rules", name: "React 项目规则", why: "最常用，覆盖组件/Hooks/样式全链路" },
    { slug: "cursor-nextjs-rules", name: "Next.js 项目规则", why: "App Router 专用的 Server Component 规范" },
    { slug: "cursor-typescript-rules", name: "TypeScript 严格模式规则", why: "消灭 any，提升代码可靠性" },
    { slug: "cursor-vue-rules", name: "Vue 3 规则", why: "Composition API + Pinia 最佳实践" },
    { slug: "cursor-python-rules", name: "Python 开发规则", why: "PEP 8 + FastAPI 一套带走" },
    { slug: "cursor-testing-rules", name: "测试开发规则", why: "AI 辅助写单元测试的完整规范" },
    { slug: "cursor-api-rules", name: "API 开发规则", why: "RESTful 接口开发标准模板" },
    { slug: "cursor-docker-rules", name: "Docker 容器化规则", why: "多阶段构建 + 安全最佳实践" },
    { slug: "cursor-tailwind-rules", name: "Tailwind CSS 规则", why: "CSS 规范 + 响应式设计指南" },
    { slug: "cursor-saas-rules", name: "SaaS 项目规则", why: "创业团队全栈开发规范" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">推荐</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">排名</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Best Cursor Rules 2026：最值得用的 10 条 AI 编码规则</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">从 81 条规则中选出最实用的 10 条。每条都含使用场景和常见错误，复制即用。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Top 10 规则</h2>

          <div className="space-y-4 not-prose">
            {topRules.map((rule, i) => (
              <Link
                key={rule.slug}
                href={`/rules/${rule.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">{rule.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{rule.why}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">懒人方案</h2>
          <p>不想一个一个选？用 <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Generator</Link>，粘贴仓库地址，一次性生成你需要的全部配置。</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">更多推荐</h3>
            <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li><Link href="/frameworks/react" className="hover:underline">→ 全部 React 规则合集</Link></li>
              <li><Link href="/compare" className="hover:underline">→ Cursor vs 其他 AI 工具对比</Link></li>
            </ul>
          </div>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "build-saas-with-cursor-7-days", title: "7天从0到上线", excerpt: "本站完整搭建记录" },
          { slug: "ai-coding-workflow-beginners", title: "AI编码工作流入门", excerpt: "从零开始用Cursor" },
        ]}
      />
      <BackToTop />
    </div>
  );
}
