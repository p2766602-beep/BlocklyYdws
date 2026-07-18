// =====================================================
// Blockly Lab SmartRing Runtime
// -----------------------------------------------------
// 修正版：整合 SmartRing 硬體模擬器。
// - 保留原本 WebSerial 實體硬體控制。
// - LED 指令同步送到 simulator-bridge.js。
// - 未連接實體硬體時，允許使用模擬器執行 LED 積木。
// =====================================================

import { SmartRingSerial } from './serial.js';
import { createJsonLine, formatButtonState, parseSmartRingLine } from './protocol.js';
import {
  sendSmartRingLedCommand,
  sendSmartRingLedCommands,
} from './simulator-bridge.js';

const LED_COUNT = 12;

function createProgramStopError() {
  const error = new Error('程式已中止。');
  error.name = 'AbortError';
  return error;
}

const LED_COLOR_TABLE = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
  yellow: { r: 255, g: 180, b: 0 },
  purple: { r: 180, g: 0, b: 255 },
  cyan: { r: 0, g: 180, b: 255 },
  white: { r: 255, g: 255, b: 255 },
  off: { r: 0, g: 0, b: 0 },
};

function cloneColor(color) {
  return {
    r: Number(color?.r) || 0,
    g: Number(color?.g) || 0,
    b: Number(color?.b) || 0,
  };
}

function createEmptyLedBuffer() {
  return Array.from({ length: LED_COUNT }, () => cloneColor(LED_COLOR_TABLE.off));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeRgbValue(value) {
  const studentValue = clamp(Math.round(Number(value) || 0), 0, 30);

  return Math.round((studentValue / 30) * 255);
}

function normalizeColorChannel(channel) {
  const text = String(channel || '').trim().toLowerCase();

  if (text === 'r' || text === 'red' || text === '紅' || text === '紅色') {
    return 'r';
  }

  if (text === 'g' || text === 'green' || text === '綠' || text === '綠色') {
    return 'g';
  }

  if (text === 'b' || text === 'blue' || text === '藍' || text === '藍色') {
    return 'b';
  }

  throw new Error('顏色通道必須是 R、G 或 B。');
}

function normalizeDisplayCount(value) {
  return clamp(Math.floor(Number(value) || 0), 0, LED_COUNT);
}

function countFromRatio(value, maxValue) {
  const current = Math.max(0, Number(value) || 0);
  const maximum = Math.max(0, Number(maxValue) || 0);

  if (maximum <= 0) {
    return 0;
  }

  return normalizeDisplayCount(Math.round((current / maximum) * LED_COUNT));
}

function getPatternLedNumbers(patternName) {
  switch (patternName) {
    case 'all':
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    case 'leftHalf':
      return [1, 2, 3, 4, 5, 6];
    case 'rightHalf':
      return [7, 8, 9, 10, 11, 12];
    case 'centerFour':
      return [5, 6, 7, 8];
    case 'outerFour':
      return [1, 2, 11, 12];
    case 'alternate':
      return [1, 3, 5, 7, 9, 11];
    default:
      return [];
  }
}

// Blockly-lab 與實體 SmartRing 韌體使用 0～255 RGB，
// 模擬器交接規格使用 0～30 RGB，因此送到模擬器前需轉換。
function normalizeSimulatorRgbValue(value) {
  const rgb255 = clamp(Math.round(Number(value) || 0), 0, 255);
  return Math.round((rgb255 / 255) * 30);
}

function toSimulatorColor(color) {
  return {
    r: normalizeSimulatorRgbValue(color?.r),
    g: normalizeSimulatorRgbValue(color?.g),
    b: normalizeSimulatorRgbValue(color?.b),
  };
}

function toSimulatorBuffer(buffer = []) {
  return Array.from({ length: LED_COUNT }, (_, index) =>
    toSimulatorColor(buffer[index] || LED_COLOR_TABLE.off)
  );
}

function sendSimulatorSetLed(ledIndex, color) {
  const simulatorColor = toSimulatorColor(color);

  sendSmartRingLedCommand({
    type: 'setLed',
    index: ledIndex,
    r: simulatorColor.r,
    g: simulatorColor.g,
    b: simulatorColor.b,
  });
}

function sendSimulatorSetAll(color) {
  const simulatorColor = toSimulatorColor(color);

  sendSmartRingLedCommand({
    type: 'setAll',
    r: simulatorColor.r,
    g: simulatorColor.g,
    b: simulatorColor.b,
  });
}

function sendSimulatorClear() {
  sendSmartRingLedCommand({
    type: 'clear',
  });
}

function sendSimulatorShowBuffer(buffer = []) {
  sendSmartRingLedCommands([
    {
      type: 'setBuffer',
      buffer: toSimulatorBuffer(buffer),
    },
    {
      type: 'showBuffer',
    },
  ]);
}


class SmartRingRuntime extends EventTarget {
  constructor() {
    super();

    this.serial = null;
    this.connected = false;
    this.lastState = null;
    this.lastCommand = null;
    this.ledBuffer = createEmptyLedBuffer();
    this.programStopRequested = false;
  }

  isSupported() {
    return 'serial' in navigator;
  }

  isConnected() {
    return this.connected;
  }

  getLastState() {
    return this.lastState;
  }

  getLastCommand() {
    return this.lastCommand;
  }

  resetProgramStop() {
    this.programStopRequested = false;
  }

  stopProgram() {
    if (this.programStopRequested) {
      return;
    }

    this.programStopRequested = true;
    this.emitLog('收到中止程式請求。');
    this.dispatchEvent(new CustomEvent('programstop'));
  }

  isProgramStopRequested() {
    return this.programStopRequested;
  }

  throwIfProgramStopped() {
    if (this.programStopRequested) {
      throw createProgramStopError();
    }
  }

  getButtons() {
    return this.lastState?.buttons || [];
  }

  isButtonPressed(buttonIndex) {
    const index = Number(buttonIndex);
    const buttons = this.getButtons();

    return Boolean(buttons[index]);
  }

  async connect() {
    if (this.connected) {
      this.emitStatus('SmartRing 已連線。');
      return;
    }

    this.serial = new SmartRingSerial({
      baudRate: 115200,
      onOpen: () => {
        this.connected = true;
        this.emitStatus('SmartRing 已連線。');
      },
      onClose: () => {
        this.connected = false;
        this.emitStatus('SmartRing 尚未連線。');
      },
      onLine: (line) => {
        this.handleIncomingLine(line);
      },
      onError: (error) => {
        this.emitError(error);
      },
      onLog: (message) => {
        this.emitLog(message);
      },
    });

    await this.serial.connect();
  }

  async disconnect() {
    if (!this.serial) {
      this.connected = false;
      this.emitStatus('SmartRing 尚未連線。');
      return;
    }

    await this.serial.disconnect();

    this.connected = false;
    this.serial = null;
    this.emitStatus('SmartRing 尚未連線。');
  }

  async sendJson(payload) {
    this.throwIfProgramStopped();

    if (!this.serial || !this.connected) {
      throw new Error('SmartRing 尚未連線，無法送出指令。');
    }

    this.lastCommand = payload;
    this.emitCommand(payload);

    await this.serial.writeLine(createJsonLine(payload));
    this.throwIfProgramStopped();
  }

  async sendCommand(commandName, payload = {}) {
    this.throwIfProgramStopped();

    const commandPayload = {
      cmd: commandName,
      ...payload,
    };

    // 允許「只有模擬器、沒有實體硬體」的課堂使用情境。
    // 有連線時仍照原本 WebSerial 流程送給實體 SmartRing；
    // 沒連線時不丟錯，仍更新最後指令，讓主畫面可以顯示學生送出的指令。
    if (!this.serial || !this.connected) {
      this.lastCommand = commandPayload;
      this.emitCommand(commandPayload);
      return;
    }

    await this.sendJson(commandPayload);
  }

  getLedColorPayload(colorName) {
    return cloneColor(LED_COLOR_TABLE[colorName] || LED_COLOR_TABLE.off);
  }

  normalizeLedNumber(ledNumber) {
    const ledIndex = Number(ledNumber);

    if (!Number.isInteger(ledIndex) || ledIndex < 1 || ledIndex > LED_COUNT) {
      throw new Error(`LED 編號必須是 1 到 ${LED_COUNT} 的整數。`);
    }

    return ledIndex;
  }

  normalizeSteps(steps) {
    const value = Math.floor(Math.abs(Number(steps) || 0));

    return value % LED_COUNT;
  }

  async setLedColor(ledNumber, colorName) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const color = this.getLedColorPayload(colorName);

    sendSimulatorSetLed(ledIndex, color);

    await this.sendCommand('setLed', {
      index: ledIndex,
      color: colorName,
      r: color.r,
      g: color.g,
      b: color.b,
    });

    this.emitLog(`設定第 ${ledIndex} 顆 LED 為 ${colorName}`);
  }


  async clearLeds() {
    sendSimulatorClear();

    await this.sendCommand('clearLeds');

    this.emitLog('清除所有 LED');
  }

  async setLedRgb(ledNumber, red, green, blue) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const color = {
      r: normalizeRgbValue(red),
      g: normalizeRgbValue(green),
      b: normalizeRgbValue(blue),
    };

    sendSimulatorSetLed(ledIndex, color);

    await this.sendCommand('setLed', {
      index: ledIndex,
      color: 'custom',
      r: color.r,
      g: color.g,
      b: color.b,
    });

    this.emitLog(`設定第 ${ledIndex} 顆 LED RGB 為 (${color.r}, ${color.g}, ${color.b})`);
  }

  async setAllLeds(colorName) {
    const color = this.getLedColorPayload(colorName);

    sendSimulatorSetAll(color);

    await this.sendCommand('setAllLeds', {
      color: colorName,
      r: color.r,
      g: color.g,
      b: color.b,
    });

    this.emitLog(`設定全部 LED 為 ${colorName}`);
  }

  setBufferLedColor(ledNumber, colorName) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const color = this.getLedColorPayload(colorName);

    this.ledBuffer[ledIndex - 1] = color;
    this.emitLog(`設定暫存陣列第 ${ledIndex} 顆 LED 為 ${colorName}`);
  }

  setBufferLedChannel(ledNumber, channel, value) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const colorChannel = normalizeColorChannel(channel);
    const colorValue = normalizeRgbValue(value);
    const nextColor = cloneColor(this.ledBuffer[ledIndex - 1]);

    nextColor[colorChannel] = colorValue;
    this.ledBuffer[ledIndex - 1] = nextColor;
    this.emitLog(`設定暫存陣列第 ${ledIndex} 顆 LED ${colorChannel.toUpperCase()} 為 ${colorValue}`);
  }

  setBufferLedRgb(ledNumber, red, green, blue) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const color = {
      r: normalizeRgbValue(red),
      g: normalizeRgbValue(green),
      b: normalizeRgbValue(blue),
    };

    this.ledBuffer[ledIndex - 1] = color;
    this.emitLog(`設定暫存陣列第 ${ledIndex} 顆 LED RGB 為 (${color.r}, ${color.g}, ${color.b})`);
  }

  clearLedBuffer() {
    this.ledBuffer = createEmptyLedBuffer();
    this.emitLog('清除 LED 暫存陣列');
  }

  getLedBuffer() {
    return this.ledBuffer.map((color) => cloneColor(color));
  }

  setOddBufferLeds(colorName) {
    const color = this.getLedColorPayload(colorName);

    for (let index = 0; index < LED_COUNT; index += 1) {
      const ledNumber = index + 1;

      if (ledNumber % 2 === 1) {
        this.ledBuffer[index] = cloneColor(color);
      }
    }

    this.emitLog(`設定暫存陣列奇數燈為 ${colorName}`);
  }

  setEvenBufferLeds(colorName) {
    const color = this.getLedColorPayload(colorName);

    for (let index = 0; index < LED_COUNT; index += 1) {
      const ledNumber = index + 1;

      if (ledNumber % 2 === 0) {
        this.ledBuffer[index] = cloneColor(color);
      }
    }

    this.emitLog(`設定暫存陣列偶數燈為 ${colorName}`);
  }

  shiftLedBufferLeft(steps = 1) {
    const moveSteps = this.normalizeSteps(steps);

    if (moveSteps === 0) {
      this.emitLog('暫存陣列左移 0 格');
      return;
    }

    const nextBuffer = createEmptyLedBuffer();

    for (let index = LED_COUNT - 1; index >= 0; index -= 1) {
      const targetIndex = index + moveSteps;

      if (targetIndex < LED_COUNT) {
        nextBuffer[targetIndex] = cloneColor(this.ledBuffer[index]);
      }
    }

    this.ledBuffer = nextBuffer;
    this.emitLog(`暫存陣列向左移動 ${moveSteps} 格`);
  }

  shiftLedBufferRight(steps = 1) {
    const moveSteps = this.normalizeSteps(steps);

    if (moveSteps === 0) {
      this.emitLog('暫存陣列右移 0 格');
      return;
    }

    const nextBuffer = createEmptyLedBuffer();

    for (let index = 0; index < LED_COUNT; index += 1) {
      const targetIndex = index - moveSteps;

      if (targetIndex >= 0) {
        nextBuffer[targetIndex] = cloneColor(this.ledBuffer[index]);
      }
    }

    this.ledBuffer = nextBuffer;
    this.emitLog(`暫存陣列向右移動 ${moveSteps} 格`);
  }

  setBufferPattern(patternName, colorName) {
    const color = this.getLedColorPayload(colorName);
    const ledNumbers = getPatternLedNumbers(patternName);

    this.clearLedBuffer();

    for (const ledNumber of ledNumbers) {
      this.ledBuffer[ledNumber - 1] = cloneColor(color);
    }

    this.emitLog(`設定暫存陣列圖樣 ${patternName} 為 ${colorName}`);
  }

  setProgressBufferLeds(count, colorName) {
    const ledCount = normalizeDisplayCount(count);
    const color = this.getLedColorPayload(colorName);

    this.clearLedBuffer();

    for (let index = 0; index < ledCount; index += 1) {
      this.ledBuffer[index] = cloneColor(color);
    }

    this.emitLog(`設定暫存陣列進度條 ${ledCount} 顆為 ${colorName}`);
  }

  setScoreBufferLeds(score, maxScore, colorName) {
    const ledCount = countFromRatio(score, maxScore);
    const color = this.getLedColorPayload(colorName);

    this.clearLedBuffer();

    for (let index = 0; index < ledCount; index += 1) {
      this.ledBuffer[index] = cloneColor(color);
    }

    this.emitLog(`設定暫存陣列分數顯示：${score}/${maxScore}，亮 ${ledCount} 顆`);
  }

  setLifeBufferLeds(life, maxLife, colorName) {
    const ledCount = countFromRatio(life, maxLife);
    const color = this.getLedColorPayload(colorName);

    this.clearLedBuffer();

    for (let index = 0; index < ledCount; index += 1) {
      this.ledBuffer[index] = cloneColor(color);
    }

    this.emitLog(`設定暫存陣列生命值顯示：${life}/${maxLife}，亮 ${ledCount} 顆`);
  }

  setStatusBufferLeds(statusType, value, maxValue, colorName) {
    const ledCount = countFromRatio(value, maxValue);
    const color = this.getLedColorPayload(colorName);
    const statusLabelMap = {
      score: '分數',
      life: '生命',
      progress: '進度條',
    };
    const statusLabel = statusLabelMap[statusType] || '狀態';

    this.clearLedBuffer();

    for (let index = 0; index < ledCount; index += 1) {
      this.ledBuffer[index] = cloneColor(color);
    }

    this.emitLog(`設定暫存陣列${statusLabel}顯示：${value}/${maxValue}，亮 ${ledCount} 顆`);
  }

  async demoPattern(patternName, colorName) {
    this.setBufferPattern(patternName, colorName);
    await this.showLedBuffer();
    this.emitLog(`示範圖樣 ${patternName}`);
  }

  async demoStatusDisplay(statusType, value, maxValue, colorName) {
    this.setStatusBufferLeds(statusType, value, maxValue, colorName);
    await this.showLedBuffer();
    this.emitLog(`示範狀態顯示 ${statusType}`);
  }


  async playBlinkAnimation(colorName, times = 3) {
    const repeatTimes = clamp(Math.floor(Number(times) || 0), 1, 20);
    const delay = 250;

    for (let count = 0; count < repeatTimes; count += 1) {
      await this.setAllLeds(colorName);
      await this.wait(delay);
      await this.clearLeds();
      await this.wait(delay);
    }

    this.emitLog(`播放閃爍動畫 ${colorName}，次數 ${repeatTimes}`);
  }

  async playFillAnimation(colorName, speed = 100) {
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);
    await this.clearLeds();

    for (let ledNumber = 1; ledNumber <= LED_COUNT; ledNumber += 1) {
      await this.setLedColor(ledNumber, colorName);
      await this.wait(delay);
    }

    this.emitLog(`播放填滿動畫 ${colorName}，速度 ${delay} ms`);
  }

  async playClearAnimation(speed = 100) {
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);

    for (let ledNumber = 1; ledNumber <= LED_COUNT; ledNumber += 1) {
      await this.setLedColor(ledNumber, 'off');
      await this.wait(delay);
    }

    this.emitLog(`播放清除動畫，速度 ${delay} ms`);
  }

  async playRunningLightAnimation(colorName, speed = 100) {
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);

    for (let ledNumber = 1; ledNumber <= LED_COUNT; ledNumber += 1) {
      await this.clearLeds();
      await this.setLedColor(ledNumber, colorName);
      await this.wait(delay);
    }

    await this.clearLeds();

    this.emitLog(`播放跑馬燈動畫 ${colorName}，速度 ${delay} ms`);
  }

  async showAnimationBuffer(buffer) {
    this.throwIfProgramStopped();

    const leds = buffer.map((color) => cloneColor(color));

    sendSimulatorShowBuffer(leds);

    await this.sendCommand('showBuffer', {
      leds,
    });
  }

  async showSingleLedFrame(ledNumber, colorName) {
    const ledIndex = this.normalizeLedNumber(ledNumber);
    const color = this.getLedColorPayload(colorName);
    const frame = createEmptyLedBuffer();

    frame[ledIndex - 1] = cloneColor(color);
    await this.showAnimationBuffer(frame);
  }

  async showSegmentFrame(startLedNumber, length, colorName) {
    const start = Math.floor(Number(startLedNumber) || 1);
    const segmentLength = clamp(Math.floor(Number(length) || 1), 1, LED_COUNT);
    const color = this.getLedColorPayload(colorName);
    const frame = createEmptyLedBuffer();

    for (let offset = 0; offset < segmentLength; offset += 1) {
      const ledNumber = start + offset;

      if (ledNumber >= 1 && ledNumber <= LED_COUNT) {
        frame[ledNumber - 1] = cloneColor(color);
      }
    }

    await this.showAnimationBuffer(frame);
  }

  async playShiftLeftAnimation(colorName, times = 1, speed = 100) {
    const repeatTimes = clamp(Math.floor(Number(times) || 1), 1, 20);
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);
    const initialStart = 5;
    const segmentLength = 4;
    const leftBoundaryStart = 1;

    for (let round = 0; round < repeatTimes; round += 1) {
      for (let start = initialStart; start >= leftBoundaryStart; start -= 1) {
        await this.showSegmentFrame(start, segmentLength, colorName);
        await this.wait(delay);
      }
    }

    await this.clearLeds();
    this.emitLog(`播放左移動畫 ${colorName}：第 5～8 顆連續圖樣整段左移，次數 ${repeatTimes}，速度 ${delay} ms`);
  }

  async playShiftRightAnimation(colorName, times = 1, speed = 100) {
    const repeatTimes = clamp(Math.floor(Number(times) || 1), 1, 20);
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);
    const initialStart = 5;
    const segmentLength = 4;
    const rightBoundaryStart = LED_COUNT - segmentLength + 1;

    for (let round = 0; round < repeatTimes; round += 1) {
      for (let start = initialStart; start <= rightBoundaryStart; start += 1) {
        await this.showSegmentFrame(start, segmentLength, colorName);
        await this.wait(delay);
      }
    }

    await this.clearLeds();
    this.emitLog(`播放右移動畫 ${colorName}：第 5～8 顆連續圖樣整段右移，次數 ${repeatTimes}，速度 ${delay} ms`);
  }

  async playBounceAnimation(colorName, times = 1, speed = 100) {
    const repeatTimes = clamp(Math.floor(Number(times) || 1), 1, 20);
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);
    const positions = [
      ...Array.from({ length: LED_COUNT }, (_, index) => index + 1),
      ...Array.from({ length: LED_COUNT - 2 }, (_, index) => LED_COUNT - 1 - index),
    ];

    for (let round = 0; round < repeatTimes; round += 1) {
      for (const ledNumber of positions) {
        await this.showSingleLedFrame(ledNumber, colorName);
        await this.wait(delay);
      }
    }

    await this.clearLeds();
    this.emitLog(`播放來回移動動畫 ${colorName}，次數 ${repeatTimes}，速度 ${delay} ms`);
  }

  async playAlternateBlinkAnimation(colorName1, colorName2, times = 3) {
    const repeatTimes = clamp(Math.floor(Number(times) || 3), 1, 20);
    const delay = 250;
    const color1 = this.getLedColorPayload(colorName1);
    const color2 = this.getLedColorPayload(colorName2);

    for (let round = 0; round < repeatTimes; round += 1) {
      const frameA = createEmptyLedBuffer();
      const frameB = createEmptyLedBuffer();

      for (let index = 0; index < LED_COUNT; index += 1) {
        const isOddLed = (index + 1) % 2 === 1;
        frameA[index] = cloneColor(isOddLed ? color1 : color2);
        frameB[index] = cloneColor(isOddLed ? color2 : color1);
      }

      await this.showAnimationBuffer(frameA);
      await this.wait(delay);
      await this.showAnimationBuffer(frameB);
      await this.wait(delay);
    }

    await this.clearLeds();
    this.emitLog(`播放交錯閃爍動畫 ${colorName1}/${colorName2}，次數 ${repeatTimes}`);
  }

  createScaledColorFrame(colorName, level) {
    const color = this.getLedColorPayload(colorName);
    const brightness = clamp(Math.round(Number(level) || 0), 0, 30);
    const factor = brightness / 30;
    const scaled = {
      r: Math.round(color.r * factor),
      g: Math.round(color.g * factor),
      b: Math.round(color.b * factor),
    };

    return Array.from({ length: LED_COUNT }, () => cloneColor(scaled));
  }

  wheelColor(position) {
    const pos = ((Math.floor(Number(position) || 0) % 256) + 256) % 256;

    if (pos < 85) {
      return {
        r: 255 - pos * 3,
        g: pos * 3,
        b: 0,
      };
    }

    if (pos < 170) {
      const shifted = pos - 85;
      return {
        r: 0,
        g: 255 - shifted * 3,
        b: shifted * 3,
      };
    }

    const shifted = pos - 170;
    return {
      r: shifted * 3,
      g: 0,
      b: 255 - shifted * 3,
    };
  }

  async playBreathingAnimation(colorName, times = 3) {
    const repeatTimes = clamp(Math.floor(Number(times) || 3), 1, 20);
    const delay = 45;
    const levels = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0];

    for (let round = 0; round < repeatTimes; round += 1) {
      for (const level of levels) {
        await this.showAnimationBuffer(this.createScaledColorFrame(colorName, level));
        await this.wait(delay);
      }
    }

    await this.clearLeds();
    this.emitLog(`播放呼吸燈動畫 ${colorName}，次數 ${repeatTimes}`);
  }

  async playRainbowAnimation(speed = 100) {
    const delay = clamp(Math.floor(Number(speed) || 100), 20, 2000);
    const frameCount = 24;

    for (let frame = 0; frame < frameCount; frame += 1) {
      const buffer = Array.from({ length: LED_COUNT }, (_, index) => {
        const position = Math.floor(((index * 256) / LED_COUNT + frame * 12) % 256);
        return this.wheelColor(position);
      });

      await this.showAnimationBuffer(buffer);
      await this.wait(delay);
    }

    this.emitLog(`播放彩虹動畫，速度 ${delay} ms`);
  }


  async showLedBuffer() {
    const leds = this.getLedBuffer();

    sendSimulatorShowBuffer(leds);

    await this.sendCommand('showBuffer', {
      leds,
    });

    this.emitLog('顯示 LED 暫存陣列到 SmartRing');
  }

  async wait(ms) {
    const delay = Math.max(0, Number(ms) || 0);

    this.throwIfProgramStopped();

    if (delay === 0) {
      return;
    }

    await new Promise((resolve, reject) => {
      let timerId = null;

      const cleanup = () => {
        if (timerId !== null) {
          window.clearTimeout(timerId);
        }

        this.removeEventListener('programstop', handleStop);
      };

      const handleStop = () => {
        cleanup();
        reject(createProgramStopError());
      };

      timerId = window.setTimeout(() => {
        cleanup();
        resolve();
      }, delay);

      this.addEventListener('programstop', handleStop, { once: true });
    });

    this.throwIfProgramStopped();
  }

  handleIncomingLine(line) {
    const state = parseSmartRingLine(line);

    if (!state) {
      return;
    }

    if (!state.ok) {
      this.emitData({
        ok: false,
        rawText: state.rawText,
        buttonText: '資料格式錯誤',
        message: state.error,
      });
      return;
    }

    this.lastState = state;

    this.emitData({
      ok: true,
      rawText: state.rawText,
      state,
      buttonText: formatButtonState(state),
      message: '收到 SmartRing 狀態資料。',
    });
  }

  emitStatus(message) {
    this.dispatchEvent(
      new CustomEvent('status', {
        detail: {
          connected: this.connected,
          message,
        },
      })
    );
  }

  emitData(detail) {
    this.dispatchEvent(
      new CustomEvent('data', {
        detail,
      })
    );
  }

  emitCommand(payload) {
    this.dispatchEvent(
      new CustomEvent('command', {
        detail: {
          payload,
          text: JSON.stringify(payload),
        },
      })
    );
  }

  emitError(error) {
    this.dispatchEvent(
      new CustomEvent('error', {
        detail: {
          message: error?.message || String(error),
        },
      })
    );
  }

  emitLog(message) {
    this.dispatchEvent(
      new CustomEvent('log', {
        detail: {
          message,
        },
      })
    );
  }
}

export const smartRingRuntime = new SmartRingRuntime();
