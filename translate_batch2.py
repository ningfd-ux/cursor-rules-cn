import re

content = open('src/data/rules.ts', encoding='utf-8').read()

reps = {
    # --- Remaining rule title text ---
    '# Cursor Prisma ORM 数据层开发规则': '# Prisma ORM Data Layer Standards',
    '# Cursor Tailwind CSS 开发规则': '# Tailwind CSS Standards for AI-Assisted Development',
    '# Cursor Astro 静态站点开发规则': '# Astro Static Site Standards',
    '# Cursor Tauri 桌面应用开发规则': '# Tauri Desktop App Standards',
    '# Cursor Landing Page 开发规则': '# Landing Page Development Standards',
    '# Cursor Redis 缓存开发规则': '# Redis Caching Standards',
    '# Cursor MVP 快速开发规则': '# MVP Rapid Development Standards',
    '# Cursor Svelte 开发规则': '# Svelte Standards for AI-Assisted Development',
    '# Cursor NestJS 开发规则': '# NestJS Standards for AI-Assisted Development',

    # --- Cross-reference links in content ---
    '- [Cursor TypeScript 严格模式配置规则](/rules/cursor-typescript-rules)': '- [TypeScript Strict Mode Standards](/rules/cursor-typescript-rules)',
    '- [让 Cursor 更懂 Vue 3 的最佳开发规则](/rules/cursor-vue-rules)': '- [Vue 3 Development Standards](/rules/cursor-vue-rules)',
    '- [让 Cursor 更懂 React 的最佳开发规则](/rules/cursor-react-rules)': '- [React Development Standards](/rules/cursor-react-rules)',
    '- [Cursor 自动生成测试的完整规则](/rules/cursor-testing-rules)': '- [Testing Standards for AI-Generated Code](/rules/cursor-testing-rules)',
    '- [Cursor Tailwind CSS 开发规则](/rules/cursor-tailwind-rules)': '- [Tailwind CSS Standards](/rules/cursor-tailwind-rules)',
    '- [Cursor Prisma ORM 数据层开发规则](/rules/cursor-prisma-rules)': '- [Prisma ORM Data Layer Standards](/rules/cursor-prisma-rules)',
    '- [Cursor 数据库开发 Schema 设计规则](/rules/cursor-database-rules)': '- [Database Schema Design Standards](/rules/cursor-database-rules)',
    '- [用 Cursor 开发 RESTful API 的编码规范](/rules/cursor-api-rules)': '- [RESTful API Standards](/rules/cursor-api-rules)',
    '- [用 Cursor 开发 Next.js 项目的完整规则](/rules/cursor-nextjs-rules)': '- [Next.js Development Standards](/rules/cursor-nextjs-rules)',
    '- [Cursor GraphQL API 开发规则](/rules/cursor-graphql-rules)': '- [GraphQL API Standards](/rules/cursor-graphql-rules)',
    '- [Cursor Node.js Express 后端开发规则](/rules/cursor-nodejs-rules)': '- [Node.js Express Backend Standards](/rules/cursor-nodejs-rules)',
    '- [AI 自动化运维 CI/CD 指南](/rules/general-deployment-rules)': '- [CI/CD & Deployment Guide](/rules/general-deployment-rules)',
    '- [用 Claude Code 写 React 的高效 Prompt](/rules/claude-code-react)': '- [Claude Code React Prompts](/rules/claude-code-react)',
    '- [用 Claude Code 写 Python 的高效 Prompt](/rules/claude-code-python)': '- [Claude Code Python Prompts](/rules/claude-code-python)',
    '- [Cursor 样式开发规则](/rules/cursor-styling-rules)': '- [Styling Standards](/rules/cursor-styling-rules)',
    '- [Cursor 通用编码规则](/rules/cursor-general-rules)': '- [General Coding Standards](/rules/cursor-general-rules)',
    '- [Cursor 测试开发规则](/rules/cursor-testing-rules)': '- [Testing Standards](/rules/cursor-testing-rules)',
    '- [Cursor 安全开发规范](/rules/cursor-security-rules)': '- [Security Standards](/rules/cursor-security-rules)',
    '- [Cursor Docker 容器化规则](/rules/cursor-docker-rules)': '- [Docker Containerization Standards](/rules/cursor-docker-rules)',
    '- [Cursor Prisma 数据层开发规则](/rules/cursor-prisma-rules)': '- [Prisma Data Layer Standards](/rules/cursor-prisma-rules)',
    '- [Cursor TypeScript 开发规则](/rules/cursor-typescript-rules)': '- [TypeScript Standards](/rules/cursor-typescript-rules)',
    '- [Cursor Vue 3 开发规则](/rules/cursor-vue-rules)': '- [Vue 3 Standards](/rules/cursor-vue-rules)',
    '- [Cursor Next.js 项目规则](/rules/cursor-nextjs-rules)': '- [Next.js Standards](/rules/cursor-nextjs-rules)',
    '- [Cursor React 开发规则](/rules/cursor-react-rules)': '- [React Standards](/rules/cursor-react-rules)',
    '- [Cursor Python 开发规则](/rules/cursor-python-rules)': '- [Python Standards](/rules/cursor-python-rules)',
    '- [Cursor Go 开发规则](/rules/cursor-go-rules)': '- [Go Standards](/rules/cursor-go-rules)',
    '- [Cursor Ruby on Rails 开发规则](/rules/cursor-rails-rules)': '- [Ruby on Rails Standards](/rules/cursor-rails-rules)',
}

cnt = 0
for cn, en in reps.items():
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        cnt += c

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]+', l)])
print(f'{cnt} replaced. {cn_left} CN lines remain')
