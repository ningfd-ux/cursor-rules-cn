"use client";

import { useState } from "react";

const PACKAGE_EXAMPLE = `{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0"
  }
}`;

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

const outputFormats = [
  { value: "cursorrules", label: ".cursorrules（Cursor 传统格式）" },
  { value: "mdc", label: ".cursor/rules/*.mdc（Cursor 新版）" },
  { value: "agents", label: "AGENTS.md（Claude Code）" },
  { value: "copilot", label: "copilot-instructions.md（GitHub Copilot）" },
];

export default function GeneratorPage() {
  const [techStack, setTechStack] = useState("nextjs");
  const [strictness, setStrictness] = useState("moderate");
  const [model, setModel] = useState("cursor");
  const [outputFormat, setOutputFormat] = useState("cursorrules");
  const [packageJson, setPackageJson] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [generatedRules, setGeneratedRules] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingRepo, setIsFetchingRepo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [showPackageInput, setShowPackageInput] = useState(false);
  const [showRepoInput, setShowRepoInput] = useState(false);
  const [repoFetched, setRepoFetched] = useState(false);

  const handleFetchRepo = async () => {
    if (!repoUrl.trim()) return;
    setIsFetchingRepo(true);
    setError("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          techStack,
          strictness: "moderate",
          model: "cursor",
          outputFormat: "cursorrules",
          repoUrl: repoUrl.trim(),
          packageJson: "",
        }),
      });
      const data = await response.json();
      if (data.content) {
        setPackageJson(data.content);
        setRepoFetched(true);
        setShowPackageInput(true);
      } else {
        setError(data.error || "无法获取 package.json");
      }
    } catch {
      setError("网络连接失败，请稍后重试");
    } finally {
      setIsFetchingRepo(false);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError("");
    setGeneratedRules("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          techStack,
          strictness,
          model,
          outputFormat,
          packageJson,
          repoUrl: showRepoInput ? repoUrl.trim() : "",
        }),
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
          AI Repo Standards Generator
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          粘贴你的 package.json 或导入 GitHub 仓库，AI 自动分析项目架构，生成专属的编码规范配置文件。
        </p>
      </section>

      <section className="mb-10">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          {/* Row 1: Tech Stack + Strictness + Tool */}
          <div className="mb-5 grid gap-5 sm:grid-cols-3">
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

          {/* Row 2: Output Format */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">输出格式</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {outputFormats.map((fmt) => (
                <label key={fmt.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${
                    outputFormat === fmt.value
                      ? "border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20"
                      : "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="outputFormat"
                    value={fmt.value}
                    checked={outputFormat === fmt.value}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="h-4 w-4 accent-green-600"
                    disabled={isLoading}
                  />
                  <span className="text-zinc-700 dark:text-zinc-300">{fmt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row 3: GitHub Repo Import */}
          <div className="mb-5">
            <button
              type="button"
              onClick={() => setShowRepoInput(!showRepoInput)}
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg className={`h-4 w-4 transition-transform ${showRepoInput ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              导入 GitHub 仓库（自动获取 package.json）
            </button>
            {showRepoInput && (
              <div className="mt-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => { setRepoUrl(e.target.value); setRepoFetched(false); }}
                    placeholder="https://github.com/user/repo"
                    className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    disabled={isLoading || isFetchingRepo}
                  />
                  <button
                    onClick={handleFetchRepo}
                    disabled={isFetchingRepo || !repoUrl.trim()}
                    className="shrink-0 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
                  >
                    {isFetchingRepo ? (
                      <span className="flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        获取中
                      </span>
                    ) : repoFetched ? "✅ 已获取" : "获取 package.json"}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-zinc-400">输入公开 GitHub 仓库地址，自动提取 package.json 并用于生成</p>
              </div>
            )}
          </div>

          {/* Row 4: Package.json */}
          <div className="mb-5">
            <button
              type="button"
              onClick={() => setShowPackageInput(!showPackageInput)}
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg className={`h-4 w-4 transition-transform ${showPackageInput ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              手动粘贴 package.json（可选）
            </button>
            {showPackageInput && (
              <div className="mt-3">
                <textarea
                  value={packageJson}
                  onChange={(e) => setPackageJson(e.target.value)}
                  placeholder={PACKAGE_EXAMPLE}
                  rows={6}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-mono text-xs leading-relaxed focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  disabled={isLoading}
                />
              </div>
            )}
          </div>

          {/* Generate Button */}
          <button onClick={handleGenerate} disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50">
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                AI 正在分析项目并生成...
              </span>
            ) : ("✨ 从我的项目生成编码规范")}
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
            <pre className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">{generatedRules}</pre>
          </div>
        </section>
      )}

      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">💡 使用技巧</h3>
        <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>粘贴 GitHub 仓库地址，AI 自动获取 package.json 分析你的技术栈</li>
          <li>选择不同的输出格式（.cursorrules / .mdc / AGENTS.md / copilot-instructions.md）适配不同工具</li>
          <li>生成后根据项目实际情况微调规则内容</li>
        </ul>
      </section>
    </div>
  );
}
