const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 兩段票計算 —— 與Taitung-J-1(魔法公車車票)同款：min>=10或max<=10為一段票(10點)，
// 否則跨越10號水門為兩段票(20點)；排水量<12(嚴格小於)享半價。
(function () {
  const reg = B.createVarRegistry();
  const START = reg.declare('n1_start', 'start');
  const END = reg.declare('n1_end', 'end');
  const WEIGHT = reg.declare('n1_weight', 'weight');
  const MN = reg.declare('n1_mn', 'mn');
  const MX = reg.declare('n1_mx', 'mx');
  const FARE = reg.declare('n1_fare', 'fare');

  const askStart = B.askAndWait(reg, '請輸入起點站', null);
  const setStart = B.setVar(reg, START, B.answerBlock(), null);
  const askEnd = B.askAndWait(reg, '請輸入終點站', null);
  const setEnd = B.setVar(reg, END, B.answerBlock(), null);
  const askWeight = B.askAndWait(reg, '請輸入船隻排水量', null);
  const setWeight = B.setVar(reg, WEIGHT, B.answerBlock(), null);

  const setMn = B.setVar(reg, MN, B.ternary(B.lt(B.getVar(reg, START), B.getVar(reg, END)), B.getVar(reg, START), B.getVar(reg, END)), null);
  const setMx = B.setVar(reg, MX, B.ternary(B.lt(B.getVar(reg, START), B.getVar(reg, END)), B.getVar(reg, END), B.getVar(reg, START)), null);

  const oneSeg = B.or_(B.gte(B.getVar(reg, MN), B.numLit(10)), B.lte(B.getVar(reg, MX), B.numLit(10)));
  const setFareBase = B.ifElseChain([oneSeg], [B.setVar(reg, FARE, B.numLit(10), null)], B.setVar(reg, FARE, B.numLit(20), null));
  const applyDiscount = B.ifElseChain([B.lt(B.getVar(reg, WEIGHT), B.numLit(12))], [B.setVar(reg, FARE, B.div(B.getVar(reg, FARE), B.numLit(2)), null)], null);

  const top = B.whenFlagClicked(B.chain(askStart, setStart, askEnd, setEnd, askWeight, setWeight, setMn, setMx, setFareBase, applyDiscount, B.say(B.getVar(reg, FARE), null)));
  tasks.push({
    id: 'NewTaipei-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5 8 18', expectedOutput: '10' },
      { input: '7 12 20', expectedOutput: '20' },
      { input: '13 10 8', expectedOutput: '5' },
      { input: '9 11 11', expectedOutput: '10' },
      { input: '1 20 12', expectedOutput: '20' },
      { input: '10 10 5', expectedOutput: '5' },
      { input: '20 1 100', expectedOutput: '20' },
      { input: '1 9 100', expectedOutput: '10' },
      { input: '11 20 1', expectedOutput: '5' },
      { input: '10 11 11', expectedOutput: '5' },
    ],
  });
})();

// 2. 我的健康小管家（BMR，固定年齡14歲，簡化公式）。
(function () {
  const reg = B.createVarRegistry();
  const H = reg.declare('n2_h', 'H');
  const W = reg.declare('n2_w', 'W');
  const BMR = reg.declare('n2_bmr', 'bmr');
  const CAT = reg.declare('n2_cat', 'cat');

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
    id: 'NewTaipei-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '170\n55', expectedOutput: '1423 較低能量' },
      { input: '175\n70', expectedOutput: '1576 標準能量' },
      { input: '150\n30', expectedOutput: '1147 極低能量' },
      { input: '180\n95', expectedOutput: '1825 較高能量' },
      { input: '200\n120', expectedOutput: '2101 極高能量' },
      { input: '160\n40', expectedOutput: '1261 較低能量' },
      { input: '165\n60', expectedOutput: '1462 較低能量' },
      { input: '170\n80', expectedOutput: '1663 標準能量' },
      { input: '190\n100', expectedOutput: '1891 較高能量' },
      { input: '150\n40', expectedOutput: '1243 較低能量' },
    ],
  });
})();

// 3. 智慧倉儲 —— 依貨物最大邊長分類(>80只能大櫃；>30~80中/大櫃；<=30小/中/大櫃)，
// 優先用最小可用尺寸櫃子，依序遞減庫存，無可用櫃子則算未放置。
(function () {
  const reg = B.createVarRegistry();
  const L0 = reg.declare('n3_l0', 'L');
  const M0 = reg.declare('n3_m0', 'M');
  const S0 = reg.declare('n3_s0', 'S');
  const N = reg.declare('n3_n', 'N');
  const LEN = reg.declare('n3_len', 'len');
  const WID = reg.declare('n3_wid', 'wid');
  const HEI = reg.declare('n3_hei', 'hei');
  const MAXDIM = reg.declare('n3_maxdim', 'maxdim');
  const I = reg.declare('n3_i', 'i');
  const LUSED = reg.declare('n3_lused', 'lused');
  const MUSED = reg.declare('n3_mused', 'mused');
  const SUSED = reg.declare('n3_sused', 'sused');
  const FAIL = reg.declare('n3_fail', 'fail');

  const askL0 = B.askAndWait(reg, '請輸入大櫃子數量', null);
  const setL0 = B.setVar(reg, L0, B.answerBlock(), null);
  const askM0 = B.askAndWait(reg, '請輸入中櫃子數量', null);
  const setM0 = B.setVar(reg, M0, B.answerBlock(), null);
  const askS0 = B.askAndWait(reg, '請輸入小櫃子數量', null);
  const setS0 = B.setVar(reg, S0, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '請輸入貨物件數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setLUsed0 = B.setVar(reg, LUSED, B.numLit(0), null);
  const setMUsed0 = B.setVar(reg, MUSED, B.numLit(0), null);
  const setSUsed0 = B.setVar(reg, SUSED, B.numLit(0), null);
  const setFail0 = B.setVar(reg, FAIL, B.numLit(0), null);

  const maxOf3 = B.ternary(
    B.gt(B.getVar(reg, LEN), B.getVar(reg, WID)),
    B.ternary(B.gt(B.getVar(reg, LEN), B.getVar(reg, HEI)), B.getVar(reg, LEN), B.getVar(reg, HEI)),
    B.ternary(B.gt(B.getVar(reg, WID), B.getVar(reg, HEI)), B.getVar(reg, WID), B.getVar(reg, HEI))
  );

  const useS = B.chain(B.setVar(reg, S0, B.sub(B.getVar(reg, S0), B.numLit(1)), null), B.setVar(reg, SUSED, B.add(B.getVar(reg, SUSED), B.numLit(1)), null));
  const useM = B.chain(B.setVar(reg, M0, B.sub(B.getVar(reg, M0), B.numLit(1)), null), B.setVar(reg, MUSED, B.add(B.getVar(reg, MUSED), B.numLit(1)), null));
  const useL = B.chain(B.setVar(reg, L0, B.sub(B.getVar(reg, L0), B.numLit(1)), null), B.setVar(reg, LUSED, B.add(B.getVar(reg, LUSED), B.numLit(1)), null));
  const useFail = B.setVar(reg, FAIL, B.add(B.getVar(reg, FAIL), B.numLit(1)), null);

  // 大型(maxdim>80)：只能用大櫃。
  const largeOnly = B.ifElseChain([B.gt(B.getVar(reg, L0), B.numLit(0))], [useL], useFail);
  // 中型(30<maxdim<=80)：優先中櫃，其次大櫃。
  const midChain = B.ifElseChain([B.gt(B.getVar(reg, M0), B.numLit(0))], [useM], B.ifElseChain([B.gt(B.getVar(reg, L0), B.numLit(0))], [useL], useFail));
  // 小型(maxdim<=30)：優先小櫃，其次中櫃，其次大櫃。
  const smallChain = B.ifElseChain(
    [B.gt(B.getVar(reg, S0), B.numLit(0))],
    [useS],
    B.ifElseChain([B.gt(B.getVar(reg, M0), B.numLit(0))], [useM], B.ifElseChain([B.gt(B.getVar(reg, L0), B.numLit(0))], [useL], useFail))
  );

  const placeIf = B.ifElseChain(
    [B.gt(B.getVar(reg, MAXDIM), B.numLit(80)), B.gt(B.getVar(reg, MAXDIM), B.numLit(30))],
    [largeOnly, midChain],
    smallChain
  );

  const askLen = B.askAndWait(reg, '', null);
  const setLen = B.setVar(reg, LEN, B.answerBlock(), null);
  const askWid = B.askAndWait(reg, '', null);
  const setWid = B.setVar(reg, WID, B.answerBlock(), null);
  const askHei = B.askAndWait(reg, '', null);
  const setHei = B.setVar(reg, HEI, B.answerBlock(), null);
  const setMaxdim = B.setVar(reg, MAXDIM, maxOf3, null);
  const itemLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askLen, setLen, askWid, setWid, askHei, setHei, setMaxdim, placeIf));

  const sayResult = B.say(B.textJoin([B.getVar(reg, LUSED), B.textLit(' '), B.getVar(reg, MUSED), B.textLit(' '), B.getVar(reg, SUSED), B.textLit(' '), B.getVar(reg, FAIL)]), null);
  const top = B.whenFlagClicked(B.chain(askL0, setL0, askM0, setM0, askS0, setS0, askN, setN, setLUsed0, setMUsed0, setSUsed0, setFail0, itemLoop, sayResult));
  tasks.push({
    id: 'NewTaipei-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2 2 2\n3\n30 30 30 30 30 30 30 30 40', expectedOutput: '0 1 2 0' },
      { input: '2 1 1\n3\n30 30 30 30 30 30 30 30 40', expectedOutput: '1 1 1 0' },
      { input: '1 2 5\n4\n60 30 30 30 60 30 30 60 65 100 5 5', expectedOutput: '1 2 0 1' },
      { input: '0 0 0\n2\n10 10 10 10 10 10', expectedOutput: '0 0 0 2' },
      { input: '5 5 5\n5\n90 90 90 90 90 90 90 90 90 90 90 90 90 90 90', expectedOutput: '5 0 0 0' },
      { input: '5 5 5\n5\n50 50 50 50 50 50 50 50 50 50 50 50 50 50 50', expectedOutput: '0 5 0 0' },
      { input: '5 5 5\n5\n10 10 10 10 10 10 10 10 10 10 10 10 10 10 10', expectedOutput: '0 0 5 0' },
      { input: '1 1 1\n4\n10 10 10 10 10 10 10 10 10 10 10 10', expectedOutput: '1 1 1 1' },
      { input: '2 0 0\n3\n10 10 10 10 10 10 10 10 10', expectedOutput: '2 0 0 1' },
      { input: '10 10 10\n3\n100 100 100 50 50 50 10 10 10', expectedOutput: '1 1 1 0' },
    ],
  });
})();

// 4. 王牌教練 —— 從N(4或5)人中選4人排順序，最小化總跑步時間+3次接棒時間(相鄰接棒時間取較大值)。
// N<=5，窮舉：選哪一人不上場(N=4時視為「不排除任何人」)，再窮舉4人全部24種排列組合。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('n4_n', 'N');
  const RT = reg.declare('n4_rt', 'rt');
  const BT = reg.declare('n4_bt', 'bt');
  const PERMS = reg.declare('n4_perms', 'perms');
  const EX = reg.declare('n4_ex', 'ex');
  const CC = reg.declare('n4_cc', 'cc');
  const OI = reg.declare('n4_oi', 'oi');
  const CHOSEN = reg.declare('n4_chosen', 'chosen');
  const P = reg.declare('n4_p', 'p');
  const P1 = reg.declare('n4_p1', 'p1');
  const P2 = reg.declare('n4_p2', 'p2');
  const P3 = reg.declare('n4_p3', 'p3');
  const P4 = reg.declare('n4_p4', 'p4');
  const RI1 = reg.declare('n4_ri1', 'ri1');
  const RI2 = reg.declare('n4_ri2', 'ri2');
  const RI3 = reg.declare('n4_ri3', 'ri3');
  const RI4 = reg.declare('n4_ri4', 'ri4');
  const TOTAL = reg.declare('n4_total', 'total');
  const BEST = reg.declare('n4_best', 'best');

  function permute(arr) {
    if (arr.length <= 1) return [arr];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const p of permute(rest)) res.push([arr[i], ...p]);
    }
    return res;
  }
  const permRows = permute([1, 2, 3, 4]).map((row) => B.listsCreateWith(row.map((n) => B.numLit(n))));
  const initPerms = B.setVar(reg, PERMS, B.listsCreateWith(permRows), null);

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initRt = B.setVar(reg, RT, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initBt = B.setVar(reg, BT, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initChosen = B.setVar(reg, CHOSEN, B.listsRepeat(B.numLit(0), B.numLit(4)), null);

  const setBtIdx = B.listsSetIndex(B.getVar(reg, BT), B.getVar(reg, OI), B.answerBlock(), null);
  const setRtIdx = B.listsSetIndex(B.getVar(reg, RT), B.getVar(reg, OI), B.answerBlock(), null);
  const readLoop = B.controlsFor(reg, OI, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(
    B.askAndWait(reg, '', null), setRtIdx,
    B.askAndWait(reg, '', null), setBtIdx
  ));

  const maxXml = (a, bXml) => B.ternary(B.gt(a, bXml), a, bXml);

  // 注意：extractPermSteps/resolveRunnerSteps回傳「原子步驟陣列」而非先chain()好的區塊，
  // 呼叫端用展開運算子統一攤平進同一層chain()，避免chain-of-chain的重複<next>bug。
  const extractPermSteps = [
    B.setVar(reg, P1, B.listsGetIndex(B.listsGetIndex(B.getVar(reg, PERMS), B.getVar(reg, P)), B.numLit(1)), null),
    B.setVar(reg, P2, B.listsGetIndex(B.listsGetIndex(B.getVar(reg, PERMS), B.getVar(reg, P)), B.numLit(2)), null),
    B.setVar(reg, P3, B.listsGetIndex(B.listsGetIndex(B.getVar(reg, PERMS), B.getVar(reg, P)), B.numLit(3)), null),
    B.setVar(reg, P4, B.listsGetIndex(B.listsGetIndex(B.getVar(reg, PERMS), B.getVar(reg, P)), B.numLit(4)), null),
  ];
  const resolveRunnerSteps = [
    B.setVar(reg, RI1, B.listsGetIndex(B.getVar(reg, CHOSEN), B.getVar(reg, P1)), null),
    B.setVar(reg, RI2, B.listsGetIndex(B.getVar(reg, CHOSEN), B.getVar(reg, P2)), null),
    B.setVar(reg, RI3, B.listsGetIndex(B.getVar(reg, CHOSEN), B.getVar(reg, P3)), null),
    B.setVar(reg, RI4, B.listsGetIndex(B.getVar(reg, CHOSEN), B.getVar(reg, P4)), null),
  ];
  const totalRun = B.add(
    B.add(B.listsGetIndex(B.getVar(reg, RT), B.getVar(reg, RI1)), B.listsGetIndex(B.getVar(reg, RT), B.getVar(reg, RI2))),
    B.add(B.listsGetIndex(B.getVar(reg, RT), B.getVar(reg, RI3)), B.listsGetIndex(B.getVar(reg, RT), B.getVar(reg, RI4)))
  );
  const bt1 = B.listsGetIndex(B.getVar(reg, BT), B.getVar(reg, RI1));
  const bt2 = B.listsGetIndex(B.getVar(reg, BT), B.getVar(reg, RI2));
  const bt3 = B.listsGetIndex(B.getVar(reg, BT), B.getVar(reg, RI3));
  const bt4 = B.listsGetIndex(B.getVar(reg, BT), B.getVar(reg, RI4));
  const batonTime = B.add(B.add(maxXml(bt1, bt2), maxXml(bt2, bt3)), maxXml(bt3, bt4));
  const setTotal = B.setVar(reg, TOTAL, B.add(totalRun, batonTime), null);
  const updateBest = B.ifElseChain([B.lt(B.getVar(reg, TOTAL), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, TOTAL), null)], null);
  const permLoop = B.controlsFor(reg, P, B.numLit(1), B.numLit(24), B.numLit(1), B.chain(...extractPermSteps, ...resolveRunnerSteps, setTotal, updateBest));

  function buildAttempt(exXml) {
    const buildChosenBody = B.ifElseChain(
      [B.neq(B.getVar(reg, OI), exXml)],
      [B.chain(B.setVar(reg, CC, B.add(B.getVar(reg, CC), B.numLit(1)), null), B.listsSetIndex(B.getVar(reg, CHOSEN), B.getVar(reg, CC), B.getVar(reg, OI), null))],
      null
    );
    const buildChosenLoop = B.controlsFor(reg, OI, B.numLit(1), B.getVar(reg, N), B.numLit(1), buildChosenBody);
    return B.chain(B.setVar(reg, CC, B.numLit(0), null), buildChosenLoop, permLoop);
  }

  const setBest0 = B.setVar(reg, BEST, B.numLit(999999999), null);
  const n4Branch = buildAttempt(B.numLit(0));
  const n5Branch = B.controlsFor(reg, EX, B.numLit(1), B.getVar(reg, N), B.numLit(1), buildAttempt(B.getVar(reg, EX)));
  const chooseBranch = B.ifElseChain([B.eq(B.getVar(reg, N), B.numLit(4))], [n4Branch], n5Branch);

  const top = B.whenFlagClicked(B.chain(initPerms, askN, setN, initRt, initBt, initChosen, readLoop, setBest0, chooseBranch, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'NewTaipei-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n10 1 10 1 10 1 10 1', expectedOutput: '43' },
      { input: '4\n13 1 9 4 12 2 11 3', expectedOutput: '54' },
      { input: '5\n12 3 15 4 13 2 11 6 11 1', expectedOutput: '58' },
      { input: '4\n9 10 10 1 10 1 10 1', expectedOutput: '51' },
      { input: '4\n8 8 8 8 12 1 12 1', expectedOutput: '57' },
      { input: '5\n9 5 9 5 9 5 20 1 20 1', expectedOutput: '62' },
      { input: '5\n10 1 10 1 10 1 10 50 11 2', expectedOutput: '45' },
      { input: '5\n30 30 31 2 32 2 33 2 34 2', expectedOutput: '136' },
      { input: '4\n10 10 10 10 10 10 10 10', expectedOutput: '70' },
      { input: '5\n1 1 1 1 1 1 1 1 100 100', expectedOutput: '7' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_newtaipei_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'newtaipei_j tasks');
