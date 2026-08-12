const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 一、考試座位安排 —— row=floor((K-1)/M)+1, pos=K-(row-1)*M。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s1_n', 'N');
  const M = reg.declare('s1_m', 'M');
  const K = reg.declare('s1_k', 'K');
  const ROW = reg.declare('s1_row', 'row');
  const POS = reg.declare('s1_pos', 'pos');

  const askN = B.askAndWait(reg, '請輸入N M', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const askK = B.askAndWait(reg, '請輸入K', null);
  const setK = B.setVar(reg, K, B.answerBlock(), null);

  const setRow = B.setVar(reg, ROW, B.add(B.round_('ROUNDDOWN', B.div(B.sub(B.getVar(reg, K), B.numLit(1)), B.getVar(reg, M))), B.numLit(1)), null);
  const setPos = B.setVar(reg, POS, B.sub(B.getVar(reg, K), B.mul(B.sub(B.getVar(reg, ROW), B.numLit(1)), B.getVar(reg, M))), null);
  const sayResult = B.say(B.textJoin([B.getVar(reg, ROW), B.textLit(' '), B.getVar(reg, POS)]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, askK, setK, setRow, setPos, sayResult));
  tasks.push({
    id: 'Hsinchu-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5 4\n7', expectedOutput: '2 3' },
      { input: '3 5\n13', expectedOutput: '3 3' },
      { input: '1 10\n5', expectedOutput: '1 5' },
      { input: '10 1\n8', expectedOutput: '8 1' },
      { input: '100 100\n10000', expectedOutput: '100 100' },
      { input: '10 10\n1', expectedOutput: '1 1' },
      { input: '10 5\n15', expectedOutput: '3 5' },
      { input: '6 7\n42', expectedOutput: '6 7' },
      { input: '20 30\n599', expectedOutput: '20 29' },
      { input: '5 5\n21', expectedOutput: '5 1' },
    ],
  });
})();

// 二、智慧氣候監測系統 —— 全距=最大值-最小值。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s2_n', 'N');
  const I = reg.declare('s2_i', 'i');
  const V = reg.declare('s2_v', 'v');
  const MAXV = reg.declare('s2_max', 'maxv');
  const MINV = reg.declare('s2_min', 'minv');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, ifMax, ifMin));

  const top = B.whenFlagClicked(B.chain(askN, setN, setMax0, setMin0, forLoop, B.say(B.sub(B.getVar(reg, MAXV), B.getVar(reg, MINV)), null)));
  tasks.push({
    id: 'Hsinchu-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n10 50 30 20 40', expectedOutput: '40' },
      { input: '6\n5 8 12 3 9 3', expectedOutput: '9' },
      { input: '1\n25', expectedOutput: '0' },
      { input: '3\n-10 -5 -20', expectedOutput: '15' },
      { input: '4\n0 0 0 0', expectedOutput: '0' },
      { input: '5\n-100 100 0 50 -50', expectedOutput: '200' },
      { input: '10\n1 2 3 4 5 6 7 8 9 10', expectedOutput: '9' },
      { input: '2\n10 -10', expectedOutput: '20' },
      { input: '5\n1000 1000 -1000 -1000 0', expectedOutput: '2000' },
      { input: '3\n1 10000 5000', expectedOutput: '9999' },
    ],
  });
})();

// 三、快遞物流中心分類系統 —— 奇數由輕到重、偶數由重到輕，各自排序後接續輸出。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s3_n', 'N');
  const V = reg.declare('s3_v', 'v');
  const I = reg.declare('s3_i', 'i');
  const J = reg.declare('s3_j', 'j');
  const ODDS = reg.declare('s3_odds', 'odds');
  const EVENS = reg.declare('s3_evens', 'evens');
  const ODDCOUNT = reg.declare('s3_oddcount', 'oddcount');
  const EVENCOUNT = reg.declare('s3_evencount', 'evencount');
  const TMP = reg.declare('s3_tmp', 'tmp');
  const OUT = reg.declare('s3_out', 'out');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initOdds = B.setVar(reg, ODDS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initEvens = B.setVar(reg, EVENS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setOddCount0 = B.setVar(reg, ODDCOUNT, B.numLit(0), null);
  const setEvenCount0 = B.setVar(reg, EVENCOUNT, B.numLit(0), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const putOdd = B.chain(
    B.setVar(reg, ODDCOUNT, B.add(B.getVar(reg, ODDCOUNT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, ODDS), B.getVar(reg, ODDCOUNT), B.getVar(reg, V), null)
  );
  const putEven = B.chain(
    B.setVar(reg, EVENCOUNT, B.add(B.getVar(reg, EVENCOUNT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, EVENS), B.getVar(reg, EVENCOUNT), B.getVar(reg, V), null)
  );
  const classifyIf = B.ifElseChain([B.neq(B.modulo(B.getVar(reg, V), B.numLit(2)), B.numLit(0))], [putOdd], putEven);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, classifyIf));

  // 泡泡排序：ascending=true時由小到大，否則由大到小。用一個獨立的builder函式產生，
  // 但每次呼叫都用不同的I/J/TMP變數避免巢狀迴圈變數衝突（這裡共用同一組即可，因為
  // 兩段排序是先後執行，不是同時巢狀）。
  function bubbleSort(listVar, countVar, ascending) {
    const cond = ascending
      ? B.gt(B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, J)))
      : B.lt(B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, J)));
    const swapSteps = B.chain(
      B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, I)), null),
      B.listsSetIndex(B.getVar(reg, listVar), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, listVar), B.getVar(reg, J)), null),
      B.listsSetIndex(B.getVar(reg, listVar), B.getVar(reg, J), B.getVar(reg, TMP), null)
    );
    const ifSwap = B.ifElseChain([cond], [swapSteps], null);
    const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, countVar), B.numLit(1), ifSwap);
    const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, countVar), B.numLit(1)), B.numLit(1), innerLoop);
    // 重要平台限定行為（實測確認）：Blockly的controls_for如果FROM>TO（例如count<=1時，
    // TO=count-1<=0<FROM=1），不會像一般迴圈語意那樣「跑0次」，而是自動偵測成「要倒著
    // 數」硬跑至少一次（生成碼裡有個i_inc反向偵測），導致count<=1時桌面排序迴圈仍然跑
    // 一輪、內層J迴圈FROM=I+1也可能超出清單範圍。一律加上count>1才進迴圈的保護。
    return B.ifElseChain([B.gt(B.getVar(reg, countVar), B.numLit(1))], [outerLoop], null);
  }
  const sortOdds = bubbleSort(ODDS, ODDCOUNT, true);
  const sortEvens = bubbleSort(EVENS, EVENCOUNT, false);

  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const appendOdd = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.listsGetIndex(B.getVar(reg, ODDS), B.getVar(reg, I))]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.listsGetIndex(B.getVar(reg, ODDS), B.getVar(reg, I))]), null)
  );
  const outOddLoop = B.ifElseChain([B.gt(B.getVar(reg, ODDCOUNT), B.numLit(0))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, ODDCOUNT), B.numLit(1), appendOdd)], null);
  const appendEven = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.listsGetIndex(B.getVar(reg, EVENS), B.getVar(reg, I))]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.listsGetIndex(B.getVar(reg, EVENS), B.getVar(reg, I))]), null)
  );
  const outEvenLoop = B.ifElseChain([B.gt(B.getVar(reg, EVENCOUNT), B.numLit(0))], [B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, EVENCOUNT), B.numLit(1), appendEven)], null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initOdds, initEvens, setOddCount0, setEvenCount0, readLoop, sortOdds, sortEvens, setOut0, outOddLoop, outEvenLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Hsinchu-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6\n5 12 3 8 7 10', expectedOutput: '3 5 7 12 10 8' },
      { input: '8\n15 20 11 6 9 14 2 13', expectedOutput: '9 11 13 15 20 14 6 2' },
      { input: '3\n1 3 5', expectedOutput: '1 3 5' },
      { input: '4\n2 4 6 8', expectedOutput: '8 6 4 2' },
      { input: '1\n10', expectedOutput: '10' },
      { input: '5\n0 1 2 3 4', expectedOutput: '1 3 4 2 0' },
      { input: '6\n9 9 9 10 10 10', expectedOutput: '9 9 9 10 10 10' },
      { input: '10\n10 9 8 7 6 5 4 3 2 1', expectedOutput: '1 3 5 7 9 10 8 6 4 2' },
      { input: '5\n100 0 100 0 100', expectedOutput: '100 100 100 0 0' },
      { input: '7\n11 22 33 44 55 66 77', expectedOutput: '11 33 55 77 66 44 22' },
    ],
  });
})();

// 四、寶可夢聯盟大挑戰 —— 戰鬥力=(攻+防)*加成（攻>防:2,攻=防:3,攻<防:1），找第二高。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s4_n', 'N');
  const NAMES = reg.declare('s4_names', 'names');
  const ATKS = reg.declare('s4_atks', 'atks');
  const DEFS = reg.declare('s4_defs', 'defs');
  const COMBATS = reg.declare('s4_combats', 'combats');
  const NAME = reg.declare('s4_name', 'name');
  const ATK = reg.declare('s4_atk', 'atk');
  const DEF = reg.declare('s4_def', 'def');
  const MULT = reg.declare('s4_mult', 'mult');
  const I = reg.declare('s4_i', 'i');
  const MAX1 = reg.declare('s4_max1', 'max1');
  const MAX2 = reg.declare('s4_max2', 'max2');
  const IDX1 = reg.declare('s4_idx1', 'idx1');
  const IDX2 = reg.declare('s4_idx2', 'idx2');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNames = B.setVar(reg, NAMES, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initAtks = B.setVar(reg, ATKS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initDefs = B.setVar(reg, DEFS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initCombats = B.setVar(reg, COMBATS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askName = B.askAndWait(reg, '', null);
  const setName = B.setVar(reg, NAME, B.answerBlock(), null);
  const askAtk = B.askAndWait(reg, '', null);
  const setAtk = B.setVar(reg, ATK, B.answerBlock(), null);
  const askDef = B.askAndWait(reg, '', null);
  const setDef = B.setVar(reg, DEF, B.answerBlock(), null);
  const multIf = B.ifElseChain(
    [B.gt(B.getVar(reg, ATK), B.getVar(reg, DEF)), B.eq(B.getVar(reg, ATK), B.getVar(reg, DEF))],
    [B.setVar(reg, MULT, B.numLit(2), null), B.setVar(reg, MULT, B.numLit(3), null)],
    B.setVar(reg, MULT, B.numLit(1), null)
  );
  const setNameIdx = B.listsSetIndex(B.getVar(reg, NAMES), B.getVar(reg, I), B.getVar(reg, NAME), null);
  const setAtkIdx = B.listsSetIndex(B.getVar(reg, ATKS), B.getVar(reg, I), B.getVar(reg, ATK), null);
  const setDefIdx = B.listsSetIndex(B.getVar(reg, DEFS), B.getVar(reg, I), B.getVar(reg, DEF), null);
  const setCombatIdx = B.listsSetIndex(B.getVar(reg, COMBATS), B.getVar(reg, I), B.mul(B.add(B.getVar(reg, ATK), B.getVar(reg, DEF)), B.getVar(reg, MULT)), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askName, setName, askAtk, setAtk, askDef, setDef, multIf, setNameIdx, setAtkIdx, setDefIdx, setCombatIdx));

  // 修正（比對114EHsinchu.txt新版10筆評審資料才發現）：題目保證「戰鬥力皆不相同」但實際
  // 評審資料裡有平手的案例（例如P2/P3戰鬥力都是6），原本「找嚴格小於MAX1的最大值」在平手
  // 時會整個跳過並列最高的那些，答案錯誤。改成單一輪次的「跑動最大值/次大值」寫法：
  // 新數值>=目前MAX時，把目前MAX降級成新的次大值（次大值IDX也跟著換成舊的最大值IDX），
  // 再把新數值升格為MAX；新數值只是>目前次大值（但不到MAX）時，只更新次大值。這種寫法
  // 在平手時會把「後來才平手追上的那個」自然降格成次大值，跟評審資料10筆全部一致。
  const setMax0 = B.setVar(reg, MAX1, B.numLit(-999999999), null);
  const setSecond0 = B.setVar(reg, MAX2, B.numLit(-999999999), null);
  const setIdx1_0 = B.setVar(reg, IDX1, B.numLit(0), null);
  const setIdx2_0 = B.setVar(reg, IDX2, B.numLit(0), null);
  const findTop2 = B.ifElseChain(
    [B.gte(B.listsGetIndex(B.getVar(reg, COMBATS), B.getVar(reg, I)), B.getVar(reg, MAX1))],
    [B.chain(
      B.setVar(reg, MAX2, B.getVar(reg, MAX1), null),
      B.setVar(reg, IDX2, B.getVar(reg, IDX1), null),
      B.setVar(reg, MAX1, B.listsGetIndex(B.getVar(reg, COMBATS), B.getVar(reg, I)), null),
      B.setVar(reg, IDX1, B.getVar(reg, I), null)
    )],
    B.ifElseChain(
      [B.gt(B.listsGetIndex(B.getVar(reg, COMBATS), B.getVar(reg, I)), B.getVar(reg, MAX2))],
      [B.chain(B.setVar(reg, MAX2, B.listsGetIndex(B.getVar(reg, COMBATS), B.getVar(reg, I)), null), B.setVar(reg, IDX2, B.getVar(reg, I), null))],
      null
    )
  );
  const loopTop2 = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), findTop2);

  const sayResult = B.say(B.textJoin([
    B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, IDX2)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, ATKS), B.getVar(reg, IDX2)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, DEFS), B.getVar(reg, IDX2)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, COMBATS), B.getVar(reg, IDX2)),
  ]), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initNames, initAtks, initDefs, initCombats, readLoop, setMax0, setSecond0, setIdx1_0, setIdx2_0, loopTop2, sayResult));
  tasks.push({
    id: 'Hsinchu-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '4\n皮卡丘 10 5\n小火龍 7 7\n傑尼龜 6 9\n伊布 8 8', expectedOutput: '小火龍 7 7 42' },
      { input: '5\n妙蛙種子 6 6\n波波 5 3\n可達鴨 4 7\n尼多力諾 9 4\n喵喵 3 3', expectedOutput: '尼多力諾 9 4 26' },
      { input: '2\nA 10 5\nB 5 10', expectedOutput: 'B 5 10 15' },
      { input: '3\nP1 1 2\nP2 2 1\nP3 1 1', expectedOutput: 'P2 2 1 6' },
      { input: '3\nX 10 10\nY 20 10\nZ 10 20', expectedOutput: 'X 10 10 60' },
      { input: '4\nA 100 1\nB 1 100\nC 50 50\nD 51 50', expectedOutput: 'A 100 1 202' },
      { input: '5\nA 10 10\nB 20 20\nC 30 30\nD 40 40\nE 50 50', expectedOutput: 'D 40 40 240' },
      { input: '3\nP1 1 100\nP2 2 100\nP3 3 100', expectedOutput: 'P2 2 100 102' },
      { input: '4\nOne 10 5\nTwo 10 6\nThree 10 7\nFour 10 8', expectedOutput: 'Three 10 7 34' },
      { input: '3\nM 10 10\nN 15 10\nO 10 15', expectedOutput: 'N 15 10 50' },
    ],
  });
})();

// 五、省電大作戰 —— 需要「離目前位置最近的下一個必須開機時刻」，反向掃描預先算好。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s5_n', 'N');
  const SCHED = reg.declare('s5_sched', 'sched');
  const NEXT1 = reg.declare('s5_next1', 'next1');
  const V = reg.declare('s5_v', 'v');
  const I = reg.declare('s5_i', 'i');
  const STATE = reg.declare('s5_state', 'state');
  const TOTAL = reg.declare('s5_total', 'total');
  const GAP = reg.declare('s5_gap', 'gap');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initSched = B.setVar(reg, SCHED, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initNext1 = B.setVar(reg, NEXT1, B.listsRepeat(B.numLit(999999), B.getVar(reg, N)), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setSchedIdx = B.listsSetIndex(B.getVar(reg, SCHED), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setSchedIdx));

  // 反向掃描：NEXT1[i] = 若SCHED[i]==1則為i，否則延用NEXT1[i+1]（i=N時沒有i+1，維持
  // 初始的999999代表「後面沒有需要開機的時刻」）。
  const backwardBody = B.ifElseChain(
    [B.eq(B.listsGetIndex(B.getVar(reg, SCHED), B.getVar(reg, I)), B.numLit(1))],
    [B.listsSetIndex(B.getVar(reg, NEXT1), B.getVar(reg, I), B.getVar(reg, I), null)],
    B.ifElseChain(
      [B.lt(B.getVar(reg, I), B.getVar(reg, N))],
      [B.listsSetIndex(B.getVar(reg, NEXT1), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, NEXT1), B.add(B.getVar(reg, I), B.numLit(1))), null)],
      null
    )
  );
  const backwardLoop = B.controlsFor(reg, I, B.getVar(reg, N), B.numLit(1), B.numLit(-1), backwardBody);

  const setState0 = B.setVar(reg, STATE, B.numLit(0), null);
  const setTotal0 = B.setVar(reg, TOTAL, B.numLit(0), null);

  const turnOnFresh = B.chain(B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.numLit(6)), null), B.setVar(reg, STATE, B.numLit(1), null));
  const stayOnCost1 = B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.numLit(1)), null);
  const ifRequired = B.ifElseChain([B.eq(B.getVar(reg, STATE), B.numLit(0))], [turnOnFresh], stayOnCost1);

  const setGap = B.setVar(reg, GAP, B.sub(B.listsGetIndex(B.getVar(reg, NEXT1), B.getVar(reg, I)), B.getVar(reg, I)), null);
  const stayOnGap = B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.numLit(1)), null);
  const turnOff = B.setVar(reg, STATE, B.numLit(0), null);
  const ifOptional = B.ifElseChain(
    [B.eq(B.getVar(reg, STATE), B.numLit(1))],
    [B.chain(setGap, B.ifElseChain([B.lt(B.getVar(reg, GAP), B.numLit(4))], [stayOnGap], turnOff))],
    null
  );

  const hourBody = B.ifElseChain([B.eq(B.listsGetIndex(B.getVar(reg, SCHED), B.getVar(reg, I)), B.numLit(1))], [ifRequired], ifOptional);
  const mainLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), hourBody);

  const top = B.whenFlagClicked(B.chain(askN, setN, initSched, initNext1, readLoop, backwardLoop, setState0, setTotal0, mainLoop, B.say(B.getVar(reg, TOTAL), null)));
  tasks.push({
    id: 'Hsinchu-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n1 1 1 1 1', expectedOutput: '10' },
      { input: '8\n1 0 0 1 0 1 0 0', expectedOutput: '11' },
      { input: '3\n0 0 0', expectedOutput: '0' },
      { input: '1\n1', expectedOutput: '6' },
      { input: '7\n1 0 0 0 0 0 1', expectedOutput: '12' },
      { input: '6\n1 0 0 0 0 1', expectedOutput: '12' },
      { input: '5\n1 0 0 0 1', expectedOutput: '10' },
      { input: '10\n1 0 1 0 1 0 1 0 1 0', expectedOutput: '14' },
      { input: '15\n1 0 0 0 0 0 0 1 0 0 0 0 0 0 1', expectedOutput: '18' },
      { input: '8\n0 1 0 0 0 0 1 0', expectedOutput: '12' },
    ],
  });
})();

// 六、數位顯示器 —— 跟osep-judge M1-06的W4-01同一題（同一套LED燈條數對照表），
// брute force窮舉1位數/2位數組合，找出恰好用完N條燈條的最大值。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('s6_n', 'N');
  const SEG = reg.declare('s6_seg', 'seg');
  const D = reg.declare('s6_d', 'd');
  const COST = reg.declare('s6_cost', 'cost');
  const BEST = reg.declare('s6_best', 'best');
  const T = reg.declare('s6_t', 't');
  const U = reg.declare('s6_u', 'u');
  const CAND = reg.declare('s6_cand', 'cand');

  const segCosts = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6].map((c) => B.numLit(c));
  const initSeg = B.setVar(reg, SEG, B.listsCreateWith(segCosts), null);
  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setBest0 = B.setVar(reg, BEST, B.numLit(-1), null);

  // 1位數：D代表數字本身(0~9)，清單索引為D+1。
  const setCost1 = B.setVar(reg, COST, B.listsGetIndex(B.getVar(reg, SEG), B.add(B.getVar(reg, D), B.numLit(1))), null);
  const ifMatch1 = B.ifElseChain(
    [B.eq(B.getVar(reg, COST), B.getVar(reg, N))],
    [B.ifElseChain([B.gt(B.getVar(reg, D), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, D), null)], null)],
    null
  );
  const oneDigitLoop = B.controlsFor(reg, D, B.numLit(0), B.numLit(9), B.numLit(1), B.chain(setCost1, ifMatch1));

  // 2位數：T為十位(1~9，不可為0)，U為個位(0~9，不可等於T)。
  const setCost2 = B.setVar(reg, COST, B.add(B.listsGetIndex(B.getVar(reg, SEG), B.add(B.getVar(reg, T), B.numLit(1))), B.listsGetIndex(B.getVar(reg, SEG), B.add(B.getVar(reg, U), B.numLit(1)))), null);
  const setCand = B.setVar(reg, CAND, B.add(B.mul(B.getVar(reg, T), B.numLit(10)), B.getVar(reg, U)), null);
  const ifMatch2 = B.ifElseChain(
    [B.eq(B.getVar(reg, COST), B.getVar(reg, N))],
    [B.chain(setCand, B.ifElseChain([B.gt(B.getVar(reg, CAND), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, CAND), null)], null))],
    null
  );
  const ifUOk = B.ifElseChain([B.neq(B.getVar(reg, U), B.getVar(reg, T))], [B.chain(setCost2, ifMatch2)], null);
  const uLoop = B.controlsFor(reg, U, B.numLit(0), B.numLit(9), B.numLit(1), ifUOk);
  const twoDigitLoop = B.controlsFor(reg, T, B.numLit(1), B.numLit(9), B.numLit(1), uLoop);

  const top = B.whenFlagClicked(B.chain(initSeg, askN, setN, setBest0, oneDigitLoop, twoDigitLoop, B.say(B.getVar(reg, BEST), null)));
  tasks.push({
    id: 'Hsinchu-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3', expectedOutput: '7' },
      { input: '7', expectedOutput: '74' },
      { input: '2', expectedOutput: '1' },
      { input: '14', expectedOutput: '-1' },
      { input: '13', expectedOutput: '98' },
      { input: '6', expectedOutput: '41' },
      { input: '4', expectedOutput: '4' },
      { input: '12', expectedOutput: '96' },
      { input: '5', expectedOutput: '71' },
      { input: '9', expectedOutput: '97' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hsinchu.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hsinchu tasks');
