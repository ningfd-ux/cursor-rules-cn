import re

content = open('src/data/rules.ts', encoding='utf-8').read()

reps = {
    '## 响应格式': '## Response Format',
    '- 统一返回 { code, data, message } 结构': '- Return consistent { code, data, message } envelope',
    '- 列表接口支持分页（page, pageSize, total）': '- List endpoints must support pagination (page, pageSize, total)',
    '- 错误使用 HTTP 状态码 + 业务码': '- Use HTTP status codes with business error codes',
    '- 异步接口返回 202 Accepted': '- Async operations return 202 Accepted',
    '- API Key 通过 Header 传递': '- API keys via Authorization header',
    '- 限制请求频率（Rate Limit）': '- Enforce rate limiting on all endpoints',
    '- CORS 配置白名单': '- Restrict CORS to known origins only',
    '- 所有操作记录审计日志': '- Log all operations for audit trail',
}

# Docker block
reps.update({
    'content: `    # Cursor Docker 容器化规则\n\n## Dockerfile 规范\n- 使用多阶段构建减小镜像体积\n- 基础镜像指定明确版本标签\n- 合并 RUN 命令减少层数\n- .dockerignore 排除不需要的文件\n\n## 安全\n- 不要以 root 用户运行容器\n- 最小化镜像安装包\n- 定期扫描镜像漏洞\n- 敏感信息通过环境变量注入\n\n## 部署\n- 开发环境使用 docker-compose\n- 生产环境使用 Kubernetes\n- 每个容器单一职责\n- 日志输出到 stdout/stderr\n':
        '## Dockerfile Conventions\n- Use multi-stage builds to minimize image size\n- Pin base images with explicit version tags\n- Combine RUN commands to reduce layer count\n- Use .dockerignore to exclude unnecessary files\n\n## Security\n- Never run containers as root user\n- Minimize installed packages\n- Scan images regularly for vulnerabilities\n- Inject sensitive config via environment variables\n\n## Deployment\n- Use docker-compose for development\n- Use Kubernetes for production\n- One process per container\n- Log to stdout/stderr\n',
})

# Database block
reps.update({
    'content: `    # Cursor 数据库开发规则\n\n## Schema 设计\n- 表名使用复数 snake_case\n- 主键使用 BIGINT 或 UUID\n- 记录表包含 created_at 和 updated_at\n- 适当添加数据库索引\n\n## 查询优化\n- 避免 N+1 查询，使用 JOIN 或预加载\n- 复杂查询使用 EXPLAIN 分析\n- 大数据量使用批量处理\n- 分页使用游标分页（cursor-based）\n\n## 迁移管理\n- 每次变更创建新的迁移文件\n- 迁移可回滚（up/down）\n- 生产环境迁移前 Review\n- 禁止直接修改已合并的迁移\n\n## 安全\n- 使用参数化查询防 SQL 注入\n- 敏感字段加密存储\n- 连接字符串通过环境变量注入\n- 限制数据库连接池大小\n':
        '## Schema Design\n- Use plural snake_case for table names\n- Prefer BIGINT or UUID for primary keys\n- All record tables must include created_at and updated_at\n- Add indexes on frequently queried columns\n\n## Query Optimization\n- Avoid N+1 queries — use JOIN or eager loading\n- Run EXPLAIN on complex queries\n- Batch process large data volumes\n- Use cursor-based pagination for data sets\n\n## Migration Management\n- Create a new migration file for every schema change\n- Migrations must be reversible (up/down)\n- Review migrations before production deployment\n- Never modify already merged migrations\n\n## Security\n- Use parameterized queries to prevent SQL injection\n- Encrypt sensitive fields at rest\n- Inject connection strings via environment\n- Limit connection pool size\n',
})

# Prompts - Chinese example prompts
reps.update({
    '"在 app/routers/ 下创建一个用户 CRUD 路由，使用 FastAPI + SQLAlchemy async，包含分页查询和创建、更新、删除接口。"':
        '"Create a user CRUD router under app/routers/ using FastAPI + SQLAlchemy async. Include paginated listing with create, update, and delete endpoints."',
    '"写一个 pandas 数据处理脚本，读取 CSV 文件清洗数据，按月聚合统计，输出为 Excel 文件。"':
        '"Write a pandas data processing script: read a CSV file, clean the data, aggregate by month, and output an Excel file."',
    '"使用 Celery + Redis 实现后台任务队列，包含任务状态追踪和结果回调，组织在 tasks/ 目录下。"':
        '"Implement a background task queue using Celery + Redis with task status tracking and result callbacks, organized under tasks/."',
    '"使用 Jest + React Testing Library 为 Button 组件编写单元测试，覆盖所有 variant 和交互事件，mock onClick。"':
        '"Write unit tests for the Button component using Jest + React Testing Library. Cover all variants and interaction events. Mock onClick."',
    '## Testing策略': '## Testing Strategy',
    '## 生成 FastAPI 接口': '## Generate FastAPI Endpoints',
    '## 数据处理': '## Data Processing',
    '## 异步任务': '## Async Tasks',
    '## Testing配置': '## Testing Configuration',
})

cnt = 0
for cn, en in reps.items():
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        cnt += c

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]+', l)])
print(f'{cnt} replaced. {cn_left} CN lines remain')
