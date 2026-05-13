import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import BackToTop from "@/components/BackToTop";
import FloatingFeedback from "@/components/FloatingFeedback";
import FloatingShare from "@/components/FloatingShare";
import { rules, categories } from "@/data/rules";

const featuredRules = rules.slice(0, 3);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          Detect stack · Generate standards · Ship reliable AI code
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          AI Coding Standards<span className="text-blue-600"> & Generator</span>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          Paste your repo → AI detects your stack → Get project-specific rules.
          Not generic templates. Real standards based on your actual dependencies.
        </p>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate from your repo
          </Link>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Browse rules
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 text-sm text-zinc-400 dark:text-zinc-500">
          <span className="flex items-center gap-1"><strong className="text-zinc-600 dark:text-zinc-300">{rules.length}</strong> rules</span>
          <span>·</span>
          <span className="flex items-center gap-1"><strong className="text-zinc-600 dark:text-zinc-300">{categories.length}</strong> categories</span>
          <span>·</span>
          <span className="flex items-center gap-1"><strong className="text-zinc-600 dark:text-zinc-300">5</strong> blog posts</span>
          <span>·</span>
          <span className="flex items-center gap-1">4 output formats</span>
        </div>
      </section>

      {/* 网站数据 - 信任信号 */}
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {[
          ["📦", rules.length, "coding rules"],
          ["📄", "108", "static pages"],
          ["📝", "5", "blog posts"],
          ["⚡", `${categories.length}`, "categories"],
        ].map(([icon, num, label]) => (
          <div key={label as string} className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-2xl">{icon}</div>
            <div className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{num}</div>
            <div className="text-xs text-zinc-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Blog articles */}
      <section className="mb-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 dark:border-blue-900 dark:from-blue-950 dark:to-zinc-900 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">📝 Latest articles</h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Build log · Format comparison · Beginner's guide · TypeScript setup</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            View all articles
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/blog/build-saas-with-cursor-7-days" className="group rounded-lg border border-blue-100 bg-white p-4 transition-all hover:shadow-md dark:border-blue-800 dark:bg-zinc-800/50">
            <span className="text-xs text-blue-600 dark:text-blue-400">🔥 Featured</span>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">7 Days from 0 to Launch</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Complete build log of this site</p>
          </Link>
          <Link href="/blog/cursor-rules-vs-agents-md" className="group rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50">
            <span className="text-xs text-zinc-400">Comparison</span>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">.cursorrules vs AGENTS.md</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Which one to use?</p>
          </Link>
          <Link href="/blog/how-to-write-cursor-rules" className="group hidden rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50 lg:block">
            <span className="text-xs text-zinc-400">Guide</span>
            <h3 className="mt-1 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">How to Write Cursor Rules</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Complete guide with templates</p>
          </Link>
        </div>
      </section>

      {/* 热门分类 */}
      <section className="mb-12">
        <h2 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          📂 Categories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/frameworks/react", icon: "⚛️", name: "React", desc: "React + Hooks 开发规则", count: rules.filter(r => r.tags.includes("react")).length },
            { href: "/frameworks/nextjs", icon: "▲", name: "Next.js", desc: "App Router 完整配置", count: rules.filter(r => r.tags.includes("nextjs")).length },
            { href: "/frameworks/vue", icon: "🟢", name: "Vue", desc: "Vue 3 + Composition API", count: rules.filter(r => r.tags.includes("vue")).length },
            { href: "/frameworks/python", icon: "🐍", name: "Python", desc: "FastAPI + Django 规则", count: rules.filter(r => r.tags.includes("python")).length },
            { href: "/frameworks/go", icon: "🔷", name: "Go", desc: "Golang 编码规范", count: rules.filter(r => r.tags.includes("go")).length },
            { href: "/compare", icon: "⚖️", name: "工具对比", desc: "Cursor vs Copilot 等", count: 3 },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  {cat.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400">{cat.desc}</p>
              {cat.count > 0 && (
                <span className="mt-2 inline-block rounded bg-zinc-50 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                  {cat.count} rules
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* 精选推荐 (server-rendered) */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          🔥 Featured
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>

      {/* 分类导航 (server-rendered) */}
      <section className="mb-10" id="categories">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          📂 分类浏览
        </h2>
        <div className="flex flex-wrap gap-2" id="category-filters">
          <button
            data-cat="all"
            className="category-btn inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white transition-colors"
          >
            全部
            <span className="text-xs text-blue-200">{rules.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              data-cat={cat.slug}
              className="category-btn inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {cat.name}
              <span className="text-xs text-zinc-400 dark:text-zinc-500">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Rules 列表 (all server-rendered as static HTML) */}
      <section id="rules-section">
        <div className="mb-4 flex items-center justify-between" id="rules-header">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            📖 All rules
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <button data-sort="default" className="sort-btn rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-700 transition-colors dark:bg-zinc-800 dark:text-zinc-300">
              默认
            </button>
            <button data-sort="newest" className="sort-btn rounded-md px-2.5 py-1 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
              最新
            </button>
            <span className="text-xs text-zinc-300 dark:text-zinc-600">|</span>
            <span className="text-zinc-400" id="rule-count">{rules.length}</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" id="rules-grid">
          {rules.map((rule) => (
            <div key={rule.slug} className="rule-card" data-category={rule.category} data-date={rule.updatedAt}>
              <RuleCard rule={rule} />
            </div>
          ))}
        </div>
      </section>

      {/* 社区贡献 */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          🤝 Share your rules
        </h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Got a good rule? Submit to the community and help other developers.
        </p>
        <a
          href="https://github.com/ningfd-ux/cursor-rules-cn/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          通过 GitHub Issues 提交
        </a>
      </section>

      <BackToTop />
      <FloatingShare />
      <FloatingFeedback />

      {/* Client-side filtering script - lightweight, no framework needed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  var activeCat = null;
  var sortMode = "default";

  function filterAndSort() {
    var cards = document.querySelectorAll("#rules-grid .rule-card");
    var visible = 0;
    cards.forEach(function(card) {
      var matches = !activeCat || card.dataset.category === activeCat;
      card.style.display = matches ? "" : "none";
      if (matches) visible++;
    });

    // Sort
    if (sortMode === "newest") {
      var grid = document.getElementById("rules-grid");
      var arr = Array.from(cards).filter(function(c) { return c.style.display !== "none"; });
      arr.sort(function(a, b) { return b.dataset.date.localeCompare(a.dataset.date); });
      arr.forEach(function(c) { grid.appendChild(c); });
    }

    document.getElementById("rule-count").textContent = visible;
    var header = document.querySelector("#rules-section h2");
    if (activeCat) {
      var name = document.querySelector("#category-filters [data-cat='" + activeCat + "']");
      header.textContent = "📖 " + (name ? name.textContent.trim().replace(/\\d+$/, "").trim() : "") + " rules";
    } else {
      header.textContent = "📖 All rules";
    }
  }

  // Category buttons
  document.querySelectorAll("#category-filters .category-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      activeCat = this.dataset.cat === "all" ? null : this.dataset.cat;
      document.querySelectorAll("#category-filters .category-btn").forEach(function(b) {
        if (b === btn) {
          b.className = b.className.replace(/bg-zinc-100[^"]*/g, "bg-blue-600 text-white");
        } else {
          b.className = "category-btn inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700";
        }
      });
      filterAndSort();
    });
  });

  // Sort buttons
  document.querySelectorAll("#rules-header .sort-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      sortMode = this.dataset.sort;
      document.querySelectorAll("#rules-header .sort-btn").forEach(function(b) {
        if (b === btn) {
          b.className = "sort-btn rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-700 transition-colors dark:bg-zinc-800 dark:text-zinc-300";
        } else {
          b.className = "sort-btn rounded-md px-2.5 py-1 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300";
        }
      });
      filterAndSort();
    });
  });
})();
`,
        }}
      />
    </div>
  );
}
