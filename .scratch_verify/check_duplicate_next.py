import sys
import json
import xml.etree.ElementTree as ET

def localname(tag):
    return tag.split('}')[-1] if '}' in tag else tag

def check(el, task_id, path=''):
    found = False
    nexts = [c for c in el if localname(c.tag) == 'next']
    if len(nexts) > 1:
        print(f'[{task_id}] MULTIPLE NEXT at {localname(el.tag)} {el.attrib} count={len(nexts)} path={path}')
        found = True
    for c in el:
        if check(c, task_id, path + '/' + localname(el.tag)):
            found = True
    return found

any_found = False
for filepath in sys.argv[1:]:
    with open(filepath, encoding='utf-8') as f:
        tasks = json.load(f)
    for t in tasks:
        root = ET.fromstring(t['xml'])
        if check(root, t['id']):
            any_found = True

if any_found:
    print('\n=== DUPLICATE <next> FOUND ===')
    sys.exit(1)
else:
    print('\n=== all clean, no duplicate <next> ===')
