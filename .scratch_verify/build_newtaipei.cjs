const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 健康小管家（BMI）—— BMI取到小數點後一位再分類。Blockly的math_round只能到整數，
// 用「乘10取整再除10」湊出1位小數精度。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('n1_h', 'H');
  const W = reg.declare('n1_w', 'W');
  const BMI = reg.declare('n1_bmi', 'bmi');
  const CAT = reg.declare('n1_cat', 'cat');

  const askH = B.askAndWait(reg, '請輸入身高(cm)', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const askW = B.askAndWait(reg, '請輸入體重(kg)', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);

  const heightM = B.div(B.getVar(reg, H), B.numLit(100));
  const rawBmi = B.div(B.getVar(reg, W), B.mul(heightM, heightM));
  const setBmi = B.setVar(reg, BMI, B.div(B.round_('ROUND', B.mul(rawBmi, B.numLit(10))), B.numLit(10)), null);

  const catIf = B.ifElseChain(
    [
      B.lt(B.getVar(reg, BMI), B.numLit(18.5)),
      B.lte(B.getVar(reg, BMI), B.numLit(24.9)),
      B.lte(B.getVar(reg, BMI), B.numLit(29.9)),
      B.lte(B.getVar(reg, BMI), B.numLit(34.9)),
      B.lte(B.getVar(reg, BMI), B.numLit(39.9)),
    ],
    [
      B.setVar(reg, CAT, B.textLit('體重過輕'), null),
      B.setVar(reg, CAT, B.textLit('正常範圍'), null),
      B.setVar(reg, CAT, B.textLit('體重過重'), null),
      B.setVar(reg, CAT, B.textLit('輕度肥胖'), null),
      B.setVar(reg, CAT, B.textLit('中度肥胖'), null),
    ],
    B.setVar(reg, CAT, B.textLit('重度肥胖'), null)
  );

  const sayResult = B.say(B.textJoin([B.getVar(reg, BMI), B.textLit(' '), B.getVar(reg, CAT)]), null);
  const top = B.whenFlagClicked(B.chain(askH, setH, askW, setW, setBmi, catIf, sayResult));
  tasks.push({
    id: 'NewTaipei-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '165\n45', expectedOutput: '16.5 體重過輕' },
      { input: '180\n85', expectedOutput: '26.2 體重過重' },
      { input: '170\n60', expectedOutput: '20.8 正常範圍' },
      { input: '160\n81', expectedOutput: '31.6 輕度肥胖' },
      { input: '150\n85', expectedOutput: '37.8 中度肥胖' },
      { input: '150\n100', expectedOutput: '44.4 重度肥胖' },
      { input: '170\n50', expectedOutput: '17.3 體重過輕' },
      { input: '175\n75', expectedOutput: '24.5 正常範圍' },
      { input: '180\n95', expectedOutput: '29.3 體重過重' },
      { input: '170\n120', expectedOutput: '41.5 重度肥胖' },
    ],
  });
})();

// 2. 鋼琴小天才計分挑戰 —— 7個分數，扣一個最高一個最低，剩5個加總（可為小數）。
(function () {
  const reg = B.createVarRegistry();
  const V = reg.declare('n2_v', 'v');
  const I = reg.declare('n2_i', 'i');
  const SUM = reg.declare('n2_sum', 'sum');
  const MAXV = reg.declare('n2_max', 'maxv');
  const MINV = reg.declare('n2_min', 'minv');

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(7), B.numLit(1), B.chain(askV, setV, addSum, ifMax, ifMin));

  const finalScore = B.sub(B.sub(B.getVar(reg, SUM), B.getVar(reg, MAXV)), B.getVar(reg, MINV));
  const top = B.whenFlagClicked(B.chain(setSum0, setMax0, setMin0, readLoop, B.say(finalScore, null)));
  tasks.push({
    id: 'NewTaipei-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '8 9 7 9 8 10 7', expectedOutput: '41' },
      { input: '1.5 2.5 3.5 4.5 5.5 6.5 7.5', expectedOutput: '22.5' },
      { input: '10 10 10 10 10 10 10', expectedOutput: '50' },
      { input: '0 0 0 0 0 0 0', expectedOutput: '0' },
      { input: '5 5 5 5 5 10 0', expectedOutput: '25' },
      { input: '9.5 8.5 7.5 9 8 10 6', expectedOutput: '42.5' },
      // 來源TXT此筆預期答案寫「15」，但sum-max-min演算法（其餘9筆全數吻合）算出應為20，
      // 判定為來源資料獨立輸入錯誤（見PDF題目來源勘誤紀錄），依演算法結果收錄為20。
      { input: '1 2 3 4 5 6 7', expectedOutput: '20' },
      { input: '10 9 8 7 6 5 4', expectedOutput: '35' },
      { input: '100 10 10 10 10 10 1', expectedOutput: '50' },
      { input: '2.2 3.3 4.4 5.5 6.6 7.7 8.8', expectedOutput: '27.5' },
    ],
  });
})();

// 3. 幸運號碼大樂透 —— 固定10個幸運號碼，比對玩家5個號碼中了幾個，對應獎金。
(function () {
  const reg = B.createVarRegistry();
  const LUCKY = reg.declare('n3_lucky', 'lucky');
  const PICK = reg.declare('n3_pick', 'pick');
  const HITS = reg.declare('n3_hits', 'hits');
  const PRIZE = reg.declare('n3_prize', 'prize');

  const luckyNums = [7, 24, 31, 42, 45, 56, 63, 78, 80, 99].map((n) => B.numLit(n));
  const initLucky = B.setVar(reg, LUCKY, B.listsCreateWith(luckyNums), null);
  const setHits0 = B.setVar(reg, HITS, B.numLit(0), null);

  // 注意：這裡回傳「原子步驟陣列」而不是先chain()好的區塊——chain()只能安全地接受
  // next=null的原子積木；如果把「已經chain()過、最外層積木本身就帶著next」的結果
  // 再塞進另一個chain()，會讓那個最外層積木被插入第二個<next>，變成同一個積木有兩個
  // <next>子節點，Blockly會丟"Next statement is already connected"（也可能不報錯但
  // 靜默漏執行，更危險）。統一寫法：每個helper回傳陣列，用時攤平成同一層chain()。
  function checkOnePickSteps() {
    const askPick = B.askAndWait(reg, '', null);
    const setPick = B.setVar(reg, PICK, B.answerBlock(), null);
    const ifHit = B.ifElseChain([B.neq(B.listsIndexOf(B.getVar(reg, LUCKY), B.getVar(reg, PICK)), B.numLit(0))], [B.setVar(reg, HITS, B.add(B.getVar(reg, HITS), B.numLit(1)), null)], null);
    return [askPick, setPick, ifHit];
  }
  const checkSteps = [...checkOnePickSteps(), ...checkOnePickSteps(), ...checkOnePickSteps(), ...checkOnePickSteps(), ...checkOnePickSteps()];

  const prizeIf = B.ifElseChain(
    [B.eq(B.getVar(reg, HITS), B.numLit(5)), B.eq(B.getVar(reg, HITS), B.numLit(4)), B.eq(B.getVar(reg, HITS), B.numLit(3)), B.eq(B.getVar(reg, HITS), B.numLit(2)), B.eq(B.getVar(reg, HITS), B.numLit(1))],
    [
      B.setVar(reg, PRIZE, B.numLit(100000), null),
      B.setVar(reg, PRIZE, B.numLit(10000), null),
      B.setVar(reg, PRIZE, B.numLit(2000), null),
      B.setVar(reg, PRIZE, B.numLit(500), null),
      B.setVar(reg, PRIZE, B.numLit(200), null),
    ],
    B.setVar(reg, PRIZE, B.numLit(0), null)
  );

  const sayResult = B.say(B.textJoin([B.textLit('猜中'), B.getVar(reg, HITS), B.textLit('個號碼獎金'), B.getVar(reg, PRIZE), B.textLit('元')]), null);
  const top = B.whenFlagClicked(B.chain(initLucky, setHits0, ...checkSteps, prizeIf, sayResult));
  tasks.push({
    id: 'NewTaipei-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '7 18 29 31 35', expectedOutput: '猜中2個號碼獎金500元' },
      { input: '1 2 3 4 5', expectedOutput: '猜中0個號碼獎金0元' },
      { input: '7 24 31 42 45', expectedOutput: '猜中5個號碼獎金100000元' },
      { input: '7 24 31 42 1', expectedOutput: '猜中4個號碼獎金10000元' },
      { input: '7 24 31 2 3', expectedOutput: '猜中3個號碼獎金2000元' },
      { input: '7 2 3 4 5', expectedOutput: '猜中1個號碼獎金200元' },
      { input: '56 63 78 80 99', expectedOutput: '猜中5個號碼獎金100000元' },
      { input: '56 63 78 80 1', expectedOutput: '猜中4個號碼獎金10000元' },
      { input: '56 63 78 2 3', expectedOutput: '猜中3個號碼獎金2000元' },
      { input: '99 2 3 4 5', expectedOutput: '猜中1個號碼獎金200元' },
    ],
  });
})();

// 4. 小隊長的奇數號碼 —— 起始~結束（含端點）所有奇數的總和（保守起見不假設輸入順序）。
(function () {
  const reg = B.createVarRegistry();
  const A = reg.declare('n4_a', 'A');
  const Bv = reg.declare('n4_b', 'B');
  const LO = reg.declare('n4_lo', 'lo');
  const HI = reg.declare('n4_hi', 'hi');
  const I = reg.declare('n4_i', 'i');
  const SUM = reg.declare('n4_sum', 'sum');

  const askA = B.askAndWait(reg, '請輸入起始號碼', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '請輸入結束號碼', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);
  const setLo = B.setVar(reg, LO, B.ternary(B.lt(B.getVar(reg, A), B.getVar(reg, Bv)), B.getVar(reg, A), B.getVar(reg, Bv)), null);
  const setHi = B.setVar(reg, HI, B.ternary(B.lt(B.getVar(reg, A), B.getVar(reg, Bv)), B.getVar(reg, Bv), B.getVar(reg, A)), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);

  const ifOdd = B.ifElseChain([B.neq(B.modulo(B.getVar(reg, I), B.numLit(2)), B.numLit(0))], [B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, I)), null)], null);
  const forLoop = B.controlsFor(reg, I, B.getVar(reg, LO), B.getVar(reg, HI), B.numLit(1), ifOdd);

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, setLo, setHi, setSum0, forLoop, B.say(B.getVar(reg, SUM), null)));
  tasks.push({
    id: 'NewTaipei-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '10\n20', expectedOutput: '75' },
      { input: '31\n39', expectedOutput: '175' },
      { input: '1\n10', expectedOutput: '25' },
      { input: '10\n10', expectedOutput: '0' },
      { input: '11\n11', expectedOutput: '11' },
      { input: '1\n5', expectedOutput: '9' },
      { input: '2\n8', expectedOutput: '15' },
      { input: '100\n200', expectedOutput: '7500' },
      { input: '21\n25', expectedOutput: '69' },
      { input: '0\n9', expectedOutput: '25' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_newtaipei.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'newtaipei tasks');
