export const comparisons = [
  {
    slug: "cursor-vs-copilot",
    title: "Cursor vs GitHub Copilot：哪个更适合你？",
    description: "深度对比 Cursor 和 GitHub Copilot 的功能差异、使用体验和适用场景，帮你做出选择。",
    icon: "⚖️",
    tags: ["cursor", "copilot", "对比"],
    content: `# Cursor vs GitHub Copilot：深度对比

## 核心差异

| 特性 | Cursor | GitHub Copilot |
|------|--------|---------------|
| 代码补全 | ✅ AI 原生 IDE | ✅ IDE 插件 |
| 多文件编辑 | ✅ Agent 模式 | ❌ 仅单文件 |
| 终端集成 | ✅ 内置 | ❌ 需手动 |
| 项目理解 | ✅ 完整代码库 | ⚠️ 当前文件 |
| 自定义规则 | ✅ .cursorrules | ✅ copilot-instructions.md |
| 定价 | $20/月 Pro | $10/月 Individual |
| 模型 | Claude/GPT-4 自定义 | OpenAI Codex |

## 什么时候选 Cursor？

- 需要深度理解整个代码库
- 频繁进行跨文件重构
- 需要 AI 执行终端命令
- 希望自定义 AI 行为（.cursorrules）

## 什么时候选 Copilot？

- 团队已经在使用 VS Code
- 只需要智能代码补全
- 预算有限
- 不需要多文件编辑功能

## 我们的建议

对于独立开发者和初创团队：**Cursor** 更值得投资。Agent 模式和 .cursorrules 带来的效率提升远超价格差异。`,
  },
  {
    slug: "cursor-vs-windsurf",
    title: "Cursor vs Windsurf：AI IDE 终极对比",
    description: "两款最热 AI IDE 的全面对比，功能、体验和性能哪个更强？",
    icon: "⚖️",
    tags: ["cursor", "windsurf", "对比"],
    content: `# Cursor vs Windsurf：AI IDE 终极对比

## 核心差异

| 特性 | Cursor | Windsurf |
|------|--------|----------|
| 基础 IDE | VS Code 分支 | VS Code 分支 |
| AI 模式 | Chat + Agent + Composer | Cascade + 内联建议 |
| 多文件编辑 | ✅ Agent 模式 | ✅ Cascade |
| 终端集成 | ✅ | ✅ |
| 自定义规则 | ✅ .cursorrules | ✅ .windsurfrules |
| 定价 | 免费 + $20 Pro | 免费 + $15 Pro |
| 上下文长度 | 大 | 中 |

## Cursor 优势

- .cursorrules 生态更成熟
- Agent 模式更稳定
- 社区和资源更丰富

## Windsurf 优势

- Cascade 多文件编辑流畅
- 价格更便宜
- 新手更容易上手

## 选择建议

追求深度 AI 集成和自定义 → Cursor
追求性价比和快速上手 → Windsurf`,
  },
  {
    slug: "cursor-vs-claude-code",
    title: "Cursor vs Claude Code：终端 AI 还是 IDE AI？",
    description: "Cursor 图形化 IDE 和 Claude Code 命令行工具的对比，哪种开发方式更适合你？",
    icon: "⚖️",
    tags: ["cursor", "claude-code", "对比"],
    content: `# Cursor vs Claude Code

## 本质区别

Cursor 是 AI 原生 IDE，Claude Code 是命令行 AI 工具。它们解决不同层次的问题。

| 特性 | Cursor | Claude Code |
|------|--------|------------|
| 交互方式 | GUI IDE | 命令行 |
| 学习曲线 | 低 | 中 |
| 自动化 | 半自动 | 全自动（CI 友好） |
| CI/CD 集成 | ❌ | ✅ |
| 批量操作 | 手动 | 脚本化 |
| 项目管理 | 可视化 | 全命令行 |

## 最好的方案

**两者结合使用：**
- 日常开发用 Cursor
- CI 流程用 Claude Code
- 批量重构用 Claude Code
- 调试和探索用 Cursor`,
  },
];
