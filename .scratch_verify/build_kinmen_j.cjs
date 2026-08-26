const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114JKinmen.json');

function mkReg() { return B.createVarRegistry(); }

// 沿用courses/archive/BSA01.js既有已驗證過的lists_split XML樣式（text_getSubstring在這個
// headless harness下實測會變孤兒積木，見build_kinmen_e.cjs同樣的註解，這裡一律改用lists_split）。
function listsSplit(stringXml, delim) {
  const mutation = '<mutation mode="SPLIT"></mutation>';
  const inner = mutation
    + B.field('MODE', 'SPLIT')
    + B.valueWrap('INPUT', stringXml)
    + `<value name="DELIM"><shadow type="text">${B.field('TEXT', delim)}</shadow></value>`;
  return B.block('lists_split', inner);
}
function numFromText(xml) {
  return B.sub(xml, B.numLit(0));
}
// 累加器是否還是空字串——一律用text_length==0判斷，不要用字串==''（math_arithmetic的
// MINUS/EQ底層寬鬆相等，數字0的邊界情況會誤判，見xml-builder.cjs的isEmptyText說明）。
function isEmptyAcc(varGetXml) {
  return B.isEmptyText(varGetXml);
}

// ---- Task 1: 資訊競賽獎勵統計（跟E版同一題、同一組測資） ----
function buildTask1() {
  const reg = mkReg();
  const N = reg.declare('j1_n', 'N');
  const G = reg.declare('j1_g', 'G');
  const S = reg.declare('j1_s', 'S');
  const Bc = reg.declare('j1_b', 'Bc');
  const M = reg.declare('j1_m', 'M');
  const I = reg.declare('j1_i', 'i');
  const V = reg.declare('j1_v', 'V');

  const askN = B.askAndWait(reg, '請輸入總參賽人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initG = B.setVar(reg, G, B.numLit(0), null);
  const initS = B.setVar(reg, S, B.numLit(0), null);
  const initB = B.setVar(reg, Bc, B.numLit(0), null);
  const initM = B.setVar(reg, M, B.numLit(0), null);

  const askV = B.askAndWait(reg, '請輸入選手得分', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const classify = B.ifElseChain(
    [B.gte(B.getVar(reg, V), B.numLit(90)), B.gte(B.getVar(reg, V), B.numLit(80)), B.gte(B.getVar(reg, V), B.numLit(70)), B.gte(B.getVar(reg, V), B.numLit(60))],
    [
      B.setVar(reg, G, B.add(B.getVar(reg, G), B.numLit(1)), null),
      B.setVar(reg, S, B.add(B.getVar(reg, S), B.numLit(1)), null),
      B.setVar(reg, Bc, B.add(B.getVar(reg, Bc), B.numLit(1)), null),
      B.setVar(reg, M, B.add(B.getVar(reg, M), B.numLit(1)), null),
    ],
    null
  );
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, classify));

  const sayOut = B.say(B.textJoin([B.getVar(reg, G), B.textLit(','), B.getVar(reg, S), B.textLit(','), B.getVar(reg, Bc), B.textLit(','), B.getVar(reg, M)]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initG, initS, initB, initM, readLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 2: 台灣星鏈衛星佈署計畫（J版4種模式，且不保證整除，取整數商） ----
function buildTask2() {
  const reg = mkReg();
  const L = reg.declare('j2_l', 'L');
  const D = reg.declare('j2_d', 'D');
  const M = reg.declare('j2_m', 'M');
  const SEG = reg.declare('j2_seg', 'seg');
  const OUT = reg.declare('j2_out', 'out');

  const askL = B.askAndWait(reg, '請輸入路段長度L', null);
  const setL = B.setVar(reg, L, B.answerBlock(), null);
  const askD = B.askAndWait(reg, '請輸入衛星間隔D', null);
  const setD = B.setVar(reg, D, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '請輸入模式M', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);

  const setSeg = B.setVar(reg, SEG, B.round_('ROUNDDOWN', B.div(B.getVar(reg, L), B.getVar(reg, D))), null);
  const modeIf = B.ifElseChain(
    [B.eq(B.getVar(reg, M), B.numLit(1)), B.eq(B.getVar(reg, M), B.numLit(2)), B.eq(B.getVar(reg, M), B.numLit(3))],
    [
      B.setVar(reg, OUT, B.add(B.getVar(reg, SEG), B.numLit(1)), null),
      B.setVar(reg, OUT, B.getVar(reg, SEG), null),
      B.setVar(reg, OUT, B.sub(B.getVar(reg, SEG), B.numLit(1)), null),
    ],
    B.setVar(reg, OUT, B.getVar(reg, SEG), null)
  );
  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(askL, setL, askD, setD, askM, setM, setSeg, modeIf, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 3: 「一杯心情」飲料調製（J版5種原料B/M/T/F/J，密度由大到小，平手保持輸入順序） ----
function buildTask3() {
  const reg = mkReg();
  const CODES = reg.declare('j3_codes', 'codes');
  const DENS = reg.declare('j3_dens', 'dens');
  const RAW = reg.declare('j3_raw', 'raw');
  const PARTS = reg.declare('j3_parts', 'parts');
  const I = reg.declare('j3_i', 'i');
  const K = reg.declare('j3_k', 'k');
  const TMPC = reg.declare('j3_tmpc', 'tmpc');
  const TMPD = reg.declare('j3_tmpd', 'tmpd');

  function readItem(idx, promptText) {
    const CODEi = reg.declare(`j3_code${idx}`, `code${idx}`);
    const DENSi = reg.declare(`j3_dens${idx}`, `dens${idx}`);
    const ask = B.askAndWait(reg, promptText, null);
    const setRaw = B.setVar(reg, RAW, B.answerAsText(), null);
    const setParts = B.setVar(reg, PARTS, listsSplit(B.getVar(reg, RAW), ','), null);
    const setCode = B.setVar(reg, CODEi, B.listsGetIndex(B.getVar(reg, PARTS), B.numLit(1)), null);
    const setDens = B.setVar(reg, DENSi, numFromText(B.listsGetIndex(B.getVar(reg, PARTS), B.numLit(2))), null);
    return { steps: [ask, setRaw, setParts, setCode, setDens], codeVar: CODEi, densVar: DENSi };
  }
  const items = [1, 2, 3, 4, 5].map((i) => readItem(i, `請輸入原料${i}(代碼,密度)`));

  const initCodes = B.setVar(reg, CODES, B.listsCreateWith(items.map((it) => B.getVar(reg, it.codeVar))), null);
  const initDens = B.setVar(reg, DENS, B.listsCreateWith(items.map((it) => B.getVar(reg, it.densVar))), null);

  // 由大到小、平手維持輸入順序：bubble sort只在「嚴格小於」時才交換（相等不交換），
  // 天生就是穩定排序，不需要額外的tie-break邏輯。
  const swapCond = B.lt(B.listsGetIndex(B.getVar(reg, DENS), B.getVar(reg, K)), B.listsGetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, K), B.numLit(1))));
  const doSwap = B.chain(
    B.setVar(reg, TMPD, B.listsGetIndex(B.getVar(reg, DENS), B.getVar(reg, K)), null),
    B.setVar(reg, TMPC, B.listsGetIndex(B.getVar(reg, CODES), B.getVar(reg, K)), null),
    B.listsSetIndex(B.getVar(reg, DENS), B.getVar(reg, K), B.listsGetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, K), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, CODES), B.getVar(reg, K), B.listsGetIndex(B.getVar(reg, CODES), B.add(B.getVar(reg, K), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, K), B.numLit(1)), B.getVar(reg, TMPD), null),
    B.listsSetIndex(B.getVar(reg, CODES), B.add(B.getVar(reg, K), B.numLit(1)), B.getVar(reg, TMPC), null)
  );
  const innerLoop = B.controlsFor(reg, K, B.numLit(1), B.sub(B.numLit(5), B.getVar(reg, I)), B.numLit(1), B.ifElseChain([swapCond], [doSwap], null));
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(4), B.numLit(1), innerLoop);

  const sayOut = B.say(B.textJoin([
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(1)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(2)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(3)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(4)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(5)),
  ]), null);

  const readSteps = items.flatMap((it) => it.steps);
  const top = B.whenFlagClicked(B.chain(...readSteps, initCodes, initDens, outerLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 數位交趾陶花（雙層：外層N瓣、內層M瓣） ----
function buildTask4() {
  const reg = mkReg();
  const N = reg.declare('j4_n', 'N');
  const M = reg.declare('j4_m', 'M');

  const askN = B.askAndWait(reg, '請輸入外層花瓣數量N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '請輸入內層花瓣數量M', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const sayOut = B.say(B.textJoin([B.textLit('外層'), B.getVar(reg, N), B.textLit('瓣,內層'), B.getVar(reg, M), B.textLit('瓣')]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 風獅爺排排隊（J版：N尊(2~10)，逐行輸出每一輪排序結果＋總交換次數） ----
function buildTask5() {
  const reg = mkReg();
  const N = reg.declare('j5_n', 'N');
  const RAW = reg.declare('j5_raw', 'raw');
  const LIST = reg.declare('j5_list', 'list');
  const I = reg.declare('j5_i', 'i');
  const K = reg.declare('j5_k', 'k');
  const C = reg.declare('j5_c', 'c');
  const TMP = reg.declare('j5_tmp', 'tmp');
  const SWAPS = reg.declare('j5_swaps', 'swaps');
  const ROW = reg.declare('j5_row', 'row');

  const askN = B.askAndWait(reg, '請輸入風獅爺數量N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askRaw = B.askAndWait(reg, '請輸入N個身高(以逗號隔開)', null);
  const setRaw = B.setVar(reg, RAW, B.answerAsText(), null);
  const setList = B.setVar(reg, LIST, listsSplit(B.getVar(reg, RAW), ','), null);
  // lists_split出來的項目是字串，要逐一轉成數字才能比大小（-0強制轉型，比照BSA01既有寫法）。
  const normalizeLoop = B.controlsFor(reg, C, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.listsSetIndex(B.getVar(reg, LIST), B.getVar(reg, C), numFromText(B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, C))), null));
  const setSwaps0 = B.setVar(reg, SWAPS, B.numLit(0), null);

  const swapCond = B.gt(B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, K)), B.listsGetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, K), B.numLit(1))));
  const doSwap = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, K)), null),
    B.listsSetIndex(B.getVar(reg, LIST), B.getVar(reg, K), B.listsGetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, K), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, K), B.numLit(1)), B.getVar(reg, TMP), null),
    B.setVar(reg, SWAPS, B.add(B.getVar(reg, SWAPS), B.numLit(1)), null)
  );
  const innerSortLoop = B.controlsFor(reg, K, B.numLit(1), B.sub(B.getVar(reg, N), B.getVar(reg, I)), B.numLit(1), B.ifElseChain([swapCond], [doSwap], null));

  // 每一輪(pass)結束後，把目前list狀態組成一行空白分隔的文字並say()出來。
  const setRow0 = B.setVar(reg, ROW, B.textLit(''), null);
  const appendRow = B.ifElseChain(
    [isEmptyAcc(B.getVar(reg, ROW))],
    [B.setVar(reg, ROW, B.textJoin([B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, K))]), null)],
    B.setVar(reg, ROW, B.textJoin([B.getVar(reg, ROW), B.textLit(' '), B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, K))]), null)
  );
  const buildRowLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, N), B.numLit(1), appendRow);
  const sayRow = B.say(B.getVar(reg, ROW), null);

  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), B.chain(innerSortLoop, setRow0, buildRowLoop, sayRow));

  const saySwaps = B.say(B.getVar(reg, SWAPS), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, askRaw, setRaw, setList, normalizeLoop, setSwaps0, outerLoop, saySwaps));
  return B.assembleXml(reg, top);
}

// ---- Task 6: 金門粥糜採購任務（統計店家次數，依取貨順序重複列出） ----
function buildTask6() {
  const reg = mkReg();
  const N = reg.declare('j6_n', 'N');
  const RAW1 = reg.declare('j6_raw1', 'raw1');
  const ORDERS = reg.declare('j6_orders', 'orders');
  const M = reg.declare('j6_m', 'M');
  const RAW2 = reg.declare('j6_raw2', 'raw2');
  const PICKUP = reg.declare('j6_pickup', 'pickup');
  const COUNT = reg.declare('j6_count', 'count');
  const I = reg.declare('j6_i', 'i');
  const P = reg.declare('j6_p', 'p');
  const R = reg.declare('j6_r', 'r');
  const STORE = reg.declare('j6_store', 'store');
  const CNT = reg.declare('j6_cnt', 'cnt');
  const OUT = reg.declare('j6_out', 'out');

  const askN = B.askAndWait(reg, '請輸入訂單總碗數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askOrders = B.askAndWait(reg, '請輸入N個店家編號(以逗號隔開)', null);
  const setRaw1 = B.setVar(reg, RAW1, B.answerAsText(), null);
  const setOrders = B.setVar(reg, ORDERS, listsSplit(B.getVar(reg, RAW1), ','), null);
  const normOrders = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.listsSetIndex(B.getVar(reg, ORDERS), B.getVar(reg, I), numFromText(B.listsGetIndex(B.getVar(reg, ORDERS), B.getVar(reg, I))), null));

  const askM = B.askAndWait(reg, '請輸入店家種類數量M', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const askPickup = B.askAndWait(reg, '請輸入M個取貨順序店家編號(以逗號隔開)', null);
  const setRaw2 = B.setVar(reg, RAW2, B.answerAsText(), null);
  const setPickup = B.setVar(reg, PICKUP, listsSplit(B.getVar(reg, RAW2), ','), null);
  const normPickup = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, M), B.numLit(1),
    B.listsSetIndex(B.getVar(reg, PICKUP), B.getVar(reg, I), numFromText(B.listsGetIndex(B.getVar(reg, PICKUP), B.getVar(reg, I))), null));

  // 店家編號1~9，用一個9格清單當計數陣列，索引跟店號一一對應。
  const initCount = B.setVar(reg, COUNT, B.listsRepeat(B.numLit(0), B.numLit(9)), null);
  const tallyOne = B.listsSetIndex(
    B.getVar(reg, COUNT), B.listsGetIndex(B.getVar(reg, ORDERS), B.getVar(reg, I)),
    B.add(B.listsGetIndex(B.getVar(reg, COUNT), B.listsGetIndex(B.getVar(reg, ORDERS), B.getVar(reg, I))), B.numLit(1)),
    null
  );
  const tallyLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), tallyOne);

  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const setStore = B.setVar(reg, STORE, B.listsGetIndex(B.getVar(reg, PICKUP), B.getVar(reg, P)), null);
  const setCnt = B.setVar(reg, CNT, B.listsGetIndex(B.getVar(reg, COUNT), B.getVar(reg, STORE)), null);
  const appendOut = B.ifElseChain(
    [isEmptyAcc(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.getVar(reg, STORE)]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(','), B.getVar(reg, STORE)]), null)
  );
  const repeatLoop = B.controlsFor(reg, R, B.numLit(1), B.getVar(reg, CNT), B.numLit(1), appendOut);
  // cnt理論上保證>=1（pickup裡的店家一定在orders中出現過），仍加上guard避免controls_for
  // 在上界為0時的既有已知bug（見專案記憶：上界可能為0的迴圈要guard，否則會多跑而非跳過）。
  const guardedRepeat = B.ifElseChain([B.gt(B.getVar(reg, CNT), B.numLit(0))], [repeatLoop], null);
  const outerLoop = B.controlsFor(reg, P, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(setStore, setCnt, guardedRepeat));

  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(
    askN, setN, askOrders, setRaw1, setOrders, normOrders,
    askM, setM, askPickup, setRaw2, setPickup, normPickup,
    initCount, tallyLoop, setOut0, outerLoop, sayOut
  ));
  return B.assembleXml(reg, top);
}

// ---- Task 7: 智慧掃地機器人（跟E版一樣，固定輸出常數文字） ----
function buildTask7() {
  const reg = mkReg();
  const sayOut = B.say(B.textLit('依實際迷宮步數而定'), null);
  const top = B.whenFlagClicked(sayOut);
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5, buildTask6, buildTask7];

// J-Task5(索引4)的原始TXT測資，多行輸出用字面「\n」(反斜線n兩個字元)標示換行，不是真正的
// 換行字元，要轉換成真正的\n才能跟say()多次輸出、以'\n'.join()比對的產物吻合。
function applyErrataFixes(taskIndex, testCases) {
  if (taskIndex === 4) {
    testCases.forEach((tc) => {
      tc.expectedOutput = String(tc.expectedOutput).split('\\n').join('\n');
      if (tc.output != null) tc.output = String(tc.output).split('\\n').join('\n');
    });
  }
  return testCases;
}

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114JKinmen-${idx + 1}`,
    title: p.fullTitle,
    problemTitle: p.fullTitle,
    difficulty: 'L2',
    description: p.description,
    inputDescription: p.inputDescription || '',
    outputDescription: p.outputDescription || '',
    examples: p.examples,
    xml,
    testCases: applyErrataFixes(idx, p.testCases),
  };
});

fs.writeFileSync('tasks_kinmen_j.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_kinmen_j.json');
