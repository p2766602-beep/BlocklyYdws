/*
  SmartRingController_LEDOnly_D4_C8_FINAL

  Hardware:
    - ESP8266 D1 mini / compatible board
    - 12 x WS2812 / NeoPixel ring
    - LED data pin: D4 (GPIO2)
    - No buttons. Other pins are unused.

  Purpose:
    - LED-only SmartRingController firmware for Blockly Lab.
    - Keeps the same status JSON shape as the full SmartRingController:
      {"btn":[false,false,false,false,false,false,false,false],"func":0,"mode":0}
    - Button states are always false.

  Required Arduino library:
    - Adafruit NeoPixel
*/

#include <Arduino.h>
#include <Adafruit_NeoPixel.h>

#define LED_PIN D4
#define LED_COUNT 12
#define DEFAULT_BRIGHTNESS 20
#define MAX_BRIGHTNESS 30

Adafruit_NeoPixel pixels(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

uint32_t ledBuffer[LED_COUNT];
unsigned long lastStatusMs = 0;
const unsigned long STATUS_INTERVAL_MS = 50;
String serialLine = "";

int clampInt(int value, int minValue, int maxValue) {
  if (value < minValue) return minValue;
  if (value > maxValue) return maxValue;
  return value;
}

int extractInt(const String &s, const String &key, int defaultValue) {
  int keyPos = s.indexOf("\"" + key + "\"");
  if (keyPos < 0) keyPos = s.indexOf(key);
  if (keyPos < 0) return defaultValue;

  int colon = s.indexOf(':', keyPos);
  if (colon < 0) return defaultValue;

  int i = colon + 1;
  while (i < (int)s.length() && (s[i] == ' ' || s[i] == '\t' || s[i] == '"')) i++;

  bool neg = false;
  if (i < (int)s.length() && s[i] == '-') {
    neg = true;
    i++;
  }

  long value = 0;
  bool found = false;
  while (i < (int)s.length() && isDigit(s[i])) {
    found = true;
    value = value * 10 + (s[i] - '0');
    i++;
  }

  if (!found) return defaultValue;
  return neg ? -value : value;
}

bool containsAny(
  const String &s,
  const char *a,
  const char *b = nullptr,
  const char *c = nullptr,
  const char *d = nullptr,
  const char *e = nullptr,
  const char *f = nullptr
) {
  if (a && s.indexOf(a) >= 0) return true;
  if (b && s.indexOf(b) >= 0) return true;
  if (c && s.indexOf(c) >= 0) return true;
  if (d && s.indexOf(d) >= 0) return true;
  if (e && s.indexOf(e) >= 0) return true;
  if (f && s.indexOf(f) >= 0) return true;
  return false;
}

void applyBuffer() {
  for (int i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, ledBuffer[i]);
  }
  pixels.show();
}

void clearAll() {
  for (int i = 0; i < LED_COUNT; i++) {
    ledBuffer[i] = 0;
    pixels.setPixelColor(i, 0);
  }
  pixels.show();
}

void setAll(int r, int g, int b) {
  uint32_t color = pixels.Color(clampInt(r, 0, 255), clampInt(g, 0, 255), clampInt(b, 0, 255));
  for (int i = 0; i < LED_COUNT; i++) {
    ledBuffer[i] = color;
    pixels.setPixelColor(i, color);
  }
  pixels.show();
}

void setOne(int index1Based, int r, int g, int b) {
  int i = index1Based - 1;
  if (i < 0 || i >= LED_COUNT) return;

  uint32_t color = pixels.Color(clampInt(r, 0, 255), clampInt(g, 0, 255), clampInt(b, 0, 255));
  ledBuffer[i] = color;
  pixels.setPixelColor(i, color);
  pixels.show();
}

void setRange(int from1Based, int to1Based, int r, int g, int b) {
  int from = clampInt(from1Based, 1, LED_COUNT);
  int to = clampInt(to1Based, 1, LED_COUNT);
  if (from > to) {
    int t = from;
    from = to;
    to = t;
  }

  uint32_t color = pixels.Color(clampInt(r, 0, 255), clampInt(g, 0, 255), clampInt(b, 0, 255));
  for (int n = from; n <= to; n++) {
    int i = n - 1;
    ledBuffer[i] = color;
    pixels.setPixelColor(i, color);
  }
  pixels.show();
}

void showProgress(int value, int maxValue, int r, int g, int b) {
  maxValue = max(1, maxValue);
  value = clampInt(value, 0, maxValue);

  int count = (value * LED_COUNT + maxValue - 1) / maxValue;
  uint32_t color = pixels.Color(clampInt(r, 0, 255), clampInt(g, 0, 255), clampInt(b, 0, 255));

  for (int i = 0; i < LED_COUNT; i++) {
    ledBuffer[i] = (i < count) ? color : 0;
    pixels.setPixelColor(i, ledBuffer[i]);
  }
  pixels.show();
}

void showScore(int value) {
  showProgress(value, 12, 0, 0, 255);
}

void showLife(int value) {
  showProgress(value, 12, 255, 0, 0);
}

void patternRainbow() {
  for (int i = 0; i < LED_COUNT; i++) {
    uint16_t hue = (uint16_t)((65535UL * i) / LED_COUNT);
    uint32_t color = pixels.gamma32(pixels.ColorHSV(hue));
    ledBuffer[i] = color;
    pixels.setPixelColor(i, color);
  }
  pixels.show();
}

void shiftLeft(bool rotate) {
  uint32_t first = ledBuffer[0];
  for (int i = 0; i < LED_COUNT - 1; i++) ledBuffer[i] = ledBuffer[i + 1];
  ledBuffer[LED_COUNT - 1] = rotate ? first : 0;
  applyBuffer();
}

void shiftRight(bool rotate) {
  uint32_t last = ledBuffer[LED_COUNT - 1];
  for (int i = LED_COUNT - 1; i > 0; i--) ledBuffer[i] = ledBuffer[i - 1];
  ledBuffer[0] = rotate ? last : 0;
  applyBuffer();
}

void sendStatus() {
  Serial.println(F("{\"btn\":[false,false,false,false,false,false,false,false],\"func\":0,\"mode\":0}"));
}

void sendOk(const String &cmd) {
  Serial.print(F("{\"ok\":true,\"cmd\":\""));
  Serial.print(cmd);
  Serial.println(F("\"}"));
}

void sendError(const String &message) {
  Serial.print(F("{\"ok\":false,\"error\":\""));
  Serial.print(message);
  Serial.println(F("\"}"));
}

void handleCommand(String line) {
  line.trim();
  if (line.length() == 0) return;

  int r = extractInt(line, "r", extractInt(line, "red", 0));
  int g = extractInt(line, "g", extractInt(line, "green", 0));
  int b = extractInt(line, "b", extractInt(line, "blue", 0));

  if (containsAny(line, "clear", "off", "reset")) {
    clearAll();
    sendOk("clear");
    return;
  }

  if (containsAny(line, "brightness")) {
    int value = extractInt(line, "value", extractInt(line, "brightness", DEFAULT_BRIGHTNESS));
    value = clampInt(value, 0, MAX_BRIGHTNESS);
    pixels.setBrightness(value);
    pixels.show();
    sendOk("brightness");
    return;
  }

  if (containsAny(line, "setAll", "all", "fill")) {
    setAll(r, g, b);
    sendOk("setAll");
    return;
  }

  if (containsAny(line, "setRange", "range")) {
    int from = extractInt(line, "from", extractInt(line, "start", 1));
    int to = extractInt(line, "to", extractInt(line, "end", LED_COUNT));
    setRange(from, to, r, g, b);
    sendOk("setRange");
    return;
  }

  if (containsAny(line, "score")) {
    int value = extractInt(line, "value", extractInt(line, "score", 0));
    showScore(value);
    sendOk("score");
    return;
  }

  if (containsAny(line, "life")) {
    int value = extractInt(line, "value", extractInt(line, "life", 0));
    showLife(value);
    sendOk("life");
    return;
  }

  if (containsAny(line, "rainbow")) {
    patternRainbow();
    sendOk("rainbow");
    return;
  }

  if (containsAny(line, "rotateLeft")) {
    shiftLeft(true);
    sendOk("rotateLeft");
    return;
  }

  if (containsAny(line, "rotateRight")) {
    shiftRight(true);
    sendOk("rotateRight");
    return;
  }

  if (containsAny(line, "shiftLeft")) {
    shiftLeft(false);
    sendOk("shiftLeft");
    return;
  }

  if (containsAny(line, "shiftRight")) {
    shiftRight(false);
    sendOk("shiftRight");
    return;
  }

  if (containsAny(line, "show", "display")) {
    applyBuffer();
    sendOk("show");
    return;
  }

  if (containsAny(line, "setPixel", "setLed", "setLED", "\"set\"", "\"pixel\"", "\"led\"")) {
    int index = extractInt(line, "index", extractInt(line, "led", extractInt(line, "n", 1)));
    setOne(index, r, g, b);
    sendOk("setPixel");
    return;
  }

  if (line.indexOf("index") >= 0 && (line.indexOf("\"r\"") >= 0 || line.indexOf("red") >= 0)) {
    int index = extractInt(line, "index", extractInt(line, "n", 1));
    setOne(index, r, g, b);
    sendOk("setPixel");
    return;
  }

  sendError("unknown_command");
}

void readSerial() {
  while (Serial.available() > 0) {
    char c = (char)Serial.read();

    if (c == '\n' || c == '\r') {
      if (serialLine.length() > 0) {
        handleCommand(serialLine);
        serialLine = "";
      }
    } else {
      serialLine += c;
      if (serialLine.length() > 512) {
        serialLine = "";
        sendError("line_too_long");
      }
    }
  }
}

void startupAnimation() {
  clearAll();
  for (int i = 0; i < LED_COUNT; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, 20));
    pixels.show();
    delay(25);
  }
  delay(120);
  clearAll();
}

void setup() {
  Serial.begin(115200);
  delay(100);

  pixels.begin();
  pixels.setBrightness(DEFAULT_BRIGHTNESS);
  clearAll();
  startupAnimation();

  Serial.println(F("{\"device\":\"SmartRingController_LEDOnly_D4\",\"version\":\"C8_LED_ONLY_D4\",\"ledCount\":12,\"ledPin\":\"D4\",\"buttons\":0,\"ready\":true}"));
}

void loop() {
  readSerial();

  unsigned long now = millis();
  if (now - lastStatusMs >= STATUS_INTERVAL_MS) {
    lastStatusMs = now;
    sendStatus();
  }
}
