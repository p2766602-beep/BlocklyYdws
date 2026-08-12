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

// { sourceTxt: 'txtFile file (no .txt)', courseFile: 'courses/*.js' }
const mapping = [
  { src: '114ETainan', course: '114ETainan.js' },
  { src: '114EHualien', course: '114EHualien.js' },
  { src: '114EChaiyiC', course: '114EChaiyiC.js' },
  { src: '114ENewTaipei', course: '114ENewTaipei.js' },
  { src: '114EHsinchu', course: '114EHsinchu.js' },
  { src: '114EChanghua', course: '114EChanghua.js' },
  { src: '114ETaipei', course: '114ETaipei.js' },
  { src: '114ETaitung', course: '114ETaitung.js' },
  { src: '114JChaiyiC', course: '114JChaiyiC.js' },
  { src: '114JChanghua', course: '114JChanghua.js' },
  { src: '114JHsinchu', course: '114JHsinchu.js' },
  { src: '114JHualien', course: '114JHualien.js' },
  { src: '114JNewTaipei', course: '114JNewTaipei.js' },
  { src: '114JTainan', course: '114JTainan.js' },
  { src: '114JTaipei', course: '114JTaipei.js' },
  { src: '114JTaitung', course: '114JTaitung.js' },
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
    // 檔名格式比照raw/master/YDWS-CodingData/既有慣例：{課程代碼}-{題號}-{標題}.txt
    const filename = `${courseData.code}-${i + 1}-${t.title}.txt`;
    const safeFilename = filename.replace(/[\\/:*?"<>|]/g, '_');
    fs.writeFileSync(path.join(OUT_DIR, safeFilename), blocks[i] + '\n', 'utf8');
    totalWritten++;
  });
  console.log(`${src}: wrote ${courseData.tasks.length} files`);
}
console.log('TOTAL:', totalWritten);
