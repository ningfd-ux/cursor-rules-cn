"""Final comprehensive translation of ALL remaining Chinese in rules.ts.
Reads all remaining CN lines from final_remaining.json, builds translation map, applies."""
import re, json

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

reps = {
    # Docker section
    "## Dockerfile 规范": "## Dockerfile Conventions",
    "- 使用多阶段构建减小镜像体积": "- Use multi-stage builds to minimize image size",
    "- 基础镜像指定精确版本标签": "- Pin base images with explicit versions",
    "- 合并 RUN 命令减少层数": "- Combine RUN commands to reduce layers",
    "- .dockerignore 排除不必要的文件": "- Use .dockerignore to exclude unnecessary files",
    "- 不以 root 用户运行容器": "- Never run containers as root",
    "- 最小化安装包": "- Minimize installed packages",
    "- 定期扫描镜像漏洞": "- Regularly scan images for vulnerabilities",
    "- 敏感信息通过环境变量注入": "- Inject sensitive config via environment variables",

    # Copilot migration
    'description: "从 GitHub Copilot 切换到 Cursor 的完整指南，包括规则迁移和习惯适配。",': 'description: "Complete guide to switching from GitHub Copilot to Cursor, including rules migration and workflow adaptation.",',
    'tags: ["cursor", "copilot", "迁移", "教程"],': 'tags: ["cursor", "copilot", "migration", "tutorial"],',
    'content: `# 从 Copilot 迁移到 Cursor 完整指南': 'content: `# Complete Guide to Migrating from Copilot to Cursor',
    "Cursor 相比 Copilot 的优势：": "Cursor advantages over Copilot:",
    "- 深度理解整个代码库，不仅是当前文件": "- Deep understanding of the entire codebase, not just the current file",
    "- 支持多文件编辑和重构": "- Multi-file editing and refactoring",
    "- 更智能的代码补全和上下文理解": "- Smarter code completion and context awareness",
    "### 1. 配置 Cursor Rules": "### 1. Configure Cursor Standards",
    "在项目根目录创建 .cursorrules：": "Create .cursor/rules/standards.mdc in your project root:",
    "# 项目概览": "# Project Overview",
    "- 这是一个 [项目类型] 项目": "- This is a [project type] project",
    "- 使用 [技术栈]": "- Uses [tech stack]",
    "- 数据库：[数据库类型]": "- Database: [database type]",
    "- 部署：[部署平台]": "- Deployed on: [deployment platform]",
    "- 代码风格：[风格偏好]": "- Code style: [style preference]",
    "- 测试框架：[测试工具]": "- Testing framework: [testing tool]",
    "- 命名约定：[命名规则]": "- Naming conventions: [naming rules]",
    "# 重要约定": "# Important Conventions",
    "- 不要修改 generated 目录下的文件": "- Never modify files in the generated/ directory",
    "- API 路由遵循 RESTful 规范": "- API routes follow RESTful conventions",
    "### 2. 适配工作流": "### 2. Adapt Your Workflow",
    "- Copilot 的 Tab 补全 → Cursor 的 Tab 补全类似": "- Copilot Tab completion → Cursor Tab (similar UX)",
    "- Copilot 内联建议 → Cursor 的 inline diff": "- Copilot inline suggestions → Cursor inline diff",
    "### 3. 团队协作": "### 3. Team Collaboration",
    "在项目仓库中维护 .cursorrules，团队共享配置，确保 AI 行为一致。": "Maintain the standards file in your repo. The whole team shares it for consistent AI behavior.",

    # Cursor Agent tutorial
    'title: "Cursor Agent 模式从入门到精通教程",': 'title: "Cursor Agent Mode — From Beginner to Expert",',
    'description: "Cursor Agent 模式实战教程，从基础到高级的完整工作流。": 'description: "Practical tutorial for Cursor Agent mode — complete workflow from basics to advanced techniques.",',
    'tags: ["cursor", "agent", "教程", "工作流"],': 'tags: ["cursor", "agent", "tutorial", "workflow"],',
    'content: `# Cursor Agent 模式深度使用教程': 'content: `# Cursor Agent Mode Deep Dive',
    "## 什么是 Agent 模式？": "## What Is Agent Mode?",
    "Agent 模式是 Cursor 的核心差异化功能，它能：": "Agent mode is Cursor's core differentiator. It can:",
    "- 自动读取相关文件": "- Auto-read relevant files",
    "- 执行终端命令": "- Execute terminal commands",
    "- 进行多步骤任务": "- Complete multi-step tasks",
    "- 自动修复错误": "- Auto-fix errors",
    "## 基础工作流": "## Basic Workflow",
    "### 场景：添加新 API 端点": "### Scenario: Adding a New API Endpoint",
    "1. Cmd+K 打开 Agent 模式": "1. Cmd+K to open Agent mode",
    '2. 输入："在 app/api/users 下创建用户列表 API，包含分页和搜索"': '2. Enter: "Create a user list API under app/api/users with pagination and search"',
    "3. Agent 会自动：": "3. The Agent will:",
    "- 读取现有路由文件": "- Read existing route files",
    "- 创建新的路由文件": "- Create new route files",
    "- 生成数据库查询": "- Generate database queries",
    "- 添加参数验证": "- Add parameter validation",
    "- 创建对应的类型定义": "- Create corresponding type definitions",
    "### 场景：修复 Bug": "### Scenario: Fixing a Bug",
    '1. 描述问题："用户登录后 session 有时会丢失"': '1. Describe: "User sessions sometimes get lost after login"',
    "2. Agent 会：": "2. The Agent will:",
    "- 搜索与 session 相关的代码": "- Search code related to sessions",
    "- 分析可能的原因": "- Analyze possible causes",
    "- 提出修复方案": "- Propose fixes",
    "- 修改代码并验证": "- Apply and verify the fix",
    "- 使用 @ 符号引用特定文件": "- Use @ to reference specific files",
    "- 分步指令替代大段描述": "- Give step-by-step instructions instead of long paragraphs",
    "- 每次 Agent 操作后 review diff": "- Review the diff after every Agent operation",

    # Claude Code CLI guide
    'title: "Claude Code CLI 命令行实战指南",': 'title: "Claude Code CLI — Practical Guide",',
    'description: "Claude Code 命令行工具的高效使用指南和实战场景。": 'description: "Efficient usage guide and real-world scenarios for the Claude Code CLI tool.",',
    'tags: ["claude-code", "cli", "教程", "工作流"],': 'tags: ["claude-code", "cli", "tutorial", "workflow"],',
    'content: `# Claude Code CLI 工作流实战指南': 'content: `# Claude Code CLI Workflow Guide',
    "## 快速开始": "## Quick Start",
    "Claude Code 是 Anthropic 推出的命令行 AI 编程助手。": "Claude Code is Anthropic's CLI-based AI coding assistant.",
    "### 安装": "### Installation",
    "### 基础用法": "### Basic Usage",
    "# 在当前目录启动": "# Start in current directory",
    "# 直接提问": "# Ask a direct question",
    'claude "分析这个项目的代码结构"': 'claude "Analyze the code structure of this project"',
    "# 代码审查": "# Code Review",
    'claude "审查 src/ 目录下的代码质量"': 'claude "Review code quality in the src/ directory"',
    "## 实战场景": "## Real-World Scenarios",
    "### 场景 1：代码审查": "### Scenario 1: Code Review",
    "在 CI 流程中集成 Claude Code：": "Integrate Claude Code in your CI pipeline:",
    'claude "审查以下文件的变更，关注：1. 逻辑错误 2. 性能问题 3. 安全漏洞"': 'claude "Review changes in the following files. Focus on: 1. Logic errors 2. Performance issues 3. Security vulnerabilities"',
    "### 场景 2：批量重构": "### Scenario 2: Batch Refactoring",
    'claude "将所有 any 类型替换为具体的类型定义，保持功能不变"': 'claude "Replace all any types with specific type definitions, keeping behavior unchanged"',
    "### 场景 3：测试生成": "### Scenario 3: Test Generation",
    'claude "为 src/utils/ 下的工具函数生成 pytest 测试，覆盖边界情况"': 'claude "Generate pytest tests for utility functions under src/utils/ covering edge cases"',
    "- 每个对话聚焦一个任务": "- Focus each conversation on one task",
    "- 提供足够的上下文文件": "- Provide enough file context",
    "- 审查所有代码变更": "- Review all code changes",
}

total = 0
for cn_text, en_text in reps.items():
    c = content.count(cn_text)
    if c > 0:
        content = content.replace(cn_text, en_text)
        total += c

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]+', l)])
print(f'{total} replacements. {cn_left} CN lines remain.')
