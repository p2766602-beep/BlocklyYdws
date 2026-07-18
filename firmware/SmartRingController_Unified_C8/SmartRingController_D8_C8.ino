/*
  SmartRingController Firmware

  Copyright (c) 2026 Younger Yang / Younger Dream Workshop

  License:
  This firmware source code is licensed under the MIT License unless otherwise stated.

  Hardware:
  - ESP8266 D1 mini / compatible board
  - WS2812 LED ring
  - Optional button inputs depending on firmware variant
*/

#include <Arduino.h>
#include <ArduinoJson.h>
#include <Adafruit_NeoPixel.h>

/*
  SmartRingController LEDOnly D4 Firmware C8 FULL_PROTOCOL
  --------------------------------------------------
  目標：
  1. 同一份 ESP8266 韌體支援 Scratch / Blockly / GitHub 測試頁
  2. ESP8266 持續送出相容的按鈕狀態 JSON，但本版無按鈕，btn 固定全 false
  3. ESP8266 接收 WebSerial 傳入的 LED JSON 指令
  4. 支援 setLed / clearLeds / setBrightness / showBuffer
  5. 本版只使用 D4(GPIO2) 控制 12 顆 WS2812，其他腳位完全不設定、不讀取

  WebSerial baudRate: 115200

  ESP8266 -> Web:
  {"btn":[false,false,false,false,false,false,false,false],"func":0,"mode":0}

  Web -> ESP8266:
  {"cmd":"setLed","index":1,"color":"red","r":255,"g":0,"b":0}
  {"cmd":"clearLeds"}
  {"cmd":"setBrightness","value":10}
  {"cmd":"showBuffer","leds":[{"r":255,"g":0,"b":0},{"r":0,"g":255,"b":0}]}
*/
// 注意：WebSerial JSON 協定中的 LED index 採 1～12。
// ESP8266 內部 WS2812 pixels[] 採 0～11。
// 因此韌體收到 index 後會自動轉換：1 -> 0，12 -> 11。
// --------------------------------------------------
// 硬體腳位設定
// --------------------------------------------------

// LED-only D4 版本：
 // - 無 8 顆按鈕
 // - 其他腳位完全不設定、不讀取、不使用
 // - 為了相容 Blockly Lab，仍維持 btn[8] 狀態輸出格式，但固定全 false。

const uint8_t BTN_COUNT = 8;

// WS2812
const uint8_t LED_PIN = D4;
const uint8_t LED_COUNT = 12;
const uint8_t DEFAULT_BRIGHTNESS = 10;
const uint8_t MAX_SAFE_BRIGHTNESS = 40;

Adafruit_NeoPixel pixels(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

// --------------------------------------------------
// 狀態變數
// --------------------------------------------------

bool buttonState[BTN_COUNT] = {
  false, false, false, false, false, false, false, false
};

String serialInputBuffer = "";

unsigned long lastStatusTime = 0;
const unsigned long STATUS_INTERVAL_MS = 50;

uint8_t currentBrightness = DEFAULT_BRIGHTNESS;

// --------------------------------------------------
// 工具函式
// --------------------------------------------------

uint8_t clampColorValue(int value) {
  if (value < 0) return 0;
  if (value > 255) return 255;
  return (uint8_t)value;
}

uint8_t protocolIndexToPixelIndex(int value) {
  if (value < 1) return 0;
  if (value > LED_COUNT) return LED_COUNT - 1;
  return (uint8_t)(value - 1);
}

uint8_t clampBrightness(int value) {
  if (value < 0) return 0;
  if (value > MAX_SAFE_BRIGHTNESS) return MAX_SAFE_BRIGHTNESS;
  return (uint8_t)value;
}

void readButtons() {
  // LED-only 版本沒有按鈕。
  // 為了相容 Blockly Lab，狀態陣列固定維持 false。
  for (uint8_t i = 0; i < BTN_COUNT; i++) {
    buttonState[i] = false;
  }
}

void sendButtonStateJson() {
  // LED-only 版本固定輸出 8 個 false，func 與 mode 固定為 0。
  Serial.println("{\"btn\":[false,false,false,false,false,false,false,false],\"func\":0,\"mode\":0}");
}

void clearAllLeds() {
  for (uint8_t i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, 0));
  }

  pixels.show();
}

void setSingleLed(uint8_t index, uint8_t r, uint8_t g, uint8_t b) {
  if (index >= LED_COUNT) {
    return;
  }

  pixels.setPixelColor(index, pixels.Color(r, g, b));
  pixels.show();
}

void setAllLeds(uint8_t r, uint8_t g, uint8_t b) {
  for (uint8_t i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(r, g, b));
  }

  pixels.show();
}

// --------------------------------------------------
// WebSerial 指令處理
// --------------------------------------------------

void handleSetLed(JsonDocument &doc) {
  int indexValue = doc["index"] | 0;
  int rValue = doc["r"] | 0;
  int gValue = doc["g"] | 0;
  int bValue = doc["b"] | 0;

  uint8_t index = protocolIndexToPixelIndex(indexValue);
  uint8_t r = clampColorValue(rValue);
  uint8_t g = clampColorValue(gValue);
  uint8_t b = clampColorValue(bValue);

  setSingleLed(index, r, g, b);
}

void handleSetAllLeds(JsonDocument &doc) {
  int rValue = doc["r"] | 0;
  int gValue = doc["g"] | 0;
  int bValue = doc["b"] | 0;

  uint8_t r = clampColorValue(rValue);
  uint8_t g = clampColorValue(gValue);
  uint8_t b = clampColorValue(bValue);

  setAllLeds(r, g, b);
}

void handleSetBrightness(JsonDocument &doc) {
  int value = doc["value"] | DEFAULT_BRIGHTNESS;

  currentBrightness = clampBrightness(value);
  pixels.setBrightness(currentBrightness);
  pixels.show();
}

void handleShowBuffer(JsonDocument &doc) {
  JsonArray leds = doc["leds"].as<JsonArray>();

  if (leds.isNull()) {
    return;
  }

  uint8_t index = 0;

  for (JsonVariant led : leds) {
    if (index >= LED_COUNT) {
      break;
    }

    uint8_t r = 0;
    uint8_t g = 0;
    uint8_t b = 0;

    if (led.is<JsonArray>()) {
      JsonArray rgb = led.as<JsonArray>();
      r = clampColorValue(rgb[0] | 0);
      g = clampColorValue(rgb[1] | 0);
      b = clampColorValue(rgb[2] | 0);
    } else if (led.is<JsonObject>()) {
      JsonObject ledObject = led.as<JsonObject>();
      r = clampColorValue(ledObject["r"] | 0);
      g = clampColorValue(ledObject["g"] | 0);
      b = clampColorValue(ledObject["b"] | 0);
    }

    pixels.setPixelColor(index, pixels.Color(r, g, b));
    index++;
  }

  for (uint8_t i = index; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, 0));
  }

  pixels.show();
}

void handleCommandJson(const String &line) {
  StaticJsonDocument<1536> doc;

  DeserializationError error = deserializeJson(doc, line);

  if (error) {
    return;
  }

  const char *cmd = doc["cmd"] | "";

  if (strcmp(cmd, "setLed") == 0) {
    handleSetLed(doc);
    return;
  }

  if (strcmp(cmd, "clearLeds") == 0) {
    clearAllLeds();
    return;
  }

  if (strcmp(cmd, "setAllLeds") == 0) {
    handleSetAllLeds(doc);
    return;
  }

  if (strcmp(cmd, "setBrightness") == 0) {
    handleSetBrightness(doc);
    return;
  }

  if (strcmp(cmd, "showBuffer") == 0) {
    handleShowBuffer(doc);
    return;
  }
}

void readSerialCommands() {
  while (Serial.available() > 0) {
    char incoming = (char)Serial.read();

    if (incoming == '\r') {
      continue;
    }

    if (incoming == '\n') {
      serialInputBuffer.trim();

      if (serialInputBuffer.length() > 0) {
        handleCommandJson(serialInputBuffer);
      }

      serialInputBuffer = "";
      continue;
    }

    serialInputBuffer += incoming;

    if (serialInputBuffer.length() > 1500) {
      serialInputBuffer = "";
    }
  }
}

// --------------------------------------------------
// Arduino setup / loop
// --------------------------------------------------

void setupButtons() {
  // LED-only 版本沒有按鈕，其他腳位完全不設定。
}

void setupLeds() {
  pixels.begin();
  pixels.setBrightness(DEFAULT_BRIGHTNESS);
  clearAllLeds();
}

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(5);

  setupButtons();
  setupLeds();

  delay(200);
  Serial.println("{\"device\":\"SmartRingController_LEDOnly_D4\",\"version\":\"C8_LED_ONLY_D4_FULL_PROTOCOL\",\"ledCount\":12,\"ledPin\":\"D4\",\"buttons\":0,\"ready\":true}");
}

void loop() {
  readSerialCommands();
  readButtons();

  unsigned long now = millis();

  if (now - lastStatusTime >= STATUS_INTERVAL_MS) {
    lastStatusTime = now;
    sendButtonStateJson();
  }
}

#include <Arduino.h>
#include <ArduinoJson.h>
#include <Adafruit_NeoPixel.h>

/*
  SmartRingController Unified Firmware C8
  --------------------------------------------------
  目標：
  1. 同一份 ESP8266 韌體支援 Scratch / Blockly / GitHub 測試頁
  2. ESP8266 持續送出按鈕狀態 JSON
  3. ESP8266 接收 WebSerial 傳入的 LED JSON 指令
  4. 支援 setLed / clearLeds / setBrightness / showBuffer

  WebSerial baudRate: 115200

  ESP8266 -> Web:
  {"btn":[false,false,false,false,false,false,false,false],"func":0,"mode":0}

  Web -> ESP8266:
  {"cmd":"setLed","index":1,"color":"red","r":255,"g":0,"b":0}
  {"cmd":"clearLeds"}
  {"cmd":"setBrightness","value":10}
  {"cmd":"showBuffer","leds":[{"r":255,"g":0,"b":0},{"r":0,"g":255,"b":0}]}
*/
// 注意：WebSerial JSON 協定中的 LED index 採 1～12。
// ESP8266 內部 WS2812 pixels[] 採 0～11。
// 因此韌體收到 index 後會自動轉換：1 -> 0，12 -> 11。
// --------------------------------------------------
// 硬體腳位設定
// --------------------------------------------------

// 8 顆按鈕對應：
// BTN1 / F -> D1
// BTN2 / B -> D2
// BTN3 / L -> D3
// BTN4 / R -> D4
// BTN0 / U -> D0，使用 INPUT_PULLDOWN_16
// BTN5 / D -> D5
// BTN6 / O -> D6
// BTN7 / C -> D7

const uint8_t BTN_COUNT = 8;

const uint8_t BTN_PINS[BTN_COUNT] = {
  D1, // index 0：BTN1 / F
  D2, // index 1：BTN2 / B
  D3, // index 2：BTN3 / L
  D4, // index 3：BTN4 / R
  D0, // index 4：BTN0 / U
  D5, // index 5：BTN5 / D
  D6, // index 6：BTN6 / O
  D7  // index 7：BTN7 / C
};

// 一般按鈕使用 INPUT_PULLUP，按下為 LOW。
// D0 使用 INPUT_PULLDOWN_16，按下為 HIGH。
const bool BTN_ACTIVE_HIGH[BTN_COUNT] = {
  false, // D1
  false, // D2
  false, // D3
  false, // D4
  true,  // D0
  false, // D5
  false, // D6
  false  // D7
};

// WS2812
const uint8_t LED_PIN = D8;
const uint8_t LED_COUNT = 12;
const uint8_t DEFAULT_BRIGHTNESS = 10;
const uint8_t MAX_SAFE_BRIGHTNESS = 40;

Adafruit_NeoPixel pixels(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

// --------------------------------------------------
// 狀態變數
// --------------------------------------------------

bool buttonState[BTN_COUNT] = {
  false, false, false, false, false, false, false, false
};

String serialInputBuffer = "";

unsigned long lastStatusTime = 0;
const unsigned long STATUS_INTERVAL_MS = 50;

uint8_t currentBrightness = DEFAULT_BRIGHTNESS;

// --------------------------------------------------
// 工具函式
// --------------------------------------------------

uint8_t clampColorValue(int value) {
  if (value < 0) return 0;
  if (value > 255) return 255;
  return (uint8_t)value;
}

uint8_t protocolIndexToPixelIndex(int value) {
  if (value < 1) return 0;
  if (value > LED_COUNT) return LED_COUNT - 1;
  return (uint8_t)(value - 1);
}

uint8_t clampBrightness(int value) {
  if (value < 0) return 0;
  if (value > MAX_SAFE_BRIGHTNESS) return MAX_SAFE_BRIGHTNESS;
  return (uint8_t)value;
}

void readButtons() {
  for (uint8_t i = 0; i < BTN_COUNT; i++) {
    int raw = digitalRead(BTN_PINS[i]);

    if (BTN_ACTIVE_HIGH[i]) {
      buttonState[i] = (raw == HIGH);
    } else {
      buttonState[i] = (raw == LOW);
    }
  }
}

void sendButtonStateJson() {
  Serial.print("{\"btn\":[");

  for (uint8_t i = 0; i < BTN_COUNT; i++) {
    Serial.print(buttonState[i] ? "true" : "false");

    if (i < BTN_COUNT - 1) {
      Serial.print(",");
    }
  }

  Serial.print("],\"func\":");
  Serial.print(buttonState[4] ? 1 : 0);

  Serial.print(",\"mode\":");
  Serial.print(buttonState[7] ? 1 : 0);

  Serial.println("}");
}

void clearAllLeds() {
  for (uint8_t i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, 0));
  }

  pixels.show();
}

void setSingleLed(uint8_t index, uint8_t r, uint8_t g, uint8_t b) {
  if (index >= LED_COUNT) {
    return;
  }

  pixels.setPixelColor(index, pixels.Color(r, g, b));
  pixels.show();
}

void setAllLeds(uint8_t r, uint8_t g, uint8_t b) {
  for (uint8_t i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(r, g, b));
  }

  pixels.show();
}

// --------------------------------------------------
// WebSerial 指令處理
// --------------------------------------------------

void handleSetLed(JsonDocument &doc) {
  int indexValue = doc["index"] | 0;
  int rValue = doc["r"] | 0;
  int gValue = doc["g"] | 0;
  int bValue = doc["b"] | 0;

  uint8_t index = protocolIndexToPixelIndex(indexValue);
  uint8_t r = clampColorValue(rValue);
  uint8_t g = clampColorValue(gValue);
  uint8_t b = clampColorValue(bValue);

  setSingleLed(index, r, g, b);
}

void handleSetAllLeds(JsonDocument &doc) {
  int rValue = doc["r"] | 0;
  int gValue = doc["g"] | 0;
  int bValue = doc["b"] | 0;

  uint8_t r = clampColorValue(rValue);
  uint8_t g = clampColorValue(gValue);
  uint8_t b = clampColorValue(bValue);

  setAllLeds(r, g, b);
}

void handleSetBrightness(JsonDocument &doc) {
  int value = doc["value"] | DEFAULT_BRIGHTNESS;

  currentBrightness = clampBrightness(value);
  pixels.setBrightness(currentBrightness);
  pixels.show();
}

void handleShowBuffer(JsonDocument &doc) {
  JsonArray leds = doc["leds"].as<JsonArray>();

  if (leds.isNull()) {
    return;
  }

  uint8_t index = 0;

  for (JsonVariant led : leds) {
    if (index >= LED_COUNT) {
      break;
    }

    uint8_t r = 0;
    uint8_t g = 0;
    uint8_t b = 0;

    if (led.is<JsonArray>()) {
      JsonArray rgb = led.as<JsonArray>();
      r = clampColorValue(rgb[0] | 0);
      g = clampColorValue(rgb[1] | 0);
      b = clampColorValue(rgb[2] | 0);
    } else if (led.is<JsonObject>()) {
      JsonObject ledObject = led.as<JsonObject>();
      r = clampColorValue(ledObject["r"] | 0);
      g = clampColorValue(ledObject["g"] | 0);
      b = clampColorValue(ledObject["b"] | 0);
    }

    pixels.setPixelColor(index, pixels.Color(r, g, b));
    index++;
  }

  for (uint8_t i = index; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, 0));
  }

  pixels.show();
}

void handleCommandJson(const String &line) {
  StaticJsonDocument<1536> doc;

  DeserializationError error = deserializeJson(doc, line);

  if (error) {
    return;
  }

  const char *cmd = doc["cmd"] | "";

  if (strcmp(cmd, "setLed") == 0) {
    handleSetLed(doc);
    return;
  }

  if (strcmp(cmd, "clearLeds") == 0) {
    clearAllLeds();
    return;
  }

  if (strcmp(cmd, "setAllLeds") == 0) {
    handleSetAllLeds(doc);
    return;
  }

  if (strcmp(cmd, "setBrightness") == 0) {
    handleSetBrightness(doc);
    return;
  }

  if (strcmp(cmd, "showBuffer") == 0) {
    handleShowBuffer(doc);
    return;
  }
}

void readSerialCommands() {
  while (Serial.available() > 0) {
    char incoming = (char)Serial.read();

    if (incoming == '\r') {
      continue;
    }

    if (incoming == '\n') {
      serialInputBuffer.trim();

      if (serialInputBuffer.length() > 0) {
        handleCommandJson(serialInputBuffer);
      }

      serialInputBuffer = "";
      continue;
    }

    serialInputBuffer += incoming;

    if (serialInputBuffer.length() > 1500) {
      serialInputBuffer = "";
    }
  }
}

// --------------------------------------------------
// Arduino setup / loop
// --------------------------------------------------

void setupButtons() {
  for (uint8_t i = 0; i < BTN_COUNT; i++) {
    if (BTN_ACTIVE_HIGH[i]) {
      pinMode(BTN_PINS[i], INPUT_PULLDOWN_16);
    } else {
      pinMode(BTN_PINS[i], INPUT_PULLUP);
    }
  }
}

void setupLeds() {
  pixels.begin();
  pixels.setBrightness(DEFAULT_BRIGHTNESS);
  clearAllLeds();
}

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(5);

  setupButtons();
  setupLeds();

  delay(200);
}

void loop() {
  readSerialCommands();
  readButtons();

  unsigned long now = millis();

  if (now - lastStatusTime >= STATUS_INTERVAL_MS) {
    lastStatusTime = now;
    sendButtonStateJson();
  }
}