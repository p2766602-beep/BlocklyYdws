# SmartRing Simulator Command Spec

## LED 數量

```text
12
```

## RGB 數值範圍

```text
0～30
```

## 支援 command

### setLed

```javascript
{
  type: "setLed",
  index: 1,
  r: 30,
  g: 0,
  b: 0
}
```

### setAll

```javascript
{
  type: "setAll",
  r: 0,
  g: 30,
  b: 0
}
```

### clear

```javascript
{
  type: "clear"
}
```

### showProgress

```javascript
{
  type: "showProgress",
  value: 6,
  max: 12
}
```

### showScore

```javascript
{
  type: "showScore",
  value: 8,
  max: 12
}
```

### showLife

```javascript
{
  type: "showLife",
  value: 3,
  max: 5
}
```

### setBuffer

```javascript
{
  type: "setBuffer",
  buffer: [
    { r: 30, g: 0, b: 0 },
    { r: 0, g: 30, b: 0 }
  ]
}
```

### showBuffer

```javascript
{
  type: "showBuffer"
}
```

## postMessage 格式

### 單一 command

```javascript
{
  source: "OSEP",
  type: "ledCommand",
  command: {
    type: "setLed",
    index: 1,
    r: 30,
    g: 0,
    b: 0
  }
}
```

### 多筆 command

```javascript
{
  source: "OSEP",
  type: "ledCommands",
  commands: [
    {
      type: "setBuffer",
      buffer: [...]
    },
    {
      type: "showBuffer"
    }
  ]
}
```
