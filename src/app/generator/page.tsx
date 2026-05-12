"use client";

import { useState } from "react";

const frameworks = [
  { value: "nextjs", label: "Next.js (App Router)" },
  { value: "react", label: "React" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "vue", label: "Vue 3" },
  { value: "typescript", label: "TypeScript" },
  { value: "nodejs", label: "Node.js" },
];

const strictnessLevels = [
  { value: "宽松", label: "宽松 - 基础规范" },
  { value: "中等", label: "中等 - 标准生产级" },
  { value: "严格", label: "严格 - 企业级规范" },
];

const models = [
  { value: "claude", label: "Claude 3.5 Sonnet" },
  { value: "gpt4", label: "GPT-4.1" },
  { value: "gemini", label: "Gemini 2.5" },
];

export default function GeneratorPage() {
  const [framework, setFramework] = useState("nextjs");
  const [strictness, setStrictness] = useState("中等");
  const [model, setModel] = useState("claude");
  const [generatedRules, setGeneratedRules] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedRules("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ framework, strictness, model }),
      });
      const data = await response.json();
      if (data.rules) {
        setGeneratedRules(data.rules);
      } else {
        setGeneratedRules("生成失败：" + (data.error || "未知错误"));
      }
    } catch (e) {
      setGeneratedRules("生成失败，请检查网络连接");
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
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          🆕 AI 智能生成
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          <span className="text-green-600">AI Rule Generator</span>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          选择你的技术栈和严格程度，AI 自动为你生成专属的{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            .cursorrules
          </code>{" "}
          配置文件。
          <br />
          让 Cursor 写出真正能上线的生产级代码。
        </p>
      </section>

      {/* Generator Form */}
      <section className="mb-10">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-6 sm:grid-cols-3 mb-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                技术栈
              </label>
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}
              >
                {frameworks.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                严格程度
              </label>
              <select
                value={strictness}
                onChange={(e) => setStrictness(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}
              >
                {strictnessLevels.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                目标模型
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                disabled={isLoading}
              >
                {models.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                AI 正在生成...
              </span>
            ) : (
              "✨ 生成我的专属 .cursorrules"
            )}
          </button>
        </div>
      </section>

      {/* Output */}
      {generatedRules && (
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              📄 生成结果
            </h2>
            <button
              onClick={handleCopy}
              className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {copied ? "✅ 已复制" : "📋 复制全部"}
            </button>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <pre className="overflow-auto p-6 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 max-h-96">
              {generatedRules}
            </pre>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-400 dark:text-zinc-500">
            复制后保存为项目根目录下的{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">
              .cursorrules
            </code>{" "}
            文件即可生效
          </p>
        </section>
      )}

      {/* Tips */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          💡 使用技巧
        </h3>
        <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            生成后根据项目实际情况微调规则内容
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            配合项目级的{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">
              tsconfig.json
            </code>{" "}
            效果更好
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            团队协作时可以共享同一份 .cursorrules 保证代码风格统一
          </li>
        </ul>
      </section>
    </div>
  );
}
