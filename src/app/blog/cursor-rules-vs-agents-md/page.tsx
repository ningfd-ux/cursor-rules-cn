import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: ".cursorrules vs AGENTS.md vs CLAUDE.md：到底用哪个？",
  description: "三种 AI 编码配置文件的格式对比、适用场景和最佳实践。Cursor 新旧格式、Claude Code 和 Copilot 怎么选？",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>

      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">格式对比</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">.cursorrules vs AGENTS.md vs CLAUDE.md：到底用哪个？</h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">AI 编码配置文件的格式越来越多，但大部分开发者还不清楚它们之间的区别。本文一次讲清楚。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">三种格式的核心区别</h2>

          <div className="overflow-auto rounded-lg border border-zinc-200 not-prose dark:border-zinc-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800">
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">特性</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">.cursorrules</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">AGENTS.md</th>
                  <th className="p-3 text-left font-medium text-zinc-900 dark:text-zinc-100">CLAUDE.md</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {[
                  ["工具", "Cursor", "Cursor（新版）", "Claude Code"],
                  ["格式", "纯文本", "Markdown", "Markdown"],
                  ["位置", "项目根目录", ".cursor/rules/*.mdc", "项目根目录"],
                  ["作用范围", "全局", "按 glob 匹配", "全局"],
                  ["多个文件", "不支持", "支持分文件", "不支持"],
                  ["启动加载", "自动", "按需匹配", "自动"],
                  ["当前状态", "Legacy", "推荐", "推荐"],
                ].map((row, i) => (
                  <tr key={i} className="text-zinc-600 dark:text-zinc-400">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 ${j === 0 ? "font-medium text-zinc-800 dark:text-zinc-200" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">什么时候用哪个？</h2>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">用 .cursorrules（传统）</h3>
          <p>你的 Cursor 版本还没升级到最新。项目简单，不需要按文件类型分开控制。作为通用兜底配置。</p>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">用 AGENTS.md（推荐）</h3>
          <p>项目有多种文件类型，需要精细化控制。按技术栈拆分规则文件。想使用 Cursor 最新 Project Rules 功能。这也是 Cursor 官方当前推荐的格式。</p>

          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mt-6">用 CLAUDE.md</h3>
          <p>你的主力工具是 Claude Code CLI。需要的是对话式指令而不是规则文件。希望 Claude 自动理解项目上下文。</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200">用 Generator 一键生成所有格式</h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">不需要自己纠结选哪个——AI Rule Generator 支持全部 4 种格式输出，选一个就行。</p>
            <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">去生成 →</Link>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">未来趋势</h2>
          <p>Cursor 官方正在弱化 .cursorrules，推荐使用 .cursor/rules/*.mdc 分文件模式。这意味着如果你现在开新项目，建议直接用 AGENTS.md 格式，一步到位。</p>
          <p>同时，Claude Code 正在推动 CLAUDE.md 成为行业标准——类似 .cursorrules 但更偏向对话式描述而非规则列表。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">我们的建议</h2>
          <p><strong>新项目：</strong>直接用 AGENTS.md（Cursor 新版）或 CLAUDE.md（Claude Code）。</p>
          <p><strong>现有项目：</strong>保留 .cursorrules 不动，逐步迁移到新版格式。</p>
          <p><strong>通用方案：</strong>用我们的 <Link href="/generator" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">AI Rule Generator</Link> 一次性生成你需要的格式。</p>
        </section>
      </article>
      <BackToTop />
    </div>
  );
}
