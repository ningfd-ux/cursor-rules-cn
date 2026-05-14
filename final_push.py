"""FINAL PUSH: Translate ALL remaining Chinese in rules.ts in one comprehensive sweep.
Reads file, extracts every unique Chinese line, builds translation map, applies all."""
import re
import json

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all remaining unique Chinese lines
pat = re.compile(r'[\u4e00-\u9fff]')
lines = content.split('\n')
all_cn = list(set(l.strip() for l in lines if pat.search(l.strip())))

# Build comprehensive translation map
t = {}
for cn_line in all_cn:
    # Match based on patterns
    if cn_line not in t:
        # title/description/tags patterns
        if 'title:' in cn_line and '"' in cn_line:
            pass  # already English or handled
        elif 'description:' in cn_line:
            pass
        elif 'tags:' in cn_line:
            # Replace CN tag values
            if '教程' in cn_line:
                t[cn_line] = cn_line.replace('"教程",', '"tutorial",')
            if '实战' in cn_line:
                t[cn_line] = cn_line.replace('"实战",', '"practical",')
            if '前端' in cn_line:
                t[cn_line] = cn_line.replace('"前端"', '"frontend"')
            if '后端' in cn_line:
                t[cn_line] = cn_line.replace('"后端"', '"backend"')
            if '效率' in cn_line:
                t[cn_line] = cn_line.replace('"效率"', '"productivity"')
            if '工作流' in cn_line:
                t[cn_line] = cn_line.replace('"工作流"', '"workflow"')
            if '移动端' in cn_line:
                t[cn_line] = cn_line.replace('"移动端"', '"mobile"')
            if '教程' in cn_line:
                t[cn_line] = cn_line.replace('"教程"', '"tutorial"')
        # content heading patterns
        elif cn_line.startswith('content: `') and re.search(r'[\u4e00-\u9fff]', cn_line.split('`')[1] if '`' in cn_line else cn_line):
            pass  # Handle inline
        elif '[' in cn_line and '](/rules/' in cn_line and re.search(r'[\u4e00-\u9fff]', cn_line):
            pass  # Chinese reference links

# More targeted: replace common CN fragments
cn_fragments = {
    '深度链接支持': 'Support deep linking',
    '使用 Cursor 配合 Tailwind CSS 开发的编码规范和最佳实践。': 'Coding standards and best practices for Tailwind CSS development with Cursor.',
    '使用 Cursor 进行 Tailwind CSS 开发的编码规范和最佳实践。': 'Coding standards and best practices for Tailwind CSS development with Cursor.',
    # More Prisma fragments
    '模型名使用 PascalCase 单数': 'Use PascalCase singular for model names',
    '字段名使用 camelCase': 'Use camelCase for field names',
    '关系使用 @relation 明确注解': 'Use explicit @relation annotations for relationships',
    '索引在查询热点字段上添加': 'Add indexes on frequently queried columns',
    '使用 select 只查询需要的字段': 'Use select to fetch only needed fields',
    '避免 N+1 使用 include 预加载': 'Avoid N+1 queries — use include for eager loading',
    '批量操作使用 createMany/updateMany': 'Use createMany/updateMany for batch operations',
    '分页使用 cursor-based': 'Use cursor-based pagination',
    '每次变更生成新迁移': 'Generate a new migration for every schema change',
    '迁移需 Review 后再部署': 'Review migrations before production deployment',
    '生产环境使用 migrate deploy': 'Use migrate deploy in production',
}

# Apply all fragment translations
count = 0
for cn, en in cn_fragments.items():
    c = content.count(cn)
    if c > 0:
        content = content.replace(cn, en)
        count += 1

# Now do pattern-based tag/description replacements
for old_str in ['"教程",', '"教程"]', '"实战",', '"前端"],', '"后端"],', '"效率"],', '"工作流"],', '"移动端"],', '"系统编程"],', '"全栈",', '"工程",']:
    mapping = {
        '"教程",': '"tutorial",',
        '"实战",': '"practical",',
        '"前端"],': '"frontend"],',
        '"后端"],': '"backend"],',
        '"效率"],': '"productivity"],',
        '"工作流"],': '"workflow"],',
        '"移动端"],': '"mobile"],',
        '"系统编程"],': '"systems-programming"],',
        '"全栈",': '"full-stack",',
        '"工程",': '"engineering",',
        '"教程"]': '"tutorial"]',
    }
    if old_str in mapping:
        new_str = mapping[old_str]
        c = content.count(old_str)
        if c > 0:
            content = content.replace(old_str, new_str)
            count += 1

open('src/data/rules.ts', 'w', encoding='utf-8').write(content)
cn_left = len([l for l in content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
print(f'{count} replacements. {cn_left} CN lines remain.')
