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
  { value: "relaxed", label: "Relaxed - Basic conventions" },
  { value: "moderate", label: "Moderate - Production grade" },
  { value: "strict", label: "Strict - Enterprise level" },
];

const models = [
  { value: "cursor", label: "Cursor IDE" },
  { value: "claude", label: "Claude Code" },
  { value: "copilot", label: "GitHub Copilot" },
  { value: "general", label: "General AI" },
];

const outputFormats = [
  { value: "mdc", label: ".cursor/rules/*.mdc (Cursor — recommended)" },
  { value: "agents", label: "AGENTS.md (Claude Code)" },
  { value: "copilot", label: "copilot-instructions.md (GitHub Copilot)" },
  { value: "cursorrules", label: ".cursorrules (Cursor — legacy)" },
];

export default function GeneratorPage() {
  const [techStack, setTechStack] = useState("nextjs");
  const [strictness, setStrictness] = useState("moderate");
  const [model, setModel] = useState("cursor");
  const [outputFormat, setOutputFormat] = useState("mdc");
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
          outputFormat: "mdc",
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
        setError(data.error || "Unable to fetch package.json");
      }
    } catch {
      setError("Network error, please try again");
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
        setError(data.error || "Unknown error");
      }
    } catch {
      setError("Network error, please try again");
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
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Generate AI coding standards <span className="text-green-600">from your repo</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          Paste your package.json. AI detects your stack and generates project-specific standards — not generic advice.
        </p>

      </section>

      <section className="mb-10">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          {/* Section A: Repo Context (primary, always visible) */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Repo Context</h3>
            <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">Paste your package.json. AI analyzes your actual dependencies to generate project-specific standards.</p>
            <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
              <div className="flex items-center gap-1.5 border-b border-zinc-700 px-4 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <div className="flex">
                <div className="select-none border-r border-zinc-700 px-3 py-4 text-right font-mono text-xs leading-relaxed text-zinc-600">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <textarea
                  value={packageJson}
                  onChange={(e) => setPackageJson(e.target.value)}
                  placeholder={PACKAGE_EXAMPLE}
                  rows={7}
                  className="flex-1 resize-y bg-transparent px-4 py-4 font-mono text-xs leading-relaxed text-green-400 placeholder-zinc-600 outline-none"
                  style={{ minHeight: "200px" }}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* GitHub Import (expandable, below textarea) */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setShowRepoInput(!showRepoInput)}
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <svg className={`h-4 w-4 transition-transform ${showRepoInput ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Or import from a GitHub repo
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
                          Fetching...
                        </span>
                      ) : repoFetched ? "✅ Fetched" : "Fetch package.json"}
                    </button>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-400">Enter a public GitHub repo URL to auto-extract its package.json</p>
                </div>
              )}
            </div>
          </div>

          {/* Section B: Preferences (collapsible, smaller) */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("preferences-section");
                if (el) el.classList.toggle("hidden");
              }}
              className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Preferences
            </button>
            <div id="preferences-section" className="mt-4 hidden">
              <div className="mb-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">Tech Stack</label>
                  <select value={techStack} onChange={(e) => setTechStack(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    disabled={isLoading}>
                    {frameworks.map((f) => (<option key={f.value} value={f.value}>{f.label}</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">Strictness</label>
                  <select value={strictness} onChange={(e) => setStrictness(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    disabled={isLoading}>
                    {strictnessLevels.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">Target Tool</label>
                  <select value={model} onChange={(e) => setModel(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    disabled={isLoading}>
                    {models.map((m) => (<option key={m.value} value={m.value}>{m.label}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">Output Format</label>
                <div className="grid gap-2 sm:grid-cols-2">
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
            </div>
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
                AI is analyzing your project...
              </span>
            ) : ("Generate Standards")}
          </button>

          {error && <p className="mt-3 text-center text-sm text-red-500">{error}</p>}
        </div>
      </section>

      {generatedRules && (
        <section className="mb-10 space-y-6">
          {/* Detected Stack */}
          {packageJson && (
            <div className="rounded-xl border border-green-200 bg-green-50/50 p-5 dark:border-green-900 dark:bg-green-950/30">
              <h3 className="mb-3 text-sm font-semibold text-green-800 dark:text-green-300">Detected Stack</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                  {frameworks.find(f => f.value === techStack)?.label || techStack}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                  {models.find(m => m.value === model)?.label || model}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                  {strictnessLevels.find(s => s.value === strictness)?.label || strictness}
                </span>
              </div>
            </div>
          )}

          {/* Generated Standards */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generated Standards</h2>
                <p className="mt-1 text-xs text-zinc-400">
                  Each standard references a specific detected dependency or architecture pattern
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Generated for {models.find(m => m.value === model)?.label || model}
                </span>
                <button onClick={handleCopy}
                  className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                  {copied ? "✅ Copied" : "📋 Copy All"}
                </button>
              </div>
            </div>
            <div className="overflow-auto rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <pre className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">{generatedRules}</pre>
            </div>
          </div>

          {/* Export Formats */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Save as</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`rounded-lg border px-4 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 ${outputFormat === "mdc" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"}`}>
                .cursor/rules/*.mdc
              </span>
              <span className={`rounded-lg border px-4 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 ${outputFormat === "agents" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"}`}>
                AGENTS.md
              </span>
              <span className={`rounded-lg border px-4 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 ${outputFormat === "copilot" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"}`}>
                copilot-instructions.md
              </span>
              <span className={`rounded-lg border px-4 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 ${outputFormat === "cursorrules" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"}`}>
                .cursorrules (legacy)
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
