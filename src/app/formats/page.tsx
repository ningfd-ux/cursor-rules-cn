import Link from "next/link";
import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI 编码配置文件格式大全 - .cursorrules / AGENTS.md / CLAUDE.md",
  description: "Cursor、Claude Code、GitHub Copilot 等 AI 编程工具的配置文件格式对比和使用指南。",
};

const formats = [
  {
    name: ".cursorrules",
    tool: "Cursor (旧版)",
    location: "项目根目录",
    desc: "Cursor 传统的全局规则文件，纯文本格式。AI 每次对话自动加载。适用于老版本 Cursor 或简单项目。",
    genLink: "/generator",
    ruleLink: "/rules/cursor-general-rules",
    tags: ["cursor", "legacy"],
  },
  {
    name: ".cursor/rules/*.mdc",
    tool: "Cursor (新版)",
    location: ".cursor/rules/ 目录",
    desc: "Cursor 新版分文件规则格式。支持按文件类型匹配，可以拆分多个规则文件。官方推荐的新格式。",
    genLink: "/generator",
    ruleLink: "/frameworks/react",
    tags: ["cursor", "mdc"],
  },
  {
    name: "AGENTS.md",
    tool: "Cursor / Claude Code",
    location: "项目根目录",
    desc: "AI Agent 指令文件。Cursor 和 Claude Code 都支持，用于指导 AI 理解项目架构和开发规范。",
    genLink: "/generator",
    ruleLink: "/blog/cursor-rules-vs-agents-md",
    tags: ["cursor", "claude", "agent"],
  },
  {
    name: "CLAUDE.md",
    tool: "Claude Code",
    location: "项目根目录",
    desc: "Claude Code 专用配置文件。自动加载，用于设定 Claude CLI 的行为规范和项目上下文。",
    genLink: "/generator",
    ruleLink: "/blog/build-saas-with-cursor-7-days",
    tags: ["claude-code"],
  },
  {
    name: "copilot-instructions.md",
    tool: "GitHub Copilot",
    location: ".github/ 目录",
    desc: "GitHub Copilot 的指令文件。在 IDE 中自动加载，指导 Copilot 生成符合团队规范的代码。",
    genLink: "/generator",
    ruleLink: "/rules/copilot-instructions",
    tags: ["copilot"],
  },
];

export default function FormatsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回首页</Link>
      <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI 编码配置文件格式大全</h1>
      <p className="mb-8 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
        不同 AI 工具使用的配置文件格式各不相同。了解它们的区别，选择最适合你项目的格式。
      </p>

      <div className="space-y-6">
        {formats.map((fmt) => (
          <div key={fmt.name} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{fmt.name}</h2>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{fmt.tool}</span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">位置：{fmt.location}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={fmt.genLink} className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700">生成</Link>
                <Link href={fmt.ruleLink} className="rounded-lg border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400">详情</Link>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{fmt.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">不知道该用哪个？</h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">用 AI Generator 一次性生成全部 4 种格式</p>
        <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">去生成</Link>
      </div>

      <BackToTop />
    </div>
  );
}
