const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 奇緣蛋糕特賣 —— 依購買數量分級折扣，折扣後滿1200免運，否則+80運費。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('e1_n', 'N');
  const RATE = reg.declare('e1_rate', 'rate');
  const DISC = reg.declare('e1_disc', 'disc');
  const TOTAL = reg.declare('e1_total', 'total');

  const askN = B.askAndWait(reg, '請輸入購買蛋糕數量', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);

  const rateIf = B.ifElseChain(
    [B.lte(B.getVar(reg, N), B.numLit(5)), B.lte(B.getVar(reg, N), B.numLit(10)), B.lte(B.getVar(reg, N), B.numLit(15))],
    [B.setVar(reg, RATE, B.numLit(0.9), null), B.setVar(reg, RATE, B.numLit(0.8), null), B.setVar(reg, RATE, B.numLit(0.7), null)],
    B.setVar(reg, RATE, B.numLit(0.6), null)
  );
  const setDisc = B.setVar(reg, DISC, B.mul(B.mul(B.getVar(reg, N), B.numLit(300)), B.getVar(reg, RATE)), null);
  const setTotal = B.ifElseChain(
    [B.gte(B.getVar(reg, DISC), B.numLit(1200))],
    [B.setVar(reg, TOTAL, B.getVar(reg, DISC), null)],
    B.setVar(reg, TOTAL, B.add(B.getVar(reg, DISC), B.numLit(80)), null)
  );

  const top = B.whenFlagClicked(B.chain(askN, setN, rateIf, setDisc, setTotal, B.say(B.getVar(reg, TOTAL), null)));
  tasks.push({
    id: 'Taitung-E-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3', expectedOutput: '890' },
      { input: '8', expectedOutput: '1920' },
      { input: '12', expectedOutput: '2520' },
      { input: '17', expectedOutput: '3060' },
      { input: '2', expectedOutput: '620' },
      { input: '1', expectedOutput: '350' },
      { input: '5', expectedOutput: '1350' },
      { input: '6', expectedOutput: '1440' },
      { input: '10', expectedOutput: '2400' },
      { input: '11', expectedOutput: '2310' },
    ],
  });
})();

// 2. 健康小管家（BMI，與NewTaipei-1/Hsinchu同款分級，這裡英文分類名稱一併輸出）。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('e2_h', 'H');
  const W = reg.declare('e2_w', 'W');
  const BMI = reg.declare('e2_bmi', 'bmi');
  const CAT = reg.declare('e2_cat', 'cat');

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
      B.setVar(reg, CAT, B.textLit('體重過輕(Underweight)'), null),
      B.setVar(reg, CAT, B.textLit('正常範圍(Normal range)'), null),
      B.setVar(reg, CAT, B.textLit('體重過重(Overweight)'), null),
      B.setVar(reg, CAT, B.textLit('輕度肥胖(Obesity Class I)'), null),
      B.setVar(reg, CAT, B.textLit('中度肥胖(Obesity Class II)'), null),
    ],
    B.setVar(reg, CAT, B.textLit('重度肥胖(Obesity Class III)'), null)
  );

  const sayResult = B.say(B.textJoin([B.getVar(reg, BMI), B.textLit(' '), B.getVar(reg, CAT)]), null);
  const top = B.whenFlagClicked(B.chain(askH, setH, askW, setW, setBmi, catIf, sayResult));
  tasks.push({
    id: 'Taitung-E-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '165\n45', expectedOutput: '16.5 體重過輕(Underweight)' },
      { input: '170\n60', expectedOutput: '20.8 正常範圍(Normal range)' },
      { input: '180\n85', expectedOutput: '26.2 體重過重(Overweight)' },
      { input: '168\n90', expectedOutput: '31.9 輕度肥胖(Obesity Class I)' },
      { input: '160\n120', expectedOutput: '46.9 重度肥胖(Obesity Class III)' },
      { input: '150\n80', expectedOutput: '35.6 中度肥胖(Obesity Class II)' },
      { input: '175\n75', expectedOutput: '24.5 正常範圍(Normal range)' },
      { input: '180\n95', expectedOutput: '29.3 體重過重(Overweight)' },
      { input: '170\n50', expectedOutput: '17.3 體重過輕(Underweight)' },
      { input: '170\n120', expectedOutput: '41.5 重度肥胖(Obesity Class III)' },
    ],
  });
})();

// 3. 鋼琴小天才計分挑戰 —— 固定7個分數扣一高一低，剩5個加總。
(function () {
  const reg = B.createVarRegistry();
  const V = reg.declare('e3_v', 'v');
  const I = reg.declare('e3_i', 'i');
  const SUM = reg.declare('e3_sum', 'sum');
  const MAXV = reg.declare('e3_max', 'maxv');
  const MINV = reg.declare('e3_min', 'minv');

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);

  const askV = B.askAndWait(reg, '請輸入評審分數', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(7), B.numLit(1), B.chain(askV, setV, addSum, ifMax, ifMin));

  // 用「乘1000取整再除1000」避免JS浮點數運算誤差（例如65.1-9.6-9算出46.49999999999999
  // 而非46.5），湊出足夠精度後印出，JS會自動去掉多餘尾端0。
  const finalScoreRaw = B.sub(B.sub(B.getVar(reg, SUM), B.getVar(reg, MAXV)), B.getVar(reg, MINV));
  const finalScore = B.div(B.round_('ROUND', B.mul(finalScoreRaw, B.numLit(1000))), B.numLit(1000));
  const top = B.whenFlagClicked(B.chain(setSum0, setMax0, setMin0, readLoop, B.say(finalScore, null)));
  tasks.push({
    id: 'Taitung-E-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6\n6\n6\n6\n6\n6 6', expectedOutput: '30' },
      { input: '7\n8\n9\n8\n7\n8\n9', expectedOutput: '40' },
      { input: '9\n9.1\n9.2\n9.3\n9.4\n9.5 9.6', expectedOutput: '46.5' },
      { input: '10\n5\n7\n8\n10\n9 6', expectedOutput: '40' },
      { input: '4\n8\n4\n8\n6\n6 7', expectedOutput: '31' },
      // 來源TXT此筆預期答案寫「15」，但sum-max-min演算法（其餘9筆全數吻合，且與同一批次
      // 114ENewTaipei.txt「鋼琴小天才計分挑戰」相同的孤立資料錯誤案例完全一致）算出應為20，
      // 判定為來源資料獨立輸入錯誤（見PDF題目來源勘誤紀錄），依演算法結果收錄為20。
      { input: '1\n2\n3\n4\n5\n6 7', expectedOutput: '20' },
      { input: '10\n10\n10\n10\n10\n10 10', expectedOutput: '50' },
      { input: '0\n0\n0\n0\n0\n0 0', expectedOutput: '0' },
      { input: '9.5\n8.5\n7.5\n9\n8\n10 6', expectedOutput: '42.5' },
      { input: '2.2\n3.3\n4.4\n5.5\n6.6\n7.7 8.8', expectedOutput: '27.5' },
    ],
  });
})();

// 4. 幸運號碼大樂透 —— 與NewTaipei-3同款，輸出格式多一個逗號「猜中X個號碼,獎金Y元」。
(function () {
  const reg = B.createVarRegistry();
  const LUCKY = reg.declare('e4_lucky', 'lucky');
  const PICK = reg.declare('e4_pick', 'pick');
  const HITS = reg.declare('e4_hits', 'hits');
  const PRIZE = reg.declare('e4_prize', 'prize');

  const luckyNums = [7, 24, 31, 42, 45, 56, 63, 78, 80, 99].map((n) => B.numLit(n));
  const initLucky = B.setVar(reg, LUCKY, B.listsCreateWith(luckyNums), null);
  const setHits0 = B.setVar(reg, HITS, B.numLit(0), null);

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

  const sayResult = B.say(B.textJoin([B.textLit('猜中'), B.getVar(reg, HITS), B.textLit('個號碼,獎金'), B.getVar(reg, PRIZE), B.textLit('元')]), null);
  const top = B.whenFlagClicked(B.chain(initLucky, setHits0, ...checkSteps, prizeIf, sayResult));
  tasks.push({
    id: 'Taitung-E-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '7 24 31 42 45', expectedOutput: '猜中5個號碼,獎金100000元' },
      { input: '1 2 3 4 5', expectedOutput: '猜中0個號碼,獎金0元' },
      { input: '7 24 1 2 3', expectedOutput: '猜中2個號碼,獎金500元' },
      { input: '42 56 63 78 80', expectedOutput: '猜中5個號碼,獎金100000元' },
      { input: '7 24 31 42 10', expectedOutput: '猜中4個號碼,獎金10000元' },
      { input: '7 2 3 4 5', expectedOutput: '猜中1個號碼,獎金200元' },
      { input: '56 63 78 80 1', expectedOutput: '猜中4個號碼,獎金10000元' },
      { input: '56 63 78 2 3', expectedOutput: '猜中3個號碼,獎金2000元' },
      { input: '99 2 3 4 5', expectedOutput: '猜中1個號碼,獎金200元' },
      { input: '7 24 31 2 3', expectedOutput: '猜中3個號碼,獎金2000元' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_taitung_e.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'taitung_e tasks');
