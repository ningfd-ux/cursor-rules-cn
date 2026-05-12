"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

const techStacks = [
  { value: "Next.js 14+ with TypeScript, Tailwind CSS, Prisma, NextAuth", label: "Next.js 全栈" },
  { value: "React 18+ with TypeScript, Vite, TanStack Query, Zustand", label: "React SPA" },
  { value: "Vue 3 with Composition API, TypeScript, Nuxt 3", label: "Vue / Nuxt" },
  { value: "Python FastAPI with SQLAlchemy, Pydantic, pytest", label: "Python FastAPI" },
  { value: "Go with standard library, sqlc, testify", label: "Go 后端" },
  { value: "Node.js Express with TypeScript, Prisma, Zod", label: "Node.js Express" },
  { value: "Rust with Axum, sqlx", label: "Rust 后端" },
  { value: "Flutter with Dart, Riverpod", label: "Flutter 移动端" },
  { value: "React Native with Expo, TypeScript", label: "React Native" },
  { value: "SvelteKit with TypeScript", label: "SvelteKit" },
];

const strictnessLevels = [
  { value: "relaxed", label: "宽松", desc: "建议最佳实践，允许灵活调整" },
  { value: "moderate", label: "适中", desc: "强制执行约定，违规时警告" },
  { value: "strict", label: "严格", desc: "严格遵循所有规则，无例外" },
];

const modelTargets = [
  { value: "cursor", label: "Cursor IDE", desc: ".cursorrules 格式" },
  { value: "claude", label: "Claude Code", desc: "对话式指令" },
  { value: "copilot", label: "GitHub Copilot", desc: "copilot-instructions.md 格式" },
  { value: "general", label: "通用", desc: "适用于所有 AI 工具" },
];

export default function GeneratorPage() {
  const [techStack, setTechStack] = useState(techStacks[0].value);
  const [strictness, setStrictness] = useState("moderate");
  const [model, setModel] = useState("cursor");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setGenerated("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ techStack, strictness, model }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setGenerated(data.content || "");
      }
    } catch {
      setError("生成失败，请检查 API 配置后重试");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>

      <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        AI Rule Generator
      </h1>
      <p className="mb-8 text-base text-zinc-500 dark:text-zinc-400">
        输入你的技术栈和偏好，AI 自动生成专业的 .cursorrules 文件。
        不只是规则列表 —— 而是一份适用于你真实项目的完整编码规范。
      </p>

      {/* Form */}
      <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        {/* Tech Stack */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            技术栈
          </label>
          <select
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {techStacks.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Strictness */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            严格程度
          </label>
          <div className="grid grid-cols-3 gap-2">
            {strictnessLevels.map((s) => (
              <button
                key={s.value}
                onClick={() => setStrictness(s.value)}
                className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                  strictness === s.value
                    ? "border-blue-400 bg-blue-50 dark:border-blue-600 dark:bg-blue-950"
                    : "border-zinc-200 dark:border-zinc-700"
                }`}
              >
                <div className="font-medium text-zinc-900 dark:text-zinc-100">{s.label}</div>
                <div className="text-xs text-zinc-400">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Model Target */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            目标 AI 工具
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {modelTargets.map((m) => (
              <button
                key={m.value}
                onClick={() => setModel(m.value)}
                className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                  model === m.value
                    ? "border-blue-400 bg-blue-50 dark:border-blue-600 dark:bg-blue-950"
                    : "border-zinc-200 dark:border-zinc-700"
                }`}
              >
                <div className="font-medium text-zinc-900 dark:text-zinc-100">{m.label}</div>
                <div className="text-xs text-zinc-400">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              生成中...
            </span>
          ) : (
            "✨ 生成 .cursorrules"
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Generated Result */}
      {generated && (
        <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              .cursorrules
            </span>
            <button
              onClick={handleCopy}
              className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
            >
              {copied ? "已复制" : "复制"}
            </button>
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {generated}
            </pre>
          </div>
        </div>
      )}

      {/* Usage Tips */}
      <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">使用方式</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-500 dark:text-zinc-400">
          <li>选择你的技术栈和偏好参数</li>
          <li>点击生成，AI 会根据你的选择创建专属规则</li>
          <li>复制生成的内容</li>
          <li>粘贴到项目根目录的 .cursorrules 文件中</li>
          <li>Cursor 会在每次对话中自动遵循这些规范</li>
        </ol>
      </div>
    </div>
  );
}
