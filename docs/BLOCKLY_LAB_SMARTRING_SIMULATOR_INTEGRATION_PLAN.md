# Blockly Lab｜SmartRing 硬體模擬器整合計畫

## 一、目標

在 Blockly Lab 中加入 SmartRing LED 硬體模擬器，使學生在沒有 ESP8266 SmartRing 實體硬體時，也能看到 WS2812 LED 燈環的顯示結果。

---

## 二、建議新增檔案

```text
public/smartring-simulator/embed.html
public/smartring-simulator/bridge-test.html
src/smartring/simulator-bridge.js
```

---

## 三、第一階段測試

先不改主程式，直接測：

```text
http://localhost:5173/smartring-simulator/bridge-test.html
```

確認模擬器可開啟、可接收 command。

---

## 四、第二階段整合 UI

在 Blockly Lab 主頁或 SmartRing 狀態區加入：

```text
開啟 / 關閉模擬硬體
```

建議按鈕位置：

```text
SmartRing 狀態面板
或
執行程式 / 停止程式附近
```

---

## 五、第三階段整合 runtime

在 `src/smartring/runtime.js` 中，當送出 LED 指令給硬體時，同步送模擬器。

示意：

```javascript
import { sendSmartRingLedCommand } from './simulator-bridge.js';

function setLed(index, r, g, b) {
  // 原本硬體控制
  sendToHardware(...);

  // 新增模擬器同步
  sendSmartRingLedCommand({
    type: 'setLed',
    index,
    r,
    g,
    b,
  });
}
```

---

## 六、注意事項

1. 模擬器 RGB 使用 0～30，與 Blockly Lab SmartRing 規格一致。
2. 實體硬體仍透過 WebSerial。
3. 模擬器透過 iframe postMessage。
4. BroadcastChannel 保留作為跨分頁測試。
5. 建議不要讓模擬器影響程式評分或解題流程。
