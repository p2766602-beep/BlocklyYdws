const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 校外教學合照大挑戰 —— N!階乘。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c1_n', 'N');
  const I = reg.declare('c1_i', 'i');
  const RESULT = reg.declare('c1_result', 'result');

  const askN = B.askAndWait(reg, '請輸入人數N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setResult0 = B.setVar(reg, RESULT, B.numLit(1), null);
  const mulStep = B.setVar(reg, RESULT, B.mul(B.getVar(reg, RESULT), B.getVar(reg, I)), null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), mulStep);

  const top = B.whenFlagClicked(B.chain(askN, setN, setResult0, forLoop, B.say(B.getVar(reg, RESULT), null)));
  tasks.push({
    id: 'Changhua-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '7', expectedOutput: '5040' },
      { input: '6', expectedOutput: '720' },
      { input: '20', expectedOutput: '2432902008176640000' },
      { input: '3', expectedOutput: '6' },
      { input: '4', expectedOutput: '24' },
      { input: '9', expectedOutput: '362880' },
      { input: '10', expectedOutput: '3628800' },
      { input: '12', expectedOutput: '479001600' },
      { input: '15', expectedOutput: '1307674368000' },
      { input: '19', expectedOutput: '121645100408832000' },
    ],
  });
})();

// 2. 向左走向右走 —— 迴文判斷。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('c2_s', 'S');
  const LEN = reg.declare('c2_len', 'len');
  const I = reg.declare('c2_i', 'i');
  const ISPALIN = reg.declare('c2_ispalin', 'ispalin');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const setIsPalin1 = B.setVar(reg, ISPALIN, B.numLit(1), null);
  const mismatchIf = B.ifElseChain(
    [B.neq(B.charAt(B.getVar(reg, S), B.getVar(reg, I)), B.charAt(B.getVar(reg, S), B.add(B.sub(B.getVar(reg, LEN), B.getVar(reg, I)), B.numLit(1))))],
    [B.setVar(reg, ISPALIN, B.numLit(0), null)],
    null
  );
  const halfLen = B.round_('ROUNDDOWN', B.div(B.getVar(reg, LEN), B.numLit(2)));
  const checkLoop = B.controlsFor(reg, I, B.numLit(1), halfLen, B.numLit(1), mismatchIf);
  const resultIf = B.ifElseChain([B.eq(B.getVar(reg, ISPALIN), B.numLit(1))], [B.say(B.textLit('是迴文'), null)], B.say(B.textLit('不是迴文'), null));

  const top = B.whenFlagClicked(B.chain(askS, setS, setLen, setIsPalin1, checkLoop, resultIf));
  tasks.push({
    id: 'Changhua-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '123abcab321', expectedOutput: '不是迴文' },
      { input: 'top1001pot', expectedOutput: '是迴文' },
      { input: 'amanaplanacanalpanama', expectedOutput: '是迴文' },
      { input: 'a', expectedOutput: '是迴文' },
      { input: 'ab', expectedOutput: '不是迴文' },
      { input: 'racecar', expectedOutput: '是迴文' },
      // 來源TXT此2筆為19~20位純數字迴文字串，但interaction_answer會把「看起來像數字」的輸入
      // 自動用Number()強制轉型（見xml-builder.cjs註解），超過JS安全整數上限(2^53≈9.007e15，
      // 約16位數)會精度遺失，例如"...654321"結尾會被轉成"...654400"，導致迴文判斷失真——
      // 這是平台interaction_answer機制的固有限制，任何解法都無法在XML層面繞過（除非平台本身
      // 改用純字串讀取，不做自動數字轉型）。改用15位數以內、同樣是長數字迴文的等效測資，
      // 避免觸發此限制，同時仍測試「長數字迴文」的原始出題意圖。
      { input: '123456787654321', expectedOutput: '是迴文' },
      { input: '9876543456789', expectedOutput: '是迴文' },
      { input: 'a1b2c3d4e5f6g7h8i9j0', expectedOutput: '不是迴文' },
      { input: 'madamimadam', expectedOutput: '是迴文' },
    ],
  });
})();

// 3. 生命值的最終審判 —— 依序處理+/-字元，一旦HP<0立刻停止並輸出Error。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('c3_h', 'H');
  const N = reg.declare('c3_n', 'N');
  const EVENTS = reg.declare('c3_events', 'events');
  const I = reg.declare('c3_i', 'i');
  const CH = reg.declare('c3_ch', 'ch');
  const FAILED = reg.declare('c3_failed', 'failed');

  const askH = B.askAndWait(reg, '請輸入初始生命值', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '請輸入回合數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askEvents = B.askAndWait(reg, '請輸入事件符號', null);
  const setEvents = B.setVar(reg, EVENTS, B.answerAsText(), null);
  const setFailed0 = B.setVar(reg, FAILED, B.numLit(0), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, EVENTS), B.getVar(reg, I)), null);
  const applyEvent = B.ifElseChain(
    [B.eq(B.getVar(reg, CH), B.textLit('+'))],
    [B.setVar(reg, H, B.add(B.getVar(reg, H), B.numLit(10)), null)],
    B.setVar(reg, H, B.sub(B.getVar(reg, H), B.numLit(5)), null)
  );
  const checkFail = B.ifElseChain([B.lt(B.getVar(reg, H), B.numLit(0))], [B.setVar(reg, FAILED, B.numLit(1), null)], null);
  const eventBody = B.ifElseChain([B.eq(B.getVar(reg, FAILED), B.numLit(0))], [B.chain(setCh, applyEvent, checkFail)], null);
  const eventLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), eventBody);

  const resultIf = B.ifElseChain([B.eq(B.getVar(reg, FAILED), B.numLit(1))], [B.say(B.textLit('Error'), null)], B.say(B.getVar(reg, H), null));

  const top = B.whenFlagClicked(B.chain(askH, setH, askN, setN, askEvents, setEvents, setFailed0, eventLoop, resultIf));
  tasks.push({
    id: 'Changhua-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1234\n28\n+-+-++--++-+----++--++------', expectedOutput: '1259' },
      { input: '500\n33\n++++++-++++----++--++--+++---', expectedOutput: '590' },
      { input: '30\n16\n-------++-------', expectedOutput: 'Error' },
      { input: '100\n7\n+-+-++-', expectedOutput: '125' },
      { input: '10\n3\n---', expectedOutput: 'Error' },
      { input: '100\n10\n++++++++++', expectedOutput: '200' },
      { input: '100\n20\n--------------------', expectedOutput: '0' },
      { input: '100\n21\n---------------------', expectedOutput: 'Error' },
      { input: '3000\n100\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-', expectedOutput: '3250' },
      { input: '15\n4\n----', expectedOutput: 'Error' },
    ],
  });
})();

// 4. 科技新創的擴張佈局 —— 費氏數列 0,1,1,2,3,5,...(第N項，N從1開始)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c4_n', 'N');
  const A = reg.declare('c4_a', 'a');
  const Bv = reg.declare('c4_b', 'b');
  const TMP = reg.declare('c4_tmp', 'tmp');
  const I = reg.declare('c4_i', 'i');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setA0 = B.setVar(reg, A, B.numLit(0), null);
  const setB0 = B.setVar(reg, Bv, B.numLit(1), null);
  const stepBody = B.chain(B.setVar(reg, TMP, B.add(B.getVar(reg, A), B.getVar(reg, Bv)), null), B.setVar(reg, A, B.getVar(reg, Bv), null), B.setVar(reg, Bv, B.getVar(reg, TMP), null));
  const stepLoop = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(1))], [B.controlsFor(reg, I, B.numLit(2), B.getVar(reg, N), B.numLit(1), stepBody)], null);
  // 序列為0,1,1,2,3,5,...(0-indexed)，B從初始值seq[1]=1開始，每步迴圈推進一位；
  // N=1時迴圈不執行，B仍是初始值1=seq[1]，剛好就是答案，不需要特別處理N=1。
  const sayResult = B.say(B.getVar(reg, Bv), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, setA0, setB0, stepLoop, sayResult));
  tasks.push({
    id: 'Changhua-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '11', expectedOutput: '89' },
      { input: '15', expectedOutput: '610' },
      { input: '25', expectedOutput: '75025' },
      { input: '1', expectedOutput: '1' },
      { input: '2', expectedOutput: '1' },
      { input: '3', expectedOutput: '2' },
      { input: '4', expectedOutput: '3' },
      { input: '5', expectedOutput: '5' },
      { input: '10', expectedOutput: '55' },
      { input: '30', expectedOutput: '832040' },
    ],
  });
})();

// 5. 捉迷藏 —— 最長連續0的長度。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c5_n', 'N');
  const V = reg.declare('c5_v', 'v');
  const I = reg.declare('c5_i', 'i');
  const CURLEN = reg.declare('c5_curlen', 'curlen');
  const BEST = reg.declare('c5_best', 'best');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setCurLen0 = B.setVar(reg, CURLEN, B.numLit(0), null);
  const setBest0 = B.setVar(reg, BEST, B.numLit(0), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const extendRun = B.chain(B.setVar(reg, CURLEN, B.add(B.getVar(reg, CURLEN), B.numLit(1)), null), B.ifElseChain([B.gt(B.getVar(reg, CURLEN), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, CURLEN), null)], null));
  const breakRun = B.setVar(reg, CURLEN, B.numLit(0), null);
  const stepIf = B.ifElseChain([B.eq(B.getVar(reg, V), B.numLit(0))], [extendRun], breakRun);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, stepIf));

  const top = B.whenFlagClicked(B.chain(askN, setN, setCurLen0, setBest0, readLoop, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'Changhua-J-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6\n0 0 1 0 1 0', expectedOutput: '2' },
      { input: '8\n1 0 0 0 0 1 0 0', expectedOutput: '4' },
      { input: '9\n0 1 0 1 0 0 0 1 0', expectedOutput: '3' },
      { input: '7\n0 1 1 0 0 0 1', expectedOutput: '3' },
      { input: '12\n1 0 1 0 0 1 0 0 0 0 1 1', expectedOutput: '4' },
      { input: '5\n1 1 1 1 1', expectedOutput: '0' },
      { input: '5\n0 0 0 0 0', expectedOutput: '5' },
      { input: '10\n0 1 0 0 1 0 0 0 1 0', expectedOutput: '3' },
      { input: '1\n0', expectedOutput: '1' },
      { input: '1\n1', expectedOutput: '0' },
    ],
  });
})();

// 6. 停車場計費器 —— <=30分免費，否則ceil(分鐘/60)*40，上限300。
// 注意：HHMM輸入若當文字讀(answerAsText)，interaction_answer仍會在textJoin接手前就先
// 把「看起來像數字」的輸入用Number()強制轉型，前導0("0907"→907)已經遺失，
// answerAsText()救不回來(詳見xml-builder.cjs註解)。改用「直接當數字讀」反而更穩健：
// 907這個數值本身就等於HH*100+MM(09*100+07=907)，用除法/餘數還原時序不受前導0影響。
(function () {
  const reg = B.createVarRegistry();
  const T1 = reg.declare('c6_t1', 'T1');
  const T2 = reg.declare('c6_t2', 'T2');
  const H1 = reg.declare('c6_h1', 'h1');
  const M1 = reg.declare('c6_m1', 'm1');
  const H2 = reg.declare('c6_h2', 'h2');
  const M2 = reg.declare('c6_m2', 'm2');
  const DUR = reg.declare('c6_dur', 'dur');
  const FEE = reg.declare('c6_fee', 'fee');
  const HOURS = reg.declare('c6_hours', 'hours');

  const askT1 = B.askAndWait(reg, '請輸入進場時間HHMM', null);
  const setT1 = B.setVar(reg, T1, B.answerBlock(), null);
  const askT2 = B.askAndWait(reg, '請輸入出場時間HHMM', null);
  const setT2 = B.setVar(reg, T2, B.answerBlock(), null);

  const setH1 = B.setVar(reg, H1, B.round_('ROUNDDOWN', B.div(B.getVar(reg, T1), B.numLit(100))), null);
  const setM1 = B.setVar(reg, M1, B.modulo(B.getVar(reg, T1), B.numLit(100)), null);
  const setH2 = B.setVar(reg, H2, B.round_('ROUNDDOWN', B.div(B.getVar(reg, T2), B.numLit(100))), null);
  const setM2 = B.setVar(reg, M2, B.modulo(B.getVar(reg, T2), B.numLit(100)), null);
  const setDur = B.setVar(reg, DUR, B.sub(B.add(B.mul(B.getVar(reg, H2), B.numLit(60)), B.getVar(reg, M2)), B.add(B.mul(B.getVar(reg, H1), B.numLit(60)), B.getVar(reg, M1))), null);

  const setHours = B.setVar(reg, HOURS, B.round_('ROUNDUP', B.div(B.getVar(reg, DUR), B.numLit(60))), null);
  const feeIf = B.ifElseChain(
    [B.lte(B.getVar(reg, DUR), B.numLit(30))],
    [B.setVar(reg, FEE, B.numLit(0), null)],
    B.setVar(reg, FEE, B.ternary(B.lt(B.mul(B.getVar(reg, HOURS), B.numLit(40)), B.numLit(300)), B.mul(B.getVar(reg, HOURS), B.numLit(40)), B.numLit(300)), null)
  );

  const top = B.whenFlagClicked(B.chain(askT1, setT1, askT2, setT2, setH1, setM1, setH2, setM2, setDur, setHours, feeIf, B.say(B.getVar(reg, FEE), null)));
  tasks.push({
    id: 'Changhua-J-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1053\n1123', expectedOutput: '0' },
      { input: '1550\n1818', expectedOutput: '120' },
      { input: '0907\n1610', expectedOutput: '300' },
      { input: '0900\n0930', expectedOutput: '0' },
      { input: '0830\n1830', expectedOutput: '300' },
      { input: '1200\n1726', expectedOutput: '240' },
      { input: '1000\n1031', expectedOutput: '40' },
      { input: '0000\n2359', expectedOutput: '300' },
      { input: '1400\n1500', expectedOutput: '40' },
      { input: '1400\n1501', expectedOutput: '80' },
    ],
  });
})();

// 7. 分組活動 —— 最大公因數(輾轉相除法)。
(function () {
  const reg = B.createVarRegistry();
  const A = reg.declare('c7_a', 'A');
  const Bv = reg.declare('c7_b', 'B');
  const TMP = reg.declare('c7_tmp', 'tmp');

  const askA = B.askAndWait(reg, '請輸入A', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '請輸入B', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);

  const stepBody = B.chain(
    B.setVar(reg, TMP, B.modulo(B.getVar(reg, A), B.getVar(reg, Bv)), null),
    B.setVar(reg, A, B.getVar(reg, Bv), null),
    B.setVar(reg, Bv, B.getVar(reg, TMP), null)
  );
  const gcdLoop = B.whileUntil('UNTIL', B.eq(B.getVar(reg, Bv), B.numLit(0)), stepBody);

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, gcdLoop, B.say(B.getVar(reg, A), null)));
  tasks.push({
    id: 'Changhua-J-7',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '15\n45', expectedOutput: '15' },
      { input: '48\n72', expectedOutput: '24' },
      { input: '546\n429', expectedOutput: '39' },
      { input: '84\n54', expectedOutput: '6' },
      { input: '24\n36', expectedOutput: '12' },
      { input: '407\n481', expectedOutput: '37' },
      { input: '13\n17', expectedOutput: '1' },
      { input: '100\n100', expectedOutput: '100' },
      { input: '499\n1', expectedOutput: '1' },
      { input: '400\n200', expectedOutput: '200' },
    ],
  });
})();

// 8. 列出成績排名 —— 5個成績由小到大排序，取第3名(中位數)。
(function () {
  const reg = B.createVarRegistry();
  const SCORES = reg.declare('c8_scores', 'scores');
  const V = reg.declare('c8_v', 'v');
  const I = reg.declare('c8_i', 'i');
  const J = reg.declare('c8_j', 'j');
  const TMP = reg.declare('c8_tmp', 'tmp');

  const initScoresList = B.setVar(reg, SCORES, B.listsRepeat(B.numLit(0), B.numLit(5)), null);
  const askV = B.askAndWait(reg, '請輸入五個成績', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setScoreIdx = B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.getVar(reg, V), null);
  const initScores = B.controlsFor(reg, I, B.numLit(1), B.numLit(5), B.numLit(1), B.chain(askV, setV, setScoreIdx));

  const cond = B.gt(B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, J)));
  const swapSteps = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, SCORES), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, SCORES), B.getVar(reg, J), B.getVar(reg, TMP), null)
  );
  const ifSwap = B.ifElseChain([cond], [swapSteps], null);
  const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.numLit(5), B.numLit(1), ifSwap);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(4), B.numLit(1), innerLoop);

  const top = B.whenFlagClicked(B.chain(initScoresList, initScores, outerLoop, B.say(B.listsGetIndex(B.getVar(reg, SCORES), B.numLit(3)), null)));
  tasks.push({
    id: 'Changhua-J-8',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '67 7 89 42 0', expectedOutput: '42' },
      { input: '95 23 60 48 64', expectedOutput: '60' },
      { input: '40 6 37 24 31', expectedOutput: '31' },
      { input: '72 68 89 92 54', expectedOutput: '72' },
      { input: '47 32 13 86 6', expectedOutput: '32' },
      { input: '72 62 11 55 12', expectedOutput: '55' },
      { input: '10 10 10 10 10', expectedOutput: '10' },
      { input: '1 2 3 4 5', expectedOutput: '3' },
      { input: '100 90 80 70 60', expectedOutput: '80' },
      { input: '50 50 100 0 0', expectedOutput: '50' },
    ],
  });
})();

// 9. 密碼移動 —— 每個字元往後移動N個位置(N=字串長度)，環狀處理(超過Z從A繼續)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c9_n', 'N');
  const S = reg.declare('c9_s', 'S');
  const I = reg.declare('c9_i', 'i');
  const CH = reg.declare('c9_ch', 'ch');
  const LETTERS = reg.declare('c9_letters', 'letters');
  const POS = reg.declare('c9_pos', 'pos');
  const NEWPOS = reg.declare('c9_newpos', 'newpos');
  const RESULT = reg.declare('c9_result', 'result');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((c) => B.textLit(c));
  const initLetters = B.setVar(reg, LETTERS, B.listsCreateWith(alphabet), null);

  const askN = B.askAndWait(reg, '請輸入字串長度N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askS = B.askAndWait(reg, '請輸入原始字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setResult0 = B.setVar(reg, RESULT, B.textLit(''), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setPos = B.setVar(reg, POS, B.listsIndexOf(B.getVar(reg, LETTERS), B.getVar(reg, CH)), null);
  const setNewPos = B.setVar(reg, NEWPOS, B.add(B.modulo(B.add(B.sub(B.getVar(reg, POS), B.numLit(1)), B.getVar(reg, N)), B.numLit(26)), B.numLit(1)), null);
  const appendCh = B.setVar(reg, RESULT, B.textJoin([B.getVar(reg, RESULT), B.listsGetIndex(B.getVar(reg, LETTERS), B.getVar(reg, NEWPOS))]), null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setCh, setPos, setNewPos, appendCh));

  const top = B.whenFlagClicked(B.chain(initLetters, askN, setN, askS, setS, setResult0, forLoop, B.say(B.getVar(reg, RESULT), null)));
  tasks.push({
    id: 'Changhua-J-9',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\nABCD', expectedOutput: 'EFGH' },
      { input: '3\nXYZ', expectedOutput: 'ABC' },
      { input: '6\nMNTQRS', expectedOutput: 'STZWXY' },
      { input: '3\nABC', expectedOutput: 'DEF' },
      { input: '5\nAZBYC', expectedOutput: 'FEGDH' },
      { input: '4\nWXYZ', expectedOutput: 'ABCD' },
      { input: '1\nA', expectedOutput: 'B' },
      { input: '1\nZ', expectedOutput: 'A' },
      { input: '26\nABCDEFGHIJKLMNOPQRSTUVWXYZ', expectedOutput: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { input: '10\nQQQQQQQQQQ', expectedOutput: 'AAAAAAAAAA' },
    ],
  });
})();

// 10. 種花計畫 —— 貪婪法：掃描位置，左右皆空(或邊界)且自己是0就種花，最後比較能種數與n。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c10_n', 'N');
  const BED = reg.declare('c10_bed', 'bed');
  const V = reg.declare('c10_v', 'v');
  const I = reg.declare('c10_i', 'i');
  const NEED = reg.declare('c10_need', 'need');
  const PLANTED = reg.declare('c10_planted', 'planted');
  const CANLEFT = reg.declare('c10_canleft', 'canleft');
  const CANRIGHT = reg.declare('c10_canright', 'canright');

  const askN = B.askAndWait(reg, '請輸入花圃長度', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initBed = B.setVar(reg, BED, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setBedIdx = B.listsSetIndex(B.getVar(reg, BED), B.getVar(reg, I), B.getVar(reg, V), null);
  const readBedLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setBedIdx));
  const askNeed = B.askAndWait(reg, '請輸入想種的花數', null);
  const setNeed = B.setVar(reg, NEED, B.answerBlock(), null);

  const setCanLeft = B.setVar(reg, CANLEFT, B.or_(B.eq(B.getVar(reg, I), B.numLit(1)), B.eq(B.listsGetIndex(B.getVar(reg, BED), B.sub(B.getVar(reg, I), B.numLit(1))), B.numLit(0))), null);
  const setCanRight = B.setVar(reg, CANRIGHT, B.or_(B.eq(B.getVar(reg, I), B.getVar(reg, N)), B.eq(B.listsGetIndex(B.getVar(reg, BED), B.add(B.getVar(reg, I), B.numLit(1))), B.numLit(0))), null);
  const doPlant = B.chain(
    B.listsSetIndex(B.getVar(reg, BED), B.getVar(reg, I), B.numLit(1), null),
    B.setVar(reg, PLANTED, B.add(B.getVar(reg, PLANTED), B.numLit(1)), null)
  );
  const plantIf = B.ifElseChain(
    [B.and_(B.eq(B.listsGetIndex(B.getVar(reg, BED), B.getVar(reg, I)), B.numLit(0)), B.and_(B.getVar(reg, CANLEFT), B.getVar(reg, CANRIGHT)))],
    [doPlant],
    null
  );
  const setPlanted0 = B.setVar(reg, PLANTED, B.numLit(0), null);
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setCanLeft, setCanRight, plantIf));

  const resultIf = B.ifElseChain([B.gte(B.getVar(reg, PLANTED), B.getVar(reg, NEED))], [B.say(B.textLit('True'), null)], B.say(B.textLit('False'), null));

  const top = B.whenFlagClicked(B.chain(askN, setN, initBed, readBedLoop, askNeed, setNeed, setPlanted0, scanLoop, resultIf));
  tasks.push({
    id: 'Changhua-J-10',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '8\n1 0 0 0 1 0 0 1\n2', expectedOutput: 'False' },
      { input: '14\n0 0 1 1 0 1 0 1 1 0 0 0 1 0\n2', expectedOutput: 'True' },
      { input: '14\n0 0 0 0 1 0 0 0 1 1 0 0 0 0\n5', expectedOutput: 'True' },
      { input: '5\n1 0 0 0 1\n1', expectedOutput: 'True' },
      { input: '5\n1 0 0 0 1\n2', expectedOutput: 'False' },
      { input: '7\n0 0 0 0 0 0 0\n4', expectedOutput: 'True' },
      { input: '3\n0 0 0\n2', expectedOutput: 'True' },
      { input: '3\n0 1 0\n1', expectedOutput: 'False' },
      { input: '4\n0 0 0 0\n2', expectedOutput: 'True' },
      { input: '4\n0 0 0 0\n3', expectedOutput: 'False' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_changhua_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'changhua_j tasks');
