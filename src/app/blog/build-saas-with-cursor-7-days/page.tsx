import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "7 天从 0 到上线：我用 Cursor + Claude Code 搭了一个规则站",
  description: "从头搭建 cursorrules.fun 的真实记录。使用的完整 Prompt、Cursor Rules、AI 工作流全部公开。",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回文章列表
      </Link>

      <article className="prose max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span>
            <span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">Cursor</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">实战</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            7 天从 0 到上线：我用 Cursor + Claude Code 搭了一个规则站
          </h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">
            7 天。从买域名到上线 100 页、81 条规则、AI Rule Generator。本文记录完整工作流，包括所有 Prompt 和配置。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">为什么要做这个站</h2>
          <p>
            我在 Cursor 里写代码半年了。最大的感受是：Cursor 很强，但默认配置下 AI 经常写出不符合自己项目规范的代码。解决办法是 .cursorrules 文件——但每次新项目都要重新写，网上的中文资料少，英文资源散。
          </p>
          <p>
            于是决定：不如建一个站，把规则集中起来，再做一个生成器，让开发者选技术栈就能拿到可直接用的规则文件。域名花了 53 块人民币，托管零成本。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">技术栈</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
            <ul className="space-y-1 text-sm">
              <li>前端框架：Next.js 16 (Static Export)</li>
              <li>样式：Tailwind CSS 4</li>
              <li>部署：Cloudflare Pages (免费)</li>
              <li>API：Cloudflare Pages Functions</li>
              <li>AI 模型：DeepSeek (Generator)</li>
              <li>域名：cursorrules.fun (Spaceship, 53 元)</li>
              <li>版本控制：GitHub</li>
            </ul>
          </div>
          <p>
            全部静态导出，零服务器成本。AI Generator 走 Cloudflare Functions，按调用计费，目前月费为 0。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 1-2：基础设施</h2>
          <p>
            第一天做的事：
          </p>
          <ul>
            <li>买域名，配 DNS 指向 Cloudflare</li>
            <li>新建 Next.js 项目，配 Tailwind</li>
            <li>搭基础布局（Header + Footer + 首页骨架）</li>
            <li>写第一批 18 条 Cursor Rules 的数据文件</li>
          </ul>
          <p>
            关键决策：用 <code>output: "export"</code> 静态导出。这样 Cloudflare Pages 可以纯静态托管，速度快，免费额度用不完。但代价是后来加 API 时需要改用 Pages Functions。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 3-4：内容生产流程</h2>
          <p>
            这是最关键的环节。我的内容生产 Prompt：
          </p>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">// 每条规则的生成 Prompt</p>
            <pre className="text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">Generate a cursor rule for a [framework] project.
Include:
- Code style (naming, formatting)
- Architecture constraints
- Error handling patterns
- Common anti-patterns to avoid

Format: section headers with ##, bullet points for rules.
Line count: about 30-40 lines.
Target developers who actually ship production code.</pre>
          </div>

          <p>
            每条规则不是干巴巴的列表——我手动追加了"使用场景"和"常见错误"两个板块。这样用户看到的不只是指令，还能理解什么时候用、怎么避免踩坑。
          </p>
          <p>
            从 18 条到 81 条，核心就靠这个流程。配合 Python 脚本批量插入数据文件，一次加 15-20 条。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 5-6：AI Rule Generator</h2>
          <p>
            规则库做到一半，我发现一个问题：用户不可能每次都来站里翻规则。他们真正想要的是：输入技术栈，一键生成专属规则文件。
          </p>
          <p>
            于是做了 Generator：
          </p>
          <ul>
            <li>前端选技术栈 + 严格程度 + 输出格式</li>
            <li>Cloudflare Function 调 DeepSeek API 生成</li>
            <li>支持 4 种输出格式：.cursorrules / .mdc / AGENTS.md / copilot-instructions.md</li>
            <li>支持 GitHub 仓库导入，自动分析 package.json</li>
          </ul>
          <p>
            这是整个站最有产品感的功能。用户可以粘贴自己的 GitHub 仓库地址，AI 分析后生成专属规则，下载保存。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">Day 7：SEO 基础设施</h2>
          <ul>
            <li>sitemap.xml + robots.txt + RSS Feed</li>
            <li>GA4 + Google Search Console</li>
            <li>Article + Website Schema（JSON-LD）</li>
            <li>交叉内链（Topic Cluster 结构）</li>
            <li>Framework 聚合页（React / Next.js / Vue / Python / Go）</li>
            <li>对比页（Cursor vs Copilot vs Windsurf vs Claude Code）</li>
          </ul>
          <p>
            全部静态生成，搜索引擎可以直接索引，不需要 JS 执行。
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">一些数字</h2>
          <div className="grid grid-cols-2 gap-4 not-prose sm:grid-cols-4">
            {[
              ["81", "条规则"],
              ["100", "静态页面"],
              ["7", "天开发"],
              ["53", "元总成本"],
            ].map(([num, label]) => (
              <div key={num} className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-700 dark:bg-zinc-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{num}</div>
                <div className="text-xs text-zinc-400">{label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">踩过的坑</h2>
          <ul>
            <li><strong>模板字面量冲突：</strong>TypeScript 模板字面量（` ）和 Markdown 的后引号（```）冲突，Python 脚本生成数据文件时反复踩坑。最终用 `~~~` 代替代码块标记。</li>
            <li><strong>Windows EBUSY 文件锁：</strong>本地编译卡在 out 目录删除，不影响 Cloudflare 部署。</li>
            <li><strong>GSC 收录延迟：</strong>新站不要急，Google 爬虫要排队，2-4 周才开始看到数据。</li>
            <li><strong>域名权重低：</strong>.fun 域名对开发者不够专业，后续考虑换 .dev。</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">学到的最重要一件事</h2>
          <p>
            做这个站之前，我以为重点是"规则内容"。做完之后发现，真正有价值的是<strong>工作流</strong>——怎么用 AI 工具高效地生产内容、怎么搭 SEO 资产、怎么让产品随着时间的推移积累权重。
          </p>
          <p>
            规则本身没有护城河，三个月后谁都能抄。但域名权重、Google 收录、交叉内链、用户信任——这些是时间和持续运营积累的，抄不走。
          </p>

        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "cursor-rules-vs-agents-md", title: ".cursorrules vs AGENTS.md", excerpt: "三种配置文件格式对比" },
          { slug: "ai-coding-workflow-beginners", title: "AI 编码工作流入门指南", excerpt: "从零开始用 Cursor" },
        ]}
        prev={{ slug: "build-saas-with-cursor-7-days", title: "7天从0到上线" }}
      />
      <BackToTop />
    </div>
  );
}
