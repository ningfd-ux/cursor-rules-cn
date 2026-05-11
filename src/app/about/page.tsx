import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
  description: "Cursor Rules 中文库 — 最全的 AI 编程规则和 Prompt 模板中文资源站。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">关于 Cursor Rules 中文库</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">这是什么？</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Cursor Rules 中文库是一个面向中文开发者的 AI 编程规则资源站。我们精选并整理
          Cursor、Claude Code、GitHub Copilot、Windsurf 等 AI 编程工具的最佳 Rules、Prompt 模板和实战经验。
        </p>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          所有规则均为中文适配，可直接复制到项目中使用。目标是帮助中文开发者更高效地使用 AI 编程工具。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">为什么做这个站？</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          AI 编程工具正在改变开发方式，但英文资料多、中文资料少。我们希望填补这个空白，
          让中文开发者也能轻松找到适合自己的 Cursor Rules 和 Prompt 配置。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">内容来源</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          网站内容由社区贡献和整理，涵盖主流技术栈（React、Vue、Next.js、Python、Go 等）
          的最佳 AI 编程实践。每条规则都标注了适配工具版本和更新时间。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">联系我们</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          有建议或想要贡献规则？通过 <a href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">GitHub Issues</a> 提交，
          或在 <a href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">联系页面</a> 找到更多方式。
        </p>
      </section>
    </div>
  );
}
