import re

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

translations = [
    # ------ Vue/Composables/Refactoring fragments ------
    ('## Vue 3 + Cursor 高效开发实战', '## Vue 3 + Cursor Practical Development Guide'),
    ('# Vue 3 最佳实践规则', '# Vue 3 Best Practice Standards'),

    # ------ AI全栈工作流 ------
    ('title: "用 AI 工具做全栈开发的完整工作流",', 'title: "Full-Stack Development Workflow with AI Tools",'),
    ('description: "使用 AI 编程工具进行全栈开发的完整工作流和最佳实践。', 'description: "Complete workflow and best practices for full-stack development with AI tools.'),
    ('tags: ["全栈", "工作流", "效率"],', 'tags: ["full-stack", "workflow", "productivity"],'),
    ('content: `    # AI 全栈开发工作流', 'content: `    # AI Full-Stack Development Workflow'),
    ('## 项目启动', '## Project Kickoff'),
    ('- 用 AI 生成项目脚手架', '- Generate project scaffolding with AI'),
    ('- 初始化数据库 Schema', '- Initialize database schema'),
    ('- 配置 CI/CD 流水线', '- Configure CI/CD pipeline'),
    ('- 设置开发环境（Docker）', '- Set up dev environment with Docker'),
    ('## 前端开发', '## Frontend Development'),
    ('- AI 生成组件代码和样式', '- AI generates component code and styles'),
    ('- 自动生成 API 类型定义', '- Auto-generate API type definitions'),
    ('- 响应式布局 AI 辅助', '- AI-assisted responsive layouts'),
    ('- 状态管理自动生成', '- Auto-generated state management'),
    ('## 后端开发', '## Backend Development'),
    ('- 自动编写中间件', '- Auto-generate middleware'),
    ('- 数据库查询优化建议', '- Database query optimization suggestions'),
    ('- API 文档自动生成', '- Auto-generated API documentation'),
    ('## Deployment运维', '## Deployment & Operations'),
    ('- Dockerfile AI 生成', '- AI-generated Dockerfiles'),
    ('- CI 配置自动编写', '- Auto-generated CI config'),
    ('- 监控告警规则生成', '- Generate monitoring and alerting rules'),
    ('- 性能优化建议', '- Performance optimization recommendations'),

    # ------ Prompt Engineering ------
    ('title: "AI 编程 Prompt 工程系统方法论",', 'title: "Prompt Engineering Methodology for AI Coding",'),
    ('description: "面向 AI 编程工具的 Prompt Engineering 系统方法论和模板。', 'description: "Systematic Prompt Engineering methodology and templates for AI coding tools.'),
    ('tags: ["prompt", "工程", "方法论"],', 'tags: ["prompt", "engineering", "methodology"],'),
    ('content: `    # AI 编程 Prompt 工程指南', 'content: `    # AI Coding Prompt Engineering Guide'),
    ('## 结构化 Prompt 模板', '## Structured Prompt Template'),
    ('技术栈：[Next.js 14 + TypeScript + Tailwind]', 'Tech Stack: [Next.js 14 + TypeScript + Tailwind]'),
    ('任务：[创建一个用户资料编辑表单]', 'Task: [Create a user profile edit form]'),
    ('要求：', 'Requirements:'),
    ('- 包含头像上传、昵称、简介字段', '- Include avatar upload, nickname, and bio fields'),
    ('- 表单验证使用 Zod', '- Form validation with Zod'),
    ('- 提交后显示 Toast 提示', '- Show Toast notification on submit'),
    ('- 移动端适配', '- Responsive for mobile'),
    ('## COAST 框架', '## COAST Framework'),
    ('- **C**ontext：提供项目背景', '- Context: Provide project background'),
    ('- **O**bjective：明确任务目标', '- Objective: Define the task goal clearly'),
    ('- **A**ctions：列出具体步骤', '- Actions: List specific steps'),
    ('- **S**pecifications：指定技术约束', '- Specifications: Specify technical constraints'),
    ('- **T**one：指定输出风格', '- Tone: Specify output style'),
    ('## 迭代优化', '## Iterative Refinement'),
    ('- 第一轮：生成基础代码', '- Round 1: Generate baseline code'),
    ('- 第二轮：Review 并指出问题', '- Round 2: Review and flag issues'),
    ('- 第三轮：要求 AI 优化具体部分', '- Round 3: Ask AI to refine specific areas'),
    ('- 第四轮：添加错误处理和边界情况', '- Round 4: Add error handling and edge cases'),
]

count = 0
for cn, en in translations:
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        count += 1

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
print(f'{count}/46 translations applied. {cn_left} CN lines remain.')
