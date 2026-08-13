const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114EKeelung.json');

function mkReg() { return B.createVarRegistry(); }

// ---- Task 1: 魔法寶石的盤點 ----
function buildTask1() {
  const reg = mkReg();
  const N = reg.declare('t1_n', 'N');
  const GEMS = reg.declare('t1_gems', 'gems');
  const K = reg.declare('t1_k', 'K');
  const I = reg.declare('t1_i', 'i');
  const V = reg.declare('t1_v', 'v');
  const COUNT = reg.declare('t1_count', 'count');

  const askN = B.askAndWait(reg, '請輸入寶石總數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initGems = B.setVar(reg, GEMS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入寶石編號', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setGemIdx = B.listsSetIndex(B.getVar(reg, GEMS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setGemIdx));
  const askK = B.askAndWait(reg, '請輸入特定編號K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initCount = B.setVar(reg, COUNT, B.numLit(0), null);
  const incCount = B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null);
  const countIf = B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, GEMS), B.getVar(reg, I)), B.getVar(reg, K))], [incCount], null);
  const countLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), countIf);
  const sayCount = B.say(B.getVar(reg, COUNT), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initGems, readLoop, askK, setK, initCount, countLoop, sayCount));
  return B.assembleXml(reg, top);
}

// ---- Task 2: 遊戲績分排行榜 ----
function buildTask2() {
  const reg = mkReg();
  const N = reg.declare('t2_n', 'N');
  const SCORES = reg.declare('t2_scores', 'scores');
  const I = reg.declare('t2_i', 'i');
  const J = reg.declare('t2_j', 'j');
  const V = reg.declare('t2_v', 'v');
  const TMP = reg.declare('t2_tmp', 'tmp');
  const CNT = reg.declare('t2_cnt', 'cnt');
  const OUT = reg.declare('t2_out', 'out');
  const ITEMTXT = reg.declare('t2_itemtxt', 'itemtxt');

  const askN = B.askAndWait(reg, '請輸入紀錄數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);

  const initScores = B.setVar(reg, SCORES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入得分', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setScoreIdx = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setScoreIdx));

  // bubble sort descending
  const swapChain = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, J), B.listsGetIndex(B.getVar(reg, SCORES), B.add(B.getVar(reg, J), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, SCORES), B.add(B.getVar(reg, J), B.numLit(1)), B.getVar(reg, TMP), null)
  );
  const ifSwap = B.ifElseChain([B.lt(B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, J)), B.listsGetIndex(B.getVar(reg, SCORES), B.add(B.getVar(reg, J), B.numLit(1))))], [swapChain], null);
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.sub(B.getVar(reg, N), B.getVar(reg, I)), B.numLit(1), ifSwap);
  const outerLoopBody = innerLoop;
  const outerLoop = B.ifElseChain([B.gte(B.getVar(reg, N), B.numLit(2))], [B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), outerLoopBody)], null);

  const setCnt = B.setVar(reg, CNT, B.ternary(B.lt(B.getVar(reg, N), B.numLit(3)), B.getVar(reg, N), B.numLit(3)), null);

  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I))]), null);
  const setOutFirst = B.setVar(reg, OUT, B.getVar(reg, ITEMTXT), null);
  const setOutAppend = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ITEMTXT)]), null);
  const outIf = B.ifElseChain([B.eq(B.getVar(reg, I), B.numLit(1))], [setOutFirst], setOutAppend);
  const buildLoop = B.ifElseChain([B.gte(B.getVar(reg, CNT), B.numLit(1))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, CNT), B.numLit(1), B.chain(setItemTxt, outIf))], null);

  const sayOut = B.say(B.getVar(reg, OUT), null);
  const sayNone = B.say(B.textLit('目前沒有績分'), null);

  const mainLogic = B.ifElseChain(
    [B.eq(B.getVar(reg, N), B.numLit(0))],
    [sayNone],
    B.chain(initScores, readLoop, outerLoop, setCnt, B.setVar(reg, OUT, B.textLit(''), null), buildLoop, sayOut)
  );

  const top = B.whenFlagClicked(B.chain(askN, setN, mainLogic));
  return B.assembleXml(reg, top);
}

// ---- Task 3: 隊伍的旋轉舞步 (向右旋轉K格, K可能大於N) ----
function buildTask3() {
  const reg = mkReg();
  const N = reg.declare('t3_n', 'N');
  const OLD = reg.declare('t3_old', 'old');
  const NEW = reg.declare('t3_new', 'nw');
  const K = reg.declare('t3_k', 'K');
  const K2 = reg.declare('t3_k2', 'k2');
  const I = reg.declare('t3_i', 'i');
  const V = reg.declare('t3_v', 'v');
  const OUT = reg.declare('t3_out', 'out');

  const askN = B.askAndWait(reg, '請輸入人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initOld = B.setVar(reg, OLD, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入號碼', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setOldIdx = B.listsSetIndex(B.getVar(reg, OLD), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setOldIdx));
  const askK = B.askAndWait(reg, '請輸入移動步數K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const setK2 = B.setVar(reg, K2, B.modulo(B.getVar(reg, K), B.getVar(reg, N)), null);

  const initNew = B.setVar(reg, NEW, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  // NEW[1..k2] = OLD[N-k2+1 .. N]
  const loop1Body = B.listsSetIndex(B.getVar(reg, NEW), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, OLD), B.add(B.sub(B.getVar(reg, N), B.getVar(reg, K2)), B.getVar(reg, I))), null);
  const loop1 = B.ifElseChain([B.gte(B.getVar(reg, K2), B.numLit(1))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, K2), B.numLit(1), loop1Body)], null);
  // NEW[k2+1..N] = OLD[1..N-k2]
  const loop2Body = B.listsSetIndex(B.getVar(reg, NEW), B.add(B.getVar(reg, K2), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, OLD), B.getVar(reg, I)), null);
  const loop2 = B.ifElseChain([B.gte(B.sub(B.getVar(reg, N), B.getVar(reg, K2)), B.numLit(1))], [B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.getVar(reg, K2)), B.numLit(1), loop2Body)], null);

  const ITEMTXT = reg.declare('t3_itemtxt', 'itemtxt');
  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.listsGetIndex(B.getVar(reg, NEW), B.getVar(reg, I))]), null);
  const setOutFirst = B.setVar(reg, OUT, B.getVar(reg, ITEMTXT), null);
  const setOutAppend = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ITEMTXT)]), null);
  const outIf = B.ifElseChain([B.eq(B.getVar(reg, I), B.numLit(1))], [setOutFirst], setOutAppend);
  const buildLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setItemTxt, outIf));

  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initOld, readLoop, askK, setK, setK2, initNew, loop1, loop2, B.setVar(reg, OUT, B.textLit(''), null), buildLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 找出連續整數中所缺失的數字 ----
function buildTask4() {
  const reg = mkReg();
  const N = reg.declare('t4_n', 'N');
  const NUMS = reg.declare('t4_nums', 'nums');
  const I = reg.declare('t4_i', 'i');
  const V = reg.declare('t4_v', 'v');
  const MN = reg.declare('t4_mn', 'mn');
  const MX = reg.declare('t4_mx', 'mx');
  const CUR = reg.declare('t4_cur', 'cur');
  const OUT = reg.declare('t4_out', 'out');
  const FOUND = reg.declare('t4_found', 'found');
  const ITEMTXT = reg.declare('t4_itemtxt', 'itemtxt');

  const askN = B.askAndWait(reg, '請輸入數字個數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNums = B.setVar(reg, NUMS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入數字', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setNumIdx = B.listsSetIndex(B.getVar(reg, NUMS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setNumIdx));

  const initMinMaxSteps = [
    B.setVar(reg, MN, B.listsGetIndex(B.getVar(reg, NUMS), B.numLit(1)), null),
    B.setVar(reg, MX, B.listsGetIndex(B.getVar(reg, NUMS), B.numLit(1)), null),
  ];
  const updMinMax = B.chain(
    B.ifElseChain([B.lt(B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), B.getVar(reg, MN))], [B.setVar(reg, MN, B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), null)], null),
    B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), B.getVar(reg, MX))], [B.setVar(reg, MX, B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), null)], null)
  );
  const minMaxLoop = B.controlsFor(reg, I, B.numLit(2), B.getVar(reg, N), B.numLit(1), updMinMax);

  // for cur = mn to mx: check if cur exists in NUMS; if not, append to OUT
  const setFound0 = B.setVar(reg, FOUND, B.numLit(0), null);
  const checkOne = B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), B.getVar(reg, CUR))], [B.setVar(reg, FOUND, B.numLit(1), null)], null);
  const checkLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), checkOne);
  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.getVar(reg, CUR)]), null);
  const setOutFirst = B.setVar(reg, OUT, B.getVar(reg, ITEMTXT), null);
  const setOutAppend = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ITEMTXT)]), null);
  const appendIf = B.ifElseChain([B.isEmptyText(B.getVar(reg, OUT))], [setOutFirst], setOutAppend);
  const missingIf = B.ifElseChain([B.eq(B.getVar(reg, FOUND), B.numLit(0))], [B.chain(setItemTxt, appendIf)], null);
  const curLoopBody = B.chain(setFound0, checkLoop, missingIf);
  const curLoop = B.controlsFor(reg, CUR, B.getVar(reg, MN), B.getVar(reg, MX), B.numLit(1), curLoopBody);

  const sayResult = B.ifElseChain([B.isEmptyText(B.getVar(reg, OUT))], [B.say(B.textLit('無缺失'), null)], B.say(B.getVar(reg, OUT), null));

  const top = B.whenFlagClicked(B.chain(askN, setN, initNums, readLoop, ...initMinMaxSteps, minMaxLoop, B.setVar(reg, OUT, B.textLit(''), null), curLoop, sayResult));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 數學王國的連續階梯 (consecutive-sum decomposition, length>=2) ----
// 注意：輸出行數是動態的（0到多行），不能用textLit('\n')組多行字串再一次say()——
// textLit('\n')塞進text block的FieldTextInput載入XML時會被過濾掉（見xml-builder.cjs
// answerAsText()註解／memory）。改成每找到一組合就直接say()一次，harness/平台會自動
// 用'\n'把多次say()的輸出接起來，天生就支援動態行數，不需要另外組字串再一次輸出。
function buildTask5() {
  const reg = mkReg();
  const N = reg.declare('t5_n', 'N');
  const START = reg.declare('t5_start', 'start');
  const SUM = reg.declare('t5_sum', 'sum');
  const END = reg.declare('t5_end', 'end');
  const FOUND = reg.declare('t5_found', 'found');
  const K = reg.declare('t5_k', 'k');
  const SEGTXT = reg.declare('t5_segtxt', 'segtxt');
  const ITEMTXT = reg.declare('t5_itemtxt', 'itemtxt');

  const askN = B.askAndWait(reg, '請輸入目標數字N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);

  // for start = 1 .. N-1 (至少要2個數字,end>=start+1): 累加直到sum>=N, 若sum==N且end>start輸出
  const setSum0 = B.setVar(reg, SUM, B.getVar(reg, START), null);
  const setEnd0 = B.setVar(reg, END, B.getVar(reg, START), null);
  const growStep = B.chain(
    B.setVar(reg, END, B.add(B.getVar(reg, END), B.numLit(1)), null),
    B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, END)), null)
  );
  const growLoop = B.whileUntil('WHILE', B.and_(B.lt(B.getVar(reg, SUM), B.getVar(reg, N)), B.lt(B.getVar(reg, END), B.getVar(reg, N))), growStep);

  // 組這個segment的文字: start+(start+1)+...+end=N
  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.getVar(reg, K)]), null);
  const setSegFirst = B.setVar(reg, SEGTXT, B.getVar(reg, ITEMTXT), null);
  const setSegAppend = B.setVar(reg, SEGTXT, B.textJoin([B.getVar(reg, SEGTXT), B.textLit('+'), B.getVar(reg, ITEMTXT)]), null);
  const segIf = B.ifElseChain([B.eq(B.getVar(reg, K), B.getVar(reg, START))], [setSegFirst], setSegAppend);
  const segLoop = B.controlsFor(reg, K, B.getVar(reg, START), B.getVar(reg, END), B.numLit(1), B.chain(setItemTxt, segIf));

  const setSegTxtEmpty = B.setVar(reg, SEGTXT, B.textLit(''), null);
  const setFullLine = B.setVar(reg, SEGTXT, B.textJoin([B.getVar(reg, SEGTXT), B.textLit('='), B.getVar(reg, N)]), null);
  const sayLine = B.say(B.getVar(reg, SEGTXT), null);
  const setFoundTrue = B.setVar(reg, FOUND, B.numLit(1), null);

  const emitIf = B.ifElseChain(
    [B.and_(B.eq(B.getVar(reg, SUM), B.getVar(reg, N)), B.gt(B.getVar(reg, END), B.getVar(reg, START)))],
    [B.chain(setSegTxtEmpty, segLoop, setFullLine, sayLine, setFoundTrue)],
    null
  );

  const startLoopBody = B.chain(setSum0, setEnd0, growLoop, emitIf);
  const startLoop = B.ifElseChain([B.gte(B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1))], [B.controlsFor(reg, START, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), startLoopBody)], null);

  const sayNoIfNotFound = B.ifElseChain([B.eq(B.getVar(reg, FOUND), B.numLit(0))], [B.say(B.textLit('No'), null)], null);

  const top = B.whenFlagClicked(B.chain(askN, setN, B.setVar(reg, FOUND, B.numLit(0), null), startLoop, sayNoIfNotFound));
  return B.assembleXml(reg, top);
}

// ---- Task 6: 平均分配物品 (GCD of N numbers) ----
function buildTask6() {
  const reg = mkReg();
  const N = reg.declare('t6_n', 'N');
  const NUMS = reg.declare('t6_nums', 'nums');
  const I = reg.declare('t6_i', 'i');
  const V = reg.declare('t6_v', 'v');
  const RESULT = reg.declare('t6_result', 'result');
  const A = reg.declare('t6_a', 'a');
  const Bb = reg.declare('t6_b', 'b');
  const TMP = reg.declare('t6_tmp', 'tmp');

  const askN = B.askAndWait(reg, '請輸入文具種類數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNums = B.setVar(reg, NUMS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入數量', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setNumIdx = B.listsSetIndex(B.getVar(reg, NUMS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setNumIdx));

  const initResult = B.setVar(reg, RESULT, B.listsGetIndex(B.getVar(reg, NUMS), B.numLit(1)), null);

  // gcd(a,b) inlined via euclid while-loop each iteration
  const setA = B.setVar(reg, A, B.getVar(reg, RESULT), null);
  const setB = B.setVar(reg, Bb, B.listsGetIndex(B.getVar(reg, NUMS), B.getVar(reg, I)), null);
  const euclidStep = B.chain(
    B.setVar(reg, TMP, B.modulo(B.getVar(reg, A), B.getVar(reg, Bb)), null),
    B.setVar(reg, A, B.getVar(reg, Bb), null),
    B.setVar(reg, Bb, B.getVar(reg, TMP), null)
  );
  const euclidLoop = B.whileUntil('WHILE', B.neq(B.getVar(reg, Bb), B.numLit(0)), euclidStep);
  const setResultFromA = B.setVar(reg, RESULT, B.getVar(reg, A), null);
  const gcdLoopBody = B.chain(setA, setB, euclidLoop, setResultFromA);
  const gcdLoop = B.ifElseChain([B.gte(B.getVar(reg, N), B.numLit(2))], [B.controlsFor(reg, I, B.numLit(2), B.getVar(reg, N), B.numLit(1), gcdLoopBody)], null);

  const sayResult = B.say(B.getVar(reg, RESULT), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initNums, readLoop, initResult, gcdLoop, sayResult));
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5, buildTask6];

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114EKeelung-${idx + 1}`,
    title: p.fullTitle,
    problemTitle: p.fullTitle,
    difficulty: 'L2',
    description: p.description,
    inputDescription: p.inputDescription,
    outputDescription: p.outputDescription,
    examples: p.examples,
    xml,
    testCases: p.testCases,
  };
});

fs.writeFileSync('tasks_keelung_e.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_keelung_e.json');
