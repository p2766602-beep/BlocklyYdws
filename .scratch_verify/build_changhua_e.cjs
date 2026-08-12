const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 綠蔭道路 —— 樹苗數=ceil(道路長度/間距)+1(起點先種一棵)。
(function () {
  const reg = B.createVarRegistry();
  const LEN = reg.declare('c1_len', 'len');
  const GAP = reg.declare('c1_gap', 'gap');
  const COUNT = reg.declare('c1_count', 'count');

  const askLen = B.askAndWait(reg, '請輸入道路長度與種樹間距', null);
  const setLen = B.setVar(reg, LEN, B.answerBlock(), null);
  const askGap = B.askAndWait(reg, '', null);
  const setGap = B.setVar(reg, GAP, B.answerBlock(), null);
  const setCount = B.setVar(reg, COUNT, B.add(B.round_('ROUNDUP', B.div(B.getVar(reg, LEN), B.getVar(reg, GAP))), B.numLit(1)), null);

  const top = B.whenFlagClicked(B.chain(askLen, setLen, askGap, setGap, setCount, B.say(B.getVar(reg, COUNT), null)));
  tasks.push({
    id: 'Changhua-E-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '24 8', expectedOutput: '4' },
      { input: '101 10', expectedOutput: '12' },
      { input: '149 30', expectedOutput: '6' },
      { input: '10 5', expectedOutput: '3' },
      { input: '11 5', expectedOutput: '4' },
      { input: '100 100', expectedOutput: '2' },
      { input: '99 100', expectedOutput: '2' },
      { input: '200 50', expectedOutput: '5' },
      { input: '201 50', expectedOutput: '6' },
      { input: '1000 1', expectedOutput: '1001' },
    ],
  });
})();

// 2. 最萌身高差 —— 固定7個身高，最大值減最小值。
(function () {
  const reg = B.createVarRegistry();
  const V = reg.declare('c2_v', 'v');
  const I = reg.declare('c2_i', 'i');
  const MAXV = reg.declare('c2_max', 'maxv');
  const MINV = reg.declare('c2_min', 'minv');

  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);
  const askV = B.askAndWait(reg, '請輸入七矮人身高', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(7), B.numLit(1), B.chain(askV, setV, ifMax, ifMin));

  const top = B.whenFlagClicked(B.chain(setMax0, setMin0, readLoop, B.say(B.sub(B.getVar(reg, MAXV), B.getVar(reg, MINV)), null)));
  tasks.push({
    id: 'Changhua-E-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '105 98 110 102 99 108 101', expectedOutput: '12' },
      { input: '140 135 138 133 130 137 61', expectedOutput: '79' },
      { input: '60 76 74 72 70 68 78', expectedOutput: '18' },
      { input: '130 110 115 120 125 118 112', expectedOutput: '20' },
      { input: '100 101 102 103 104 105 106', expectedOutput: '6' },
      { input: '30 40 50 60 70 80 90', expectedOutput: '60' },
      { input: '140 130 120 110 100 90 80', expectedOutput: '60' },
      { input: '30 140 50 60 70 80 90', expectedOutput: '110' },
      { input: '100 100 100 100 100 100 100', expectedOutput: '0' },
      { input: '55 55 55 55 55 30 140', expectedOutput: '110' },
    ],
  });
})();

// 3. 秒數轉換 —— h=floor(sec/3600), m=floor((sec%3600)/60), s=sec%60。
(function () {
  const reg = B.createVarRegistry();
  const SEC = reg.declare('c3_sec', 'sec');
  const H = reg.declare('c3_h', 'h');
  const M = reg.declare('c3_m', 'm');
  const S = reg.declare('c3_s', 's');

  const askSec = B.askAndWait(reg, '請輸入總秒數', null);
  const setSec = B.setVar(reg, SEC, B.answerBlock(), null);
  const setH = B.setVar(reg, H, B.round_('ROUNDDOWN', B.div(B.getVar(reg, SEC), B.numLit(3600))), null);
  const setM = B.setVar(reg, M, B.round_('ROUNDDOWN', B.div(B.modulo(B.getVar(reg, SEC), B.numLit(3600)), B.numLit(60))), null);
  const setS = B.setVar(reg, S, B.modulo(B.getVar(reg, SEC), B.numLit(60)), null);

  const top = B.whenFlagClicked(B.chain(askSec, setSec, setH, setM, setS, B.say(B.textJoin([B.getVar(reg, H), B.textLit(' '), B.getVar(reg, M), B.textLit(' '), B.getVar(reg, S)]), null)));
  tasks.push({
    id: 'Changhua-E-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '7325', expectedOutput: '2 2 5' },
      { input: '10000', expectedOutput: '2 46 40' },
      { input: '86399', expectedOutput: '23 59 59' },
      { input: '3661', expectedOutput: '1 1 1' },
      { input: '59', expectedOutput: '0 0 59' },
      { input: '3600', expectedOutput: '1 0 0' },
      { input: '60', expectedOutput: '0 1 0' },
      { input: '0', expectedOutput: '0 0 0' },
      { input: '3599', expectedOutput: '0 59 59' },
      { input: '7260', expectedOutput: '2 1 0' },
    ],
  });
})();

// 4. 協力車分配 —— 2人車x+3人車y=總車數，2x+3y=總人數，解得x=3*總車數-總人數。
(function () {
  const reg = B.createVarRegistry();
  const PEOPLE = reg.declare('c4_people', 'people');
  const BIKES = reg.declare('c4_bikes', 'bikes');
  const TWO = reg.declare('c4_two', 'two');

  const askPeople = B.askAndWait(reg, '請輸入全班人數', null);
  const setPeople = B.setVar(reg, PEOPLE, B.answerBlock(), null);
  const askBikes = B.askAndWait(reg, '', null);
  const setBikes = B.setVar(reg, BIKES, B.answerBlock(), null);
  const setTwo = B.setVar(reg, TWO, B.sub(B.mul(B.numLit(3), B.getVar(reg, BIKES)), B.getVar(reg, PEOPLE)), null);

  const top = B.whenFlagClicked(B.chain(askPeople, setPeople, askBikes, setBikes, setTwo, B.say(B.getVar(reg, TWO), null)));
  tasks.push({
    id: 'Changhua-E-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '51 20', expectedOutput: '9' },
      { input: '49 20', expectedOutput: '11' },
      { input: '62 25', expectedOutput: '13' },
      { input: '5 2', expectedOutput: '1' },
      { input: '8 4', expectedOutput: '4' },
      { input: '6 2', expectedOutput: '0' },
      { input: '30 10', expectedOutput: '0' },
      { input: '20 10', expectedOutput: '10' },
      { input: '25 10', expectedOutput: '5' },
      { input: '100 40', expectedOutput: '20' },
    ],
  });
})();

// 5. 數橘子 —— 已知除以7,5,3的餘數，求最小的n>10同時滿足三個餘數(窮舉)。
(function () {
  const reg = B.createVarRegistry();
  const R7 = reg.declare('c5_r7', 'r7');
  const R5 = reg.declare('c5_r5', 'r5');
  const R3 = reg.declare('c5_r3', 'r3');
  const N = reg.declare('c5_n', 'n');
  const FOUND = reg.declare('c5_found', 'found');
  const ANSWER = reg.declare('c5_answer', 'answer');

  const askR7 = B.askAndWait(reg, '請輸入大袋子剩餘數', null);
  const setR7 = B.setVar(reg, R7, B.answerBlock(), null);
  const askR5 = B.askAndWait(reg, '', null);
  const setR5 = B.setVar(reg, R5, B.answerBlock(), null);
  const askR3 = B.askAndWait(reg, '', null);
  const setR3 = B.setVar(reg, R3, B.answerBlock(), null);
  const setFound0 = B.setVar(reg, FOUND, B.numLit(0), null);

  const matchCond = B.and_(
    B.and_(B.eq(B.modulo(B.getVar(reg, N), B.numLit(7)), B.getVar(reg, R7)), B.eq(B.modulo(B.getVar(reg, N), B.numLit(5)), B.getVar(reg, R5))),
    B.eq(B.modulo(B.getVar(reg, N), B.numLit(3)), B.getVar(reg, R3))
  );
  const setFoundAnswer = B.chain(B.setVar(reg, ANSWER, B.getVar(reg, N), null), B.setVar(reg, FOUND, B.numLit(1), null));
  const checkBody = B.ifElseChain([B.and_(B.eq(B.getVar(reg, FOUND), B.numLit(0)), matchCond)], [setFoundAnswer], null);
  const searchLoop = B.controlsFor(reg, N, B.numLit(11), B.numLit(500), B.numLit(1), checkBody);

  const top = B.whenFlagClicked(B.chain(askR7, setR7, askR5, setR5, askR3, setR3, setFound0, searchLoop, B.say(B.getVar(reg, ANSWER), null)));
  tasks.push({
    id: 'Changhua-E-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3 2 1', expectedOutput: '52' },
      { input: '2 1 2', expectedOutput: '86' },
      { input: '2 4 0', expectedOutput: '114' },
      { input: '1 3 2', expectedOutput: '113' },
      { input: '1 0 0', expectedOutput: '15' },
      { input: '4 3 0', expectedOutput: '18' },
      { input: '0 0 1', expectedOutput: '70' },
      { input: '1 1 1', expectedOutput: '106' },
      { input: '6 4 2', expectedOutput: '104' },
      { input: '0 0 0', expectedOutput: '105' },
    ],
  });
})();

// 6. 禮物多數決 —— 5種禮物投票計數，找票數最高的編號與票數(保證無平手)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c6_n', 'N');
  const COUNTS = reg.declare('c6_counts', 'counts');
  const V = reg.declare('c6_v', 'v');
  const I = reg.declare('c6_i', 'i');
  const BESTID = reg.declare('c6_bestid', 'bestid');
  const BESTV = reg.declare('c6_bestv', 'bestv');

  const askN = B.askAndWait(reg, '請輸入投票人數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initCounts = B.setVar(reg, COUNTS, B.listsCreateWith([B.numLit(0), B.numLit(0), B.numLit(0), B.numLit(0), B.numLit(0)]), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const bumpCount = B.listsSetIndex(B.getVar(reg, COUNTS), B.getVar(reg, V), B.add(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, V)), B.numLit(1)), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, bumpCount));

  const setBestV0 = B.setVar(reg, BESTV, B.numLit(-1), null);
  const ifBest = B.ifElseChain(
    [B.gt(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, I)), B.getVar(reg, BESTV))],
    [B.chain(B.setVar(reg, BESTV, B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, I)), null), B.setVar(reg, BESTID, B.getVar(reg, I), null))],
    null
  );
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(5), B.numLit(1), ifBest);

  const top = B.whenFlagClicked(B.chain(askN, setN, initCounts, readLoop, setBestV0, scanLoop, B.say(B.textJoin([B.getVar(reg, BESTID), B.textLit(' '), B.getVar(reg, BESTV)]), null)));
  tasks.push({
    id: 'Changhua-E-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '8\n2 4 4 1 4 1 4 3', expectedOutput: '4 4' },
      { input: '7\n5 5 2 4 3 2 5', expectedOutput: '5 3' },
      { input: '9\n1 2 2 4 2 2 2 2 3', expectedOutput: '2 6' },
      { input: '10\n3 3 3 3 3 1 1 1 2 2', expectedOutput: '3 5' },
      { input: '3\n1 1 1', expectedOutput: '1 3' },
      { input: '7\n5 5 5 2 2 2 5', expectedOutput: '5 4' },
      { input: '5\n1 2 3 4 1', expectedOutput: '1 2' },
      { input: '5\n1 2 3 2 4', expectedOutput: '2 2' },
      { input: '11\n1 1 1 2 2 2 3 3 3 4 4', expectedOutput: '1 3' },
      { input: '1\n5', expectedOutput: '5 1' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_changhua_e.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'changhua_e tasks');
