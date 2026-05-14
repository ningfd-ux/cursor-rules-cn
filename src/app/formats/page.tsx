import Link from "next/link";
import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI Coding Config Formats — .cursor/rules / AGENTS.md / CLAUDE.md",
  description: "Compare AI coding tool config formats for Cursor, Claude Code, GitHub Copilot. Find the right format for your project.",
};

const formats = [
  {
    name: ".cursor/rules/*.mdc",
    tool: "Cursor (recommended)",
    location: ".cursor/rules/ directory",
    desc: "Cursor's current recommended format. Supports per-file-type matching and multiple rule files. The official v2 format.",
    genLink: "/generator",
    ruleLink: "/frameworks/react",
    tags: ["cursor", "mdc"],
  },
  {
    name: "AGENTS.md",
    tool: "Cursor / Claude Code",
    location: "Project root",
    desc: "AI agent instruction file supported by Cursor and Claude Code. Guides AI to understand project architecture and conventions.",
    genLink: "/generator",
    ruleLink: "/blog/cursor-rules-vs-agents-md",
    tags: ["cursor", "claude", "agent"],
  },
  {
    name: "CLAUDE.md",
    tool: "Claude Code",
    location: "Project root",
    desc: "Claude Code configuration file. Loaded automatically to set behavior rules and project context.",
    genLink: "/generator",
    ruleLink: "/blog/build-saas-with-cursor-7-days",
    tags: ["claude-code"],
  },
  {
    name: "copilot-instructions.md",
    tool: "GitHub Copilot",
    location: ".github/ directory",
    desc: "GitHub Copilot instructions file. Auto-loaded in the IDE to guide Copilot toward team conventions.",
    genLink: "/generator",
    ruleLink: "/rules/copilot-instructions",
    tags: ["copilot"],
  },
  {
    name: ".cursorrules",
    tool: "Cursor (legacy)",
    location: "Project root",
    desc: "Cursor's legacy global rules file, plain text format. Auto-loaded each session. Still works but .cursor/rules is preferred.",
    genLink: "/generator",
    ruleLink: "/rules/cursor-general-rules",
    tags: ["cursor", "legacy"],
  },
];

export default function FormatsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← Back to home</Link>
      <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI Coding Config File Formats</h1>
      <p className="mb-8 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
        Different AI tools use different config formats. Learn the differences and choose the right one for your project.
      </p>

      <div className="space-y-6">
        {formats.map((fmt) => (
          <div key={fmt.name} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{fmt.name}</h2>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{fmt.tool}</span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">{fmt.location}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={fmt.genLink} className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700">Generate</Link>
                <Link href={fmt.ruleLink} className="rounded-lg border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400">Details</Link>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{fmt.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Not sure which to use?</h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Use the Generator to create all formats at once from your package.json</p>
        <Link href="/generator" className="mt-3 inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Generate</Link>
      </div>

      <BackToTop />
    </div>
  );
}
