const INPUT_MARKERS = ['【輸入格式】', '【輸入說明】'];
const OUTPUT_MARKERS = ['【輸出格式】', '【輸出說明】'];

function splitSections(desc) {
  const re = /【[^】]+】/g;
  const positions = [];
  let m;
  while ((m = re.exec(desc))) positions.push({ idx: m.index, marker: m[0], end: m.index + m[0].length });

  const inputPos = positions.find((p) => INPUT_MARKERS.includes(p.marker));
  const outputPos = positions.find((p) => OUTPUT_MARKERS.includes(p.marker));

  if (!inputPos || !outputPos) {
    return { description: desc.trim(), inputDescription: null, outputDescription: null };
  }

  const description = desc.slice(0, inputPos.idx).trim();
  const inputDescription = desc.slice(inputPos.end, outputPos.idx).trim();
  const outputDescription = desc.slice(outputPos.end).trim();
  return { description, inputDescription, outputDescription };
}

module.exports = { splitSections };
