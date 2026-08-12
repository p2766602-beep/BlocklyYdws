const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 魔法公車車票計算 —— min>=10或max<=10為一段票(10元)，否則跨越魔法分隔站為兩段票(20元)；
// 年齡<=12享半價。
(function () {
  const reg = B.createVarRegistry();
  const START = reg.declare('t1_start', 'start');
  const END = reg.declare('t1_end', 'end');
  const AGE = reg.declare('t1_age', 'age');
  const MN = reg.declare('t1_mn', 'mn');
  const MX = reg.declare('t1_mx', 'mx');
  const FARE = reg.declare('t1_fare', 'fare');

  const askStart = B.askAndWait(reg, '請輸入上車站號', null);
  const setStart = B.setVar(reg, START, B.answerBlock(), null);
  const askEnd = B.askAndWait(reg, '請輸入下車站號', null);
  const setEnd = B.setVar(reg, END, B.answerBlock(), null);
  const askAge = B.askAndWait(reg, '請輸入年齡', null);
  const setAge = B.setVar(reg, AGE, B.answerBlock(), null);

  const setMn = B.setVar(reg, MN, B.ternary(B.lt(B.getVar(reg, START), B.getVar(reg, END)), B.getVar(reg, START), B.getVar(reg, END)), null);
  const setMx = B.setVar(reg, MX, B.ternary(B.lt(B.getVar(reg, START), B.getVar(reg, END)), B.getVar(reg, END), B.getVar(reg, START)), null);

  const oneSeg = B.or_(B.gte(B.getVar(reg, MN), B.numLit(10)), B.lte(B.getVar(reg, MX), B.numLit(10)));
  const setFareBase = B.ifElseChain([oneSeg], [B.setVar(reg, FARE, B.numLit(10), null)], B.setVar(reg, FARE, B.numLit(20), null));
  const applyDiscount = B.ifElseChain([B.lte(B.getVar(reg, AGE), B.numLit(12))], [B.setVar(reg, FARE, B.div(B.getVar(reg, FARE), B.numLit(2)), null)], null);

  const top = B.whenFlagClicked(B.chain(askStart, setStart, askEnd, setEnd, askAge, setAge, setMn, setMx, setFareBase, applyDiscount, B.say(B.getVar(reg, FARE), null)));
  tasks.push({
    id: 'Taitung-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\n9\n30', expectedOutput: '10' },
      { input: '2\n11\n15', expectedOutput: '20' },
      { input: '10\n15\n40', expectedOutput: '10' },
      { input: '15\n1\n7', expectedOutput: '10' },
      { input: '9\n10\n5', expectedOutput: '5' },
      { input: '1\n15\n10', expectedOutput: '10' },
      { input: '1\n10\n20', expectedOutput: '10' },
      { input: '10\n1\n12', expectedOutput: '5' },
      { input: '11\n15\n11', expectedOutput: '5' },
      { input: '12\n8\n35', expectedOutput: '20' },
    ],
  });
})();

// 2. 幸運數字彩虹樂透 —— 讀6個號碼比對固定開獎號碼，依猜中數對應獎金。
(function () {
  const reg = B.createVarRegistry();
  const LUCKY = reg.declare('t2_lucky', 'lucky');
  const PICK = reg.declare('t2_pick', 'pick');
  const HITS = reg.declare('t2_hits', 'hits');
  const PRIZE = reg.declare('t2_prize', 'prize');

  const luckyNums = [10, 18, 29, 31, 35, 36].map((n) => B.numLit(n));
  const initLucky = B.setVar(reg, LUCKY, B.listsCreateWith(luckyNums), null);
  const setHits0 = B.setVar(reg, HITS, B.numLit(0), null);

  function checkOnePickSteps() {
    const askPick = B.askAndWait(reg, '', null);
    const setPick = B.setVar(reg, PICK, B.answerBlock(), null);
    const ifHit = B.ifElseChain([B.neq(B.listsIndexOf(B.getVar(reg, LUCKY), B.getVar(reg, PICK)), B.numLit(0))], [B.setVar(reg, HITS, B.add(B.getVar(reg, HITS), B.numLit(1)), null)], null);
    return [askPick, setPick, ifHit];
  }
  const checkSteps = [].concat(checkOnePickSteps(), checkOnePickSteps(), checkOnePickSteps(), checkOnePickSteps(), checkOnePickSteps(), checkOnePickSteps());

  const prizeIf = B.ifElseChain(
    [B.eq(B.getVar(reg, HITS), B.numLit(6)), B.eq(B.getVar(reg, HITS), B.numLit(5)), B.eq(B.getVar(reg, HITS), B.numLit(4)), B.eq(B.getVar(reg, HITS), B.numLit(3))],
    [
      B.setVar(reg, PRIZE, B.numLit(100000), null),
      B.setVar(reg, PRIZE, B.numLit(10000), null),
      B.setVar(reg, PRIZE, B.numLit(1000), null),
      B.setVar(reg, PRIZE, B.numLit(100), null),
    ],
    B.setVar(reg, PRIZE, B.numLit(0), null)
  );

  const sayResult = B.say(B.textJoin([B.textLit('猜中'), B.getVar(reg, HITS), B.textLit('個號碼,獎金'), B.getVar(reg, PRIZE), B.textLit('元')]), null);
  const top = B.whenFlagClicked(B.chain(initLucky, setHits0, ...checkSteps, prizeIf, sayResult));
  tasks.push({
    id: 'Taitung-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '10 18 29 31 35 36', expectedOutput: '猜中6個號碼,獎金100000元' },
      { input: '1 2 3 4 5 6', expectedOutput: '猜中0個號碼,獎金0元' },
      { input: '10 18 29 31 35 45', expectedOutput: '猜中5個號碼,獎金10000元' },
      { input: '10 18 29 40 41 42', expectedOutput: '猜中3個號碼,獎金100元' },
      { input: '10 18 29 31 38 49', expectedOutput: '猜中4個號碼,獎金1000元' },
      { input: '10 18 40 41 42 43', expectedOutput: '猜中2個號碼,獎金0元' },
      { input: '10 40 41 42 43 44', expectedOutput: '猜中1個號碼,獎金0元' },
      { input: '18 29 31 35 36 40', expectedOutput: '猜中5個號碼,獎金10000元' },
      { input: '29 31 35 36 40 41', expectedOutput: '猜中4個號碼,獎金1000元' },
      { input: '31 35 36 40 41 42', expectedOutput: '猜中3個號碼,獎金100元' },
    ],
  });
})();

// 3. 我的健康小管家 —— BMR固定年齡14歲公式，取整數後分5級。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('t3_h', 'H');
  const W = reg.declare('t3_w', 'W');
  const BMR = reg.declare('t3_bmr', 'bmr');
  const CAT = reg.declare('t3_cat', 'cat');

  const askH = B.askAndWait(reg, '請輸入身高(cm)', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const askW = B.askAndWait(reg, '請輸入體重(kg)', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);

  const rawBmr = B.sub(B.add(B.add(B.numLit(655), B.mul(B.numLit(9.6), B.getVar(reg, W))), B.mul(B.numLit(1.8), B.getVar(reg, H))), B.numLit(65.8));
  const setBmr = B.setVar(reg, BMR, B.round_('ROUND', rawBmr), null);

  const catIf = B.ifElseChain(
    [
      B.lt(B.getVar(reg, BMR), B.numLit(1200)),
      B.lte(B.getVar(reg, BMR), B.numLit(1499)),
      B.lte(B.getVar(reg, BMR), B.numLit(1799)),
      B.lte(B.getVar(reg, BMR), B.numLit(2099)),
    ],
    [
      B.setVar(reg, CAT, B.textLit('極低能量'), null),
      B.setVar(reg, CAT, B.textLit('較低能量'), null),
      B.setVar(reg, CAT, B.textLit('標準能量'), null),
      B.setVar(reg, CAT, B.textLit('較高能量'), null),
    ],
    B.setVar(reg, CAT, B.textLit('極高能量'), null)
  );

  const sayResult = B.say(B.textJoin([B.getVar(reg, BMR), B.textLit(' '), B.getVar(reg, CAT)]), null);
  const top = B.whenFlagClicked(B.chain(askH, setH, askW, setW, setBmr, catIf, sayResult));
  tasks.push({
    id: 'Taitung-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '150\n35', expectedOutput: '1195 極低能量' },
      { input: '160\n45', expectedOutput: '1309 較低能量' },
      { input: '165\n50', expectedOutput: '1366 較低能量' },
      { input: '170\n55', expectedOutput: '1423 較低能量' },
      { input: '168\n68', expectedOutput: '1544 標準能量' },
      { input: '180\n85', expectedOutput: '1729 標準能量' },
      { input: '180\n95', expectedOutput: '1825 較高能量' },
      { input: '190\n100', expectedOutput: '1891 較高能量' },
      { input: '200\n120', expectedOutput: '2101 極高能量' },
      { input: '175\n70', expectedOutput: '1576 標準能量' },
    ],
  });
})();

// 4. 東台線上3C購物平台 —— 讀餘額，重複讀商品編號直到-1，依固定價目表加總後判斷結帳結果。
(function () {
  const reg = B.createVarRegistry();
  const BALANCE = reg.declare('t4_balance', 'balance');
  const ID = reg.declare('t4_id', 'id');
  const TOTAL = reg.declare('t4_total', 'total');
  const DONE = reg.declare('t4_done', 'done');
  const PRICE = reg.declare('t4_price', 'price');

  const askBalance = B.askAndWait(reg, '請輸入電子錢包餘額', null);
  const setBalance = B.setVar(reg, BALANCE, B.answerBlock(), null);
  const setTotal0 = B.setVar(reg, TOTAL, B.numLit(0), null);
  const setDone0 = B.setVar(reg, DONE, B.numLit(0), null);

  const askId = B.askAndWait(reg, '', null);
  const setId = B.setVar(reg, ID, B.answerBlock(), null);
  const priceIf = B.ifElseChain(
    [B.eq(B.getVar(reg, ID), B.numLit(1)), B.eq(B.getVar(reg, ID), B.numLit(2)), B.eq(B.getVar(reg, ID), B.numLit(3)), B.eq(B.getVar(reg, ID), B.numLit(4)), B.eq(B.getVar(reg, ID), B.numLit(5)), B.eq(B.getVar(reg, ID), B.numLit(6))],
    [
      B.setVar(reg, PRICE, B.numLit(3490), null),
      B.setVar(reg, PRICE, B.numLit(7990), null),
      B.setVar(reg, PRICE, B.numLit(3990), null),
      B.setVar(reg, PRICE, B.numLit(2590), null),
      B.setVar(reg, PRICE, B.numLit(6890), null),
      B.setVar(reg, PRICE, B.numLit(3490), null),
    ],
    B.setVar(reg, PRICE, B.numLit(1490), null)
  );
  const addPrice = B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.getVar(reg, PRICE)), null);
  const itemBody = B.ifElseChain([B.eq(B.getVar(reg, ID), B.numLit(-1))], [B.setVar(reg, DONE, B.numLit(1), null)], B.chain(priceIf, addPrice));
  const readLoop = B.whileUntil('UNTIL', B.eq(B.getVar(reg, DONE), B.numLit(1)), B.chain(askId, setId, itemBody));

  const resultIf = B.ifElseChain(
    [B.gte(B.getVar(reg, BALANCE), B.getVar(reg, TOTAL))],
    [B.say(B.textJoin([B.textLit('結帳成功,餘額剩'), B.sub(B.getVar(reg, BALANCE), B.getVar(reg, TOTAL)), B.textLit('元')]), null)],
    B.say(B.textJoin([B.textLit('餘額不足,請另外加值'), B.sub(B.getVar(reg, TOTAL), B.getVar(reg, BALANCE)), B.textLit('元')]), null)
  );

  const top = B.whenFlagClicked(B.chain(askBalance, setBalance, setTotal0, setDone0, readLoop, resultIf));
  tasks.push({
    id: 'Taitung-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5000 3 5 -1', expectedOutput: '餘額不足,請另外加值5880元' },
      { input: '10000 1 4 -1', expectedOutput: '結帳成功,餘額剩3920元' },
      { input: '8000 6 7 3 -1', expectedOutput: '餘額不足,請另外加值970元' },
      { input: '20000 5 1 6 -1', expectedOutput: '結帳成功,餘額剩6130元' },
      { input: '10000 1 4 -1', expectedOutput: '結帳成功,餘額剩3920元' },
      { input: '5000 -1', expectedOutput: '結帳成功,餘額剩5000元' },
      { input: '10000 2 -1', expectedOutput: '結帳成功,餘額剩2010元' },
      { input: '1000 7 -1', expectedOutput: '餘額不足,請另外加值490元' },
      { input: '30000 2 2 2 -1', expectedOutput: '結帳成功,餘額剩6030元' },
      { input: '0 4 -1', expectedOutput: '餘額不足,請另外加值2590元' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_taitung_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'taitung_j tasks');
