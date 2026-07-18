# OSEP SmartRing 硬體模擬器移植到 Blockly Lab 交接文件

## 一、交接目標

將 OSEP Scratch Editor 專案中已完成的 SmartRing LED 硬體模擬器，移植到 Blockly Lab 專案中使用。

移植後，Blockly Lab 可支援：

```text
Blockly 積木
    ↓
SmartRing LED command
    ↓
同頁 iframe 模擬器
    ↓
WS2812 12 顆 LED 燈環即時顯示
```

也可以保留：

```text
BroadcastChannel 跨分頁測試 / fallback
```

---

## 二、從 OSEP 專案移植過來的核心成果

### 1. 精簡 embed 模擬器頁

來源：OSEP MVP-32-8B

功能：

```text
只顯示 WS2812 12 顆 LED 燈環
不顯示內層標題
不顯示 WS2812 × 12 副標
不顯示底部狀態列
狀態文字顯示在燈環中心
支援 postMessage 接收 LED command
```

建議放置於 Blockly Lab：

```text
public/smartring-simulator/embed.html
```

部署後網址：

```text
本機：http://localhost:5173/smartring-simulator/embed.html
GitHub Pages：https://tnjbox.github.io/blockly-lab/smartring-simulator/embed.html
```

---

### 2. Blockly Lab bridge 模組

新增：

```text
src/smartring/simulator-bridge.js
```

功能：

```text
開啟 / 關閉 SmartRing 模擬器浮動面板
拖曳移動面板
右上角 X 手動關閉
透過 iframe postMessage 傳送 LED command
透過 BroadcastChannel 保留跨分頁同步
```

---

## 三、交接包檔案

本交接包建議放入 Blockly Lab 專案的檔案如下：

```text
public/smartring-simulator/embed.html
public/smartring-simulator/bridge-test.html
src/smartring/simulator-bridge.js
docs/BLOCKLY_LAB_SMARTRING_SIMULATOR_INTEGRATION_PLAN.md
docs/SMART_RING_SIMULATOR_COMMAND_SPEC.md
```

---

## 四、LED command 格式

### 1. 設定單顆 LED

```javascript
{
  type: "setLed",
  index: 1,
  r: 30,
  g: 0,
  b: 0
}
```

### 2. 設定全部 LED

```javascript
{
  type: "setAll",
  r: 0,
  g: 30,
  b: 0
}
```

### 3. 清除全部

```javascript
{
  type: "clear"
}
```

### 4. 顯示進度條

```javascript
{
  type: "showProgress",
  value: 6,
  max: 12
}
```

### 5. 顯示分數

```javascript
{
  type: "showScore",
  value: 8,
  max: 12
}
```

### 6. 顯示生命值

```javascript
{
  type: "showLife",
  value: 3,
  max: 5
}
```

### 7. 設定暫存陣列

```javascript
{
  type: "setBuffer",
  buffer: [
    { r: 30, g: 0, b: 0 },
    { r: 0, g: 30, b: 0 }
  ]
}
```

### 8. 顯示暫存陣列

```javascript
{
  type: "showBuffer"
}
```

---

## 五、建議 Blockly Lab 整合方式

### 階段 1：先建立模擬器測試頁

將交接包檔案放入專案後，先測試：

```text
public/smartring-simulator/bridge-test.html
```

在 Vite 開發環境下，可開啟：

```text
http://localhost:5173/smartring-simulator/bridge-test.html
```

確認：

```text
開啟 / 關閉模擬器
第 1 顆紅燈
全部綠燈
進度條
暫存陣列彩色測試
清除全部
```

---

### 階段 2：在 Blockly Lab UI 加入按鈕

建議先在 SmartRing 狀態區或工具列加入按鈕：

```text
開啟 / 關閉模擬硬體
```

按鈕事件：

```javascript
import { toggleSimulator } from './smartring/simulator-bridge.js';

button.addEventListener('click', () => {
  toggleSimulator();
});
```

---

### 階段 3：讓 runtime 同步 LED command 到模擬器

在 Blockly Lab 的 SmartRing runtime 中，當執行 LED 指令時，同步呼叫：

```javascript
import { sendSmartRingLedCommand } from './smartring/simulator-bridge.js';

sendSmartRingLedCommand({
  type: 'setLed',
  index: 1,
  r: 30,
  g: 0,
  b: 0,
});
```

暫存陣列可用：

```javascript
import { sendSmartRingLedCommands } from './smartring/simulator-bridge.js';

sendSmartRingLedCommands([
  {
    type: 'setBuffer',
    buffer,
  },
  {
    type: 'showBuffer',
  },
]);
```

---

## 六、與 Blockly Lab 既有功能的關係

### 不取代 WebSerial

模擬器不是取代實體硬體，而是提供另一個顯示出口。

建議架構：

```text
Blockly SmartRing 積木
    ↓
runtime
    ├── WebSerial：送給 ESP8266 實體硬體
    └── SimulatorBridge：送給 iframe 模擬器
```

### 不影響競賽 / 解題功能

模擬器只處理 SmartRing LED command，不處理題庫、評分、成績上傳。

---

## 七、建議下一步任務

回到 Blockly Lab 專案後，建議從以下順序開始：

```text
BL-SIM-01｜加入 public/smartring-simulator/embed.html
BL-SIM-02｜加入 src/smartring/simulator-bridge.js
BL-SIM-03｜建立 bridge-test.html 測試頁
BL-SIM-04｜在主頁加入「開啟 / 關閉模擬硬體」按鈕
BL-SIM-05｜SmartRing runtime 同步 LED command 到 simulator
BL-SIM-06｜課程任務說明加入實體硬體 / 模擬硬體提示
```

---

## 八、Git 建議

在 Blockly Lab 專案中操作：

```powershell
git status
git add public/smartring-simulator/embed.html public/smartring-simulator/bridge-test.html src/smartring/simulator-bridge.js docs/BLOCKLY_LAB_SMARTRING_SIMULATOR_INTEGRATION_PLAN.md docs/SMART_RING_SIMULATOR_COMMAND_SPEC.md
git commit -m "BL-SIM-01 add SmartRing simulator handoff files"
git push
git status
```

若有 GitHub Pages 部署：

```powershell
npm run deploy
```
