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

fs.writeFileSync(__dirname + '/tasks_taitung_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'taitung_j tasks');
