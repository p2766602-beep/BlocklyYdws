const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// ---- 114JHsinchuC-1：射箭比賽成績計算 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j1_n', 'n');
  const PREV = reg.declare('j1_prev', 'prev');
  const CUR = reg.declare('j1_cur', 'cur');
  const TOTAL = reg.declare('j1_total', 'total');
  const MULT = reg.declare('j1_mult', 'mult');
  const I = reg.declare('j1_i', 'i');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askFirst = B.askAndWait(reg, '', null);
  const setFirst = B.setVar(reg, PREV, B.answerBlock(), null);
  const setTotal0 = B.setVar(reg, TOTAL, B.getVar(reg, PREV), null);

  const ask = B.askAndWait(reg, '', null);
  const setCur = B.setVar(reg, CUR, B.answerBlock(), null);
  const setMult = B.ifElseChain(
    [B.lt(B.getVar(reg, CUR), B.getVar(reg, PREV)), B.gt(B.getVar(reg, CUR), B.getVar(reg, PREV))],
    [B.setVar(reg, MULT, B.numLit(1), null), B.setVar(reg, MULT, B.numLit(3), null)],
    B.ifElseChain([B.eq(B.getVar(reg, CUR), B.numLit(10))], [B.setVar(reg, MULT, B.numLit(3), null)], B.setVar(reg, MULT, B.numLit(2), null))
  );
  const addTotal = B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.mul(B.getVar(reg, CUR), B.getVar(reg, MULT))), null);
  const setPrev = B.setVar(reg, PREV, B.getVar(reg, CUR), null);
  const loop = B.controlsFor(reg, I, B.numLit(2), B.getVar(reg, N), B.numLit(1), B.chain(ask, setCur, setMult, addTotal, setPrev));

  const sayOut = B.say(B.getVar(reg, TOTAL), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askFirst, setFirst, setTotal0, loop, sayOut));
  tasks.push({
    id: '114JHsinchuC-1', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n7 7 9 10 10', expectedOutput: '108' },
      { input: '7\n5 3 3 4 10 0 3', expectedOutput: '65' },
      { input: '5\n10 10 10 10 10', expectedOutput: '130' },
      { input: '6\n1 2 3 4 5 6', expectedOutput: '61' },
      { input: '3\n10 9 10', expectedOutput: '49' },
    ],
  });
})();

// ---- 114JHsinchuC-2：猜數字 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j2_n', 'n');
  const ANSWER = reg.declare('j2_answer', 'answer');
  const GUESS = reg.declare('j2_guess', 'guess');
  const I = reg.declare('j2_i', 'i');
  const J = reg.declare('j2_j', 'j');
  const TMP = reg.declare('j2_tmp', 'tmp');
  const A = reg.declare('j2_a', 'a');
  const COMMON = reg.declare('j2_common', 'common');
  const BVAR = reg.declare('j2_b', 'b');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initAnswer = B.setVar(reg, ANSWER, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readAnswer = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(B.askAndWait(reg, '', null), B.setVar(reg, TMP, B.answerBlock(), null), B.listsSetIndex(B.getVar(reg, ANSWER), B.getVar(reg, I), B.getVar(reg, TMP), null)));
  const initGuess = B.setVar(reg, GUESS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readGuess = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(B.askAndWait(reg, '', null), B.setVar(reg, TMP, B.answerBlock(), null), B.listsSetIndex(B.getVar(reg, GUESS), B.getVar(reg, I), B.getVar(reg, TMP), null)));

  const initA = B.setVar(reg, A, B.numLit(0), null);
  const posLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, ANSWER), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, GUESS), B.getVar(reg, I)))],
      [B.setVar(reg, A, B.add(B.getVar(reg, A), B.numLit(1)), null)], null));

  const initCommon = B.setVar(reg, COMMON, B.numLit(0), null);
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, ANSWER), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, GUESS), B.getVar(reg, J)))],
      [B.setVar(reg, COMMON, B.add(B.getVar(reg, COMMON), B.numLit(1)), null)], null));
  const commonLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), innerLoop);

  const setB = B.setVar(reg, BVAR, B.sub(B.getVar(reg, COMMON), B.getVar(reg, A)), null);
  const sayOut = B.say(B.textJoin([B.getVar(reg, A), B.textLit('A'), B.getVar(reg, BVAR), B.textLit('B')]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initAnswer, readAnswer, initGuess, readGuess, initA, posLoop, initCommon, commonLoop, setB, sayOut));
  tasks.push({
    id: '114JHsinchuC-2', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n4 7 1 9\n4 9 7 8', expectedOutput: '1A2B' },
      { input: '3\n3 5 8\n5 3 8', expectedOutput: '1A2B' },
      { input: '4\n1 2 3 4\n1 2 3 4', expectedOutput: '4A0B' },
      { input: '4\n1 2 3 4\n4 3 2 1', expectedOutput: '0A4B' },
      { input: '5\n1 2 3 4 5\n5 4 3 2 1', expectedOutput: '1A4B' },
    ],
  });
})();

// ---- 114JHsinchuC-3：寶可夢訓練師 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j3_n', 'n');
  const TYPES = reg.declare('j3_types', 'types');
  const TOTALS = reg.declare('j3_totals', 'totals');
  const K = reg.declare('j3_k', 'k');
  const I = reg.declare('j3_i', 'i');
  const J = reg.declare('j3_j', 'j');
  const TYPE = reg.declare('j3_type', 'type');
  const AMT = reg.declare('j3_amt', 'amt');
  const IDX = reg.declare('j3_idx', 'idx');
  const OUT = reg.declare('j3_out', 'out');
  const ENTRY = reg.declare('j3_entry', 'entry');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initTypes = B.setVar(reg, TYPES, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initTotals = B.setVar(reg, TOTALS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initK = B.setVar(reg, K, B.numLit(0), null);

  const askType = B.askAndWait(reg, '', null);
  const setType = B.setVar(reg, TYPE, B.answerBlock(), null);
  const askAmt = B.askAndWait(reg, '', null);
  const setAmt = B.setVar(reg, AMT, B.answerBlock(), null);
  const setIdx = B.setVar(reg, IDX, B.listsIndexOf(B.getVar(reg, TYPES), B.getVar(reg, TYPE)), null);
  const foundBranch = B.listsSetIndex(B.getVar(reg, TOTALS), B.getVar(reg, IDX), B.add(B.listsGetIndex(B.getVar(reg, TOTALS), B.getVar(reg, IDX)), B.getVar(reg, AMT)), null);
  const notFoundBranch = B.chain(
    B.setVar(reg, K, B.add(B.getVar(reg, K), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, TYPES), B.getVar(reg, K), B.getVar(reg, TYPE), null),
    B.listsSetIndex(B.getVar(reg, TOTALS), B.getVar(reg, K), B.getVar(reg, AMT), null)
  );
  const handleEntry = B.ifElseChain([B.gt(B.getVar(reg, IDX), B.numLit(0))], [foundBranch], notFoundBranch);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(askType, setType, askAmt, setAmt, setIdx, handleEntry));

  const setEntry = B.setVar(reg, ENTRY, B.textJoin([B.listsGetIndex(B.getVar(reg, TYPES), B.getVar(reg, J)), B.listsGetIndex(B.getVar(reg, TOTALS), B.getVar(reg, J))]), null);
  const appendEntry = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.getVar(reg, ENTRY), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ENTRY)]), null)
  );
  const initOut = B.setVar(reg, OUT, B.textLit(''), null);
  const buildLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, K), B.numLit(1), B.chain(setEntry, appendEntry));

  const sayOut = B.say(B.getVar(reg, OUT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initTypes, initTotals, initK, readLoop, initOut, buildLoop, sayOut));
  tasks.push({
    id: '114JHsinchuC-3', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n火 2 水 1 火 3 電 2 水 1', expectedOutput: '火5 水2 電2' },
      { input: '4\n草 1 草 2 毒 3 草 4', expectedOutput: '草7 毒3' },
      { input: '3\n水 5 水 5 水 5', expectedOutput: '水15' },
      { input: '6\n火 1 水 2 電 3 草 4 毒 5 火 6', expectedOutput: '火7 水2 電3 草4 毒5' },
      { input: '2\n電 10 火 20', expectedOutput: '電10 火20' },
    ],
  });
})();

// ---- 114JHsinchuC-4：機器人行走軌跡 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j4_n', 'n');
  const I = reg.declare('j4_i', 'i');
  const K = reg.declare('j4_k', 'k');
  const TOKEN = reg.declare('j4_token', 'token');
  const LEN = reg.declare('j4_len', 'len');
  const DIR = reg.declare('j4_dir', 'dir');
  const CH = reg.declare('j4_ch', 'ch');
  const DIGIT = reg.declare('j4_digit', 'digit');
  const STEPS = reg.declare('j4_steps', 'steps');
  const X = reg.declare('j4_x', 'x');
  const Y = reg.declare('j4_y', 'y');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initX = B.setVar(reg, X, B.numLit(0), null);
  const initY = B.setVar(reg, Y, B.numLit(0), null);

  const ask = B.askAndWait(reg, '', null);
  // 指令是字串（如"U2"/"R15"），要用answerAsText()避免萬一外觀像數字的指令被
  // interaction_answer自動轉成Number（這題指令開頭一定是字母，其實不會誤判，但比照
  // 既有慣例統一用文字語意的input一律走answerAsText()）。
  const setToken = B.setVar(reg, TOKEN, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, TOKEN)), null);
  const setDir = B.setVar(reg, DIR, B.charAt(B.getVar(reg, TOKEN), B.numLit(1)), null);

  const setSteps0 = B.setVar(reg, STEPS, B.numLit(0), null);
  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, TOKEN), B.getVar(reg, K)), null);
  const setDigit = B.setVar(reg, DIGIT, B.mul(B.getVar(reg, CH), B.numLit(1)), null);
  const accumSteps = B.setVar(reg, STEPS, B.add(B.mul(B.getVar(reg, STEPS), B.numLit(10)), B.getVar(reg, DIGIT)), null);
  const digitLoop = B.controlsFor(reg, K, B.numLit(2), B.getVar(reg, LEN), B.numLit(1), B.chain(setCh, setDigit, accumSteps));

  const clampXHigh = B.ifElseChain([B.gt(B.getVar(reg, X), B.numLit(10))], [B.setVar(reg, X, B.numLit(10), null)], null);
  const clampXLow = B.ifElseChain([B.lt(B.getVar(reg, X), B.numLit(0))], [B.setVar(reg, X, B.numLit(0), null)], null);
  const clampYHigh = B.ifElseChain([B.gt(B.getVar(reg, Y), B.numLit(10))], [B.setVar(reg, Y, B.numLit(10), null)], null);
  const clampYLow = B.ifElseChain([B.lt(B.getVar(reg, Y), B.numLit(0))], [B.setVar(reg, Y, B.numLit(0), null)], null);
  const applyMove = B.ifElseChain(
    [B.eq(B.getVar(reg, DIR), B.textLit('U')), B.eq(B.getVar(reg, DIR), B.textLit('D')), B.eq(B.getVar(reg, DIR), B.textLit('L'))],
    [
      B.setVar(reg, Y, B.add(B.getVar(reg, Y), B.getVar(reg, STEPS)), null),
      B.setVar(reg, Y, B.sub(B.getVar(reg, Y), B.getVar(reg, STEPS)), null),
      B.setVar(reg, X, B.sub(B.getVar(reg, X), B.getVar(reg, STEPS)), null),
    ],
    B.setVar(reg, X, B.add(B.getVar(reg, X), B.getVar(reg, STEPS)), null)
  );

  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(ask, setToken, setLen, setDir, setSteps0, digitLoop, applyMove, clampXHigh, clampXLow, clampYHigh, clampYLow));

  const sayOut = B.say(B.textJoin([B.textLit('('), B.getVar(reg, X), B.textLit(','), B.getVar(reg, Y), B.textLit(')')]), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initX, initY, mainLoop, sayOut));
  tasks.push({
    id: '114JHsinchuC-4', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\nU2 D3 D4 L5 R3', expectedOutput: '(3,0)' },
      { input: '4\nR3 L2 U3 D1', expectedOutput: '(1,2)' },
      { input: '3\nR15 U15 D3', expectedOutput: '(10,7)' },
      { input: '2\nU5 U10', expectedOutput: '(0,10)' },
      { input: '4\nR5 D2 L10 U1', expectedOutput: '(0,1)' },
    ],
  });
})();

// ---- 114JHsinchuC-5：學校運動會 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j5_n', 'n');
  const NAMES = reg.declare('j5_names', 'names');
  const SCORES = reg.declare('j5_scores', 'scores');
  const I = reg.declare('j5_i', 'i');
  const K = reg.declare('j5_k', 'k');
  const R = reg.declare('j5_r', 'r');
  const BESTIDX = reg.declare('j5_bestidx', 'bestidx');
  const BESTVAL = reg.declare('j5_bestval', 'bestval');
  const OUT = reg.declare('j5_out', 'out');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNames = B.setVar(reg, NAMES, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initScores = B.setVar(reg, SCORES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askName = B.askAndWait(reg, '', null);
  const setNameI = B.listsSetIndex(B.getVar(reg, NAMES), B.getVar(reg, I), B.answerAsText(), null);
  const askScore = B.askAndWait(reg, '', null);
  const setScoreI = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.answerBlock(), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(askName, setNameI, askScore, setScoreI));

  const setK = B.setVar(reg, K, B.round_('ROUND', B.div(B.getVar(reg, N), B.numLit(2))), null);
  const initOut = B.setVar(reg, OUT, B.textLit(''), null);

  const initBestIdx = B.setVar(reg, BESTIDX, B.numLit(0), null);
  const initBestVal = B.setVar(reg, BESTVAL, B.numLit(-1000000), null);
  const checkBest = B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I)), B.getVar(reg, BESTVAL))],
    [B.chain(B.setVar(reg, BESTVAL, B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I)), null), B.setVar(reg, BESTIDX, B.getVar(reg, I), null))], null);
  const findLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), checkBest);
  const appendBest = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, BESTIDX)), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, BESTIDX))]), null)
  );
  const markUsed = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, BESTIDX), B.numLit(-1000000), null);
  const selectLoop = B.controlsFor(reg, R, B.numLit(1), B.getVar(reg, K), B.numLit(1),
    B.chain(initBestIdx, initBestVal, findLoop, appendBest, markUsed));

  const sayOut = B.say(B.getVar(reg, OUT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initNames, initScores, readLoop, setK, initOut, selectLoop, sayOut));
  tasks.push({
    id: '114JHsinchuC-5', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n一甲 85 二乙 92 三丙 78 四丁 95 五戊 88', expectedOutput: '四丁 二乙 五戊' },
      { input: '3\n一甲 70 二乙 90 三丙 80', expectedOutput: '二乙 三丙' },
      { input: '4\nA 10 B 40 C 30 D 20', expectedOutput: 'B C' },
      { input: '6\nA 1 B 2 C 3 D 4 E 5 F 6', expectedOutput: 'F E D' },
      { input: '3\nA 50 B 50 C 10', expectedOutput: 'A B' },
    ],
  });
})();

// ---- 114JHsinchuC-6：機器人跳樓梯 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j6_n', 'n');
  const K = reg.declare('j6_k', 'k');
  const WAYS = reg.declare('j6_ways', 'ways');
  const I = reg.declare('j6_i', 'i');
  const J = reg.declare('j6_j', 'j');
  const SUM = reg.declare('j6_sum', 'sum');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initWays = B.setVar(reg, WAYS, B.listsRepeat(B.numLit(0), B.add(B.getVar(reg, N), B.numLit(1))), null);
  const setWays0 = B.listsSetIndex(B.getVar(reg, WAYS), B.numLit(1), B.numLit(1), null);

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const addIfValid = B.ifElseChain([B.gte(B.sub(B.getVar(reg, I), B.getVar(reg, J)), B.numLit(0))],
    [B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, WAYS), B.add(B.sub(B.getVar(reg, I), B.getVar(reg, J)), B.numLit(1)))), null)], null);
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, K), B.numLit(1), addIfValid);
  const setWaysI = B.listsSetIndex(B.getVar(reg, WAYS), B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, SUM), null);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setSum0, innerLoop, setWaysI));

  const sayOut = B.say(B.listsGetIndex(B.getVar(reg, WAYS), B.add(B.getVar(reg, N), B.numLit(1))), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initWays, setWays0, outerLoop, sayOut));
  tasks.push({
    id: '114JHsinchuC-6', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n2', expectedOutput: '5' },
      { input: '4\n3', expectedOutput: '7' },
      { input: '1\n1', expectedOutput: '1' },
      { input: '5\n1', expectedOutput: '1' },
      { input: '6\n2', expectedOutput: '13' },
      { input: '10\n2', expectedOutput: '89' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hsinchuc_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hsinchuc_j tasks');
