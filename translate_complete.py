"""Final complete translation of all remaining Chinese in rules.ts"""
import re, json

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Read all unique CN lines from JSON
with open('all_cn_lines.json', 'r', encoding='utf-8') as f:
    all_cn = json.load(f)

# Create translation map
reps = {
    "- 耗时接口返回 202 Accepted": "- Long-running endpoints return 202 Accepted with a status URL",
    "- 敏感操作记录审计日志": "- Log all sensitive operations to an audit trail",
    "content: `    # Cursor Docker 容器化规则": "content: `    # Docker Containerization Standards for AI-Assisted Development",
    "## 编排": "## Orchestration",
    "- 开发环境使用 docker-compose": "- Use docker-compose for development environments",
    "- 生产环境使用 Kubernetes": "- Use Kubernetes for production",
    "- 每个服务独立容器": "- One container per service",
    "- 日志输出到 stdout/stderr": "- Output logs to stdout/stderr",
    "- [AI 部署运维 CI/CD 指南](/rules/general-deployment-rules)": "- [CI/CD & Deployment Guide](/rules/general-deployment-rules)",
    "content: `    # Cursor 数据库开发规则": "content: `    # Database Standards for AI-Assisted Development",
    "- 表名使用复数 snake_case": "- Use plural snake_case for table names",
    "- 主键使用 BIGINT 自增或 UUID": "- Primary keys: BIGINT auto-increment or UUID",
    "- 必须包含 created_at 和 updated_at": "- All tables must have created_at and updated_at timestamps",
    "- 外键建立索引": "- Create indexes on all foreign key columns",
    "- 避免 N+1 查询，使用 JOIN 或预加载": "- Avoid N+1 queries — use JOINs or eager loading",
    "- 复杂查询使用 EXPLAIN 分析": "- Analyze complex queries with EXPLAIN",
    "- 大批量操作使用批量处理": "- Use batch processing for large data operations",
    "- 分页使用游标分页（cursor-based）": "- Use cursor-based pagination for large datasets",
    "- 每次变更创建新的迁移文件": "- Create a new migration file for each schema change",
    "- 迁移可回滚（up/down）": "- Migrations must be reversible (up/down)",
    "- 生产环境迁移前 Review": "- Review all migrations before production deployment",
    "- 禁止直接修改已合并的迁移": "- Never modify already-merged migration files",
    "- 使用参数化查询防 SQL 注入": "- Use parameterized queries to prevent SQL injection",
    "- 敏感字段加密存储": "- Encrypt sensitive fields at rest",
    "- 连接字符串通过环境变量配置": "- Configure connection strings via environment variables",
    "- 生产数据库连接池限制": "- Limit connection pool size in production",
    "- [Cursor Supabase 后端开发规则](/rules/cursor-supabase-rules)": "- [Supabase Backend Standards](/rules/cursor-supabase-rules)",
    '## 创建 FastAPI 接口': '## Generate FastAPI Endpoints',
    '"在 app/routers/ 下创建一个用户 CRUD 路由，使用 FastAPI + SQLAlchemy async，包含分页查询、创建、更新、删除接口。"': '"Create a user CRUD router under app/routers/ using FastAPI + SQLAlchemy async. Support paginated listing, create, update, and delete."',
    '"写一个 pandas 数据处理函数，从 CSV 读取销售数据，按月份聚合统计，输出为 Excel 文件。"': '"Write a pandas data processing function: read sales CSV data, aggregate by month, output as Excel."',
    '"使用 Celery + Redis 实现后台任务队列，包含进度跟踪和结果回调。任务函数在 tasks/ 目录下。"': '"Implement a background task queue using Celery + Redis with progress tracking and result callbacks. Organize task functions under tasks/."',
    '## Testing生成': '## Generate Tests',
    '"为 services/user_service.py 写 pytest 单元测试，mock 外部 API 调用，覆盖正常和异常场景。"': '"Write pytest unit tests for services/user_service.py. Mock external API calls. Cover success and failure paths."',
    "content: `    # Claude Code 测试编写指南": "content: `    # Claude Code Testing Guide",
    '## 生成单元测试': '## Generate Unit Tests',
    '"为 src/utils/format.ts 生成 Jest 单元测试，覆盖边缘情况（空值、边界值、特殊字符）。"': '"Generate Jest unit tests for src/utils/format.ts covering edge cases (null, boundary values, special characters)."',
    '## 生成集成测试': '## Generate Integration Tests',
    '"为 API 端点 /api/users 生成集成测试，包含创建、查询、更新、删除用户的完整流程。"': '"Generate integration tests for the /api/users endpoint covering the full user CRUD lifecycle."',
    '## Mock 外部依赖': '## Mock External Dependencies',
    '"使用 jest.mock 模拟 Stripe API 调用，模拟成功支付和支付失败的响应。"': '"Use jest.mock to mock Stripe API calls. Simulate successful and failed payment responses."',
    '## Testing覆盖率': '## Test Coverage',
    '"分析当前项目的测试覆盖率，找出未覆盖的代码路径，生成补充测试。"': '"Analyze current project test coverage. Identify uncovered code paths. Generate supplementary tests."',
    'description: "使用 Claude Code 安全重构代码的 Prompt 模板和流程。"': 'description: "Prompt templates and workflow for safe code refactoring with Claude Code."',
    'tags: ["claude-code", "重构", "最佳实践"]': 'tags: ["claude-code", "refactoring", "best-practices"]',
    "content: `    # Claude Code 代码重构 Prompt": "content: `    # Claude Code Code Refactoring Prompts",
    '## 提取组件': '## Extract Component',
    "\"将 Dashboard 页面中 300 行的图表逻辑提取为独立组件，包含 loading、empty、error 三种状态。\"": '"Extract the 300-line chart logic from the Dashboard page into a standalone component. Include loading, empty, and error states."',
    '## 拆分大函数': '## Split Large Functions',
    '"将 utils/helpers.ts 中的 processOrder 函数（200 行）拆分为多个小函数，每个函数只负责一个职责。"': '"Split the 200-line processOrder function in utils/helpers.ts into smaller functions, each with a single responsibility."',
    '## 迁移模式': '## Migration Pattern',
    '"将项目中所有 class 组件迁移为函数组件 + Hooks，保持功能完全一致。"': '"Migrate all class components to functional components + hooks. Preserve all functionality."',
    '## 优化性能': '## Optimize Performance',
    '"分析列表页面的重渲染问题，添加 React.memo、useMemo、useCallback 优化。提供重构前后的性能对比。"': '"Analyze re-rendering issues on the list page. Apply React.memo, useMemo, useCallback. Provide before/after performance comparison."',
    'title: "Copilot 在 Vue 3 项目的最佳配置"': 'title: "Copilot Best Configuration for Vue 3 Projects"',
    'description: "GitHub Copilot 在 Vue 3 项目中的最佳配置和使用规则。"': 'description: "Best configuration and usage rules for GitHub Copilot in Vue 3 projects."',
    'tags: ["copilot", "vue", "前端"]': 'tags: ["copilot", "vue", "frontend"]',
    "content: `    # Copilot Vue 3 开发指令": "content: `    # Copilot Vue 3 Development Instructions",
    "- Vite 构建工具": "- Use Vite as the build tool",
    '- 组件名多单词（MyComponent.vue）': '- Multi-word component names (MyComponent.vue)',
    '- composables 放在 composables/ 目录': '- Place composables in composables/ directory',
    '- API 请求封装到 api/ 模块': '- Encapsulate API requests in api/ module',
    '- "生成一个带搜索和分页的用户列表组件"': '- "Generate a user list component with search and pagination"',
    '- "写一个 Pinia store 管理购物车状态"': '- "Write a Pinia store to manage shopping cart state"',
    '- "实现路由懒加载和导航守卫"': '- "Implement route lazy loading and navigation guards"',
    'title: "Copilot Python 开发的最佳配置指令"': 'title: "Copilot Best Configuration for Python Development"',
    'description: "GitHub Copilot 在 Python 项目中的最佳配置和使用技巧。"': 'description: "Best configuration and usage tips for GitHub Copilot in Python projects."',
    'tags: ["copilot", "python", "后端"]': 'tags: ["copilot", "python", "backend"]',
    "content: `    # Copilot Python 开发指令": "content: `    # Copilot Python Development Instructions",
    "- 使用类型注解": "- Use type annotations throughout",
    "- 异步优先（async/await）": "- Prefer async/await patterns",
    "- Google 风格 docstring": "- Use Google-style docstrings",
    '- "实现 FastAPI 用户注册接口，包含密码加密和邮箱验证"': '- "Implement a FastAPI user registration endpoint with password hashing and email verification"',
    '- "写一个 SQLAlchemy 模型，包含软删除和时间戳"': '- "Write a SQLAlchemy model with soft delete and timestamps"',
    '- "生成 pytest fixture 和测试数据工厂"': '- "Generate pytest fixtures and test data factories"',
    'title: "Windsurf 中用 Cascade 开发 React 的规则"': 'title: "Windsurf Cascade Rules for React Development"',
    'description: "在 Windsurf 中使用 Cascade 进行 React 开发的规则和技巧。"': 'description: "Rules and tips for React development with Cascade in Windsurf."',
    'tags: ["windsurf", "react", "前端"]': 'tags: ["windsurf", "react", "frontend"]',
    "content: `    # Windsurf React 开发规则": "content: `    # Windsurf React Development Standards",
    "## 项目配置": "## Project Configuration",
    "- 启用 AI 代码建议": "- Enable AI code suggestions",
    "- 配置 React 项目上下文": "- Configure React project context",
    "- 使用 Cascade 进行跨文件编辑": "- Use Cascade for cross-file editing",
    "## Components开发": "## Component Development",
    "- 使用 Cascade 创建组件模板": "- Use Cascade to create component templates",
    "- 利用多文件编辑同步修改组件和样式": "- Leverage multi-file editing to sync component and style changes",
    "- AI 生成代码后立即审查 diff": "- Review diffs immediately after AI code generation",
    "## 调试优化": "## Debugging & Optimization",
    "- 使用 Cascade 分析组件依赖": "- Use Cascade to analyze component dependencies",
    "- 重构时 Cascade 自动更新引用": "- Cascade auto-updates references during refactoring",
    "- 性能问题让 AI 分析 profiler 数据": "- Let AI analyze profiler data for performance issues",
}

total = 0
for cn, en in reps.items():
    count = content.count(cn)
    if count > 0:
        content = content.replace(cn, en)
        total += count

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]+', l)])
print(f'{total} replacements made. {cn_left} CN lines remain.')
