import re

content = open('src/data/rules.ts', encoding='utf-8').read()

# Find all remaining CN lines, sorted by frequency
from collections import Counter
lines = content.split('\n')
cn = [l.strip() for l in lines if re.search(r'[\u4e00-\u9fff]+', l.strip())]
cnt = Counter(cn)

# Show what's left
print("Top 50 remaining patterns:")
for text, c in cnt.most_common(50):
    print(f'  [{c}x] {text}')
print(f'\nTotal: {len(cn)} CN lines, {len(cnt)} unique')
