export interface Rule {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  content: string;
  tags: string[];
  source?: string;
  updatedAt: string;
  appliesTo?: string;
}


export const categories = [
  { slug: "cursor", name: "Cursor Rules", count: 42 },
  { slug: "claude", name: "Claude Code", count: 10 },
  { slug: "copilot", name: "GitHub Copilot", count: 7 },
  { slug: "windsurf", name: "Windsurf", count: 4 },
  { slug: "tutorial", name: "教程指南", count: 5 },
  { slug: "general", name: "通用 AI 编程", count: 13 },
];

export function getCategoryName(slug: string): string {
  const map: Record<string, string> = {
    cursor: "Cursor",
    claude: "Claude Code",
    copilot: "Copilot",
    windsurf: "Windsurf",
    tutorial: "教程",
    general: "通用",
  };
  return map[slug] ?? slug;
}

export const rules: Rule[] = [
  {
    slug: "cursor-general-rules",
    title: "让 Cursor 写出高质量代码的通用规则",
    category: "cursor",
    description: "适用于所有 Cursor 项目的通用规则，规范代码风格、注释和架构。",
    icon: "⚙️",
    tags: ["cursor", "通用", "编码规范"],
    updatedAt: "2026-04-28",
    appliesTo: "Cursor 0.40+",
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
- API 请求需要缓存策略

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "cursor-react-rules",
title: "让 Cursor 更懂 React 的最佳开发规则",
category: "cursor",
description: "React 项目中使用 Cursor 的最佳实践与规则配置。",
icon: "⚛️",
tags: ["cursor", "react", "前端"],
updatedAt: "2026-05-01",
appliesTo: "Cursor 0.40+",
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
- CSS Module 用于复杂组件

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "cursor-nextjs-rules",
title: "用 Cursor 开发 Next.js 项目的完整规则",
category: "cursor",
description: "Next.js App Router 项目中使用 Cursor 的规则和最佳实践。",
icon: "▲",
tags: ["cursor", "nextjs", "app-router"],
updatedAt: "2026-05-02",
appliesTo: "Cursor 0.40+",
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
- 动态导入使用 next/dynamic

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "cursor-python-rules",
title: "Cursor + Python 高效开发的编码规则",
category: "cursor",
description: "Python 项目中使用 Cursor 的编码规则和最佳实践。",
icon: "🐍",
tags: ["cursor", "python", "后端"],
updatedAt: "2026-05-03",
appliesTo: "Cursor 0.40+",
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
- README 包含安装和使用说明

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "cursor-git-workflow",
title: "Cursor 中 Git 工作流的最佳实践规则",
category: "cursor",
description: "在 Cursor 中使用 Git 的规范工作流和提交规则。",
icon: "🔀",
tags: ["cursor", "git", "工作流"],
updatedAt: "2026-04-25",
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
- 关联 Issue 编号

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "cursor-typescript-rules",
title: "Cursor TypeScript 严格模式配置规则",
category: "cursor",
description: "TypeScript 项目启用严格模式的编码规则。",
icon: "📘",
tags: ["cursor", "typescript", "严格模式"],
updatedAt: "2026-05-04",
appliesTo: "Cursor 0.40+",
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
- 枚举使用 const enum

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
slug: "claude-code-general",
title: "Claude Code 入门必读的通用规则",
category: "claude",
description: "使用 Claude Code 进行 AI 编程的通用规则和最佳 Prompt。",
icon: "🤖",
tags: ["claude-code", "通用", "prompt"],
updatedAt: "2026-04-30",
appliesTo: "Claude Code 0.1+",
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
- 敏感操作手动确认

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
slug: "claude-code-react",
title: "用 Claude Code 写 React 的高效 Prompt",
category: "claude",
description: "针对 React 项目的 Claude Code 专用 Prompt 模板。",
icon: "⚛️",
tags: ["claude-code", "react", "prompt"],
updatedAt: "2026-05-05",
appliesTo: "Claude Code 0.1+",
content: `# Claude Code React 开发 Prompt

## 创建组件 Prompt
"在 src/components/ 下创建一个 Button 组件，使用 TypeScript + Tailwind CSS，包含 variant（primary/secondary/outline）和 size（sm/md/lg）属性。"

## 修复 Bug Prompt
"Users.tsx 中的列表加载不显示数据，检查数据获取逻辑，使用 React DevTools 检查状态。"

## 重构 Prompt
"将 Dashboard 页面中的图表逻辑抽离为独立的 Chart 组件，包含 loading 和 empty 状态。"

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
slug: "claude-code-workflow",
title: "Claude Code 日常开发工作流最佳实践",
category: "claude",
description: "Claude Code 在日常开发中的最佳工作流程。",
icon: "🔄",
tags: ["claude-code", "工作流", "最佳实践"],
updatedAt: "2026-05-06",
appliesTo: "Claude Code 0.1+",
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
4. 确认没有安全漏洞

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
slug: "claude-code-prompts",
title: "Claude Code 最实用的 Prompt 模板合集",
category: "claude",
description: "收集 Claude Code 最实用的 Prompt 模板和使用技巧。",
icon: "💡",
tags: ["claude-code", "prompt", "模板"],
updatedAt: "2026-05-01",
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
- "写集成测试覆盖这个流程"

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
slug: "copilot-general",
title: "GitHub Copilot 新手必看的使用规则",
category: "copilot",
description: "GitHub Copilot 的使用规则和最佳实践。",
icon: "🪁",
tags: ["copilot", "通用", "最佳实践"],
updatedAt: "2026-04-29",
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
- 需要时手动修正

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },
  {
slug: "copilot-instructions",
title: "配置 Copilot 项目指令的最佳实践",
category: "copilot",
description: "通过 copilot-instructions.md 配置项目级 Copilot 行为。",
icon: "📋",
tags: ["copilot", "配置", "instructions"],
updatedAt: "2026-05-03",
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


## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },
  {
    slug: "copilot-testing",
    title: "用 Copilot 自动生成测试代码的技巧",
    category: "copilot",
    description: "使用 GitHub Copilot 编写测试代码的最佳实践。",
    icon: "🧪",
    tags: ["copilot", "测试", "jest"],
    updatedAt: "2026-04-27",
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
- 避免过度 mock

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },
  {
slug: "windsurf-rules",
title: "Windsurf AI 编程入门配置规则",
category: "windsurf",
description: "Windsurf IDE 的 AI 编程规则和最佳实践。",
icon: "🏄",
tags: ["windsurf", "通用", "规则"],
updatedAt: "2026-05-02",
appliesTo: "Windsurf 1.0+",
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
- 测试生成代码

## 使用场景

在 Windsurf IDE 中启用 AI 功能后，以上规则会自动应用到 Cascade 多文件编辑和 AI 代码建议中。

## 常见错误

- Cascade 每次修改后必须检查 diff，不要完全信任 AI
- 大规模修改前先保存 git commit，方便回滚
- Windsurf 的 AI 能力依赖网络连接，离线时不可用
`,
  },
  {
slug: "windsurf-cascade",
title: "Windsurf Cascade 多文件编辑完全指南",
category: "windsurf",
description: "Windsurf Cascade 多文件编辑功能的使用指南。",
icon: "🌊",
tags: ["windsurf", "cascade", "多文件"],
updatedAt: "2026-04-26",
appliesTo: "Windsurf 1.0+",
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
title: "AI 编程 Prompt 终极技巧提升 10 倍效率",
category: "general",
description: "适用于所有 AI 编程工具的 Prompt 编写技巧。",
icon: "🎯",
tags: ["prompt", "技巧", "通用"],
updatedAt: "2026-05-05",
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
- 检查生成的依赖版本

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
slug: "ai-code-review",
title: "用 AI 做代码审查的完整规则和流程",
category: "general",
description: "使用 AI 工具进行代码审查的规则和流程。",
icon: "👁️",
tags: ["code-review", "AI", "质量"],
updatedAt: "2026-04-30",
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
- 安全性审查需要专业知识

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
slug: "cursor-rules-best-practices",
title: "Cursor Rules 高级用法和实战经验",
category: "general",
description: "Cursor Rules 的高级用法和实战经验总结。",
icon: "⭐",
tags: ["cursor", "最佳实践", "进阶"],
updatedAt: "2026-05-06",
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
- 定期更新规则

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },

  {
slug: "cursor-vue-rules",
title: "让 Cursor 更懂 Vue 3 的最佳开发规则",
category: "cursor",
description: "Vue 3 + Composition API 项目中使用 Cursor 的编码规则。",
icon: "🟢",
tags: ["cursor", "vue", "前端"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `# Cursor Vue.js 开发规则

## 项目结构
- 使用 Composition API + <script setup>
- 避免 Options API
- 组件文件名使用 PascalCase
- 页面文件放在 pages/ 或 views/

## 组件规范
- 每个 .vue 文件只导出一个组件
- 逻辑复用优先使用 composables
- props 必须定义类型和默认值
- emit 事件使用 kebab-case 命名

## 状态管理
- 跨组件状态使用 Pinia
- store 按功能模块拆分
- 避免在 store 中引用组件实例

## 样式
- 使用 <style scoped> 避免样式污染
- 全局样式放在 assets/styles/
- 优先使用 Tailwind CSS 或 CSS Variables

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "cursor-go-rules",
title: "用 Cursor 写出优雅 Go 代码的规则",
category: "cursor",
description: "Go 语言项目中使用 Cursor 的编码规范和最佳实践。",
icon: "🔷",
tags: ["cursor", "go", "golang"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor Go 开发规则

## 代码规范
- 使用 gofmt/gofumpt 格式化
- 遵循 Effective Go 标准
- 错误处理使用 if err != nil 模式
- 接口尽量小，不超过 3 个方法

## 项目结构
- 按功能模块分包，不按层分包
- cmd/ 目录放 main 包入口
- internal/ 目录放不导出的包
- pkg/ 目录放可复用的公共包

## 并发
- 使用 sync 包保护共享资源
- channel 用于协程间通信
- context 传递请求范围的值和取消信号

## 测试
- 测试文件与被测文件同目录
- 使用 table-driven test 模式
- 基准测试标记为 BenchmarkXxx

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "cursor-testing-rules",
title: "Cursor 自动生成测试的完整规则",
category: "cursor",
description: "在 Cursor 中编写单元测试、集成测试的规则和最佳实践。",
icon: "🧪",
tags: ["cursor", "测试", "jest"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor 测试开发规则

## 测试策略
- 单元测试覆盖核心业务逻辑
- 集成测试覆盖 API 和数据库
- 每个 bug 修复先写回归测试
- 测试覆盖率目标：核心模块 > 90%

## 测试命名
- describe 描述被测单元
- it 描述期望行为
- 测试名称使用中文描述

## Mock 规范
- 外部服务使用 mock
- 内部模块优先使用真实实现
- mock 数据放在 __fixtures__/ 目录

## 断言规范
- 每个测试只验证一个行为
- 使用 AAA 模式（Arrange-Act-Assert）
- 错误场景和边界情况必须覆盖

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "cursor-api-rules",
title: "用 Cursor 开发 RESTful API 的编码规范",
category: "cursor",
description: "RESTful API 和 GraphQL 开发中 Cursor 的编码规范。",
icon: "🌐",
tags: ["cursor", "api", "rest"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor API 开发规则

## 路由设计
- RESTful 资源命名使用复数
- 版本号放在 URL 路径中（/api/v1/）
- 查询参数用于过滤和排序
- 请求体用于创建和更新

## 请求验证
- 所有输入必须校验类型和格式
- 使用 Zod / Joi 等校验库
- 错误信息返回统一格式
- 敏感字段不在错误中泄露

## 响应格式
- 统一返回 { code, data, message } 结构
- 列表接口支持分页（page, pageSize, total）
- 错误使用 HTTP 状态码 + 业务码
- 耗时接口返回 202 Accepted

## 安全
- API Key 通过 Header 传递
- 限制请求频率（Rate Limit）
- CORS 配置白名单
- 敏感操作记录审计日志

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "cursor-docker-rules",
title: "Cursor 中 Docker 容器化的最佳实践",
category: "cursor",
description: "使用 Cursor 开发 Docker 容器化应用的最佳实践和规则。",
icon: "🐳",
tags: ["cursor", "docker", "devops"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor Docker 容器化规则

## Dockerfile 规范
- 使用多阶段构建减小镜像体积
- 基础镜像指定精确版本标签
- 合并 RUN 命令减少层数
- .dockerignore 排除不必要的文件

## 安全
- 不以 root 用户运行容器
- 最小化安装包
- 定期扫描镜像漏洞
- 敏感信息通过环境变量注入

## 编排
- 开发环境使用 docker-compose
- 生产环境使用 Kubernetes
- 每个服务独立容器
- 日志输出到 stdout/stderr

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "cursor-database-rules",
title: "Cursor 数据库开发 Schema 设计规则",
category: "cursor",
description: "数据库 Schema 设计、查询优化和数据迁移的 Cursor 编码规则。",
icon: "🗄️",
tags: ["cursor", "数据库", "sql"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor 数据库开发规则

## Schema 设计
- 表名使用复数 snake_case
- 主键使用 BIGINT 自增或 UUID
- 必须包含 created_at 和 updated_at
- 外键建立索引

## 查询规范
- 避免 N+1 查询，使用 JOIN 或预加载
- 复杂查询使用 EXPLAIN 分析
- 大批量操作使用批量处理
- 分页使用游标分页（cursor-based）

## 迁移管理
- 每次变更创建新的迁移文件
- 迁移可回滚（up/down）
- 生产环境迁移前 Review
- 禁止直接修改已合并的迁移

## 安全
- 使用参数化查询防 SQL 注入
- 敏感字段加密存储
- 连接字符串通过环境变量配置
- 生产数据库连接池限制

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },

  {
slug: "claude-code-python",
title: "用 Claude Code 写 Python 的高效 Prompt",
category: "claude",
description: "用 Claude Code 进行 Python 开发的高效 Prompt 模板。",
icon: "🐍",
tags: ["claude-code", "python", "prompt"],
updatedAt: "2026-05-10",
appliesTo: "Claude Code 0.1+",
content: `    # Claude Code Python 开发 Prompt

## 创建 FastAPI 接口
"在 app/routers/ 下创建一个用户 CRUD 路由，使用 FastAPI + SQLAlchemy async，包含分页查询、创建、更新、删除接口。"

## 数据处理
"写一个 pandas 数据处理函数，从 CSV 读取销售数据，按月份聚合统计，输出为 Excel 文件。"

## 异步任务
"使用 Celery + Redis 实现后台任务队列，包含进度跟踪和结果回调。任务函数在 tasks/ 目录下。"

## 测试生成
"为 services/user_service.py 写 pytest 单元测试，mock 外部 API 调用，覆盖正常和异常场景。" 

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },

  {
slug: "claude-code-testing",
title: "Claude Code 自动生成测试的 Prompt 指南",
category: "claude",
description: "使用 Claude Code 自动生成和维护测试代码的最佳 Prompt。",
icon: "🧪",
tags: ["claude-code", "测试", "自动化"],
updatedAt: "2026-05-10",
content: `    # Claude Code 测试编写指南

## 生成单元测试
"为 src/utils/format.ts 生成 Jest 单元测试，覆盖边缘情况（空值、边界值、特殊字符）。"

## 生成集成测试
"为 API 端点 /api/users 生成集成测试，包含创建、查询、更新、删除用户的完整流程。"

## Mock 外部依赖
"使用 jest.mock 模拟 Stripe API 调用，模拟成功支付和支付失败的响应。"

## 测试覆盖率
"分析当前项目的测试覆盖率，找出未覆盖的代码路径，生成补充测试。" 

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },

  {
slug: "claude-code-refactoring",
title: "Claude Code 代码重构 Prompt 模板",
category: "claude",
description: "使用 Claude Code 安全重构代码的 Prompt 模板和流程。",
icon: "🔨",
tags: ["claude-code", "重构", "最佳实践"],
updatedAt: "2026-05-10",
content: `    # Claude Code 代码重构 Prompt

## 提取组件
"将 Dashboard 页面中 300 行的图表逻辑提取为独立组件，包含 loading、empty、error 三种状态。"

## 拆分大函数
"将 utils/helpers.ts 中的 processOrder 函数（200 行）拆分为多个小函数，每个函数只负责一个职责。"

## 迁移模式
"将项目中所有 class 组件迁移为函数组件 + Hooks，保持功能完全一致。"

## 优化性能
"分析列表页面的重渲染问题，添加 React.memo、useMemo、useCallback 优化。提供重构前后的性能对比。" 

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },

  {
slug: "copilot-vue",
title: "Copilot 在 Vue 3 项目的最佳配置",
category: "copilot",
description: "GitHub Copilot 在 Vue 3 项目中的最佳配置和使用规则。",
icon: "🟢",
tags: ["copilot", "vue", "前端"],
updatedAt: "2026-05-10",
content: `    # Copilot Vue 3 开发指令

## 配置 copilot-instructions.md

## 技术栈
- Vue 3 (Composition API)
- TypeScript (strict)
- Vite 构建工具
- Pinia 状态管理

## 编码规范
- 使用 <script setup lang="ts">
- 组件名多单词（MyComponent.vue）
- composables 放在 composables/ 目录
- API 请求封装到 api/ 模块

## 常用 Prompt
- "生成一个带搜索和分页的用户列表组件"
- "写一个 Pinia store 管理购物车状态"
- "实现路由懒加载和导航守卫" 

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },

  {
slug: "copilot-python",
title: "Copilot Python 开发的最佳配置指令",
category: "copilot",
description: "GitHub Copilot 在 Python 项目中的最佳配置和使用技巧。",
icon: "🐍",
tags: ["copilot", "python", "后端"],
updatedAt: "2026-05-10",
content: `    # Copilot Python 开发指令

## 配置 copilot-instructions.md

## 技术栈
- Python 3.11+
- FastAPI / Django
- SQLAlchemy / Django ORM
- pytest + coverage

## 编码规范
- 遵循 PEP 8
- 使用类型注解
- 异步优先（async/await）
- Google 风格 docstring

## 常用 Prompt
- "实现 FastAPI 用户注册接口，包含密码加密和邮箱验证"
- "写一个 SQLAlchemy 模型，包含软删除和时间戳"
- "生成 pytest fixture 和测试数据工厂" 

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },

  {
slug: "windsurf-react",
title: "Windsurf 中用 Cascade 开发 React 的规则",
category: "windsurf",
description: "在 Windsurf 中使用 Cascade 进行 React 开发的规则和技巧。",
icon: "⚛️",
tags: ["windsurf", "react", "前端"],
updatedAt: "2026-05-10",
content: `    # Windsurf React 开发规则

## 项目配置
- 启用 AI 代码建议
- 配置 React 项目上下文
- 使用 Cascade 进行跨文件编辑

## 组件开发
- 使用 Cascade 创建组件模板
- 利用多文件编辑同步修改组件和样式
- AI 生成代码后立即审查 diff

## 调试优化
- 使用 Cascade 分析组件依赖
- 重构时 Cascade 自动更新引用
- 性能问题让 AI 分析 profiler 数据

## 最佳实践
- 每次 Cascade 修改后运行测试
- 批量修改前创建 git commit 检查点
- 复杂逻辑分步让 AI 完成

## 使用场景

在 Windsurf IDE 中启用 AI 功能后，以上规则会自动应用到 Cascade 多文件编辑和 AI 代码建议中。

## 常见错误

- Cascade 每次修改后必须检查 diff，不要完全信任 AI
- 大规模修改前先保存 git commit，方便回滚
- Windsurf 的 AI 能力依赖网络连接，离线时不可用
`,
  },

  {
slug: "windsurf-python",
title: "Windsurf 中 Python 开发的 AI 编程规则",
category: "windsurf",
description: "在 Windsurf 中进行 Python 开发的 AI 编程规则和最佳实践。",
icon: "🐍",
tags: ["windsurf", "python", "后端"],
updatedAt: "2026-05-10",
content: `    # Windsurf Python 开发规则

## 开发流程
- 用自然语言描述功能需求
- Cascade 自动创建相关文件
- AI 生成代码后运行 pytest

## 数据科学
- Jupyter Notebook + Windsurf 联动
- AI 辅助数据清洗和可视化
- 模型训练代码自动生成

## Web 开发
- FastAPI/Django 项目快速搭建
- AI 生成 CRUD 接口
- 数据库模型自动迁移

## 测试
- AI 生成单元测试和集成测试
- 覆盖率分析自动补充测试
- Mock 数据自动生成

## 使用场景

在 Windsurf IDE 中启用 AI 功能后，以上规则会自动应用到 Cascade 多文件编辑和 AI 代码建议中。

## 常见错误

- Cascade 每次修改后必须检查 diff，不要完全信任 AI
- 大规模修改前先保存 git commit，方便回滚
- Windsurf 的 AI 能力依赖网络连接，离线时不可用
`,
  },

  {
slug: "ai-prompt-engineering",
title: "AI 编程 Prompt 工程系统方法论",
category: "general",
description: "面向 AI 编程工具的 Prompt Engineering 系统方法论和模板。",
icon: "📐",
tags: ["prompt", "工程", "方法论"],
updatedAt: "2026-05-10",
content: `    # AI 编程 Prompt 工程指南

## 结构化 Prompt 模板

~~~
技术栈：[Next.js 14 + TypeScript + Tailwind]
任务：[创建一个用户资料编辑表单]
要求：
- 包含头像上传、昵称、简介字段
- 表单验证使用 Zod
- 提交后显示 Toast 提示
- 移动端适配
~~~

## COAST 框架
- **C**ontext：提供项目背景
- **O**bjective：明确任务目标
- **A**ctions：列出具体步骤
- **S**pecifications：指定技术约束
- **T**one：指定输出风格

## 迭代优化
- 第一轮：生成基础代码
- 第二轮：Review 并指出问题
- 第三轮：要求 AI 优化具体部分
- 第四轮：添加错误处理和边界情况

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },

  {
slug: "ai-fullstack-development",
title: "用 AI 工具做全栈开发的完整工作流",
category: "general",
description: "使用 AI 编程工具进行全栈开发的完整工作流和最佳实践。",
icon: "🚀",
tags: ["全栈", "工作流", "效率"],
updatedAt: "2026-05-10",
content: `    # AI 全栈开发工作流

## 项目启动
- 用 AI 生成项目脚手架
- 初始化数据库 Schema
- 配置 CI/CD 流水线
- 设置开发环境（Docker）

## 前端开发
- AI 生成组件代码和样式
- 自动生成 API 类型定义
- 响应式布局 AI 辅助
- 状态管理自动生成

## 后端开发
- AI 生成 CRUD 接口
- 自动编写中间件
- 数据库查询优化建议
- API 文档自动生成

## 部署运维
- Dockerfile AI 生成
- CI 配置自动编写
- 监控告警规则生成
- 性能优化建议

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },

  {
    slug: "nextjs-cursor-setup",
    title: "Next.js + Cursor 最佳实践配置教程",
    category: "tutorial",
    description: "手把手教你配置 Cursor 规则，让 AI 完美理解 Next.js App Router 项目。",
    icon: "📖",
    tags: ["nextjs", "cursor", "教程"],
    updatedAt: "2026-05-10",
    content: `# Next.js + Cursor 最佳实践配置教程

## 为什么要配置 Cursor Rules？

默认情况下，Cursor 对 Next.js 项目的理解不够精确。通过配置 .cursorrules，可以让 AI 了解你的技术栈选择、路由规范和数据获取模式。

## 完整配置

### 步骤 1：创建 .cursorrules 文件

在项目根目录创建 .cursorrules，粘贴以下内容：

\'\'\`
# 技术栈
- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS v4
- Prisma ORM
- NextAuth.js v5

# App Router 规范
- 布局文件使用 layout.tsx
- 加载状态使用 loading.tsx
- 错误处理使用 error.tsx
- 404 页面使用 not-found.tsx

# 数据获取
- 优先使用 Server Component
- 客户端交互使用 "use client"
- API 请求封装到 lib/ 目录
- 表单处理使用 Server Actions

# 图片优化
- 使用 next/image
- 必须包含 alt 属性
- 外部图片配置 remotePatterns
\'\'\`

### 步骤 2：验证效果

配置好后，尝试让 Cursor 生成一个新页面。你会发现：
- 组件结构自动遵循 App Router 规范
- 数据获取使用 Server Component
- TypeScript 类型完整，无 any

## 学习路径

建议按以下顺序学习：
1. 先完整阅读一遍教程
2. 在真实项目中实践核心要点
3. 遇到问题时回到本文搜索解决方案
4. 结合其他规则页构建你的完整 AI 编程工作流

## 下一步

- 访问 '/frameworks' 查看特定框架的详细规则
- 访问 '/compare' 了解 AI 工具的差异和选择

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "cursor-rules-migration",
    title: "从 Copilot 迁移到 Cursor 的完整指南",
    category: "tutorial",
    description: "从 GitHub Copilot 切换到 Cursor 的完整指南，包括规则迁移和习惯适配。",
    icon: "📖",
    tags: ["cursor", "copilot", "迁移", "教程"],
    updatedAt: "2026-05-10",
    content: `# 从 Copilot 迁移到 Cursor 完整指南

## 为什么迁移？

Cursor 相比 Copilot 的优势：
- 深度理解整个代码库，不仅是当前文件
- 支持多文件编辑和重构
- 更智能的代码补全和上下文理解

## 迁移步骤

### 1. 配置 Cursor Rules

在项目根目录创建 .cursorrules：

\'\'\`
# 项目概览
- 这是一个 [项目类型] 项目
- 使用 [技术栈]
- 数据库：[数据库类型]
- 部署：[部署平台]

# 编码规范
- 代码风格：[风格偏好]
- 测试框架：[测试工具]
- 命名约定：[命名规则]

# 重要约定
- 不要修改 generated 目录下的文件
- API 路由遵循 RESTful 规范
- 组件文件不超过 200 行
\'\'\`

### 2. 适配工作流

- Copilot 的 Tab 补全 → Cursor 的 Tab 补全类似
- Copilot Chat → Cursor Chat（Ctrl+K / Cmd+K）
- Copilot 内联建议 → Cursor 的 inline diff

### 3. 团队协作

在项目仓库中维护 .cursorrules，团队共享配置，确保 AI 行为一致。

## 学习路径

建议按以下顺序学习：
1. 先完整阅读一遍教程
2. 在真实项目中实践核心要点
3. 遇到问题时回到本文搜索解决方案
4. 结合其他规则页构建你的完整 AI 编程工作流

## 下一步

- 访问 '/frameworks' 查看特定框架的详细规则
- 访问 '/compare' 了解 AI 工具的差异和选择

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "cursor-agent-workflow",
    title: "Cursor Agent 模式从入门到精通教程",
    category: "tutorial",
    description: "Cursor Agent 模式实战教程，从基础到高级的完整工作流。",
    icon: "📖",
    tags: ["cursor", "agent", "教程", "工作流"],
    updatedAt: "2026-05-10",
    content: `# Cursor Agent 模式深度使用教程

## 什么是 Agent 模式？

Agent 模式是 Cursor 的核心差异化功能，它能：
- 自动读取相关文件
- 执行终端命令
- 进行多步骤任务
- 自动修复错误

## 基础工作流

### 场景：添加新 API 端点

1. Cmd+K 打开 Agent 模式
2. 输入："在 app/api/users 下创建用户列表 API，包含分页和搜索"
3. Agent 会自动：
   - 读取现有路由文件
   - 创建新的路由文件
   - 生成数据库查询
   - 添加参数验证
   - 创建对应的类型定义

### 场景：修复 Bug

1. 描述问题："用户登录后 session 有时会丢失"
2. Agent 会：
   - 搜索与 session 相关的代码
   - 分析可能的原因
   - 提出修复方案
   - 修改代码并验证

## 高级技巧

- 使用 @ 符号引用特定文件
- 分步指令替代大段描述
- 每次 Agent 操作后 review diff

## 学习路径

建议按以下顺序学习：
1. 先完整阅读一遍教程
2. 在真实项目中实践核心要点
3. 遇到问题时回到本文搜索解决方案
4. 结合其他规则页构建你的完整 AI 编程工作流

## 下一步

- 访问 '/frameworks' 查看特定框架的详细规则
- 访问 '/compare' 了解 AI 工具的差异和选择

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "claude-code-workflow-guide",
    title: "Claude Code CLI 命令行实战指南",
    category: "tutorial",
    description: "Claude Code 命令行工具的高效使用指南和实战场景。",
    icon: "📖",
    tags: ["claude-code", "cli", "教程", "工作流"],
    updatedAt: "2026-05-10",
    content: `# Claude Code CLI 工作流实战指南

## 快速开始

Claude Code 是 Anthropic 推出的命令行 AI 编程助手。

### 安装

\'\'\`bash
npm install -g @anthropic-ai/claude-code
\'\'\`

### 基础用法

\'\'\`bash
# 在当前目录启动
claude

# 直接提问
claude "分析这个项目的代码结构"

# 代码审查
claude "审查 src/ 目录下的代码质量"
\'\'\`

## 实战场景

### 场景 1：代码审查

在 CI 流程中集成 Claude Code：

\'\'\`bash
claude "审查以下文件的变更，关注：1. 逻辑错误 2. 性能问题 3. 安全漏洞"
\'\'\`

### 场景 2：批量重构

\'\'\`bash
claude "将所有 any 类型替换为具体的类型定义，保持功能不变"
\'\'\`

### 场景 3：测试生成

\'\'\`bash
claude "为 src/utils/ 下的工具函数生成 pytest 测试，覆盖边界情况"
\'\'\`

## 最佳实践

- 每个对话聚焦一个任务
- 提供足够的上下文文件
- 审查所有代码变更

## 学习路径

建议按以下顺序学习：
1. 先完整阅读一遍教程
2. 在真实项目中实践核心要点
3. 遇到问题时回到本文搜索解决方案
4. 结合其他规则页构建你的完整 AI 编程工作流

## 下一步

- 访问 '/frameworks' 查看特定框架的详细规则
- 访问 '/compare' 了解 AI 工具的差异和选择

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "cursor-vue-best-practices",
    title: "Vue 3 + Cursor 高效开发实战教程",
    category: "tutorial",
    description: "在实际 Vue 3 项目中使用 Cursor AI 编程的高效工作流和实战技巧。",
    icon: "📖",
    tags: ["cursor", "vue", "教程", "实战"],
    updatedAt: "2026-05-10",
    content: `# Vue 3 + Cursor 高效开发实战

## 配置规则

在 .cursorrules 中配置 Vue 3 项目上下文：

\'\'\`
# 技术栈
- Vue 3 with Composition API
- TypeScript strict
- Vite 5
- Pinia 状态管理
- Vue Router 4
- UnoCSS / Tailwind CSS

# 组件规范
- 使用 <script setup lang="ts">
- 组件名使用 PascalCase
- 页面组件放在 pages/ 目录
- 公共组件放在 components/ 目录

# 状态管理
- 全局状态使用 Pinia
- 本地状态使用 ref/reactive
- 跨组件通信使用 provide/inject

# API 层
- API 请求封装在 api/ 目录
- 使用 axios 实例统一配置
- 请求和响应拦截器处理错误
\'\'\`

## 日常开发场景

### 创建新组件
在 Cursor 中输入："在 components/ 下创建 UserCard 组件，接收 user 对象 prop，显示头像和用户名，支持 click 事件。"

### 添加路由
"在 router/index.ts 中添加 /users/:id 路由，使用 UserDetail 组件，支持懒加载。"

### 状态管理
"创建一个 useAuth composable，包含登录、登出和 token 管理，支持持久化。

## 学习路径

建议按以下顺序学习：
1. 先完整阅读一遍教程
2. 在真实项目中实践核心要点
3. 遇到问题时回到本文搜索解决方案
4. 结合其他规则页构建你的完整 AI 编程工作流

## 下一步

- 访问 '/frameworks' 查看特定框架的详细规则
- 访问 '/compare' 了解 AI 工具的差异和选择

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },


  {
    slug: "cursor-rust-rules",
    title: "Cursor Rust 开发编码规范规则",
    category: "cursor",
    description: "Rust 项目中使用 Cursor 的编码规范和所有权管理最佳实践。",
    icon: "🦀",
    tags: ["cursor", "rust", "系统编程"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Rust 开发编码规范规则

## 代码风格
- 遵循 Rust 官方风格指南
- 使用 rustfmt 格式化代码
- 所有公共项必须写文档注释（///）
- 使用 clippy 保持代码质量

## 所有权与借用
- 优先使用引用而不是所有权转移
- 生命周期标注尽可能让编译器推断
- 使用 Rc/Arc 管理共享所有权
- RefCell 只用于内部可变性

## 错误处理
- 使用 thiserror 定义错误类型
- 使用 anyhow 处理可恢复错误
- 避免 unwrap/expect，使用 ? 运算符
- 为库代码提供有意义的错误信息

## 异步
- 使用 tokio 作为异步运行时
- async fn 作为默认异步接口
- 避免阻塞线程池中的异步任务

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-java-rules",
    title: "Cursor Java 开发编码规范规则",
    category: "cursor",
    description: "Java 项目中使用 Cursor 进行开发的编码规范和 Spring Boot 最佳实践。",
    icon: "☕",
    tags: ["cursor", "java", "spring"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Java 开发编码规范规则

## 代码风格
- 遵循 Java 官方编码规范
- 使用 4 空格缩进
- 类名使用 PascalCase
- 方法名和变量使用 camelCase

## 项目结构
- 按功能模块分包
- Controller/Service/Repository 分层
- DTO 用于 API 数据传输
- 常量使用枚举或常量类

## Spring Boot
- 使用构造函数注入
- 事务注解放在 Service 层
- 配置使用 application.yml
- 统一异常处理使用 @ControllerAdvice

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-flutter-rules",
    title: "Cursor Flutter 移动端开发规则",
    category: "cursor",
    description: "Flutter/Dart 项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "📱",
    tags: ["cursor", "flutter", "dart"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Flutter 移动端开发规则

## Dart 规范
- 遵循 effective-dart 指南
- 使用 dart format 格式化
- 类型标注优先于 var
- 避免动态类型

## Flutter 组件
- 使用 StatelessWidget 优先
- StatefulWidget 只在必要时使用
- 组件拆分保持单一职责
- 使用 const 构造函数优化性能

## 状态管理
- 小项目使用 setState
- 中大型项目使用 Riverpod 或 Bloc
- 避免全局状态滥用
- Provider 按模块分层

## 路由
- 使用 GoRouter 声明式路由
- 路由模块按功能拆分
- 深度链接支持

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-tailwind-rules",
    title: "Cursor Tailwind CSS 开发规则",
    category: "cursor",
    description: "使用 Cursor 配合 Tailwind CSS 开发的编码规范和最佳实践。",
    icon: "🎨",
    tags: ["cursor", "tailwind", "css"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Tailwind CSS 开发规则

## 使用原则
- 优先使用 Tailwind 工具类
- 自定义样式使用 @apply 指令
- 颜色使用设计系统 token
- 响应式使用断点前缀

## 组件样式
- 公共组件提取为可复用类
- 使用 cn() 合并 class 名
- 暗色模式使用 dark: 前缀
- 动画使用 Tailwind 动画类

## 性能
- 避免动态拼接 class
- 使用 PurgeCSS 清除未使用的样式
- 提取公共样式减少重复

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-prisma-rules",
    title: "Cursor Prisma ORM 数据层开发规则",
    category: "cursor",
    description: "Prisma ORM 项目中使用 Cursor 的数据库模型设计和查询规则。",
    icon: "🗃️",
    tags: ["cursor", "prisma", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Prisma ORM 数据层开发规则

## Schema 设计
- 模型名使用 PascalCase 单数
- 字段名使用 camelCase
- 关系使用 @relation 明确注解
- 索引在查询热点字段上添加

## 查询规范
- 使用 select 只查询需要的字段
- 避免 N+1 使用 include 预加载
- 批量操作使用 createMany/updateMany
- 分页使用 cursor-based

## 迁移管理
- 每次变更生成新迁移
- 迁移需 Review 后再部署
- 生产环境使用 migrate deploy

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-e2e-testing",
    title: "Cursor E2E 自动化测试规则",
    category: "cursor",
    description: "用 Cursor 编写 Playwright/Cypress 端到端测试的编码规则。",
    icon: "🎭",
    tags: ["cursor", "e2e", "playwright"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor E2E 自动化测试规则

## 框架选择
- Web 应用使用 Playwright
- 简单场景使用 Cypress
- 统一使用 Page Object 模式

## 测试设计
- 每个测试独立可运行
- 测试数据使用 beforeEach 准备
- 避免测试间依赖
- 关键用户路径优先覆盖

## 断言规范
- 使用软断言不中断流程
- 等待元素可见后再操作
- 截图用于失败分析

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "claude-code-nextjs",
    title: "Claude Code Next.js 项目开发 Prompt",
    category: "claude",
    description: "用 Claude Code 开发 Next.js App Router 项目的高效 Prompt 模板。",
    icon: "▲",
    tags: ["claude-code", "nextjs", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Claude Code Next.js 项目开发 Prompt

## 创建页面路由
"在 app/(main)/dashboard/ 下创建仪表盘页面，包含数据概览卡片、最近订单表格和销售趋势图表。"

## 添加 Server Action
"在 app/actions/user.ts 中创建用户注册 Server Action，使用 Zod 验证输入，插入数据库后发送欢迎邮件。"

## 实现中间件
"创建 middleware.ts，实现登录保护，未登录用户重定向到 /login，已登录用户才能访问 /dashboard/*。"

## 优化 SEO
"为产品详情页生成动态 metadata 和结构化数据 JSON-LD。

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
    slug: "claude-code-api-dev",
    title: "Claude Code 后端 API 开发 Prompt",
    category: "claude",
    description: "用 Claude Code 开发 RESTful 和 GraphQL API 的 Prompt 模板。",
    icon: "🌐",
    tags: ["claude-code", "api", "backend"],
    updatedAt: "2026-05-11",
    content: `# Claude Code 后端 API 开发 Prompt

## 创建 CRUD 接口
"在 app/api/products/ 下创建商品 CRUD 接口，支持分页查询、按分类筛选、价格排序。"

## 身份验证
"实现 JWT 身份验证中间件，包含 token 签发、验证和刷新，过期时间 7 天。"

## 文件上传
"创建文件上传接口，支持图片压缩、格式校验（仅 jpg/png/webp），上传到 S3 并返回 URL。

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
    slug: "copilot-react-native",
    title: "Copilot React Native 移动端指令",
    category: "copilot",
    description: "GitHub Copilot 在 React Native 项目中的最佳配置和使用规则。",
    icon: "📱",
    tags: ["copilot", "react-native", "mobile"],
    updatedAt: "2026-05-11",
    content: `# Copilot React Native 移动端指令

## 配置 copilot-instructions.md

## 技术栈
- React Native 0.76+
- TypeScript strict
- Expo SDK 52+
- React Navigation 7

## 编码规范
- 使用函数组件 + Hooks
- 样式使用 StyleSheet.create
- 屏幕组件放在 screens/ 目录
- 导航配置统一管理

## 常用 Prompt
- "创建登录页面，包含邮箱密码输入和表单验证"
- "实现底部 Tab 导航和抽屉导航嵌套"
- "添加推送通知处理逻辑"

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },
  {
    slug: "copilot-docker",
    title: "Copilot Docker 容器化指令",
    category: "copilot",
    description: "GitHub Copilot 辅助 Docker 开发和容器化部署的最佳实践。",
    icon: "🐳",
    tags: ["copilot", "docker", "devops"],
    updatedAt: "2026-05-11",
    content: `# Copilot Docker 容器化指令

## 配置 copilot-instructions.md

## 技术栈
- Docker / Docker Compose
- 多阶段构建
- Alpine 基础镜像

## 常用 Prompt
- "为 Node.js 应用生成多阶段构建 Dockerfile"
- "写 docker-compose.yml 包含 PostgreSQL 和 Redis"
- "生成 .dockerignore 排除 node_modules 和 .git"

## 使用场景

将以上配置保存到项目根目录的 '.github/copilot-instructions.md' 文件，GitHub Copilot 会在所有 IDE 中自动加载这些指令。

## 常见错误

- copilot-instructions.md 不是 '.cursorrules' 的替代品，二者语法不同
- 配置太长会超过上下文窗口限制，控制在 50 行内
- Copilot 不支持复杂的多步骤指令，保持规则简洁直接
`,
  },
  {
    slug: "general-ai-workflow",
    title: "AI 编程工作流模式与效率指南",
    category: "general",
    description: "适用所有 AI 编程工具的高效开发工作流模式和团队协作指南。",
    icon: "🔄",
    tags: ["AI", "工作流", "效率", "协作"],
    updatedAt: "2026-05-11",
    content: `# AI 编程工作流模式与效率指南

## 单人模式
- 每日开始：让 AI 回顾 TODO 和进度
- 编码前：描述需求让 AI 设计方案
- 编码中：小步提交，每次让 AI Review
- 编码后：AI 生成测试和文档

## 团队模式
- 共享 .cursorrules 项目规则
- 统一 AI 工具版本和配置
- Code Review 结合 AI 审查
- 知识库共享 AI Prompt 模板

## 常见陷阱
- 不要一次性提太多需求
- 不要完全信任 AI 生成的代码
- 不要跳过测试
- AI 不擅长做架构决策

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "general-api-design",
    title: "AI 辅助 API 设计最佳实践指南",
    category: "general",
    description: "使用 AI 编程工具进行 API 设计的规范、模式和实战经验。",
    icon: "📡",
    tags: ["API", "设计", "REST"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助 API 设计最佳实践指南

## RESTful 规范
- 资源使用复数名词
- GET 不修改数据
- POST 创建资源
- PUT 全量更新，PATCH 部分更新

## 请求和响应
- 统一错误响应格式
- 列表接口必须分页
- 敏感字段不在 URL 中传递
- 版本号在 URL 路径中

## 安全
- 所有 API 需要认证
- HTTPS 强制使用
- 输入校验防注入
- 限制请求频率

## 文档
- 使用 OpenAPI/Swagger
- 自动生成 API 文档
- 每个端点写示例

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },


  {
    slug: "cursor-svelte-rules",
    title: "Cursor Svelte 开发编码规范规则",
    category: "cursor",
    description: "Svelte 5 + SvelteKit 项目中 Cursor 的编码规则和最佳实践。",
    icon: "🧑‍💻",
    tags: ["cursor", "svelte", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Svelte 开发编码规范规则

## 组件规范
- 使用 Svelte 5 runes 语法
- 组件文件使用 .svelte 扩展名
- 逻辑复用使用 stores 和 actions
- 每个组件单一职责

## SvelteKit 路由
- 使用 filesystem-based routing
- 页面文件放在 routes/ 目录
- API 端点使用 +server.ts
- 布局使用 +layout.svelte

## 样式
- 使用 <style> 局部作用域
- 支持 Tailwind CSS
- 全局样式放在 app.css

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-angular-rules",
    title: "Cursor Angular 开发编码规范规则",
    category: "cursor",
    description: "Angular 17+ 独立组件模式下 Cursor 的编码规则。",
    icon: "🅰️",
    tags: ["cursor", "angular", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Angular 开发编码规范规则

## 组件规范
- 使用 standalone 组件
- 组件文件名使用 .component.ts
- 模板和样式文件分离
- 使用 OnPush 变更检测

## 依赖注入
- 使用 inject() 函数
- 服务使用 providedIn: root
- 避免在构造函数中写逻辑

## 路由
- 使用懒加载路由
- 路由守卫保护敏感页面
- 使用 ResolveFn 预加载数据

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-nodejs-rules",
    title: "Cursor Node.js Express 后端开发规则",
    category: "cursor",
    description: "Node.js + Express 项目中 Cursor 的编码规则和中间件规范。",
    icon: "🟢",
    tags: ["cursor", "nodejs", "express"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Node.js Express 后端开发规则

## 项目结构
- 按功能模块组织文件
- routes/ controllers/ services/ 分层
- 中间件放在 middleware/ 目录
- 配置使用环境变量

## API 设计
- RESTful 路由命名
- 使用 express-validator 校验输入
- 统一错误处理中间件
- 使用 asyncHandler 包装异步路由

## 安全
- 使用 helmet 增强安全头
- 使用 cors 配置跨域
- 请求频率限制
- 敏感信息不在日志中输出

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-laravel-rules",
    title: "Cursor Laravel PHP 开发规则",
    category: "cursor",
    description: "Laravel 11 项目中使用 Cursor 的 MVC 架构和 Eloquent 规范。",
    icon: "🎯",
    tags: ["cursor", "laravel", "php"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Laravel PHP 开发规则

## MVC 架构
- 模型放在 app/Models
- 控制器瘦、模型胖
- 业务逻辑放在 Service 类
- 表单验证使用 FormRequest

## Eloquent
- 使用 with() 预加载关联
- 避免 N+1 查询
- 使用 scope 定义查询范围
- 批量赋值保护

## API
- 使用 API Resource 格式化响应
- 使用 Sanctum 或 Passport 认证
- 版本化 API 路由

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-saas-rules",
    title: "Cursor SaaS 项目开发规则",
    category: "cursor",
    description: "SaaS 创业项目使用 Cursor 的完整开发规则，从多租户到支付集成。",
    icon: "🏢",
    tags: ["cursor", "saas", "startup"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor SaaS 项目开发规则

## 多租户
- 使用 tenant_id 字段隔离数据
- 中间件自动设置租户上下文
- 数据库按租户分表或 schema

## 支付集成
- Stripe 订阅管理
- Webhook 处理支付事件
- 按计划限制功能访问

## 用户管理
- 邮箱密码 + OAuth 登录
- 角色权限控制 RBAC
- 邀请码注册机制

## DevOps
- 数据库迁移自动化
- CI/CD 自动部署
- 日志和监控告警

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-mvp-rules",
    title: "Cursor MVP 快速开发规则",
    category: "cursor",
    description: "用 Cursor 快速构建 MVP 的开发规则，从原型到上线。",
    icon: "🚀",
    tags: ["cursor", "mvp", "快速开发"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor MVP 快速开发规则

## 开发策略
- 先用单体架构快速验证
- 选择熟悉的技术栈
- 核心功能优先，非核心砍掉
- 使用现成模版和组件库

## AI 加速
- 用 Cursor Agent 生成 CRUD
- AI 生成单元测试
- 自动编写 API 文档
- 快速迭代 UI 原型

## 部署
- Vercel / Railway 一键部署
- 使用托管数据库减少运维
- 监控使用 Sentry 免费版

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-indie-hacker-rules",
    title: "Cursor 独立开发者工作流规则",
    category: "cursor",
    description: "独立开发者使用 Cursor 一人搞定全栈开发的最佳工作流和规则。",
    icon: "💻",
    tags: ["cursor", "indie", "独立开发"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 独立开发者工作流规则

## 一个人 = 一个团队

- Cursor Agent 做后端代码
- Cursor Composer 做前端 UI
- Claude Code 做测试和 CI
- AI 生成设计稿和文案

## 效率最大化
- 每周一规划，每天发布
- 使用模板快速启动项目
- 复用自己的 .cursorrules 库
- AI 做代码审查和测试

## 工具链
- GitHub + Vercel 自动部署
- Supabase 做后端和数据库
- Stripe 做支付
- Resend 做邮件

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-ai-agent-rules",
    title: "Cursor AI Agent 开发规则",
    category: "cursor",
    description: "使用 Cursor 开发 AI Agent 应用的规则和最佳实践。",
    icon: "🤖",
    tags: ["cursor", "ai-agent", "llm"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor AI Agent 开发规则

## 架构设计
- 使用 LangChain / Vercel AI SDK
- Agent 工具调用模式
- 记忆管理（短期 + 长期）
- 流式响应处理

## Prompt 管理
- 系统提示词集中管理
- 使用模板引擎构建 prompt
- 版本控制提示词变更
- 效果评估机制

## 安全
- 输入验证和清理
- 限制工具执行权限
- 速率限制
- 敏感信息过滤

## 测试
- 模拟用户对话测试
- 工具调用正确性测试
- 边缘情况覆盖

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-startup-team-rules",
    title: "Cursor 创业团队协作规则",
    category: "cursor",
    description: "创业团队统一 Cursor 配置和 AI 编码规范的团队协作规则。",
    icon: "👥",
    tags: ["cursor", "team", "协作"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 创业团队协作规则

## 统一配置
- 项目级 .cursorrules 团队共享
- 一致的代码风格配置
- 统一的 AI 行为规范

## 代码审查
- AI 自动审查 PR
- 人工确认 AI 建议
- 代码质量门禁

## 知识管理
- 团队共享 Prompt 模板
- Cursor 技巧文档化
- 定期分享最佳实践

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-landing-page-rules",
    title: "Cursor Landing Page 开发规则",
    category: "cursor",
    description: "用 Cursor 快速构建落地页的规则和最佳实践。",
    icon: "📄",
    tags: ["cursor", "landing-page", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Landing Page 开发规则

## 技术选型
- Next.js + Tailwind CSS
- Framer Motion 动画
- 响应式设计优先
- SEO 优化内置

## 页面结构
- Hero + 特性 + 案例 + CTA
- 社交证明（用户评价）
- FAQ 解答疑虑
- 页脚含所有链接

## 性能
- 图片使用 next/image
- 字体使用 next/font
- 关键 CSS 内联
- 延迟加载非首屏内容

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-graphql-rules",
    title: "Cursor GraphQL API 开发规则",
    category: "cursor",
    description: "使用 Cursor 开发 GraphQL API 的编码规则和查询优化最佳实践。",
    icon: "◈",
    tags: ["cursor", "graphql", "api"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor GraphQL API 开发规则

## Schema 设计
- 使用 SDL 优先方式
- 类型命名使用 PascalCase
- 字段命名使用 camelCase
- Query 和 Mutation 分开定义

## 解析器
- 使用 DataLoader 解决 N+1
- 批量查询优化
- 错误处理返回标准格式

## 安全
- 深度限制防止恶意查询
- 复杂度分析
- 认证中间件
- 字段级别权限

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-redis-rules",
    title: "Cursor Redis 缓存开发规则",
    category: "cursor",
    description: "在 Cursor 项目中集成和使用 Redis 缓存的编码规则。",
    icon: "⚡",
    tags: ["cursor", "redis", "缓存"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Redis 缓存开发规则

## 缓存策略
- 缓存穿透、击穿、雪崩防护
- 合理设置 TTL
- 使用分布式锁防并发
- 缓存预热机制

## 数据结构
- 字符串用于简单缓存
- Hash 存储对象字段
- List 做消息队列
- Sorted Set 做排行榜

## 规范
- Key 命名使用业务前缀
- 过期时间统一设置
- 大 Key 拆分
- 监控缓存命中率

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-fullstack-app-rules",
    title: "Cursor 全栈应用开发规则",
    category: "cursor",
    description: "使用 Cursor 进行全栈应用开发的端到端编码规则。",
    icon: "⚡",
    tags: ["cursor", "fullstack", "web"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 全栈应用开发规则

## 技术栈推荐
- Next.js / Nuxt 做前端
- Prisma / Drizzle 做 ORM
- PostgreSQL 做数据库
- Tailwind CSS 做样式

## 开发流程
- 先设计数据库 Schema
- 生成类型定义
- 实现 API 接口
- 开发前端页面

## 质量保证
- E2E 测试关键路径
- 单元测试核心逻辑
- 性能预算监控
- 可访问性检查

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "general-rule-generator-workflow",
    title: "AI Rule Generator 开发工作流",
    category: "general",
    description: "通过结构化表单自动生成个性化 .cursorrules 的工作流和方法。",
    icon: "🔧",
    tags: ["AI", "generator", "工作流"],
    updatedAt: "2026-05-11",
    content: `# AI Rule Generator 开发工作流

## 规则模板结构

一个好的 Rule 包含：
1. 技术栈声明（项目使用什么框架和语言）
2. 编码规范（命名、缩进、注释）
3. 架构约束（组件大小、分层规则）
4. 安全规则（输入校验、敏感信息）

## 生成方法

使用结构化提示词让 AI 生成 Rule：

"生成一个 [技术栈] 的 .cursorrules，包含代码风格、组件规范和错误处理规则。"

## 示例 Prompt

"生成一个 TypeScript + React + Tailwind CSS 的 .cursorrules，组件使用函数组件和 Hooks，样式使用 Tailwind 类。"

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },


  {
    slug: "cursor-ruby-rails",
    title: "Cursor Ruby on Rails 开发规则",
    category: "cursor",
    description: "Ruby on Rails 7+ 项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "💎",
    tags: ["cursor", "ruby", "rails"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Ruby on Rails 开发规则

## Rails 规范
- 遵循 Rails 约定优于配置
- 使用 RESTful 资源路由
- Model/View/Controller 分离
- 业务逻辑放在 Service 层

## 代码风格
- 使用 2 空格缩进
- 方法使用 snake_case
- 类名使用 CamelCase
- 常量使用 SCREAMING_SNAKE_CASE

## 数据库
- 迁移使用 change 方法
- 模型中定义关联和验证
- 使用索引优化查询
- 批量操作使用 find_each

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-swift-ios",
    title: "Cursor iOS Swift 开发规则",
    category: "cursor",
    description: "Swift + SwiftUI 项目中 Cursor 的编码规范和最佳实践。",
    icon: "🍎",
    tags: ["cursor", "swift", "ios"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor iOS Swift 开发规则

## Swift 规范
- 使用 Swift 最新版本
- 遵循 Swift API 设计指南
- 使用 SwiftUI 优先
- UIKit 用于兼容性场景

## 架构
- 使用 MVVM 架构
- Service 层处理网络请求
- Repository 模式管理数据
- 依赖注入管理服务

## SwiftUI
- 使用 @State/@Binding 管理局部状态
- @ObservableObject 管理可观察对象
- 视图拆分保持小型化
- 预览提供 mock 数据

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-kotlin-android",
    title: "Cursor Kotlin Android 开发规则",
    category: "cursor",
    description: "Android Kotlin + Jetpack Compose 项目中 Cursor 的编码规则。",
    icon: "🤖",
    tags: ["cursor", "kotlin", "android"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Kotlin Android 开发规则

## Kotlin 规范
- 使用 Kotlin 1.9+
- 遵循 Kotlin 编码规范
- 使用 coroutines 处理异步
- Flow 用于数据流

## Jetpack Compose
- 使用 @Composable 函数构建 UI
- 状态提升至 ViewModel
- SideEffect 管理副作用
- 预览函数提供示例数据

## 架构
- MVVM + Clean Architecture
- Repository 管理数据源
- Hilt 依赖注入
- Navigation Compose 路由

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-csharp-dotnet",
    title: "Cursor C# .NET 开发规则",
    category: "cursor",
    description: ".NET 8+ 项目中使用 Cursor 的编码规则和架构规范。",
    icon: "🔷",
    tags: ["cursor", "csharp", "dotnet"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor C# .NET 开发规则

## 代码风格
- 遵循 .NET 编码规范
- 使用 4 空格缩进
- 类和方法使用 PascalCase
- 参数和字段使用 camelCase

## ASP.NET Core
- 使用最小 API 或控制器
- 依赖注入注册服务
- Entity Framework Core 管理数据
- Serilog 结构化日志

## 架构
- Clean Architecture 分层
- MediatR 处理命令查询
- FluentValidation 输入校验
- AutoMapper 对象映射

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-astro-rules",
    title: "Cursor Astro 静态站点开发规则",
    category: "cursor",
    description: "Astro 框架项目中 Cursor 的编码规则和岛屿架构最佳实践。",
    icon: "🚀",
    tags: ["cursor", "astro", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Astro 静态站点开发规则

## Astro 规范
- 使用 .astro 组件语法
- 内容集合管理 Markdown 文章
- 岛屿架构交互组件
- 使用 View Transitions 路由

## 内容管理
- Markdown/MDX 管理博客内容
- 集合 schema 验证 frontmatter
- 自动生成目录和导航

## 性能
- 静态生成所有页面
- 图片使用 Astro:image
- 按需加载岛屿组件

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-remix-rules",
    title: "Cursor Remix 全栈开发规则",
    category: "cursor",
    description: "Remix 全栈框架项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "🎸",
    tags: ["cursor", "remix", "react"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Remix 全栈开发规则

## 路由规范
- 使用嵌套路由和布局
- loader 加载服务端数据
- action 处理表单提交
- useFetcher 实现渐进增强

## 数据管理
- loader/action 直接访问数据库
- 使用 Session 管理用户状态
- Cookie 管理客户端偏好

## 部署
- 适配 Cloudflare Pages
- 或部署到 Fly.io / Vercel
- 环境变量管理配置

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-tauri-rules",
    title: "Cursor Tauri 桌面应用开发规则",
    category: "cursor",
    description: "Tauri 桌面应用项目中 Cursor 的 Rust 后端和前端编码规范。",
    icon: "🖥️",
    tags: ["cursor", "tauri", "desktop"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Tauri 桌面应用开发规则

## 项目结构
- 前端使用 React/Vue/Svelte
- Rust 后端在 src-tauri/
- 命令在 Rust 中定义
- 事件在前后端间传递

## Rust 后端
- 使用 tauri::command 导出函数
- 错误处理返回 Result
- 文件系统操作使用安全 API
- 数据库使用 SQLite

## 前端
- 调用 @tauri-apps/api
- 窗口管理使用 Webview API
- 系统托盘和菜单配置

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-supabase-rules",
    title: "Cursor Supabase 后端开发规则",
    category: "cursor",
    description: "Supabase BaaS 项目中使用 Cursor 的数据库策略和行级安全规则。",
    icon: "⚡",
    tags: ["cursor", "supabase", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Supabase 后端开发规则

## 数据库设计
- 使用 PostgreSQL 原生特性
- 行级安全 RLS 策略
- 实时订阅启用 Realtime
- 存储桶管理文件上传

## 认证
- 内置邮箱/OAuth 认证
- 自定义 JWT 声明
- 用户元数据管理
- 角色权限控制

## API
- 自动生成 RESTful API
- 使用 PostgREST 过滤查询
- Edge Functions 自定义逻辑
- 数据库函数调用

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-stripe-rules",
    title: "Cursor Stripe 支付集成规则",
    category: "cursor",
    description: "Stripe 支付集成项目中使用 Cursor 的结算流程和 Webhook 规范。",
    icon: "💳",
    tags: ["cursor", "stripe", "payment"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Stripe 支付集成规则

## 结账流程
- 使用 Stripe Checkout 或 Payment Element
- 创建 PaymentIntent 处理支付
- 订阅管理使用 Stripe Billing
- Webhook 处理异步事件

## Webhook 安全
- 验证 Stripe 签名
- 幂等键防止重复处理
- 异步处理耗时任务
- 日志记录所有事件

## 数据模型
- Customer 对象对应用户
- Subscription 映射会员计划
- Product/Price 管理定价
- Invoice 记录账单

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "claude-code-debugging",
    title: "Claude Code 调试修复 Prompt",
    category: "claude",
    description: "用 Claude Code 高效调试代码的 Prompt 模板和调试工作流。",
    icon: "🐛",
    tags: ["claude-code", "调试", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Claude Code 调试修复 Prompt

## 分析错误
"分析这个错误堆栈：粘贴错误日志。导致这个错误的原因是什么？如何修复？"

## 定位 Bug
"在 src/components/UserList.tsx 中，列表在第二次渲染时显示空白。检查代码找出原因并提供修复。"

## 性能分析
"分析这个函数（粘贴代码）的性能瓶颈，提供优化方案并解释为什么新方案更快。"

## 安全审计
"审查这段用户输入处理代码，找出安全漏洞并提供修复方案。重点关注 XSS 和 SQL 注入。"

## 使用场景

在 Claude Code 对话开始前，将以上 Prompt 模板粘贴到输入框，替换 '[]' 中的占位符为你的实际项目信息。Claude Code 会按照模板的精确程度生成代码。

## 常见错误

- 不要一次性提太多需求，把大任务拆成小步骤
- 提供足够的文件路径上下文，帮助 Claude 找到正确位置
- 必须审查 AI 生成的每一行代码，不盲信
`,
  },
  {
    slug: "general-code-security",
    title: "AI 编程安全规范指南",
    category: "general",
    description: "使用 AI 编程工具时的安全编码规范，防止引入漏洞。",
    icon: "🔒",
    tags: ["AI", "安全", "最佳实践"],
    updatedAt: "2026-05-11",
    content: `# AI 编程安全规范指南

## 输入验证
- 永远不要信任用户输入
- 使用白名单校验
- SQL 参数化查询防注入
- XSS 防护使用转义

## 认证授权
- 密码使用 bcrypt 哈希
- JWT 令牌设置合理过期时间
- API Key 通过环境变量注入
- 最小权限原则

## AI 生成代码审查
- 检查 AI 生成的 SQL 查询
- 验证认证逻辑完整性
- 审计文件路径拼接
- 不使用 AI 生成的密码学代码

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "general-responsive-design",
    title: "AI 辅助响应式设计规则",
    category: "general",
    description: "使用 AI 编程工具实现响应式设计的编码规范和最佳实践。",
    icon: "📱",
    tags: ["AI", "响应式", "CSS"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助响应式设计规则

## 设计原则
- Mobile First 优先开发
- 使用相对单位 rem/em/%
- 断点使用 Tailwind 默认值
- 图片设置 max-width: 100%

## 布局
- CSS Grid 用于整体布局
- Flexbox 用于组件内排列
- Container Queries 组件级响应
- 间距使用间距系统

## AI Prompt
"创建响应式导航栏：移动端汉堡菜单，平板展开图标+文字，桌面完整菜单。"

"设计卡片网格布局，自动适应 1/2/3/4 列，图片保持比例。"

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },


  {
    slug: "cursor-nuxt-rules",
    title: "Cursor Nuxt 3 全栈开发规则",
    category: "cursor",
    description: "Nuxt 3 + Vue 项目中使用 Cursor 的全栈开发编码规则。",
    icon: "🍃",
    tags: ["cursor", "nuxt", "vue"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Nuxt 3 全栈开发规则

## 目录结构
- pages/ 文件路由
- composables/ 共享逻辑
- server/ API 和中间件
- middleware/ 路由守卫

## 数据获取
- useFetch 获取服务端数据
- useState 共享状态
- useAsyncData 异步数据
- Server Routes API 端点

## 模块
- Pinia 状态管理
- Tailwind CSS 样式
- Nuxt Image 图片优化
- Nuxt SEO 元数据

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "cursor-playwright-rules",
    title: "Cursor Playwright E2E 测试规则",
    category: "cursor",
    description: "使用 Cursor 编写 Playwright 端到端测试的编码规则和最佳实践。",
    icon: "🎭",
    tags: ["cursor", "playwright", "e2e"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Playwright E2E 测试规则

## 测试结构
- 测试文件放在 e2e/ 目录
- Page Object 模式管理页面
- describe 组织测试套件
- 每个测试独立可运行

## 选择器
- 优先使用 role 和 text
- 避免 CSS 类名选择器
- data-testid 用于复杂组件
- 等待元素可见后操作

## 断言
- 使用 soft assert 收集错误
- 截图用于失败分析
- 网络请求使用 route 拦截
- 视觉回归使用 screenshot

## 使用场景

将以上内容保存为项目的 '.cursorrules' 文件，Cursor 会在每次对话和代码生成时自动遵循这些规范。适用于团队统一编码风格、新成员快速上手。

## 常见错误

- 不要在规则中写过于具体的业务逻辑，规则应该描述通用规范
- 不要频繁修改 .cursorrules 导致 AI 行为不一致，建议按版本管理
- 规则太多会降低 AI 响应质量，控制在 50 行以内
`,
  },
  {
    slug: "general-monorepo-rules",
    title: "AI Monorepo 多包管理开发规则",
    category: "general",
    description: "使用 AI 编程工具管理 Monorepo 项目的编码规则和包管理最佳实践。",
    icon: "📦",
    tags: ["AI", "monorepo", "turborepo"],
    updatedAt: "2026-05-11",
    content: `# AI Monorepo 多包管理开发规则

## 工具选择
- Turborepo 构建编排
- pnpm workspace 包管理
- Changesets 版本和发版
- ESLint + Prettier 统一配置

## 项目结构
- packages/ 公共包
- apps/ 应用入口
- tools/ 构建工具
- 共享 tsconfig 配置

## AI 协作
- AI 理解包依赖关系
- 跨包重构自动更新引用
- 统一代码风格配置
- 自动生成 Changelog

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "general-deployment-rules",
    title: "AI 部署运维 CI/CD 指南",
    category: "general",
    description: "使用 AI 编程工具配置 CI/CD 流水线和自动化部署的规则。",
    icon: "🚢",
    tags: ["AI", "deploy", "cicd"],
    updatedAt: "2026-05-11",
    content: `# AI 部署运维 CI/CD 指南

## CI 配置
- GitHub Actions 自动化
- lint + test + build 流水线
- 预览部署每个 PR
- 自动生成 Release Notes

## Docker
- 多阶段构建优化
- 使用 .dockerignore
- 安全扫描镜像
- 标签管理版本

## 监控
- 健康检查端点
- 错误追踪 Sentry
- 性能监控
- 日志聚合和告警

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
  {
    slug: "general-testing-strategy",
    title: "AI 辅助测试策略完整指南",
    category: "general",
    description: "测试金字塔策略和 AI 辅助生成测试的最佳实践。",
    icon: "🧪",
    tags: ["AI", "test", "strategy"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助测试策略完整指南

## 测试金字塔
- 单元测试占 70%（快速、隔离）
- 集成测试占 20%（API、数据库）
- E2E 测试占 10%（关键路径）

## AI 在测试中的应用
- 根据代码自动生成单元测试
- 生成 mock 数据和 fixture
- 分析覆盖率补充测试
- 自动修复失败的测试

## 测试规范
- AAA 模式（Arrange-Act-Assert）
- 描述性测试名称
- 一个测试一个行为
- 边界情况优先覆盖

## 适用场景

以上方法适用于所有主流 AI 编程工具（Cursor、Claude Code、GitHub Copilot、Windsurf 等）。根据具体需求，选择对应工具实施。

## 常见错误

- 不要期望 AI 替代你的思考，AI 是加速器不是自动驾驶
- 规则和方法需要根据项目类型调整，不存在万能配置
- 永远保持代码审查，AI 生成的代码可能有隐藏问题
- 定期更新你的规则库，AI 工具迭代很快

## 使用场景

以上内容可直接拷贝到你的项目中，根据需要调整技术栈名称和具体版本。搭配其他相关规则使用效果最佳。

## 常见错误

- 完全复制规则而不根据项目调整，导致 AI 行为不符合预期
- 规则与实际项目不一致，AI 生成的代码和项目结构不匹配
- 不更新规则，随着项目演进而过时
`,
  },
];
