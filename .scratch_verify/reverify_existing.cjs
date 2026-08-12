const fs = require('fs');

function loadJson(name) { return JSON.parse(fs.readFileSync(name, 'utf8')); }

const pairs = [
  { existing: 'tasks_chaiyic.json', parsed: 'parsed_114EChaiyiC.json' },
  { existing: 'tasks_hualien.json', parsed: 'parsed_114EHualien.json' },
  { existing: 'tasks_newtaipei.json', parsed: 'parsed_114ENewTaipei.json' },
  { existing: 'tasks_tainan.json', parsed: 'parsed_114ETainan.json' },
  { existing: 'tasks_hsinchu.json', parsed: 'parsed_114EHsinchu.json' },
];

const merged = [];
for (const { existing, parsed } of pairs) {
  const existingTasks = loadJson(existing);
  const parsedTasks = loadJson(parsed);
  if (existingTasks.length !== parsedTasks.length) {
    console.log(`WARNING: ${existing} has ${existingTasks.length} tasks but ${parsed} has ${parsedTasks.length}`);
  }
  existingTasks.forEach((t, i) => {
    const p = parsedTasks[i];
    if (!p) return;
    merged.push({
      id: t.id,
      xml: t.xml,
      testCases: p.testCases.map((tc) => ({ input: tc.input, expectedOutput: tc.expectedOutput })),
    });
  });
}

fs.writeFileSync('tasks_reverify.json', JSON.stringify(merged, null, 2), 'utf8');
console.log('wrote tasks_reverify.json with', merged.length, 'tasks, total testCases:', merged.reduce((s, t) => s + t.testCases.length, 0));
