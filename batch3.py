import re

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

tr = [
    # Copilot React Native
    ('content: `# Copilot React Native', 'content: `# Copilot React Native Development Instructions'),
    ('- ', '##HOLDER##'),  # This will match too many, skip
]

# Better: use a dict of exact strings
translations = {}
translations['content: `# Copilot React Native \u79fb\u52a8\u7aef\u6307\u4ee4'] = 'content: `# Copilot React Native Development Instructions'

cnt = 0
# Read patterns from file approach: find every CN line and replace
lines = content.split('\n')
new_lines = []
changed = 0

for i, line in enumerate(lines):
    stripped = line.strip()
    orig = line
    if re.search(r'[\u4e00-\u9fff]', stripped):
        # Translate common patterns
        if stripped == '- \u6837\u5f0f\u4f7f\u7528 StyleSheet.create':
            line = line.replace('- \u6837\u5f0f\u4f7f\u7528 StyleSheet.create', '- Use StyleSheet.create for styles')
            changed += 1
        elif stripped == '- \u5c4f\u5e55\u7ec4\u4ef6\u653e\u5728 screens/ \u76ee\u5f55':
            line = line.replace('- \u5c4f\u5e55\u7ec4\u4ef6\u653e\u5728 screens/', '- Place screen components in screens/')
            changed += 1
        elif stripped == '- \u5bfc\u822a\u914d\u7f6e\u7edf\u4e00\u7ba1\u7406':
            line = line.replace('- \u5bfc\u822a\u914d\u7f6e\u7edf\u4e00\u7ba1\u7406', '- Centralize navigation configuration')
            changed += 1
    new_lines.append(line)

new_content = '\n'.join(new_lines)
open('src/data/rules.ts', 'w', encoding='utf-8').write(new_content)
cn_left = len([l for l in new_content.split('\n') if re.search(r'[\u4e00-\u9fff]', l)])
print(f'{changed} direct replacements. {cn_left} CN lines remain.')
