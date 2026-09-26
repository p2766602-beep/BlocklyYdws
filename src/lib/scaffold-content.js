/**
 * M0~M3教學鷹架文件（16份，Cowork潤飾HTML版）的課程代碼對照表。
 * 網站正本部署在獨立的公開repo（tnjbox/teaching-scaffolds），osep-judge跟
 * BlocklyYdws/blockly-lab三個平台共用同一份對照表各自複製一份（避免額外的
 * 跨網域fetch依賴），內容需要與 YDWS-CodingBank/docs/teaching-scaffolds/
 * html-output/course-map.json 保持一致——那邊有異動要記得同步複製過來。
 */

export const SCAFFOLD_BASE_URL = 'https://tnjbox.github.io/teaching-scaffolds/';

export const SCAFFOLD_MAP = {
  'M0-04': 'm0-04-loops.html',
  'M0-05': 'm0-05-list-traversal.html',
  'M0-06': 'm0-05-list-traversal.html',
  'M1-01': 'm0-05-list-traversal.html',
  'M1-02': 'm1-02-list-stats.html',
  'M1-03': 'm1-02-list-stats.html',
  'M1-04': 'm1-02-list-stats.html',
  'M1-05': 'm1-05-string.html',
  'M1-06': 'm1-05-string.html',
  'M1-07': 'm1-07-sorting.html',
  'M1-08': 'm1-07-sorting.html',
  'M1-09': 'm1-09-number-theory.html',
  'M1-10': 'm1-09-number-theory.html',
  'M1-11': 'm1-11-stack-queue.html',
  'M1-12': 'm1-12-debug-format.html',
  'M2-03': 'm2-03-simulation.html',
  'M2-04': 'm2-03-simulation.html',
  'M2-05': 'm2-03-simulation.html',
  'M2-06': 'm2-03-simulation.html',
  'M2-07': 'm2-07-graph.html',
  'M2-08': 'm2-07-graph.html',
  'M2-09': 'm2-09-greedy.html',
  'M2-10': 'm2-09-greedy.html',
  'M3-00': 'm3-00-binary-search.html',
  'M3-01': 'm3-01-interval.html',
  'M3-02': 'm3-02-prefix-sum.html',
  'M3-03': 'm3-03-sliding-window.html',
  'M3-04': 'm3-04-dp.html',
  // B系列基礎知識點課程（2026-09-26）：連到自主學習地圖的知識點教材
  'B1-01': 'basic/k01.html',
  'B1-02': 'basic/k02.html',
  'B1-03': 'basic/k03.html',
  'B1-04': 'basic/k04.html',
  'B2-01': 'basic/k05.html',
  'B2-02': 'basic/k06.html',
  'B3-01': 'basic/k07.html',
  'B3-02': 'basic/k08.html',
  'B3-03': 'basic/k09.html',
  'B3-04': 'basic/k10.html',
  'B3-05': 'basic/k11.html',
  'B4-01': 'basic/k12.html',
  'B4-02': 'basic/k13.html',
  'B5-01': 'basic/k14.html',
  'B5-02': 'basic/k15.html',
  'B6-01': 'basic/k16.html',
  'B6-02': 'basic/k17.html',
  'B6-03': 'basic/k18.html',
  'B7-01': 'basic/k19.html',
  'B8-01': 'basic/k20.html',
};

// BlocklyYdws的courseGroup.id是完整課程代碼（例如「M1-07-SORTBASICS」），這裡先取開頭的
// 「M?-NN」短代碼再查表，才能對到SCAFFOLD_MAP的key。
function shortCourseCode(courseCode) {
  const match = /^([A-Za-z]\d+-\d+)/.exec(String(courseCode || '').trim());
  return match ? match[1].toUpperCase() : String(courseCode || '').toUpperCase();
}

export function scaffoldUrlForCourse(courseCode) {
  const file = SCAFFOLD_MAP[shortCourseCode(courseCode)];
  return file ? `${SCAFFOLD_BASE_URL}${file}` : null;
}
