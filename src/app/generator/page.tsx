"use client";

import { useState } from "react";

const frameworks = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "vue", label: "Vue 3" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "typescript", label: "TypeScript" },
  { value: "node", label: "Node.js" },
  { value: "fastapi", label: "FastAPI" },
];

const strictnessLevels = [
  { value: "relaxed", label: "宽松 - 基础规范" },
  { value: "moderate", label: "中等 - 标准生产级" },
  { value: "strict", label: "严格 - 企业级规范" },
];

const models = [
  { value: "cursor", label: "Cursor IDE" },
  { value: "claude", label: "Claude Code" },
  { value: "copilot", label: "GitHub Copilot" },
  { value: "general", label: "通用 AI" },
];

export default function GeneratorPage() {
  const [techStack, setTechStack] = useState("nextjs");
  const [strictness, setStrictness] = useState("moderate");
  const [model, setModel] = useState("cursor");
  const [generatedRules, setGeneratedRules] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setIsLoading(true);
    setError("");
    setGeneratedRules("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ techStack, strictness, model }),
      });
      const data = await response.json();
      if (data.content) {
        setGeneratedRules(data.content);
      } else {
        setError(data.error || "未知错误");
      }
    } catch {
      setError("网络连接失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedRules);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <section className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          NEW · AI 智能生成
        </span>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          AI Rule Generator
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          选择你的技术栈和严格程度，AI 自动生成专属的 .cursorrules 配置文件。
        </p>
      </section>

      <section className="mb-10">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-6 grid gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">技术栈</label>
              <select value={techStack} onChange={(e) => setTechStack(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}>
                {frameworks.map((f) => (<option key={f.value} value={f.value}>{f.label}</option>))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">严格程度</label>
              <select value={strictness} onChange={(e) => setStrictness(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}>
                {strictnessLevels.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">目标工具</label>
              <select value={model} onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}>
                {models.map((m) => (<option key={m.value} value={m.value}>{m.label}</option>))}
              </select>
            </div>
          </div>

          <button onClick={handleGenerate} disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50">
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                AI 正在生成...
              </span>
            ) : ("✨ 生成我的专属 .cursorrules")}
          </button>

          {error && <p className="mt-3 text-center text-sm text-red-500">{error}</p>}
        </div>
      </section>

      {generatedRules && (
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">生成结果</h2>
            <button onClick={handleCopy}
              className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
              {copied ? "✅ 已复制" : "📋 复制全部"}
            </button>
          </div>
          <div className="overflow-auto rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <pre className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">{generatedRules}</pre>
          </div>
        </section>
      )}

      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">💡 使用技巧</h3>
        <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>生成后根据项目实际情况微调规则内容</li>
          <li>配合 .cursorrules 文件放在项目根目录即可生效</li>
          <li>团队协作时可以共享同一份配置保证代码风格统一</li>
        </ul>
      </section>
    </div>
  );
}
