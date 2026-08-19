import * as Blockly from 'blockly';
import { javascriptGenerator, Order } from 'blockly/javascript';

// 對齊官方競賽練習平台（demo.csie.ntnu.edu.tw）新版輸入輸出規範的積木組：
// 當🚩被點擊（hat）／詢問並等待／詢問的答案／說出。
// 官方平台行為（已實測確認）：系統評分只認綠旗下方串接的積木，
// 但沒接在綠旗下的孤兒積木，Blockly 仍然會照樣執行——本專案刻意比照這個「忠實版」行為，
// 藉此讓學生因為亂放積木而得到錯誤結果，養成把程式都接在綠旗下的習慣。

// 三種顏色皆為2026-08實測官方平台Blockly模式（非Scratch模式，兩者色票不同）取得的實際色值，
// 不是隨意指定：土黃(綠旗)/水藍(詢問並等待、詢問的答案)/墨綠(說出)。
const COLOUR_EVENT = '#e6bf00';
const COLOUR_SENSING = '#3373cc';
const COLOUR_LOOKS = '#5ba58c';

Blockly.Blocks.event_whenflagclicked = {
  init() {
    this.appendDummyInput().appendField('當').appendField('🚩').appendField('被點擊');
    this.setNextStatement(true, null);
    this.setColour(COLOUR_EVENT);
    this.setTooltip('比照Scratch介面的示意積木，Blockly不需要這顆積木也能執行程式（已從積木選單移除，僅為相容舊檔案保留）。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.event_whenflagclicked = function () {
  // 下方串接的積木由 Blockly generator 沿著 nextConnection 自動串接產生程式碼，
  // 這裡不需要（也不應該）自己處理 body，回傳空字串即可。
  return '';
};

Blockly.Blocks.interaction_ask_and_wait = {
  init() {
    this.appendValueInput('TEXT').appendField('詢問');
    this.appendDummyInput().appendField('並等待');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOUR_SENSING);
    this.setTooltip('提示訊息並等待使用者輸入，輸入結果可用「詢問的答案」積木取得。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.interaction_ask_and_wait = function (block, generator) {
  const textCode = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  return `window.__ydwsAnswer = String((await askAndWait(${textCode})) ?? '');\n`;
};

Blockly.Blocks.interaction_answer = {
  init() {
    this.appendDummyInput().appendField('詢問的答案');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(COLOUR_SENSING);
    this.setTooltip('取得最近一次「詢問並等待」積木收到的回答。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.interaction_answer = function () {
  // 比照Scratch「答案」的智慧數字比較行為：字串若能轉成數字就自動轉為數字，
  // 避免JS原生">"對兩個字串做字典序比較（"129" > "99" 字典序會是false）這種常見陷阱。
  return [
    "(window.__ydwsAnswer !== '' && !isNaN(Number(window.__ydwsAnswer)) ? Number(window.__ydwsAnswer) : window.__ydwsAnswer)",
    Order.CONDITIONAL,
  ];
};

Blockly.Blocks.interaction_say = {
  init() {
    this.appendValueInput('TEXT').appendField('說出');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOUR_LOOKS);
    this.setTooltip('輸出內容。系統評分只會比對這個積木輸出的內容，「顯示訊息」積木不會列入評分。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.interaction_say = function (block, generator) {
  const textCode = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  return `print(${textCode});\n`;
};

export function registerInteractionBlocks() {
  // 匯入本檔案時，Blockly.Blocks 與 JavaScript generator 已完成註冊。
}
