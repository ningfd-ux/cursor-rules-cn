"""Translate all remaining Chinese text in rules.ts by extracting each unique line,
translating it, and applying the replacement."""

import re
import json
from collections import Counter

with open('src/data/rules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
pat = re.compile(r'[\u4e00-\u9fff]+')

# Get all unique Chinese lines
cn_lines = {}
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped and pat.search(stripped):
        # Get the full indent + content
        cn_lines[stripped] = line

# Save to JSON for inspection
with open('all_cn_lines.json', 'w', encoding='utf-8') as f:
    json.dump(list(cn_lines.keys())[:200], f, ensure_ascii=False, indent=2)

print(f'{len(cn_lines)} unique CN lines saved to all_cn_lines.json')
# Count chars
total_chars = sum(1 for line in cn_lines.values() for c in line if '\u4e00' <= c <= '\u9fff')
print(f'Total Chinese characters remaining: ~{total_chars}')
