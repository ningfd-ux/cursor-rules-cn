import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import BlogFooter from "@/components/BlogFooter";

export const metadata: Metadata = {
  title: "我用 Cursor 7 天搭了一个 AI 编码规范站，总成本 53 块",
  description: "面向 V2EX/掘金/知乎的技术分享文章：从买域名到上线 108 页的完整经历。",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>
      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">V2EX</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">分享</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">我用 Cursor 7 天搭了一个 AI 编码规范站，总成本 53 块</h1>
        </header>
        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">起因很简单：每次新建 Cursor 项目都要重新配 .cursorrules，网上的中文资料少，英文资源散。不如自己做一个，还带 AI 生成功能。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">花了多少钱？</h2>
          <ul>
            <li>域名 cursorrules.fun：53 元（Spaceship）</li>
            <li>托管：0 元（Cloudflare Pages 免费）</li>
            <li>API：0 元/月（DeepSeek 免费额度够用）</li>
            <li>开发工具：0 元（Cursor + Claude Code）</li>
          </ul>
          <p><strong>总成本：53 元。一次性。</strong></p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">做了什么？</h2>
          <ul>
            <li><strong>81 条规则，108 个页面</strong> — 全部 SSG 静态渲染，搜索引擎可以直接索引，不需要 JS 执行。</li>
            <li><strong>AI Rule Generator</strong> — 粘贴 GitHub 仓库地址，AI 自动分析 package.json，生成 .cursorrules / AGENTS.md / CLAUDE.md / copilot-instructions.md 四种格式的配置文件，支持下载。</li>
            <li><strong>交叉内链 + Schema 标记</strong> — 14 条核心规则形成 Topic Cluster，Article + Website + SearchAction 三个 Schema 全配了。</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">技术栈</h2>
          <ul>
            <li>Next.js 16（Static Export，纯静态零服务器）</li>
            <li>Tailwind CSS 4 + Cloudflare Pages + Cloudflare Functions</li>
            <li>Generator 走了 DeepSeek API</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">踩过的坑</h2>
          <ul>
            <li>TypeScript 模板字面量和 Markdown 反引号冲突 — 生成脚本踩了十几次坑，最后用 tildes 替代</li>
            <li>Windows 本地编译卡 out 目录锁 — 不影响 Cloudflare 构建</li>
            <li>New site SEO 需要 2-4 周才会有搜索数据</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">开源和地址</h2>
          <p>🏠 <Link href="/" className="text-blue-600 dark:text-blue-400">cursorrules.fun</Link></p>
          <p>🎛️ <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Rule Generator</Link></p>
          <p>💻 <a href="https://github.com/ningfd-ux/cursor-rules-cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub 仓库</a>（欢迎 Star）</p>
          <p>欢迎反馈和建议 🚀</p>
        </section>
      </article>
      <BlogFooter
        related={[
          { slug: "build-saas-with-cursor-7-days", title: "7天从0到上线", excerpt: "完整搭建记录含全部 Prompt" },
          { slug: "cursor-rules-vs-agents-md", title: "格式对比", excerpt: ".cursorrules vs AGENTS.md 到底用哪个" },
        ]}
      />
      <BackToTop />
    </div>
  );
}
