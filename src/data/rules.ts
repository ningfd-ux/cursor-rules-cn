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
  { slug: "cursor", name: "Cursor Rules", count: 12 },
  { slug: "claude", name: "Claude Code", count: 7 },
  { slug: "copilot", name: "GitHub Copilot", count: 5 },
  { slug: "windsurf", name: "Windsurf", count: 4 },
  { slug: "tutorial", name: "教程指南", count: 5 },
  { slug: "general", name: "通用 AI 编程", count: 5 },
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
    title: "Cursor 通用编码规则",
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
- API 请求需要缓存策略`,
  },
  {
slug: "cursor-react-rules",
title: "Cursor React 开发规则",
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
- CSS Module 用于复杂组件`,
  },
  {
slug: "cursor-nextjs-rules",
title: "Cursor Next.js 项目规则",
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
- 动态导入使用 next/dynamic`,
  },
  {
slug: "cursor-python-rules",
title: "Cursor Python 开发规则",
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
- README 包含安装和使用说明`,
  },
  {
slug: "cursor-git-workflow",
title: "Cursor Git 工作流规则",
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
- 关联 Issue 编号`,
  },
  {
slug: "cursor-typescript-rules",
title: "Cursor TypeScript 严格模式规则",
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
- 枚举使用 const enum`,
  },
  {
slug: "claude-code-general",
title: "Claude Code 通用规则",
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
- 敏感操作手动确认`,
  },
  {
slug: "claude-code-react",
title: "Claude Code React 开发 Prompt",
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
"将 Dashboard 页面中的图表逻辑抽离为独立的 Chart 组件，包含 loading 和 empty 状态。"`,
  },
  {
slug: "claude-code-workflow",
title: "Claude Code 工作流规则",
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
4. 确认没有安全漏洞`,
  },
  {
slug: "claude-code-prompts",
title: "Claude Code 高效 Prompt 大全",
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
- "写集成测试覆盖这个流程"`,
  },
  {
slug: "copilot-general",
title: "GitHub Copilot 通用规则",
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
- 需要时手动修正`,
  },
  {
slug: "copilot-instructions",
title: "GitHub Copilot 项目指令配置",
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
`,
  },
  {
    slug: "copilot-testing",
    title: "Copilot 辅助测试编写",
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
- 避免过度 mock`,
  },
  {
slug: "windsurf-rules",
title: "Windsurf AI 编程规则",
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
- 测试生成代码`,
  },
  {
slug: "windsurf-cascade",
title: "Windsurf Cascade 功能指南",
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
title: "AI 编程 Prompt 终极技巧",
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
- 检查生成的依赖版本`,
  },
  {
slug: "ai-code-review",
title: "AI 辅助代码审查规则",
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
- 安全性审查需要专业知识`,
  },
  {
slug: "cursor-rules-best-practices",
title: "Cursor Rules 最佳实践合集",
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
- 定期更新规则`,
  },

  {
slug: "cursor-vue-rules",
title: "Cursor Vue.js 开发规则",
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
- 优先使用 Tailwind CSS 或 CSS Variables`,
  },

  {
slug: "cursor-go-rules",
title: "Cursor Go 开发规则",
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
- 基准测试标记为 BenchmarkXxx`,
  },

  {
slug: "cursor-testing-rules",
title: "Cursor 测试开发规则",
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
- 错误场景和边界情况必须覆盖`,
  },

  {
slug: "cursor-api-rules",
title: "Cursor API 开发规则",
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
- 敏感操作记录审计日志`,
  },

  {
slug: "cursor-docker-rules",
title: "Cursor Docker 容器化规则",
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
- 日志输出到 stdout/stderr`,
  },

  {
slug: "cursor-database-rules",
title: "Cursor 数据库开发规则",
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
- 生产数据库连接池限制`,
  },

  {
slug: "claude-code-python",
title: "Claude Code Python 开发 Prompt",
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
"为 services/user_service.py 写 pytest 单元测试，mock 外部 API 调用，覆盖正常和异常场景。" `,
  },

  {
slug: "claude-code-testing",
title: "Claude Code 测试编写指南",
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
"分析当前项目的测试覆盖率，找出未覆盖的代码路径，生成补充测试。" `,
  },

  {
slug: "claude-code-refactoring",
title: "Claude Code 代码重构 Prompt",
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
"分析列表页面的重渲染问题，添加 React.memo、useMemo、useCallback 优化。提供重构前后的性能对比。" `,
  },

  {
slug: "copilot-vue",
title: "Copilot Vue 3 开发指令",
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
- "实现路由懒加载和导航守卫" `,
  },

  {
slug: "copilot-python",
title: "Copilot Python 开发指令",
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
- "生成 pytest fixture 和测试数据工厂" `,
  },

  {
slug: "windsurf-react",
title: "Windsurf React 开发规则",
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
- 复杂逻辑分步让 AI 完成`,
  },

  {
slug: "windsurf-python",
title: "Windsurf Python 开发规则",
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
- Mock 数据自动生成`,
  },

  {
slug: "ai-prompt-engineering",
title: "AI 编程 Prompt 工程指南",
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
- 第四轮：添加错误处理和边界情况`,
  },

  {
slug: "ai-fullstack-development",
title: "AI 全栈开发工作流",
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
- 性能优化建议`,
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

\`\`\`
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
\`\`\`

### 步骤 2：验证效果

配置好后，尝试让 Cursor 生成一个新页面。你会发现：
- 组件结构自动遵循 App Router 规范
- 数据获取使用 Server Component
- TypeScript 类型完整，无 any`,
  },
  {
    slug: "cursor-rules-migration",
    title: "从 Copilot 迁移到 Cursor 完整指南",
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

\`\`\`
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
\`\`\`

### 2. 适配工作流

- Copilot 的 Tab 补全 → Cursor 的 Tab 补全类似
- Copilot Chat → Cursor Chat（Ctrl+K / Cmd+K）
- Copilot 内联建议 → Cursor 的 inline diff

### 3. 团队协作

在项目仓库中维护 .cursorrules，团队共享配置，确保 AI 行为一致。`,
  },
  {
    slug: "cursor-agent-workflow",
    title: "Cursor Agent 模式深度使用教程",
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
- 每次 Agent 操作后 review diff`,
  },
  {
    slug: "claude-code-workflow-guide",
    title: "Claude Code CLI 工作流实战指南",
    category: "tutorial",
    description: "Claude Code 命令行工具的高效使用指南和实战场景。",
    icon: "📖",
    tags: ["claude-code", "cli", "教程", "工作流"],
    updatedAt: "2026-05-10",
    content: `# Claude Code CLI 工作流实战指南

## 快速开始

Claude Code 是 Anthropic 推出的命令行 AI 编程助手。

### 安装

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### 基础用法

\`\`\`bash
# 在当前目录启动
claude

# 直接提问
claude "分析这个项目的代码结构"

# 代码审查
claude "审查 src/ 目录下的代码质量"
\`\`\`

## 实战场景

### 场景 1：代码审查

在 CI 流程中集成 Claude Code：

\`\`\`bash
claude "审查以下文件的变更，关注：1. 逻辑错误 2. 性能问题 3. 安全漏洞"
\`\`\`

### 场景 2：批量重构

\`\`\`bash
claude "将所有 any 类型替换为具体的类型定义，保持功能不变"
\`\`\`

### 场景 3：测试生成

\`\`\`bash
claude "为 src/utils/ 下的工具函数生成 pytest 测试，覆盖边界情况"
\`\`\`

## 最佳实践

- 每个对话聚焦一个任务
- 提供足够的上下文文件
- 审查所有代码变更`,
  },
  {
    slug: "cursor-vue-best-practices",
    title: "Vue 3 + Cursor 高效开发实战",
    category: "tutorial",
    description: "在实际 Vue 3 项目中使用 Cursor AI 编程的高效工作流和实战技巧。",
    icon: "📖",
    tags: ["cursor", "vue", "教程", "实战"],
    updatedAt: "2026-05-10",
    content: `# Vue 3 + Cursor 高效开发实战

## 配置规则

在 .cursorrules 中配置 Vue 3 项目上下文：

\`\`\`
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
\`\`\`

## 日常开发场景

### 创建新组件
在 Cursor 中输入："在 components/ 下创建 UserCard 组件，接收 user 对象 prop，显示头像和用户名，支持 click 事件。"

### 添加路由
"在 router/index.ts 中添加 /users/:id 路由，使用 UserDetail 组件，支持懒加载。"

### 状态管理
"创建一个 useAuth composable，包含登录、登出和 token 管理，支持持久化。`,
  },

];
