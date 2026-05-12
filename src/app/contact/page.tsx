import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系 Cursor Rules 中文库团队，提交规则或反馈建议。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">联系我们</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">提交规则</h2>
        <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          有自己总结的好规则？欢迎贡献给社区！通过 GitHub Issues 提交：
        </p>
        <a
          href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          GitHub Issues 提交
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">反馈建议</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          发现 Bug、有功能建议、或内容错误？同样通过 GitHub Issues 反馈，或在 GitHub Discussions 讨论。
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">项目地址</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本站完全开源：<a href="https://github.com/ningfd-ux/cursor-rules-cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">github.com/ningfd-ux/cursor-rules-cn</a>
        </p>
      </section>
    </div>
  );
}
