const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 1. 壓縮機的編碼 —— 行程長度編碼(RLE)，單行輸出「字元次數」串接，不分隔。
(function () {
  const reg = B.createVarRegistry();
  const S = reg.declare('t1_s', 'S');
  const I = reg.declare('t1_i', 'i');
  const CH = reg.declare('t1_ch', 'ch');
  const CURCH = reg.declare('t1_curch', 'curch');
  const CURLEN = reg.declare('t1_curlen', 'curlen');
  const OUT = reg.declare('t1_out', 'out');

  const askS = B.askAndWait(reg, '請輸入字串', null);
  const setS = B.setVar(reg, S, B.answerAsText(), null);
  const setCurCh0 = B.setVar(reg, CURCH, B.textLit(''), null);
  const setCurLen0 = B.setVar(reg, CURLEN, B.numLit(0), null);
  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);

  const setCh = B.setVar(reg, CH, B.charAt(B.getVar(reg, S), B.getVar(reg, I)), null);
  const flushGroup = B.ifElseChain([B.gt(B.getVar(reg, CURLEN), B.numLit(0))], [B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.getVar(reg, CURCH), B.getVar(reg, CURLEN)]), null)], null);
  const startNewGroup = B.chain(flushGroup, B.setVar(reg, CURCH, B.getVar(reg, CH), null), B.setVar(reg, CURLEN, B.numLit(1), null));
  const extendGroup = B.setVar(reg, CURLEN, B.add(B.getVar(reg, CURLEN), B.numLit(1)), null);
  const groupIf = B.ifElseChain([B.eq(B.getVar(reg, CH), B.getVar(reg, CURCH))], [extendGroup], startNewGroup);
  const forLoop = B.controlsFor(reg, I, B.numLit(1), B.textLength(B.getVar(reg, S)), B.numLit(1), B.chain(setCh, groupIf));
  const finalFlush = B.ifElseChain([B.gt(B.getVar(reg, CURLEN), B.numLit(0))], [B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.getVar(reg, CURCH), B.getVar(reg, CURLEN)]), null)], null);

  const top = B.whenFlagClicked(B.chain(askS, setS, setCurCh0, setCurLen0, setOut0, forLoop, finalFlush, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Taipei-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: 'AAAB', expectedOutput: 'A3B1' },
      { input: 'A', expectedOutput: 'A1' },
      { input: 'BB', expectedOutput: 'B2' },
      { input: 'XY', expectedOutput: 'X1Y1' },
      { input: 'ABABABABAB', expectedOutput: 'A1B1A1B1A1B1A1B1A1B1' },
      { input: 'ZZZZZZZZZZZZZZZZZZZZ', expectedOutput: 'Z20' },
      { input: 'AABBCC', expectedOutput: 'A2B2C2' },
      { input: 'ABCDEF', expectedOutput: 'A1B1C1D1E1F1' },
      { input: 'A11B', expectedOutput: 'A112B1' },
      { input: 'XXXXYYYYZZZZ', expectedOutput: 'X4Y4Z4' },
    ],
  });
})();

// 2. 探險隊員名單排序 —— 貢獻度desc,年資desc,ID字典序asc(格式固定"ID"+3位數字，
// 取後3位數字轉數字比較即等同字典序，因為同格式同長度)。泡泡排序四個平行清單(ID文字/
// 貢獻度/年資/ID數字)一起交換。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t2_n', 'N');
  const IDS = reg.declare('t2_ids', 'ids');
  const CONTRIBS = reg.declare('t2_contribs', 'contribs');
  const SENS = reg.declare('t2_sens', 'sens');
  const IDNUMS = reg.declare('t2_idnums', 'idnums');
  const IDSTR = reg.declare('t2_idstr', 'idstr');
  const CONTRIB = reg.declare('t2_contrib', 'contrib');
  const SEN = reg.declare('t2_sen', 'sen');
  const I = reg.declare('t2_i', 'i');
  const J = reg.declare('t2_j', 'j');
  const TMPS = reg.declare('t2_tmps', 'tmps');
  const TMPN = reg.declare('t2_tmpn', 'tmpn');

  const askN = B.askAndWait(reg, '請輸入隊員總人數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initIds = B.setVar(reg, IDS, B.listsRepeat(B.textLit(''), B.getVar(reg, N)), null);
  const initContribs = B.setVar(reg, CONTRIBS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initSens = B.setVar(reg, SENS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initIdnums = B.setVar(reg, IDNUMS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askIdstr = B.askAndWait(reg, '', null);
  const setIdstr = B.setVar(reg, IDSTR, B.answerAsText(), null);
  const askContrib = B.askAndWait(reg, '', null);
  const setContrib = B.setVar(reg, CONTRIB, B.answerBlock(), null);
  const askSen = B.askAndWait(reg, '', null);
  const setSen = B.setVar(reg, SEN, B.answerBlock(), null);
  const d1 = B.charAtAsNumber(reg, 't2_d1', B.getVar(reg, IDSTR), B.numLit(3));
  const d2 = B.charAtAsNumber(reg, 't2_d2', B.getVar(reg, IDSTR), B.numLit(4));
  const d3 = B.charAtAsNumber(reg, 't2_d3', B.getVar(reg, IDSTR), B.numLit(5));
  const idnumVal = B.add(B.add(B.mul(d1.value, B.numLit(100)), B.mul(d2.value, B.numLit(10))), d3.value);
  const setIdIdx = B.listsSetIndex(B.getVar(reg, IDS), B.getVar(reg, I), B.getVar(reg, IDSTR), null);
  const setContribIdx = B.listsSetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, I), B.getVar(reg, CONTRIB), null);
  const setSenIdx = B.listsSetIndex(B.getVar(reg, SENS), B.getVar(reg, I), B.getVar(reg, SEN), null);
  const setIdnumIdx = B.listsSetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, I), idnumVal, null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1),
    B.chain(askIdstr, setIdstr, askContrib, setContrib, askSen, setSen, ...d1.steps, ...d2.steps, ...d3.steps, setIdIdx, setContribIdx, setSenIdx, setIdnumIdx));

  // 需要交換排序位置i,j的條件(希望排序後i在j之前)：貢獻度[j]較高的話i,j順序不對就交換。
  const ci = B.listsGetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, I));
  const cj = B.listsGetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, J));
  const si = B.listsGetIndex(B.getVar(reg, SENS), B.getVar(reg, I));
  const sj = B.listsGetIndex(B.getVar(reg, SENS), B.getVar(reg, J));
  const ni = B.listsGetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, I));
  const nj = B.listsGetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, J));
  const swapCond = B.or_(
    B.lt(ci, cj),
    B.and_(B.eq(ci, cj), B.or_(B.lt(si, sj), B.and_(B.eq(si, sj), B.gt(ni, nj))))
  );
  const swapSteps = B.chain(
    B.setVar(reg, TMPS, B.listsGetIndex(B.getVar(reg, IDS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, IDS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, IDS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, IDS), B.getVar(reg, J), B.getVar(reg, TMPS), null),
    B.setVar(reg, TMPN, B.listsGetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, J), B.getVar(reg, TMPN), null),
    B.setVar(reg, TMPN, B.listsGetIndex(B.getVar(reg, SENS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, SENS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, SENS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, SENS), B.getVar(reg, J), B.getVar(reg, TMPN), null),
    B.setVar(reg, TMPN, B.listsGetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, IDNUMS), B.getVar(reg, J), B.getVar(reg, TMPN), null)
  );
  const ifSwap = B.ifElseChain([swapCond], [swapSteps], null);
  const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, N), B.numLit(1), ifSwap);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), innerLoop);
  const sortIf = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(1))], [outerLoop], null);

  const sayOne = B.say(B.textJoin([
    B.listsGetIndex(B.getVar(reg, IDS), B.getVar(reg, I)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, CONTRIBS), B.getVar(reg, I)), B.textLit(' '),
    B.listsGetIndex(B.getVar(reg, SENS), B.getVar(reg, I)),
  ]), null);
  const outLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), sayOne);

  const top = B.whenFlagClicked(B.chain(askN, setN, initIds, initContribs, initSens, initIdnums, readLoop, sortIf, outLoop));
  tasks.push({
    id: 'Taipei-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1\nID359 100 5', expectedOutput: 'ID359 100 5' },
      { input: '2\nID380 50 1 ID313 100 2', expectedOutput: 'ID313 100 2\nID380 50 1' },
      { input: '2\nID951 100 1 ID318 100 5', expectedOutput: 'ID318 100 5\nID951 100 1' },
      { input: '2\nID237 100 1 ID139 100 1', expectedOutput: 'ID139 100 1\nID237 100 1' },
      { input: '5\nID221 10 10 ID708 10 10 ID007 10 10 ID741 10 10 ID479 10 10', expectedOutput: 'ID007 10 10\nID221 10 10\nID479 10 10\nID708 10 10\nID741 10 10' },
      { input: '3\nID111 50 50 ID222 50 50 ID333 50 50', expectedOutput: 'ID111 50 50\nID222 50 50\nID333 50 50' },
      { input: '3\nID333 50 50 ID222 50 50 ID111 50 50', expectedOutput: 'ID111 50 50\nID222 50 50\nID333 50 50' },
      { input: '4\nID001 10 1 ID002 20 1 ID003 30 1 ID004 40 1', expectedOutput: 'ID004 40 1\nID003 30 1\nID002 20 1\nID001 10 1' },
      { input: '4\nID001 10 10 ID002 10 20 ID003 10 30 ID004 10 40', expectedOutput: 'ID004 10 40\nID003 10 30\nID002 10 20\nID001 10 10' },
      { input: '5\nID100 100 100 ID200 50 200 ID300 200 50 ID400 100 100 ID500 200 50', expectedOutput: 'ID300 200 50\nID500 200 50\nID100 100 100\nID400 100 100\nID200 50 200' },
    ],
  });
})();

// 3. 通訊網路廣播 —— 從0號節點BFS，用鄰接矩陣(NxN)+佇列(陣列+頭尾指標)找最短距離。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t3_n', 'N');
  const M = reg.declare('t3_m', 'M');
  const ADJ = reg.declare('t3_adj', 'adj');
  const U = reg.declare('t3_u', 'u');
  const V = reg.declare('t3_v', 'v');
  const K = reg.declare('t3_k', 'k');
  const I = reg.declare('t3_i', 'i');
  const J = reg.declare('t3_j', 'j');
  const DIST = reg.declare('t3_dist', 'dist');
  const QUEUE = reg.declare('t3_queue', 'queue');
  const HEAD = reg.declare('t3_head', 'head');
  const TAIL = reg.declare('t3_tail', 'tail');
  const CUR = reg.declare('t3_cur', 'cur');
  const OUT = reg.declare('t3_out', 'out');

  const askN = B.askAndWait(reg, '請輸入N M', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);

  // ADJ用一維清單模擬NxN矩陣，index = row*N + col + 1(Blockly清單從1開始)。
  const initAdj = B.setVar(reg, ADJ, B.listsRepeat(B.numLit(0), B.mul(B.getVar(reg, N), B.getVar(reg, N))), null);
  const adjIndex = (rXml, cXml) => B.add(B.add(B.mul(rXml, B.getVar(reg, N)), cXml), B.numLit(1));

  const askU = B.askAndWait(reg, '', null);
  const setU = B.setVar(reg, U, B.answerBlock(), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setAdjUV = B.listsSetIndex(B.getVar(reg, ADJ), adjIndex(B.getVar(reg, U), B.getVar(reg, V)), B.numLit(1), null);
  const setAdjVU = B.listsSetIndex(B.getVar(reg, ADJ), adjIndex(B.getVar(reg, V), B.getVar(reg, U)), B.numLit(1), null);
  const edgeLoop = B.ifElseChain([B.gt(B.getVar(reg, M), B.numLit(0))], [B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(askU, setU, askV, setV, setAdjUV, setAdjVU))], null);

  const initDist = B.setVar(reg, DIST, B.listsRepeat(B.numLit(-1), B.getVar(reg, N)), null);
  const initQueue = B.setVar(reg, QUEUE, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setDist0_0 = B.listsSetIndex(B.getVar(reg, DIST), B.numLit(1), B.numLit(0), null);
  const setQueue0 = B.listsSetIndex(B.getVar(reg, QUEUE), B.numLit(1), B.numLit(0), null);
  const setHead0 = B.setVar(reg, HEAD, B.numLit(1), null);
  const setTail0 = B.setVar(reg, TAIL, B.numLit(1), null);

  const setCur = B.setVar(reg, CUR, B.listsGetIndex(B.getVar(reg, QUEUE), B.getVar(reg, HEAD)), null);
  const advanceHead = B.setVar(reg, HEAD, B.add(B.getVar(reg, HEAD), B.numLit(1)), null);
  const isNeighbor = B.eq(B.listsGetIndex(B.getVar(reg, ADJ), adjIndex(B.getVar(reg, CUR), B.getVar(reg, J))), B.numLit(1));
  const isUnvisited = B.eq(B.listsGetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, J), B.numLit(1))), B.numLit(-1));
  const visitNode = B.chain(
    B.listsSetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, J), B.numLit(1)), B.add(B.listsGetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, CUR), B.numLit(1))), B.numLit(1)), null),
    B.setVar(reg, TAIL, B.add(B.getVar(reg, TAIL), B.numLit(1)), null),
    B.listsSetIndex(B.getVar(reg, QUEUE), B.getVar(reg, TAIL), B.getVar(reg, J), null)
  );
  const neighborIf = B.ifElseChain([B.and_(isNeighbor, isUnvisited)], [visitNode], null);
  const neighborLoop = B.controlsFor(reg, J, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), neighborIf);
  const bfsBody = B.chain(setCur, advanceHead, neighborLoop);
  const bfsLoop = B.whileUntil('UNTIL', B.gt(B.getVar(reg, HEAD), B.getVar(reg, TAIL)), bfsBody);

  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const appendIf = B.ifElseChain(
    [B.neq(B.listsGetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, I), B.numLit(1))), B.numLit(-1))],
    [B.ifElseChain(
      [B.isEmptyText(B.getVar(reg, OUT))],
      [B.setVar(reg, OUT, B.textJoin([B.textLit(''), B.getVar(reg, I), B.textLit(':'), B.listsGetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, I), B.numLit(1)))]), null)],
      B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), B.getVar(reg, I), B.textLit(':'), B.listsGetIndex(B.getVar(reg, DIST), B.add(B.getVar(reg, I), B.numLit(1)))]), null)
    )],
    null
  );
  const outLoop = B.controlsFor(reg, I, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), appendIf);

  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, initAdj, edgeLoop, initDist, initQueue, setDist0_0, setQueue0, setHead0, setTail0, bfsLoop, setOut0, outLoop, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Taipei-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1 0', expectedOutput: '0:0' },
      { input: '2 1\n0 1', expectedOutput: '0:0 1:1' },
      { input: '2 0', expectedOutput: '0:0' },
      { input: '4 3\n0 1 1 2 2 3', expectedOutput: '0:0 1:1 2:2 3:3' },
      { input: '5 4\n0 1 0 2 0 3 0 4', expectedOutput: '0:0 1:1 2:1 3:1 4:1' },
      { input: '3 3\n0 1 1 2 2 0', expectedOutput: '0:0 1:1 2:1' },
      { input: '5 4\n0 1 1 2 0 3 3 4', expectedOutput: '0:0 1:1 2:2 3:1 4:2' },
      { input: '6 5\n0 1 1 2 2 3 3 4 4 5', expectedOutput: '0:0 1:1 2:2 3:3 4:4 5:5' },
      { input: '4 2\n0 1 2 3', expectedOutput: '0:0 1:1' },
      { input: '7 6\n0 1 0 2 1 3 1 4 2 5 2 6', expectedOutput: '0:0 1:1 2:1 3:2 4:2 5:2 6:2' },
    ],
  });
})();

// 4. 區域網路連線檢測 —— Union-Find(不路徑壓縮，資料量小足夠)：CONNECT合併，QUERY比較根。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t4_n', 'N');
  const M = reg.declare('t4_m', 'M');
  const PARENT = reg.declare('t4_parent', 'parent');
  const OP = reg.declare('t4_op', 'op');
  const U = reg.declare('t4_u', 'u');
  const V = reg.declare('t4_v', 'v');
  const K = reg.declare('t4_k', 'k');
  const I = reg.declare('t4_i', 'i');
  const PU = reg.declare('t4_pu', 'pu');
  const PV = reg.declare('t4_pv', 'pv');

  const askN = B.askAndWait(reg, '請輸入N M', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);

  // PARENT用1-indexed清單，節點編號0~N-1對應清單索引1~N(存的PARENT值仍是0-indexed節點編號)。
  const initParent = B.setVar(reg, PARENT, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setParentI = B.listsSetIndex(B.getVar(reg, PARENT), B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, I), null);
  const initParentLoop = B.controlsFor(reg, I, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), setParentI);

  function findSteps(xVar, resultVar) {
    const setResult0 = B.setVar(reg, resultVar, B.getVar(reg, xVar), null);
    const cond = B.neq(B.getVar(reg, resultVar), B.listsGetIndex(B.getVar(reg, PARENT), B.add(B.getVar(reg, resultVar), B.numLit(1))));
    const step = B.setVar(reg, resultVar, B.listsGetIndex(B.getVar(reg, PARENT), B.add(B.getVar(reg, resultVar), B.numLit(1))), null);
    const loop = B.whileUntil('WHILE', cond, step);
    return [setResult0, loop];
  }

  const askOp = B.askAndWait(reg, '', null);
  const setOp = B.setVar(reg, OP, B.answerAsText(), null);
  const askU = B.askAndWait(reg, '', null);
  const setU = B.setVar(reg, U, B.answerBlock(), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);

  const findU = findSteps(U, PU);
  const findV = findSteps(V, PV);
  const unionBody = B.ifElseChain([B.neq(B.getVar(reg, PU), B.getVar(reg, PV))], [B.listsSetIndex(B.getVar(reg, PARENT), B.add(B.getVar(reg, PU), B.numLit(1)), B.getVar(reg, PV), null)], null);
  const connectBody = B.chain(...findU, ...findV, unionBody);
  const queryBody = B.chain(...findU, ...findV, B.ifElseChain([B.eq(B.getVar(reg, PU), B.getVar(reg, PV))], [B.say(B.textLit('YES'), null)], B.say(B.textLit('NO'), null)));
  const opIf = B.ifElseChain([B.eq(B.getVar(reg, OP), B.textLit('CONNECT'))], [connectBody], queryBody);
  const opLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(askOp, setOp, askU, setU, askV, setV, opIf));

  const top = B.whenFlagClicked(B.chain(askN, setN, askM, setM, initParent, initParentLoop, opLoop));
  tasks.push({
    id: 'Taipei-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2 1\nQUERY 0 1', expectedOutput: 'NO' },
      { input: '2 2\nCONNECT 0 1 QUERY 0 1', expectedOutput: 'YES' },
      { input: '5 4\nCONNECT 0 1 CONNECT 1 2 CONNECT 2 3 QUERY 0 3', expectedOutput: 'YES' },
      { input: '4 5\nCONNECT 0 1 CONNECT 2 3 QUERY 0 2 QUERY 1 0 QUERY 3 2', expectedOutput: 'NO\nYES\nYES' },
      { input: '3 2\nCONNECT 0 0 QUERY 0 0', expectedOutput: 'YES' },
      { input: '4 4\nQUERY 0 1 QUERY 1 2 QUERY 2 3 QUERY 0 3', expectedOutput: 'NO\nNO\nNO\nNO' },
      { input: '3 4\nCONNECT 0 1 CONNECT 1 2 QUERY 0 2 QUERY 2 0', expectedOutput: 'YES\nYES' },
      { input: '5 6\nCONNECT 0 1 CONNECT 3 4 QUERY 0 4 CONNECT 1 3 QUERY 0 4 QUERY 1 4', expectedOutput: 'NO\nYES\nYES' },
      { input: '2 3\nQUERY 0 1 CONNECT 1 0 QUERY 0 1', expectedOutput: 'NO\nYES' },
      { input: '5 5\nCONNECT 0 1 CONNECT 0 2 CONNECT 0 3 CONNECT 0 4 QUERY 1 4', expectedOutput: 'YES' },
    ],
  });
})();

// 5. 最近恆星點對 —— O(N^2)窮舉所有點對，取最小距離，四捨五入至小數點後4位。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t5_n', 'N');
  const XS = reg.declare('t5_xs', 'xs');
  const YS = reg.declare('t5_ys', 'ys');
  const V = reg.declare('t5_v', 'v');
  const I = reg.declare('t5_i', 'i');
  const J = reg.declare('t5_j', 'j');
  const DX = reg.declare('t5_dx', 'dx');
  const DY = reg.declare('t5_dy', 'dy');
  const DIST = reg.declare('t5_dist', 'dist');
  const BEST = reg.declare('t5_best', 'best');
  const ANSWER = reg.declare('t5_answer', 'answer');

  const askN = B.askAndWait(reg, '請輸入恆星數量', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initXs = B.setVar(reg, XS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const initYs = B.setVar(reg, YS, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);

  const askX = B.askAndWait(reg, '', null);
  const setXIdx = B.listsSetIndex(B.getVar(reg, XS), B.getVar(reg, I), B.answerBlock(), null);
  const askY = B.askAndWait(reg, '', null);
  const setYIdx = B.listsSetIndex(B.getVar(reg, YS), B.getVar(reg, I), B.answerBlock(), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askX, setXIdx, askY, setYIdx));

  const setBest0 = B.setVar(reg, BEST, B.numLit(999999999), null);
  const setDx = B.setVar(reg, DX, B.sub(B.listsGetIndex(B.getVar(reg, XS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, XS), B.getVar(reg, J))), null);
  const setDy = B.setVar(reg, DY, B.sub(B.listsGetIndex(B.getVar(reg, YS), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, YS), B.getVar(reg, J))), null);
  const setDist = B.setVar(reg, DIST, B.sqrt_(B.add(B.mul(B.getVar(reg, DX), B.getVar(reg, DX)), B.mul(B.getVar(reg, DY), B.getVar(reg, DY)))), null);
  const ifBetter = B.ifElseChain([B.lt(B.getVar(reg, DIST), B.getVar(reg, BEST))], [B.setVar(reg, BEST, B.getVar(reg, DIST), null)], null);
  const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, N), B.numLit(1), B.chain(setDx, setDy, setDist, ifBetter));
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), innerLoop);

  // 四捨五入到小數點後4位，且不論結果是否為整數(例如1.0000)都要固定輸出4位小數，
  // 不能直接把數字轉字串(JS數字轉字串會去掉多餘的尾端0，1.0000會變成"1")。
  // 做法：先取到萬分位的整數SCALED，拆成整數部INTPART與小數部FRACPART(0~9999)，
  // FRACPART轉字串後用while迴圈左補0到4位，最後INTPART+'.'+FRACPART組合輸出。
  const SCALED = reg.declare('t5_scaled', 'scaled');
  const INTPART = reg.declare('t5_intpart', 'intpart');
  const FRACPART = reg.declare('t5_fracpart', 'fracpart');
  const FRACTEXT = reg.declare('t5_fractext', 'fractext');
  const setScaled = B.setVar(reg, SCALED, B.round_('ROUND', B.mul(B.getVar(reg, BEST), B.numLit(10000))), null);
  const setIntpart = B.setVar(reg, INTPART, B.round_('ROUNDDOWN', B.div(B.getVar(reg, SCALED), B.numLit(10000))), null);
  const setFracpart = B.setVar(reg, FRACPART, B.modulo(B.getVar(reg, SCALED), B.numLit(10000)), null);
  const setFractext = B.setVar(reg, FRACTEXT, B.textJoin([B.textLit(''), B.getVar(reg, FRACPART)]), null);
  const padStep = B.setVar(reg, FRACTEXT, B.textJoin([B.textLit('0'), B.getVar(reg, FRACTEXT)]), null);
  const padLoop = B.whileUntil('UNTIL', B.gte(B.textLength(B.getVar(reg, FRACTEXT)), B.numLit(4)), padStep);
  const setAnswer = B.setVar(reg, ANSWER, B.textJoin([B.getVar(reg, INTPART), B.textLit('.'), B.getVar(reg, FRACTEXT)]), null);
  const sayResult = B.say(B.getVar(reg, ANSWER), null);

  const top = B.whenFlagClicked(B.chain(askN, setN, initXs, initYs, readLoop, setBest0, outerLoop, setScaled, setIntpart, setFracpart, setFractext, padLoop, setAnswer, sayResult));
  tasks.push({
    id: 'Taipei-J-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n0 0 3 4 1 1', expectedOutput: '1.4142' },
      { input: '3\n0 0 10 10 20 20', expectedOutput: '14.1421' },
      { input: '4\n0 0 0 1 1 0 1 1', expectedOutput: '1.0000' },
      { input: '2\n1.5 1.5 1.5 1.5', expectedOutput: '0.0000' },
      { input: '5\n0 0 1 1 2 2 0.1 0.1 5 5', expectedOutput: '0.1414' },
      { input: '4\n0 0 0 5 5 0 5 5', expectedOutput: '5.0000' },
      { input: '3\n100 100 100 101 200 200', expectedOutput: '1.0000' },
      { input: '2\n0 0 10000 10000', expectedOutput: '14142.1356' },
      { input: '4\n1 1 2 2 3 3 4 4', expectedOutput: '1.4142' },
      { input: '5\n10 10 20 20 30 30 40 40 40 40.5', expectedOutput: '0.5000' },
    ],
  });
})();

// 6. 巨型結構的建造排程 —— DAG關鍵路徑：finish[v]=duration[v]+max(finish[u] for u->v)。
// 用Bellman-Ford式鬆弛：對所有邊重複鬆弛最多N輪，若第N輪後仍有邊可鬆弛代表有環，輸出IMPOSSIBLE。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('t6_n', 'N');
  const M = reg.declare('t6_m', 'M');
  const DUR = reg.declare('t6_dur', 'dur');
  const FROM = reg.declare('t6_from', 'from');
  const TO = reg.declare('t6_to', 'to');
  const V = reg.declare('t6_v', 'v');
  const I = reg.declare('t6_i', 'i');
  const K = reg.declare('t6_k', 'k');
  const ROUND = reg.declare('t6_round', 'round');
  const FINISH = reg.declare('t6_finish', 'finish');
  const CHANGED = reg.declare('t6_changed', 'changed');
  const U = reg.declare('t6_u', 'u');
  const W = reg.declare('t6_w', 'w');
  const CAND = reg.declare('t6_cand', 'cand');
  const IMPOSSIBLE = reg.declare('t6_impossible', 'impossible');
  const ANSWER = reg.declare('t6_answer', 'answer');

  const askN = B.askAndWait(reg, '請輸入N M', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const askM = B.askAndWait(reg, '', null);
  const setM = B.setVar(reg, M, B.answerBlock(), null);
  const initDur = B.setVar(reg, DUR, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '請輸入各任務工時', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setDurIdx = B.listsSetIndex(B.getVar(reg, DUR), B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, V), null);
  const readDurLoop = B.controlsFor(reg, I, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), B.chain(askV, setV, setDurIdx));

  const initFrom = B.setVar(reg, FROM, B.listsRepeat(B.numLit(0), B.getVar(reg, M)), null);
  const initTo = B.setVar(reg, TO, B.listsRepeat(B.numLit(0), B.getVar(reg, M)), null);
  const askU = B.askAndWait(reg, '', null);
  const setU = B.setVar(reg, U, B.answerBlock(), null);
  const askW = B.askAndWait(reg, '', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);
  const setFromIdx = B.listsSetIndex(B.getVar(reg, FROM), B.getVar(reg, K), B.getVar(reg, U), null);
  const setToIdx = B.listsSetIndex(B.getVar(reg, TO), B.getVar(reg, K), B.getVar(reg, W), null);
  const edgeLoop = B.ifElseChain([B.gt(B.getVar(reg, M), B.numLit(0))], [B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(askU, setU, askW, setW, setFromIdx, setToIdx))], null);

  const initFinish = B.setVar(reg, FINISH, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const setFinishIdx0 = B.listsSetIndex(B.getVar(reg, FINISH), B.add(B.getVar(reg, I), B.numLit(1)), B.listsGetIndex(B.getVar(reg, DUR), B.add(B.getVar(reg, I), B.numLit(1))), null);
  const initFinishLoop = B.controlsFor(reg, I, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), setFinishIdx0);

  // 鬆弛一輪所有邊：cand = finish[from]+dur[to]；若cand>finish[to]則更新並標記changed。
  const setCand = B.setVar(reg, CAND, B.add(
    B.listsGetIndex(B.getVar(reg, FINISH), B.add(B.listsGetIndex(B.getVar(reg, FROM), B.getVar(reg, K)), B.numLit(1))),
    B.listsGetIndex(B.getVar(reg, DUR), B.add(B.listsGetIndex(B.getVar(reg, TO), B.getVar(reg, K)), B.numLit(1)))
  ), null);
  const relaxIf = B.ifElseChain(
    [B.gt(B.getVar(reg, CAND), B.listsGetIndex(B.getVar(reg, FINISH), B.add(B.listsGetIndex(B.getVar(reg, TO), B.getVar(reg, K)), B.numLit(1))))],
    [B.chain(
      B.listsSetIndex(B.getVar(reg, FINISH), B.add(B.listsGetIndex(B.getVar(reg, TO), B.getVar(reg, K)), B.numLit(1)), B.getVar(reg, CAND), null),
      B.setVar(reg, CHANGED, B.numLit(1), null)
    )],
    null
  );
  const oneEdgeLoop = B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(setCand, relaxIf));
  const setChanged0 = B.setVar(reg, CHANGED, B.numLit(0), null);
  const oneRound = B.ifElseChain([B.gt(B.getVar(reg, M), B.numLit(0))], [B.chain(setChanged0, oneEdgeLoop)], null);
  const relaxLoop = B.controlsFor(reg, ROUND, B.numLit(1), B.getVar(reg, N), B.numLit(1), oneRound);

  // 再鬆弛一輪，若還能鬆弛代表有正環(循環依賴)，判定IMPOSSIBLE。
  const setImpossible0 = B.setVar(reg, IMPOSSIBLE, B.numLit(0), null);
  const finalCheckLoop = B.ifElseChain([B.gt(B.getVar(reg, M), B.numLit(0))], [B.controlsFor(reg, K, B.numLit(1), B.getVar(reg, M), B.numLit(1), B.chain(
    setCand,
    B.ifElseChain([B.gt(B.getVar(reg, CAND), B.listsGetIndex(B.getVar(reg, FINISH), B.add(B.listsGetIndex(B.getVar(reg, TO), B.getVar(reg, K)), B.numLit(1))))], [B.setVar(reg, IMPOSSIBLE, B.numLit(1), null)], null)
  ))], null);

  const setAnswerMax0 = B.setVar(reg, ANSWER, B.numLit(-999999999), null);
  const ifMaxFinish = B.ifElseChain([B.gt(B.listsGetIndex(B.getVar(reg, FINISH), B.add(B.getVar(reg, I), B.numLit(1))), B.getVar(reg, ANSWER))], [B.setVar(reg, ANSWER, B.listsGetIndex(B.getVar(reg, FINISH), B.add(B.getVar(reg, I), B.numLit(1))), null)], null);
  const maxLoop = B.controlsFor(reg, I, B.numLit(0), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), ifMaxFinish);

  const resultIf = B.ifElseChain([B.eq(B.getVar(reg, IMPOSSIBLE), B.numLit(1))], [B.say(B.textLit('IMPOSSIBLE'), null)], B.say(B.getVar(reg, ANSWER), null));

  const top = B.whenFlagClicked(B.chain(
    askN, setN, askM, setM, initDur, readDurLoop, initFrom, initTo, edgeLoop,
    initFinish, initFinishLoop, relaxLoop, setImpossible0, finalCheckLoop,
    setAnswerMax0, maxLoop, resultIf
  ));
  tasks.push({
    id: 'Taipei-J-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '1 0\n10', expectedOutput: '10' },
      { input: '2 1\n10 20\n0 1', expectedOutput: '30' },
      { input: '3 3\n10 10 10\n0 1 1 2 2 0', expectedOutput: 'IMPOSSIBLE' },
      { input: '3 2\n10 20 30\n0 1 0 2', expectedOutput: '40' },
      { input: '4 3\n10 10 10 10\n0 1 1 2 2 3', expectedOutput: '40' },
      { input: '3 0\n100 200 300', expectedOutput: '300' },
      { input: '5 4\n10 20 30 40 50\n0 4 1 4 2 4 3 4', expectedOutput: '90' },
      { input: '4 4\n10 20 30 40\n0 1 1 2 2 3 3 1', expectedOutput: 'IMPOSSIBLE' },
      { input: '5 4\n10 10 10 10 10\n0 1 0 2 1 3 2 3', expectedOutput: '30' },
      { input: '2 2\n100 100\n0 1 1 0', expectedOutput: 'IMPOSSIBLE' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_taipei_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'taipei_j tasks');
