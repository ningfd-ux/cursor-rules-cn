export interface Rule {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  content: string;
  tags: string[];
  source?: string;
}

export const categories = [
  { slug: "cursor", name: "Cursor Rules", count: 6 },
  { slug: "claude", name: "Claude Code", count: 4 },
  { slug: "copilot", name: "GitHub Copilot", count: 3 },
  { slug: "windsurf", name: "Windsurf", count: 2 },
  { slug: "general", name: "通用 AI 编程", count: 3 },
];

export function getCategoryName(slug: string): string {
  const map: Record<string, string> = {
    cursor: "Cursor",
    claude: "Claude Code",
    copilot: "Copilot",
    windsurf: "Windsurf",
    general: "通用",
  };
  return map[slug] ?? slug;
}

export const rules: Rule[] = [
  {
    slug: "cursor-general-rules",
    title: "Cursor 通用编码规则",
    category: "cursor",
    description: "适用于所有 Cursor 项目的通用规则，规范代码风格、注释和架构。",
    icon: "⚙️",
    tags: ["cursor", "通用", "编码规范"],
    content: `# Cursor 通用编码规则

## 代码风格
- 使用 2 空格缩进
- 行尾加分号
- 使用单引号
- 变量命名使用 camelCase
- 常量使用 UPPER_SNAKE_CASE

## 注释规范
- 函数/方法必须写 JSDoc 注释
- 复杂逻辑需要行内注释
- TODO 标记必须附带责任人

## 架构要求
- 遵循单一职责原则
- 组件文件不超过 200 行
- 工具函数抽离到独立的 utils 文件

## 错误处理
- 所有异步操作必须 try-catch
- 错误信息必须包含上下文
- 用户可见错误使用中文提示

## 性能
- 避免不必要的 re-render
- 大型列表使用虚拟滚动
- API 请求需要缓存策略`,
  },
  {
    slug: "cursor-react-rules",
    title: "Cursor React 开发规则",
    category: "cursor",
    description: "React 项目中使用 Cursor 的最佳实践与规则配置。",
    icon: "⚛️",
    tags: ["cursor", "react", "前端"],
    content: `# Cursor React 开发规则

## 组件规范
- 使用函数组件 + Hooks
- 避免类组件
- 每个组件一个文件
- 组件文件名使用 PascalCase

## Hooks 规则
- 自定义 Hook 以 use 开头
- Hook 中不要包含 JSX
- useEffect 必须清理副作用

## State 管理
- 优先使用 useState / useReducer
- 跨组件共享使用 Context
- 避免 prop drilling 超过 3 层

## 样式
- 使用 Tailwind CSS
- 避免内联样式
- CSS Module 用于复杂组件`,
  },
  {
    slug: "cursor-nextjs-rules",
    title: "Cursor Next.js 项目规则",
    category: "cursor",
    description: "Next.js App Router 项目中使用 Cursor 的规则和最佳实践。",
    icon: "▲",
    tags: ["cursor", "nextjs", "app-router"],
    content: `# Cursor Next.js 项目规则

## 路由规范
- 使用 App Router（pages 目录已废弃）
- 布局文件使用 layout.tsx
- 加载状态使用 loading.tsx
- 404 页面使用 not-found.tsx

## 数据获取
- 优先使用 Server Component
- 只在需要交互时使用 Client Component
- API 请求封装到 lib/ 目录
- 使用 Server Actions 处理表单

## SEO
- 每个页面必须有 metadata
- 使用 generateMetadata 动态生成
- 图片必须包含 alt 属性

## 性能
- 图片使用 next/image
- 链接使用 next/link
- 动态导入使用 next/dynamic`,
  },
  {
    slug: "cursor-python-rules",
    title: "Cursor Python 开发规则",
    category: "cursor",
    description: "Python 项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "🐍",
    tags: ["cursor", "python", "后端"],
    content: `# Cursor Python 开发规则

## 代码风格
- 遵循 PEP 8
- 使用 4 空格缩进
- 行最大长度 88（Black 默认）
- 使用蛇形命名法

## 类型提示
- 所有函数参数和返回值必须标注类型
- 使用 typing 模块
- 复杂类型使用 TypeAlias

## 项目管理
- 使用 pyproject.toml
- 依赖分组管理（dev/prod）
- 测试使用 pytest

## 文档
- 公共函数必须写 docstring
- 使用 Google 风格的 docstring
- README 包含安装和使用说明`,
  },
  {
    slug: "cursor-git-workflow",
    title: "Cursor Git 工作流规则",
    category: "cursor",
    description: "在 Cursor 中使用 Git 的规范工作流和提交规则。",
    icon: "🔀",
    tags: ["cursor", "git", "工作流"],
    content: `# Cursor Git 工作流规则

## 分支策略
- main：生产分支，只接受 merge
- dev：开发分支
- feature/*：功能分支
- fix/*：修复分支

## 提交规范
- 使用 Conventional Commits
- 格式：type(scope): description
- type: feat / fix / docs / refactor / test / chore

## 提交前检查
- 运行 lint
- 运行测试
- 检查未使用的导入
- 检查控制台输出

## PR 规范
- PR 标题使用中文描述
- PR 描述包含改动原因
- 关联 Issue 编号`,
  },
  {
    slug: "cursor-typescript-rules",
    title: "Cursor TypeScript 严格模式规则",
    category: "cursor",
    description: "TypeScript 项目启用严格模式的编码规则。",
    icon: "📘",
    tags: ["cursor", "typescript", "严格模式"],
    content: `# Cursor TypeScript 严格模式规则

## 配置要求
- strict: true
- noUncheckedIndexedAccess: true
- exactOptionalPropertyTypes: true

## 类型定义
- 优先使用 interface 而不是 type
- 联合类型使用 type
- 避免 any，使用 unknown

## 泛型
- 泛型参数使用 T 或完整单词
- 约束使用 extends
- 工具类型优先于手写

## 最佳实践
- 使用 const 断言
- 使用 satisfies 操作符
- 枚举使用 const enum`,
  },
  {
    slug: "claude-code-general",
    title: "Claude Code 通用规则",
    category: "claude",
    description: "使用 Claude Code 进行 AI 编程的通用规则和最佳 Prompt。",
    icon: "🤖",
    tags: ["claude-code", "通用", "prompt"],
    content: `# Claude Code 通用规则

## 核心原则
- Claude Code 是编程助手，不是替代品
- 始终审查 AI 生成的代码
- 保持代码库的一致性

## Prompt 技巧
- 明确指定技术栈和版本
- 提供上下文文件路径
- 使用分步指令

## 安全
- 不要将 API Key 写入代码
- 审查所有文件修改
- 敏感操作手动确认`,
  },
  {
    slug: "claude-code-react",
    title: "Claude Code React 开发 Prompt",
    category: "claude",
    description: "针对 React 项目的 Claude Code 专用 Prompt 模板。",
    icon: "⚛️",
    tags: ["claude-code", "react", "prompt"],
    content: `# Claude Code React 开发 Prompt

## 创建组件 Prompt
"在 src/components/ 下创建一个 Button 组件，使用 TypeScript + Tailwind CSS，包含 variant（primary/secondary/outline）和 size（sm/md/lg）属性。"

## 修复 Bug Prompt
"Users.tsx 中的列表加载不显示数据，检查数据获取逻辑，使用 React DevTools 检查状态。"

## 重构 Prompt
"将 Dashboard 页面中的图表逻辑抽离为独立的 Chart 组件，包含 loading 和 empty 状态。"`,
  },
  {
    slug: "claude-code-workflow",
    title: "Claude Code 工作流规则",
    category: "claude",
    description: "Claude Code 在日常开发中的最佳工作流程。",
    icon: "🔄",
    tags: ["claude-code", "工作流", "最佳实践"],
    content: `# Claude Code 工作流规则

## 日常开发流程
1. 启动任务前阅读相关文件
2. 让 Claude 理解项目结构
3. 小步提交，频繁审查
4. 每次提交后运行测试

## 调试流程
1. 描述问题现象
2. 提供错误日志
3. 指出怀疑的代码区域
4. Claude 提出修复方案

## 代码审查
1. 审查所有 diff
2. 运行 lint 和测试
3. 检查边界情况
4. 确认没有安全漏洞`,
  },
  {
    slug: "claude-code-prompts",
    title: "Claude Code 高效 Prompt 大全",
    category: "claude",
    description: "收集 Claude Code 最实用的 Prompt 模板和使用技巧。",
    icon: "💡",
    tags: ["claude-code", "prompt", "模板"],
    content: `# Claude Code 高效 Prompt 大全

## 代码生成
- "用 [技术栈] 生成 [功能] 组件"
- "实现 [API 端点] 的 CRUD 操作"
- "写一个 [算法] 的实现和测试"

## 代码审查
- "审查这个 PR 的代码质量"
- "找出潜在的性能问题"
- "检查安全漏洞"

## 重构
- "将这个组件拆分为更小的组件"
- "将 [模式] 重构为 [新模式]"
- "优化这个函数的性能"

## 测试
- "为这个组件写单元测试"
- "生成边界测试用例"
- "写集成测试覆盖这个流程"`,
  },
  {
    slug: "copilot-general",
    title: "GitHub Copilot 通用规则",
    category: "copilot",
    description: "GitHub Copilot 的使用规则和最佳实践。",
    icon: "🪁",
    tags: ["copilot", "通用", "最佳实践"],
    content: `# GitHub Copilot 通用规则

## 配置
- 启用建议自动触发
- 配置 .github/copilot-instructions.md
- 使用 Copilot Chat 辅助调试

## 使用技巧
- 写清晰的注释引导生成
- 先写函数签名再让 Copilot 填充
- 使用 Tab 接受建议

## 代码质量
- 验证所有建议
- 不要接受明显错误的代码
- 需要时手动修正`,
  },
  {
    slug: "copilot-instructions",
    title: "GitHub Copilot 项目指令配置",
    category: "copilot",
    description: "通过 copilot-instructions.md 配置项目级 Copilot 行为。",
    icon: "📋",
    tags: ["copilot", "配置", "instructions"],
    content: `# GitHub Copilot 项目指令配置

## 创建 copilot-instructions.md
在项目根目录创建 .github/copilot-instructions.md

## 配置内容
- 项目技术栈描述
- 编码风格偏好
- 使用的框架和库
- 命名规范

## 示例
markdown
# 技术栈
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Prisma ORM

# 编码规范
- 使用 Server Component 优先
- API 路由使用 Route Handler
- 数据库查询使用 Prisma
`,
  },
  {
    slug: "copilot-testing",
    title: "Copilot 辅助测试编写",
    category: "copilot",
    description: "使用 GitHub Copilot 编写测试代码的最佳实践。",
    icon: "🧪",
    tags: ["copilot", "测试", "jest"],
    content: `# Copilot 辅助测试编写

## 测试框架
- Jest + React Testing Library
- 描述性测试名称
- AAA 模式（Arrange-Act-Assert）

## 生成测试
1. 打开被测文件
2. 创建 .test.ts 文件
3. Copilot 会根据实现生成测试

## Mock 策略
- 外部 API 调用使用 jest.mock
- 复杂依赖使用依赖注入
- 避免过度 mock`,
  },
  {
    slug: "windsurf-rules",
    title: "Windsurf AI 编程规则",
    category: "windsurf",
    description: "Windsurf IDE 的 AI 编程规则和最佳实践。",
    icon: "🏄",
    tags: ["windsurf", "通用", "规则"],
    content: `# Windsurf AI 编程规则

## 基础配置
- 启用 AI 建议
- 配置项目上下文
- 设置代码审查级别

## 使用技巧
- 使用自然语言描述需求
- 利用多文件编辑能力
- 使用 Cascade 功能

## 最佳实践
- 定期保存工作
- 审查代码差异
- 测试生成代码`,
  },
  {
    slug: "windsurf-cascade",
    title: "Windsurf Cascade 功能指南",
    category: "windsurf",
    description: "Windsurf Cascade 多文件编辑功能的使用指南。",
    icon: "🌊",
    tags: ["windsurf", "cascade", "多文件"],
    content: `# Windsurf Cascade 功能指南

## Cascade 是什么
Cascade 是 Windsurf 的多文件编辑功能

## 使用场景
- 跨文件重构
- 添加新功能
- 全局修改

## 最佳实践
- 明确描述修改范围
- 审查每个文件的更改
- 小批量提交`,
  },
  {
    slug: "ai-coding-prompt-tips",
    title: "AI 编程 Prompt 终极技巧",
    category: "general",
    description: "适用于所有 AI 编程工具的 Prompt 编写技巧。",
    icon: "🎯",
    tags: ["prompt", "技巧", "通用"],
    content: `# AI 编程 Prompt 终极技巧

## 黄金法则
1. 明确具体：不要说"优化代码"，说"将这个 O(n²) 算法优化为 O(n log n)"
2. 提供上下文：相关文件的路径和关键代码
3. 分步指令：大任务拆解为小步骤

## 高级技巧
- 使用 few-shot 示例
- 指定输出格式
- 要求解释修改理由

## 陷阱
- 避免过于模糊的描述
- 不要假设 AI 知道项目结构
- 检查生成的依赖版本`,
  },
  {
    slug: "ai-code-review",
    title: "AI 辅助代码审查规则",
    category: "general",
    description: "使用 AI 工具进行代码审查的规则和流程。",
    icon: "👁️",
    tags: ["code-review", "AI", "质量"],
    content: `# AI 辅助代码审查规则

## 审查重点
1. 代码逻辑错误
2. 性能瓶颈
3. 安全漏洞
4. 一致性检查

## AI 审查流程
1. 提交代码到 PR
2. AI 自动审查
3. 人类复审 AI 的结果
4. 解决发现的问题

## 注意事项
- AI 不能完全替代人类审查
- 业务逻辑需要人工确认
- 安全性审查需要专业知识`,
  },
  {
    slug: "cursor-rules-best-practices",
    title: "Cursor Rules 最佳实践合集",
    category: "general",
    description: "Cursor Rules 的高级用法和实战经验总结。",
    icon: "⭐",
    tags: ["cursor", "最佳实践", "进阶"],
    content: `# Cursor Rules 最佳实践合集

## 分层规则设计
- 通用规则（所有项目）
- 语言规则（Python/JS/TS）
- 框架规则（React/Next.js）
- 项目特定规则

## 规则优先级
- 具体规则覆盖通用规则
- 项目级规则 > 全局规则
- 按文件名排序加载

## 实战经验
- rules 文件不超过 50 行
- 用注释分隔章节
- 定期更新规则`,
  },
];
