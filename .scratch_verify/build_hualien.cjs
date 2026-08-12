const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 試題一：零用錢是否足夠 —— 讀Money，固定4天花費，依序扣除，某天扣完<0立刻回報第幾天
// 不夠用（用DONE旗標讓後面幾天不再處理，模擬提早結束），4天都成功則回報「錢剛好或有剩」。
(function () {
  const reg = B.createVarRegistry();
  const MONEY = reg.declare('h1_money', 'money');
  const DAY = reg.declare('h1_day', 'day');
  const EXP = reg.declare('h1_exp', 'exp');
  const DONE = reg.declare('h1_done', 'done');
  const MSG = reg.declare('h1_msg', 'msg');

  const askMoney = B.askAndWait(reg, '請輸入零用錢', null);
  const setMoney = B.setVar(reg, MONEY, B.answerBlock(), null);
  const setDone0 = B.setVar(reg, DONE, B.numLit(0), null);
  const setMsg0 = B.setVar(reg, MSG, B.textLit(''), null);

  const askExp = B.askAndWait(reg, '', null);
  const setExp = B.setVar(reg, EXP, B.answerBlock(), null);
  const subMoney = B.setVar(reg, MONEY, B.sub(B.getVar(reg, MONEY), B.getVar(reg, EXP)), null);
  const setInsufficient = B.chain(
    B.setVar(reg, MSG, B.textJoin([B.textLit('第'), B.getVar(reg, DAY), B.textLit('天不夠用')]), null),
    B.setVar(reg, DONE, B.numLit(1), null)
  );
  const ifNegative = B.ifElseChain([B.lt(B.getVar(reg, MONEY), B.numLit(0))], [setInsufficient], null);
  const dayBody = B.ifElseChain([B.eq(B.getVar(reg, DONE), B.numLit(0))], [B.chain(askExp, setExp, subMoney, ifNegative)], null);
  const forLoop = B.controlsFor(reg, DAY, B.numLit(1), B.numLit(4), B.numLit(1), dayBody);

  const finalMsg = B.ifElseChain([B.eq(B.getVar(reg, DONE), B.numLit(0))], [B.setVar(reg, MSG, B.textLit('錢剛好或有剩'), null)], null);
  const sayMsg = B.say(B.getVar(reg, MSG), null);

  const top = B.whenFlagClicked(B.chain(askMoney, setMoney, setDone0, setMsg0, forLoop, finalMsg, sayMsg));
  tasks.push({
    id: 'Hualien-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '100\n20 30 40 20', expectedOutput: '第4天不夠用' },
      { input: '100\n10 20 30 40', expectedOutput: '錢剛好或有剩' },
      { input: '50\n60 10 10 10', expectedOutput: '第1天不夠用' },
      { input: '50\n30 30 10 10', expectedOutput: '第2天不夠用' },
      { input: '50\n20 20 20 10', expectedOutput: '第3天不夠用' },
      { input: '100\n25 25 25 25', expectedOutput: '錢剛好或有剩' },
      { input: '1000\n100 200 300 500', expectedOutput: '第4天不夠用' },
      { input: '50\n0 0 0 0', expectedOutput: '錢剛好或有剩' },
      { input: '60\n20 20 20 10', expectedOutput: '第4天不夠用' },
      { input: '40\n20 20 10 10', expectedOutput: '第3天不夠用' },
    ],
  });
})();

// 試題二：機器人戰鬥力比對 —— 讀N個戰鬥力進清單，逐一跟其他N-1隻比較，統計贏的場次。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h2_n', 'N');
  const POWERS = reg.declare('h2_powers', 'powers');
  const RESULTS = reg.declare('h2_results', 'results');
  const V = reg.declare('h2_v', 'v');
  const I = reg.declare('h2_i', 'i');
  const J = reg.declare('h2_j', 'j');
  const SCORE = reg.declare('h2_score', 'score');
  const OUT = reg.declare('h2_out', 'out');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initPowers = B.setVar(reg, POWERS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initResults = B.setVar(reg, RESULTS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setPowerIdx = B.listsSetIndex(B.getVar(reg, POWERS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setPowerIdx));

  const innerCheck = B.ifElseChain(
    [B.and_(B.neq(B.getVar(reg, J), B.getVar(reg, I)), B.gt(B.listsGetIndex(B.getVar(reg, POWERS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, POWERS), B.getVar(reg, J))))],
    [B.setVar(reg, SCORE, B.add(B.getVar(reg, SCORE), B.numLit(1)), null)],
    null
  );
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1), innerCheck);
  const setScore0 = B.setVar(reg, SCORE, B.numLit(0), null);
  const setResultIdx = B.listsSetIndex(B.getVar(reg, RESULTS), B.getVar(reg, I), B.getVar(reg, SCORE), null);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setScore0, innerLoop, setResultIdx));

  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const appendIf = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.listsGetIndex(B.getVar(reg, RESULTS), B.getVar(reg, I))]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.listsGetIndex(B.getVar(reg, RESULTS), B.getVar(reg, I))]), null)
  );
  const outLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), appendIf);

  const top = B.whenFlagClicked(B.chain(askN, setN, initPowers, initResults, readLoop, outerLoop, setOut0, outLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Hualien-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n10 50 30', expectedOutput: '0 2 1' },
      { input: '3\n10 20 30', expectedOutput: '0 1 2' },
      { input: '4\n10 10 10 10', expectedOutput: '0 0 0 0' },
      { input: '5\n50 40 30 20 10', expectedOutput: '4 3 2 1 0' },
      { input: '5\n10 20 20 30 30', expectedOutput: '0 1 1 3 3' },
      { input: '1\n100', expectedOutput: '0' },
      { input: '10\n1 2 3 4 5 6 7 8 9 10', expectedOutput: '0 1 2 3 4 5 6 7 8 9' },
      { input: '4\n15 15 20 10', expectedOutput: '1 1 3 0' },
      { input: '6\n100 0 50 50 25 75', expectedOutput: '5 0 2 2 1 4' },
      { input: '2\n10 10', expectedOutput: '0 0' },
    ],
  });
})();

// 試題三：字串內的秘密數字 —— 讀字串S（英數混合），加總其中每個數字字元的值。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('h3_s', 'S');
  const I = reg.declare('h3_i', 'i');
  const SUM = reg.declare('h3_sum', 'sum');
  const CH = reg.declare('h3_ch', 'ch');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const isDigit = B.and_(B.gte(B.getVar(reg, CH), B.textLit('0')), B.lte(B.getVar(reg, CH), B.textLit('9')));
  const addDigit = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.mul(B.getVar(reg, CH), B.numLit(1))), null);
  const ifDigit = B.ifElseChain([isDigit], [addDigit], null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, ifDigit));

  const top = B.whenFlagClicked(B.chain(askS, setS, setSum0, forLoop, B.say(B.getVar(reg, SUM), null)));
  tasks.push({
    id: 'Hualien-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'A1B2C3', expectedOutput: '6' },
      { input: 'Key5Word2', expectedOutput: '7' },
      { input: 'HelloWorld', expectedOutput: '0' },
      { input: '123456789', expectedOutput: '45' },
      { input: 'a12b34', expectedOutput: '10' },
      { input: '0a0b0c0', expectedOutput: '0' },
      { input: 'a1b2c3d4e5f6g7h8i9j0', expectedOutput: '45' },
      { input: '!@1#$2%^3&*', expectedOutput: '6' },
      { input: 'abc9xyz9', expectedOutput: '18' },
      { input: '5', expectedOutput: '5' },
    ],
  });
})();

// 試題四：最佳派對地點 —— 讀N個座標，找出使距離總和最小的座標（平手取較小座標）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h4_n', 'N');
  const COORDS = reg.declare('h4_coords', 'coords');
  const V = reg.declare('h4_v', 'v');
  const I = reg.declare('h4_i', 'i');
  const J = reg.declare('h4_j', 'j');
  const DIST = reg.declare('h4_dist', 'dist');
  const BESTSUM = reg.declare('h4_bestsum', 'bestsum');
  const BESTCOORD = reg.declare('h4_bestcoord', 'bestcoord');

  const askN = B.askAndWait(reg, '請輸入N', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initCoords = B.setVar(reg, COORDS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setCoordIdx = B.listsSetIndex(B.getVar(reg, COORDS), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setCoordIdx));

  const setBestSum0 = B.setVar(reg, BESTSUM, B.numLit(999999999), null);
  const setBestCoord0 = B.setVar(reg, BESTCOORD, B.numLit(999999999), null);

  const setDist0 = B.setVar(reg, DIST, B.numLit(0), null);
  const addDist = B.setVar(reg, DIST, B.add(B.getVar(reg, DIST), B.abs_(B.sub(B.listsGetIndex(B.getVar(reg, COORDS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, COORDS), B.getVar(reg, J))))), null);
  const innerLoop = B.controlsFor(reg, J, B.numLit(1), B.getVar(reg, N), B.numLit(1), addDist);

  const isBetter = B.or_(
    B.lt(B.getVar(reg, DIST), B.getVar(reg, BESTSUM)),
    B.and_(B.eq(B.getVar(reg, DIST), B.getVar(reg, BESTSUM)), B.lt(B.listsGetIndex(B.getVar(reg, COORDS), B.getVar(reg, I)), B.getVar(reg, BESTCOORD)))
  );
  const updateBest = B.chain(
    B.setVar(reg, BESTSUM, B.getVar(reg, DIST), null),
    B.setVar(reg, BESTCOORD, B.listsGetIndex(B.getVar(reg, COORDS), B.getVar(reg, I)), null)
  );
  const ifBetter = B.ifElseChain([isBetter], [updateBest], null);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setDist0, innerLoop, ifBetter));

  const sayResult = B.say(B.textJoin([B.getVar(reg, BESTCOORD), B.textLit(' '), B.getVar(reg, BESTSUM)]), null);
  const top = B.whenFlagClicked(B.chain(askN, setN, initCoords, readLoop, setBestSum0, setBestCoord0, outerLoop, sayResult));
  tasks.push({
    id: 'Hualien-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n2 10 5', expectedOutput: '5 8' },
      { input: '3\n1 9 3', expectedOutput: '3 8' },
      { input: '4\n1 2 3 4', expectedOutput: '2 4' },
      { input: '4\n10 10 20 20', expectedOutput: '10 20' },
      { input: '1\n100', expectedOutput: '100 0' },
      { input: '5\n100 0 50 25 75', expectedOutput: '50 150' },
      { input: '6\n10 20 30 40 50 60', expectedOutput: '30 90' },
      { input: '5\n1 1 1 1 100', expectedOutput: '1 99' },
      { input: '2\n10 5', expectedOutput: '5 5' },
      { input: '7\n7 1 4 2 8 5 9', expectedOutput: '5 17' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hualien.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hualien tasks');
