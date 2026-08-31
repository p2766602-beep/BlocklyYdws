const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114EMiaoli.json');

function mkReg() { return B.createVarRegistry(); }

// ---- Task 1: 苗栗項鍊（N份"ML"重複拼接）----
function buildTask1() {
  const reg = mkReg();
  const N = reg.declare('e1_n', 'N');
  const I = reg.declare('e1_i', 'i');
  const OUT = reg.declare('e1_out', 'out');

  const askN = B.askAndWait(reg, '請輸入項鍊尺寸N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initOut = B.setVar(reg, OUT, B.textLit(''), null);
  const appendLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit('ML')]), null));
  const sayOut = B.say(B.getVar(reg, OUT), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initOut, appendLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 2: 點名報數（總和公式找缺號）----
function buildTask2() {
  const reg = mkReg();
  const N = reg.declare('e2_n', 'N');
  const SUM = reg.declare('e2_sum', 'SUM');
  const I = reg.declare('e2_i', 'i');
  const V = reg.declare('e2_v', 'V');

  const askN = B.askAndWait(reg, '請輸入班級總人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initSum = B.setVar(reg, SUM, B.numLit(0), null);
  const askV = B.askAndWait(reg, '請輸入報數座號', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addV = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), B.chain(askV, setV, addV));

  const expected = B.div(B.mul(B.getVar(reg, N), B.add(B.getVar(reg, N), B.numLit(1))), B.numLit(2));
  const sayOut = B.say(B.sub(expected, B.getVar(reg, SUM)), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initSum, readLoop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 3: 最大人數（A/B字串模擬進出，追蹤最大值）----
function buildTask3() {
  const reg = mkReg();
  const S = reg.declare('e3_s', 'S');
  const LEN = reg.declare('e3_len', 'LEN');
  const CUR = reg.declare('e3_cur', 'CUR');
  const MAXV = reg.declare('e3_max', 'MAXV');
  const I = reg.declare('e3_i', 'i');
  const CH = reg.declare('e3_ch', 'CH');

  const askS = B.askAndWait(reg, '請輸入紙上紀錄', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const initCur = B.setVar(reg, CUR, B.numLit(0), null);
  const initMax = B.setVar(reg, MAXV, B.numLit(0), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const updCur = B.ifElseChain(
    [B.eq(B.getVar(reg, CH), B.textLit('A'))],
    [B.setVar(reg, CUR, B.add(B.getVar(reg, CUR), B.numLit(1)), null)],
    B.setVar(reg, CUR, B.sub(B.getVar(reg, CUR), B.numLit(1)), null)
  );
  const updMax = B.ifElseChain([B.gt(B.getVar(reg, CUR), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, CUR), null)], null);
  const loop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, LEN), B.numLit(1), B.chain(setCh, updCur, updMax));

  const sayOut = B.say(B.getVar(reg, MAXV), null);

  const top = B.whenFlagClicked(B.chain(askS, setS, setLen, initCur, initMax, loop, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 跳健康操（兩已排序清單，雙指標找相同身高配對數）----
function buildTask4() {
  const reg = mkReg();
  const NB = reg.declare('e4_nb', 'NB');
  const BOYS = reg.declare('e4_boys', 'BOYS');
  const NG = reg.declare('e4_ng', 'NG');
  const GIRLS = reg.declare('e4_girls', 'GIRLS');
  const I = reg.declare('e4_i', 'i');
  const J = reg.declare('e4_j', 'j');
  const K = reg.declare('e4_k', 'k');
  const MATCH = reg.declare('e4_match', 'MATCH');

  const askNB = B.askAndWait(reg, '請輸入男生人數NB', null);
  const setNB = B.setVar(reg, NB, B.answerBlock(), null);
  const initBoys = B.setVar(reg, BOYS, B.listsRepeat(B.numLit(0), B.getVar(reg, NB)), null);
  const askBoyH = B.askAndWait(reg, '請輸入男生身高', null);
  const fillBoy = B.listsSetIndex(B.getVar(reg, BOYS), B.getVar(reg, K), B.answerBlock(), null);
  const readBoysLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, NB), B.numLit(1), B.chain(askBoyH, fillBoy));

  const askNG = B.askAndWait(reg, '請輸入女生人數NG', null);
  const setNG = B.setVar(reg, NG, B.answerBlock(), null);
  const initGirls = B.setVar(reg, GIRLS, B.listsRepeat(B.numLit(0), B.getVar(reg, NG)), null);
  const askGirlH = B.askAndWait(reg, '請輸入女生身高', null);
  const fillGirl = B.listsSetIndex(B.getVar(reg, GIRLS), B.getVar(reg, K), B.answerBlock(), null);
  const readGirlsLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, NG), B.numLit(1), B.chain(askGirlH, fillGirl));

  const initI = B.setVar(reg, I, B.numLit(1), null);
  const initJ = B.setVar(reg, J, B.numLit(1), null);
  const initMatch = B.setVar(reg, MATCH, B.numLit(0), null);

  const bVal = B.listsGetIndex(B.getVar(reg, BOYS), B.getVar(reg, I));
  const gVal = B.listsGetIndex(B.getVar(reg, GIRLS), B.getVar(reg, J));
  const mergeBody = B.ifElseChain(
    [B.eq(bVal, gVal), B.lt(bVal, gVal)],
    [
      B.chain(
        B.setVar(reg, MATCH, B.add(B.getVar(reg, MATCH), B.numLit(1)), null),
        B.setVar(reg, I, B.add(B.getVar(reg, I), B.numLit(1)), null),
        B.setVar(reg, J, B.add(B.getVar(reg, J), B.numLit(1)), null)
      ),
      B.setVar(reg, I, B.add(B.getVar(reg, I), B.numLit(1)), null),
    ],
    B.setVar(reg, J, B.add(B.getVar(reg, J), B.numLit(1)), null)
  );
  const mergeLoop = B.whileUntil('WHILE', B.and_(B.lte(B.getVar(reg, I), B.getVar(reg, NB)), B.lte(B.getVar(reg, J), B.getVar(reg, NG))), mergeBody);

  const sayOut = B.say(B.getVar(reg, MATCH), null);

  const top = B.whenFlagClicked(B.chain(
    askNB, setNB, initBoys, readBoysLoop,
    askNG, setNG, initGirls, readGirlsLoop,
    initI, initJ, initMatch, mergeLoop, sayOut
  ));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 進位運算（逐位模擬加法，計算進位次數）----
function buildTask5() {
  const reg = mkReg();
  const A = reg.declare('e5_a', 'A');
  const Bn = reg.declare('e5_b', 'Bn');
  const CARRY = reg.declare('e5_carry', 'CARRY');
  const COUNT = reg.declare('e5_count', 'COUNT');
  const DA = reg.declare('e5_da', 'DA');
  const DB = reg.declare('e5_db', 'DB');
  const S = reg.declare('e5_s', 'S');

  const askA = B.askAndWait(reg, '請輸入被加數A', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '請輸入加數B', null);
  const setB = B.setVar(reg, Bn, B.answerBlock(), null);
  const initCarry = B.setVar(reg, CARRY, B.numLit(0), null);
  const initCount = B.setVar(reg, COUNT, B.numLit(0), null);

  const setDa = B.setVar(reg, DA, B.modulo(B.getVar(reg, A), B.numLit(10)), null);
  const setDb = B.setVar(reg, DB, B.modulo(B.getVar(reg, Bn), B.numLit(10)), null);
  const setS = B.setVar(reg, S, B.add(B.add(B.getVar(reg, DA), B.getVar(reg, DB)), B.getVar(reg, CARRY)), null);
  const carryIf = B.ifElseChain(
    [B.gte(B.getVar(reg, S), B.numLit(10))],
    [B.chain(B.setVar(reg, CARRY, B.numLit(1), null), B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null))],
    B.setVar(reg, CARRY, B.numLit(0), null)
  );
  const nextA = B.setVar(reg, A, B.round_('ROUNDDOWN', B.div(B.getVar(reg, A), B.numLit(10))), null);
  const nextB = B.setVar(reg, Bn, B.round_('ROUNDDOWN', B.div(B.getVar(reg, Bn), B.numLit(10))), null);
  const body = B.chain(setDa, setDb, setS, carryIf, nextA, nextB);
  const loop = B.whileUntil('WHILE', B.or_(B.or_(B.gt(B.getVar(reg, A), B.numLit(0)), B.gt(B.getVar(reg, Bn), B.numLit(0))), B.gt(B.getVar(reg, CARRY), B.numLit(0))), body);

  const sayOut = B.say(B.getVar(reg, COUNT), null);

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, initCarry, initCount, loop, sayOut));
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5];

// Task5(索引4)案例9「909\n91」來源TXT預期答案寫「2」，但用進位次數演算法（其餘9筆
// 全數吻合）計算，909+91逐位相加：個位9+1=10進位(1)、十位0+9+1=10進位(2)、百位9+0+1=10
// 進位(3)、千位0+0+1=1不進位，總共3次進位，不是2次。判定為來源資料獨立輸入錯誤，
// 記錄於docs/PDF題目來源勘誤紀錄.md，依演算法結果收錄為3。
function applyErrataFixes(taskIndex, testCases) {
  if (taskIndex === 4) {
    testCases.forEach((tc) => {
      if (tc.input === '909\n91') tc.expectedOutput = '3';
    });
  }
  return testCases;
}

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114EMiaoli-${idx + 1}`,
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

fs.writeFileSync('tasks_miaoli_e.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_miaoli_e.json');
