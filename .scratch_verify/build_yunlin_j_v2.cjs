// 修正版：114JYunlin原本9題內容跟114JChaiyiC（嘉義縣）幾乎完全重複（raw txtFile源頭
// 就複製錯），使用者已提供正確的雲林縣原始題目（txtFile/114JYunlin.txt，5題），這支腳本
// 重新產生正確的starterXml參考解答，取代舊的9題錯誤內容。
const fs = require('fs');
const B = require('./xml-builder.cjs');

const parsed = require('./parsed_114JYunlin_new.json');

function mkReg() { return B.createVarRegistry(); }

// ---- Task 1: 秒數轉換 ----
function buildTask1() {
  const reg = mkReg();
  const N = reg.declare('t1_n', 'N');
  const MINS = reg.declare('t1_mins', 'mins');
  const SECS = reg.declare('t1_secs', 'secs');

  const askN = B.askAndWait(reg, '請輸入總秒數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setMins = B.setVar(reg, MINS, B.round_('ROUNDDOWN', B.div(B.getVar(reg, N), B.numLit(60))), null);
  const setSecs = B.setVar(reg, SECS, B.modulo(B.getVar(reg, N), B.numLit(60)), null);
  const sayOut = B.say(B.textJoin([B.getVar(reg, MINS), B.textLit(' 分 '), B.getVar(reg, SECS), B.textLit(' 秒')]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, setMins, setSecs, sayOut));
  return B.assembleXml(reg, top);
}

// ---- Task 2: 分段費率計算 ----
function buildTask2() {
  const reg = mkReg();
  const N = reg.declare('t2_n', 'N');
  const FEE = reg.declare('t2_fee', 'fee');
  const FEER = reg.declare('t2_feer', 'feer');

  const askN = B.askAndWait(reg, '請輸入本月用電度數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);

  const tier1 = B.setVar(reg, FEE, B.mul(B.getVar(reg, N), B.numLit(1.68)), null);
  const tier2 = B.setVar(
    reg, FEE,
    B.add(B.mul(B.numLit(100), B.numLit(1.68)), B.mul(B.sub(B.getVar(reg, N), B.numLit(100)), B.numLit(2.45))),
    null
  );
  const tier3 = B.setVar(
    reg, FEE,
    B.add(
      B.add(B.mul(B.numLit(100), B.numLit(1.68)), B.mul(B.numLit(200), B.numLit(2.45))),
      B.mul(B.sub(B.getVar(reg, N), B.numLit(300)), B.numLit(3.70))
    ),
    null
  );
  const tierIf = B.ifElseChain(
    [B.lte(B.getVar(reg, N), B.numLit(100)), B.lte(B.getVar(reg, N), B.numLit(300))],
    [tier1, tier2],
    tier3
  );
  const setFeeR = B.setVar(reg, FEER, B.round_('ROUND', B.getVar(reg, FEE)), null);
  const sayFee = B.say(B.getVar(reg, FEER), null);

  const errBranch = B.say(B.textLit('ERROR'), null);
  const okBranch = B.chain(tierIf, setFeeR, sayFee);
  const mainIf = B.ifElseChain([B.lt(B.getVar(reg, N), B.numLit(0))], [errBranch], okBranch);

  const top = B.whenFlagClicked(B.chain(askN, setN, mainIf));
  return B.assembleXml(reg, top);
}

// ---- Task 3: BMI 健康判定 ----
function buildTask3() {
  const reg = mkReg();
  const W = reg.declare('t3_w', 'W');
  const H = reg.declare('t3_h', 'H');
  const BMI = reg.declare('t3_bmi', 'bmi');

  const askW = B.askAndWait(reg, '請輸入體重(公斤)', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const askH = B.askAndWait(reg, '請輸入身高(公尺)', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);

  // 浮點數誤差防護：61.44/(1.6*1.6)理論上剛好是24，但IEEE754運算會得到
  // 23.999999999999993，直接lt(BMI,24)會誤判成「正常」而非邊界值該有的「過重」。
  // 先乘1000取整數再除1000，四捨五入到小數第3位消除雜訊，不影響題目要求的精確度。
  const rawBmi = B.div(B.getVar(reg, W), B.mul(B.getVar(reg, H), B.getVar(reg, H)));
  const setBmi = B.setVar(reg, BMI, B.div(B.round_('ROUND', B.mul(rawBmi, B.numLit(1000))), B.numLit(1000)), null);
  const categoryIf = B.ifElseChain(
    [B.lt(B.getVar(reg, BMI), B.numLit(18.5)), B.lt(B.getVar(reg, BMI), B.numLit(24)), B.lt(B.getVar(reg, BMI), B.numLit(27))],
    [B.say(B.textLit('過輕'), null), B.say(B.textLit('正常'), null), B.say(B.textLit('過重'), null)],
    B.say(B.textLit('肥胖'), null)
  );
  const okBranch = B.chain(setBmi, categoryIf);

  const errBranch = B.say(B.textLit('ERROR'), null);
  const invalidCond = B.or_(B.lte(B.getVar(reg, W), B.numLit(0)), B.lte(B.getVar(reg, H), B.numLit(0)));
  const mainIf = B.ifElseChain([invalidCond], [errBranch], okBranch);

  const top = B.whenFlagClicked(B.chain(askW, setW, askH, setH, mainIf));
  return B.assembleXml(reg, top);
}

// ---- Task 4: 成績統計 ----
function buildTask4() {
  const reg = mkReg();
  const N = reg.declare('t4_n', 'N');
  const SCORES = reg.declare('t4_scores', 'scores');
  const HASNEG = reg.declare('t4_hasneg', 'hasneg');
  const I = reg.declare('t4_i', 'i');
  const V = reg.declare('t4_v', 'v');
  const J = reg.declare('t4_j', 'j');
  const SUM = reg.declare('t4_sum', 'sum');
  const AVG = reg.declare('t4_avg', 'avg');
  const K = reg.declare('t4_k', 'k');
  const CNT = reg.declare('t4_cnt', 'cnt');

  const askN = B.askAndWait(reg, '請輸入學生人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);

  const initScores = B.setVar(reg, SCORES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initHasNeg = B.setVar(reg, HASNEG, B.numLit(0), null);
  const askV = B.askAndWait(reg, '請輸入分數', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setScoreIdx = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.getVar(reg, V), null);
  const negCheck = B.ifElseChain([B.lt(B.getVar(reg, V), B.numLit(0))], [B.setVar(reg, HASNEG, B.numLit(1), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setScoreIdx, negCheck));

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, J))), null);
  const sumLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1), addSum);
  const setAvg = B.setVar(reg, AVG, B.round_('ROUND', B.div(B.getVar(reg, SUM), B.getVar(reg, N))), null);

  const setCnt0 = B.setVar(reg, CNT, B.numLit(0), null);
  const countCheck = B.ifElseChain([B.lt(B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, K)), B.getVar(reg, AVG))], [B.setVar(reg, CNT, B.add(B.getVar(reg, CNT), B.numLit(1)), null)], null);
  const countLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, N), B.numLit(1), countCheck);

  const sayResult = B.say(B.textJoin([B.getVar(reg, AVG), B.textLit(' '), B.getVar(reg, CNT)]), null);

  const negBranch = B.say(B.textLit('ERROR'), null);
  const okBranch = B.chain(setSum0, sumLoop, setAvg, setCnt0, countLoop, sayResult);
  const negIf = B.ifElseChain([B.eq(B.getVar(reg, HASNEG), B.numLit(1))], [negBranch], okBranch);

  const validBranch = B.chain(initScores, initHasNeg, readLoop, negIf);
  const errBranch = B.say(B.textLit('ERROR'), null);
  const mainIf = B.ifElseChain([B.lte(B.getVar(reg, N), B.numLit(0))], [errBranch], validBranch);

  const top = B.whenFlagClicked(B.chain(askN, setN, mainIf));
  return B.assembleXml(reg, top);
}

// ---- Task 5: 手機電量充電模擬 ----
function buildTask5() {
  const reg = mkReg();
  const Bv = reg.declare('t5_b', 'B');
  const T = reg.declare('t5_t', 'T');
  const FINAL = reg.declare('t5_final', 'final');

  const askB = B.askAndWait(reg, '請輸入目前電量B', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);
  const askT = B.askAndWait(reg, '請輸入充電時間T', null);
  const setT = B.setVar(reg, T, B.answerBlock(), null);

  const raw = B.add(B.getVar(reg, Bv), B.mul(B.numLit(2), B.getVar(reg, T)));
  const setFinal = B.setVar(reg, FINAL, B.ternary(B.gt(raw, B.numLit(100)), B.numLit(100), raw), null);
  const sayFinal = B.say(B.textJoin([B.getVar(reg, FINAL), B.textLit('%')]), null);

  const invalidCond = B.or_(
    B.or_(B.lt(B.getVar(reg, Bv), B.numLit(0)), B.gt(B.getVar(reg, Bv), B.numLit(100))),
    B.or_(B.lt(B.getVar(reg, T), B.numLit(0)), B.gt(B.getVar(reg, T), B.numLit(300)))
  );
  const errBranch = B.say(B.textLit('ERROR'), null);
  const okBranch = B.chain(setFinal, sayFinal);
  const mainIf = B.ifElseChain([invalidCond], [errBranch], okBranch);

  const top = B.whenFlagClicked(B.chain(askB, setB, askT, setT, mainIf));
  return B.assembleXml(reg, top);
}

const builders = [buildTask1, buildTask2, buildTask3, buildTask4, buildTask5];

const tasks = parsed.map((p, idx) => {
  const xml = builders[idx]();
  return {
    id: `114JYunlin-${idx + 1}`,
    title: p.fullTitle,
    problemTitle: p.fullTitle,
    difficulty: idx === 0 || idx === 4 ? 'L1' : 'L2',
    description: p.description,
    inputDescription: p.inputDescription || '',
    outputDescription: p.outputDescription || '',
    examples: p.examples,
    xml,
    testCases: p.testCases,
  };
});

fs.writeFileSync('tasks_yunlin_j.json', JSON.stringify(tasks, null, 2));
console.log('Built', tasks.length, 'tasks -> tasks_yunlin_j.json (v2, 修正版)');
