import * as Blockly from 'blockly';
import { javascriptGenerator, Order } from 'blockly/javascript';

const SMART_RING_BUTTONS = [
  ['BTN1 / F', '0'],
  ['BTN2 / B', '1'],
  ['BTN3 / L', '2'],
  ['BTN4 / R', '3'],
  ['BTN0 / U', '4'],
  ['BTN5 / D', '5'],
  ['BTN6 / O', '6'],
  ['BTN7 / C', '7'],
];

const SMART_RING_COLORS = [
  ['紅色', 'red'],
  ['綠色', 'green'],
  ['藍色', 'blue'],
  ['黃色', 'yellow'],
  ['紫色', 'purple'],
  ['青色', 'cyan'],
  ['白色', 'white'],
  ['關閉', 'off'],
];

const SMART_RING_CHANNELS = [
  ['R', 'r'],
  ['G', 'g'],
  ['B', 'b'],
];

const SMART_RING_PATTERNS = [
  ['全亮', 'all'],
  ['左半邊', 'leftHalf'],
  ['右半邊', 'rightHalf'],
  ['中間四顆', 'centerFour'],
  ['外側四顆', 'outerFour'],
  ['交錯燈', 'alternate'],
];

const SMART_RING_STATUS_TYPES = [
  ['分數', 'score'],
  ['生命', 'life'],
  ['進度條', 'progress'],
];

Blockly.Blocks.smartring_is_connected = {
  init() {
    this.appendDummyInput().appendField('SmartRing 已連線？');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#0f766e');
    this.setTooltip('判斷 SmartRingController 是否已透過 WebSerial 連線。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_is_connected = function () {
  return ['SmartRing.isConnected()', Order.FUNCTION_CALL];
};

Blockly.Blocks.smartring_button_pressed = {
  init() {
    this.appendDummyInput()
      .appendField('SmartRing 按鈕')
      .appendField(new Blockly.FieldDropdown(SMART_RING_BUTTONS), 'BUTTON')
      .appendField('被按下？');

    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#0f766e');
    this.setTooltip('判斷指定的 SmartRing 按鈕是否被按下。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_button_pressed = function (block) {
  const buttonIndex = block.getFieldValue('BUTTON');
  return [`SmartRing.isButtonPressed(${buttonIndex})`, Order.FUNCTION_CALL];
};

Blockly.Blocks.smartring_wait_ms = {
  init() {
    this.appendValueInput('MS')
      .setCheck('Number')
      .appendField('等待');

    this.appendDummyInput().appendField('毫秒');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0f766e');
    this.setTooltip('讓程式暫停指定毫秒數。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_wait_ms = function (block, generator) {
  const msCode = generator.valueToCode(block, 'MS', Order.NONE) || '100';
  return `await SmartRing.wait(${msCode});\n`;
};

// 保留舊版顏色名稱直控積木，避免舊作品載入失敗；B11 工具箱不主動顯示。
Blockly.Blocks.smartring_set_led_color = {
  init() {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField('設定 SmartRing 第');

    this.appendDummyInput()
      .appendField('顆 LED 顏色為')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0f766e');
    this.setTooltip('設定第 1 到第 12 顆 LED 的顏色，並立即送到 SmartRing。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_led_color = function (block, generator) {
  const indexCode = generator.valueToCode(block, 'INDEX', Order.NONE) || '1';
  const color = block.getFieldValue('COLOR');
  return `await SmartRing.setLedColor(${indexCode}, "${color}");\n`;
};

Blockly.Blocks.smartring_set_led_rgb = {
  init() {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField('設定 SmartRing 第');

    this.appendValueInput('R')
      .setCheck('Number')
      .appendField('顆 LED 紅色為');

    this.appendValueInput('G')
      .setCheck('Number')
      .appendField('綠色為');

    this.appendValueInput('B')
      .setCheck('Number')
      .appendField('藍色為');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0f766e');
    this.setTooltip('直接設定 SmartRing 第 1 到第 12 顆 LED 的 RGB 數值。建議範圍 0～30。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_led_rgb = function (block, generator) {
  const indexCode = generator.valueToCode(block, 'INDEX', Order.NONE) || '1';
  const rCode = generator.valueToCode(block, 'R', Order.NONE) || '0';
  const gCode = generator.valueToCode(block, 'G', Order.NONE) || '0';
  const bCode = generator.valueToCode(block, 'B', Order.NONE) || '0';
  return `await SmartRing.setLedRgb(${indexCode}, ${rCode}, ${gCode}, ${bCode});\n`;
};

Blockly.Blocks.smartring_set_all_leds = {
  init() {
    this.appendDummyInput()
      .appendField('設定 SmartRing 全部 LED 顏色為')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0f766e');
    this.setTooltip('將 SmartRing 全部 LED 設定為指定顏色，並立即顯示。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_all_leds = function (block) {
  const color = block.getFieldValue('COLOR');
  return `await SmartRing.setAllLeds("${color}");\n`;
};

Blockly.Blocks.smartring_clear_leds = {
  init() {
    this.appendDummyInput().appendField('清除 SmartRing 所有 LED');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0f766e');
    this.setTooltip('關閉 SmartRing 上所有 WS2812 LED。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_clear_leds = function () {
  return 'await SmartRing.clearLeds();\n';
};

Blockly.Blocks.smartring_rgb_channel = {
  init() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(SMART_RING_CHANNELS), 'CHANNEL');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour('#14b8a6');
    this.setTooltip('選擇 RGB 色彩通道。這個輸入也可以改接文字或變數。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_rgb_channel = function (block) {
  const channel = block.getFieldValue('CHANNEL');
  return [`"${channel}"`, Order.ATOMIC];
};

Blockly.Blocks.smartring_clear_led_buffer = {
  init() {
    this.appendDummyInput().appendField('清除暫存陣列');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('清除前端 LED 暫存陣列，需搭配「顯示暫存陣列到 SmartRing」才會更新硬體。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_clear_led_buffer = function () {
  return 'SmartRing.clearLedBuffer();\n';
};

Blockly.Blocks.smartring_set_buffer_led_color = {
  init() {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField('設定暫存陣列第');

    this.appendDummyInput()
      .appendField('顆 LED 顏色為')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('只修改前端 LED 暫存陣列，不會立刻顯示到 SmartRing。LED 編號為 1 到 12。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_led_color = function (block, generator) {
  const indexCode = generator.valueToCode(block, 'INDEX', Order.NONE) || '1';
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setBufferLedColor(${indexCode}, "${color}");\n`;
};

Blockly.Blocks.smartring_set_buffer_led_channel = {
  init() {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField('暫存陣列第');

    this.appendValueInput('CHANNEL')
      .appendField('顆 LED 顏色');

    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField('為');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('設定暫存陣列中指定 LED 的單一 RGB 色彩通道，數值建議 0～30。通道可用 R/G/B 選單，也可改接文字或變數。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_led_channel = function (block, generator) {
  const indexCode = generator.valueToCode(block, 'INDEX', Order.NONE) || '1';
  const channelCode = generator.valueToCode(block, 'CHANNEL', Order.NONE) || '"r"';
  const valueCode = generator.valueToCode(block, 'VALUE', Order.NONE) || '0';
  return `SmartRing.setBufferLedChannel(${indexCode}, ${channelCode}, ${valueCode});\n`;
};

Blockly.Blocks.smartring_set_buffer_led_rgb = {
  init() {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField('設定暫存陣列第');

    this.appendValueInput('R')
      .setCheck('Number')
      .appendField('顆 LED 紅色為');

    this.appendValueInput('G')
      .setCheck('Number')
      .appendField('綠色為');

    this.appendValueInput('B')
      .setCheck('Number')
      .appendField('藍色為');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('一次設定暫存陣列中指定 LED 的完整 RGB 數值，數值建議 0～30。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_led_rgb = function (block, generator) {
  const indexCode = generator.valueToCode(block, 'INDEX', Order.NONE) || '1';
  const rCode = generator.valueToCode(block, 'R', Order.NONE) || '0';
  const gCode = generator.valueToCode(block, 'G', Order.NONE) || '0';
  const bCode = generator.valueToCode(block, 'B', Order.NONE) || '0';
  return `SmartRing.setBufferLedRgb(${indexCode}, ${rCode}, ${gCode}, ${bCode});\n`;
};

Blockly.Blocks.smartring_show_led_buffer = {
  init() {
    this.appendDummyInput().appendField('顯示暫存陣列到 SmartRing');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('將目前前端 LED 暫存陣列一次送到 SmartRing 顯示。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_show_led_buffer = function () {
  return 'await SmartRing.showLedBuffer();\n';
};

// 保留 B09 舊版暫存陣列位移與奇偶燈積木，避免舊作品載入失敗；B11 工具箱不主動顯示。
Blockly.Blocks.smartring_shift_led_buffer_left = {
  init() {
    this.appendValueInput('STEPS').setCheck('Number').appendField('暫存陣列向左移動');
    this.appendDummyInput().appendField('格');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('將暫存陣列向左移動。教學定義：LED 1 會移到 LED 2。超出 LED 12 的資料會消失。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_shift_led_buffer_left = function (block, generator) {
  const stepsCode = generator.valueToCode(block, 'STEPS', Order.NONE) || '1';
  return `SmartRing.shiftLedBufferLeft(${stepsCode});\n`;
};

Blockly.Blocks.smartring_shift_led_buffer_right = {
  init() {
    this.appendValueInput('STEPS').setCheck('Number').appendField('暫存陣列向右移動');
    this.appendDummyInput().appendField('格');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('將暫存陣列向右移動。教學定義：LED 12 會移到 LED 11。超出 LED 1 的資料會消失。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_shift_led_buffer_right = function (block, generator) {
  const stepsCode = generator.valueToCode(block, 'STEPS', Order.NONE) || '1';
  return `SmartRing.shiftLedBufferRight(${stepsCode});\n`;
};

Blockly.Blocks.smartring_set_odd_buffer_leds = {
  init() {
    this.appendDummyInput()
      .appendField('設定暫存陣列奇數燈顏色為')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('設定暫存陣列 LED 1、3、5、7、9、11 的顏色。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_odd_buffer_leds = function (block) {
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setOddBufferLeds("${color}");\n`;
};

Blockly.Blocks.smartring_set_even_buffer_leds = {
  init() {
    this.appendDummyInput()
      .appendField('設定暫存陣列偶數燈顏色為')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#14b8a6');
    this.setTooltip('設定暫存陣列 LED 2、4、6、8、10、12 的顏色。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_even_buffer_leds = function (block) {
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setEvenBufferLeds("${color}");\n`;
};

Blockly.Blocks.smartring_demo_pattern = {
  init() {
    this.appendDummyInput()
      .appendField('示範圖樣')
      .appendField(new Blockly.FieldDropdown(SMART_RING_PATTERNS), 'PATTERN')
      .appendField('顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接在 SmartRing 顯示指定圖樣，作為課程任務 DEMO。學生可觀察後嘗試用暫存陣列重做。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_demo_pattern = function (block) {
  const pattern = block.getFieldValue('PATTERN');
  const color = block.getFieldValue('COLOR');
  return `await SmartRing.demoPattern("${pattern}", "${color}");\n`;
};

Blockly.Blocks.smartring_demo_status_display = {
  init() {
    this.appendDummyInput()
      .appendField('示範狀態顯示')
      .appendField(new Blockly.FieldDropdown(SMART_RING_STATUS_TYPES), 'STATUS');

    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField('值');

    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField('最大');

    this.appendDummyInput()
      .appendField('顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接示範分數、生命或進度條的比例顯示。學生可觀察後用暫存陣列與函式重做。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_demo_status_display = function (block, generator) {
  const status = block.getFieldValue('STATUS');
  const valueCode = generator.valueToCode(block, 'VALUE', Order.NONE) || '0';
  const maxCode = generator.valueToCode(block, 'MAX', Order.NONE) || '100';
  const color = block.getFieldValue('COLOR');
  return `await SmartRing.demoStatusDisplay("${status}", ${valueCode}, ${maxCode}, "${color}");\n`;
};

// 保留 B10 舊版圖樣與狀態顯示積木，避免舊作品載入失敗；B11 工具箱改用 DEMO 積木。


Blockly.Blocks.smartring_play_blink_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放閃爍動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放全亮與全滅交替的閃爍動畫。學生可觀察後用重複、等待與清除重做。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_blink_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '3';
  return `await SmartRing.playBlinkAnimation("${color}", ${timesCode});\n`;
};

Blockly.Blocks.smartring_play_fill_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放填滿動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放 LED 1 到 LED 12 逐顆亮起的填滿動畫。速度單位為毫秒。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_fill_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playFillAnimation("${color}", ${speedCode});\n`;
};

Blockly.Blocks.smartring_play_clear_animation = {
  init() {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('播放清除動畫 速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放 LED 1 到 LED 12 逐顆熄滅的清除動畫。速度單位為毫秒。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_clear_animation = function (block, generator) {
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playClearAnimation(${speedCode});\n`;
};

Blockly.Blocks.smartring_play_running_light_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放跑馬燈動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放單顆 LED 從 1 到 12 依序移動的跑馬燈動畫。速度單位為毫秒。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_running_light_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playRunningLightAnimation("${color}", ${speedCode});\n`;
};


Blockly.Blocks.smartring_play_shift_left_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放左移動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放第 5～8 顆連續 LED 圖樣整段往左移動的動畫，用來觀察陣列位移概念。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_shift_left_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '1';
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playShiftLeftAnimation("${color}", ${timesCode}, ${speedCode});\n`;
};

Blockly.Blocks.smartring_play_shift_right_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放右移動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放第 5～8 顆連續 LED 圖樣整段往右移動的動畫，用來觀察陣列位移概念。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_shift_right_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '1';
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playShiftRightAnimation("${color}", ${timesCode}, ${speedCode});\n`;
};

Blockly.Blocks.smartring_play_bounce_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放來回移動動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放單顆 LED 在 LED 1 和 LED 12 之間來回移動的動畫。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_bounce_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '1';
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playBounceAnimation("${color}", ${timesCode}, ${speedCode});\n`;
};

Blockly.Blocks.smartring_play_alternate_blink_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放交錯閃爍動畫 顏色1')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR1')
      .appendField('顏色2')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR2');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放奇數燈與偶數燈顏色交錯閃爍的動畫。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_alternate_blink_animation = function (block, generator) {
  const color1 = block.getFieldValue('COLOR1');
  const color2 = block.getFieldValue('COLOR2');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '3';
  return `await SmartRing.playAlternateBlinkAnimation("${color1}", "${color2}", ${timesCode});\n`;
};

Blockly.Blocks.smartring_play_breathing_animation = {
  init() {
    this.appendDummyInput()
      .appendField('播放呼吸燈動畫 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');

    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('次數');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放全環 LED 由暗到亮、再由亮到暗的呼吸燈動畫。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_breathing_animation = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  const timesCode = generator.valueToCode(block, 'TIMES', Order.NONE) || '3';
  return `await SmartRing.playBreathingAnimation("${color}", ${timesCode});\n`;
};

Blockly.Blocks.smartring_play_rainbow_animation = {
  init() {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('播放彩虹動畫 速度');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('直接播放彩虹色在 SmartRing 上流動的展示動畫。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_play_rainbow_animation = function (block, generator) {
  const speedCode = generator.valueToCode(block, 'SPEED', Order.NONE) || '100';
  return `await SmartRing.playRainbowAnimation(${speedCode});\n`;
};


Blockly.Blocks.smartring_set_buffer_pattern = {
  init() {
    this.appendDummyInput()
      .appendField('設定暫存陣列為圖樣')
      .appendField(new Blockly.FieldDropdown(SMART_RING_PATTERNS), 'PATTERN')
      .appendField('顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('將暫存陣列設定成常用 LED 圖樣，需搭配「顯示暫存陣列到 SmartRing」。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_pattern = function (block) {
  const pattern = block.getFieldValue('PATTERN');
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setBufferPattern("${pattern}", "${color}");\n`;
};

Blockly.Blocks.smartring_set_buffer_progress = {
  init() {
    this.appendValueInput('COUNT').setCheck('Number').appendField('設定暫存陣列進度條');
    this.appendDummyInput()
      .appendField('顆 顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('讓 LED 1 開始亮起指定顆數，超過 12 會自動限制為 12。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_progress = function (block, generator) {
  const countCode = generator.valueToCode(block, 'COUNT', Order.NONE) || '0';
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setProgressBufferLeds(${countCode}, "${color}");\n`;
};

Blockly.Blocks.smartring_set_buffer_score = {
  init() {
    this.appendValueInput('SCORE').setCheck('Number').appendField('設定暫存陣列分數');
    this.appendValueInput('MAX_SCORE').setCheck('Number').appendField('滿分');
    this.appendDummyInput()
      .appendField('顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('依照分數與滿分比例，換算成 12 顆 LED 的顯示數量。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_score = function (block, generator) {
  const scoreCode = generator.valueToCode(block, 'SCORE', Order.NONE) || '0';
  const maxScoreCode = generator.valueToCode(block, 'MAX_SCORE', Order.NONE) || '100';
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setScoreBufferLeds(${scoreCode}, ${maxScoreCode}, "${color}");\n`;
};

Blockly.Blocks.smartring_set_buffer_life = {
  init() {
    this.appendValueInput('LIFE').setCheck('Number').appendField('設定暫存陣列生命值');
    this.appendValueInput('MAX_LIFE').setCheck('Number').appendField('最大生命');
    this.appendDummyInput()
      .appendField('顏色')
      .appendField(new Blockly.FieldDropdown(SMART_RING_COLORS), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0ea5e9');
    this.setTooltip('依照生命值與最大生命比例，換算成 12 顆 LED 的顯示數量。');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock.smartring_set_buffer_life = function (block, generator) {
  const lifeCode = generator.valueToCode(block, 'LIFE', Order.NONE) || '0';
  const maxLifeCode = generator.valueToCode(block, 'MAX_LIFE', Order.NONE) || '5';
  const color = block.getFieldValue('COLOR');
  return `SmartRing.setLifeBufferLeds(${lifeCode}, ${maxLifeCode}, "${color}");\n`;
};

export function registerSmartRingBlocks() {
  // 匯入本檔案時，Blockly.Blocks 與 JavaScript generator 已完成註冊。
}
