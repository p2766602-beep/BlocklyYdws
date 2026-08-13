const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114JKeelung.json');

function mkReg() { return B.createVarRegistry(); }

// ---- Task 1: 尋找第K個訊號字母 ----
function buildTask1() {
  const reg = mkReg();
  const S = reg.declare('t1_s', 'S');
  const K = reg.declare('t1_k', 'K');
  const LEN = reg.declare('t1_len', 'len');
  const SEEN = reg.declare('t1_seen', 'seen');
  const DISTINCT = reg.declare('t1_distinct', 'distinct');
  const ANSWER = reg.declare('t1_answer', 'answer');
  const FOUND = reg.declare('t1_found', 'found');
  const I = reg.declare('t1_i', 'i');
  const CHV = reg.declare('t1_chv', 'chv');
  const IDX = reg.declare('t1_idx', 'idx');

  const askS = B.askAndWait(reg, '請輸入字串S', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const askK = B.askAndWait(reg, '請輸入K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const initSeen = B.setVar(reg, SEEN, B.listsRepeat(B.textLit(''), B.getVar(reg, LEN)), null);
  const initDistinct = B.setVar(reg, DISTINCT, B.numLit(0), null);
  const initAnswer = B.setVar(reg, ANSWER, B.textLit(''), null);
  const initFound = B.setVar(reg, FOUND, B.numLit(0), null);

  const setChv = B.setVar(reg, CHV, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setIdx = B.setVar(reg, IDX, B.listsIndexOf(B.getVar(reg, SEEN), B.getVar(reg, CHV)), null);
  const incDistinct = B.setVar(reg, DISTINCT, B.add(B.getVar(reg, DISTINCT), B.numLit(1)), null);
  const setSeenIdx = B.listsSetIndex(B.getVar(reg, SEEN), B.getVar(reg, DISTINCT), B.getVar(reg, CHV), null);
  const recordAnswer = B.chain(B.setVar(reg, ANSWER, B.getVar(reg, CHV), null), B.setVar(reg, FOUND, B.numLit(1), null));
  const checkK = B.ifElseChain([B.and_(B.eq(B.getVar(reg, FOUND), B.numLit(0)), B.eq(B.getVar(reg, DISTINCT), B.getVar(reg, K)))], [recordAnswer], null);
  const newLetterIf = B.ifElseChain([B.eq(B.getVar(reg, IDX), B.numLit(0))], [B.chain(incDistinct, setSeenIdx, checkK)], null);
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, LEN), B.numLit(1), B.chain(setChv, setIdx, newLetterIf));

  const sayAnswer = B.say(B.getVar(reg, ANSWER), null);

  const top = B.whenFlagClicked(B.chain(askS, setS, askK, setK, setLen, initSeen, initDistinct, initAnswer, initFound, scanLoop, sayAnswer));
  return B.assembleXml(reg, top);
}

// ---- Task 2: 到底是誰沒來 ----
function buildTask2() {
  const reg = mkReg();
  const N = reg.declare('t2_n', 'N');
  const K = reg.declare('t2_k', 'K');
  const ATTEND = reg.declare('t2_attend', 'attend');
  const I = reg.declare('t2_i', 'i');
  const V = reg.declare('t2_v', 'v');
  const SEAT = reg.declare('t2_seat', 'seat');
  const OUT = reg.declare('t2_out', 'out');
  const ITEMTXT = reg.declare('t2_itemtxt', 'itemtxt');

  const askN = B.askAndWait(reg, '請輸入總人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '請輸入出席人數K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const initAttend = B.setVar(reg, ATTEND, B.listsRepeat(B.numLit(0), B.getVar(reg, K)), null);
  const askV = B.askAndWait(reg, '請輸入出席座號', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setAttendIdx = B.listsSetIndex(B.getVar(reg, ATTEND), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, K), B.numLit(1), B.chain(askV, setV, setAttendIdx));

  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.getVar(reg, SEAT)]), null);
  const setOutFirst = B.setVar(reg, OUT, B.getVar(reg, ITEMTXT), null);
  const setOutAppend = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ITEMTXT)]), null);
  const appendIf = B.ifElseChain([B.isEmptyText(B.getVar(reg, OUT))], [setOutFirst], setOutAppend);
  const absentIf = B.ifElseChain([B.eq(B.listsIndexOf(B.getVar(reg, ATTEND), B.getVar(reg, SEAT)), B.numLit(0))], [B.chain(setItemTxt, appendIf)], null);
  const seatLoop = B.controlsFor(reg, SEAT, B.numLit(1), B.getVar(reg, N), B.numLit(1), absentIf);

  const sayResult = B.ifElseChain([B.isEmptyText(B.getVar(reg, OUT))], [B.say(B.textLit('全勤'), null)], B.say(B.getVar(reg, OUT), null));

  const top = B.whenFlagClicked(B.chain(askN, setN, askK, setK, initAttend, readLoop, B.setVar(reg, OUT, B.textLit(''), null), seatLoop, sayResult));
  return B.assembleXml(reg, top);
}

// ---- Task 3: 終極特務的動態密碼 (還原: 第i字母往前推移i格, 繞回a-z) ----
function buildTask3() {
  const reg = mkReg();
  const S = reg.declare('t3_s', 'S');
  const LEN = reg.declare('t3_len', 'len');
  const ALPHA = reg.declare('t3_alpha', 'alpha');
  const OUT = reg.declare('t3_out', 'out');
  const I = reg.declare('t3_i', 'i');
  const CHV = reg.declare('t3_chv', 'chv');
  const POS0 = reg.declare('t3_pos0', 'pos0');
  const SHIFT0 = reg.declare('t3_shift0', 'shift0');
  const NEWCH = reg.declare('t3_newch', 'newch');

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => B.textLit(c));
  const initAlpha = B.setVar(reg, ALPHA, B.listsCreateWith(letters), null);

  const askS = B.askAndWait(reg, '請輸入動態暗號', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);

  const setChv = B.setVar(reg, CHV, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setPos0 = B.setVar(reg, POS0, B.sub(B.listsIndexOf(B.getVar(reg, ALPHA), B.getVar(reg, CHV)), B.numLit(1)), null);
  // shift0 = ((pos0 - i) mod 26 + 26) mod 26
  const setShift0 = B.setVar(reg, SHIFT0, B.modulo(B.add(B.modulo(B.sub(B.getVar(reg, POS0), B.getVar(reg, I)), B.numLit(26)), B.numLit(26)), B.numLit(26)), null);
  const setNewCh = B.setVar(reg, NEWCH, B.listsGetIndex(B.getVar(reg, ALPHA), B.add(B.getVar(reg, SHIFT0), B.numLit(1))), null);
  const appendOut = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.getVar(reg, NEWCH)]), null);
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, LEN), B.numLit(1), B.chain(setChv, setPos0, setShift0, setNewCh, appendOut));

  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(initAlpha, askS, setS, setLen, B.setVar(reg, OUT, B.textLit(''), null), scanLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 優質橘子裝箱策略 ----
function buildTask4() {
  const reg = mkReg();
  const QA = reg.declare('t4_qa', 'Qa');
  const QB = reg.declare('t4_qb', 'Qb');
  const QC = reg.declare('t4_qc', 'Qc');
  const N = reg.declare('t4_n', 'N');
  const PA = reg.declare('t4_pa', 'Pa');
  const PB = reg.declare('t4_pb', 'Pb');
  const PC = reg.declare('t4_pc', 'Pc');
  const BOXA = reg.declare('t4_boxa', 'boxa');
  const REMA = reg.declare('t4_rema', 'rema');
  const QBEFF = reg.declare('t4_qbeff', 'qbeff');
  const BOXB = reg.declare('t4_boxb', 'boxb');
  const REMB = reg.declare('t4_remb', 'remb');
  const QCEFF = reg.declare('t4_qceff', 'qceff');
  const BOXC = reg.declare('t4_boxc', 'boxc');
  const TOTAL = reg.declare('t4_total', 'total');

  function ask(prompt, id) {
    return [B.askAndWait(reg, prompt, null), B.setVar(reg, id, B.answerBlock(), null)];
  }

  const reads = [
    ...ask('請輸入優級顆數Qa', QA), ...ask('請輸入良級顆數Qb', QB), ...ask('請輸入普級顆數Qc', QC), ...ask('請輸入每箱容量N', N),
    ...ask('請輸入優級單箱價格Pa', PA), ...ask('請輸入良級單箱價格Pb', PB), ...ask('請輸入普級單箱價格Pc', PC),
  ];

  const computeSteps = [
    B.setVar(reg, BOXA, B.round_('ROUNDDOWN', B.div(B.getVar(reg, QA), B.getVar(reg, N))), null),
    B.setVar(reg, REMA, B.modulo(B.getVar(reg, QA), B.getVar(reg, N)), null),
    B.setVar(reg, QBEFF, B.add(B.getVar(reg, QB), B.getVar(reg, REMA)), null),
    B.setVar(reg, BOXB, B.round_('ROUNDDOWN', B.div(B.getVar(reg, QBEFF), B.getVar(reg, N))), null),
    B.setVar(reg, REMB, B.modulo(B.getVar(reg, QBEFF), B.getVar(reg, N)), null),
    B.setVar(reg, QCEFF, B.add(B.getVar(reg, QC), B.getVar(reg, REMB)), null),
    B.setVar(reg, BOXC, B.round_('ROUNDDOWN', B.div(B.getVar(reg, QCEFF), B.getVar(reg, N))), null),
    B.setVar(reg, TOTAL, B.add(B.add(B.mul(B.getVar(reg, BOXA), B.getVar(reg, PA)), B.mul(B.getVar(reg, BOXB), B.getVar(reg, PB))), B.mul(B.getVar(reg, BOXC), B.getVar(reg, PC))), null),
  ];

  const sayTotal = B.say(B.getVar(reg, TOTAL), null);

  const top = B.whenFlagClicked(B.chain(...reads, ...computeSteps, sayTotal));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 同樂會飲料訂單統計 ----
function buildTask5() {
  const reg = mkReg();
  const N = reg.declare('t5_n', 'N');
  const NAMES = reg.declare('t5_names', 'names');
  const COUNTS = reg.declare('t5_counts', 'counts');
  const DISTINCT = reg.declare('t5_distinct', 'distinct');
  const I = reg.declare('t5_i', 'i');
  const NAME = reg.declare('t5_name', 'name');
  const CNT = reg.declare('t5_cnt', 'cnt');
  const IDX = reg.declare('t5_idx', 'idx');
  const OUT = reg.declare('t5_out', 'out');
  const ITEMTXT = reg.declare('t5_itemtxt', 'itemtxt');

  const askN = B.askAndWait(reg, '請輸入訂購筆數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNames = B.setVar(reg, NAMES, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initCounts = B.setVar(reg, COUNTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initDistinct = B.setVar(reg, DISTINCT, B.numLit(0), null);

  const askName = B.askAndWait(reg, '請輸入飲料名稱', null);
  const setName = B.setVar(reg, NAME, B.answerAsText(), null);
  const askCnt = B.askAndWait(reg, '請輸入杯數', null);
  const setCnt = B.setVar(reg, CNT, B.answerBlock(), null);
  const setIdx = B.setVar(reg, IDX, B.listsIndexOf(B.getVar(reg, NAMES), B.getVar(reg, NAME)), null);

  const newDrink = B.chain(
    B.setVar(reg, DISTINCT, B.add(B.getVar(reg, DISTINCT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, NAMES), B.getVar(reg, DISTINCT), B.getVar(reg, NAME), null),
    B.listsSetIndex(B.getVar(reg, COUNTS), B.getVar(reg, DISTINCT), B.getVar(reg, CNT), null)
  );
  const existDrink = B.listsSetIndex(B.getVar(reg, COUNTS), B.getVar(reg, IDX), B.add(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, IDX)), B.getVar(reg, CNT)), null);
  const drinkIf = B.ifElseChain([B.eq(B.getVar(reg, IDX), B.numLit(0))], [newDrink], existDrink);

  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askName, setName, askCnt, setCnt, setIdx, drinkIf));

  const setItemTxt = B.setVar(reg, ITEMTXT, B.textJoin([B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, I)), B.textLit(' '), B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, I))]), null);
  const setOutFirst = B.setVar(reg, OUT, B.getVar(reg, ITEMTXT), null);
  const setOutAppend = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, ITEMTXT)]), null);
  const outIf = B.ifElseChain([B.eq(B.getVar(reg, I), B.numLit(1))], [setOutFirst], setOutAppend);
  const buildLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, DISTINCT), B.numLit(1), B.chain(setItemTxt, outIf));

  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initNames, initCounts, initDistinct, readLoop, B.setVar(reg, OUT, B.textLit(''), null), buildLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 6: 親等計算機 ----
function buildTask6() {
  const reg = mkReg();
  const N = reg.declare('t6_n', 'N');
  const FATHERS = reg.declare('t6_fathers', 'fathers');
  const SONS = reg.declare('t6_sons', 'sons');
  const QUERY = reg.declare('t6_query', 'query');
  const X = reg.declare('t6_x', 'X');
  const Y = reg.declare('t6_y', 'Y');
  const I = reg.declare('t6_i', 'i');
  const J = reg.declare('t6_j', 'j');

  const ANCX = reg.declare('t6_ancx', 'ancx');
  const DISTX = reg.declare('t6_distx', 'distx');
  const COUNTX = reg.declare('t6_countx', 'countx');
  const ANCY = reg.declare('t6_ancy', 'ancy');
  const DISTY = reg.declare('t6_disty', 'disty');
  const COUNTY = reg.declare('t6_county', 'county');

  const CUR = reg.declare('t6_cur', 'cur');
  const D = reg.declare('t6_d', 'd');
  const STILL = reg.declare('t6_still', 'still');
  const FOUNDFATHER = reg.declare('t6_foundfather', 'foundfather');

  const BEST = reg.declare('t6_best', 'best');
  const FOUNDCOMMON = reg.declare('t6_foundcommon', 'foundcommon');
  const SUM = reg.declare('t6_sum', 'sum');

  const askN = B.askAndWait(reg, '請輸入關係數量N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askFathers = B.askAndWait(reg, '請輸入父親代號序列', null);
  const setFathers = B.setVar(reg, FATHERS, B.answerAsText(), null);
  const askSons = B.askAndWait(reg, '請輸入兒子代號序列', null);
  const setSons = B.setVar(reg, SONS, B.answerAsText(), null);
  const askQuery = B.askAndWait(reg, '請輸入查詢代號XY', null);
  const setQuery = B.setVar(reg, QUERY, B.answerAsText(), null);
  const setX = B.setVar(reg, X, B.charAt(B.getVar(reg, QUERY), B.numLit(1)), null);
  const setY = B.setVar(reg, Y, B.charAt(B.getVar(reg, QUERY), B.numLit(2)), null);

  const initAnc = (ANC, DIST, COUNT) => [
    B.setVar(reg, ANC, B.listsRepeat(B.textLit(''), B.add(B.getVar(reg, N), B.numLit(1))), null),
    B.setVar(reg, DIST, B.listsRepeat(B.numLit(0), B.add(B.getVar(reg, N), B.numLit(1))), null),
    B.setVar(reg, COUNT, B.numLit(0), null),
  ];

  // 找CUR的父親: 掃SONS看誰的兒子代號==CUR, 若找到CUR=FATHERS[j], D+=1, FOUNDFATHER=1
  const findFatherOne = B.ifElseChain(
    [B.and_(B.eq(B.charAt(B.getVar(reg, SONS), B.getVar(reg, J)), B.getVar(reg, CUR)), B.eq(B.getVar(reg, FOUNDFATHER), B.numLit(0)))],
    [B.chain(
      B.setVar(reg, CUR, B.charAt(B.getVar(reg, FATHERS), B.getVar(reg, J)), null),
      B.setVar(reg, D, B.add(B.getVar(reg, D), B.numLit(1)), null),
      B.setVar(reg, FOUNDFATHER, B.numLit(1), null)
    )],
    null
  );
  const findFatherLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1), findFatherOne);

  function buildChainSteps(startVar, ANC, DIST, COUNT) {
    const initSteps = [
      B.setVar(reg, CUR, B.getVar(reg, startVar), null),
      B.setVar(reg, D, B.numLit(0), null),
      B.setVar(reg, COUNT, B.numLit(0), null),
      B.setVar(reg, STILL, B.numLit(1), null),
    ];
    const bodyStep = B.chain(
      B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null),
      B.listsSetIndex(B.getVar(reg, ANC), B.getVar(reg, COUNT), B.getVar(reg, CUR), null),
      B.listsSetIndex(B.getVar(reg, DIST), B.getVar(reg, COUNT), B.getVar(reg, D), null),
      B.setVar(reg, FOUNDFATHER, B.numLit(0), null),
      findFatherLoop,
      B.ifElseChain([B.eq(B.getVar(reg, FOUNDFATHER), B.numLit(0))], [B.setVar(reg, STILL, B.numLit(0), null)], null)
    );
    const whileLoop = B.whileUntil('WHILE', B.eq(B.getVar(reg, STILL), B.numLit(1)), bodyStep);
    return [...initSteps, whileLoop];
  }

  const chainXSteps = buildChainSteps(X, ANCX, DISTX, COUNTX);
  const chainYSteps = buildChainSteps(Y, ANCY, DISTY, COUNTY);

  const initAncXSteps = initAnc(ANCX, DISTX, COUNTX);
  const initAncYSteps = initAnc(ANCY, DISTY, COUNTY);

  const checkPair = B.ifElseChain(
    [B.eq(B.listsGetIndex(B.getVar(reg, ANCX), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, ANCY), B.getVar(reg, J)))],
    [B.chain(
      B.setVar(reg, SUM, B.add(B.listsGetIndex(B.getVar(reg, DISTX), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, DISTY), B.getVar(reg, J))), null),
      B.ifElseChain(
        [B.or_(B.eq(B.getVar(reg, FOUNDCOMMON), B.numLit(0)), B.lt(B.getVar(reg, SUM), B.getVar(reg, BEST)))],
        [B.chain(B.setVar(reg, BEST, B.getVar(reg, SUM), null), B.setVar(reg, FOUNDCOMMON, B.numLit(1), null))],
        null
      )
    )],
    null
  );
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, COUNTY), B.numLit(1), checkPair);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, COUNTX), B.numLit(1), innerLoop);

  const sayResult = B.ifElseChain([B.eq(B.getVar(reg, FOUNDCOMMON), B.numLit(1))], [B.say(B.getVar(reg, BEST), null)], B.say(B.textLit('不是親戚'), null));

  const top = B.whenFlagClicked(B.chain(
    askN, setN, askFathers, setFathers, askSons, setSons, askQuery, setQuery, setX, setY,
    ...initAncXSteps, ...chainXSteps, ...initAncYSteps, ...chainYSteps,
    B.setVar(reg, FOUNDCOMMON, B.numLit(0), null), B.setVar(reg, BEST, B.numLit(0), null),
    outerLoop, sayResult
  ));
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5, buildTask6];

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114JKeelung-${idx + 1}`,
    title: p.fullTitle,
    problemTitle: p.fullTitle,
    difficulty: 'L3',
    description: p.description,
    inputDescription: p.inputDescription,
    outputDescription: p.outputDescription,
    examples: p.examples,
    xml,
    testCases: p.testCases,
  };
});

fs.writeFileSync('tasks_keelung_j.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_keelung_j.json');
