const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 崔老師的出缺席紀錄表 —— 輸入為「姓名+5個到/缺字元」黏在一起的單一字串，
// 姓名長度不固定(2~3字)，用「總長度-5」反推姓名結尾位置，最後5字元判斷缺席次數。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('t1_s', 'S');
  const LEN = reg.declare('t1_len', 'len');
  const NAMELEN = reg.declare('t1_namelen', 'namelen');
  const NAME = reg.declare('t1_name', 'name');
  const I = reg.declare('t1_i', 'i');
  const CH = reg.declare('t1_ch', 'ch');
  const ABSENT = reg.declare('t1_absent', 'absent');

  const askS = B.askAndWait(reg, '請輸入出缺席紀錄', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setLen = B.setVar(reg, LEN, B.textLength(B.getVar(reg, S)), null);
  const setNamelen = B.setVar(reg, NAMELEN, B.sub(B.getVar(reg, LEN), B.numLit(5)), null);
  const setName0 = B.setVar(reg, NAME, B.textLit(''), null);
  const appendName = B.setVar(reg, NAME, B.textJoin([B.getVar(reg, NAME), B.charAt(B.getVar(reg, S), B.getVar(reg, I))]), null);
  const nameLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, NAMELEN), B.numLit(1), appendName);

  const setAbsent0 = B.setVar(reg, ABSENT, B.numLit(0), null);
  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const ifAbsent = B.ifElseChain([B.eq(B.getVar(reg, CH), B.textLit('缺'))], [B.setVar(reg, ABSENT, B.add(B.getVar(reg, ABSENT), B.numLit(1)), null)], null);
  const absentLoop = B.controlsFor(reg, I, B.add(B.getVar(reg, NAMELEN), B.numLit(1)), B.getVar(reg, LEN), B.numLit(1), B.chain(setCh, ifAbsent));

  const sayResult = B.say(B.textJoin([B.getVar(reg, NAME), B.textLit('缺席'), B.getVar(reg, ABSENT), B.textLit('天')]), null);
  const top = B.whenFlagClicked(B.chain(askS, setS, setLen, setNamelen, setName0, nameLoop, setAbsent0, absentLoop, sayResult));
  tasks.push({
    id: 'Taipei-E-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '小明到到缺到到', expectedOutput: '小明缺席1天' },
      { input: '小美到缺缺到到', expectedOutput: '小美缺席2天' },
      { input: '阿宏到到到到到', expectedOutput: '阿宏缺席0天' },
      { input: '小安缺缺缺到缺', expectedOutput: '小安缺席4天' },
      { input: '小明缺缺缺到到', expectedOutput: '小明缺席3天' },
      { input: '大雄缺缺缺缺缺', expectedOutput: '大雄缺席5天' },
      { input: '靜香到到到到到', expectedOutput: '靜香缺席0天' },
      { input: '胖虎缺到缺到缺', expectedOutput: '胖虎缺席3天' },
      { input: '小夫到缺到缺到', expectedOutput: '小夫缺席2天' },
      { input: '王同學到到到到缺', expectedOutput: '王同學缺席1天' },
    ],
  });
})();

// 2. 校車安全：有沒有超載？ —— 3台車，各讀車號+5站人數，總和>20則「超載」，否則印總人數。
(function () {
  const reg = B.createVarRegistry();
  const CODE = reg.declare('t2_code', 'code');
  const SUM = reg.declare('t2_sum', 'sum');
  const V = reg.declare('t2_v', 'v');
  const J = reg.declare('t2_j', 'j');
  const MSG1 = reg.declare('t2_msg1', 'msg1');
  const MSG2 = reg.declare('t2_msg2', 'msg2');
  const MSG3 = reg.declare('t2_msg3', 'msg3');

  function oneBus(msgVar) {
    const askCode = B.askAndWait(reg, '', null);
    const setCode = B.setVar(reg, CODE, B.answerAsText(), null);
    const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
    const askV = B.askAndWait(reg, '', null);
    const setV = B.setVar(reg, V, B.answerBlock(), null);
    const addSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.getVar(reg, V)), null);
    const stationLoop = B.controlsFor(reg, J, B.numLit(1), B.numLit(5), B.numLit(1), B.chain(askV, setV, addSum));
    const msgIf = B.ifElseChain(
      [B.gt(B.getVar(reg, SUM), B.numLit(20))],
      [B.setVar(reg, msgVar, B.textJoin([B.getVar(reg, CODE), B.textLit('車超載')]), null)],
      B.setVar(reg, msgVar, B.textJoin([B.getVar(reg, CODE), B.textLit('車'), B.getVar(reg, SUM), B.textLit('人')]), null)
    );
    return [askCode, setCode, setSum0, stationLoop, msgIf];
  }
  // 注意：main.js的評分只認「說出」(interaction_say/print())輸出，且測試harness會把
  // 多次say()呼叫的內容用'\n'自動接起來比對（sayOutput.join('\n')）——這比在單一字串
  // 常數裡塞入換行字元可靠，因為Blockly的text欄位(FieldTextInput)會在載入XML時把
  // 常數文字裡的實際換行字元過濾掉(單行文字輸入框的限制)，導致'\n'字面常數失效。
  const bus1 = oneBus(MSG1);
  const bus2 = oneBus(MSG2);
  const bus3 = oneBus(MSG3);
  const sayAll = [B.say(B.getVar(reg, MSG1), null), B.say(B.getVar(reg, MSG2), null), B.say(B.getVar(reg, MSG3), null)];

  const top = B.whenFlagClicked(B.chain(...bus1, ...bus2, ...bus3, ...sayAll));
  tasks.push({
    id: 'Taipei-E-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'A\n5 3 2 4 6\nB\n6 6 5 5 4\nC\n4 3 2 3 4', expectedOutput: 'A車20人\nB車超載\nC車16人' },
      { input: 'A\n4 4 4 4 3\nB\n5 5 4 3 3\nC\n5 4 4 4 4', expectedOutput: 'A車19人\nB車20人\nC車超載' },
      { input: 'A\n3 4 4 4 4\nB\n4 4 4 4 4\nC\n5 3 4 4 3', expectedOutput: 'A車19人\nB車20人\nC車19人' },
      { input: 'A\n5 5 4 4 4\nB\n6 5 5 3 3\nC\n4 4 4 4 5', expectedOutput: 'A車超載\nB車超載\nC車超載' },
      { input: 'A\n3 4 3 4 6\nB\n4 4 4 4 3\nC\n2 6 6 4 3', expectedOutput: 'A車20人\nB車19人\nC車超載' },
      { input: 'A\n0 0 0 0 0\nB\n1 1 1 1 1\nC\n2 2 2 2 2', expectedOutput: 'A車0人\nB車5人\nC車10人' },
      { input: 'A\n4 4 4 4 4\nB\n5 5 5 5 5\nC\n6 6 6 6 6', expectedOutput: 'A車20人\nB車超載\nC車超載' },
      { input: 'X\n1 2 3 4 5\nY\n5 5 5 5 5\nZ\n5 5 5 5 1', expectedOutput: 'X車15人\nY車超載\nZ車超載' },
      { input: 'P\n10 10 1 0 0\nQ\n0 0 0 0 21\nR\n10 10 0 0 0', expectedOutput: 'P車超載\nQ車超載\nR車20人' },
      { input: 'M\n3 3 3 3 3\nN\n2 2 2 2 2\nO\n1 1 1 1 1', expectedOutput: 'M車15人\nN車10人\nO車5人' },
    ],
  });
})();

// 3. 成績補考機制 —— N行成績，每行科目數不固定但同一測資內一致；讀到空字串token代表
// 輸入結束，用來反推每行科目數K=剩餘token數/N，重建原本的行分組結構輸出。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t3_n', 'N');
  const ALL = reg.declare('t3_all', 'all');
  const CNT = reg.declare('t3_cnt', 'cnt');
  const DONE = reg.declare('t3_done', 'done');
  const ANS = reg.declare('t3_ans', 'ans');
  const K = reg.declare('t3_k', 'k');
  const R = reg.declare('t3_r', 'r');
  const C = reg.declare('t3_c', 'c');
  const IDX = reg.declare('t3_idx', 'idx');
  const VAL = reg.declare('t3_val', 'val');
  const ROWOUT = reg.declare('t3_rowout', 'rowout');

  const askN = B.askAndWait(reg, '請輸入學生數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initAll = B.setVar(reg, ALL, B.listsRepeat(B.numLit(0), B.numLit(300)), null);
  const setCnt0 = B.setVar(reg, CNT, B.numLit(0), null);
  const setDone0 = B.setVar(reg, DONE, B.numLit(0), null);

  const askAns = B.askAndWait(reg, '', null);
  const setAns = B.setVar(reg, ANS, B.answerAsText(), null);
  const stopBody = B.setVar(reg, DONE, B.numLit(1), null);
  const accumulateBody = B.chain(
    B.setVar(reg, CNT, B.add(B.getVar(reg, CNT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, ALL), B.getVar(reg, CNT), B.mul(B.getVar(reg, ANS), B.numLit(1)), null)
  );
  const readIf = B.ifElseChain([B.isEmptyText(B.getVar(reg, ANS))], [stopBody], accumulateBody);
  const readLoop = B.whileUntil('UNTIL', B.eq(B.getVar(reg, DONE), B.numLit(1)), B.chain(askAns, setAns, readIf));

  const setK = B.setVar(reg, K, B.round_('ROUNDDOWN', B.div(B.getVar(reg, CNT), B.getVar(reg, N))), null);

  const setIdx = B.setVar(reg, IDX, B.add(B.mul(B.sub(B.getVar(reg, R), B.numLit(1)), B.getVar(reg, K)), B.getVar(reg, C)), null);
  const setVal = B.setVar(reg, VAL, B.listsGetIndex(B.getVar(reg, ALL), B.getVar(reg, IDX)), null);
  const fixVal = B.ifElseChain([B.lt(B.getVar(reg, VAL), B.numLit(60))], [B.setVar(reg, VAL, B.numLit(60), null)], null);
  const appendVal = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, ROWOUT))],
    [B.setVar(reg, ROWOUT, B.textJoin([B.textLit(''), B.getVar(reg, VAL)]), null)],
    B.setVar(reg, ROWOUT, B.textJoin([B.getVar(reg, ROWOUT), B.textLit(' '), B.getVar(reg, VAL)]), null)
  );
  const colLoop = B.controlsFor(reg, C, B.numLit(1), B.getVar(reg, K), B.numLit(1), B.chain(setIdx, setVal, fixVal, appendVal));
  const rowBody = B.chain(B.setVar(reg, ROWOUT, B.textLit(''), null), colLoop, B.say(B.getVar(reg, ROWOUT), null));
  const rowLoop = B.controlsFor(reg, R, B.numLit(1), B.getVar(reg, N), B.numLit(1), rowBody);

  const top = B.whenFlagClicked(B.chain(askN, setN, initAll, setCnt0, setDone0, readLoop, setK, rowLoop));
  tasks.push({
    id: 'Taipei-E-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\n10 20 30', expectedOutput: '60 60 60' },
      { input: '2\n100 100\n59 60', expectedOutput: '100 100\n60 60' },
      { input: '3\n10 10\n80 80\n5 95', expectedOutput: '60 60\n80 80\n60 95' },
      { input: '1\n60 60 60', expectedOutput: '60 60 60' },
      { input: '2\n59 58 57\n61 62 63', expectedOutput: '60 60 60\n61 62 63' },
      { input: '1\n0 0 0 0 0', expectedOutput: '60 60 60 60 60' },
      { input: '4\n99\n100\n0\n60', expectedOutput: '99\n100\n60\n60' },
      { input: '1\n59 99', expectedOutput: '60 99' },
      { input: '2\n80 80\n40 40', expectedOutput: '80 80\n60 60' },
      { input: '3\n30\n40\n50', expectedOutput: '60\n60\n60' },
    ],
  });
})();

// 4. 滑動平均值 —— 讀到空字串代表輸入結束；最後一個token是K，其餘是數列。
(function () {
  const reg = B.createVarRegistry();
  const ALL = reg.declare('t4_all', 'all');
  const CNT = reg.declare('t4_cnt', 'cnt');
  const DONE = reg.declare('t4_done', 'done');
  const ANS = reg.declare('t4_ans', 'ans');
  const K = reg.declare('t4_k', 'k');
  const LISTLEN = reg.declare('t4_listlen', 'listlen');
  const START = reg.declare('t4_start', 'start');
  const C = reg.declare('t4_c', 'c');
  const SUM = reg.declare('t4_sum', 'sum');
  const AVG = reg.declare('t4_avg', 'avg');
  const OUT = reg.declare('t4_out', 'out');

  const initAll = B.setVar(reg, ALL, B.listsRepeat(B.numLit(0), B.numLit(300)), null);
  const setCnt0 = B.setVar(reg, CNT, B.numLit(0), null);
  const setDone0 = B.setVar(reg, DONE, B.numLit(0), null);
  const askAns = B.askAndWait(reg, '請輸入數列與區間大小K', null);
  const setAns = B.setVar(reg, ANS, B.answerAsText(), null);
  const stopBody = B.setVar(reg, DONE, B.numLit(1), null);
  const accumulateBody = B.chain(
    B.setVar(reg, CNT, B.add(B.getVar(reg, CNT), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, ALL), B.getVar(reg, CNT), B.mul(B.getVar(reg, ANS), B.numLit(1)), null)
  );
  const readIf = B.ifElseChain([B.isEmptyText(B.getVar(reg, ANS))], [stopBody], accumulateBody);
  const readLoop = B.whileUntil('UNTIL', B.eq(B.getVar(reg, DONE), B.numLit(1)), B.chain(askAns, setAns, readIf));

  const setK = B.setVar(reg, K, B.listsGetIndex(B.getVar(reg, ALL), B.getVar(reg, CNT)), null);
  const setListlen = B.setVar(reg, LISTLEN, B.sub(B.getVar(reg, CNT), B.numLit(1)), null);

  const setSum0 = B.setVar(reg, SUM, B.numLit(0), null);
  const addToSum = B.setVar(reg, SUM, B.add(B.getVar(reg, SUM), B.listsGetIndex(B.getVar(reg, ALL), B.add(B.getVar(reg, START), B.getVar(reg, C)))), null);
  const sumLoop = B.controlsFor(reg, C, B.numLit(0), B.sub(B.getVar(reg, K), B.numLit(1)), B.numLit(1), addToSum);
  const setAvgRaw = B.div(B.round_('ROUND', B.mul(B.div(B.getVar(reg, SUM), B.getVar(reg, K)), B.numLit(1000))), B.numLit(1000));
  const setAvg = B.setVar(reg, AVG, setAvgRaw, null);
  const appendAvg = B.ifElseChain(
    [B.isEmptyText(B.getVar(reg, OUT))],
    [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.getVar(reg, AVG)]), null)],
    B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, AVG)]), null)
  );
  const windowBody = B.chain(setSum0, sumLoop, setAvg, appendAvg);
  const windowLoop = B.controlsFor(reg, START, B.numLit(1), B.sub(B.getVar(reg, LISTLEN), B.sub(B.getVar(reg, K), B.numLit(1))), B.numLit(1), windowBody);
  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);

  const top = B.whenFlagClicked(B.chain(initAll, setCnt0, setDone0, readLoop, setK, setListlen, setOut0, windowLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Taipei-E-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2 4 6 8\n2', expectedOutput: '3 5 7' },
      { input: '10 20 30\n3', expectedOutput: '20' },
      { input: '5 5 5 5\n1', expectedOutput: '5 5 5 5' },
      { input: '10 20 30 40 50\n2', expectedOutput: '15 25 35 45' },
      { input: '1 2 3 4 5 6\n3', expectedOutput: '2 3 4 5' },
      { input: '10 10 10 10 10\n4', expectedOutput: '10 10' },
      { input: '0 10 20 30 40\n5', expectedOutput: '20' },
      { input: '100 200 300\n2', expectedOutput: '150 250' },
      { input: '5 15 25 35\n2', expectedOutput: '10 20 30' },
      { input: '2 2 2 2 2 2 2\n7', expectedOutput: '2' },
    ],
  });
})();

// 5. 連續字元分段顯示 —— 逐字元比對，換組時印出上一組「字元+次數」(多次say()，換行由harness join)。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('t5_s', 'S');
  const I = reg.declare('t5_i', 'i');
  const CH = reg.declare('t5_ch', 'ch');
  const CURCH = reg.declare('t5_curch', 'curch');
  const CURLEN = reg.declare('t5_curlen', 'curlen');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setCurCh0 = B.setVar(reg, CURCH, B.textLit(''), null);
  const setCurLen0 = B.setVar(reg, CURLEN, B.numLit(0), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const flushGroup = B.ifElseChain([B.gt(B.getVar(reg, CURLEN), B.numLit(0))], [B.say(B.textJoin([B.getVar(reg, CURCH), B.getVar(reg, CURLEN)]), null)], null);
  const startNewGroup = B.chain(flushGroup, B.setVar(reg, CURCH, B.getVar(reg, CH), null), B.setVar(reg, CURLEN, B.numLit(1), null));
  const extendGroup = B.setVar(reg, CURLEN, B.add(B.getVar(reg, CURLEN), B.numLit(1)), null);
  const groupIf = B.ifElseChain([B.eq(B.getVar(reg, CH), B.getVar(reg, CURCH))], [extendGroup], startNewGroup);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, groupIf));
  const finalFlush = B.ifElseChain([B.gt(B.getVar(reg, CURLEN), B.numLit(0))], [B.say(B.textJoin([B.getVar(reg, CURCH), B.getVar(reg, CURLEN)]), null)], null);

  const top = B.whenFlagClicked(B.chain(askS, setS, setCurCh0, setCurLen0, forLoop, finalFlush));
  tasks.push({
    id: 'Taipei-E-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'aaabbcddd', expectedOutput: 'a3\nb2\nc1\nd3' },
      { input: 'aabcccddd', expectedOutput: 'a2\nb1\nc3\nd3' },
      { input: 'abc', expectedOutput: 'a1\nb1\nc1' },
      { input: 'aaaaa', expectedOutput: 'a5' },
      { input: 'aabbcc', expectedOutput: 'a2\nb2\nc2' },
      { input: 'xxyyzz', expectedOutput: 'x2\ny2\nz2' },
      { input: 'mississippi', expectedOutput: 'm1\ni1\ns2\ni1\ns2\ni1\np2\ni1' },
      { input: 'hello', expectedOutput: 'h1\ne1\nl2\no1' },
      { input: 'wwwwwxxxxxyyyyyzzzzz', expectedOutput: 'w5\nx5\ny5\nz5' },
      { input: 'z', expectedOutput: 'z1' },
    ],
  });
})();

// 6. 移除指定字元後輸出新字串 —— 逐字元過濾，保留不等於target的字元。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('t6_s', 'S');
  const TARGET = reg.declare('t6_target', 'target');
  const I = reg.declare('t6_i', 'i');
  const CH = reg.declare('t6_ch', 'ch');
  const OUT = reg.declare('t6_out', 'out');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const askTarget = B.askAndWait(reg, '請輸入目標字元', null);
  const setTarget = B.setVar(reg, TARGET, B.answerAsText(), null);
  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const appendCh = B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.getVar(reg, CH)]), null);
  const keepIf = B.ifElseChain([B.neq(B.getVar(reg, CH), B.getVar(reg, TARGET))], [appendCh], null);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, keepIf));

  const top = B.whenFlagClicked(B.chain(askS, setS, askTarget, setTarget, setOut0, forLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Taipei-E-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'banana\na', expectedOutput: 'bnn' },
      { input: 'roblox\no', expectedOutput: 'rblx' },
      { input: 'apple\np', expectedOutput: 'ale' },
      { input: 'hello\nl', expectedOutput: 'heo' },
      { input: 'mississippi\ns', expectedOutput: 'miiippi' },
      { input: 'programming\ng', expectedOutput: 'prorammin' },
      { input: 'abc\nd', expectedOutput: 'abc' },
      { input: 'abcdef\nc', expectedOutput: 'abdef' },
      { input: 'xyzxyz\ny', expectedOutput: 'xzxz' },
      { input: 'google\no', expectedOutput: 'ggle' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_taipei_e.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'taipei_e tasks');
