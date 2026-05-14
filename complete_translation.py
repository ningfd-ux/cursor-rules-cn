"""Complete ALL remaining Chinese translation in rules.ts.
Reads the file, finds every Chinese line, translates it, and writes back."""
import re

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# All remaining translations extracted from final_remaining.json
translations = {
    # Flutter routing / state management
    '- 使用 GoRouter 声明式路由': '- Use GoRouter for declarative routing',
    '- 路由模块按功能拆分': '- Split route modules by feature',
    '- 深层嵌套支持': '- Support deep nesting',
    '- 异步操作使用 FutureBuilder': '- Use FutureBuilder for async operations',
    '- StreamBuilder 处理实时数据': '- StreamBuilder for real-time data streams',
    '- 网络层使用 dio 封装': '- Encapsulate network layer with dio',
    '- 统一错误处理': '- Unified error handling',

    # Tailwind CSS
    'title: "Cursor Tailwind CSS 开发规则",': 'title: "Tailwind CSS Standards for Cursor",',
    'description: "使用 Cursor 进行 Tailwind CSS 开发的编码规范和最佳实践。': 'description: "Coding standards and best practices for Tailwind CSS development with Cursor.',
    'content: `    # Cursor Tailwind CSS 开发规则': 'content: `    # Tailwind CSS Standards for AI-Assisted Development',
    '## 使用原则': '## Usage Principles',
    '- 优先使用 Tailwind 原子类': '- Prefer Tailwind utility classes',
    '- 自定义样式使用 @apply 指令': '- Use @apply for custom style compositions',
    '- 颜色使用设计系统 token': '- Use design system tokens for colors',
    '- 响应式使用断点前缀': '- Use breakpoint prefixes for responsive design',
    '## Components样式': '## Component Styling',
    '- 复杂样式提取为可复用组件': '- Extract complex styles into reusable components',
    '- 使用 cn() 合并 class 名': '- Use cn() utility to merge class names',
    '- 暗色模式使用 dark: 前缀': '- Use dark: prefix for dark mode',
    '- 组件封装使用 Tailwind 装饰器': '- Encapsulate components with Tailwind patterns',
    '- 避免动态拼接 class': '- Avoid dynamic class name construction',
    '- 使用 PurgeCSS 删除未使用的样式': '- Use PurgeCSS to remove unused styles',
    '- 提取公共样式避免重复': '- Extract common styles to avoid duplication',
    '- [让 Cursor 更懂 React 的最佳开发规则,](/rules/cursor-react-rules)': '- [React Development Standards](/rules/cursor-react-rules),',
    '- [用 Cursor 开发 Next.js 项目的完整规则,](/rules/cursor-nextjs-rules)': '- [Next.js Development Standards](/rules/cursor-nextjs-rules),',

    # NestJS (continued)
    '- 使用 @Controller() 定义路由': '- Define routes with @Controller()',
    '- 使用 @Get/@Post/@Put/@Delete 装饰器': '- Use @Get/@Post/@Put/@Delete decorators',
    '- Swagger 文档自动生成': '- Auto-generate Swagger documentation',

    # AI workflow page
    'title: "AI 编程全栈开发工作流",': 'title: "AI Coding Full-Stack Development Workflow",',
    'description: "使用 AI 编程工具进行全栈开发的完整工作流指南。': 'description: "Complete workflow guide for full-stack development with AI coding tools.',
    'tags: ["全栈", "工作流", "效率"],': 'tags: ["full-stack", "workflow", "productivity"],',

    # Testing rules
    'title: "Cursor 测试开发完整规则",': 'title: "Complete Testing Standards for AI-Assisted Development",',
    'description: "Cursor 项目中进行测试开发的完整规则和方法论。': 'description: "Complete standards and methodology for test development in AI-assisted projects.',
    'tags: ["cursor", "testing", "质量"],': 'tags: ["cursor", "testing", "quality"],',
    '- 每个测试验证一个行为': '- Each test verifies one behavior',
    '- 使用 describe/it 结构组织测试': '- Organize tests with describe/it structure',
    '- Mock 外部依赖': '- Mock external dependencies',
    '- 优先使用集成测试验证业务流程': '- Prefer integration tests for business workflows',
    '- 组件测试关注用户交互': '- Component tests focus on user interactions',
    '- 快照测试谨慎使用': '- Use snapshot testing sparingly',
    '- Mock 只在测试边界使用': '- Mock only at test boundaries',
    '- 使用真实数据库测试（测试容器）': '- Test with real databases (test containers)',
    '- 清理测试数据，保持隔离': '- Clean up test data, maintain isolation',
    '- 每次提交前运行测试': '- Run tests before every commit',
    '- CI 中必须通过测试': '- Tests must pass in CI',
    '- 覆盖率上报 Codecov': '- Report coverage to Codecov',

    # More testing
    '- Jest + React Testing Library': '- Jest + React Testing Library',
    '- 测试文件与源文件同目录': '- Test files co-located with source files',
    '- __tests__ 目录或 .test.ts 后缀': '- __tests__ directory or .test.ts suffix',
    '- 每个描述块一个 setup': '- One setup per describe block',
    '- describe 对应组件/模块名': '- describe matches component/module name',
    '- it 描述期望行为': '- it describes expected behavior',
    '- 使用 beforeEach/afterEach 管理状态': '- Use beforeEach/afterEach for state management',
    '- 使用 data-testid 选择元素': '- Use data-testid for element selection',
    '- 模拟用户行为': '- Simulate user behavior with fireEvent/userEvent',
    '- 异步操作使用 waitFor': '- Use waitFor for async operations',
    '- 测试覆盖率 > 80%': '- Test coverage above 80%',
    '- 关键路径必须 100% 覆盖': '- Critical paths must achieve 100% coverage',
    '- 测试失败时截图': '- Capture screenshots on test failure',
    '- 截图用于失败分析': '- Use screenshots for failure analysis',

    # Dev workflow
    '## 项目配置': '## Project Configuration',
    '## 开发流程': '## Development Workflow',
    '- AI 生成 CRUD 接口': '- AI generates CRUD endpoints',
    '- 一键生成前后端代码': '- Generate frontend and backend code in one step',

    # Auth / Security fragments
    '## 认证授权': '## Authentication & Authorization',
    '- 使用 JWT Token 认证': '- Use JWT token authentication',
    '- 刷新 Token 机制': '- Refresh token mechanism',
    '- 角色权限控制（RBAC）': '- Role-based access control (RBAC)',
    '- API 接口权限校验': '- API endpoint permission checks',

    # Deployment
    '- 部署到 Vercel / Cloudflare Pages': '- Deploy to Vercel / Cloudflare Pages',
    '- 环境变量管理': '- Environment variable management',
    '- CDN 加速静态资源': '- CDN for static assets',
    '- 监控和日志': '- Monitoring and logging',

    # Performance
    '- 图片使用 WebP 格式': '- Use WebP format for images',
    '- 代码分割和懒加载': '- Code splitting and lazy loading',
    '- 预加载关键资源': '- Preload critical resources',
    '- 使用 CDN 加速': '- Use CDN for acceleration',

    # Leftover tags
    'tags: ["prompt", "工程", "方法论"],': 'tags: ["prompt", "engineering", "methodology"],',

    # General coding fragments
    '- 使用严格模式': '- Use strict mode',
    '- 启用 ESLint 和 Prettier': '- Enable ESLint and Prettier',
    '- 使用 TypeScript 严格模式': '- Use TypeScript strict mode',
    '- 遵循 SOLID 原则': '- Follow SOLID principles',
    '- 函数保持纯函数': '- Keep functions pure where possible',
    '- 避免过早优化': '- Avoid premature optimization',
    '- 代码评审是必须的': '- Code review is mandatory',
    '- 提交信息使用英文': '- Write commit messages in English',
    '- 分支命名规范': '- Follow branch naming conventions',

    # Related links cleanup
    '- [让 Cursor 更懂 React 的最佳开发规则](/rules/cursor-react-rules),': '- [React Development Standards](/rules/cursor-react-rules),',
    '- [Cursor TypeScript 严格模式配置规则](/rules/cursor-typescript-rules),': '- [TypeScript Strict Mode Standards](/rules/cursor-typescript-rules),',
}

count = 0
for cn, en in translations.items():
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        count += 1

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)

# Final count
total = len(content.split('\n'))
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
pct = 100 - (cn_left / total * 100)
print(f'{count} translations applied. {cn_left} CN lines remain out of {total} total ({pct:.1f}% English)')
