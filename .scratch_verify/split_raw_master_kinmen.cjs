const fs = require('fs');
const path = require('path');

function loadCourse(file) {
  let t = fs.readFileSync(path.join('D:/YOSEP/YDWS-CodingBank/courses', file), 'utf8');
  t = t.replace('export default', 'var __X__ =');
  return new Function(t + '\nreturn __X__;')();
}

function splitRawBlocks(txtPath) {
  const content = fs.readFileSync(txtPath, 'utf8');
  return content.split(/(?:\r?\n){5,}/).map((p) => p.trim()).filter(Boolean);
}

const mapping = [
  { src: '114EKinmen', course: '114EKinmen.js' },
  { src: '114JKinmen', course: '114JKinmen.js' },
];

const OUT_DIR = 'D:/YOSEP/YDWS-CodingBank/raw/master/YDWS-CodingData';
let totalWritten = 0;
for (const { src, course } of mapping) {
  const txtPath = `D:/YOSEP/YDWS-CodingBank/txtFile/${src}.txt`;
  const blocks = splitRawBlocks(txtPath);
  const courseData = loadCourse(course);
  if (blocks.length !== courseData.tasks.length) {
    console.error(`MISMATCH ${src}: ${blocks.length} raw blocks vs ${courseData.tasks.length} course tasks`);
    process.exit(1);
  }
  courseData.tasks.forEach((t, i) => {
    const filename = `${courseData.code}-${i + 1}-${t.title}.txt`;
    const safeFilename = filename.replace(/[\\/:*?"<>|]/g, '_');
    fs.writeFileSync(path.join(OUT_DIR, safeFilename), blocks[i] + '\n', 'utf8');
    totalWritten++;
  });
  console.log(`${src}: wrote ${courseData.tasks.length} files (raw blocks=${blocks.length})`);
}
console.log('TOTAL:', totalWritten);
