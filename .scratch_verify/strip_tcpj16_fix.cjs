const fs = require('fs');
const path = require('path');

const code = '114TCPJ16';
const filePath = path.join('D:/YOSEP/BlocklyYdws/src/courses', `${code}.js`);
let text = fs.readFileSync(filePath, 'utf-8');
const marker = 'const course = ';
const idx = text.indexOf(marker);
const header = text.slice(0, idx);
const rest = text.slice(idx + marker.length);
const endIdx = rest.lastIndexOf(';\n\nexport default course;\n');
const jsonText = rest.slice(0, endIdx);
const course = JSON.parse(jsonText);

course.tasks.forEach((t) => {
  t.testCases.forEach((tc) => {
    delete tc.expectedOutput;
    delete tc.output;
  });
});

const content = header + `const course = ${JSON.stringify(course, null, 2)};\n\nexport default course;\n`;
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`${code}: stripped expectedOutput/output from ${course.tasks.reduce((s, t) => s + t.testCases.length, 0)} test cases`);
