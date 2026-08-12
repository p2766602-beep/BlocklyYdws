const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 個人綜合所得稅試算
(function () {
  const reg = B.createVarRegistry();
  const INCOME = reg.declare('c1_income', 'income');
  const TAX = reg.declare('c1_tax', 'tax');

  const askIncome = B.askAndWait(reg, '請輸入所得（萬元）', null);
  const setIncome = B.setVar(reg, INCOME, B.answerBlock(), null);

  const bracket4 = B.setVar(reg, TAX, B.add(B.numLit(105000), B.mul(B.sub(B.getVar(reg, INCOME), B.numLit(100)), B.numLit(2000))), null);
  const bracket3 = B.ifElseChain(
    [B.lte(B.getVar(reg, INCOME), B.numLit(100))],
    [B.setVar(reg, TAX, B.add(B.numLit(45000), B.mul(B.sub(B.getVar(reg, INCOME), B.numLit(60)), B.numLit(1500))), null)],
    bracket4
  );
  const bracket2 = B.ifElseChain(
    [B.lte(B.getVar(reg, INCOME), B.numLit(60))],
    [B.setVar(reg, TAX, B.add(B.numLit(15000), B.mul(B.sub(B.getVar(reg, INCOME), B.numLit(30)), B.numLit(1000))), null)],
    bracket3
  );
  const bracket1 = B.ifElseChain(
    [B.lte(B.getVar(reg, INCOME), B.numLit(30))],
    [B.setVar(reg, TAX, B.mul(B.getVar(reg, INCOME), B.numLit(500)), null)],
    bracket2
  );

  const top = B.whenFlagClicked(B.chain(askIncome, setIncome, bracket1, B.say(B.getVar(reg, TAX), null)));
  tasks.push({
    id: 'ChaiyiC-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '10', expectedOutput: '5000' },
      { input: '30', expectedOutput: '15000' },
      { input: '40', expectedOutput: '25000' },
      { input: '80', expectedOutput: '75000' },
      { input: '120', expectedOutput: '145000' },
      { input: '60', expectedOutput: '45000' },
      { input: '100', expectedOutput: '105000' },
      { input: '31', expectedOutput: '16000' },
      { input: '61', expectedOutput: '46500' },
      { input: '200', expectedOutput: '305000' },
    ],
  });
})();

// 2. 跳馬比賽成績計算 —— 扣掉一個最高分一個最低分，剩下平均，四捨五入到整數
// （已驗證：題目文字寫小數點後三位，但全部評審資料都是整數，判定實際規則是四捨五入到整數，
// 見PDF題目來源勘誤紀錄）。用SUM-MAX-MIN的算術等價法，不用真的從清單刪除。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c2_n', 'N');
  const V = reg.declare('c2_v', 'v');
  const I = reg.declare('c2_i', 'i');
  const SUM = reg.declare('c2_sum', 'sum');
  const MAXV = reg.declare('c2_max', 'maxv');
  const MINV = reg.declare('c2_min', 'minv');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, addSum, ifMax, ifMin));

  const remainSum = B.sub(B.sub(B.getVar(reg, SUM), B.getVar(reg, MAXV)), B.getVar(reg, MINV));
  const remainCount = B.sub(B.getVar(reg, N), B.numLit(2));
  // 修正（比對114EChaiyiC.txt新版10筆評審資料才發現）：題目文字「四捨五入至小數點第三位」
  // 是對的，不是四捨五入到整數——舊版PDF的判例資料剛好全部整除、誤導成整數規則。
  // 用「乘1000取整再除1000」湊出3位小數精度，JS原生數字轉字串會自動去掉多餘的尾端0
  // （例如6333/1000印出"6.333"不是"6.3330"，3500/1000印出"3.5"不是"3.500"）。
  const avgRounded = B.div(B.round_('ROUND', B.mul(B.div(remainSum, remainCount), B.numLit(1000))), B.numLit(1000));

  const top = B.whenFlagClicked(B.chain(askN, setN, setSum0, setMax0, setMin0, readLoop, B.say(avgRounded, null)));
  tasks.push({
    id: 'ChaiyiC-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n9 8 10 6 7', expectedOutput: '8' },
      { input: '5\n10 10 10 10 10', expectedOutput: '10' },
      { input: '5\n5 5 7 7 10', expectedOutput: '6.333' },
      { input: '5\n9 9 9 10 10', expectedOutput: '9.333' },
      { input: '5\n7 7 8 8 6', expectedOutput: '7.333' },
      { input: '6\n1 2 3 4 5 6', expectedOutput: '3.5' },
      { input: '6\n0 0 1 1 2 2', expectedOutput: '1' },
      { input: '7\n10 9 8 7 6 5 4', expectedOutput: '7' },
      { input: '8\n10 10 0 0 5 5 5 5', expectedOutput: '5' },
      { input: '10\n10 9 9 9 9 9 9 9 9 0', expectedOutput: '9' },
    ],
  });
})();

// 3. 動態密碼轉換 —— 小寫字母密碼環位移N。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c3_n', 'N');
  const S = reg.declare('c3_s', 'S');
  const I = reg.declare('c3_i', 'i');
  const CH = reg.declare('c3_ch', 'ch');
  const POS = reg.declare('c3_pos', 'pos');
  const NEWPOS = reg.declare('c3_newpos', 'newpos');
  const RESULT = reg.declare('c3_result', 'result');
  const LETTERS = reg.declare('c3_letters', 'letters');

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => B.textLit(c));
  const initLetters = B.setVar(reg, LETTERS, B.listsCreateWith(alphabet), null);

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setResult0 = B.setVar(reg, RESULT, B.textLit(''), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const setPos = B.setVar(reg, POS, B.listsIndexOf(B.getVar(reg, LETTERS), B.getVar(reg, CH)), null);
  const setNewPos = B.setVar(reg, NEWPOS, B.add(B.modulo(B.add(B.sub(B.getVar(reg, POS), B.numLit(1)), B.getVar(reg, N)), B.numLit(26)), B.numLit(1)), null);
  const appendCh = B.setVar(reg, RESULT, B.textJoin([B.getVar(reg, RESULT), B.listsGetIndex(B.getVar(reg, LETTERS), B.getVar(reg, NEWPOS))]), null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, setPos, setNewPos, appendCh));

  const top = B.whenFlagClicked(B.chain(initLetters, askN, setN, askS, setS, setResult0, forLoop, B.say(B.getVar(reg, RESULT), null)));
  tasks.push({
    id: 'ChaiyiC-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '0\nabc', expectedOutput: 'abc' },
      { input: '1\nxyz', expectedOutput: 'yza' },
      { input: '26\nhello', expectedOutput: 'hello' },
      { input: '28\naz', expectedOutput: 'cb' },
      { input: '100\na', expectedOutput: 'w' },
      { input: '5\npokemon', expectedOutput: 'utpjrts' },
      { input: '25\na', expectedOutput: 'z' },
      { input: '13\nnop', expectedOutput: 'abc' },
      { input: '52\ncat', expectedOutput: 'cat' },
      { input: '10\napple', expectedOutput: 'kzzvo' },
    ],
  });
})();

// 4. 籃球機得分計算 —— 連續進球第2球起算3分，單獨進球1分，未進0分。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c4_n', 'N');
  const I = reg.declare('c4_i', 'i');
  const HIT = reg.declare('c4_hit', 'hit');
  const PREV1 = reg.declare('c4_prev1', 'prev1');
  const PREV2 = reg.declare('c4_prev2', 'prev2');
  const SCORE1 = reg.declare('c4_score1', 'score1');
  const SCORE2 = reg.declare('c4_score2', 'score2');
  const WINNER = reg.declare('c4_winner', 'winner');

  function playerLoop(scoreVar, prevVar) {
    const askHit = B.askAndWait(reg, '', null);
    const setHit = B.setVar(reg, HIT, B.answerBlock(), null);
    const scoreThis = B.ifElseChain(
      [B.eq(B.getVar(reg, HIT), B.numLit(1))],
      [B.ifElseChain(
        [B.eq(B.getVar(reg, prevVar), B.numLit(1))],
        [B.setVar(reg, scoreVar, B.add(B.getVar(reg, scoreVar), B.numLit(3)), null)],
        B.setVar(reg, scoreVar, B.add(B.getVar(reg, scoreVar), B.numLit(1)), null)
      )],
      null
    );
    const advancePrev = B.setVar(reg, prevVar, B.getVar(reg, HIT), null);
    return B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askHit, setHit, scoreThis, advancePrev));
  }

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setScore1_0 = B.setVar(reg, SCORE1, B.numLit(0), null);
  const setPrev1_0 = B.setVar(reg, PREV1, B.numLit(0), null);
  const loop1 = playerLoop(SCORE1, PREV1);
  const setScore2_0 = B.setVar(reg, SCORE2, B.numLit(0), null);
  const setPrev2_0 = B.setVar(reg, PREV2, B.numLit(0), null);
  const loop2 = playerLoop(SCORE2, PREV2);

  const winnerIf = B.ifElseChain(
    [B.gt(B.getVar(reg, SCORE1), B.getVar(reg, SCORE2)), B.gt(B.getVar(reg, SCORE2), B.getVar(reg, SCORE1))],
    [B.setVar(reg, WINNER, B.textLit('1P'), null), B.setVar(reg, WINNER, B.textLit('2P'), null)],
    B.setVar(reg, WINNER, B.textLit('不分勝負'), null)
  );

  const sayResult = B.say(B.textJoin([B.getVar(reg, SCORE1), B.textLit(' '), B.getVar(reg, SCORE2), B.textLit(' '), B.getVar(reg, WINNER)]), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, setScore1_0, setPrev1_0, loop1, setScore2_0, setPrev2_0, loop2, winnerIf, sayResult));
  tasks.push({
    id: 'ChaiyiC-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n0 1 0 1 0\n0 0 0 0 0', expectedOutput: '2 0 1P' },
      { input: '6\n1 1 1 0 1 0\n0 1 1 1 1 0', expectedOutput: '8 10 2P' },
      { input: '9\n0 1 0 1 0 1 0 1 0\n0 0 0 0 0 0 0 0 0', expectedOutput: '4 0 1P' },
      { input: '8\n1 1 0 1 1 0 1 1\n1 1 1 0 1 1 1 0', expectedOutput: '12 14 2P' },
      { input: '7\n1 1 0 1 1 0 1\n1 1 0 1 1 0 1', expectedOutput: '9 9 不分勝負' },
      { input: '5\n1 1 1 1 1\n1 0 1 0 1', expectedOutput: '13 3 1P' },
      { input: '10\n0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1', expectedOutput: '0 28 2P' },
      { input: '6\n1 0 0 0 0 1\n1 0 0 0 0 1', expectedOutput: '2 2 不分勝負' },
      { input: '7\n0 1 1 0 1 1 0\n1 1 0 0 0 1 1', expectedOutput: '8 8 不分勝負' },
      { input: '8\n1 0 1 0 1 0 1 0\n0 1 0 1 0 1 0 1', expectedOutput: '4 4 不分勝負' },
    ],
  });
})();

// 5. 無人搬運車運送計算 —— 嚴格>200才拒絕（已用全部5筆評審驗證正確算法，範例一原文有誤）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c5_n', 'N');
  const I = reg.declare('c5_i', 'i');
  const W = reg.declare('c5_w', 'w');
  const CUR = reg.declare('c5_cur', 'cur');
  const COUNT = reg.declare('c5_count', 'count');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setCur0 = B.setVar(reg, CUR, B.numLit(0), null);
  const setCount0 = B.setVar(reg, COUNT, B.numLit(0), null);

  const askW = B.askAndWait(reg, '', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const dispatchAndStart = B.chain(
    B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null),
    B.setVar(reg, CUR, B.getVar(reg, W), null)
  );
  const ifElseAdd = B.ifElseChain(
    [B.gt(B.add(B.getVar(reg, CUR), B.getVar(reg, W)), B.numLit(200))],
    [dispatchAndStart],
    B.setVar(reg, CUR, B.add(B.getVar(reg, CUR), B.getVar(reg, W)), null)
  );
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askW, setW, ifElseAdd));
  const finalDispatch = B.setVar(reg, COUNT, B.add(B.getVar(reg, COUNT), B.numLit(1)), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, setCur0, setCount0, forLoop, finalDispatch, B.say(B.getVar(reg, COUNT), null)));
  tasks.push({
    id: 'ChaiyiC-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '9\n50 60 40 70 90 30 80 90 60', expectedOutput: '4' },
      { input: '5\n80 90 60 30 40', expectedOutput: '2' },
      { input: '5\n100 50 60 70 80', expectedOutput: '3' },
      { input: '3\n100 100 100', expectedOutput: '2' },
      { input: '1\n100', expectedOutput: '1' },
      { input: '5\n200 200 200 200 200', expectedOutput: '5' },
      { input: '8\n10 20 30 40 50 60 70 80', expectedOutput: '3' },
      { input: '6\n199 1 199 1 199 1', expectedOutput: '3' },
      { input: '4\n150 150 150 150', expectedOutput: '4' },
      { input: '10\n50 50 50 50 50 50 50 50 50 50', expectedOutput: '3' },
    ],
  });
})();

// 6-1. 寶可夢平均等級（無條件捨去）
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c61_n', 'N');
  const I = reg.declare('c61_i', 'i');
  const LV = reg.declare('c61_lv', 'lv');
  const SUM = reg.declare('c61_sum', 'sum');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const askLv = B.askAndWait(reg, '', null);
  const setLv = B.setVar(reg, LV, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, LV)), null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askLv, setLv, addSum));
  const avgFloor = B.round_('ROUNDDOWN', B.div(B.getVar(reg, SUM), B.getVar(reg, N)));

  const top = B.whenFlagClicked(B.chain(askN, setN, setSum0, forLoop, B.say(avgFloor, null)));
  tasks.push({
    id: 'ChaiyiC-6-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\n50', expectedOutput: '50' },
      { input: '3\n10 20 30', expectedOutput: '20' },
      { input: '4\n7 8 9 10', expectedOutput: '8' },
      { input: '5\n1 100 100 100 100', expectedOutput: '80' },
      { input: '20\n10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20', expectedOutput: '15' },
      { input: '2\n1 2', expectedOutput: '1' },
      { input: '3\n33 33 33', expectedOutput: '33' },
      { input: '5\n10 11 12 13 14', expectedOutput: '12' },
      { input: '6\n99 99 99 99 99 99', expectedOutput: '99' },
      { input: '4\n1 1 1 1', expectedOutput: '1' },
    ],
  });
})();

// 6-2. 找最高等級的寶可夢——輸出名稱（比對114EChaiyiC.txt新版10筆評審資料才發現：
// 之前用PDF判例資料誤判成「輸出等級數字」，這批新資料10筆全部一致輸出名稱，題目文字
// 「找出等級最高的寶可夢名稱」本身沒有錯，是舊PDF判例資料的問題，這次予以修正）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c62_n', 'N');
  const I = reg.declare('c62_i', 'i');
  const NAME = reg.declare('c62_name', 'name');
  const LV = reg.declare('c62_lv', 'lv');
  const MAXV = reg.declare('c62_max', 'maxv');
  const MAXNAME = reg.declare('c62_maxname', 'maxname');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);

  const askName = B.askAndWait(reg, '', null);
  const setName = B.setVar(reg, NAME, B.answerBlock(), null);
  const askLv = B.askAndWait(reg, '', null);
  const setLv = B.setVar(reg, LV, B.answerBlock(), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, LV), B.getVar(reg, MAXV))],
    [B.chain(B.setVar(reg, MAXV, B.getVar(reg, LV), null), B.setVar(reg, MAXNAME, B.getVar(reg, NAME), null))], null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askName, setName, askLv, setLv, ifMax));

  const top = B.whenFlagClicked(B.chain(askN, setN, setMax0, forLoop, B.say(B.getVar(reg, MAXNAME), null)));
  tasks.push({
    id: 'ChaiyiC-6-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\n皮卡丘 10', expectedOutput: '皮卡丘' },
      { input: '3\n小火龍 12 妙蛙種子 18 傑尼龜 15', expectedOutput: '妙蛙種子' },
      { input: '4\nA 5 B 20 C 15 D 8', expectedOutput: 'B' },
      { input: '5\n皮卡丘 22 伊布 30 卡比獸 28 超夢 100 胖丁 18', expectedOutput: '超夢' },
      { input: '6\nP1 3 P2 6 P3 9 P4 12 P5 15 P6 18', expectedOutput: 'P6' },
      { input: '2\nX 50 Y 49', expectedOutput: 'X' },
      { input: '3\nBulbasaur 5 Charmander 10 Squirtle 7', expectedOutput: 'Charmander' },
      { input: '4\nA 1 B 2 C 3 D 4', expectedOutput: 'D' },
      { input: '5\nZ 99 Y 98 X 97 W 96 V 95', expectedOutput: 'Z' },
      { input: '2\nFirst 10 Second 20', expectedOutput: 'Second' },
    ],
  });
})();

// 6-3. 列出平均等級以上的寶可夢名稱（實數平均，嚴格大於，依原順序輸出，皆不足則空字串）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c63_n', 'N');
  const NAMES = reg.declare('c63_names', 'names');
  const LEVELS = reg.declare('c63_levels', 'levels');
  const I = reg.declare('c63_i', 'i');
  const NAME = reg.declare('c63_name', 'name');
  const LV = reg.declare('c63_lv', 'lv');
  const SUM = reg.declare('c63_sum', 'sum');
  const AVG = reg.declare('c63_avg', 'avg');
  const OUT = reg.declare('c63_out', 'out');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initNames = B.setVar(reg, NAMES, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initLevels = B.setVar(reg, LEVELS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);

  const askName = B.askAndWait(reg, '', null);
  const setName = B.setVar(reg, NAME, B.answerBlock(), null);
  const askLv = B.askAndWait(reg, '', null);
  const setLv = B.setVar(reg, LV, B.answerBlock(), null);
  const setNameIdx = B.listsSetIndex(B.getVar(reg, NAMES), B.getVar(reg, I), B.getVar(reg, NAME), null);
  const setLvIdx = B.listsSetIndex(B.getVar(reg, LEVELS), B.getVar(reg, I), B.getVar(reg, LV), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, LV)), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askName, setName, askLv, setLv, setNameIdx, setLvIdx, addSum));

  const setAvg = B.setVar(reg, AVG, B.div(B.getVar(reg, SUM), B.getVar(reg, N)), null);
  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const appendIf = B.ifElseChain(
    [B.gt(B.listsGetIndex(B.getVar(reg, LEVELS), B.getVar(reg, I)), B.getVar(reg, AVG))],
    [B.ifElseChain(
      [B.isEmptyText(B.getVar(reg, OUT))],
      [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, I))]), null)],
      B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.listsGetIndex(B.getVar(reg, NAMES), B.getVar(reg, I))]), null)
    )],
    null
  );
  const outLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), appendIf);

  const top = B.whenFlagClicked(B.chain(askN, setN, initNames, initLevels, setSum0, readLoop, setAvg, setOut0, outLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'ChaiyiC-6-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\n皮卡丘 10', expectedOutput: '' },
      { input: '5\n伊布 15 胖丁 15 乘龍 10 卡比獸 20 妙蛙種子 15', expectedOutput: '卡比獸' },
      { input: '4\n妙蛙種子 30 皮卡丘 30 小火龍 30 傑尼龜 30', expectedOutput: '' },
      { input: '6\n小火龍 100 皮卡丘 0 伊布 50 卡比獸 50 胖丁 50 超夢 100', expectedOutput: '小火龍 超夢' },
      { input: '8\n皮卡丘 25 皮卡丘 30 妙蛙種子 18 小火龍 12 傑尼龜 40 伊布 35 卡比獸 28 胖丁 28', expectedOutput: '皮卡丘 傑尼龜 伊布 卡比獸 胖丁' },
      { input: '3\nA 10 B 20 C 30', expectedOutput: 'C' },
      { input: '2\nX 1 Y 100', expectedOutput: 'Y' },
      { input: '4\nP1 10 P2 11 P3 10 P4 10', expectedOutput: 'P2' },
      { input: '5\nA 100 B 10 C 10 D 10 E 10', expectedOutput: 'A' },
      { input: '4\nM1 50 M2 51 M3 50 M4 49', expectedOutput: 'M2' },
    ],
  });
})();

// 6-4. 統計不同屬性數量（依首次出現順序）
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('c64_n', 'N');
  const ATTRS = reg.declare('c64_attrs', 'attrs');
  const COUNTS = reg.declare('c64_counts', 'counts');
  const DISTINCT = reg.declare('c64_distinct', 'distinct');
  const I = reg.declare('c64_i', 'i');
  const ATTR = reg.declare('c64_attr', 'attr');
  const FOUND = reg.declare('c64_found', 'found');
  const OUT = reg.declare('c64_out', 'out');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initAttrs = B.setVar(reg, ATTRS, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initCounts = B.setVar(reg, COUNTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setDistinct0 = B.setVar(reg, DISTINCT, B.numLit(0), null);

  const askAttr = B.askAndWait(reg, '', null);
  const setAttr = B.setVar(reg, ATTR, B.answerBlock(), null);
  const setFound = B.setVar(reg, FOUND, B.listsIndexOf(B.getVar(reg, ATTRS), B.getVar(reg, ATTR)), null);
  const newEntry = B.chain(
    B.setVar(reg, DISTINCT, B.add(B.getVar(reg, DISTINCT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, ATTRS), B.getVar(reg, DISTINCT), B.getVar(reg, ATTR), null),
    B.listsSetIndex(B.getVar(reg, COUNTS), B.getVar(reg, DISTINCT), B.numLit(1), null)
  );
  const bumpExisting = B.listsSetIndex(B.getVar(reg, COUNTS), B.getVar(reg, FOUND), B.add(B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, FOUND)), B.numLit(1)), null);
  const ifElseFound = B.ifElseChain([B.eq(B.getVar(reg, FOUND), B.numLit(0))], [newEntry], bumpExisting);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askAttr, setAttr, setFound, ifElseFound));

  // 修正（比對114EChaiyiC.txt新版才發現）：題目文字明確要求「格式為『屬性數量』（屬性與
  // 數量間不留空白）」——屬性名稱跟數量直接接在一起不留空白，不同組別之間才用一個空白隔開。
  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const pairBuilder = (id) => B.textJoin([B.listsGetIndex(B.getVar(reg, ATTRS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, COUNTS), B.getVar(reg, I))]);
  const appendOut = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, pairBuilder(), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), pairBuilder()]), null)
  );
  const outLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, DISTINCT), B.numLit(1), appendOut);

  const top = B.whenFlagClicked(B.chain(askN, setN, initAttrs, initCounts, setDistinct0, readLoop, setOut0, outLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'ChaiyiC-6-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '9\n火 水 火 電 水 草 草 毒 草', expectedOutput: '火2 水2 電1 草3 毒1' },
      { input: '8\n水 火 電 水 草 水 電 草', expectedOutput: '水3 火1 電2 草2' },
      { input: '1\n草', expectedOutput: '草1' },
      { input: '5\n水 水 水 水 水', expectedOutput: '水5' },
      { input: '6\n電 火 草 電 火 水', expectedOutput: '電2 火2 草1 水1' },
      { input: '4\n冰 龍 冰 龍', expectedOutput: '冰2 龍2' },
      { input: '5\n光 暗 光 暗 無', expectedOutput: '光2 暗2 無1' },
      { input: '3\n超能 格鬥 超能', expectedOutput: '超能2 格鬥1' },
      { input: '7\nA B C A B C D', expectedOutput: 'A2 B2 C2 D1' },
      { input: '10\nX Y Z X Y Z X Y Z W', expectedOutput: 'X3 Y3 Z3 W1' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_chaiyic.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'chaiyic tasks');
