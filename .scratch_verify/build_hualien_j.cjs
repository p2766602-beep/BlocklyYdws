const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 公車時刻表 —— 首班06:00每M分鐘一班，算距下一班還要等幾分鐘。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('j1_h', 'H');
  const S = reg.declare('j1_s', 'S');
  const M = reg.declare('j1_m', 'M');
  const CUR = reg.declare('j1_cur', 'cur');
  const ELAPSED = reg.declare('j1_elapsed', 'elapsed');
  const REM = reg.declare('j1_rem', 'rem');
  const WAIT = reg.declare('j1_wait', 'wait');

  const askH = B.askAndWait(reg, '請輸入H', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const askS = B.askAndWait(reg, '請輸入S', null);
  const setS = B.setVar(reg, S, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '請輸入M', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);

  const setCur = B.setVar(reg, CUR, B.add(B.mul(B.getVar(reg, H), B.numLit(60)), B.getVar(reg, S)), null);

  const beforeFirst = B.setVar(reg, WAIT, B.sub(B.numLit(360), B.getVar(reg, CUR)), null);
  const afterFirst = B.chain(
    B.setVar(reg, ELAPSED, B.sub(B.getVar(reg, CUR), B.numLit(360)), null),
    B.setVar(reg, REM, B.modulo(B.getVar(reg, ELAPSED), B.getVar(reg, M)), null),
    B.ifElseChain([B.eq(B.getVar(reg, REM), B.numLit(0))], [B.setVar(reg, WAIT, B.numLit(0), null)], B.setVar(reg, WAIT, B.sub(B.getVar(reg, M), B.getVar(reg, REM)), null))
  );
  const waitIf = B.ifElseChain([B.lt(B.getVar(reg, CUR), B.numLit(360))], [beforeFirst], afterFirst);

  const top = B.whenFlagClicked(B.chain(askH, setH, askS, setS, askM, setM, setCur, waitIf, B.say(B.getVar(reg, WAIT), null)));
  tasks.push({
    id: 'Hualien-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6 15 20', expectedOutput: '5' },
      { input: '5 50 20', expectedOutput: '10' },
      { input: '6 0 15', expectedOutput: '0' },
      { input: '5 45 30', expectedOutput: '15' },
      { input: '7 0 20', expectedOutput: '0' },
      { input: '7 10 45', expectedOutput: '20' },
      { input: '8 30 50', expectedOutput: '0' },
      { input: '8 31 50', expectedOutput: '49' },
      { input: '12 0 120', expectedOutput: '0' },
      { input: '11 59 120', expectedOutput: '1' },
    ],
  });
})();

// 2. 連續成績進步分析 —— 從第2天起，逐日比較，找連續嚴格進步的最長次數。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j2_n', 'N');
  const SCORES = reg.declare('j2_scores', 'scores');
  const V = reg.declare('j2_v', 'v');
  const I = reg.declare('j2_i', 'i');
  const STREAK = reg.declare('j2_streak', 'streak');
  const BEST = reg.declare('j2_best', 'best');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initScores = B.setVar(reg, SCORES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setIdx = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setIdx));

  const setStreak0 = B.setVar(reg, STREAK, B.numLit(0), null);
  const setBest0 = B.setVar(reg, BEST, B.numLit(0), null);
  const cmpBody = B.ifElseChain(
    [B.gt(B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, SCORES), B.sub(B.getVar(reg, I), B.numLit(1))))],
    [B.chain(
      B.setVar(reg, STREAK, B.add(B.getVar(reg, STREAK), B.numLit(1)), null),
      B.ifElseChain([B.gt(B.getVar(reg, STREAK), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, STREAK), null)], null)
    )],
    B.setVar(reg, STREAK, B.numLit(0), null)
  );
  const cmpLoop = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(1))], [B.controlsFor(reg, I, B.numLit(2), B.getVar(reg, N), B.numLit(1), cmpBody)], null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initScores, readLoop, setStreak0, setBest0, cmpLoop, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'Hualien-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n60 65 70 68 72', expectedOutput: '2' },
      { input: '5\n50 60 55 56 57', expectedOutput: '2' },
      { input: '4\n100 90 90 80', expectedOutput: '0' },
      { input: '6\n10 20 30 40 50 60', expectedOutput: '5' },
      { input: '10\n80 85 90 88 89 90 95 95 96 98', expectedOutput: '3' },
      { input: '1\n100', expectedOutput: '0' },
      { input: '3\n10 10 10', expectedOutput: '0' },
      { input: '7\n1 2 1 2 1 2 1', expectedOutput: '1' },
      { input: '8\n1 2 3 4 5 4 5 6', expectedOutput: '4' },
      { input: '5\n0 0 1 1 2', expectedOutput: '1' },
    ],
  });
})();

// 3. 卡住的鍵盤 —— 找連續出現最多次的字母；平手取最先出現者（用嚴格>更新才會保留先手）。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('j3_s', 'S');
  const I = reg.declare('j3_i', 'i');
  const CH = reg.declare('j3_ch', 'ch');
  const CURCH = reg.declare('j3_curch', 'curch');
  const CURLEN = reg.declare('j3_curlen', 'curlen');
  const BESTCH = reg.declare('j3_bestch', 'bestch');
  const BESTLEN = reg.declare('j3_bestlen', 'bestlen');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setCurCh0 = B.setVar(reg, CURCH, B.textLit(''), null);
  const setCurLen0 = B.setVar(reg, CURLEN, B.numLit(0), null);
  const setBestLen0 = B.setVar(reg, BESTLEN, B.numLit(0), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const sameAsCur = B.eq(B.getVar(reg, CH), B.getVar(reg, CURCH));
  const extendRun = B.setVar(reg, CURLEN, B.add(B.getVar(reg, CURLEN), B.numLit(1)), null);
  const startRun = B.chain(B.setVar(reg, CURCH, B.getVar(reg, CH), null), B.setVar(reg, CURLEN, B.numLit(1), null));
  const runIf = B.ifElseChain([sameAsCur], [extendRun], startRun);
  const updateBest = B.ifElseChain(
    [B.gt(B.getVar(reg, CURLEN), B.getVar(reg, BESTLEN))],
    [B.chain(B.setVar(reg, BESTLEN, B.getVar(reg, CURLEN), null), B.setVar(reg, BESTCH, B.getVar(reg, CURCH), null))],
    null
  );
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, runIf, updateBest));

  const sayResult = B.say(B.textJoin([B.getVar(reg, BESTCH), B.textLit(' '), B.getVar(reg, BESTLEN)]), null);
  const top = B.whenFlagClicked(B.chain(askS, setS, setCurCh0, setCurLen0, setBestLen0, forLoop, sayResult));
  tasks.push({
    id: 'Hualien-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'WWWWWWWWWWWWBBWW', expectedOutput: 'W 12' },
      { input: 'AAABCCCC', expectedOutput: 'C 4' },
      { input: 'ABCDE', expectedOutput: 'A 1' },
      { input: 'AABBCC', expectedOutput: 'A 2' },
      { input: 'ZZZZZZZZZZ', expectedOutput: 'Z 10' },
      { input: 'ABBBBAAACC', expectedOutput: 'B 4' },
      { input: 'XYYYZZZZX', expectedOutput: 'Z 4' },
      { input: 'PQQQQQQRRRRRR', expectedOutput: 'Q 6' },
      { input: 'A', expectedOutput: 'A 1' },
      { input: 'MMNNNOOOOPPPPPPPPP', expectedOutput: 'P 9' },
    ],
  });
})();

// 4. 外送員的接單策略 —— 經典區間排程貪婪法：依結束時間排序，能接則接。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j4_n', 'N');
  const STARTS = reg.declare('j4_starts', 'starts');
  const ENDS = reg.declare('j4_ends', 'ends');
  const ST = reg.declare('j4_st', 'st');
  const ET = reg.declare('j4_et', 'et');
  const I = reg.declare('j4_i', 'i');
  const J = reg.declare('j4_j', 'j');
  const TMP = reg.declare('j4_tmp', 'tmp');
  const LASTEND = reg.declare('j4_lastend', 'lastend');
  const COUNT = reg.declare('j4_count', 'count');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initStarts = B.setVar(reg, STARTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initEnds = B.setVar(reg, ENDS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askSt = B.askAndWait(reg, '', null);
  const setSt = B.setVar(reg, ST, B.answerBlock(), null);
  const askEt = B.askAndWait(reg, '', null);
  const setEt = B.setVar(reg, ET, B.answerBlock(), null);
  const setStartIdx = B.listsSetIndex(B.getVar(reg, STARTS), B.getVar(reg, I), B.getVar(reg, ST), null);
  const setEndIdx = B.listsSetIndex(B.getVar(reg, ENDS), B.getVar(reg, I), B.getVar(reg, ET), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askSt, setSt, askEt, setEt, setStartIdx, setEndIdx));

  // 泡泡排序：依ENDS由小到大排序，STARTS跟著一起交換（成對移動）。
  const cond = B.gt(B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, J)));
  const swapSteps = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, ENDS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, ENDS), B.getVar(reg, J), B.getVar(reg, TMP), null),
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, STARTS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, STARTS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, STARTS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, STARTS), B.getVar(reg, J), B.getVar(reg, TMP), null)
  );
  const ifSwap = B.ifElseChain([cond], [swapSteps], null);
  const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, N), B.numLit(1), ifSwap);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), innerLoop);
  const sortIf = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(1))], [outerLoop], null);

  const setLastEnd0 = B.setVar(reg, LASTEND, B.numLit(-999999999), null);
  const setCount0 = B.setVar(reg, COUNT, B.numLit(0), null);
  const greedyBody = B.ifElseChain(
    [B.gte(B.listsGetIndex(B.getVar(reg, STARTS), B.getVar(reg, I)), B.getVar(reg, LASTEND))],
    [B.chain(
      B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null),
      B.setVar(reg, LASTEND, B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, I)), null)
    )],
    null
  );
  const greedyLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), greedyBody);

  const top = B.whenFlagClicked(B.chain(askN, setN, initStarts, initEnds, readLoop, sortIf, setLastEnd0, setCount0, greedyLoop, B.say(B.getVar(reg, COUNT), null)));
  tasks.push({
    id: 'Hualien-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n1 3 2 4 3 5 5 7', expectedOutput: '3' },
      { input: '3\n1 10 10 20 20 30', expectedOutput: '3' },
      { input: '4\n0 50 1 5 5 10 10 15', expectedOutput: '3' },
      { input: '5\n5 10 5 10 5 10 5 10 5 10', expectedOutput: '1' },
      { input: '6\n10 15 2 4 6 8 1 9 4 5 15 20', expectedOutput: '5' },
      { input: '1\n0 100', expectedOutput: '1' },
      { input: '5\n1 2 2 3 3 4 4 5 5 6', expectedOutput: '5' },
      { input: '4\n1 5 2 6 3 7 4 8', expectedOutput: '1' },
      { input: '7\n1 3 2 5 4 6 5 8 7 9 8 10 9 11', expectedOutput: '4' },
      { input: '5\n1 4 3 5 0 6 4 7 3 8', expectedOutput: '2' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hualien_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hualien_j tasks');
