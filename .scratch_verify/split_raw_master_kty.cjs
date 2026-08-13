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

// 這次新增3縣市（Keelung/Taoyuan/Yunlin），各E+J共6個課程
const mapping = [
  { src: '114EKeelung', course: '114EKeelung.js' },
  { src: '114JKeelung', course: '114JKeelung.js' },
  { src: '114ETaoyuan', course: '114ETaoyuan.js' },
  { src: '114JTaoyuan', course: '114JTaoyuan.js' },
  { src: '114EYunlin', course: '114EYunlin.js' },
  { src: '114JYunlin', course: '114JYunlin.js' },
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
