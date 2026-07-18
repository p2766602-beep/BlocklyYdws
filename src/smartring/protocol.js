const BUTTON_LABELS = [
  'BTN1 / F',
  'BTN2 / B',
  'BTN3 / L',
  'BTN4 / R',
  'BTN0 / U',
  'BTN5 / D',
  'BTN6 / O',
  'BTN7 / C',
];

export function parseSmartRingLine(line) {
  const rawText = String(line || '').trim();

  if (!rawText) {
    return null;
  }

  let parsed = null;

  try {
    parsed = JSON.parse(rawText);
  } catch {
    return {
      ok: false,
      rawText,
      error: '收到的資料不是有效 JSON。',
    };
  }

  const btnArray = Array.isArray(parsed.btn)
    ? parsed.btn.map((value) => Boolean(value))
    : [];

  const pressedButtons = btnArray
    .map((isPressed, index) => {
      return isPressed ? BUTTON_LABELS[index] || `BTN${index}` : null;
    })
    .filter(Boolean);

  return {
    ok: true,
    rawText,
    raw: parsed,
    buttons: btnArray,
    pressedButtons,
    func: Number(parsed.func || 0),
    mode: Number(parsed.mode || 0),
    timestamp: Date.now(),
  };
}

export function formatButtonState(state) {
  if (!state?.ok) {
    return '資料格式錯誤';
  }

  if (!state.pressedButtons.length) {
    return '目前沒有按鈕被按下';
  }

  return state.pressedButtons.join('、');
}

export function createJsonLine(payload) {
  return `${JSON.stringify(payload)}\n`;
}