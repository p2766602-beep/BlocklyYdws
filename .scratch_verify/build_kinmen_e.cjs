const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114EKinmen.json');

function mkReg() { return B.createVarRegistry(); }

// ---- 額外的積木輔助（沿用courses/archive/BSA01.js既有已驗證過的lists_split XML樣式，
// xml-builder.cjs本身沒有匯出這個helper，這裡用低階primitives自己組）----
// 注意：實測text_getSubstring在這個headless harness下，即使mutation/field/value寫法
// 照抄既有課程的樣子，仍會在domToWorkspace時把區塊變成workspace上的孤兒（跟父層value槽
// 斷開連接），generator算出來的值變成socket預設值，非常隱蔽。改用lists_split(",")拆解
// "B,130"這種「字母,密度」格式，全程只用已經驗證過完全可靠的lists_split／lists_getIndex，
// 不要再用text_getSubstring。
function listsSplit(stringXml, delim) {
  const mutation = '<mutation mode="SPLIT"></mutation>';
  const inner = mutation
    + B.field('MODE', 'SPLIT')
    + B.valueWrap('INPUT', stringXml)
    + `<value name="DELIM"><shadow type="text">${B.field('TEXT', delim)}</shadow></value>`;
  return B.block('lists_split', inner);
}
// lists_split/lists_getIndex 出來的清單項目型別是字串，即使外觀是數字也不會自動轉型
// （跟interaction_answer的「智慧數字」行為不同）。用 -0 強制轉成JS Number，比照
// courses/archive/BSA01.js既有已驗證過的寫法。
function numFromText(xml) {
  return B.sub(xml, B.numLit(0));
}

// ---- Task 1: 資訊競賽獎勵統計 ----
// N人成績，分類金/銀/銅/佳作四級距，逗號輸出四個計數。
function buildTask1() {
  const reg = mkReg();
  const N = reg.declare('e1_n', 'N');
  const G = reg.declare('e1_g', 'G');
  const S = reg.declare('e1_s', 'S');
  const Bc = reg.declare('e1_b', 'Bc');
  const M = reg.declare('e1_m', 'M');
  const I = reg.declare('e1_i', 'i');
  const V = reg.declare('e1_v', 'V');

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

// ---- Task 2: 台灣星鏈衛星佈署計畫（E版只有模式1/2） ----
function buildTask2() {
  const reg = mkReg();
  const L = reg.declare('e2_l', 'L');
  const D = reg.declare('e2_d', 'D');
  const M = reg.declare('e2_m', 'M');
  const SEG = reg.declare('e2_seg', 'seg');
  const OUT = reg.declare('e2_out', 'out');

  const askL = B.askAndWait(reg, '請輸入路段長度L', null);
  const setL = B.setVar(reg, L, B.answerBlock(), null);
  const askD = B.askAndWait(reg, '請輸入衛星間隔D', null);
  const setD = B.setVar(reg, D, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '請輸入模式M', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);

  const setSeg = B.setVar(reg, SEG, B.round_('ROUNDDOWN', B.div(B.getVar(reg, L), B.getVar(reg, D))), null);
  const modeIf = B.ifElseChain(
    [B.eq(B.getVar(reg, M), B.numLit(1))],
    [B.setVar(reg, OUT, B.add(B.getVar(reg, SEG), B.numLit(1)), null)],
    B.setVar(reg, OUT, B.getVar(reg, SEG), null)
  );
  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(askL, setL, askD, setD, askM, setM, setSeg, modeIf, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 3: 「一杯心情」飲料調製（4種原料B/M/T/F，密度由大到小） ----
function buildTask3() {
  const reg = mkReg();
  const CODES = reg.declare('e3_codes', 'codes');
  const DENS = reg.declare('e3_dens', 'dens');
  const RAW = reg.declare('e3_raw', 'raw');
  const PARTS = reg.declare('e3_parts', 'parts');
  const I = reg.declare('e3_i', 'i');
  const J = reg.declare('e3_j', 'j');
  const TMPC = reg.declare('e3_tmpc', 'tmpc');
  const TMPD = reg.declare('e3_tmpd', 'tmpd');

  // 重要：RAW/PARTS是共用的暫存變數，每讀完一組原料就要立刻把萃取出來的代碼／密度
  // 存進「這一組專屬」的變數（CODE1..4/DENS1..4），不能等到最後才用getVar(RAW)組陣列
  // ——那樣4組會全部拿到「最後一次讀取」的值（值表達式是延後求值，不是讀取當下求值）。
  function readItem(idx, promptText) {
    const CODEi = reg.declare(`e3_code${idx}`, `code${idx}`);
    const DENSi = reg.declare(`e3_dens${idx}`, `dens${idx}`);
    const ask = B.askAndWait(reg, promptText, null);
    const setRaw = B.setVar(reg, RAW, B.answerAsText(), null);
    const setParts = B.setVar(reg, PARTS, listsSplit(B.getVar(reg, RAW), ','), null);
    const setCode = B.setVar(reg, CODEi, B.listsGetIndex(B.getVar(reg, PARTS), B.numLit(1)), null);
    const setDens = B.setVar(reg, DENSi, numFromText(B.listsGetIndex(B.getVar(reg, PARTS), B.numLit(2))), null);
    return { steps: [ask, setRaw, setParts, setCode, setDens], codeVar: CODEi, densVar: DENSi };
  }
  const it1 = readItem(1, '請輸入原料1(代碼,密度)');
  const it2 = readItem(2, '請輸入原料2(代碼,密度)');
  const it3 = readItem(3, '請輸入原料3(代碼,密度)');
  const it4 = readItem(4, '請輸入原料4(代碼,密度)');

  const initCodes = B.setVar(reg, CODES, B.listsCreateWith([B.getVar(reg, it1.codeVar), B.getVar(reg, it2.codeVar), B.getVar(reg, it3.codeVar), B.getVar(reg, it4.codeVar)]), null);
  const initDens = B.setVar(reg, DENS, B.listsCreateWith([B.getVar(reg, it1.densVar), B.getVar(reg, it2.densVar), B.getVar(reg, it3.densVar), B.getVar(reg, it4.densVar)]), null);

  // 由大到小（bubble sort，嚴格大於才交換，密度保證皆不同，不需考慮平手）
  const swapCond = B.lt(B.listsGetIndex(B.getVar(reg, DENS), B.getVar(reg, J)), B.listsGetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, J), B.numLit(1))));
  const doSwap = B.chain(
    B.setVar(reg, TMPD, B.listsGetIndex(B.getVar(reg, DENS), B.getVar(reg, J)), null),
    B.setVar(reg, TMPC, B.listsGetIndex(B.getVar(reg, CODES), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, DENS), B.getVar(reg, J), B.listsGetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, J), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, CODES), B.getVar(reg, J), B.listsGetIndex(B.getVar(reg, CODES), B.add(B.getVar(reg, J), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, DENS), B.add(B.getVar(reg, J), B.numLit(1)), B.getVar(reg, TMPD), null),
    B.listsSetIndex(B.getVar(reg, CODES), B.add(B.getVar(reg, J), B.numLit(1)), B.getVar(reg, TMPC), null)
  );
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.sub(B.numLit(4), B.getVar(reg, I)), B.numLit(1), B.ifElseChain([swapCond], [doSwap], null));
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(3), B.numLit(1), innerLoop);

  const sayOut = B.say(B.textJoin([
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(1)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(2)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(3)), B.textLit(','),
    B.listsGetIndex(B.getVar(reg, CODES), B.numLit(4)),
  ]), null);

  const top = B.whenFlagClicked(B.chain(...it1.steps, ...it2.steps, ...it3.steps, ...it4.steps, initCodes, initDens, outerLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 數位交趾陶花（N片花瓣） ----
function buildTask4() {
  const reg = mkReg();
  const N = reg.declare('e4_n', 'N');

  const askN = B.askAndWait(reg, '請輸入花瓣數量N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const sayOut = B.say(B.textJoin([B.getVar(reg, N), B.textLit('片對稱花瓣')]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 風獅爺排排隊（4個身高，氣泡排序＋交換次數） ----
function buildTask5() {
  const reg = mkReg();
  const LIST = reg.declare('e5_list', 'list');
  const I = reg.declare('e5_i', 'i');
  const J = reg.declare('e5_j', 'j');
  const TMP = reg.declare('e5_tmp', 'tmp');
  const SWAPS = reg.declare('e5_swaps', 'swaps');

  const ask1 = B.askAndWait(reg, '請輸入第1尊風獅爺身高', null);
  const ask2 = B.askAndWait(reg, '請輸入第2尊風獅爺身高', null);
  const ask3 = B.askAndWait(reg, '請輸入第3尊風獅爺身高', null);
  const ask4 = B.askAndWait(reg, '請輸入第4尊風獅爺身高', null);
  // interaction_answer每次呼叫都會消耗一個token，要先各自存進暫存變數才能組成清單。
  const V1 = reg.declare('e5_v1', 'v1');
  const V2 = reg.declare('e5_v2', 'v2');
  const V3 = reg.declare('e5_v3', 'v3');
  const V4 = reg.declare('e5_v4', 'v4');
  const setV1 = B.setVar(reg, V1, B.answerBlock(), null);
  const setV2 = B.setVar(reg, V2, B.answerBlock(), null);
  const setV3 = B.setVar(reg, V3, B.answerBlock(), null);
  const setV4 = B.setVar(reg, V4, B.answerBlock(), null);
  const setList = B.setVar(reg, LIST, B.listsCreateWith([B.getVar(reg, V1), B.getVar(reg, V2), B.getVar(reg, V3), B.getVar(reg, V4)]), null);
  const setSwaps0 = B.setVar(reg, SWAPS, B.numLit(0), null);

  const swapCond = B.gt(B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, J)), B.listsGetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, J), B.numLit(1))));
  const doSwap = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, LIST), B.getVar(reg, J), B.listsGetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, J), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, J), B.numLit(1)), B.getVar(reg, TMP), null),
    B.setVar(reg, SWAPS, B.add(B.getVar(reg, SWAPS), B.numLit(1)), null)
  );
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.sub(B.numLit(4), B.getVar(reg, I)), B.numLit(1), B.ifElseChain([swapCond], [doSwap], null));
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(3), B.numLit(1), innerLoop);

  const sayOut = B.say(B.textJoin([
    B.listsGetIndex(B.getVar(reg, LIST), B.numLit(1)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, LIST), B.numLit(2)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, LIST), B.numLit(3)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, LIST), B.numLit(4)), B.textLit(','),
    B.getVar(reg, SWAPS),
  ]), null);

  const top = B.whenFlagClicked(B.chain(ask1, setV1, ask2, setV2, ask3, setV3, ask4, setV4, setList, setSwaps0, outerLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 7 (原題號7，E版沒有題號6): 智慧掃地機器人 ----
// 本題為Scratch迷宮模擬實作題，無一般文字輸入，測資固定輸出常數文字。
function buildTask7() {
  const reg = mkReg();
  const sayOut = B.say(B.textLit('依實際迷宮步數而定'), null);
  const top = B.whenFlagClicked(sayOut);
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5, buildTask7];

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114EKinmen-${idx + 1}`,
    title: p.fullTitle,
    problemTitle: p.fullTitle,
    difficulty: 'L2',
    description: p.description,
    inputDescription: p.inputDescription || '',
    outputDescription: p.outputDescription || '',
    examples: p.examples,
    xml,
    testCases: p.testCases,
  };
});

fs.writeFileSync('tasks_kinmen_e.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_kinmen_e.json');
