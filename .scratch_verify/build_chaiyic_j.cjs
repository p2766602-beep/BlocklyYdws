const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 自動販賣機的補貨通知 —— 總和 + 數量<5的格位數。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c1_n', 'N');
  const V = reg.declare('c1_v', 'v');
  const I = reg.declare('c1_i', 'i');
  const SUM = reg.declare('c1_sum', 'sum');
  const LOW = reg.declare('c1_low', 'low');

  const askN = B.askAndWait(reg, '請輸入格位數量', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const setLow0 = B.setVar(reg, LOW, B.numLit(0), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const ifLow = B.ifElseChain([B.lt(B.getVar(reg, V), B.numLit(5))], [B.setVar(reg, LOW, B.add(B.getVar(reg, LOW), B.numLit(1)), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, addSum, ifLow));

  const top = B.whenFlagClicked(B.chain(askN, setN, setSum0, setLow0, readLoop, B.say(B.textJoin([B.getVar(reg, SUM), B.textLit(' '), B.getVar(reg, LOW)]), null)));
  tasks.push({
    id: 'ChaiyiC-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n10 10 10', expectedOutput: '30 0' },
      { input: '4\n4 4 4 4', expectedOutput: '16 4' },
      { input: '5\n1 2 3 4 5', expectedOutput: '15 4' },
      { input: '6\n0 10 0 10 0 10', expectedOutput: '30 3' },
      { input: '5\n20 20 1 20 20', expectedOutput: '81 1' },
      { input: '4\n0 0 0 0', expectedOutput: '0 4' },
      { input: '3\n10 20 30', expectedOutput: '60 0' },
      { input: '5\n5 5 5 5 5', expectedOutput: '25 0' },
      { input: '2\n4 4', expectedOutput: '8 2' },
      { input: '1\n2', expectedOutput: '2 1' },
    ],
  });
})();

// 2. 5進位解碼 —— A=0,B=1,C=2,D=3,E=4，權重由左至右依序5^(L-1)...5^0。
(function () {
  const reg = B.createVarRegistry();
  const L = reg.declare('c2_l', 'L');
  const CODE = reg.declare('c2_code', 'code');
  const I = reg.declare('c2_i', 'i');
  const CH = reg.declare('c2_ch', 'ch');
  const DIGIT = reg.declare('c2_digit', 'digit');
  const WEIGHT = reg.declare('c2_weight', 'weight');
  const RESULT = reg.declare('c2_result', 'result');

  const askL = B.askAndWait(reg, '請輸入密碼長度', null);
  const setL = B.setVar(reg, L, B.answerBlock(), null);
  const askCode = B.askAndWait(reg, '請輸入密碼內容', null);
  const setCode = B.setVar(reg, CODE, B.answerAsText(), null);
  const setResult0 = B.setVar(reg, RESULT, B.numLit(0), null);
  const setWeight0 = B.setVar(reg, WEIGHT, B.numLit(1), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, CODE), B.sub(B.add(B.getVar(reg, L), B.numLit(1)), B.getVar(reg, I))), null);
  const digitIf = B.ifElseChain(
    [B.eq(B.getVar(reg, CH), B.textLit('A')), B.eq(B.getVar(reg, CH), B.textLit('B')), B.eq(B.getVar(reg, CH), B.textLit('C')), B.eq(B.getVar(reg, CH), B.textLit('D'))],
    [B.setVar(reg, DIGIT, B.numLit(0), null), B.setVar(reg, DIGIT, B.numLit(1), null), B.setVar(reg, DIGIT, B.numLit(2), null), B.setVar(reg, DIGIT, B.numLit(3), null)],
    B.setVar(reg, DIGIT, B.numLit(4), null)
  );
  const addResult = B.setVar(reg, RESULT, B.add(B.getVar(reg, RESULT), B.mul(B.getVar(reg, DIGIT), B.getVar(reg, WEIGHT))), null);
  const bumpWeight = B.setVar(reg, WEIGHT, B.mul(B.getVar(reg, WEIGHT), B.numLit(5)), null);
  // 從最右邊字元(權重5^0)開始往左處理：I=1對應CODE最後一個字元，I=L對應第一個字元。
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, L), B.numLit(1), B.chain(setCh, digitIf, addResult, bumpWeight));

  const top = B.whenFlagClicked(B.chain(askL, setL, askCode, setCode, setResult0, setWeight0, forLoop, B.say(B.getVar(reg, RESULT), null)));
  tasks.push({
    id: 'ChaiyiC-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\nA', expectedOutput: '0' },
      { input: '2\nEE', expectedOutput: '24' },
      { input: '3\nBAA', expectedOutput: '25' },
      { input: '4\nBAAA', expectedOutput: '125' },
      { input: '5\nCDEAB', expectedOutput: '1726' },
      { input: '5\nAAAAA', expectedOutput: '0' },
      { input: '1\nE', expectedOutput: '4' },
      { input: '4\nBCDE', expectedOutput: '194' },
      { input: '5\nABCDE', expectedOutput: '194' },
      { input: '5\nEEEEE', expectedOutput: '3124' },
    ],
  });
})();

// 3. 圖書館的舊書打包 —— First-Fit-Decreasing：每個箱子從頭到尾掃一輪未裝箱的書(已由重到輕排序)，
// 裝得下就裝，直到掃完一輪都裝不下才封箱，重複直到全部裝完。
(function () {
  const reg = B.createVarRegistry();
  const W = reg.declare('c3_w', 'W');
  const N = reg.declare('c3_n', 'N');
  const WEIGHTS = reg.declare('c3_weights', 'weights');
  const PACKED = reg.declare('c3_packed', 'packed');
  const V = reg.declare('c3_v', 'v');
  const I = reg.declare('c3_i', 'i');
  const REMAINING = reg.declare('c3_remaining', 'remaining');
  const BOXES = reg.declare('c3_boxes', 'boxes');
  const PACKEDCOUNT = reg.declare('c3_packedcount', 'packedcount');

  const askW = B.askAndWait(reg, '請輸入箱子最大承重', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '請輸入書本數量', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initWeights = B.setVar(reg, WEIGHTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initPacked = B.setVar(reg, PACKED, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setWeightIdx = B.listsSetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setWeightIdx));

  const setBoxes0 = B.setVar(reg, BOXES, B.numLit(0), null);
  const setPackedCount0 = B.setVar(reg, PACKEDCOUNT, B.numLit(0), null);

  const tryPack = B.ifElseChain(
    [B.and_(B.eq(B.listsGetIndex(B.getVar(reg, PACKED), B.getVar(reg, I)), B.numLit(0)), B.lte(B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I)), B.getVar(reg, REMAINING)))],
    [B.chain(
      B.listsSetIndex(B.getVar(reg, PACKED), B.getVar(reg, I), B.numLit(1), null),
      B.setVar(reg, REMAINING, B.sub(B.getVar(reg, REMAINING), B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I))), null),
      B.setVar(reg, PACKEDCOUNT, B.add(B.getVar(reg, PACKEDCOUNT), B.numLit(1)), null)
    )],
    null
  );
  const oneBoxScan = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), tryPack);
  const oneBoxBody = B.chain(B.setVar(reg, REMAINING, B.getVar(reg, W), null), oneBoxScan, B.setVar(reg, BOXES, B.add(B.getVar(reg, BOXES), B.numLit(1)), null));
  const packLoop = B.whileUntil('UNTIL', B.gte(B.getVar(reg, PACKEDCOUNT), B.getVar(reg, N)), oneBoxBody);

  const top = B.whenFlagClicked(B.chain(askW, setW, askN, setN, initWeights, initPacked, readLoop, setBoxes0, setPackedCount0, packLoop, B.say(B.getVar(reg, BOXES), null)));
  tasks.push({
    id: 'ChaiyiC-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n3\n2 2 2', expectedOutput: '2' },
      { input: '10\n5\n9 9 5 1 1', expectedOutput: '3' },
      { input: '100\n4\n60 50 40 15 30', expectedOutput: '2' },
      { input: '15\n6\n8 7 6 5 4 3', expectedOutput: '3' },
      { input: '25\n13\n20 19 18 17 16 10 9 8 7 6 3 2 1', expectedOutput: '6' },
      { input: '10\n5\n10 10 10 10 10', expectedOutput: '5' },
      { input: '20\n5\n19 18 1 1 1', expectedOutput: '2' },
      { input: '10\n8\n6 6 6 5 4 4 4 4', expectedOutput: '4' },
      { input: '50\n10\n50 49 48 47 10 3 2 1 1 1', expectedOutput: '5' },
      { input: '100\n1\n50', expectedOutput: '1' },
    ],
  });
})();

// 4. 校車廣播系統熱血指數統計 —— 固定視窗大小K的滑動視窗最大和。
(function () {
  const reg = B.createVarRegistry();
  const K = reg.declare('c4_k', 'K');
  const N = reg.declare('c4_n', 'N');
  const VALS = reg.declare('c4_vals', 'vals');
  const V = reg.declare('c4_v', 'v');
  const I = reg.declare('c4_i', 'i');
  const C = reg.declare('c4_c', 'c');
  const START = reg.declare('c4_start', 'start');
  const SUM = reg.declare('c4_sum', 'sum');
  const BEST = reg.declare('c4_best', 'best');

  const askK = B.askAndWait(reg, '請輸入K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initVals = B.setVar(reg, VALS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setValIdx = B.listsSetIndex(B.getVar(reg, VALS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setValIdx));

  const setBest0 = B.setVar(reg, BEST, B.numLit(-999999999), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const addToSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, VALS), B.add(B.getVar(reg, START), B.getVar(reg, C)))), null);
  const sumLoop = B.controlsFor(reg, C, B.numLit(0), B.sub(B.getVar(reg, K), B.numLit(1)), B.numLit(1), addToSum);
  const ifBetter = B.ifElseChain([B.gt(B.getVar(reg, SUM), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, SUM), null)], null);
  const windowLoop = B.controlsFor(reg, START, B.numLit(1), B.sub(B.getVar(reg, N), B.sub(B.getVar(reg, K), B.numLit(1))), B.numLit(1), B.chain(setSum0, sumLoop, ifBetter));

  const top = B.whenFlagClicked(B.chain(askK, setK, askN, setN, initVals, readLoop, setBest0, windowLoop, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'ChaiyiC-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2\n4\n1 2 3 4', expectedOutput: '7' },
      { input: '3\n5\n5 5 5 5 5', expectedOutput: '15' },
      { input: '2\n5\n10 100 10 10 100', expectedOutput: '110' },
      // 來源TXT此筆預期答案「302」與演算法（固定視窗大小K=4的滑動視窗和，其餘9筆全數吻合）
      // 不符：陣列[100,100,1,2,100,2,1,1]所有4連續視窗的和分別是203,203,105,105,104，
      // 最大值應為203。302很可能是來源資料把某個「1」誤植成「100」的獨立錯誤，
      // 題庫依演算法對現有陣列的正確計算結果收錄。
      { input: '4\n8\n100 100 1 2 100 2 1 1', expectedOutput: '203' },
      { input: '3\n6\n50 10 10 50 50 10', expectedOutput: '110' },
      { input: '1\n5\n1 2 3 4 5', expectedOutput: '5' },
      { input: '5\n5\n1 -2 3 -4 5', expectedOutput: '3' },
      { input: '2\n6\n-1 -2 -3 -4 -5 -6', expectedOutput: '-3' },
      { input: '3\n7\n10 -10 10 -10 10 -10 10', expectedOutput: '10' },
      { input: '2\n4\n0 0 0 0', expectedOutput: '0' },
    ],
  });
})();

// 5. 大風吹搶位子 —— 約瑟夫問題模擬：ALIVE旗標清單+目前持球位置，數到M淘汰，剩1人為贏家。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c5_n', 'N');
  const M = reg.declare('c5_m', 'M');
  const ALIVE = reg.declare('c5_alive', 'alive');
  const CUR = reg.declare('c5_cur', 'cur');
  const REMAIN = reg.declare('c5_remain', 'remain');
  const CNT = reg.declare('c5_cnt', 'cnt');
  const STEPPED = reg.declare('c5_stepped', 'stepped');

  const askN = B.askAndWait(reg, '請輸入人數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '請輸入間隔', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const initAlive = B.setVar(reg, ALIVE, B.listsRepeat(B.numLit(1), B.getVar(reg, N)), null);
  const setCur0 = B.setVar(reg, CUR, B.numLit(1), null);
  const setRemain0 = B.setVar(reg, REMAIN, B.getVar(reg, N), null);

  // 每輪：從目前持球位置開始，數M個「還在圈子裡」的人(第1個就是目前持球者自己)，
  // 數到第M個時淘汰該人，球交給下一位還在圈內的人。
  const setCnt0 = B.setVar(reg, CNT, B.numLit(0), null);
  const advanceCur = B.setVar(reg, CUR, B.ternary(B.gt(B.getVar(reg, CUR), B.getVar(reg, N)), B.numLit(1), B.getVar(reg, CUR)), null);
  const advanceCurWrap = B.chain(B.setVar(reg, CUR, B.add(B.getVar(reg, CUR), B.numLit(1)), null), advanceCur);
  const stepBody = B.ifElseChain(
    [B.eq(B.listsGetIndex(B.getVar(reg, ALIVE), B.getVar(reg, CUR)), B.numLit(1))],
    [B.chain(B.setVar(reg, CNT, B.add(B.getVar(reg, CNT), B.numLit(1)), null), B.setVar(reg, STEPPED, B.numLit(1), null))],
    B.setVar(reg, STEPPED, B.numLit(0), null)
  );
  const oneScanStep = B.chain(stepBody, B.ifElseChain([B.lt(B.getVar(reg, CNT), B.getVar(reg, M))], [advanceCurWrap], null));
  const scanLoop = B.whileUntil('UNTIL', B.gte(B.getVar(reg, CNT), B.getVar(reg, M)), oneScanStep);
  const eliminate = B.chain(
    B.listsSetIndex(B.getVar(reg, ALIVE), B.getVar(reg, CUR), B.numLit(0), null),
    B.setVar(reg, REMAIN, B.sub(B.getVar(reg, REMAIN), B.numLit(1)), null),
    advanceCurWrap
  );
  const roundBody = B.chain(setCnt0, scanLoop, eliminate);
  const roundLoop = B.whileUntil('UNTIL', B.eq(B.getVar(reg, REMAIN), B.numLit(1)), roundBody);

  // roundLoop結束後，CUR指向的下一位不一定就是贏家(因為eliminate最後又前進了一步)；
  // 改成掃描ALIVE清單找出唯一還是1的位置最保險。
  const I = reg.declare('c5_i', 'i');
  const WINNER = reg.declare('c5_winner', 'winner');
  const findWinner = B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, ALIVE), B.getVar(reg, I)), B.numLit(1))], [B.setVar(reg, WINNER, B.getVar(reg, I), null)], null);
  const findLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), findWinner);

  const singleCase = B.ifElseChain([B.eq(B.getVar(reg, N), B.numLit(1))], [B.setVar(reg, WINNER, B.numLit(1), null)], B.chain(roundLoop, findLoop));

  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, initAlive, setCur0, setRemain0, singleCase, B.say(B.getVar(reg, WINNER), null)));
  tasks.push({
    id: 'ChaiyiC-J-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n1', expectedOutput: '3' },
      { input: '4\n2', expectedOutput: '1' },
      { input: '5\n3', expectedOutput: '4' },
      { input: '7\n4', expectedOutput: '2' },
      { input: '10\n3', expectedOutput: '4' },
      { input: '10\n1', expectedOutput: '10' },
      { input: '2\n2', expectedOutput: '1' },
      { input: '10\n5', expectedOutput: '3' },
      { input: '20\n3', expectedOutput: '20' },
      { input: '6\n6', expectedOutput: '4' },
    ],
  });
})();

// 6-1. 園遊會攤位熱度分析 —— 統計每個路口(1~N)連接走道數，找最大值(平手取編號較小)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c61_n', 'N');
  const E = reg.declare('c61_e', 'E');
  const DEG = reg.declare('c61_deg', 'deg');
  const STARTS = reg.declare('c61_starts', 'starts');
  const ENDS = reg.declare('c61_ends', 'ends');
  const V = reg.declare('c61_v', 'v');
  const I = reg.declare('c61_i', 'i');
  const BESTID = reg.declare('c61_bestid', 'bestid');
  const BESTDEG = reg.declare('c61_bestdeg', 'bestdeg');

  const askN = B.askAndWait(reg, '請輸入路口數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askE = B.askAndWait(reg, '請輸入走道數', null);
  const setE = B.setVar(reg, E, B.answerBlock(), null);
  const initDeg = B.setVar(reg, DEG, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initStarts = B.setVar(reg, STARTS, B.listsRepeat(B.numLit(0), B.getVar(reg, E)), null);
  const initEnds = B.setVar(reg, ENDS, B.listsRepeat(B.numLit(0), B.getVar(reg, E)), null);

  const askVs = B.askAndWait(reg, '', null);
  const setVs = B.setVar(reg, V, B.answerBlock(), null);
  const setStartIdx = B.listsSetIndex(B.getVar(reg, STARTS), B.getVar(reg, I), B.getVar(reg, V), null);
  const startsLoop = B.ifElseChain([B.gt(B.getVar(reg, E), B.numLit(0))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, E), B.numLit(1), B.chain(askVs, setVs, setStartIdx))], null);
  const askVe = B.askAndWait(reg, '', null);
  const setVe = B.setVar(reg, V, B.answerBlock(), null);
  const setEndIdx = B.listsSetIndex(B.getVar(reg, ENDS), B.getVar(reg, I), B.getVar(reg, V), null);
  const endsLoop = B.ifElseChain([B.gt(B.getVar(reg, E), B.numLit(0))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, E), B.numLit(1), B.chain(askVe, setVe, setEndIdx))], null);

  const bumpStart = B.listsSetIndex(B.getVar(reg, DEG), B.listsGetIndex(B.getVar(reg, STARTS), B.getVar(reg, I)), B.add(B.listsGetIndex(B.getVar(reg, DEG), B.listsGetIndex(B.getVar(reg, STARTS), B.getVar(reg, I))), B.numLit(1)), null);
  const bumpEnd = B.listsSetIndex(B.getVar(reg, DEG), B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, I)), B.add(B.listsGetIndex(B.getVar(reg, DEG), B.listsGetIndex(B.getVar(reg, ENDS), B.getVar(reg, I))), B.numLit(1)), null);
  const degLoop = B.ifElseChain([B.gt(B.getVar(reg, E), B.numLit(0))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, E), B.numLit(1), B.chain(bumpStart, bumpEnd))], null);

  const setBestDeg0 = B.setVar(reg, BESTDEG, B.numLit(-1), null);
  const ifBest = B.ifElseChain(
    [B.gt(B.listsGetIndex(B.getVar(reg, DEG), B.getVar(reg, I)), B.getVar(reg, BESTDEG))],
    [B.chain(B.setVar(reg, BESTDEG, B.listsGetIndex(B.getVar(reg, DEG), B.getVar(reg, I)), null), B.setVar(reg, BESTID, B.getVar(reg, I), null))],
    null
  );
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), ifBest);

  const top = B.whenFlagClicked(B.chain(askN, setN, askE, setE, initDeg, initStarts, initEnds, startsLoop, endsLoop, degLoop, setBestDeg0, scanLoop, B.say(B.getVar(reg, BESTID), null)));
  tasks.push({
    id: 'ChaiyiC-J-6-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n2\n1 2\n2 3', expectedOutput: '2' },
      { input: '4\n3\n1 1 1\n2 3 4', expectedOutput: '1' },
      { input: '5\n4\n1 2 3 4\n2 3 4 5', expectedOutput: '2' },
      { input: '5\n5\n1 2 3 4 5\n2 3 4 5 1', expectedOutput: '1' },
      { input: '6\n4\n1 3 4 6\n2 2 5 5', expectedOutput: '2' },
      { input: '2\n1\n1\n2', expectedOutput: '1' },
      { input: '3\n3\n1 2 3\n2 3 1', expectedOutput: '1' },
      { input: '4\n6\n1 1 1 2 2 3\n2 3 4 3 4 4', expectedOutput: '1' },
      { input: '5\n4\n3 3 3 3\n1 2 4 5', expectedOutput: '3' },
      { input: '4\n2\n4 4\n1 2', expectedOutput: '4' },
    ],
  });
})();

// 6-2. 園遊會尋找幸運抽獎號 —— 費氏數列F(1)=1,F(2)=2,F(n)=F(n-1)+F(n-2)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c62_n', 'N');
  const A = reg.declare('c62_a', 'a');
  const Bv = reg.declare('c62_b', 'b');
  const TMP = reg.declare('c62_tmp', 'tmp');
  const I = reg.declare('c62_i', 'i');

  const askN = B.askAndWait(reg, '請輸入目標格子', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setA0 = B.setVar(reg, A, B.numLit(1), null);
  const setB0 = B.setVar(reg, Bv, B.numLit(2), null);
  const stepBody = B.chain(B.setVar(reg, TMP, B.add(B.getVar(reg, A), B.getVar(reg, Bv)), null), B.setVar(reg, A, B.getVar(reg, Bv), null), B.setVar(reg, Bv, B.getVar(reg, TMP), null));
  const stepLoop = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(2))], [B.controlsFor(reg, I, B.numLit(3), B.getVar(reg, N), B.numLit(1), stepBody)], null);
  const answerIf = B.ifElseChain([B.eq(B.getVar(reg, N), B.numLit(1))], [B.say(B.getVar(reg, A), null)], B.say(B.getVar(reg, Bv), null));

  const top = B.whenFlagClicked(B.chain(askN, setN, setA0, setB0, stepLoop, answerIf));
  tasks.push({
    id: 'ChaiyiC-J-6-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1', expectedOutput: '1' },
      { input: '5', expectedOutput: '8' },
      { input: '7', expectedOutput: '21' },
      { input: '10', expectedOutput: '89' },
      { input: '20', expectedOutput: '10946' },
      { input: '2', expectedOutput: '2' },
      { input: '3', expectedOutput: '3' },
      { input: '4', expectedOutput: '5' },
      { input: '6', expectedOutput: '13' },
      { input: '15', expectedOutput: '987' },
    ],
  });
})();

// 6-3. 園遊會人潮高峰期 —— Kadane's最大子陣列和，若全負則歸零輸出0。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c63_n', 'N');
  const VALS = reg.declare('c63_vals', 'vals');
  const V = reg.declare('c63_v', 'v');
  const I = reg.declare('c63_i', 'i');
  const CUR = reg.declare('c63_cur', 'cur');
  const BEST = reg.declare('c63_best', 'best');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initVals = B.setVar(reg, VALS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setValIdx = B.listsSetIndex(B.getVar(reg, VALS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setValIdx));

  const setCur0 = B.setVar(reg, CUR, B.numLit(0), null);
  const setBest0 = B.setVar(reg, BEST, B.numLit(0), null);
  const addCur = B.setVar(reg, CUR, B.add(B.getVar(reg, CUR), B.listsGetIndex(B.getVar(reg, VALS), B.getVar(reg, I))), null);
  const resetIfNeg = B.ifElseChain([B.lt(B.getVar(reg, CUR), B.numLit(0))], [B.setVar(reg, CUR, B.numLit(0), null)], null);
  const updateBest = B.ifElseChain([B.gt(B.getVar(reg, CUR), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, CUR), null)], null);
  const kadaneLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(addCur, updateBest, resetIfNeg));

  const top = B.whenFlagClicked(B.chain(askN, setN, initVals, readLoop, setCur0, setBest0, kadaneLoop, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'ChaiyiC-J-6-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '6' },
      { input: '4\n-1 -2 -3 -4', expectedOutput: '0' },
      { input: '5\n2 -1 2 -1 2', expectedOutput: '4' },
      { input: '6\n-2 5 -1 5 -10 2', expectedOutput: '9' },
      { input: '5\n10 -20 30 -5 10', expectedOutput: '35' },
      { input: '3\n0 0 0', expectedOutput: '0' },
      { input: '4\n1 2 3 4', expectedOutput: '10' },
      // 來源TXT此筆預期答案「25」與Kadane's演算法（其餘9筆全數吻合）矛盾：陣列[10,-5,10,-5,10]
      // 所有連續子陣列的和最大值是20(整個陣列)，25超過陣列總和(20)在數學上不可能是任何
      // 連續子陣列的和，判定為來源資料獨立錯誤，依演算法結果收錄。
      { input: '5\n10 -5 10 -5 10', expectedOutput: '20' },
      { input: '3\n-100 50 -100', expectedOutput: '50' },
      { input: '10\n1 2 3 -10 5 6 -20 10 10 10', expectedOutput: '30' },
    ],
  });
})();

// 6-4. 園遊會場地復原大作戰 —— 二分搜尋答案(最小化最大工作量的區間切割問題)。
(function () {
  const reg = B.createVarRegistry();
  const M = reg.declare('c64_m', 'M');
  const N = reg.declare('c64_n', 'N');
  const WEIGHTS = reg.declare('c64_weights', 'weights');
  const V = reg.declare('c64_v', 'v');
  const I = reg.declare('c64_i', 'i');
  const LOW = reg.declare('c64_low', 'low');
  const HIGH = reg.declare('c64_high', 'high');
  const MID = reg.declare('c64_mid', 'mid');
  const PARTS = reg.declare('c64_parts', 'parts');
  const CUR = reg.declare('c64_cur', 'cur');

  const askM = B.askAndWait(reg, '請輸入志工人數', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const askN = B.askAndWait(reg, '請輸入垃圾堆數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initWeights = B.setVar(reg, WEIGHTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setValIdx = B.listsSetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setValIdx));

  const setLow0 = B.setVar(reg, LOW, B.numLit(0), null);
  const setHigh0 = B.setVar(reg, HIGH, B.numLit(0), null);
  const bumpLow = B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I)), B.getVar(reg, LOW))], [B.setVar(reg, LOW, B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I)), null)], null);
  const bumpHigh = B.setVar(reg, HIGH, B.add(B.getVar(reg, HIGH), B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I))), null);
  const initBoundsLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(bumpLow, bumpHigh));

  // 檢查能否用不超過mid的每段負重，把N堆垃圾切成<=M段：貪婪累加，超過mid就切新段。
  const setParts0 = B.setVar(reg, PARTS, B.numLit(1), null);
  const setCur0 = B.setVar(reg, CUR, B.numLit(0), null);
  const overflowIf = B.ifElseChain(
    [B.gt(B.add(B.getVar(reg, CUR), B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I))), B.getVar(reg, MID))],
    [B.chain(B.setVar(reg, PARTS, B.add(B.getVar(reg, PARTS), B.numLit(1)), null), B.setVar(reg, CUR, B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I)), null))],
    B.setVar(reg, CUR, B.add(B.getVar(reg, CUR), B.listsGetIndex(B.getVar(reg, WEIGHTS), B.getVar(reg, I))), null)
  );
  const feasCheckLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), overflowIf);
  const feasSteps = [setParts0, setCur0, feasCheckLoop];

  const setMid = B.setVar(reg, MID, B.round_('ROUNDDOWN', B.div(B.add(B.getVar(reg, LOW), B.getVar(reg, HIGH)), B.numLit(2))), null);
  const bsecStep = B.chain(
    setMid, ...feasSteps,
    B.ifElseChain([B.lte(B.getVar(reg, PARTS), B.getVar(reg, M))], [B.setVar(reg, HIGH, B.getVar(reg, MID), null)], B.setVar(reg, LOW, B.add(B.getVar(reg, MID), B.numLit(1)), null))
  );
  const bsecLoop = B.whileUntil('UNTIL', B.gte(B.getVar(reg, LOW), B.getVar(reg, HIGH)), bsecStep);

  const top = B.whenFlagClicked(B.chain(askM, setM, askN, setN, initWeights, readLoop, setLow0, setHigh0, initBoundsLoop, bsecLoop, B.say(B.getVar(reg, LOW), null)));
  tasks.push({
    id: 'ChaiyiC-J-6-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2\n3\n1 1 1', expectedOutput: '2' },
      { input: '3\n3\n10 20 30', expectedOutput: '30' },
      { input: '2\n4\n10 20 30 40', expectedOutput: '60' },
      { input: '3\n6\n1 2 3 4 5 6', expectedOutput: '9' },
      { input: '1\n5\n1 2 3 4 5', expectedOutput: '15' },
      { input: '4\n4\n10 10 10 10', expectedOutput: '10' },
      { input: '2\n5\n1 2 3 4 5', expectedOutput: '9' },
      { input: '3\n5\n5 5 5 5 5', expectedOutput: '10' },
      { input: '2\n6\n10 10 10 10 10 10', expectedOutput: '30' },
      { input: '5\n5\n1 2 3 4 5', expectedOutput: '5' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_chaiyic_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'chaiyic_j tasks');
