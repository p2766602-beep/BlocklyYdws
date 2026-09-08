const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 格式化成「整數.兩位小數」字串（含補零，例如785→"785.00"）。先四捨五入到分（乘100取整），
// 避免直接對浮點數做除法/取模而被浮點誤差污染小數位——xml-builder.cjs的說明就強調過
// 「先rounding成整數，再對整數做精確運算」這個原則。
function formatFixed2(reg, prefix, rawValueXml) {
  const CENTS = reg.declare(`${prefix}_cents`, `${prefix}_cents`);
  const INT = reg.declare(`${prefix}_int`, `${prefix}_int`);
  const FRAC = reg.declare(`${prefix}_frac`, `${prefix}_frac`);
  const FRACSTR = reg.declare(`${prefix}_fracstr`, `${prefix}_fracstr`);
  const OUT = reg.declare(`${prefix}_out`, `${prefix}_out`);
  const steps = [
    B.setVar(reg, CENTS, B.round_('ROUND', B.mul(rawValueXml, B.numLit(100))), null),
    B.setVar(reg, INT, B.round_('ROUNDDOWN', B.div(B.getVar(reg, CENTS), B.numLit(100))), null),
    B.setVar(reg, FRAC, B.sub(B.getVar(reg, CENTS), B.mul(B.getVar(reg, INT), B.numLit(100))), null),
    B.setVar(reg, FRACSTR, B.ternary(
      B.lt(B.getVar(reg, FRAC), B.numLit(10)),
      B.textJoin([B.textLit('0'), B.getVar(reg, FRAC)]),
      B.textJoin([B.getVar(reg, FRAC)])
    ), null),
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, INT), B.textLit('.'), B.getVar(reg, FRACSTR)]), null),
  ];
  return { steps, value: B.getVar(reg, OUT), centsValue: B.getVar(reg, CENTS) };
}

// ---- 114EHsinchuC-1：圓柱體積計算 ----
(function () {
  const reg = B.createVarRegistry();
  const R = reg.declare('h1_r', 'r');
  const H = reg.declare('h1_h', 'h');
  const VOL = reg.declare('h1_vol', 'vol');

  const askR = B.askAndWait(reg, '', null);
  const setR = B.setVar(reg, R, B.answerBlock(), null);
  const askH = B.askAndWait(reg, '', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const setVol = B.setVar(reg, VOL, B.mul(B.mul(B.mul(B.numLit(3.14), B.getVar(reg, R)), B.getVar(reg, R)), B.getVar(reg, H)), null);

  const fmt = formatFixed2(reg, 'h1', B.getVar(reg, VOL));
  const sayOut = B.say(fmt.value, null);

  const top = B.whenFlagClicked(B.chain(askR, setR, askH, setH, setVol, ...fmt.steps, sayOut));
  tasks.push({
    id: '114EHsinchuC-1', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n7', expectedOutput: '197.82' },
      { input: '9\n9', expectedOutput: '2289.06' },
      { input: '1\n1', expectedOutput: '3.14' },
      { input: '5\n10', expectedOutput: '785.00' },
      { input: '2\n5', expectedOutput: '62.80' },
    ],
  });
})();

// ---- 114EHsinchuC-2：BMI計算與健康判斷 ----
(function () {
  const reg = B.createVarRegistry();
  const W = reg.declare('h2_w', 'w');
  const H = reg.declare('h2_h', 'h');
  const BMIRAW = reg.declare('h2_bmiraw', 'bmiraw');

  const askW = B.askAndWait(reg, '', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const askH = B.askAndWait(reg, '', null);
  const setH = B.setVar(reg, H, B.answerBlock(), null);
  const setBmiRaw = B.setVar(reg, BMIRAW, B.div(B.getVar(reg, W), B.mul(B.getVar(reg, H), B.getVar(reg, H))), null);

  const fmt = formatFixed2(reg, 'h2', B.getVar(reg, BMIRAW));
  // category是要塞進變數VALUE插槽的表達式，要用ternary(表達式積木)而不是ifElseChain
  // （ifElseChain回傳的controls_if是語句積木，硬塞進value插槽會被Blockly靜默拒絕連接，
  // 變數維持預設值0——這正是verify.mjs第一次執行時實測到的失敗模式）。
  const category = B.ternary(
    B.lt(fmt.centsValue, B.numLit(1850)),
    B.textLit('過輕'),
    B.ternary(B.lt(fmt.centsValue, B.numLit(2400)), B.textLit('標準'), B.textLit('過重'))
  );
  const CATVAR = reg.declare('h2_cat', 'cat');
  const setCat = B.setVar(reg, CATVAR, category, null);
  const sayOut = B.say(B.textJoin([fmt.value, B.textLit(' '), B.getVar(reg, CATVAR)]), null);

  const top = B.whenFlagClicked(B.chain(askW, setW, askH, setH, setBmiRaw, ...fmt.steps, setCat, sayOut));
  tasks.push({
    id: '114EHsinchuC-2', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '60\n1.55', expectedOutput: '24.97 過重' },
      { input: '38\n1.43', expectedOutput: '18.58 標準' },
      { input: '45\n1.7', expectedOutput: '15.57 過輕' },
      { input: '70\n1.75', expectedOutput: '22.86 標準' },
      { input: '90\n1.6', expectedOutput: '35.16 過重' },
    ],
  });
})();

// ---- 114EHsinchuC-3：房間磁磚的購買計算 ----
(function () {
  const reg = B.createVarRegistry();
  const L = reg.declare('h3_l', 'l');
  const W = reg.declare('h3_w', 'w');
  const PACKS = reg.declare('h3_packs', 'packs');

  const askL = B.askAndWait(reg, '', null);
  const setL = B.setVar(reg, L, B.answerBlock(), null);
  const askW = B.askAndWait(reg, '', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const setPacks = B.setVar(reg, PACKS, B.round_('ROUNDUP', B.div(B.mul(B.getVar(reg, L), B.getVar(reg, W)), B.numLit(4.32))), null);
  const sayOut = B.say(B.getVar(reg, PACKS), null);

  const top = B.whenFlagClicked(B.chain(askL, setL, askW, setW, setPacks, sayOut));
  tasks.push({
    id: '114EHsinchuC-3', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n4', expectedOutput: '4' },
      { input: '5\n3.5', expectedOutput: '5' },
      { input: '2\n2', expectedOutput: '1' },
      { input: '10\n10', expectedOutput: '24' },
      { input: '3\n3', expectedOutput: '3' },
    ],
  });
})();

// ---- 114EHsinchuC-4：美味餐車三明治多重折扣與利潤計算 ----
(function () {
  const reg = B.createVarRegistry();
  const C = reg.declare('h4_c', 'c');
  const HOUR = reg.declare('h4_hour', 'hour');
  const PRICE = reg.declare('h4_price', 'price');
  const FINAL = reg.declare('h4_final', 'final');
  const PROFIT = reg.declare('h4_profit', 'profit');

  const askC = B.askAndWait(reg, '', null);
  const setC = B.setVar(reg, C, B.answerBlock(), null);
  const askHour = B.askAndWait(reg, '', null);
  const setHour = B.setVar(reg, HOUR, B.answerBlock(), null);
  const setPrice = B.setVar(reg, PRICE, B.round_('ROUND', B.mul(B.getVar(reg, C), B.numLit(1.5))), null);

  // 用巢狀ternary代替ifElseChain來「賦值」（ifElseChain是語句積木不是表達式，這裡改用
  // ternary運算式：時段>=12打6折；時段>=11(其實只會是11，因為HOUR是整數)打8折；其餘不打折）。
  const finalPriceExpr = B.ternary(
    B.gte(B.getVar(reg, HOUR), B.numLit(12)),
    B.round_('ROUND', B.mul(B.getVar(reg, PRICE), B.numLit(0.6))),
    B.ternary(
      B.gte(B.getVar(reg, HOUR), B.numLit(11)),
      B.round_('ROUND', B.mul(B.getVar(reg, PRICE), B.numLit(0.8))),
      B.getVar(reg, PRICE)
    )
  );
  const setFinal2 = B.setVar(reg, FINAL, finalPriceExpr, null);
  const setProfit = B.setVar(reg, PROFIT, B.sub(B.getVar(reg, FINAL), B.getVar(reg, C)), null);

  const sayOut = B.ifElseChain(
    [B.gt(B.getVar(reg, PROFIT), B.numLit(0))],
    [B.say(B.textJoin([B.textLit('有利潤 賺'), B.getVar(reg, PROFIT), B.textLit('元')]), null)],
    B.say(B.textJoin([B.textLit('無利潤 賠'), B.abs_(B.getVar(reg, PROFIT)), B.textLit('元')]), null)
  );

  const top = B.whenFlagClicked(B.chain(askC, setC, askHour, setHour, setPrice, setFinal2, setProfit, sayOut));
  tasks.push({
    id: '114EHsinchuC-4', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '20\n11', expectedOutput: '有利潤 賺4元' },
      { input: '35\n12', expectedOutput: '無利潤 賠3元' },
      { input: '10\n5', expectedOutput: '有利潤 賺5元' },
      { input: '50\n12', expectedOutput: '無利潤 賠5元' },
      { input: '100\n11', expectedOutput: '有利潤 賺20元' },
    ],
  });
})();

// ---- 114EHsinchuC-5：雲端資料備份硬碟統計 ----
(function () {
  const reg = B.createVarRegistry();
  const T = reg.declare('h5_t', 't');
  const N = reg.declare('h5_n', 'n');
  const DRIVES = reg.declare('h5_drives', 'drives');
  const I = reg.declare('h5_i', 'i');
  const TMP = reg.declare('h5_tmp', 'tmp');
  const ACC = reg.declare('h5_acc', 'acc');
  const USED = reg.declare('h5_used', 'used');
  const DONE = reg.declare('h5_done', 'done');

  const askT = B.askAndWait(reg, '', null);
  const setT = B.setVar(reg, T, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initDrives = B.setVar(reg, DRIVES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const ask = B.askAndWait(reg, '', null);
  const set = B.setVar(reg, TMP, B.answerBlock(), null);
  const setIdx = B.listsSetIndex(B.getVar(reg, DRIVES), B.getVar(reg, I), B.getVar(reg, TMP), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(ask, set, setIdx));

  const initAcc = B.setVar(reg, ACC, B.numLit(0), null);
  const initUsed = B.setVar(reg, USED, B.numLit(0), null);
  const initDone = B.setVar(reg, DONE, B.numLit(0), null);
  const initI = B.setVar(reg, I, B.numLit(1), null);

  const addAcc = B.setVar(reg, ACC, B.add(B.getVar(reg, ACC), B.listsGetIndex(B.getVar(reg, DRIVES), B.getVar(reg, I))), null);
  const setUsed = B.setVar(reg, USED, B.getVar(reg, I), null);
  const checkDone = B.ifElseChain([B.gte(B.getVar(reg, ACC), B.getVar(reg, T))], [B.setVar(reg, DONE, B.numLit(1), null)], null);
  const incI = B.setVar(reg, I, B.add(B.getVar(reg, I), B.numLit(1)), null);
  const mainLoop = B.whileUntil('WHILE',
    B.and_(B.lte(B.getVar(reg, I), B.getVar(reg, N)), B.eq(B.getVar(reg, DONE), B.numLit(0))),
    B.chain(addAcc, setUsed, checkDone, incI)
  );

  const sayOut = B.ifElseChain(
    [B.gte(B.getVar(reg, ACC), B.getVar(reg, T))],
    [B.say(B.getVar(reg, USED), null)],
    B.say(B.textLit('待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。'), null)
  );

  const top = B.whenFlagClicked(B.chain(askT, setT, askN, setN, initDrives, readLoop, initAcc, initUsed, initDone, initI, mainLoop, sayOut));
  tasks.push({
    id: '114EHsinchuC-5', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '50\n2\n100 50', expectedOutput: '1' },
      { input: '800\n3\n500 200 300', expectedOutput: '3' },
      { input: '1000\n2\n300 400', expectedOutput: '待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。' },
      { input: '250\n3\n100 100 100', expectedOutput: '3' },
      { input: '100\n1\n100', expectedOutput: '1' },
    ],
  });
})();

// ---- 114EHsinchuC-6：綠色節能競賽：電價分段計費與成本分析 ----
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h6_n', 'n');
  const I = reg.declare('h6_i', 'i');
  const U = reg.declare('h6_u', 'u');
  const T1 = reg.declare('h6_t1', 't1');
  const T2R = reg.declare('h6_t2r', 't2r');
  const T2 = reg.declare('h6_t2', 't2');
  const T3R = reg.declare('h6_t3r', 't3r');
  const T3 = reg.declare('h6_t3', 't3');
  const T4R = reg.declare('h6_t4r', 't4r');
  const T4 = reg.declare('h6_t4', 't4');
  const FEE = reg.declare('h6_fee', 'fee');
  const MINV = reg.declare('h6_minv', 'minv');
  const MAXV = reg.declare('h6_maxv', 'maxv');
  const MAXI = reg.declare('h6_maxi', 'maxi');

  const askN = B.askAndWait(reg, '', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initMin = B.setVar(reg, MINV, B.numLit(999999999), null);
  const initMax = B.setVar(reg, MAXV, B.numLit(-1), null);
  const initMaxI = B.setVar(reg, MAXI, B.numLit(0), null);

  const min = (a, b) => B.ternary(B.lt(a, b), a, b);
  const maxZero = (x) => B.ternary(B.gt(x, B.numLit(0)), x, B.numLit(0));

  const ask = B.askAndWait(reg, '', null);
  const setU = B.setVar(reg, U, B.answerBlock(), null);
  const setT1 = B.setVar(reg, T1, min(B.getVar(reg, U), B.numLit(120)), null);
  const setT2R = B.setVar(reg, T2R, B.sub(min(B.getVar(reg, U), B.numLit(330)), B.numLit(120)), null);
  const setT2 = B.setVar(reg, T2, maxZero(B.getVar(reg, T2R)), null);
  const setT3R = B.setVar(reg, T3R, B.sub(min(B.getVar(reg, U), B.numLit(500)), B.numLit(330)), null);
  const setT3 = B.setVar(reg, T3, maxZero(B.getVar(reg, T3R)), null);
  const setT4R = B.setVar(reg, T4R, B.sub(B.getVar(reg, U), B.numLit(500)), null);
  const setT4 = B.setVar(reg, T4, maxZero(B.getVar(reg, T4R)), null);
  const feeSum = B.add(
    B.add(B.mul(B.getVar(reg, T1), B.numLit(1.63)), B.mul(B.getVar(reg, T2), B.numLit(2.38))),
    B.add(B.mul(B.getVar(reg, T3), B.numLit(3.52)), B.mul(B.getVar(reg, T4), B.numLit(4.8)))
  );
  const setFee = B.setVar(reg, FEE, B.round_('ROUND', feeSum), null);
  const checkMin = B.ifElseChain([B.lt(B.getVar(reg, FEE), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, FEE), null)], null);
  const checkMax = B.ifElseChain([B.gt(B.getVar(reg, FEE), B.getVar(reg, MAXV))],
    [B.chain(B.setVar(reg, MAXV, B.getVar(reg, FEE), null), B.setVar(reg, MAXI, B.getVar(reg, I), null))], null);

  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(ask, setU, setT1, setT2R, setT2, setT3R, setT3, setT4R, setT4, setFee, checkMin, checkMax));

  const sayOut = B.say(B.textJoin([B.getVar(reg, N), B.textLit(' '), B.getVar(reg, MINV), B.textLit(' '), B.getVar(reg, MAXI), B.textLit(' '), B.getVar(reg, MAXV)]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initMin, initMax, initMaxI, mainLoop, sayOut));
  tasks.push({
    id: '114EHsinchuC-6', xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n555 339 80', expectedOutput: '3 130 1 1558' },
      { input: '4\n222 911 349 119', expectedOutput: '4 194 2 3267' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hsinchuc_e.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hsinchuc_e tasks');
