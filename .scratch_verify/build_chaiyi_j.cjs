const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

function readLoopInto(reg, listVar, iVar, tmpVar, fromXml, toXml) {
  const ask = B.askAndWait(reg, '', null);
  const set = B.setVar(reg, tmpVar, B.answerBlock(), null);
  const setIdx = B.listsSetIndex(B.getVar(reg, listVar), B.getVar(reg, iVar), B.getVar(reg, tmpVar), null);
  return B.controlsFor(reg, iVar, fromXml, toXml, B.numLit(1), B.chain(ask, set, setIdx));
}

// 標準氣泡排序（由小到大），i=1..N-1、j=1..N-i；比照build_kinmen_e.cjs Task5既有寫法。
function bubbleSortAsc(reg, listVar, nVar, iVar, jVar, tmpVar) {
  const swapCond = B.gt(B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, jVar)), B.listsGetIndex(B.getVar(reg, listVar), B.add(B.getVar(reg, jVar), B.numLit(1))));
  const doSwap = B.chain(
    B.setVar(reg, tmpVar, B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, jVar)), null),
    B.listsSetIndex(B.getVar(reg, listVar), B.getVar(reg, jVar), B.listsGetIndex(B.getVar(reg, listVar), B.add(B.getVar(reg, jVar), B.numLit(1))), null),
    B.listsSetIndex(B.getVar(reg, listVar), B.add(B.getVar(reg, jVar), B.numLit(1)), B.getVar(reg, tmpVar), null)
  );
  const innerLoop = B.controlsFor(reg, jVar, B.numLit(1), B.sub(B.getVar(reg, nVar), B.getVar(reg, iVar)), B.numLit(1), B.ifElseChain([swapCond], [doSwap], null));
  return B.controlsFor(reg, iVar, B.numLit(1), B.sub(B.getVar(reg, nVar), B.numLit(1)), B.numLit(1), innerLoop);
}

// ---- 114JChaiyi-1：智慧手環的健康挑戰 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j1_n', 'n');
  const K = reg.declare('j1_k', 'k');
  const STEPS = reg.declare('j1_steps', 'steps');
  const I = reg.declare('j1_i', 'i');
  const TMP = reg.declare('j1_tmp', 'tmp');
  const STREAK = reg.declare('j1_streak', 'streak');
  const TOTAL = reg.declare('j1_total', 'total');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initSteps = B.setVar(reg, STEPS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, STEPS, I, TMP, B.numLit(1), B.getVar(reg, N));

  const initStreak = B.setVar(reg, STREAK, B.numLit(0), null);
  const initTotal = B.setVar(reg, TOTAL, B.numLit(0), null);
  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.ifElseChain(
      [B.lt(B.listsGetIndex(B.getVar(reg, STEPS), B.getVar(reg, I)), B.getVar(reg, K))],
      [B.chain(
        B.setVar(reg, STREAK, B.add(B.getVar(reg, STREAK), B.numLit(1)), null),
        B.ifElseChain([B.eq(B.getVar(reg, STREAK), B.numLit(1))], [B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.numLit(1)), null)], B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.numLit(2)), null))
      )],
      B.setVar(reg, STREAK, B.numLit(0), null)
    ));

  const sayOut = B.say(B.getVar(reg, TOTAL), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initSteps, readLoop, initStreak, initTotal, mainLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-1', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n1000\n800 900 1200 500 400', expectedOutput: '6' },
      { input: '4\n500\n600 700 800 900', expectedOutput: '0' },
      { input: '3\n1000\n1200 1500 2000', expectedOutput: '0' },
      { input: '4\n800\n500 600 700 400', expectedOutput: '7' },
      { input: '5\n100\n50 150 50 50 150', expectedOutput: '4' },
      { input: '6\n2000\n1000 1000 1000 2500 1000 1000', expectedOutput: '8' },
      { input: '10\n500\n400 400 400 600 600 400 400 400 400 400', expectedOutput: '14' },
    ],
  });
})();

// ---- 114JChaiyi-2：神秘的古代石板 ----
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('j2_s', 's');
  const LEN = reg.declare('j2_len', 'len');
  const NUMLEN = reg.declare('j2_numlen', 'numlen');
  const LASTRAW = reg.declare('j2_lastraw', 'lastraw');
  const LASTNUM = reg.declare('j2_lastnum', 'lastnum');
  const DIV5 = reg.declare('j2_div5', 'div5');
  const I = reg.declare('j2_i', 'i');
  const DIGRAW = reg.declare('j2_digraw', 'digraw');
  const DIGNUM = reg.declare('j2_dignum', 'dignum');
  const RIGHTPOS = reg.declare('j2_rightpos', 'rightpos');
  const ODDSUM = reg.declare('j2_oddsum', 'oddsum');
  const EVENSUM = reg.declare('j2_evensum', 'evensum');
  const DIFF = reg.declare('j2_diff', 'diff');
  const DIV11 = reg.declare('j2_div11', 'div11');

  const askS = B.askAndWait(reg, '', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const setNumLen = B.setVar(reg, NUMLEN, B.sub(B.getVar(reg, LEN), B.numLit(1)), null);

  const setLastRaw = B.setVar(reg, LASTRAW, B.charAt(B.getVar(reg, S), B.getVar(reg, NUMLEN)), null);
  const setLastNum = B.setVar(reg, LASTNUM, B.mul(B.getVar(reg, LASTRAW), B.numLit(1)), null);
  const setDiv5 = B.setVar(reg, DIV5, B.ternary(B.or_(B.eq(B.getVar(reg, LASTNUM), B.numLit(0)), B.eq(B.getVar(reg, LASTNUM), B.numLit(5))), B.numLit(1), B.numLit(0)), null);

  const initSums = [B.setVar(reg, ODDSUM, B.numLit(0), null), B.setVar(reg, EVENSUM, B.numLit(0), null)];
  const setDigRaw = B.setVar(reg, DIGRAW, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setDigNum = B.setVar(reg, DIGNUM, B.mul(B.getVar(reg, DIGRAW), B.numLit(1)), null);
  const setRightPos = B.setVar(reg, RIGHTPOS, B.sub(B.add(B.getVar(reg, NUMLEN), B.numLit(1)), B.getVar(reg, I)), null);
  const addSum = B.ifElseChain([B.eq(B.modulo(B.getVar(reg, RIGHTPOS), B.numLit(2)), B.numLit(1))],
    [B.setVar(reg, ODDSUM, B.add(B.getVar(reg, ODDSUM), B.getVar(reg, DIGNUM)), null)],
    B.setVar(reg, EVENSUM, B.add(B.getVar(reg, EVENSUM), B.getVar(reg, DIGNUM)), null));
  const sumLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, NUMLEN), B.numLit(1), B.chain(setDigRaw, setDigNum, setRightPos, addSum));

  const setDiff = B.setVar(reg, DIFF, B.sub(B.getVar(reg, ODDSUM), B.getVar(reg, EVENSUM)), null);
  const setDiv11 = B.setVar(reg, DIV11, B.ternary(B.eq(B.modulo(B.abs_(B.getVar(reg, DIFF)), B.numLit(11)), B.numLit(0)), B.numLit(1), B.numLit(0)), null);

  const sayOut = B.say(B.textJoin([B.getVar(reg, DIV5), B.textLit(' '), B.getVar(reg, DIV11)]), null);
  const top = B.whenFlagClicked(B.chain(askS, setS, setLen, setNumLen, setLastRaw, setLastNum, setDiv5, ...initSums, sumLoop, setDiff, setDiv11, sayOut));
  tasks.push({
    id: '114JChaiyi-2', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '55a', expectedOutput: '1 1' },
      { input: '1234a', expectedOutput: '0 0' },
      { input: '1651651651651651651651650a', expectedOutput: '1 1' },
      { input: '35a', expectedOutput: '1 0' },
      { input: '121a', expectedOutput: '0 1' },
      { input: '123a', expectedOutput: '0 0' },
      { input: '55555555555555555555555555a', expectedOutput: '1 1' },
      { input: '5060506050605060506050605060a', expectedOutput: '1 1' },
    ],
  });
})();

// ---- 114JChaiyi-3：資源回收車的極限挑戰 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j3_n', 'n');
  const K = reg.declare('j3_k', 'k');
  const WEIGHTS = reg.declare('j3_weights', 'weights');
  const I = reg.declare('j3_i', 'i');
  const J = reg.declare('j3_j', 'j');
  const TMP = reg.declare('j3_tmp', 'tmp');
  const SUM = reg.declare('j3_sum', 'sum');
  const COUNT = reg.declare('j3_count', 'count');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initWeights = B.setVar(reg, WEIGHTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, WEIGHTS, I, TMP, B.numLit(1), B.getVar(reg, N));

  const sortLoop = bubbleSortAsc(reg, WEIGHTS, N, I, J, TMP);

  const initAccum = [B.setVar(reg, SUM, B.numLit(0), null), B.setVar(reg, COUNT, B.numLit(0), null)];
  const setSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I))), null);
  const checkFit = B.ifElseChain([B.lte(B.getVar(reg, SUM), B.getVar(reg, K))], [B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null)], null);
  const countLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setSum, checkFit));

  const sayOut = B.say(B.getVar(reg, COUNT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initWeights, readLoop, sortLoop, ...initAccum, countLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-3', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n10\n5 8 3 2 4', expectedOutput: '3' },
      { input: '4\n20\n10 10 10 10', expectedOutput: '2' },
      { input: '3\n100\n20 30 40', expectedOutput: '3' },
      { input: '5\n10\n20 30 40 50 60', expectedOutput: '0' },
      { input: '5\n10\n1 2 3 4 5', expectedOutput: '4' },
      { input: '6\n15\n5 10 5 10 5 10', expectedOutput: '3' },
      { input: '8\n50\n100 2 100 3 100 5 100 8', expectedOutput: '4' },
    ],
  });
})();

// ---- 114JChaiyi-4：大隊接力的棒次安排 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j4_n', 'n');
  const VALS = reg.declare('j4_vals', 'vals');
  const I = reg.declare('j4_i', 'i');
  const J = reg.declare('j4_j', 'j');
  const TMP = reg.declare('j4_tmp', 'tmp');
  const HALFN = reg.declare('j4_halfn', 'halfn');
  const MAXSUM = reg.declare('j4_maxsum', 'maxsum');
  const PAIRSUM = reg.declare('j4_pairsum', 'pairsum');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initVals = B.setVar(reg, VALS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, VALS, I, TMP, B.numLit(1), B.getVar(reg, N));

  const sortLoop = bubbleSortAsc(reg, VALS, N, I, J, TMP);
  const setHalfN = B.setVar(reg, HALFN, B.div(B.getVar(reg, N), B.numLit(2)), null);
  const setMaxSum0 = B.setVar(reg, MAXSUM, B.numLit(-1), null);

  const setPairSum = B.setVar(reg, PAIRSUM, B.add(B.listsGetIndex(B.getVar(reg, VALS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, VALS), B.sub(B.add(B.getVar(reg, N), B.numLit(1)), B.getVar(reg, I)))), null);
  const checkMax = B.ifElseChain([B.gt(B.getVar(reg, PAIRSUM), B.getVar(reg, MAXSUM))], [B.setVar(reg, MAXSUM, B.getVar(reg, PAIRSUM), null)], null);
  const pairLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, HALFN), B.numLit(1), B.chain(setPairSum, checkMax));

  const sayOut = B.say(B.getVar(reg, MAXSUM), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initVals, readLoop, sortLoop, setHalfN, setMaxSum0, pairLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-4', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n10 90 20 80', expectedOutput: '100' },
      { input: '6\n1 5 10 20 50 100', expectedOutput: '101' },
      { input: '2\n50 60', expectedOutput: '110' },
      { input: '4\n1 10 2 9', expectedOutput: '11' },
      { input: '6\n10 20 30 40 50 60', expectedOutput: '70' },
      { input: '6\n10 80 20 70 30 75', expectedOutput: '100' },
      { input: '8\n1 100 2 99 3 98 50 50', expectedOutput: '101' },
    ],
  });
})();

// ---- 114JChaiyi-5：變速傳球的特訓 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j5_n', 'n');
  const K = reg.declare('j5_k', 'k');
  const CURRENT = reg.declare('j5_current', 'current');
  const I = reg.declare('j5_i', 'i');
  const STEP = reg.declare('j5_step', 'step');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const setCurrent0 = B.setVar(reg, CURRENT, B.numLit(1), null);

  const setStep = B.setVar(reg, STEP, B.ternary(B.eq(B.modulo(B.getVar(reg, CURRENT), B.numLit(2)), B.numLit(1)), B.numLit(1), B.numLit(2)), null);
  const setCurrentNew = B.setVar(reg, CURRENT, B.add(B.modulo(B.add(B.sub(B.getVar(reg, CURRENT), B.numLit(1)), B.getVar(reg, STEP)), B.getVar(reg, N)), B.numLit(1)), null);
  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, K), B.numLit(1), B.chain(setStep, setCurrentNew));

  const sayOut = B.say(B.getVar(reg, CURRENT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, setCurrent0, mainLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-5', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n3', expectedOutput: '1' },
      { input: '6\n2', expectedOutput: '4' },
      { input: '3\n1', expectedOutput: '2' },
      { input: '5\n5', expectedOutput: '4' },
      { input: '10\n4', expectedOutput: '8' },
      { input: '8\n10', expectedOutput: '4' },
      { input: '100\n50', expectedOutput: '100' },
    ],
  });
})();

// ---- 114JChaiyi-6：校園密室逃脫：書架的密碼 ----
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('j6_s', 's');
  const LEN = reg.declare('j6_len', 'len');
  const RESULT = reg.declare('j6_result', 'result');
  const I = reg.declare('j6_i', 'i');
  const DIGRAW = reg.declare('j6_digraw', 'digraw');
  const DIGNUM = reg.declare('j6_dignum', 'dignum');

  const askS = B.askAndWait(reg, '', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const setResult0 = B.setVar(reg, RESULT, B.numLit(0), null);

  const setDigRaw = B.setVar(reg, DIGRAW, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setDigNum = B.setVar(reg, DIGNUM, B.mul(B.getVar(reg, DIGRAW), B.numLit(1)), null);
  const accumulate = B.setVar(reg, RESULT, B.add(B.mul(B.getVar(reg, RESULT), B.numLit(2)), B.getVar(reg, DIGNUM)), null);
  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, LEN), B.numLit(1), B.chain(setDigRaw, setDigNum, accumulate));

  const sayOut = B.say(B.getVar(reg, RESULT), null);
  const top = B.whenFlagClicked(B.chain(askS, setS, setLen, setResult0, mainLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-6', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '101', expectedOutput: '5' },
      { input: '1111', expectedOutput: '15' },
      { input: '10', expectedOutput: '2' },
      { input: '110', expectedOutput: '6' },
      { input: '1000', expectedOutput: '8' },
      { input: '11011', expectedOutput: '27' },
      { input: '1111101000', expectedOutput: '1000' },
    ],
  });
})();

// ---- 114JChaiyi-7：校園密室逃脫：費氏階梯 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j7_n', 'n');
  const A = reg.declare('j7_a', 'a');
  const Bv = reg.declare('j7_b', 'b');
  const I = reg.declare('j7_i', 'i');
  const RESULT = reg.declare('j7_result', 'result');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setA = B.setVar(reg, A, B.numLit(1), null);
  const setB = B.setVar(reg, Bv, B.numLit(2), null);

  const climbLoop = B.controlsFor(reg, I, B.numLit(3), B.getVar(reg, N), B.numLit(1), B.chain(
    B.setVar(reg, RESULT, B.add(B.getVar(reg, A), B.getVar(reg, Bv)), null),
    B.setVar(reg, A, B.getVar(reg, Bv), null),
    B.setVar(reg, Bv, B.getVar(reg, RESULT), null)
  ));
  const branch = B.ifElseChain(
    [B.eq(B.getVar(reg, N), B.numLit(1)), B.eq(B.getVar(reg, N), B.numLit(2))],
    [B.setVar(reg, RESULT, B.getVar(reg, A), null), B.setVar(reg, RESULT, B.getVar(reg, Bv), null)],
    climbLoop
  );

  const sayOut = B.say(B.getVar(reg, RESULT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, setA, setB, branch, sayOut));
  tasks.push({
    id: '114JChaiyi-7', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3', expectedOutput: '3' },
      { input: '4', expectedOutput: '5' },
      { input: '1', expectedOutput: '1' },
      { input: '5', expectedOutput: '8' },
      { input: '10', expectedOutput: '89' },
      { input: '15', expectedOutput: '987' },
      { input: '20', expectedOutput: '10946' },
    ],
  });
})();

// ---- 114JChaiyi-8：校園密室逃脫：書架修繕工程 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j8_n', 'n');
  const K = reg.declare('j8_k', 'k');
  const LEN = reg.declare('j8_len', 'len');
  const I = reg.declare('j8_i', 'i');
  const J = reg.declare('j8_j', 'j');
  const TMP = reg.declare('j8_tmp', 'tmp');
  const MAXLEN = reg.declare('j8_maxlen', 'maxlen');
  const L = reg.declare('j8_l', 'l');
  const TOTAL = reg.declare('j8_total', 'total');
  const ANSWER = reg.declare('j8_answer', 'answer');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initLen = B.setVar(reg, LEN, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, LEN, I, TMP, B.numLit(1), B.getVar(reg, N));

  const setMaxLen0 = B.setVar(reg, MAXLEN, B.numLit(0), null);
  const maxLenLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, LEN), B.getVar(reg, I)), B.getVar(reg, MAXLEN))], [B.setVar(reg, MAXLEN, B.listsGetIndex(B.getVar(reg, LEN), B.getVar(reg, I)), null)], null));

  const setAnswer0 = B.setVar(reg, ANSWER, B.numLit(0), null);
  const setTotal0 = B.setVar(reg, TOTAL, B.numLit(0), null);
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.round_('ROUNDDOWN', B.div(B.listsGetIndex(B.getVar(reg, LEN), B.getVar(reg, J)), B.getVar(reg, L)))), null));
  const checkAnswer = B.ifElseChain([B.gte(B.getVar(reg, TOTAL), B.getVar(reg, K))], [B.setVar(reg, ANSWER, B.getVar(reg, L), null)], null);
  const outerLoop = B.controlsFor(reg, L, B.numLit(1), B.getVar(reg, MAXLEN), B.numLit(1), B.chain(setTotal0, innerLoop, checkAnswer));

  const sayOut = B.say(B.getVar(reg, ANSWER), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initLen, readLoop, setMaxLen0, maxLenLoop, setAnswer0, outerLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-8', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n4\n10 20 30', expectedOutput: '10' },
      { input: '3\n7\n21 15 10', expectedOutput: '5' },
      { input: '1\n5\n100', expectedOutput: '20' },
      { input: '3\n3\n10 10 10', expectedOutput: '10' },
      { input: '2\n5\n50 50', expectedOutput: '16' },
      { input: '5\n10\n100 200 50 120 80', expectedOutput: '50' },
      { input: '4\n6\n15 25 35 45', expectedOutput: '15' },
    ],
  });
})();

// ---- 114JChaiyi-9：校園密室逃脫：社團聯絡網 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('j9_n', 'n');
  const M = reg.declare('j9_m', 'm');
  const STARTLIST = reg.declare('j9_startlist', 'startlist');
  const ENDLIST = reg.declare('j9_endlist', 'endlist');
  const I = reg.declare('j9_i', 'i');
  const TMP = reg.declare('j9_tmp', 'tmp');
  const LEVEL = reg.declare('j9_level', 'level');
  const PASS = reg.declare('j9_pass', 'pass');
  const K = reg.declare('j9_k', 'k');
  const U = reg.declare('j9_u', 'u');
  const V = reg.declare('j9_v', 'v');
  const LU = reg.declare('j9_lu', 'lu');
  const LV = reg.declare('j9_lv', 'lv');
  const MAXLEVEL = reg.declare('j9_maxlevel', 'maxlevel');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const initStart = B.setVar(reg, STARTLIST, B.listsRepeat(B.numLit(0), B.getVar(reg, M)), null);
  const readStart = readLoopInto(reg, STARTLIST, I, TMP, B.numLit(1), B.getVar(reg, M));
  const initEnd = B.setVar(reg, ENDLIST, B.listsRepeat(B.numLit(0), B.getVar(reg, M)), null);
  const readEnd = readLoopInto(reg, ENDLIST, I, TMP, B.numLit(1), B.getVar(reg, M));

  const initLevelSteps = [
    B.setVar(reg, LEVEL, B.listsRepeat(B.numLit(-1), B.getVar(reg, N)), null),
    B.listsSetIndex(B.getVar(reg, LEVEL), B.numLit(1), B.numLit(0), null),
  ];

  const setU = B.setVar(reg, U, B.listsGetIndex(B.getVar(reg, STARTLIST), B.getVar(reg, K)), null);
  const setV = B.setVar(reg, V, B.listsGetIndex(B.getVar(reg, ENDLIST), B.getVar(reg, K)), null);
  const setLU = B.setVar(reg, LU, B.listsGetIndex(B.getVar(reg, LEVEL), B.getVar(reg, U)), null);
  const setLV = B.setVar(reg, LV, B.listsGetIndex(B.getVar(reg, LEVEL), B.getVar(reg, V)), null);
  const relaxCond = B.and_(B.neq(B.getVar(reg, LU), B.numLit(-1)), B.or_(B.eq(B.getVar(reg, LV), B.numLit(-1)), B.lt(B.getVar(reg, LV), B.add(B.getVar(reg, LU), B.numLit(1)))));
  const relax = B.ifElseChain([relaxCond], [B.listsSetIndex(B.getVar(reg, LEVEL), B.getVar(reg, V), B.add(B.getVar(reg, LU), B.numLit(1)), null)], null);
  const edgeLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(setU, setV, setLU, setLV, relax));
  const passLoop = B.controlsFor(reg, PASS, B.numLit(1), B.getVar(reg, N), B.numLit(1), edgeLoop);

  const setMaxLevel0 = B.setVar(reg, MAXLEVEL, B.numLit(-1), null);
  const findMaxLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, LEVEL), B.getVar(reg, I)), B.getVar(reg, MAXLEVEL))], [B.setVar(reg, MAXLEVEL, B.listsGetIndex(B.getVar(reg, LEVEL), B.getVar(reg, I)), null)], null));

  const sayOut = B.say(B.getVar(reg, MAXLEVEL), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, initStart, readStart, initEnd, readEnd, ...initLevelSteps, passLoop, setMaxLevel0, findMaxLoop, sayOut));
  tasks.push({
    id: '114JChaiyi-9', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n2\n1 2\n2 3', expectedOutput: '2' },
      { input: '4\n3\n1 1 3\n2 3 4', expectedOutput: '2' },
      { input: '2\n1\n1\n2', expectedOutput: '1' },
      { input: '5\n4\n1 2 3 4\n2 3 4 5', expectedOutput: '4' },
      { input: '5\n4\n1 2 1 4\n2 3 4 5', expectedOutput: '2' },
      { input: '6\n5\n1 2 3 4 1\n2 3 4 6 5', expectedOutput: '4' },
      { input: '7\n6\n1 2 3 4 2 3\n2 3 4 5 6 7', expectedOutput: '4' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_chaiyi_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'chaiyi_j tasks');
