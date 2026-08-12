// Blockly XML 建構工具（比照 osep-judge 的 hand-author-builder.js，但產生 Blockly XML
// 字串而非 Scratch JSON），供114縣市PDF競賽題參考解答（starterXml）大量產生使用。
// 用 chain()/withNext() 的字串縫合方式串接語句積木，設計上每個 block builder 都回傳
// 一段完整、自我封閉的 <block>...</block> 字串，方便巢狀組合。

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function field(name, value, extraAttrs = '') {
  return `<field name="${name}"${extraAttrs}>${esc(value)}</field>`;
}

function valueWrap(name, blockXml) {
  return `<value name="${name}">${blockXml}</value>`;
}

function statementWrap(name, blockXml) {
  return `<statement name="${name}">${blockXml}</statement>`;
}

function block(type, inner) {
  return `<block type="${type}">${inner}</block>`;
}

// 在blockXml（單一頂層<block>...</block>）的最外層閉合標籤前插入<next>nextXml</next>。
// 因為XML巢狀正確、blockXml一定是「單一完整區塊」，字串裡最後一個</block>必然是最外層的。
//
// !!! 重要陷阱（實測踩過、務必記住）!!!
// withNext假設blockXml的最外層積木「還沒有自己的<next>」。如果傳進來的blockXml其實是
// 「已經chain()過的結果」（最外層積木本身已經帶著一個<next>了），withNext會在它後面
// 硬插入第二個<next>，讓同一個積木有兩個<next>子節點——這是不合法的XML結構，Blockly
// 會丟"Next statement is already connected"，而且不一定每次都報錯，有時候會靜默漏掉
// 一段邏輯，比報錯更危險。
//
// 安全規則：chain(...)的每一個參數都必須是「原子積木」（用null當nextXml建出來的，
// 例如setVar(reg,x,y,null)、askAndWait(reg,'',null)、ifElseChain(...)、controlsFor(...)、
// repeatExt(...)——這些函式本身都不會自動接next，回傳值永遠是「乾淨、還沒接next」的
// 單一積木）。如果某個helper函式需要組合多個步驟給呼叫者用，讓它回傳「原子積木陣列」
// 而不是先幫呼叫者chain()好，呼叫端再用扩展運算子攤平：
//   chain(...helperSteps(), ...anotherHelperSteps(), lastStep)
// 絕對不要寫成 chain(helperThatReturnsAChain(), somethingElse) ——這就是會炸的寫法。
function withNext(blockXml, nextXml) {
  if (!nextXml) return blockXml;
  const idx = blockXml.lastIndexOf('</block>');
  return blockXml.slice(0, idx) + `<next>${nextXml}</next>` + blockXml.slice(idx);
}

// 把一串「原子積木」（見上面withNext的說明，每一個都還沒有自己的next）依序串成一條
// <next>鏈，從最後一個往前折。傳入非原子（已經chain過)的區塊是常見bug來源。
function chain(...blocks) {
  const filtered = blocks.filter(Boolean);
  let result = '';
  for (let i = filtered.length - 1; i >= 0; i--) {
    result = withNext(filtered[i], result);
  }
  return result;
}

// ---- 變數宣告 ----
function createVarRegistry() {
  const vars = new Map(); // id -> name
  return {
    declare(id, name) {
      vars.set(id, name);
      return id;
    },
    xml() {
      let inner = '';
      for (const [id, name] of vars) {
        inner += `<variable id="${id}">${esc(name)}</variable>`;
      }
      return `<variables>${inner}</variables>`;
    },
    nameOf(id) {
      if (!vars.has(id)) throw new Error(`未宣告的變數id: ${id}`);
      return vars.get(id);
    },
  };
}

// ---- 頂層事件 ----
function whenFlagClicked(nextXml) {
  return withNext(`<block type="event_whenflagclicked" x="40" y="40"></block>`, nextXml);
}

// ---- 互動積木（自訂：詢問並等待／詢問的答案／說出）----
function askAndWait(reg, promptText, nextXml) {
  return withNext(block('interaction_ask_and_wait', valueWrap('TEXT', textLit(promptText))), nextXml);
}
function answerBlock() {
  return `<block type="interaction_answer"></block>`;
}
function say(valueXml, nextXml) {
  return withNext(block('interaction_say', valueWrap('TEXT', valueXml)), nextXml);
}

// ---- 字面量 ----
function numLit(n) {
  return block('math_number', field('NUM', n));
}
// 重要平台限定行為（實測確認）：text積木用FieldTextInput(單行文字輸入框)，XML載入時
// 會把欄位值裡的實際換行字元過濾掉——textLit('\n')塞進textJoin()組字串，換行會憑空消失
// （"A\nB"變成"AB"，不報錯）。多行輸出不要塞\n常數，改成呼叫多次say()，
// verify.mjs的測試harness會自動把多次say()輸出用'\n'接起來比對(sayOutput.join('\n'))。
function textLit(s) {
  return block('text', field('TEXT', s));
}

// ---- 變數存取 ----
function getVar(reg, varId) {
  return block('variables_get', field('VAR', reg.nameOf(varId), ` id="${varId}"`));
}
function setVar(reg, varId, valueXml, nextXml) {
  const inner = field('VAR', reg.nameOf(varId), ` id="${varId}"`) + valueWrap('VALUE', valueXml);
  return withNext(block('variables_set', inner), nextXml);
}

// ---- 數學 ----
function arith(op, aXml, bXml) {
  return block('math_arithmetic', field('OP', op) + valueWrap('A', aXml) + valueWrap('B', bXml));
}
const add = (a, b) => arith('ADD', a, b);
const sub = (a, b) => arith('MINUS', a, b);
const mul = (a, b) => arith('MULTIPLY', a, b);
const div = (a, b) => arith('DIVIDE', a, b);

function modulo(aXml, bXml) {
  return block('math_modulo', valueWrap('DIVIDEND', aXml) + valueWrap('DIVISOR', bXml));
}
function round_(opMode, numXml) {
  // opMode: ROUND / ROUNDUP / ROUNDDOWN
  return block('math_round', field('OP', opMode) + valueWrap('NUM', numXml));
}
function mathSingle(opMode, numXml) {
  // math_single: ROOT/ABS/NEG/LN/LOG10/EXP/POW10 — 這裡主要用ABS
  return block('math_single', field('OP', opMode) + valueWrap('NUM', numXml));
}
function sqrt_(numXml) {
  return mathSingle('ROOT', numXml);
}
function abs_(numXml) {
  return mathSingle('ABS', numXml);
}

// ---- 邏輯 ----
function compare(op, aXml, bXml) {
  // op: EQ/NEQ/LT/LTE/GT/GTE
  return block('logic_compare', field('OP', op) + valueWrap('A', aXml) + valueWrap('B', bXml));
}
const eq = (a, b) => compare('EQ', a, b);
const neq = (a, b) => compare('NEQ', a, b);
const lt = (a, b) => compare('LT', a, b);
const lte = (a, b) => compare('LTE', a, b);
const gt = (a, b) => compare('GT', a, b);
const gte = (a, b) => compare('GTE', a, b);

function logicOp(op, aXml, bXml) {
  // op: AND/OR
  return block('logic_operation', field('OP', op) + valueWrap('A', aXml) + valueWrap('B', bXml));
}
const and_ = (a, b) => logicOp('AND', a, b);
const or_ = (a, b) => logicOp('OR', a, b);

function not_(aXml) {
  return block('logic_negate', valueWrap('BOOL', aXml));
}

function ternary(ifXml, thenXml, elseXml) {
  return block('logic_ternary', valueWrap('IF', ifXml) + valueWrap('THEN', thenXml) + valueWrap('ELSE', elseXml));
}

// ---- 流程控制 ----
// conditions: [condXml,...]；thenChains: [chainedBlockXmlOrEmpty,...]（跟conditions等長）
// elseChainOrNull: 已經chain()好的else內容，或null代表沒有else
function ifElseChain(conditions, thenChains, elseChainOrNull) {
  const elseifCount = conditions.length - 1;
  const hasElse = elseChainOrNull != null;
  let mutation = '';
  if (elseifCount > 0 || hasElse) {
    mutation = `<mutation elseif="${elseifCount}" else="${hasElse ? 1 : 0}"></mutation>`;
  }
  let inner = mutation;
  conditions.forEach((cond, i) => {
    inner += valueWrap(`IF${i}`, cond);
    if (thenChains[i]) inner += statementWrap(`DO${i}`, thenChains[i]);
  });
  if (hasElse) {
    inner += statementWrap('ELSE', elseChainOrNull);
  }
  return block('controls_if', inner);
}

function repeatExt(timesXml, doChain) {
  const inner = valueWrap('TIMES', timesXml) + (doChain ? statementWrap('DO', doChain) : '');
  return block('controls_repeat_ext', inner);
}

function whileUntil(mode, condXml, doChain) {
  // mode: WHILE / UNTIL
  const inner = field('MODE', mode) + valueWrap('BOOL', condXml) + (doChain ? statementWrap('DO', doChain) : '');
  return block('controls_whileUntil', inner);
}

function controlsFor(reg, varId, fromXml, toXml, byXml, doChain) {
  const inner = field('VAR', reg.nameOf(varId), ` id="${varId}"`) +
    valueWrap('FROM', fromXml) + valueWrap('TO', toXml) + valueWrap('BY', byXml) +
    (doChain ? statementWrap('DO', doChain) : '');
  return block('controls_for', inner);
}

// ---- 文字 ----
// 重要平台限定行為（實測確認）：logic_compare的EQ在Blockly的JS generator底層是JS的
// 寬鬆相等（==），不是嚴格相等（===）——用「OUT==''」判斷字串累加器是否還是空的，
// 一旦某次要append的值恰好是數字0，「0==''」在JS寬鬆相等下也是true，會被誤判成
// 「還是空的」導致覆寫而非累加，第一筆資料就這樣憑空消失。一律改用text_length(OUT)==0
// 判斷「是否為空」，數值比較不會有這個型別強制轉換的陷阱。
function isEmptyText(varGetXml) {
  return eq(textLength(varGetXml), numLit(0));
}

// 強制把「詢問並等待」的答案轉成真正的字串型別——interaction_answer會把外觀是數字的
// 輸入自動轉成JS Number（比照Scratch「答案」的智慧數字行為），若這個答案後面要拿來做
// text_length／text_charAt等字串專用操作，遇到「剛好整段輸入都是數字」的情況
// （例如"999"、"666"）就會在Number上呼叫.length/.charAt得到undefined，讓迴圈完全不執行
// 卻不會報錯，非常隱蔽。只要這題的輸入語意是「字串」（即使測資剛好長得像純數字），
// 一律用這個包裝，成本很低但能徹底避免這個陷阱。
// **限制**：這個包裝只能救「型別」，救不了「已經遺失的資訊」——Number()轉換發生在
// interaction_answer內部、textJoin接手之前，若原始輸入有前導0(例如"0907")或超過
// 2^53精度(約16位數的長數字字串)，數值在轉型當下就已經失真("0907"→907的字串
// 表示法變成"907"，前導0回不來了)。這種情況不能靠answerAsText()挽救，要嘛
// 改用純數字語意直接運算(例如HHMM時間格式用HH=floor(val/100)還原，不必依賴前導0
// 字元)，要嘛換一組不落在陷阱範圍內的等效測資。
function answerAsText() {
  return textJoin([textLit(''), answerBlock()]);
}

function textJoin(parts) {
  const mutation = `<mutation items="${parts.length}"></mutation>`;
  let inner = mutation;
  parts.forEach((p, i) => { inner += valueWrap(`ADD${i}`, p); });
  return block('text_join', inner);
}
function textLength(xml) {
  return block('text_length', valueWrap('VALUE', xml));
}
function charAt(stringXml, indexXml) {
  const mutation = `<mutation at="true"></mutation>`;
  const inner = mutation + field('WHERE', 'FROM_START') + valueWrap('VALUE', stringXml) + valueWrap('AT', indexXml);
  return block('text_charAt', inner);
}

// 重要平台限定行為（實測確認，非臆測）：text_charAt的輸出型別被Blockly標記為String，
// 直接接進math_arithmetic等數字輸入槽會被型別檢查靜默拒絕連接（積木會變成workspace裡
// 斷開的孤兒積木，domToWorkspace不會報錯，但workspaceToCode生成的程式碼會漏掉這段邏輯，
// 非常隱蔽）。workaround：先用variables_set存進暫存變數繞過型別檢查（variables_set/get
// 沒有型別限制），如果要拿字元當數字用，還要再乘以1強制轉型（math_arithmetic的ADD等
// 運算不會自動把字串轉數字，'5'+100裡的+是JS字串串接不是數值加法，'5'*1才會轉型成5）。
// 這個helper把兩步驟包起來：回傳{steps:[...], value: 可直接當數字用的getVar}。
function charAtAsNumber(reg, tmpIdPrefix, stringXml, indexXml) {
  const rawId = reg.declare(`${tmpIdPrefix}_raw`, `${tmpIdPrefix}_raw`);
  const numId = reg.declare(`${tmpIdPrefix}_num`, `${tmpIdPrefix}_num`);
  const setRaw = setVar(reg, rawId, charAt(stringXml, indexXml), null);
  const setNum = setVar(reg, numId, mul(getVar(reg, rawId), numLit(1)), null);
  return { steps: [setRaw, setNum], value: getVar(reg, numId) };
}

// ---- 清單 ----
function listsCreateWith(items) {
  const mutation = `<mutation items="${items.length}"></mutation>`;
  let inner = mutation;
  items.forEach((it, i) => { inner += valueWrap(`ADD${i}`, it); });
  return block('lists_create_with', inner);
}
function listsCreateEmpty() {
  return block('lists_create_empty', '');
}
function listsRepeat(itemXml, numXml) {
  return block('lists_repeat', valueWrap('ITEM', itemXml) + valueWrap('NUM', numXml));
}
function listsLength(listXml) {
  return block('lists_length', valueWrap('VALUE', listXml));
}
function listsGetIndex(listXml, indexXml) {
  const mutation = `<mutation statement="false" at="true"></mutation>`;
  const inner = mutation + field('MODE', 'GET') + field('WHERE', 'FROM_START') + valueWrap('VALUE', listXml) + valueWrap('AT', indexXml);
  return block('lists_getIndex', inner);
}
function listsIndexOf(listXml, findXml) {
  // FIRST模式；找不到回傳0（Blockly清單索引從1開始，0代表沒找到）。
  return block('lists_indexOf', field('END', 'FIRST') + valueWrap('VALUE', listXml) + valueWrap('FIND', findXml));
}
function listsSetIndex(listXml, indexXml, valueXml, nextXml) {
  const mutation = `<mutation at="true"></mutation>`;
  const inner = mutation + field('MODE', 'SET') + field('WHERE', 'FROM_START') + valueWrap('LIST', listXml) + valueWrap('AT', indexXml) + valueWrap('TO', valueXml);
  return withNext(block('lists_setIndex', inner), nextXml);
}

// ---- 最終組裝 ----
function assembleXml(reg, topBlockXml) {
  return `<xml xmlns="https://developers.google.com/blockly/xml">${reg.xml()}${topBlockXml}</xml>`;
}

module.exports = {
  createVarRegistry, whenFlagClicked, askAndWait, answerBlock, say,
  numLit, textLit, getVar, setVar,
  add, sub, mul, div, modulo, round_, abs_, sqrt_, mathSingle,
  eq, neq, lt, lte, gt, gte, and_, or_, not_, ternary,
  ifElseChain, repeatExt, whileUntil, controlsFor,
  textJoin, textLength, charAt, charAtAsNumber, isEmptyText, answerAsText,
  listsCreateWith, listsCreateEmpty, listsRepeat, listsLength, listsGetIndex, listsSetIndex, listsIndexOf,
  chain, withNext, block, field, valueWrap, statementWrap, assembleXml,
};
