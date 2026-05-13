# Cursor Rules · AI 编码规范

> AI Coding Rules for Developers Who Ship.

[![Live Site](https://img.shields.io/badge/Website-cursorrules.fun-blue)](https://cursorrules.fun)
[![GitHub stars](https://img.shields.io/github/stars/ningfd-ux/cursor-rules-cn?style=social)](https://github.com/ningfd-ux/cursor-rules-cn)

**81 条规则 · 103 页面 · AI Rule Generator · 4 种输出格式**

一站式 AI 编程编码规范平台。支持 Cursor、Claude Code、GitHub Copilot、Windsurf 四大工具。
粘上你的 GitHub 仓库，AI 自动分析技术栈，生成专属编码规范配置文件。

🔗 **[cursorrules.fun](https://cursorrules.fun)**

---

## 功能

| 功能 | 说明 |
|------|------|
| ✨ **AI Rule Generator** | 输入技术栈或 GitHub 仓库，AI 自动生成编码规范 |
| 📂 **81 条规则** | 覆盖 React、Next.js、Vue、Python、Go 等 40+ 技术栈 |
| 📄 **4 种输出格式** | .cursorrules / .mdc / AGENTS.md / copilot-instructions.md |
| 📥 **一键下载** | 生成后直接下载文件 |
| 🔍 **智能搜索** | Ctrl+K 全局搜索，快速找到所需规则 |
| 🌙 **暗色模式** | 开发者友好，支持手动切换 |
| ⚖️ **工具对比** | Cursor vs Copilot vs Windsurf vs Claude Code |
| 📖 **实战文章** | 真实 Workflow 案例分享 |

## 技术栈

- **框架：** [Next.js 16](https://nextjs.org/) (Static Export)
- **样式：** [Tailwind CSS 4](https://tailwindcss.com/)
- **部署：** [Cloudflare Pages](https://pages.cloudflare.com/)
- **API：** Cloudflare Pages Functions + [DeepSeek](https://platform.deepseek.com/)
- **域名：** cursorrules.fun

## 快速开始

```bash
# 克隆
git clone https://github.com/ningfd-ux/cursor-rules-cn.git
cd cursor-rules-cn

# 安装依赖
npm install

# 开发
npm run dev

# 构建
npm run build
```

### 配置 Generator API

AI Rule Generator 需要 DeepSeek API Key：

1. 在 [DeepSeek Platform](https://platform.deepseek.com/) 注册并获取 API Key
2. 在 Cloudflare Pages Dashboard → Settings → Environment Variables 添加：
   - `DEEPSEEK_API_KEY` = 你的 API Key
3. 重新部署

## 项目结构

```
src/
├── app/
│   ├── page.tsx              # 首页
│   ├── generator/            # AI Rule Generator
│   ├── rules/                # 规则详情页
│   ├── frameworks/           # Framework 聚合页
│   ├── compare/              # 工具对比页
│   ├── blog/                 # 文章/教程
│   └── about/contact/privacy/
├── components/               # 通用组件
└── data/
    ├── rules.ts              # 81 条规则数据
    ├── frameworks.ts         # Framework 定义
    └── comparisons.ts        # 对比数据
functions/
└── api/generate.ts           # Cloudflare Function（Generator API）
```

## 贡献

欢迎贡献规则和文章！

- [提交规则](https://github.com/ningfd-ux/cursor-rules-cn/issues/new) — 有自己总结的好规则？提交到社区
- [反馈建议](https://github.com/ningfd-ux/cursor-rules-cn/issues/new) — 发现 Bug 或有功能建议
- [Star 支持](https://github.com/ningfd-ux/cursor-rules-cn) — 觉得有用请 Star

## 部署

本站在 Cloudflare Pages 上自动部署。每次推送到 `main` 分支，Cloudflare 会自动构建并部署到 [cursorrules.fun](https://cursorrules.fun/)。

## License

MIT
