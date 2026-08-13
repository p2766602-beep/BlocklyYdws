// answerKeys.json已擷取完畢並部署Worker，這一步把BlocklyYdws公開課程JS的testCases
// expectedOutput/output移除（starterXml在build_tcp14_16.cjs階段就已經是空字串）。
const fs = require('fs');
const path = require('path');

const CODES = ['114TCPE14', '114TCPJ14', '114TCPE15', '114TCPJ15', '114TCPE16', '114TCPJ16'];
const DIR = 'D:/YOSEP/BlocklyYdws/src/courses';

CODES.forEach((code) => {
  const filePath = path.join(DIR, `${code}.js`);
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
});
