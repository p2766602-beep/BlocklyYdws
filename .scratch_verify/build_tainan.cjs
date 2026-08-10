const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 第一題：偶數和 —— 讀A B（由小到大），輸出A~B之間所有偶數的和。
(function () {
  const reg = B.createVarRegistry();
  const A = reg.declare('e1_a', 'A');
  const Bv = reg.declare('e1_b', 'B');
  const I = reg.declare('e1_i', 'i');
  const SUM = reg.declare('e1_sum', 'sum');

  const askA = B.askAndWait(reg, '請輸入起始數', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '請輸入結束數', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);
  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);

  const ifEven = B.ifElseChain(
    [B.eq(B.modulo(B.getVar(reg, I), B.numLit(2)), B.numLit(0))],
    [B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, I)), null)],
    null
  );
  const forLoop = B.controlsFor(reg, I, B.getVar(reg, A), B.getVar(reg, Bv), B.numLit(1), ifEven);
  const sayResult = B.say(B.getVar(reg, SUM), null);

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, setSum0, forLoop, sayResult));
  tasks.push({
    id: 'Tainan-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '10\n20', expectedOutput: '90' },
      { input: '31\n39', expectedOutput: '140' },
      { input: '1\n20', expectedOutput: '110' },
      { input: '20\n41', expectedOutput: '330' },
      { input: '99\n111', expectedOutput: '630' },
    ],
  });
})();

// 第二題：三角形 —— 讀A B C（一行三個數），判斷任意兩邊和是否都大於第三邊。
(function () {
  const reg = B.createVarRegistry();
  const A = reg.declare('e2_a', 'A');
  const Bv = reg.declare('e2_b', 'B');
  const C = reg.declare('e2_c', 'C');

  const askA = B.askAndWait(reg, '請輸入A', null);
  const setA = B.setVar(reg, A, B.answerBlock(), null);
  const askB = B.askAndWait(reg, '', null);
  const setB = B.setVar(reg, Bv, B.answerBlock(), null);
  const askC = B.askAndWait(reg, '', null);
  const setC = B.setVar(reg, C, B.answerBlock(), null);

  const cond1 = B.gt(B.add(B.getVar(reg, A), B.getVar(reg, Bv)), B.getVar(reg, C));
  const cond2 = B.gt(B.add(B.getVar(reg, A), B.getVar(reg, C)), B.getVar(reg, Bv));
  const cond3 = B.gt(B.add(B.getVar(reg, Bv), B.getVar(reg, C)), B.getVar(reg, A));
  const allCond = B.and_(B.and_(cond1, cond2), cond3);

  const ifElse = B.ifElseChain([allCond], [B.say(B.textLit('yes'), null)], B.say(B.textLit('no'), null));

  const top = B.whenFlagClicked(B.chain(askA, setA, askB, setB, askC, setC, ifElse));
  tasks.push({
    id: 'Tainan-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '9 6 8', expectedOutput: 'yes' },
      { input: '1 2 3', expectedOutput: 'no' },
      { input: '10 10 8', expectedOutput: 'yes' },
      { input: '30 60 100', expectedOutput: 'no' },
      { input: '8 8 8', expectedOutput: 'yes' },
      { input: '5 5 10', expectedOutput: 'no' },
    ],
  });
})();

// 第三題：刮刮樂 —— 讀3位數字字串S，計算數字6出現的次數，對應獎金。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('e3_s', 'S');
  const CNT = reg.declare('e3_cnt', 'cnt');

  // 注意：interaction_answer會把數字外觀的輸入自動轉成JS Number（比照Scratch「答案」
  // 的智慧數字行為），但這題輸入是"666"這種3位數字組成的字串，需要逐字元比對，
  // 用text_join('' + answer)強制轉回字串再存進S，不然text_charAt對Number呼叫會噴錯。
  const askS = B.askAndWait(reg, '請輸入三個數字', null);
  const setS = B.setVar(reg, S, B.textJoin([B.textLit(''), B.answerBlock()]), null);
  const setCnt0 = B.setVar(reg, CNT, B.numLit(0), null);

  function bumpIfSix(pos) {
    return B.ifElseChain(
      [B.eq(B.charAt(B.getVar(reg, S), B.numLit(pos)), B.textLit('6'))],
      [B.setVar(reg, CNT, B.add(B.getVar(reg, CNT), B.numLit(1)), null)],
      null
    );
  }

  const check1 = bumpIfSix(1);
  const check2 = bumpIfSix(2);
  const check3 = bumpIfSix(3);

  const prizeIf = B.ifElseChain(
    [B.eq(B.getVar(reg, CNT), B.numLit(3)), B.eq(B.getVar(reg, CNT), B.numLit(2)), B.eq(B.getVar(reg, CNT), B.numLit(1))],
    [B.say(B.numLit(500), null), B.say(B.numLit(200), null), B.say(B.numLit(100), null)],
    B.say(B.numLit(0), null)
  );

  const top = B.whenFlagClicked(B.chain(askS, setS, setCnt0, check1, check2, check3, prizeIf));
  tasks.push({
    id: 'Tainan-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '666', expectedOutput: '500' },
      { input: '600', expectedOutput: '100' },
      { input: '266', expectedOutput: '200' },
      { input: '123', expectedOutput: '0' },
      { input: '616', expectedOutput: '200' },
      { input: '911', expectedOutput: '0' },
      { input: '336', expectedOutput: '100' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_tainan.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'tainan tasks');
