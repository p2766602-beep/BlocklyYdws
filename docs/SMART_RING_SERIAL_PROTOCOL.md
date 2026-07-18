# SmartRing Serial JSON Protocol

## 一、文件目的

本文件記錄 Blockly Lab 與 ESP8266 SmartRingController 之間的 WebSerial JSON 通訊協定。

MVP-B07 起，前端固定使用本文件定義的 LED 控制指令格式。MVP-B08 起，ESP8266 統一韌體支援接收 LED JSON 指令。MVP-B08-1 起，前端與學生端 LED 編號統一採用 1～12。

---

## 二、通訊方式

- 連線方式：WebSerial
- baudRate：115200
- 資料格式：一行一筆 JSON
- 每筆資料以換行字元 `\n` 結束

---

## 三、ESP8266 傳送到前端的狀態資料

ESP8266 應持續送出按鈕狀態：

```json
{"btn":[false,false,false,false,false,false,false,false],"func":0,"mode":0}
```

按鈕順序：

| 陣列索引 | 按鈕 | 方向 / 功能 |
|---:|---|---|
| 0 | BTN1 | F |
| 1 | BTN2 | B |
| 2 | BTN3 | L |
| 3 | BTN4 | R |
| 4 | BTN0 | U |
| 5 | BTN5 | D |
| 6 | BTN6 | O |
| 7 | BTN7 | C |

---

## 四、ESP8266 接收前端 LED 控制指令

ESP8266 接收前端送出的 JSON 指令，採靜默處理，不額外回傳 ack。

不回傳 ack 的原因是前端目前主要解析 ESP8266 持續送出的按鈕狀態資料：

```json
{"btn":[false,false,false,false,false,false,false,false],"func":0,"mode":0}
```

若韌體額外回傳：

```json
{"ok":true,"cmd":"setLed"}
```

可能造成前端誤判資料格式。

---

## 五、LED 編號規則

從 MVP-B08-1 起，SmartRing LED 編號採用學生較容易理解的 1 起算。

| 學生看到的 LED 編號 | ESP8266 內部 WS2812 index |
|---:|---:|
| 1 | 0 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 4 |
| 6 | 5 |
| 7 | 6 |
| 8 | 7 |
| 9 | 8 |
| 10 | 9 |
| 11 | 10 |
| 12 | 11 |

前端送出的 JSON 使用 LED 編號 1～12：

```json
{"cmd":"setLed","index":1,"color":"red","r":255,"g":0,"b":0}
```

不要再使用 0 起算：

```json
{"cmd":"setLed","index":0,"color":"red","r":255,"g":0,"b":0}
```

---

## 六、目前支援的指令

### 1. 設定單顆 LED

```json
{"cmd":"setLed","index":1,"color":"red","r":255,"g":0,"b":0}
```

說明：

- `index`：學生端 LED 編號，範圍 1～12
- `color`：顏色名稱，主要給前端或除錯顯示使用
- `r`、`g`、`b`：實際送給 WS2812 的 RGB 數值

### 2. 清除所有 LED

```json
{"cmd":"clearLeds"}
```

### 3. 設定所有 LED

```json
{"cmd":"setAllLeds","color":"red","r":255,"g":0,"b":0}
```

### 4. 設定亮度

```json
{"cmd":"setBrightness","brightness":10}
```

### 5. 顯示暫存陣列

```json
{"cmd":"showBuffer","leds":[{"r":255,"g":0,"b":0},{"r":0,"g":0,"b":0}]}
```

`showBuffer` 的 `leds` 由前端依照 LED 1～12 的順序送出，韌體依序顯示到 WS2812 index 0～11。

---

## 七、後續版本

MVP-B09 預計新增 Blockly LED Buffer 積木，讓學生透過暫存陣列理解陣列與 LED 顯示的關係。
