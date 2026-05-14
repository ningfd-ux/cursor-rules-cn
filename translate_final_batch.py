"""Final comprehensive translation pass for all remaining Chinese in rules.ts"""
import re, json

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

with open('remaining2.json', 'r', encoding='utf-8') as f:
    all_remaining = json.load(f)

# Build translation map for all remaining entries
reps = {}

# For each remaining CN line, produce an English translation
# Group by content type
remaining_map = {
    # Windsurf
    "- 每次 Cascade 修改后运行测试": "- Run tests after every Cascade modification",
    "- 批量修改前创建 git commit 检查点": "- Create a git commit checkpoint before batch changes",
    "- 复杂逻辑分步让 AI 完成": "- Break complex logic into steps for the AI",
    'title: "Windsurf 中 Python 开发的 AI 编程规则",': 'title: "AI Coding Rules for Python Development in Windsurf",',
    'description: "在 Windsurf 中进行 Python 开发的 AI 编程规则和最佳实践。"': 'description: "AI coding rules and best practices for Python development in Windsurf."',
    'tags: ["windsurf", "python", "后端"]': 'tags: ["windsurf", "python", "backend"]',
    "content: `    # Windsurf Python 开发规则": "content: `    # Windsurf Python Development Standards",
    "- 用自然语言描述功能需求": "- Describe requirements in natural language",
    "- Cascade 自动创建相关文件": "- Cascade auto-creates related files",
    "- AI 生成代码后运行 pytest": "- Run pytest after AI code generation",
    "## 数据科学": "## Data Science",
    "- Jupyter Notebook + Windsurf 联动": "- Jupyter Notebook + Windsurf integration",
    "- AI 辅助数据清洗和可视化": "- AI-assisted data cleaning and visualization",
    "- 模型训练代码自动生成": "- Auto-generated model training code",
    "## Web 开发": "## Web Development",
    "- FastAPI/Django 项目快速搭建": "- Rapid FastAPI/Django project scaffolding",
    "- 数据库模型自动迁移": "- Auto-generated database model migrations",
    "- AI 生成单元测试和集成测试": "- AI generates unit and integration tests",
    "- 覆盖率分析自动补充测试": "- Auto-supplement tests based on coverage gaps",
    "- Mock 数据自动生成": "- Auto-generated mock data",

    # Prompt Engineering
    'title: "AI 编程 Prompt 工程系统方法论",': 'title: "Prompt Engineering System Methodology for AI Coding",',
    'description: "面向 AI 编程工具的 Prompt Engineering 系统方法论和模板。"': 'description: "Systematic Prompt Engineering methodology and templates for AI coding tools."',
    'tags: ["prompt", "工程", "方法论"]': 'tags: ["prompt", "engineering", "methodology"]',
    "content: `    # AI 编程 Prompt 工程指南": "content: `    # AI Coding Prompt Engineering Guide",
    "## 结构化 Prompt 模板": "## Structured Prompt Template",
    "技术栈：[Next.js 14 + TypeScript + Tailwind]": "Tech Stack: [Next.js 14 + TypeScript + Tailwind]",
    "任务：[创建一个用户资料编辑表单]": "Task: [Create a user profile edit form]",
    "要求：": "Requirements:",
    "- 包含头像上传、昵称、简介字段": "- Include avatar upload, nickname, and bio fields",
    "- 表单验证使用 Zod": "- Form validation with Zod",
    "- 提交后显示 Toast 提示": "- Show Toast notification on submit",
    "- 移动端适配": "- Responsive for mobile",
    "## COAST 框架": "## COAST Framework",
    "- **C**ontext：提供项目背景": "- **C**ontext: Provide project background",
    "- **O**bjective：明确任务目标": "- **O**bjective: Define the task goal clearly",
    "- **A**ctions：列出具体步骤": "- **A**ctions: List specific steps",
    "- **S**pecifications：指定技术约束": "- **S**pecifications: Specify technical constraints",
    "- **T**one：指定输出风格": "- **T**one: Specify output style",
    "## 迭代优化": "## Iterative Refinement",
    "- 第一轮：生成基础代码": "- Round 1: Generate baseline code",
    "- 第二轮：Review 并指出问题": "- Round 2: Review and flag issues",
    "- 第三轮：要求 AI 优化具体部分": "- Round 3: Ask AI to refine specific areas",
    "- 第四轮：添加错误处理和边界情况": "- Round 4: Add error handling and edge cases",

    # Full-stack workflow
    'title: "用 AI 工具做全栈开发的完整工作流",': 'title: "Complete Full-Stack Development Workflow with AI Tools",',
    'description: "使用 AI 编程工具进行全栈开发的完整工作流和最佳实践。"': 'description: "Complete workflow and best practices for full-stack development with AI coding tools."',
    'tags: ["全栈", "工作流", "效率"]': 'tags: ["full-stack", "workflow", "productivity"]',
    "content: `    # AI 全栈开发工作流": "content: `    # AI Full-Stack Development Workflow",
    "## 项目启动": "## Project Kickoff",
    "- 用 AI 生成项目脚手架": "- Generate project scaffolding with AI",
    "- 初始化数据库 Schema": "- Initialize database schema",
    "- 配置 CI/CD 流水线": "- Configure CI/CD pipeline",
    "- 设置开发环境（Docker）": "- Set up development environment (Docker)",
    "## 前端开发": "## Frontend Development",
    "- AI 生成组件代码和样式": "- AI generates component code and styles",
    "- 自动生成 API 类型定义": "- Auto-generate API type definitions",
    "- 响应式布局 AI 辅助": "- AI-assisted responsive layouts",
    "- 状态管理自动生成": "- Auto-generated state management",
    "## 后端开发": "## Backend Development",
    "- 自动编写中间件": "- Auto-generate middleware",
    "- 数据库查询优化建议": "- Database query optimization suggestions",
    "- API 文档自动生成": "- Auto-generated API documentation",
    "## Deployment运维": "## Deployment & Operations",
    "- Dockerfile AI 生成": "- AI-generated Dockerfiles",
    "- CI 配置自动编写": "- Auto-generated CI config",
    "- 监控告警规则生成": "- Monitoring and alerting rule generation",
    "- 性能优化建议": "- Performance optimization recommendations",

    # Next.js + Cursor tutorial
    'title: "Next.js + Cursor 最佳实践配置教程",': 'title: "Next.js + Cursor Best Practices Configuration Guide",',
    'description: "手把手教你配置 Cursor 规则，让 AI 完美理解 Next.js App Router 项目。"': 'description: "Step-by-step guide to configuring Cursor rules so AI perfectly understands Next.js App Router projects."',
    'tags: ["nextjs", "cursor", "教程"]': 'tags: ["nextjs", "cursor", "tutorial"]',
    "content: `# Next.js + Cursor 最佳实践配置教程": "content: `# Next.js + Cursor Configuration Guide",
    "## 为什么要配置 Cursor Rules？": "## Why Configure AI Coding Standards?",
    "默认情况下，Cursor 对 Next.js 项目的理解不够精确。通过配置 .cursorrules，可以让 AI 了解你的技术栈选择、路由规范和数据获取模式。": "By default, AI coding tools lack precise understanding of Next.js projects. Standards files tell the AI about your tech stack, routing conventions, and data fetching patterns.",
    "## 完整配置": "## Complete Configuration",
    "### 步骤 1：创建 .cursorrules 文件": "### Step 1: Create a standards file",
    "在项目根目录创建 .cursorrules，粘贴以下内容：": "Create .cursor/rules/nextjs.mdc in your project root with the following content:",
    "# App Router 规范": "# App Router Conventions",
    "- 错误处理使用 error.tsx": "- Use error.tsx for error boundaries",
    "# 数据获取": "# Data Fetching",
    '- 客户端交互使用 "use client"': '- Use "use client" only for interactive components',
    "- 表单处理使用 Server Actions": "- Use Server Actions for form mutations",
    "# 图片优化": "# Image Optimization",
    "- 使用 next/image": "- Use next/image for all images",
    "- 必须包含 alt 属性": "- All images must include alt attributes",
    "- 外部图片配置 remotePatterns": "- External images require remotePatterns config",
    "### 步骤 2：验证效果": "### Step 2: Verify the result",
    "配置好后，尝试让 Cursor 生成一个新页面。你会发现：": "After setup, try generating a new page. You should see:",
    "- 组件结构自动遵循 App Router 规范": "- Component structure follows App Router conventions",
    "- 数据获取使用 Server Component": "- Data fetching uses Server Components by default",
    "- TypeScript 类型完整，无 any": "- Complete TypeScript types, no any usage",

    # Copilot migration
    'title: "从 Copilot 迁移到 Cursor 的完整指南",': 'title: "Complete Guide to Migrating from Copilot to Cursor",',
    'description: "从 GitHub Copilot 迁移到 Cursor 的完整步骤和对比。"': 'description: "Complete steps and comparison for migrating from GitHub Copilot to Cursor."',
    'tags: ["cursor", "copilot", "迁移"]': 'tags: ["cursor", "copilot", "migration"]',
    "content: `    # 从 Copilot 迁移到 Cursor": "content: `    # Migrating from Copilot to Cursor",
    "## 为什么迁移？": "## Why Migrate?",
    "Cursor 提供更完整的 Agent 模式，支持多文件编辑和终端集成。如果你需要更深入的 AI 编码体验，从 Copilot 迁移到 Cursor 是值得的。": "Cursor offers a more complete Agent mode with multi-file editing and terminal integration. If you want deeper AI-assisted coding, migrating from Copilot to Cursor is worthwhile.",
    "## 迁移步骤": "## Migration Steps",
    "### 1. 导出 Copilot 配置": "### 1. Export Copilot Configuration",
    "保存 copilot-instructions.md 内容，留下核心规则。": "Save copilot-instructions.md content and keep core rules.",
    "### 2. 转换格式": "### 2. Convert Format",
    "将 Copilot 指令转为 Cursor .cursorrules 格式。两种格式语法相似，主要是组织方式的差异。": "Convert Copilot instructions to Cursor .cursor/rules format. Syntax is similar; the main difference is organization.",
    "### 3. 配置 Cursor": "### 3. Configure Cursor",
    "在 Cursor 中创建规则文件，开启 Agent 模式。注意检查 Cursor 版本是否最新。": "Create rules files in Cursor and enable Agent mode. Ensure Cursor is updated to the latest version.",
    "### 4. 验证": "### 4. Verify",
    "用同一任务对比 Cursor 和 Copilot 的输出质量。关注代码结构、类型安全和项目惯例的符合程度。": "Compare Cursor and Copilot output on the same task. Focus on code structure, type safety, and alignment with project conventions.",
    "## 注意事项": "## Important Notes",
    "- Cursor Agent 会自动修改多文件，需要更仔细的 Code Review": "- Cursor Agent modifies multiple files automatically — code review carefully",
    "- 短期可能有学习曲线，但长期效率提升显著": "- Short-term learning curve, but significant long-term efficiency gains",
    "- 不需要完全放弃 Copilot，可以两者并存": "- No need to completely abandon Copilot — use both if preferred",
}

reps = remaining_map

total = 0
for cn, en in reps.items():
    count = content.count(cn)
    if count > 0:
        content = content.replace(cn, en)
        total += count

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]+', l)])
print(f'{total} replacements. {cn_left} CN lines remain.')
