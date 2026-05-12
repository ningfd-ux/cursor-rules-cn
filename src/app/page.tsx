import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import BackToTop from "@/components/BackToTop";
import { rules, categories } from "@/data/rules";

const featuredRules = rules.slice(0, 3);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero - New Positioning */}
      <section className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          🚀 Production Ready AI Code
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          让 AI 写出真正能上线的代码
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          不要再让 AI 写出玩具代码、废弃 API 和满是 any 的垃圾代码。
          <br />
          精选 46 条经过验证的 AI 编码规则，或者用 AI 生成你的专属配置。
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            ✨ AI 智能生成规则
          </Link>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            📖 浏览规则库
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-zinc-400 dark:text-zinc-500">
          <span className="flex items-center gap-1">✅ 不再有 deprecated API</span>
          <span className="flex items-center gap-1">✅ 不再有类型不安全的 any</span>
          <span className="flex items-center gap-1">✅ 不再有只会写 useEffect 的 AI</span>
        </div>
      </section>

      {/* Before / After Demo */}
      <section className="mb-10">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-6 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            🔍 加了 Rules 之后，AI 写代码的区别有多大？
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-2 rounded bg-red-100 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-900 dark:text-red-300">
                ❌ 没有 Rules - AI 写的垃圾代码
              </div>
              <pre className="rounded-lg bg-red-50 p-4 text-xs leading-relaxed text-red-800 dark:bg-red-900/20 dark:text-red-300 overflow-x-auto">
{`// 😡 全是 any，类型安全为零
function fetchUser(id: any): any {
  return fetch(\`/api/users/\${id}\`);
}

// 😡 废弃的 Pages Router 写法
export async function getServerSideProps() {
  const data = await fetchUser(1);
  return { props: { data } };
}

// 😡 滥用 useEffect
useEffect(() => {
  fetchData().then(setData);
}, []);`}
              </pre>
            </div>
            <div>
              <div className="mb-2 rounded bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
                ✅ 有 Rules - 生产级代码质量
              </div>
              <pre className="rounded-lg bg-green-50 p-4 text-xs leading-relaxed text-green-800 dark:bg-green-900/20 dark:text-green-300 overflow-x-auto">
{`// ✅ 完整的类型安全
interface User {
  id: string;
  name: string;
  email: string;
}

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

// ✅ App Router + Server Components
export default async function UserPage() {
  const user = await fetchUser('1');
  return <UserProfile user={user} />;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 精选推荐 */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          🔥 精选推荐
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </section>

      {/* 分类导航 */}
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

      {/* Rules 列表 */}
      <section id="rules-section">
        <div className="mb-4 flex items-center justify-between" id="rules-header">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            📖 全部规则
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <button data-sort="default" className="sort-btn rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-700 transition-colors dark:bg-zinc-800 dark:text-zinc-300">
              默认
            </button>
            <button data-sort="newest" className="sort-btn rounded-md px-2.5 py-1 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
              最新
            </button>
            <span className="text-xs text-zinc-300 dark:text-zinc-600">|</span>
            <span className="text-zinc-400" id="rule-count">{rules.length} 条</span>
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
          🤝 分享你的规则
        </h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          有自己总结的好规则？提交到社区，帮助更多开发者。
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

    document.getElementById("rule-count").textContent = visible + " 条";
    var header = document.querySelector("#rules-section h2");
    if (activeCat) {
      var name = document.querySelector("#category-filters [data-cat='" + activeCat + "']");
      header.textContent = "📖 " + (name ? name.textContent.trim().replace(/\\d+$/, "").trim() : "") + " 规则";
    } else {
      header.textContent = "📖 全部规则";
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
