const fs = require('fs');
const B = require('./xml-builder.cjs');

const tasks = [];

// 一、貨物重量計費 —— 累進費率：0-10kg每kg30,超過10~30每kg25,超過30~50每kg20,超過50每kg15。
(function () {
  const reg = B.createVarRegistry();
  const W = reg.declare('h1_w', 'W');
  const T1 = reg.declare('h1_t1', 't1');
  const T2 = reg.declare('h1_t2', 't2');
  const T3 = reg.declare('h1_t3', 't3');
  const T4 = reg.declare('h1_t4', 't4');
  const FEE = reg.declare('h1_fee', 'fee');

  const askW = B.askAndWait(reg, '請輸入貨物重量', null);
  const setW = B.setVar(reg, W, B.answerBlock(), null);

  const min10 = B.ternary(B.lt(B.getVar(reg, W), B.numLit(10)), B.getVar(reg, W), B.numLit(10));
  const setT1 = B.setVar(reg, T1, B.mul(min10, B.numLit(30)), null);

  const t2span = B.ternary(B.lt(B.getVar(reg, W), B.numLit(30)), B.sub(B.getVar(reg, W), B.numLit(10)), B.numLit(20));
  const t2raw = B.ternary(B.gt(B.getVar(reg, W), B.numLit(10)), t2span, B.numLit(0));
  const setT2 = B.setVar(reg, T2, B.mul(t2raw, B.numLit(25)), null);

  const t3span = B.ternary(B.lt(B.getVar(reg, W), B.numLit(50)), B.sub(B.getVar(reg, W), B.numLit(30)), B.numLit(20));
  const t3raw = B.ternary(B.gt(B.getVar(reg, W), B.numLit(30)), t3span, B.numLit(0));
  const setT3 = B.setVar(reg, T3, B.mul(t3raw, B.numLit(20)), null);

  const t4raw = B.ternary(B.gt(B.getVar(reg, W), B.numLit(50)), B.sub(B.getVar(reg, W), B.numLit(50)), B.numLit(0));
  const setT4 = B.setVar(reg, T4, B.mul(t4raw, B.numLit(15)), null);

  const setFee = B.setVar(reg, FEE, B.add(B.add(B.getVar(reg, T1), B.getVar(reg, T2)), B.add(B.getVar(reg, T3), B.getVar(reg, T4))), null);

  const top = B.whenFlagClicked(B.chain(askW, setW, setT1, setT2, setT3, setT4, setFee, B.say(B.getVar(reg, FEE), null)));
  tasks.push({
    id: 'Hsinchu-J-1',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6', expectedOutput: '180' },
      { input: '32', expectedOutput: '840' },
      { input: '10', expectedOutput: '300' },
      { input: '11', expectedOutput: '325' },
      { input: '30', expectedOutput: '800' },
      { input: '31', expectedOutput: '820' },
      { input: '50', expectedOutput: '1200' },
      { input: '51', expectedOutput: '1215' },
      { input: '100', expectedOutput: '1950' },
      { input: '0', expectedOutput: '0' },
    ],
  });
})();

// 二、想去遊樂園 —— 大人國：成人(>12歲)599/兒童(<=12歲)299，65歲以上長者可免費帶1位
// 6歲以下兒童(該兒童變免費)。七福村：7的倍數(非0)免費入場，否則全票(>9歲)499/半票(<=9歲)299。
// 注意：比對10筆評審資料，此演算法與其中8筆完全吻合；案例8/9兩筆數字與此演算法有出入
// （案例8連「哪個樂園較便宜」的結論都不同，案例9只有金額不同但樂園結論相同），判定為
// 來源資料的獨立錯誤，題庫依演算法結果收錄（見PDF題目來源勘誤紀錄）。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h2_n', 'N');
  const AGES = reg.declare('h2_ages', 'ages');
  const V = reg.declare('h2_v', 'v');
  const I = reg.declare('h2_i', 'i');
  const SENIORS = reg.declare('h2_seniors', 'seniors');
  const ELIGIBLE = reg.declare('h2_eligible', 'eligible');
  const FREECOUNT = reg.declare('h2_freecount', 'freecount');
  const DBASE = reg.declare('h2_dbase', 'dbase');
  const DTOTAL = reg.declare('h2_dtotal', 'dtotal');
  const QTOTAL = reg.declare('h2_qtotal', 'qtotal');
  const AGE = reg.declare('h2_age', 'age');

  const askN = B.askAndWait(reg, '請輸入同行人數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initAges = B.setVar(reg, AGES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setAgeIdx = B.listsSetIndex(B.getVar(reg, AGES), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setAgeIdx));

  const setSeniors0 = B.setVar(reg, SENIORS, B.numLit(0), null);
  const setEligible0 = B.setVar(reg, ELIGIBLE, B.numLit(0), null);
  const setDbase0 = B.setVar(reg, DBASE, B.numLit(0), null);
  const setQtotal0 = B.setVar(reg, QTOTAL, B.numLit(0), null);

  const setAge = B.setVar(reg, AGE, B.listsGetIndex(B.getVar(reg, AGES), B.getVar(reg, I)), null);
  const ifSenior = B.ifElseChain([B.gte(B.getVar(reg, AGE), B.numLit(65))], [B.setVar(reg, SENIORS, B.add(B.getVar(reg, SENIORS), B.numLit(1)), null)], null);
  const ifEligible = B.ifElseChain([B.lt(B.getVar(reg, AGE), B.numLit(6))], [B.setVar(reg, ELIGIBLE, B.add(B.getVar(reg, ELIGIBLE), B.numLit(1)), null)], null);
  const dPrice = B.ternary(B.lte(B.getVar(reg, AGE), B.numLit(12)), B.numLit(299), B.numLit(599));
  const addDbase = B.setVar(reg, DBASE, B.add(B.getVar(reg, DBASE), dPrice), null);
  const qFree = B.and_(B.neq(B.getVar(reg, AGE), B.numLit(0)), B.eq(B.modulo(B.getVar(reg, AGE), B.numLit(7)), B.numLit(0)));
  const qPrice = B.ternary(B.lte(B.getVar(reg, AGE), B.numLit(9)), B.numLit(299), B.numLit(499));
  const addQtotal = B.ifElseChain([qFree], [null], B.setVar(reg, QTOTAL, B.add(B.getVar(reg, QTOTAL), qPrice), null));
  const scanLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(setAge, ifSenior, ifEligible, addDbase, addQtotal));

  const setFreeCount = B.setVar(reg, FREECOUNT, B.ternary(B.lt(B.getVar(reg, SENIORS), B.getVar(reg, ELIGIBLE)), B.getVar(reg, SENIORS), B.getVar(reg, ELIGIBLE)), null);
  const setDtotal = B.setVar(reg, DTOTAL, B.sub(B.getVar(reg, DBASE), B.mul(B.getVar(reg, FREECOUNT), B.numLit(299))), null);

  const resultIf = B.ifElseChain(
    [B.lt(B.getVar(reg, DTOTAL), B.getVar(reg, QTOTAL))],
    [B.say(B.textJoin([B.textLit('大人國'), B.textLit(' '), B.getVar(reg, DTOTAL)]), null)],
    B.say(B.textJoin([B.textLit('七福村'), B.textLit(' '), B.getVar(reg, QTOTAL)]), null)
  );

  const top = B.whenFlagClicked(B.chain(askN, setN, initAges, readLoop, setSeniors0, setEligible0, setDbase0, setQtotal0, scanLoop, setFreeCount, setDtotal, resultIf));
  tasks.push({
    id: 'Hsinchu-J-2',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n70 5 10', expectedOutput: '七福村 798' },
      { input: '4\n10 12 65 5', expectedOutput: '大人國 1197' },
      { input: '1\n7', expectedOutput: '七福村 0' },
      { input: '2\n65 5', expectedOutput: '大人國 599' },
      { input: '3\n20 20 20', expectedOutput: '七福村 1497' },
      { input: '5\n66 66 5 5 20', expectedOutput: '大人國 1797' },
      { input: '4\n7 14 21 28', expectedOutput: '七福村 0' },
      // 來源TXT此筆答案「七福村 798」與演算法（其餘9筆全數吻合）矛盾：無長者/兒童配對，
      // 大人國=9(半票299)+12(半票299)=598；七福村=9(半票299)+12(全票499)=798，
      // 598<798應為大人國較便宜，判定為來源資料獨立錯誤，依演算法結果收錄。
      { input: '2\n9 12', expectedOutput: '大人國 598' },
      // 來源TXT此筆答案「七福村 499」的樂園結論正確，但金額與演算法（其餘9筆吻合）不符：
      // 七福村=65(全票499，65不是7的倍數)+6(半票299)+7(免費，7是7的倍數)=798，
      // 判定為來源資料獨立錯誤，依演算法結果收錄金額。
      { input: '3\n65 6 7', expectedOutput: '七福村 798' },
      { input: '1\n35', expectedOutput: '七福村 0' },
    ],
  });
})();

// 三、我是神箭手 —— x=-floor(距離/10)*風速，y=floor(距離/8)。
(function () {
  const reg = B.createVarRegistry();
  const WIND = reg.declare('h3_wind', 'wind');
  const DIST = reg.declare('h3_dist', 'dist');
  const X = reg.declare('h3_x', 'x');
  const Y = reg.declare('h3_y', 'y');

  const askWind = B.askAndWait(reg, '請輸入風速', null);
  const setWind = B.setVar(reg, WIND, B.answerBlock(), null);
  const askDist = B.askAndWait(reg, '請輸入距離', null);
  const setDist = B.setVar(reg, DIST, B.answerBlock(), null);
  const setX = B.setVar(reg, X, B.mul(B.numLit(-1), B.mul(B.round_('ROUNDDOWN', B.div(B.getVar(reg, DIST), B.numLit(10))), B.getVar(reg, WIND))), null);
  const setY = B.setVar(reg, Y, B.round_('ROUNDDOWN', B.div(B.getVar(reg, DIST), B.numLit(8))), null);

  const top = B.whenFlagClicked(B.chain(askWind, setWind, askDist, setDist, setX, setY, B.say(B.textJoin([B.getVar(reg, X), B.textLit(' '), B.getVar(reg, Y)]), null)));
  tasks.push({
    id: 'Hsinchu-J-3',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '3\n24', expectedOutput: '-6 3' },
      { input: '5\n40', expectedOutput: '-20 5' },
      { input: '0\n7', expectedOutput: '0 0' },
      { input: '-2\n24', expectedOutput: '4 3' },
      { input: '10\n80', expectedOutput: '-80 10' },
      { input: '-5\n40', expectedOutput: '20 5' },
      { input: '1\n79', expectedOutput: '-7 9' },
      { input: '-10\n9', expectedOutput: '0 1' },
      { input: '100\n100', expectedOutput: '-1000 12' },
      { input: '-100\n100', expectedOutput: '1000 12' },
    ],
  });
})();

// 四、會員入場統計 —— 卡號=1字母+4數字+1檢查碼(共6碼)，總和值=字母對應數字+4個數字+檢查碼，
// 總和%10為0或1才合法；統計合法入場中哪一類別(普通/貴賓/學生)人數最多(可能並列，依優先序輸出)。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h4_n', 'N');
  const CARD = reg.declare('h4_card', 'card');
  const I = reg.declare('h4_i', 'i');
  const J = reg.declare('h4_j', 'j');
  const LETTER = reg.declare('h4_letter', 'letter');
  const LETTERVAL = reg.declare('h4_letterval', 'letterval');
  const CAT = reg.declare('h4_cat', 'cat');
  const DIGITSUM = reg.declare('h4_digitsum', 'digitsum');
  const DCH = reg.declare('h4_dch', 'dch');
  const CHECKVAL = reg.declare('h4_checkval', 'checkval');
  const SUMVAL = reg.declare('h4_sumval', 'sumval');
  const CNT1 = reg.declare('h4_cnt1', 'cnt1');
  const CNT2 = reg.declare('h4_cnt2', 'cnt2');
  const CNT3 = reg.declare('h4_cnt3', 'cnt3');
  const OUT = reg.declare('h4_out', 'out');

  const askN = B.askAndWait(reg, '請輸入卡號總數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const setCnt1_0 = B.setVar(reg, CNT1, B.numLit(0), null);
  const setCnt2_0 = B.setVar(reg, CNT2, B.numLit(0), null);
  const setCnt3_0 = B.setVar(reg, CNT3, B.numLit(0), null);

  const askCard = B.askAndWait(reg, '', null);
  const setCard = B.setVar(reg, CARD, B.answerAsText(), null);
  const setLetter = B.setVar(reg, LETTER, B.charAt(B.getVar(reg, CARD), B.numLit(1)), null);
  const letterIf = B.ifElseChain(
    [B.eq(B.getVar(reg, LETTER), B.textLit('A')), B.eq(B.getVar(reg, LETTER), B.textLit('B')), B.eq(B.getVar(reg, LETTER), B.textLit('C')),
      B.eq(B.getVar(reg, LETTER), B.textLit('V')), B.eq(B.getVar(reg, LETTER), B.textLit('I')), B.eq(B.getVar(reg, LETTER), B.textLit('P')),
      B.eq(B.getVar(reg, LETTER), B.textLit('S')), B.eq(B.getVar(reg, LETTER), B.textLit('T'))],
    [
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(11), null), B.setVar(reg, CAT, B.numLit(1), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(13), null), B.setVar(reg, CAT, B.numLit(1), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(15), null), B.setVar(reg, CAT, B.numLit(1), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(17), null), B.setVar(reg, CAT, B.numLit(2), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(19), null), B.setVar(reg, CAT, B.numLit(2), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(21), null), B.setVar(reg, CAT, B.numLit(2), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(23), null), B.setVar(reg, CAT, B.numLit(3), null)),
      B.chain(B.setVar(reg, LETTERVAL, B.numLit(25), null), B.setVar(reg, CAT, B.numLit(3), null)),
    ],
    B.chain(B.setVar(reg, LETTERVAL, B.numLit(27), null), B.setVar(reg, CAT, B.numLit(3), null))
  );

  // 注意：text_charAt輸出是String型別，直接塞進math_arithmetic(mul)的Number插槽會被Blockly
  // 靜默拒絕連接變孤立積木(不報XML錯誤，但生成的JS會漏執行該行，導致變數undefined)。
  // 用charAtAsNumber helper繞過(先存成變數再乘1強制轉數字)。
  const setDigitsum0 = B.setVar(reg, DIGITSUM, B.numLit(0), null);
  const dchResult = B.charAtAsNumber(reg, 'h4_dch', B.getVar(reg, CARD), B.getVar(reg, J));
  const addDigit = B.setVar(reg, DIGITSUM, B.add(B.getVar(reg, DIGITSUM), dchResult.value), null);
  const digitLoop = B.controlsFor(reg, J, B.numLit(2), B.numLit(5), B.numLit(1), B.chain(...dchResult.steps, addDigit));
  const checkvalResult = B.charAtAsNumber(reg, 'h4_checkval', B.getVar(reg, CARD), B.numLit(6));
  const setCheckval = B.setVar(reg, CHECKVAL, checkvalResult.value, null);
  const setSumval = B.setVar(reg, SUMVAL, B.add(B.add(B.getVar(reg, LETTERVAL), B.getVar(reg, DIGITSUM)), B.getVar(reg, CHECKVAL)), null);

  const validCond = B.or_(B.eq(B.modulo(B.getVar(reg, SUMVAL), B.numLit(10)), B.numLit(0)), B.eq(B.modulo(B.getVar(reg, SUMVAL), B.numLit(10)), B.numLit(1)));
  const bumpCat = B.ifElseChain(
    [B.eq(B.getVar(reg, CAT), B.numLit(1)), B.eq(B.getVar(reg, CAT), B.numLit(2))],
    [B.setVar(reg, CNT1, B.add(B.getVar(reg, CNT1), B.numLit(1)), null), B.setVar(reg, CNT2, B.add(B.getVar(reg, CNT2), B.numLit(1)), null)],
    B.setVar(reg, CNT3, B.add(B.getVar(reg, CNT3), B.numLit(1)), null)
  );
  const validIf = B.ifElseChain([validCond], [bumpCat], null);
  const cardLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askCard, setCard, setLetter, letterIf, setDigitsum0, digitLoop, ...checkvalResult.steps, setCheckval, setSumval, validIf));

  const setOut0 = B.setVar(reg, OUT, B.textLit(''), null);
  const setMaxv = B.setVar(reg, LETTERVAL, B.ternary(B.gt(B.getVar(reg, CNT1), B.getVar(reg, CNT2)), B.getVar(reg, CNT1), B.getVar(reg, CNT2)), null);
  const setMaxv2 = B.setVar(reg, LETTERVAL, B.ternary(B.gt(B.getVar(reg, CNT3), B.getVar(reg, LETTERVAL)), B.getVar(reg, CNT3), B.getVar(reg, LETTERVAL)), null);
  const appendCat = (nameXml, condXml) => B.ifElseChain(
    [condXml],
    [B.ifElseChain(
      [B.isEmptyText(B.getVar(reg, OUT))],
      [B.setVar(reg, OUT, B.textJoin([B.textLit(''), nameXml]), null)],
      B.setVar(reg, OUT, B.textJoin([B.getVar(reg, OUT), B.textLit(' '), nameXml]), null)
    )],
    null
  );
  const cond1 = B.and_(B.gt(B.getVar(reg, CNT1), B.numLit(0)), B.eq(B.getVar(reg, CNT1), B.getVar(reg, LETTERVAL)));
  const cond2 = B.and_(B.gt(B.getVar(reg, CNT2), B.numLit(0)), B.eq(B.getVar(reg, CNT2), B.getVar(reg, LETTERVAL)));
  const cond3 = B.and_(B.gt(B.getVar(reg, CNT3), B.numLit(0)), B.eq(B.getVar(reg, CNT3), B.getVar(reg, LETTERVAL)));
  const append1 = appendCat(B.textLit('普通會員'), cond1);
  const append2 = appendCat(B.textLit('貴賓會員'), cond2);
  const append3 = appendCat(B.textLit('學生會員'), cond3);

  const top = B.whenFlagClicked(B.chain(askN, setN, setCnt1_0, setCnt2_0, setCnt3_0, cardLoop, setOut0, setMaxv, setMaxv2, append1, append2, append3, B.say(B.getVar(reg, OUT), null)));
  tasks.push({
    id: 'Hsinchu-J-4',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2\nS11114 T00005', expectedOutput: '學生會員' },
      { input: '3\nA12347 V00003 S11113', expectedOutput: '貴賓會員 學生會員' },
      { input: '1\nA00000', expectedOutput: '普通會員' },
      { input: '3\nA00000 B00008 C00006', expectedOutput: '普通會員' },
      { input: '3\nV00004 I00002 P00000', expectedOutput: '貴賓會員' },
      { input: '6\nA00000 V00004 S00008 B00008 I00002 T00006', expectedOutput: '普通會員 貴賓會員 學生會員' },
      { input: '4\nA11114 V11111 S11112 A00000', expectedOutput: '普通會員' },
      // 來源TXT此筆預期答案「普通會員 貴賓會員 學生會員」與演算法（其餘9筆全數吻合）矛盾：
      // 三張卡的字母A/B/C全部屬於同一類別(普通會員)，結構上不可能出現跨類別平手，
      // 判定為來源資料複製貼上錯誤(與案例6輸出完全相同)，依演算法結果收錄(僅C12345合法)。
      { input: '3\nA12345 B12345 C12345', expectedOutput: '普通會員' },
      { input: '2\nV00004 S00008', expectedOutput: '貴賓會員 學生會員' },
      { input: '3\nP00000 P00000 P00000', expectedOutput: '貴賓會員' },
    ],
  });
})();

// 五、買五送一 —— 依價格由高到低排序後，第6、12、18...杯免費，其餘加總。
(function () {
  const reg = B.createVarRegistry();
  const N = reg.declare('h5_n', 'N');
  const PRICES = reg.declare('h5_prices', 'prices');
  const V = reg.declare('h5_v', 'v');
  const I = reg.declare('h5_i', 'i');
  const J = reg.declare('h5_j', 'j');
  const TMP = reg.declare('h5_tmp', 'tmp');
  const TOTAL = reg.declare('h5_total', 'total');

  const askN = B.askAndWait(reg, '請輸入購買杯數', null);
  const setN = B.setVar(reg, N, B.answerBlock(), null);
  const initPrices = B.setVar(reg, PRICES, B.listsRepeat(B.numLit(0), B.getVar(reg, N)), null);
  const askV = B.askAndWait(reg, '', null);
  const setV = B.setVar(reg, V, B.answerBlock(), null);
  const setPriceIdx = B.listsSetIndex(B.getVar(reg, PRICES), B.getVar(reg, I), B.getVar(reg, V), null);
  const readLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), B.chain(askV, setV, setPriceIdx));

  const cond = B.lt(B.listsGetIndex(B.getVar(reg, PRICES), B.getVar(reg, I)), B.listsGetIndex(B.getVar(reg, PRICES), B.getVar(reg, J)));
  const swapSteps = B.chain(
    B.setVar(reg, TMP, B.listsGetIndex(B.getVar(reg, PRICES), B.getVar(reg, I)), null),
    B.listsSetIndex(B.getVar(reg, PRICES), B.getVar(reg, I), B.listsGetIndex(B.getVar(reg, PRICES), B.getVar(reg, J)), null),
    B.listsSetIndex(B.getVar(reg, PRICES), B.getVar(reg, J), B.getVar(reg, TMP), null)
  );
  const ifSwap = B.ifElseChain([cond], [swapSteps], null);
  const innerLoop = B.controlsFor(reg, J, B.add(B.getVar(reg, I), B.numLit(1)), B.getVar(reg, N), B.numLit(1), ifSwap);
  const outerLoop = B.controlsFor(reg, I, B.numLit(1), B.sub(B.getVar(reg, N), B.numLit(1)), B.numLit(1), innerLoop);
  const sortIf = B.ifElseChain([B.gt(B.getVar(reg, N), B.numLit(1))], [outerLoop], null);

  const setTotal0 = B.setVar(reg, TOTAL, B.numLit(0), null);
  const isFree = B.eq(B.modulo(B.getVar(reg, I), B.numLit(6)), B.numLit(0));
  const addIfPaid = B.ifElseChain([isFree], [null], B.setVar(reg, TOTAL, B.add(B.getVar(reg, TOTAL), B.listsGetIndex(B.getVar(reg, PRICES), B.getVar(reg, I))), null));
  const sumLoop = B.controlsFor(reg, I, B.numLit(1), B.getVar(reg, N), B.numLit(1), addIfPaid);

  const top = B.whenFlagClicked(B.chain(askN, setN, initPrices, readLoop, sortIf, setTotal0, sumLoop, B.say(B.getVar(reg, TOTAL), null)));
  tasks.push({
    id: 'Hsinchu-J-5',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '6\n80 70 60 50 40 30', expectedOutput: '300' },
      { input: '9\n30 30 30 30 30 40 40 40 40', expectedOutput: '280' },
      { input: '5\n10 20 30 40 50', expectedOutput: '150' },
      { input: '12\n10 10 10 10 10 10 10 10 10 10 10 10', expectedOutput: '100' },
      { input: '7\n100 100 100 100 100 100 10', expectedOutput: '510' },
      { input: '1\n55', expectedOutput: '55' },
      { input: '13\n100 90 80 70 60 50 40 30 20 10 5 5 5', expectedOutput: '510' },
      { input: '6\n100 100 100 100 100 100', expectedOutput: '500' },
      { input: '11\n5 5 5 5 5 5 5 5 5 5 5', expectedOutput: '50' },
      // 來源TXT此筆預期答案「132」與演算法（其餘9筆全數吻合）不符：18個1~18排序後第6/12/18杯
      // (值13/7/1)免費，總和171-21=150，判定為來源資料獨立錯誤，依演算法結果收錄。
      { input: '18\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18', expectedOutput: '150' },
    ],
  });
})();

// 六、歡樂抽獎 —— 紅球必用，白球用0~3顆湊出7的倍數，優先用最少白球；依白球數判定獎項。
(function () {
  const reg = B.createVarRegistry();
  const R = reg.declare('h6_r', 'R');
  const W1 = reg.declare('h6_w1', 'w1');
  const W2 = reg.declare('h6_w2', 'w2');
  const W3 = reg.declare('h6_w3', 'w3');
  const RESULT = reg.declare('h6_result', 'result');

  const askR = B.askAndWait(reg, '請輸入紅球數字', null);
  const setR = B.setVar(reg, R, B.answerBlock(), null);
  const askW1 = B.askAndWait(reg, '請輸入三顆白球數字', null);
  const setW1 = B.setVar(reg, W1, B.answerBlock(), null);
  const askW2 = B.askAndWait(reg, '', null);
  const setW2 = B.setVar(reg, W2, B.answerBlock(), null);
  const askW3 = B.askAndWait(reg, '', null);
  const setW3 = B.setVar(reg, W3, B.answerBlock(), null);

  const mult7 = (xml) => B.eq(B.modulo(xml, B.numLit(7)), B.numLit(0));
  const specialCond = mult7(B.getVar(reg, R));
  const oneCond = B.or_(B.or_(mult7(B.add(B.getVar(reg, R), B.getVar(reg, W1))), mult7(B.add(B.getVar(reg, R), B.getVar(reg, W2)))), mult7(B.add(B.getVar(reg, R), B.getVar(reg, W3))));
  const twoCond = B.or_(
    B.or_(mult7(B.add(B.add(B.getVar(reg, R), B.getVar(reg, W1)), B.getVar(reg, W2))), mult7(B.add(B.add(B.getVar(reg, R), B.getVar(reg, W1)), B.getVar(reg, W3)))),
    mult7(B.add(B.add(B.getVar(reg, R), B.getVar(reg, W2)), B.getVar(reg, W3)))
  );
  const threeCond = mult7(B.add(B.add(B.add(B.getVar(reg, R), B.getVar(reg, W1)), B.getVar(reg, W2)), B.getVar(reg, W3)));

  const resultIf = B.ifElseChain(
    [specialCond, oneCond, twoCond, threeCond],
    [
      B.setVar(reg, RESULT, B.textLit('特獎'), null),
      B.setVar(reg, RESULT, B.textLit('頭獎'), null),
      B.setVar(reg, RESULT, B.textLit('二獎'), null),
      B.setVar(reg, RESULT, B.textLit('三獎'), null),
    ],
    B.setVar(reg, RESULT, B.textLit('未中獎'), null)
  );

  const top = B.whenFlagClicked(B.chain(askR, setR, askW1, setW1, askW2, setW2, askW3, setW3, resultIf, B.say(B.getVar(reg, RESULT), null)));
  tasks.push({
    id: 'Hsinchu-J-6',
    xml: B.assembleXml(reg, top),
    testCases: [
      { input: '2\n6 4 2', expectedOutput: '三獎' },
      { input: '8\n3 2 5', expectedOutput: '未中獎' },
      { input: '7\n1 2 3', expectedOutput: '特獎' },
      { input: '0\n1 2 3', expectedOutput: '特獎' },
      { input: '4\n3 1 1', expectedOutput: '頭獎' },
      { input: '2\n4 1 8', expectedOutput: '二獎' },
      { input: '1\n5 9 1', expectedOutput: '二獎' },
      { input: '9\n9 9 9', expectedOutput: '未中獎' },
      { input: '1\n1 1 4', expectedOutput: '三獎' },
      { input: '5\n1 1 2', expectedOutput: '頭獎' },
    ],
  });
})();

fs.writeFileSync(__dirname + '/tasks_hsinchu_j.json', JSON.stringify(tasks, null, 2), 'utf8');
console.log('wrote', tasks.length, 'hsinchu_j tasks');
