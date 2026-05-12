import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AI 编码工作流入门指南 2026：从零开始用 Cursor 写代码",
  description: "面向编程新手和想提高效率的开发者，从装好 Cursor 到写出第一个生产级代码的完整工作流。",
};

export default function PostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">← 返回文章列表</Link>

      <article className="max-w-none">
        <header className="mb-8 not-prose">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
            <span>2026-05-12</span><span>·</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">入门</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">工作流</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI 编码工作流入门指南 2026</h1>
        </header>

        <section className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-6">
          <p className="lead text-lg text-zinc-700 dark:text-zinc-300">刚接触 AI 编程工具？不知道从哪开始？本文帮你建立一套完整的工作流——安装、配置、日常开发到上线部署。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">第一步：选工具</h2>
          <p>2026 年主流的 AI 编程工具有四个：</p>
          <ul>
            <li><strong>Cursor</strong> — AI 原生 IDE，最适合日常开发。Agent 模式支持多文件编辑和终端操作。</li>
            <li><strong>Claude Code</strong> — 命令行工具，适合 CI/CD 和自动化任务。</li>
            <li><strong>GitHub Copilot</strong> — VS Code 插件，适合已有 IDE 习惯的团队。</li>
            <li><strong>Windsurf</strong> — AI IDE，Cascade 功能体验不错，价格比 Cursor 低。</li>
          </ul>
          <p>新手建议从 <Link href="/compare/cursor-vs-copilot" className="text-blue-600 dark:text-blue-400">Cursor 开始</Link>，学习曲线最低，功能最完整。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">第二步：配置规则</h2>
          <p>安装好 Cursor 后，最重要的就是配置 .cursorrules 文件。这个文件告诉 AI 你的技术栈、编码风格和项目规范。</p>
          <p>你不需要手写。打开我们的 <Link href="/generator" className="text-blue-600 dark:text-blue-400">AI Rule Generator</Link>，选择你的技术栈，AI 自动生成完整的配置文件。下载后放到项目根目录即可。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">第三步：日常开发流程</h2>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 not-prose dark:border-zinc-700 dark:bg-zinc-800/50">
            <ol className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><strong>1. 用 Cursor 打开项目</strong> — AI 自动读取 .cursorrules</li>
              <li><strong>2. Ctrl+K 打开 AI 对话</strong> — 用自然语言描述你要做的事</li>
              <li><strong>3. AI 生成代码</strong> — 审查 diff，确认无误后接受</li>
              <li><strong>4. Ctrl+Enter 运行测试</strong> — 确保不破坏现有功能</li>
              <li><strong>5. 提交代码</strong> — AI 帮你写 commit message</li>
            </ol>
          </div>
          <p>这套流程看起来简单，但关键是第一步——没有好的 .cursorrules，AI 输出的代码质量全靠运气。</p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">第四步：避坑</h2>
          <ul>
            <li><strong>不要一次让 AI 做太多事</strong> — 拆分成小任务，逐个完成</li>
            <li><strong>永远审查 AI 生成的代码</strong> — AI 会写看起来正确但实际上有问题的代码</li>
            <li><strong>规则文件要定期更新</strong> — 项目演进后，规则也要跟上</li>
            <li><strong>不要完全依赖 AI</strong> — 理解代码逻辑，AI 是你的加速器不是替代品</li>
          </ul>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-8">下一步</h2>
          <ul>
            <li><Link href="/frameworks/react" className="text-blue-600 dark:text-blue-400">浏览 React 项目规则</Link> — 查看现成的配置示例</li>
            <li><Link href="/compare" className="text-blue-600 dark:text-blue-400">工具对比</Link> — 了解不同 AI 编程工具的优劣</li>
            <li><Link href="/generator" className="text-blue-600 dark:text-blue-400">用 Generator 生成你的第一份规则</Link></li>
          </ul>
        </section>
      </article>
      <BackToTop />
    </div>
  );
}
