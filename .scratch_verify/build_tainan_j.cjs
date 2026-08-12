const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 遊樂場 —— 親子套票(800)優先買min(兒童,成人)組，剩餘各自單買(兒童400/成人500)。
(function () {
  const reg = B.createVarRegistry();
  const C = reg.declare('t1_c', 'c');
  const A = reg.declare('t1_a', 'a');
  const COMBO = reg.declare('t1_combo', 'combo');
  const TOTAL = reg.declare('t1_total', 'total');

  const askC = B.askAndWait(reg, '請輸入兒童人數', null);
  const setC = B.setVar(reg, C, B.answerBlock(), null);
  const askA = B.askAndWait(reg, '請輸入成人人數', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);

  const setCombo = B.setVar(reg, COMBO, B.ternary(B.lt(B.getVar(reg, C), B.getVar(reg, A)), B.getVar(reg, C), B.getVar(reg, A)), null);
  const setTotal = B.setVar(reg, TOTAL, B.add(
    B.mul(B.getVar(reg, COMBO), B.numLit(800)),
    B.add(
      B.mul(B.sub(B.getVar(reg, C), B.getVar(reg, COMBO)), B.numLit(400)),
      B.mul(B.sub(B.getVar(reg, A), B.getVar(reg, COMBO)), B.numLit(500))
    )
  ), null);

  const top = B.whenFlagClicked(B.chain(askC, setC, askA, setA, setCombo, setTotal, B.say(B.getVar(reg, TOTAL), null)));
  tasks.push({
    id: 'Tainan-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '5\n5', expectedOutput: '4000' },
      { input: '6\n3', expectedOutput: '3600' },
      { input: '0\n10', expectedOutput: '5000' },
      { input: '8\n4', expectedOutput: '4800' },
      { input: '10\n10', expectedOutput: '8000' },
      { input: '2\n5', expectedOutput: '3100' },
      { input: '0\n0', expectedOutput: '0' },
      { input: '10\n0', expectedOutput: '4000' },
      { input: '3\n4', expectedOutput: '2900' },
      { input: '1\n1', expectedOutput: '800' },
    ],
  });
})();

// 2. 歌唱比賽 —— 固定5位評審，扣最高最低各一筆，剩3筆平均。
(function () {
  const reg = B.createVarRegistry();
  const V = reg.declare('t2_v', 'v');
  const I = reg.declare('t2_i', 'i');
  const SUM = reg.declare('t2_sum', 'sum');
  const MAXV = reg.declare('t2_max', 'maxv');
  const MINV = reg.declare('t2_min', 'minv');

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const setMax0 = B.setVar(reg, MAXV, B.numLit(-999999999), null);
  const setMin0 = B.setVar(reg, MINV, B.numLit(999999999), null);

  const askV = B.askAndWait(reg, '請輸入5位評審分數', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
  const ifMax = B.ifElseChain([B.gt(B.getVar(reg, V), B.getVar(reg, MAXV))], [B.setVar(reg, MAXV, B.getVar(reg, V), null)], null);
  const ifMin = B.ifElseChain([B.lt(B.getVar(reg, V), B.getVar(reg, MINV))], [B.setVar(reg, MINV, B.getVar(reg, V), null)], null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.numLit(5), B.numLit(1), B.chain(askV, setV, addSum, ifMax, ifMin));

  const finalScore = B.round_('ROUND', B.div(B.sub(B.sub(B.getVar(reg, SUM), B.getVar(reg, MAXV)), B.getVar(reg, MINV)), B.numLit(3)));
  const top = B.whenFlagClicked(B.chain(setSum0, setMax0, setMin0, readLoop, B.say(finalScore, null)));
  tasks.push({
    id: 'Tainan-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '10 8 9 9 9', expectedOutput: '9' },
      { input: '6 6 9 10 9', expectedOutput: '8' },
      { input: '7 7 7 7 7', expectedOutput: '7' },
      { input: '5 7 8 9 6', expectedOutput: '7' },
      { input: '8 10 8 9 10', expectedOutput: '9' },
      { input: '10 10 10 10 10', expectedOutput: '10' },
      { input: '0 0 0 0 0', expectedOutput: '0' },
      { input: '1 2 3 4 5', expectedOutput: '3' },
      { input: '8 8 8 10 0', expectedOutput: '8' },
      { input: '4 5 6 7 8', expectedOutput: '6' },
    ],
  });
})();

// 3. 質數和 —— A~B(含端點)之間所有質數的總和；質數判定用試除法(2~i-1)。
(function () {
  const reg = B.createVarRegistry();
  const A = reg.declare('t3_a', 'A');
  const Bv = reg.declare('t3_b', 'B');
  const I = reg.declare('t3_i', 'i');
  const J = reg.declare('t3_j', 'j');
  const SUM = reg.declare('t3_sum', 'sum');
  const ISPRIME = reg.declare('t3_isprime', 'isprime');

  const askA = B.askAndWait(reg, '請輸入起始數', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '請輸入結束數', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);

  const setIsPrime1 = B.setVar(reg, ISPRIME, B.numLit(1), null);
  const checkDivisor = B.ifElseChain(
    [B.eq(B.modulo(B.getVar(reg, I), B.getVar(reg, J)), B.numLit(0))],
    [B.setVar(reg, ISPRIME, B.numLit(0), null)],
    null
  );
  const divisorLoop = B.ifElseChain(
    [B.gt(B.getVar(reg, I), B.numLit(2))],
    [B.controlsFor(reg, J, B.numLit(2), B.sub(B.getVar(reg, I), B.numLit(1)), B.numLit(1), checkDivisor)],
    null
  );
  const addIfPrime = B.ifElseChain(
    [B.and_(B.gt(B.getVar(reg, I), B.numLit(1)), B.eq(B.getVar(reg, ISPRIME), B.numLit(1)))],
    [B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, I)), null)],
    null
  );
  const outerLoop = B.controlsFor(reg, I, B.getVar(reg, A), B.getVar(reg, Bv), B.numLit(1), B.chain(setIsPrime1, divisorLoop, addIfPrime));

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, setSum0, outerLoop, B.say(B.getVar(reg, SUM), null)));
  tasks.push({
    id: 'Tainan-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '21\n30', expectedOutput: '52' },
      { input: '13\n19', expectedOutput: '49' },
      { input: '54\n58', expectedOutput: '0' },
      { input: '1\n20', expectedOutput: '77' },
      { input: '91\n95', expectedOutput: '0' },
      { input: '61\n90', expectedOutput: '523' },
      { input: '2\n10', expectedOutput: '17' },
      { input: '1\n100', expectedOutput: '1060' },
      { input: '97\n100', expectedOutput: '97' },
      { input: '10\n10', expectedOutput: '0' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_tainan_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'tainan_j tasks');
