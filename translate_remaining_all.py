"""Translate ALL remaining Chinese content in rules.ts in one comprehensive pass."""
import re

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Comprehensive translation map for ALL remaining Chinese
t = {
    # Flutter
    'title: "Cursor Flutter 移动端开发规则",': 'title: "Flutter & Dart Mobile Development Standards for Cursor",',
    'description: "Flutter/Dart 项目中使用 Cursor 的编码规则和最佳实践。': 'description: "Coding standards and best practices for Flutter/Dart projects with Cursor.',
    'content: `# Cursor Flutter 移动端开发规则': 'content: `# Flutter & Dart Standards for AI-Assisted Development',
    '## Dart 规范': '## Dart Conventions',
    '- 遵循 effective-dart 指南': '- Follow Effective Dart guidelines',
    '- 使用 dart format 格式化': '- Format with dart format',
    '- 类型标注优先于 var': '- Prefer explicit types over var',
    '- 避免动态类型': '- Avoid dynamic types',
    '## Flutter 组件': '## Flutter Components',
    '- 使用 StatelessWidget 优先': '- Prefer StatelessWidget by default',
    '- StatefulWidget 只在必要时使用': '- Use StatefulWidget only when necessary',
    '- 组件拆分保持单一职责': '- Split components with single responsibility',
    '- 使用 const 构造函数优化性能': '- Use const constructors for performance',
    '## State Management': '## State Management',
    '- 小项目使用 setState': '- setState for small projects',
    '- 中大型项目使用 Riverpod 或 Bloc': '- Riverpod or Bloc for medium/large projects',
    '- 避免全局状态滥用': '- Avoid excessive global state',
    '- Provider 按模块分层': '- Layer providers by module',

    # Flutter/Dart continued
    '- 所有异步逻辑返回 Future<T>': '- All async logic returns Future<T>',
    '- 使用 async/await 处理异步': '- Use async/await for async operations',
    '- 网络请求统一封装': '- Encapsulate network requests centrally',
    '- 错误边界使用 ErrorWidget': '- Use ErrorWidget for error boundaries',

    # Svelte
    'title: "Cursor Svelte 前端开发规则",': 'title: "Svelte Frontend Standards for Cursor",',
    'description: "Svelte/SvelteKit 项目中使用 Cursor 的编码规范。': 'description: "Coding standards for Svelte/SvelteKit projects with Cursor.',
    'tags: ["cursor", "svelte", "前端"],': 'tags: ["cursor", "svelte", "frontend"],',
    'content: `# Cursor Svelte 前端开发规则': 'content: `# Svelte Standards for AI-Assisted Development',
    '## Svelte 组件': '## Svelte Components',
    '- 使用 SvelteKit 文件路由': '- Use SvelteKit file-based routing',
    '- +page.svelte 页面组件': '- +page.svelte for page components',
    '- +layout.svelte 布局组件': '- +layout.svelte for layout components',
    '- +server.ts 服务端 API': '- +server.ts for server-side API routes',
    '- 使用 $lib 路径别名': '- Use $lib path alias',
    '- 响应式声明使用 $:': '- Reactive declarations with $:',
    '- Store 使用 writable/derived': '- Use writable/derived for stores',

    # NestJS
    'title: "Cursor NestJS 后端开发规则",': 'title: "NestJS Backend Standards for Cursor",',
    'description: "NestJS 项目中使用 Cursor 的模块化架构和依赖注入规范。': 'description: "Modular architecture and dependency injection standards for NestJS projects with Cursor.',
    'tags: ["cursor", "nestjs", "typescript"],': 'tags: ["cursor", "nestjs", "typescript"],',
    'content: `# Cursor NestJS 后端开发规则': 'content: `# NestJS Backend Standards for AI-Assisted Development',
    '## 模块化': '## Modularity',
    '- 每个功能模块独立文件夹': '- One folder per feature module',
    '- 使用 CLI 生成模块': '- Use CLI to generate modules (nest g module)',
    '- 模块间通过导入建立依赖': '- Dependencies established through module imports',
    '- 使用 @Injectable() 声明服务': '- Use @Injectable() decorator for services',
    '- 全局模块谨慎使用': '- Use global modules sparingly',
    '- DTO 使用 class-validator 验证': '- Validate DTOs with class-validator',
    '- 使用 @UsePipes 启用 ValidationPipe': '- Enable ValidationPipe with @UsePipes',
    '- 统一异常过滤器': '- Unified exception filters',

    # Next.js Config Guide
    'title: "Next.js + Cursor 最佳实践配置教程",': 'title: "Next.js + Cursor Best Practices Configuration Guide",',
    'description: "手把手教你配置 Cursor 规则，让 AI 完美理解 Next.js App Router 项目。': 'description: "Step-by-step guide to configuring Cursor standards so AI perfectly understands Next.js App Router projects.',
    'tags: ["nextjs", "cursor", "教程"],': 'tags: ["nextjs", "cursor", "tutorial"],',
    'content: `# Next.js + Cursor 最佳实践配置教程': 'content: `# Next.js + Cursor Configuration Guide',
    '## 为什么要配置 Cursor Rules？': '## Why Configure AI Coding Standards?',
    '默认情况下，Cursor 对 Next.js 项目的理解不够精确。通过配置 .cursorrules，可以让 AI 了解你的技术栈选择、路由规范和数据获取模式。': 'By default, AI coding tools lack precise understanding of Next.js projects. Standards files tell the AI about your tech stack, routing conventions, and data fetching patterns.',
    '## 完整配置': '## Complete Configuration',
    '### 步骤 1：创建 .cursorrules 文件': '### Step 1: Create a standards file',
    '在项目根目录创建 .cursorrules，粘贴以下内容：': 'Create .cursor/rules/nextjs.mdc in your project root with the following content:',
    '# App Router 规范': '# App Router Conventions',
    '- 错误处理使用 error.tsx': '- Use error.tsx for error boundaries',
    '# 数据获取': '# Data Fetching',
    '- 客户端交互使用 "use client"': '- Use "use client" only for interactive components',
    '- 表单处理使用 Server Actions': '- Use Server Actions for form mutations',
    '# 图片优化': '# Image Optimization',
    '- 使用 next/image': '- Use next/image for images',
    '- 必须包含 alt 属性': '- All images must include alt attributes',
    '- 外部图片配置 remotePatterns': '- External images require remotePatterns config',
    '### 步骤 2：验证效果': '### Step 2: Verify the result',
    '配置好后，尝试让 Cursor 生成一个新页面。你会发现：': 'After setup, try generating a new page. You should see:',
    '- 组件结构自动遵循 App Router 规范': '- Component structure follows App Router conventions',
    '- 数据获取使用 Server Component': '- Data fetching uses Server Components by default',
    '- TypeScript 类型完整，无 any': '- Complete TypeScript types, no any usage',

    # AI coding patterns/recommendations
    '- 日常用 Cursor,CI 用 Claude Code': '- Use Cursor for daily dev, Claude Code for CI',
    '- 批量操作用 Claude Code,调试用 Cursor': '- Batch operations with Claude Code, debugging with Cursor',
    '- 规则文件按版本控制': '- Version-control standards files',
    '- 每条规则包含使用场景': '- Each standard includes usage scenarios',

    # Testing section
    '- 单元测试占 70%（模型、工具函数）': '- Unit tests 70% (models, utility functions)',
    '- 集成测试占 20%（API、数据库）': '- Integration tests 20% (API, database)',
    '- E2E 测试占 10%（关键路径）': '- E2E tests 10% (critical paths)',
    '## AI 在测试中的应用': '## AI in Testing',
    '- 根据函数自动生成单元测试': '- Auto-generate unit tests from function signatures',
    '- 自动生成 mock 数据和 fixture': '- Auto-generate mock data and fixtures',
    '- 自动生成回归测试套件': '- Auto-generate regression test suites',
    '- 自动修复失败的测试': '- Auto-fix failing tests',
    '## Testing规范': '## Testing Conventions',
    '- 一个测试一个行为': '- One behavior per test case',
    '- 边界值测试覆盖率 > 90%': '- Boundary value coverage above 90%',
    '- 命名清晰反映测试内容': '- Test names clearly describe the scenario',
    '- 独立可重复运行': '- Tests run independently and are repeatable',
    '- 优先写可读性高的测试': '- Prioritize readable tests',
    '- 环境无关，不依赖外部服务': '- Environment-agnostic, no external service dependencies',
}

count = 0
for cn, en in t.items():
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        count += 1

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
print(f'{count} translations applied. {cn_left} CN lines remain.')
