const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 讀N個token依序存進pre-allocate好的清單第1..N格——一次askAndWait只會拿到一個token
// （main.js的createTokenReader把整段輸入用任意空白斷詞，不分行），要讀N個值就要問N次。
function readLoopInto(reg, listVar, iVar, tmpVar, fromXml, toXml) {
  const ask = B.askAndWait(reg, '', null);
  const set = B.setVar(reg, tmpVar, B.answerBlock(), null);
  const setIdx = B.listsSetIndex(B.getVar(reg, listVar), B.getVar(reg, iVar), B.getVar(reg, tmpVar), null);
  return B.controlsFor(reg, iVar, fromXml, toXml, B.numLit(1), B.chain(ask, set, setIdx));
}

function numFromText(xml) {
  return B.sub(xml, B.numLit(0));
}

// ---- 114EChaiyi-1：營養午餐分析-1（豆製品週頻率） ----
(function () {
  const reg = B.createVarRegistry();
  const LIST = reg.declare('e1_list', 'list');
  const I = reg.declare('e1_i', 'i');
  const TMP = reg.declare('e1_tmp', 'tmp');
  const FLAG1 = reg.declare('e1_flag1', 'flag1');
  const FLAG2 = reg.declare('e1_flag2', 'flag2');

  const initList = B.setVar(reg, LIST, B.listsRepeat(B.textLit(''), B.numLit(10)), null);
  const readLoop = readLoopInto(reg, LIST, I, TMP, B.numLit(1), B.numLit(10));

  const initFlag1 = B.setVar(reg, FLAG1, B.numLit(0), null);
  const initFlag2 = B.setVar(reg, FLAG2, B.numLit(0), null);
  const loop1 = B.controlsFor(reg, I, B.numLit(1), B.numLit(5), B.numLit(1),
    B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, I)), B.textLit('C'))], [B.setVar(reg, FLAG1, B.numLit(1), null)], null));
  const loop2 = B.controlsFor(reg, I, B.numLit(6), B.numLit(10), B.numLit(1),
    B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, I)), B.textLit('C'))], [B.setVar(reg, FLAG2, B.numLit(1), null)], null));

  const sayOut = B.say(B.textJoin([
    B.ternary(B.eq(B.getVar(reg, FLAG1), B.numLit(1)), B.textLit('Y'), B.textLit('N')),
    B.textLit(' '),
    B.ternary(B.eq(B.getVar(reg, FLAG2), B.numLit(1)), B.textLit('Y'), B.textLit('N')),
  ]), null);

  const top = B.whenFlagClicked(B.chain(initList, readLoop, initFlag1, initFlag2, loop1, loop2, sayOut));
  tasks.push({
    id: '114EChaiyi-1', xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'B A B A B C D E F F', expectedOutput: 'N Y' },
      { input: 'C A B C D A B C D E', expectedOutput: 'Y Y' },
      { input: 'A A A D C E F B B C', expectedOutput: 'Y Y' },
      { input: 'A B D E F A B D E F', expectedOutput: 'N N' },
      { input: 'C C C C C C C C C C', expectedOutput: 'Y Y' },
    ],
  });
})();

// ---- 114EChaiyi-2：營養午餐分析-2（紅肉超量警示） ----
(function () {
  const reg = B.createVarRegistry();
  const LIST = reg.declare('e2_list', 'list');
  const I = reg.declare('e2_i', 'i');
  const TMP = reg.declare('e2_tmp', 'tmp');
  const CB1 = reg.declare('e2_cb1', 'cb1');
  const CAC1 = reg.declare('e2_cac1', 'cac1');
  const CB2 = reg.declare('e2_cb2', 'cb2');
  const CAC2 = reg.declare('e2_cac2', 'cac2');

  const initList = B.setVar(reg, LIST, B.listsRepeat(B.textLit(''), B.numLit(10)), null);
  const readLoop = readLoopInto(reg, LIST, I, TMP, B.numLit(1), B.numLit(10));

  function countHalf(fromN, toN, cb, cac) {
    const cur = B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, I));
    return B.controlsFor(reg, I, B.numLit(fromN), B.numLit(toN), B.numLit(1),
      B.ifElseChain(
        [B.eq(cur, B.textLit('B')), B.or_(B.eq(cur, B.textLit('A')), B.eq(cur, B.textLit('C')))],
        [B.setVar(reg, cb, B.add(B.getVar(reg, cb), B.numLit(1)), null), B.setVar(reg, cac, B.add(B.getVar(reg, cac), B.numLit(1)), null)],
        null
      ));
  }

  const initCountsSteps = [
    B.setVar(reg, CB1, B.numLit(0), null), B.setVar(reg, CAC1, B.numLit(0), null),
    B.setVar(reg, CB2, B.numLit(0), null), B.setVar(reg, CAC2, B.numLit(0), null),
  ];
  const loop1 = countHalf(1, 5, CB1, CAC1);
  const loop2 = countHalf(6, 10, CB2, CAC2);

  const sayOut = B.say(B.textJoin([
    B.ternary(B.gt(B.getVar(reg, CB1), B.getVar(reg, CAC1)), B.textLit('Y'), B.textLit('N')),
    B.textLit(' '),
    B.ternary(B.gt(B.getVar(reg, CB2), B.getVar(reg, CAC2)), B.textLit('Y'), B.textLit('N')),
  ]), null);

  const top = B.whenFlagClicked(B.chain(initList, readLoop, ...initCountsSteps, loop1, loop2, sayOut));
  tasks.push({
    id: '114EChaiyi-2', xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'B A B A B C D E F F', expectedOutput: 'Y N' },
      { input: 'C A B C D A B C D E', expectedOutput: 'N N' },
      { input: 'A A A D C E F B B C', expectedOutput: 'N Y' },
      { input: 'B B B B B A A A A A', expectedOutput: 'Y N' },
      { input: 'A C A C A C A C A C', expectedOutput: 'N N' },
    ],
  });
})();

// ---- 114EChaiyi-3：營養午餐分析-3（白肉接紅肉次數） ----
(function () {
  const reg = B.createVarRegistry();
  const LIST = reg.declare('e3_list', 'list');
  const I = reg.declare('e3_i', 'i');
  const TMP = reg.declare('e3_tmp', 'tmp');
  const CNT1 = reg.declare('e3_cnt1', 'cnt1');
  const CNT2 = reg.declare('e3_cnt2', 'cnt2');

  const initList = B.setVar(reg, LIST, B.listsRepeat(B.textLit(''), B.numLit(10)), null);
  const readLoop = readLoopInto(reg, LIST, I, TMP, B.numLit(1), B.numLit(10));

  function adjCount(fromN, toN, cnt) {
    const cur = B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, I));
    const nxt = B.listsGetIndex(B.getVar(reg, LIST), B.add(B.getVar(reg, I), B.numLit(1)));
    return B.controlsFor(reg, I, B.numLit(fromN), B.numLit(toN), B.numLit(1),
      B.ifElseChain([B.and_(B.eq(cur, B.textLit('A')), B.eq(nxt, B.textLit('B')))], [B.setVar(reg, cnt, B.add(B.getVar(reg, cnt), B.numLit(1)), null)], null));
  }

  const initCntSteps = [B.setVar(reg, CNT1, B.numLit(0), null), B.setVar(reg, CNT2, B.numLit(0), null)];
  const loop1 = adjCount(1, 4, CNT1);
  const loop2 = adjCount(6, 9, CNT2);
  const sayOut = B.say(B.textJoin([B.getVar(reg, CNT1), B.textLit(' '), B.getVar(reg, CNT2)]), null);

  const top = B.whenFlagClicked(B.chain(initList, readLoop, ...initCntSteps, loop1, loop2, sayOut));
  tasks.push({
    id: '114EChaiyi-3', xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'B A B A B C D E F F', expectedOutput: '2 0' },
      { input: 'C A B C D A B C D E', expectedOutput: '1 1' },
      { input: 'A A A D C E F B B C', expectedOutput: '0 0' },
      { input: 'A B A B A A B A B A', expectedOutput: '2 2' },
      { input: 'D D D D D A B A B A', expectedOutput: '0 2' },
    ],
  });
})();

// ---- 114EChaiyi-4：營養午餐分析-4（最常見主菜） ----
(function () {
  const reg = B.createVarRegistry();
  const LIST = reg.declare('e4_list', 'list');
  const I = reg.declare('e4_i', 'i');
  const TMP = reg.declare('e4_tmp', 'tmp');
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cntIds = letters.map((L, idx) => reg.declare(`e4_cnt${idx}`, `cnt${L}`));
  const COUNTS = reg.declare('e4_counts', 'counts');
  const LETTERS = reg.declare('e4_letters', 'letters');
  const J = reg.declare('e4_j', 'j');
  const MAXV = reg.declare('e4_maxv', 'maxv');
  const RESULT = reg.declare('e4_result', 'result');

  const initList = B.setVar(reg, LIST, B.listsRepeat(B.textLit(''), B.numLit(10)), null);
  const readLoop = readLoopInto(reg, LIST, I, TMP, B.numLit(1), B.numLit(10));

  const initCntSteps = cntIds.map(id => B.setVar(reg, id, B.numLit(0), null));
  const cur = B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, I));
  const countLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(10), B.numLit(1),
    B.ifElseChain(
      letters.map(L => B.eq(cur, B.textLit(L))),
      cntIds.map(id => B.setVar(reg, id, B.add(B.getVar(reg, id), B.numLit(1)), null)),
      null
    ));

  const initCountsList = B.setVar(reg, COUNTS, B.listsCreateWith(cntIds.map(id => B.getVar(reg, id))), null);
  const initLettersList = B.setVar(reg, LETTERS, B.listsCreateWith(letters.map(L => B.textLit(L))), null);
  const initMax = B.setVar(reg, MAXV, B.numLit(-1), null);
  const initResult = B.setVar(reg, RESULT, B.textLit(''), null);
  const findMaxLoop = B.controlsFor(reg, J, B.numLit(1), B.numLit(6), B.numLit(1),
    B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, J)), B.getVar(reg, MAXV))],
      [B.chain(B.setVar(reg, MAXV, B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, J)), null), B.setVar(reg, RESULT, B.listsGetIndex(B.getVar(reg, LETTERS), B.getVar(reg, J)), null))],
      null));

  const sayOut = B.say(B.getVar(reg, RESULT), null);
  const top = B.whenFlagClicked(B.chain(initList, readLoop, ...initCntSteps, countLoop, initCountsList, initLettersList, initMax, initResult, findMaxLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-4', xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'B A B A B C D E F F', expectedOutput: 'B' },
      { input: 'C A B C D A B C D E', expectedOutput: 'C' },
      { input: 'A A A D C E F B B C', expectedOutput: 'A' },
      { input: 'D D D D D A B C E F', expectedOutput: 'D' },
      { input: 'F E F E F E F D D F', expectedOutput: 'F' },
    ],
  });
})();

// ---- 114EChaiyi-5：停車費計算 ----
(function () {
  const reg = B.createVarRegistry();
  const TOTAL = reg.declare('e5_total', 'total');
  const REMAINING = reg.declare('e5_remaining', 'remaining');
  const TOTALFEE = reg.declare('e5_totalfee', 'totalfee');
  const CHUNK = reg.declare('e5_chunk', 'chunk');
  const FEE = reg.declare('e5_fee', 'fee');
  const BLOCKS = reg.declare('e5_blocks', 'blocks');
  const RAWFEE = reg.declare('e5_rawfee', 'rawfee');

  const askTotal = B.askAndWait(reg, '', null);
  const setTotal = B.setVar(reg, TOTAL, B.answerBlock(), null);
  const setRemaining = B.setVar(reg, REMAINING, B.getVar(reg, TOTAL), null);
  const setTotalFee0 = B.setVar(reg, TOTALFEE, B.numLit(0), null);

  const setChunk = B.setVar(reg, CHUNK, B.ternary(B.lt(B.getVar(reg, REMAINING), B.numLit(1440)), B.getVar(reg, REMAINING), B.numLit(1440)), null);
  const elseBranch = B.chain(
    B.setVar(reg, BLOCKS, B.round_('ROUNDUP', B.div(B.sub(B.getVar(reg, CHUNK), B.numLit(60)), B.numLit(30))), null),
    B.setVar(reg, RAWFEE, B.add(B.numLit(40), B.mul(B.numLit(30), B.getVar(reg, BLOCKS))), null),
    B.setVar(reg, FEE, B.ternary(B.gt(B.getVar(reg, RAWFEE), B.numLit(400)), B.numLit(400), B.getVar(reg, RAWFEE)), null)
  );
  const feeCalc = B.ifElseChain(
    [B.lte(B.getVar(reg, CHUNK), B.numLit(30)), B.lte(B.getVar(reg, CHUNK), B.numLit(60))],
    [B.setVar(reg, FEE, B.numLit(20), null), B.setVar(reg, FEE, B.numLit(40), null)],
    elseBranch
  );
  const addFee = B.setVar(reg, TOTALFEE, B.add(B.getVar(reg, TOTALFEE), B.getVar(reg, FEE)), null);
  const subRemaining = B.setVar(reg, REMAINING, B.sub(B.getVar(reg, REMAINING), B.getVar(reg, CHUNK)), null);
  const loopBody = B.chain(setChunk, feeCalc, addFee, subRemaining);
  const mainLoop = B.whileUntil('WHILE', B.gt(B.getVar(reg, REMAINING), B.numLit(0)), loopBody);

  const sayOut = B.say(B.getVar(reg, TOTALFEE), null);
  const top = B.whenFlagClicked(B.chain(askTotal, setTotal, setRemaining, setTotalFee0, mainLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-5', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '100', expectedOutput: '100' },
      { input: '820', expectedOutput: '400' },
      { input: '1443', expectedOutput: '420' },
      { input: '30', expectedOutput: '20' },
      { input: '31', expectedOutput: '40' },
      { input: '60', expectedOutput: '40' },
      { input: '61', expectedOutput: '70' },
      { input: '2880', expectedOutput: '800' },
      { input: '2883', expectedOutput: '820' },
    ],
  });
})();

// ---- 114EChaiyi-6：班級活動票選 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('e6_n', 'n');
  const VOTES = reg.declare('e6_votes', 'votes');
  const I = reg.declare('e6_i', 'i');
  const TMP = reg.declare('e6_tmp', 'tmp');
  const COUNTS = reg.declare('e6_counts', 'counts');
  const J = reg.declare('e6_j', 'j');
  const MAXV = reg.declare('e6_maxv', 'maxv');
  const OUT = reg.declare('e6_out', 'out');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initVotes = B.setVar(reg, VOTES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, VOTES, I, TMP, B.numLit(1), B.getVar(reg, N));

  const initCounts = B.setVar(reg, COUNTS, B.listsRepeat(B.numLit(0), B.numLit(5)), null);
  const voteIdx = B.listsGetIndex(B.getVar(reg, VOTES), B.getVar(reg, I));
  const countLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.listsSetIndex(B.getVar(reg, COUNTS), voteIdx, B.add(B.listsGetIndex(B.getVar(reg, COUNTS), voteIdx), B.numLit(1)), null));

  const initMax = B.setVar(reg, MAXV, B.numLit(0), null);
  const findMaxLoop = B.controlsFor(reg, J, B.numLit(1), B.numLit(5), B.numLit(1),
    B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, J)), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, J)), null)], null));

  const initOut = B.setVar(reg, OUT, B.textLit(''), null);
  const appendJ = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.getVar(reg, J)]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, J)]), null)
  );
  const buildOutLoop = B.controlsFor(reg, J, B.numLit(1), B.numLit(5), B.numLit(1),
    B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, J)), B.getVar(reg, MAXV))], [appendJ], null));

  const sayOut = B.say(B.getVar(reg, OUT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initVotes, readLoop, initCounts, countLoop, initMax, findMaxLoop, initOut, buildOutLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-6', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n1 5 1 5', expectedOutput: '1 5' },
      { input: '5\n1 2 1 1 4', expectedOutput: '1' },
      { input: '8\n3 4 5 1 3 4 5 1', expectedOutput: '1 3 4 5' },
      { input: '3\n2 2 2', expectedOutput: '2' },
      { input: '6\n1 2 3 4 5 1', expectedOutput: '1' },
    ],
  });
})();

// ---- 114EChaiyi-7：班級集星比賽 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('e7_n', 'n');
  const K = reg.declare('e7_k', 'k');
  const LIST = reg.declare('e7_list', 'list');
  const I = reg.declare('e7_i', 'i');
  const TMP = reg.declare('e7_tmp', 'tmp');
  const J = reg.declare('e7_j', 'j');
  const SUM = reg.declare('e7_sum', 'sum');
  const BESTSUM = reg.declare('e7_bestsum', 'bestsum');
  const BESTSTART = reg.declare('e7_beststart', 'beststart');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initList = B.setVar(reg, LIST, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, LIST, I, TMP, B.numLit(1), B.getVar(reg, N));

  const initBestSteps = [B.setVar(reg, BESTSUM, B.numLit(-1), null), B.setVar(reg, BESTSTART, B.numLit(1), null)];

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const innerLoop = B.controlsFor(reg, J, B.getVar(reg, I), B.sub(B.add(B.getVar(reg, I), B.getVar(reg, K)), B.numLit(1)), B.numLit(1),
    B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, LIST), B.getVar(reg, J))), null));
  const checkBest = B.ifElseChain([B.gt(B.getVar(reg, SUM), B.getVar(reg, BESTSUM))],
    [B.chain(B.setVar(reg, BESTSUM, B.getVar(reg, SUM), null), B.setVar(reg, BESTSTART, B.getVar(reg, I), null))], null);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.add(B.getVar(reg, N), B.numLit(1)), B.getVar(reg, K)), B.numLit(1),
    B.chain(setSum0, innerLoop, checkBest));

  const sayOut = B.say(B.textJoin([B.getVar(reg, BESTSTART), B.textLit(' '), B.getVar(reg, BESTSUM)]), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initList, readLoop, ...initBestSteps, outerLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-7', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6\n3\n10 2 3 4 1 5', expectedOutput: '1 15' },
      { input: '7\n3\n1 2 10 12 5 3 1', expectedOutput: '3 27' },
      { input: '8\n4\n5 1 5 1 5 1 5 1', expectedOutput: '1 12' },
      { input: '5\n1\n3 9 2 8 1', expectedOutput: '2 9' },
      { input: '4\n2\n1 1 1 10', expectedOutput: '3 11' },
    ],
  });
})();

// ---- 114EChaiyi-8：森林小火車的能量大冒險 ----
(function () {
  const reg = B.createVarRegistry();
  const STATIONS = reg.declare('e8_stations', 'stations');
  const I = reg.declare('e8_i', 'i');
  const TMP = reg.declare('e8_tmp', 'tmp');
  const K = reg.declare('e8_k', 'k');
  const ROLLS = reg.declare('e8_rolls', 'rolls');
  const CANDY = reg.declare('e8_candy', 'candy');
  const POS = reg.declare('e8_pos', 'pos');

  const initStations = B.setVar(reg, STATIONS, B.listsRepeat(B.numLit(0), B.numLit(5)), null);
  const readStations = readLoopInto(reg, STATIONS, I, TMP, B.numLit(1), B.numLit(5));
  const askK = B.askAndWait(reg, '', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initRolls = B.setVar(reg, ROLLS, B.listsRepeat(B.numLit(0), B.getVar(reg, K)), null);
  const readRolls = readLoopInto(reg, ROLLS, I, TMP, B.numLit(1), B.getVar(reg, K));

  const setCandy0 = B.setVar(reg, CANDY, B.numLit(10), null);
  const setPos0 = B.setVar(reg, POS, B.numLit(1), null);

  const step = B.listsGetIndex(B.getVar(reg, ROLLS), B.getVar(reg, I));
  const setCandyMinus = B.setVar(reg, CANDY, B.sub(B.getVar(reg, CANDY), step), null);
  const setPosNew = B.setVar(reg, POS, B.add(B.modulo(B.add(B.sub(B.getVar(reg, POS), B.numLit(1)), step), B.numLit(5)), B.numLit(1)), null);
  const setCandyPlus = B.setVar(reg, CANDY, B.add(B.getVar(reg, CANDY), B.listsGetIndex(B.getVar(reg, STATIONS), B.getVar(reg, POS))), null);
  const capHigh = B.ifElseChain([B.gt(B.getVar(reg, CANDY), B.numLit(30))], [B.setVar(reg, CANDY, B.numLit(30), null)], null);
  const capLow = B.ifElseChain([B.lte(B.getVar(reg, CANDY), B.numLit(0))], [B.setVar(reg, CANDY, B.numLit(5), null)], null);
  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, K), B.numLit(1), B.chain(setCandyMinus, setPosNew, setCandyPlus, capHigh, capLow));

  const sayOut = B.say(B.getVar(reg, CANDY), null);
  const top = B.whenFlagClicked(B.chain(initStations, readStations, askK, setK, initRolls, readRolls, setCandy0, setPos0, mainLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-8', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '0 15 -5 15 -10\n2\n1 2', expectedOutput: '30' },
      { input: '0 15 -5 15 -10\n2\n4 3', expectedOutput: '5' },
      { input: '5 5 5 5 5\n1\n1', expectedOutput: '14' },
      { input: '-20 -20 -20 -20 -20\n1\n1', expectedOutput: '5' },
      { input: '0 0 0 0 0\n5\n1 1 1 1 1', expectedOutput: '5' },
    ],
  });
})();

// ---- 114EChaiyi-9：玩具收納挑戰 ----
// 重要：BOXCOUNT一開始是0，第一件玩具進來時「loop j=1 to BOXCOUNT」上界是0——
// Blockly的controls_for在上界為0時實測會跑成2次而非0次，這裡務必guard起來
// （見xml-builder.cjs沒有內建這個guard，呼叫端要自己包if(BOXCOUNT>=1)）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('e9_n', 'n');
  const WEIGHTS = reg.declare('e9_weights', 'weights');
  const I = reg.declare('e9_i', 'i');
  const TMP = reg.declare('e9_tmp', 'tmp');
  const BOXES = reg.declare('e9_boxes', 'boxes');
  const BOXCOUNT = reg.declare('e9_boxcount', 'boxcount');
  const J = reg.declare('e9_j', 'j');
  const W = reg.declare('e9_w', 'w');
  const FOUND = reg.declare('e9_found', 'found');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initWeights = B.setVar(reg, WEIGHTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const readLoop = readLoopInto(reg, WEIGHTS, I, TMP, B.numLit(1), B.getVar(reg, N));

  const initBoxes = B.setVar(reg, BOXES, B.listsRepeat(B.numLit(0), B.numLit(6)), null);
  const initBoxCount = B.setVar(reg, BOXCOUNT, B.numLit(0), null);

  const setW = B.setVar(reg, W, B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I)), null);
  const setFound0 = B.setVar(reg, FOUND, B.numLit(0), null);
  const tryBox = B.ifElseChain(
    [B.and_(B.eq(B.getVar(reg, FOUND), B.numLit(0)), B.lte(B.add(B.listsGetIndex(B.getVar(reg, BOXES), B.getVar(reg, J)), B.getVar(reg, W)), B.numLit(20)))],
    [B.chain(
      B.listsSetIndex(B.getVar(reg, BOXES), B.getVar(reg, J), B.add(B.listsGetIndex(B.getVar(reg, BOXES), B.getVar(reg, J)), B.getVar(reg, W)), null),
      B.setVar(reg, FOUND, B.numLit(1), null)
    )],
    null
  );
  const guardedInner = B.ifElseChain([B.gte(B.getVar(reg, BOXCOUNT), B.numLit(1))],
    [B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, BOXCOUNT), B.numLit(1), tryBox)], null);
  const openNew = B.ifElseChain([B.eq(B.getVar(reg, FOUND), B.numLit(0))],
    [B.chain(B.setVar(reg, BOXCOUNT, B.add(B.getVar(reg, BOXCOUNT), B.numLit(1)), null), B.listsSetIndex(B.getVar(reg, BOXES), B.getVar(reg, BOXCOUNT), B.getVar(reg, W), null))], null);

  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setW, setFound0, guardedInner, openNew));

  const sayOut = B.say(B.getVar(reg, BOXCOUNT), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initWeights, readLoop, initBoxes, initBoxCount, mainLoop, sayOut));
  tasks.push({
    id: '114EChaiyi-9', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n10 10 9 1', expectedOutput: '2' },
      { input: '4\n11 11 11 11', expectedOutput: '4' },
      { input: '5\n19 19 19 1 1', expectedOutput: '3' },
      { input: '3\n20 20 20', expectedOutput: '3' },
      { input: '6\n5 5 5 5 5 5', expectedOutput: '2' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_chaiyi_e.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'chaiyi_e tasks');
