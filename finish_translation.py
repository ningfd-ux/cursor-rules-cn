"""Final batch translation of all remaining Chinese in rules.ts.
Reads the file directly, applies all remaining translations, counts results."""
import re

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# All remaining translations as (old, new) tuples
translations = [
    # Vue 3 + Cursor
    ('title: "Vue 3 + Cursor 高效开发实战教程",', 'title: "Vue 3 + Cursor — Practical Development Guide",'),
    ('description: "在实际 Vue 3 项目中使用 Cursor AI 编程的高效工作流和实战技巧。', 'description: "Efficient workflow and practical tips for Vue 3 development with Cursor AI.'),
    ('tags: ["cursor", "vue", "教程", "实战"],', 'tags: ["cursor", "vue", "tutorial", "practical"],'),
    ('content: `# Vue 3 + Cursor 高效开发实战', 'content: `# Vue 3 + Cursor — Practical Development'),
    ('## 日常开发场景', '## Daily Development Scenarios'),
    ('### 创建新组件', '### Create a New Component'),
    ('"在 components/ 下创建 UserCard 组件，接收 user 对象 prop，显示头像和用户名，支持 click 事件。"', '"Create a UserCard component under components/ that receives a user object prop, displays avatar and name, supports click events."'),
    ('### 添加路由', '### Add a Route'),
    ('"/router/index.ts 中添加 /users/:id 路由，使用 UserDetail 组件，支持懒加载。"', '"Add a /users/:id route in router/index.ts using the UserDetail component with lazy loading."'),
    ('把一个 200 行的 useAuth composable 拆分为多个小模块，每个模块只负责一个职责。', 'Split a 200-line useAuth composable into smaller modules, each with a single responsibility.'),
    ('创建一个 useAuth composable，包含登录、登出和 token 管理，支持持久化。', 'Create a useAuth composable with login, logout, and token management. Support persistence.',),
    ('## Configuration规则', '## Configuration Rules'),
    ('在 .cursorrules 中配置 Vue 3 项目上下文：', 'Configure Vue 3 project context in your standards file:'),
    ('# 组件规范', '# Component Standards'),
    ('- 组件名使用 PascalCase', '- Use PascalCase for component names'),
    ('- 页面组件放在 pages/ 目录', '- Page components go in pages/ directory'),
    ('- 公共组件放在 components/ 目录', '- Shared components go in components/ directory'),
    ('# 状态管理', '# State Management'),
    ('- 全局状态使用 Pinia', '- Use Pinia for global state'),
    ('- 本地状态使用 ref/reactive', '- Use ref/reactive for local state'),
    ('- 跨组件通信使用 provide/inject', '- Use provide/inject for cross-component communication'),
    ('# API 层', '# API Layer'),
    ('- API 请求封装在 api/ 目录', '- Encapsulate API requests in api/ directory'),
    ('- 使用 axios 实例统一配置', '- Use a configured axios instance'),
    ('- 请求和响应拦截器处理错误', '- Handle errors in request/response interceptors'),

    # Rust
    ('title: "Cursor Rust 开发编码规范规则",', 'title: "Rust Coding Standards for Cursor",'),
    ('description: "Rust 项目中使用 Cursor 的编码规范和所有权管理最佳实践。', 'description: "Coding standards and ownership management best practices for Rust projects with Cursor.'),
    ('tags: ["cursor", "rust", "系统编程"],', 'tags: ["cursor", "rust", "systems-programming"],'),
    ('content: `# Cursor Rust 开发编码规范规则', 'content: `# Rust Coding Standards for AI-Assisted Development'),
    ('- 遵循 Rust 官方风格指南', '- Follow the Rust official style guide'),
    ('- 使用 rustfmt 格式化代码', '- Format code with rustfmt'),
    ('- 所有公共项必须写文档注释（///）', '- All public items must have doc comments (///)'),
    ('- 使用 Clippy 进行 lint 检查', '- Run Clippy for lint checks'),
    ('- 严格遵守所有权规则', '- Strictly follow ownership rules'),
    ('- 合理使用生命周期标注', '- Use lifetime annotations judiciously'),
    ('- 优先传递引用而非所有权', '- Prefer passing references over ownership transfers'),
    ('- 错误类型使用 thiserror', '- Use thiserror for error types'),
    ('- 使用 anyhow 简化应用错误处理', '- Use anyhow to simplify application error handling'),
    ('- 避免直接 unwrap/expect', '- Avoid direct unwrap()/expect() in production code'),
    ('- Rust 所有权机制自然防止数据竞争', '- Rust ownership naturally prevents data races'),
    ('- Cargo 内置测试框架开箱即用', '- Cargo built-in test framework works out of the box'),

    # Remaining Claude Code CLI
    ('## 快速开始', '## Quick Start'),
    ('Claude Code 是 Anthropic 推出的命令行 AI 编程助手。', "Claude Code is Anthropic's CLI-based AI coding assistant."),
    ('### 安装', '### Installation'),
    ('### 基础用法', '### Basic Usage'),
    ('# 在当前目录启动', '# Start in current directory'),
    ('# 直接提问', '# Ask a direct question'),
    ('claude "分析这个项目的代码结构"', 'claude "Analyze the code structure of this project"'),
    ('# 代码审查', '# Code review'),
    ('claude "审查 src/ 目录下的代码质量"', 'claude "Review code quality in the src/ directory"'),
    ('## 实战场景', '## Real-World Scenarios'),
    ('### 场景 1：代码审查', '### Scenario 1: Code Review'),
    ('在 CI 流程中集成 Claude Code：', 'Integrate Claude Code in your CI pipeline:'),
    ('claude "审查以下文件的变更，关注：1. 逻辑错误 2. 性能问题 3. 安全漏洞"', 'claude "Review the changes. Focus on: 1. Logic errors 2. Performance issues 3. Security vulnerabilities"'),
    ('### 场景 2：批量重构', '### Scenario 2: Batch Refactoring'),
    ('claude "将所有 any 类型替换为具体的类型定义，保持功能不变"', 'claude "Replace all any types with specific type definitions, keeping behavior unchanged"'),
    ('### 场景 3：测试生成', '### Scenario 3: Test Generation'),
    ('claude "为 src/utils/ 下的工具函数生成 pytest 测试，覆盖边界情况"', 'claude "Generate pytest tests for utility functions under src/utils/ covering edge cases"'),
    ('- 每个对话聚焦一个任务', '- Focus each conversation on one task'),
    ('- 提供足够的上下文文件', '- Provide enough file context'),
    ('- 审查所有代码变更', '- Review all code changes before committing'),
]

count = 0
for cn, en in translations:
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        count += 1

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
print(f'{count} translations applied. {cn_left} CN lines remain.')
