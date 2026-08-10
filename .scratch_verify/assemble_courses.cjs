const fs = require('fs');
const path = require('path');

const CANONICAL_DIR = 'D:/YOSEP/YDWS-CodingBank/courses';

function loadTasksFile(name) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, name), 'utf8'));
}
const tainanTasks = loadTasksFile('tasks_tainan.json');
const hualienTasks = loadTasksFile('tasks_hualien.json');
const chaiyicTasks = loadTasksFile('tasks_chaiyic.json');
const newtaipeiTasks = loadTasksFile('tasks_newtaipei.json');
const hsinchuTasks = loadTasksFile('tasks_hsinchu.json');

function byId(list) {
  const m = {};
  list.forEach((t) => { m[t.id] = t; });
  return m;
}
const T = {
  ...byId(tainanTasks), ...byId(hualienTasks), ...byId(chaiyicTasks), ...byId(newtaipeiTasks), ...byId(hsinchuTasks),
};

function scoreFor(count) {
  return Math.floor(100 / count);
}

function buildTask({ id, title, description, inputDescription, outputDescription, examples, difficulty, note, mainConcepts, subConcepts, algorithm, dataStructure, syntax, math, context }) {
  const src = T[id];
  if (!src) throw new Error('missing built task for id: ' + id);
  const score = scoreFor(src.testCases.length);
  return {
    id,
    title,
    problemTitle: title,
    role: 'contest',
    difficulty,
    blocklyFit: '高',
    requiresGreenFlag: true,
    description,
    inputDescription,
    outputDescription,
    statement: { description, input: inputDescription, output: outputDescription },
    examples,
    testCases: src.testCases.map((tc) => ({ input: tc.input, expectedOutput: tc.expectedOutput, output: tc.expectedOutput, score, hidden: false })),
    starterXml: src.xml,
    review: {
      needsManualReview: false,
      risk: '低',
      flags: [],
      note,
      exportDecision: 'Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過',
    },
    tags: { mainConcepts, subConcepts, algorithm, dataStructure, syntax, math, context },
    restrictions: { requiredBlocks: [], disabledBlocks: [] },
  };
}

function writeCourse(filename, code, title, description, tasks, sourceNote) {
  const course = {
    code,
    title,
    type: 'programming',
    mode: 'learning',
    description,
    tasks,
  };
  const header = `// Hand-authored by Claude from data/problem_bank_master_complete.csv (${code}-1~${tasks.length})\n` +
    `// and cross-checked against every worked example in the source PDF via a JS reference\n` +
    `// implementation before being written here. Not produced by export_course_js.py — that tool's\n` +
    `// L1~L3-only "第一波" scope silently drops content (see MVP-J14 in blockly-lab/docs/MVP_LOG.md),\n` +
    `// so re-running any CSV exporter against this file's course code is not safe without checking\n` +
    `// its scope first.\n` +
    `//\n` +
    `// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness\n` +
    `// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）\n` +
    `// 對每一筆testCases實際跑過，不是憑印象手刻。\n` +
    `// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。\n` +
    (sourceNote ? `//\n// ${sourceNote}\n` : '') +
    `\nexport default `;
  const body = JSON.stringify(course, null, 2);
  fs.writeFileSync(path.join(CANONICAL_DIR, filename), header + body + ';\n', 'utf8');
  console.log('wrote', filename, `(${tasks.length} tasks)`);
}

// ============ 台南市 114ETainan ============
(function () {
  const tasks = [
    buildTask({
      id: 'Tainan-1', title: '偶數和',
      description: '請設計一個程式，輸入二個正整數（由小到大），計算出二個正整數之間，所有偶數的和。',
      inputDescription: '輸入兩行，第一行為起始數，第二行為結束數（保證起始數 <= 結束數）。',
      outputDescription: '輸出一個整數，代表起始數到結束數之間（含端點）所有偶數的總和。',
      examples: [
        { input: '10\n20', output: '90', explanation: '10 至 20 間的偶數有 10、12、14、16、18、20，和為 90。' },
        { input: '31\n39', output: '140', explanation: '31 至 39 間的偶數有 32、34、36、38，和為 140。' },
      ],
      difficulty: 'L1',
      note: '固定範圍內找偶數並加總，練習迴圈與條件判斷，沒有陷阱。',
      mainConcepts: ['迴圈'], subConcepts: ['條件判斷'], algorithm: ['列舉'], dataStructure: ['變數'], syntax: ['for迴圈', '餘數', '比較運算'], math: ['奇偶數'], context: ['數學情境'],
    }),
    buildTask({
      id: 'Tainan-2', title: '三角形',
      description: '已知一個三角形的任意兩邊和必定大於第三邊，請寫一個程式，一次輸入三個正整數，判斷能否組成一個三角形。',
      inputDescription: '一次輸入三個正整數，以半形空格間隔。',
      outputDescription: '若能組成三角形輸出 yes，否則輸出 no。',
      examples: [
        { input: '9 6 8', output: 'yes', explanation: '符合「任意兩邊和必定大於第三邊」，可以組成一個三角形。' },
        { input: '1 2 3', output: 'no', explanation: '不符合「任意兩邊和必定大於第三邊」，不可以組成一個三角形。' },
      ],
      difficulty: 'L1',
      note: '三角形不等式判斷，需要同時檢查三組兩邊和，練習AND邏輯組合。',
      mainConcepts: ['條件判斷'], subConcepts: ['邏輯運算'], algorithm: ['條件檢查'], dataStructure: ['變數'], syntax: ['AND', '比較運算'], math: ['三角形不等式'], context: ['數學情境'],
    }),
    buildTask({
      id: 'Tainan-3', title: '刮刮樂',
      description: '小哲彩券公司推出一種六六大順的刮刮樂，每張刮刮樂上面有三個 0~9 的數字。如果出現一個數字 6，可以得到 100 元；出現二個數字 6，可以得到 200 元；出現三個數字 6，可以得到 500 元。以上三種得獎方式，只能選擇獎金最高的一種來領取。現在給你一張刮刮樂上的三個數字，請問你可以得到多少獎金。',
      inputDescription: '輸入一個由三個 0~9 數字組成的字串。',
      outputDescription: '輸出一個整數，代表可以得到的獎金。',
      examples: [
        { input: '666', output: '500', explanation: '出現三個數字 6，可以得到 500 元。' },
        { input: '600', output: '100', explanation: '出現一個數字 6，可以得到 100 元。' },
      ],
      difficulty: 'L1',
      note: '逐字元比對數字6出現次數並對應獎金級距，練習字串逐字元檢查。',
      mainConcepts: ['字串處理'], subConcepts: ['條件判斷'], algorithm: ['計數'], dataStructure: ['字串'], syntax: ['字元取出', '比較運算'], math: [], context: ['生活情境', '彩券'],
    }),
  ];
  writeCourse('114ETainan.js', '114ETainan', '114-臺南市國小',
    '臺南市114學年度國小組資訊科技競賽練習題，涵蓋迴圈加總、條件判斷與字串逐字元檢查。',
    tasks);
})();

// ============ 花蓮縣 114EHualien ============
(function () {
  const tasks = [
    buildTask({
      id: 'Hualien-1', title: '零用錢是否足夠',
      description: '你有一個錢包，裡面裝著固定的零用錢。這幾天你想買一些東西，請幫忙算算看，你的錢夠不夠買這些東西？系統會提供一個整數代表零用錢總額，以及一份固定包含4筆資料的花費清單，依序代表第1天到第4天的花費金額。請從第1天開始，依序扣除每日花費金額：若在某一天扣除花費後，剩餘金額小於0，表示零用錢已不足，請立即輸出「第X天不夠用」（X為發生不足的天數）；若4天的花費皆能成功扣除完成，請輸出「錢剛好或有剩」。',
      inputDescription: '第一行輸入零用錢總額；第二行依序輸入4筆花費金額。',
      outputDescription: '輸出「第X天不夠用」或「錢剛好或有剩」。',
      examples: [
        { input: '100\n20 30 40 20', output: '第4天不夠用', explanation: '100-20=80,80-30=50,50-40=10,10-20=-10<0，第4天不夠用。' },
        { input: '100\n10 20 30 40', output: '錢剛好或有剩', explanation: '100-10-20-30-40=0，4天都成功扣除。' },
      ],
      difficulty: 'L2',
      note: '固定4天依序扣款並在中途提早判斷不足，練習提早結束（旗標）與迴圈。',
      mainConcepts: ['迴圈'], subConcepts: ['條件判斷'], algorithm: ['模擬'], dataStructure: ['變數'], syntax: ['for迴圈', '旗標變數'], math: [], context: ['生活情境', '理財'],
    }),
    buildTask({
      id: 'Hualien-2', title: '機器人戰鬥力比對',
      description: '場上有N隻機器人參賽，每隻機器人都有一個戰鬥力數值。大會規定採取積分循環賽制：每一隻機器人都要跟場上所有其他機器人進行一對一的較量，戰鬥力比對手高得1分積分，比對手低或平手則得0分。請依照機器人的輸入順序，依序輸出這N隻機器人的總積分。',
      inputDescription: '第一行輸入整數N，第二行依序輸入N個整數代表每隻機器人的戰鬥力。',
      outputDescription: '輸出N個整數，依序為每隻機器人的總積分，以空白分隔。',
      examples: [
        { input: '3\n10 50 30', output: '0 2 1', explanation: '第1隻(10)比輸50、30得0分；第2隻(50)贏過10、30得2分；第3隻(30)贏過10、比輸50得1分。' },
        { input: '3\n10 20 30', output: '0 1 2', explanation: '依序得0分、1分、2分。' },
      ],
      difficulty: 'L3',
      note: 'N隻機器人兩兩循環比較，需要清單搭配雙層迴圈，是本次題組中複雜度較高的一題。',
      mainConcepts: ['清單'], subConcepts: ['雙層迴圈'], algorithm: ['窮舉比較'], dataStructure: ['清單'], syntax: ['for迴圈', '清單存取'], math: [], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'Hualien-3', title: '字串內的秘密數字',
      description: '壞人在傳遞的文字訊息中藏了許多數字，只要將訊息中所有的數字加總起來，就能得到解鎖金庫的密碼。請寫一個程式，幫忙計算出這個神祕的總和數字。請檢查字串中的每一個字元，如果是數字(0~9)就加入總和，英文或符號則忽略；每個數字視為個位數相加。',
      inputDescription: '輸入一個包含英文與數字的字串。',
      outputDescription: '輸出字串中所有數字字元的總和。',
      examples: [
        { input: 'A1B2C3', output: '6', explanation: '找到 1, 2, 3，總和為 6。' },
        { input: 'Key5Word2', output: '7', explanation: '找到 5, 2，總和為 7。' },
      ],
      difficulty: 'L2',
      note: '逐字元判斷是否為數字並加總，練習字元範圍比較（ASCII順序特性）。',
      mainConcepts: ['字串處理'], subConcepts: ['條件判斷'], algorithm: ['計數加總'], dataStructure: ['字串'], syntax: ['字元取出', '比較運算'], math: [], context: ['生活情境', '解謎'],
    }),
    buildTask({
      id: 'Hualien-4', title: '最佳派對地點',
      description: '有N個好朋友住在同一條筆直的大馬路上，每個人的家都有一個座標數字。他們決定舉辦一場派對，必須選在其中一個人的家裡舉辦，且所有人從自己家走到派對地點的距離總和必須是最小的。請找出最佳的舉辦地點，並算出這個最小的總距離是多少；若有多個地點距離總和一樣小，輸出座標較小的那一個。',
      inputDescription: '第一行輸入整數N，第二行依序輸入N個整數座標。',
      outputDescription: '輸出兩個整數：最佳地點的座標，以及最小的距離總和，以空白分隔。',
      examples: [
        { input: '3\n2 10 5', output: '5 8', explanation: '辦在5的距離和最小，為8。' },
        { input: '3\n1 9 3', output: '3 8', explanation: '辦在3的距離和最小，為8。' },
      ],
      difficulty: 'L3',
      note: '窮舉每個候選點計算距離總和，需要用絕對值計算距離，並處理平手時取較小座標的規則。',
      mainConcepts: ['清單'], subConcepts: ['雙層迴圈'], algorithm: ['窮舉'], dataStructure: ['清單'], syntax: ['for迴圈', '絕對值'], math: ['絕對值'], context: ['生活情境'],
    }),
  ];
  writeCourse('114EHualien.js', '114EHualien', '114-花蓮縣國小',
    '花蓮縣114學年度資科競賽國小組題目，涵蓋模擬、清單雙層迴圈與字串逐字元處理。',
    tasks);
})();

// ============ 嘉義縣 114EChaiyiC ============
(function () {
  const tasks = [
    buildTask({
      id: 'ChaiyiC-1', title: '個人綜合所得稅試算',
      description: '假設某位民眾一整年的課稅所得為固定金額（以「萬元」為單位），系統將依照下列稅率級距計算應繳的所得稅金額：所得收入1～30萬元之間，稅率為5%；所得超過30萬，前30萬扣稅15000元，31～60萬元之間的稅率為10%；所得超過60萬，前60萬扣稅45000元，61～100萬元之間的稅率為15%；所得超過100萬，前100萬扣稅105000元，101萬元以上稅率為20%。本題為教學用簡化模型，不考慮扣除額、免稅額或其他費用。',
      inputDescription: '輸入一個整數，代表個人全年課稅所得（單位：萬元，1以上）。',
      outputDescription: '輸出一個整數，代表應繳的所得稅金額（單位：元）。',
      examples: [
        { input: '20', output: '10000', explanation: '20萬元屬於1～30萬元區間，稅率5%，20×10000×0.05=10000元。' },
        { input: '55', output: '40000', explanation: '1～30萬元區間扣稅15000元，31～55萬元區間扣稅25000元，合計40000元。' },
      ],
      difficulty: 'L2',
      note: '累進稅率級距計算，練習多層條件判斷與累加公式。',
      mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['多層if'], math: ['百分比'], context: ['生活情境', '稅務'],
    }),
    buildTask({
      id: 'ChaiyiC-2', title: '跳馬比賽成績計算',
      description: '跳馬比賽為求公平性，決議去除評審中較極端的成績。比賽會依賽制等級不同，聘用五至十位不等的評審，各自給予參賽者0至10分的評價。參賽者的最終得分計算方式：讀入五至十位評審的分數（未排序），扣除最高分與最低分各一筆（若有多筆，只刪除其中一筆），將剩餘分數取平均，四捨五入至整數。',
      inputDescription: '第一行輸入整數N（5≤N≤10），第二行輸入N個整數（0～10）代表評審分數。',
      outputDescription: '輸出一個數值，代表去除最高與最低分後、四捨五入至整數的最終得分。',
      examples: [
        { input: '5\n9 8 10 6 7', output: '8', explanation: '刪除最高分10與最低分6，剩下9、8、7，平均為(9+8+7)/3=8。' },
        { input: '5\n5 5 8 9 10', output: '7', explanation: '刪除最高分10與最低分5（僅一筆），剩下5、8、9，平均為7.33，四捨五入為7。' },
      ],
      difficulty: 'L2',
      note: '【PDF題目文字與實際資料不符，已記錄於PDF題目來源勘誤紀錄.md】題目文字寫「四捨五入至小數點第三位」，但全部評審資料與範例一都是整數輸出；範例二的說明文字算式本身也有誤（除以4而非3）。判定實際規則是「四捨五入到整數」，已用全部評審資料交叉驗證確認。',
      mainConcepts: ['統計'], subConcepts: ['公式計算'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['四捨五入'], math: ['平均值'], context: ['體育競賽'],
    }),
    buildTask({
      id: 'ChaiyiC-3', title: '動態密碼轉換',
      description: '小明設計了一種英文字元密碼環編碼規則：密碼環為abcdefghijklmnopqrstuvwxyz。編碼時，字串中的每一個字元皆依密碼環往後移動N個位置；若位移後超出密碼環尾端，則從密碼環開頭繼續計算（環狀結構）。',
      inputDescription: '第一行輸入整數N（0≤N≤100），第二行輸入一個由小寫英文字母組成的字串。',
      outputDescription: '輸出一行字串，代表加密後的結果。',
      examples: [
        { input: '2\nbanana', output: 'dcpcpc', explanation: 'b→d，a→c，n→p，每個字元皆往後移動2個位置。' },
        { input: '0\nabc', output: 'abc', explanation: '位移0，字串不變。' },
      ],
      difficulty: 'L3',
      note: '凱薩密碼環狀位移，練習mod運算與字元查表對應。',
      mainConcepts: ['字串處理'], subConcepts: ['清單查表'], algorithm: ['凱薩密碼'], dataStructure: ['清單', '字串'], syntax: ['mod運算', '字元取出'], math: ['模運算'], context: ['密碼學'],
    }),
    buildTask({
      id: 'ChaiyiC-4', title: '籃球機得分計算',
      description: '雙打籃球機在每場遊戲中提供1P、2P兩位玩家5～10次不等的投籃機會。每投進1球得1分，未投進得0分。若某次投籃進球，且前一次投籃也進球，則該次投籃得3分；若進球但前一次未進球（或為第一球），則得1分。請模擬籃球機的得分計算，輸出兩位玩家單場遊戲的總得分，以及獲勝的玩家名稱（若同分則顯示「不分勝負」）。',
      inputDescription: '第一行輸入整數N（5～10），第二行輸入N個0或1代表1P玩家每次投籃是否命中，第三行輸入N個0或1代表2P玩家每次投籃是否命中。',
      outputDescription: '輸出一行：1P總分、2P總分、勝出玩家名稱，以空白分隔。',
      examples: [
        { input: '5\n1 0 1 1 0\n0 1 1 1 1', output: '5 10 2P', explanation: '1P得分1+0+1+3+0=5；2P得分0+1+3+3+3=10；2P勝出。' },
        { input: '7\n1 0 1 1 0 1 0\n0 1 1 0 1 0 1', output: '6 6 不分勝負', explanation: '兩人同分6分，不分勝負。' },
      ],
      difficulty: 'L2',
      note: '連續進球加成計分，練習追蹤前一筆狀態（streak）。',
      mainConcepts: ['迴圈'], subConcepts: ['狀態追蹤'], algorithm: ['模擬'], dataStructure: ['變數'], syntax: ['for迴圈', '條件判斷'], math: [], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'ChaiyiC-5', title: '無人搬運車運送計算',
      description: '智慧工廠中使用一輛無人搬運車（AGV），每一趟最大可承載重量為200公斤。零件依序排隊裝載，無人搬運車依序將零件放上車並累加重量。若某一件零件放上車後累計重量超過200公斤，則該零件不放入本趟車次，無人搬運車立刻出發，該零件改由下一趟車次運送。請計算無人搬運車最少需要出發幾趟。',
      inputDescription: '第一行輸入整數N代表零件件數，第二行輸入N個整數代表每件零件的重量。',
      outputDescription: '輸出一個整數，代表無人搬運車最少需要出發的趟數。',
      examples: [
        { input: '6\n50 60 40 70 90 30', output: '2', explanation: '第一趟50+60+40+70=220>200不行，改成50+60+40=150，第70件開始第二趟70+90+30=190。共2趟。' },
        { input: '5\n80 90 60 30 40', output: '2', explanation: '第一趟80+90=170，加60會超過200，出發；第二趟60+30+40=130，出發。共2趟。' },
      ],
      difficulty: 'L2',
      note: '【PDF題目文字與實際資料不符，已記錄於PDF題目來源勘誤紀錄.md】原始PDF範例一的說明文字宣稱6個數字[50,60,40,70,90,30]需要3趟，但用「累計重量嚴格大於200才拒絕裝載」的演算法交叉驗證全部5筆評審資料（含此範例本身的輸入）皆完全吻合，正確答案應為2趟，範例一的文字解說有誤。範例輸出區改用交叉驗證後的正確值。',
      mainConcepts: ['貪婪演算法'], subConcepts: ['迴圈'], algorithm: ['貪婪法'], dataStructure: ['變數'], syntax: ['for迴圈', '條件判斷'], math: [], context: ['物流情境'],
    }),
    buildTask({
      id: 'ChaiyiC-6-1', title: '寶可夢訓練師-計算平均等級',
      description: '請設計一個程式，輸入多隻寶可夢的等級，計算並輸出牠們的平均等級（無條件捨去至整數）。',
      inputDescription: '第一行輸入整數N（1≤N≤20），第二行輸入N個整數代表每隻寶可夢的等級（1≤等級≤100）。',
      outputDescription: '輸出一個整數，代表所有寶可夢等級的平均值（無條件捨去）。',
      examples: [
        { input: '4\n10 20 30 40', output: '25', explanation: '平均值=(10+20+30+40)÷4=25。' },
        { input: '3\n7 8 10', output: '8', explanation: '平均值=25÷3=8.33，無條件捨去後為8。' },
      ],
      difficulty: 'L1',
      note: '基礎平均值計算加無條件捨去，適合作為系列題的第一題。',
      mainConcepts: ['統計'], subConcepts: ['公式計算'], algorithm: ['平均值'], dataStructure: ['變數'], syntax: ['無條件捨去'], math: ['平均值'], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'ChaiyiC-6-2', title: '寶可夢訓練師-找最高等級',
      description: '請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的數值（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）。',
      inputDescription: '第一行輸入整數N（1≤N≤20），第二行輸入2N筆資料，依序為「寶可夢名稱 等級」。',
      outputDescription: '輸出一個整數，代表最高的等級數值。',
      examples: [
        { input: '3\n皮卡丘 25 小火龍 12 妙蛙種子 18', output: '25', explanation: '共有3隻寶可夢，最高等級是25（皮卡丘）。' },
        { input: '4\n傑尼龜 10 伊布 15 卡比獸 35 胖丁 2', output: '35', explanation: '共有4隻寶可夢，卡比獸等級最高（35）。' },
      ],
      difficulty: 'L1',
      note: '【PDF題目文字與實際資料不符，已記錄於PDF題目來源勘誤紀錄.md】題目文字要求輸出「等級最高的寶可夢名稱」，但全部7筆資料（2則範例＋5筆評審）實際輸出的都是等級數字本身，不是名稱。判定以資料為準，輸出最高等級的數值。',
      mainConcepts: ['統計'], subConcepts: ['最大值'], algorithm: ['最大值'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'ChaiyiC-6-3', title: '寶可夢訓練師-列出平均等級以上',
      description: '請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。',
      inputDescription: '第一行輸入整數N，第二行輸入N個寶可夢名稱及等級資料，以空白間隔。',
      outputDescription: '輸出所有等級高於平均值的寶可夢名稱，依原順序、以空白分隔；若沒有符合的則輸出空字串。',
      examples: [
        { input: '3\n皮卡丘 25 小火龍 12 妙蛙種子 18', output: '皮卡丘', explanation: '平均等級為18.33，只有皮卡丘(25)高於平均。' },
        { input: '4\n傑尼龜 10 伊布 15 卡比獸 20 胖丁 20', output: '卡比獸 胖丁', explanation: '平均等級為16.25，卡比獸與胖丁高於平均。' },
      ],
      difficulty: 'L3',
      note: '需要先讀完全部資料算出平均值，再回頭比對每一筆，練習兩個平行清單搭配二次掃描。',
      mainConcepts: ['清單'], subConcepts: ['雙重掃描'], algorithm: ['篩選'], dataStructure: ['清單'], syntax: ['for迴圈', '比較運算'], math: ['平均值'], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'ChaiyiC-6-4', title: '寶可夢訓練師-統計屬性數量',
      description: '請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。程式需依照屬性第一次出現的順序，輸出每個屬性與該屬性寶可夢數量，格式為「屬性 數量」，屬性之間以一個空白隔開；若屬性重複，只輸出一次。',
      inputDescription: '第一行輸入整數N，第二行輸入N個寶可夢屬性名稱，以空白間隔。',
      outputDescription: '依首次出現順序輸出「屬性 數量」配對，以空白分隔。',
      examples: [
        { input: '5\n火 水 火 電 水', output: '火 2 水 2 電 1', explanation: '依首次出現順序統計後輸出：火2 水2 電1。' },
        { input: '4\n草 草 毒 草', output: '草 3 毒 1', explanation: '輸出結果為：草3 毒1。' },
      ],
      difficulty: 'L3',
      note: '依首次出現順序做分組計數，練習用清單搜尋（indexOf）判斷是否為新類別。',
      mainConcepts: ['清單'], subConcepts: ['分組計數'], algorithm: ['計數統計'], dataStructure: ['清單'], syntax: ['清單搜尋'], math: [], context: ['遊戲情境'],
    }),
  ];
  writeCourse('114EChaiyiC.js', '114EChaiyiC', '114-嘉義縣國小',
    '嘉義縣114學年度國小組資訊科技競賽練習題，涵蓋公式計算、密碼學、貪婪演算法與清單分組統計。',
    tasks, 'ChaiyiC-2/ChaiyiC-5/ChaiyiC-6-2三題PDF原文與實際評審資料有出入，已交叉驗證並記錄於docs/PDF題目來源勘誤紀錄.md。');
})();

// ============ 新北市 114ENewTaipei ============
(function () {
  const tasks = [
    buildTask({
      id: 'NewTaipei-1', title: '健康小管家',
      description: '身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。',
      inputDescription: '第一行輸入身高（cm），第二行輸入體重（kg）。',
      outputDescription: '輸出BMI數值（取小數點後一位）與對應的分類等級，以空白分隔。',
      examples: [
        { input: '165\n45', output: '16.5 體重過輕', explanation: 'BMI=45/(1.65×1.65)=16.5，小於18.5，屬於體重過輕。' },
        { input: '180\n85', output: '26.2 體重過重', explanation: 'BMI=85/(1.8×1.8)=26.2，在25.0到29.9之間，屬於體重過重。' },
      ],
      difficulty: 'L2',
      note: '公式計算搭配四捨五入到小數點後一位（需用「乘10取整除10」湊出精度），再對照級距分類。',
      mainConcepts: ['公式計算'], subConcepts: ['條件判斷'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['四捨五入', '多層if'], math: ['BMI公式'], context: ['健康情境'],
    }),
    buildTask({
      id: 'NewTaipei-2', title: '鋼琴小天才計分挑戰',
      description: '比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。',
      inputDescription: '輸入7個分數（可能為小數），以空白分隔，順序可以很亂。',
      outputDescription: '輸出扣除最高與最低分後，剩餘5個分數的總和。',
      examples: [
        { input: '8 9 7 9 8 10 7', output: '41', explanation: '最高分10最低分7，7個成績總和扣除(最高及最低)：8+9+7+9+8=41。' },
        { input: '1.5 2.5 3.5 4.5 5.5 6.5 7.5', output: '22.5', explanation: '最高分7.5最低分1.5，剩餘總和2.5+3.5+4.5+5.5+6.5=22.5。' },
      ],
      difficulty: 'L1',
      note: '固定7個分數扣除一個最高一個最低後加總，可用「總和-最大值-最小值」的算術等價法。',
      mainConcepts: ['統計'], subConcepts: ['公式計算'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['競賽情境'],
    }),
    buildTask({
      id: 'NewTaipei-3', title: '幸運號碼大樂透',
      description: '玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。',
      inputDescription: '輸入玩家選擇的5個號碼，以空白分隔。',
      outputDescription: '輸出「猜中X個號碼獎金Y元」。',
      examples: [
        { input: '7 18 29 31 35', output: '猜中2個號碼獎金500元', explanation: '7與31對中本期幸運號碼，共2個號碼相同，獎金500元。' },
        { input: '1 2 3 4 5', output: '猜中0個號碼獎金0元', explanation: '沒有號碼相同，獎金0元。' },
      ],
      difficulty: 'L1',
      note: '固定的幸運號碼清單搭配對獎規則，練習清單搜尋（indexOf）判斷是否存在。',
      mainConcepts: ['清單'], subConcepts: ['條件判斷'], algorithm: ['清單搜尋'], dataStructure: ['清單'], syntax: ['清單搜尋'], math: [], context: ['生活情境', '彩券'],
    }),
    buildTask({
      id: 'NewTaipei-4', title: '小隊長的奇數號碼',
      description: '老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。',
      inputDescription: '輸入兩行，分別為起始號碼與結束號碼。',
      outputDescription: '輸出起始與結束號碼之間（含端點）所有奇數的總和。',
      examples: [
        { input: '10\n20', output: '75', explanation: '11+13+15+17+19=75。' },
        { input: '31\n39', output: '175', explanation: '31+33+35+37+39=175。' },
      ],
      difficulty: 'L1',
      note: '與台南「偶數和」概念相同，改為找奇數，並保守處理輸入順序（起始不一定比結束小）。',
      mainConcepts: ['迴圈'], subConcepts: ['條件判斷'], algorithm: ['列舉'], dataStructure: ['變數'], syntax: ['for迴圈', '餘數'], math: ['奇偶數'], context: ['數學情境'],
    }),
  ];
  writeCourse('114ENewTaipei.js', '114ENewTaipei', '114-新北市國小',
    '新北市114學年度資訊科技組參考題目，涵蓋公式計算、清單搜尋與迴圈加總。',
    tasks);
})();

// ============ 新竹市 114EHsinchu ============
(function () {
  const tasks = [
    buildTask({
      id: 'Hsinchu-1', title: '考試座位安排',
      description: '教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。',
      inputDescription: '第一行輸入兩個整數N M，第二行輸入一個整數K。',
      outputDescription: '輸出兩個整數：該學生所在的排數與在該排的位置，以空白分隔。',
      examples: [
        { input: '5 4\n7', output: '2 3', explanation: '教室有5排、每排4個位子，學生7坐在第2排第3個位子。' },
        { input: '3 5\n13', output: '3 3', explanation: '教室有3排、每排5個位子，學生13坐在第3排第3個位子。' },
      ],
      difficulty: 'L1',
      note: '座號換算成排數與位置，屬於整數除法與餘數的基礎應用。',
      mainConcepts: ['公式計算'], subConcepts: ['整數除法'], algorithm: ['公式換算'], dataStructure: ['變數'], syntax: ['無條件捨去', '餘數'], math: ['整數除法'], context: ['生活情境'],
    }),
    buildTask({
      id: 'Hsinchu-2', title: '智慧氣候監測系統-氣溫變動分析',
      description: '感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。',
      inputDescription: '第一行輸入整數N，第二行輸入N個整數代表各感測點的氣溫紀錄（可為正數、0或負數）。',
      outputDescription: '輸出一個整數，代表該組氣溫的全距（最大值減最小值）。',
      examples: [
        { input: '5\n10 50 30 20 40', output: '40', explanation: '最高溫50，最低溫10，全距=40。' },
        { input: '6\n5 8 12 3 9 3', output: '9', explanation: '含重複數值，最高12，最低3，全距9。' },
      ],
      difficulty: 'L1',
      note: '基礎最大值最小值追蹤，輸入可能包含負數。',
      mainConcepts: ['統計'], subConcepts: ['最大最小值'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['環境監測'],
    }),
    buildTask({
      id: 'Hsinchu-3', title: '快遞物流中心分類系統',
      description: '物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。',
      inputDescription: '第一行輸入整數N，第二行輸入N個整數代表每個包裹的重量。',
      outputDescription: '輸出按照裝車順序排列的包裹重量，以空白分隔。',
      examples: [
        { input: '6\n5 12 3 8 7 10', output: '3 5 7 12 10 8', explanation: '標準配送(奇數)由輕到重：3 5 7；重物配送(偶數)由重到輕：12 10 8。' },
        { input: '8\n15 20 11 6 9 14 2 13', output: '9 11 13 15 20 14 6 2', explanation: '標準配送由輕到重：9 11 13 15；重物配送由重到輕：20 14 6 2。' },
      ],
      difficulty: 'L3',
      note: '需要把資料分成奇偶兩組分別排序（一組遞增、一組遞減）再合併輸出，練習清單分類與排序演算法。',
      mainConcepts: ['清單'], subConcepts: ['排序'], algorithm: ['泡泡排序'], dataStructure: ['清單'], syntax: ['for迴圈', '清單交換'], math: ['奇偶數'], context: ['物流情境'],
    }),
    buildTask({
      id: 'Hsinchu-4', title: '寶可夢聯盟大挑戰',
      description: '小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢（已保證每隻寶可夢的戰鬥力值皆不相同）。',
      inputDescription: '第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。',
      outputDescription: '輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。',
      examples: [
        { input: '4\n皮卡丘 10 5 小火龍 7 7 傑尼龜 6 9 伊布 8 8', output: '小火龍 7 7 42', explanation: '伊布戰鬥力48最高，小火龍戰鬥力42第二高。' },
        { input: '5\n妙蛙種子 6 6 波波 5 3 可達鴨 4 7 尼多力諾 9 4 喵喵 3 3', output: '尼多力諾 9 4 26', explanation: '妙蛙種子戰鬥力36最高，尼多力諾戰鬥力26第二高。' },
      ],
      difficulty: 'L3',
      note: '需要同時記錄名稱/攻擊/防禦/戰鬥力四組平行清單，並找出「第二大值」而非最大值，是本次題組中較複雜的一題。',
      mainConcepts: ['清單'], subConcepts: ['公式計算'], algorithm: ['第二大值'], dataStructure: ['清單'], syntax: ['for迴圈', '比較運算'], math: [], context: ['遊戲情境'],
    }),
    buildTask({
      id: 'Hsinchu-5', title: '省電大作戰',
      description: '冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。',
      inputDescription: '第一行輸入整數N，第二行輸入N個0或1代表每個小時是否在房間。',
      outputDescription: '輸出一個整數，代表最少的總耗電度數。',
      examples: [
        { input: '5\n1 1 1 1 1', output: '10', explanation: '第1小時開機(5+1=6度)，第2~5小時保持開機(1×4=4度)，總共10度。' },
        { input: '8\n1 0 0 1 0 1 0 0', output: '11', explanation: '在房間時段為第1、4、6小時，中間空檔都小於5小時故保持開機，最後無行程直接關機，總計11度。' },
      ],
      difficulty: 'L4',
      note: '需要先反向掃描算出「每個時刻之後下一個必須開機的時刻」，再正向決定每個空檔要不要關機（比較保持開機的耗電與重新啟動的5度何者划算），是本次題組中演算法設計難度最高的一題。',
      mainConcepts: ['貪婪演算法'], subConcepts: ['清單'], algorithm: ['貪婪法'], dataStructure: ['清單'], syntax: ['反向迴圈', '條件判斷'], math: [], context: ['生活情境', '節能'],
    }),
    buildTask({
      id: 'Hsinchu-6', title: '數位顯示器',
      description: '七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。',
      inputDescription: '輸入一個整數N（2≤N≤30），代表可用的LED燈條數。',
      outputDescription: '輸出可組成的最大值（小於100），若不存在則輸出-1。',
      examples: [
        { input: '3', output: '7', explanation: '3條燈管可以組成數字7。' },
        { input: '7', output: '74', explanation: '7(3條)+4(4條)=7條，可組成74或47，最大為74。' },
      ],
      difficulty: 'L3',
      note: '窮舉1位數與2位數（十位不可為0、十位個位不可重複）所有組合比對燈條數，找最大值。',
      mainConcepts: ['窮舉'], subConcepts: ['清單查表'], algorithm: ['窮舉法'], dataStructure: ['清單'], syntax: ['雙層迴圈', '比較運算'], math: [], context: ['生活情境'],
    }),
  ];
  writeCourse('114EHsinchu.js', '114EHsinchu', '114-新竹市國小',
    '新竹市114學年度資訊科技組參考題目，涵蓋公式計算、排序、清單雙層迴圈與貪婪演算法，難度略高於其他縣市題組。',
    tasks);
})();

console.log('\nAll 5 course files assembled.');
