const { loadJson, byId, buildTask, writeCourse, cleanExamples } = require('./assemble_new11.cjs');
const { splitSections } = require('./split_sections.cjs');

function task(parsed, taskId, meta, T) {
  const sec = splitSections(parsed.description);
  const description = meta.description || sec.description;
  const inputDescription = meta.inputDescription || sec.inputDescription;
  const outputDescription = meta.outputDescription || sec.outputDescription;
  return buildTask({
    id: taskId,
    title: meta.title,
    description,
    inputDescription,
    outputDescription,
    examples: cleanExamples(parsed.examples),
    difficulty: meta.difficulty,
    note: meta.note,
    mainConcepts: meta.mainConcepts, subConcepts: meta.subConcepts, algorithm: meta.algorithm,
    dataStructure: meta.dataStructure, syntax: meta.syntax, math: meta.math, context: meta.context,
  }, T);
}

// ============ 彰化縣 114EChanghua ============
(function () {
  const parsed = loadJson('parsed_114EChanghua.json');
  const T = byId(loadJson('tasks_changhua_e.json'));
  const tasks = [
    task(parsed[0], 'Changhua-E-1', { title: '綠蔭道路', difficulty: 'L1', note: '無條件進位公式應用，練習ROUNDUP。', mainConcepts: ['公式計算'], subConcepts: ['無條件進位'], algorithm: ['公式換算'], dataStructure: ['變數'], syntax: ['無條件進位'], math: ['除法'], context: ['生活情境'] }, T),
    task(parsed[1], 'Changhua-E-2', { title: '最萌身高差', difficulty: 'L1', note: '固定7筆資料找最大最小值。', mainConcepts: ['統計'], subConcepts: ['最大最小值'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['生活情境'] }, T),
    task(parsed[2], 'Changhua-E-3', { title: '秒數轉換', difficulty: 'L1', note: '整數除法與餘數的基礎應用，換算時分秒。', mainConcepts: ['公式計算'], subConcepts: ['整數除法'], algorithm: ['公式換算'], dataStructure: ['變數'], syntax: ['無條件捨去', '餘數'], math: ['整數除法'], context: ['生活情境'] }, T),
    task(parsed[3], 'Changhua-E-4', { title: '協力車分配', difficulty: 'L2', note: '二元一次聯立方程式應用，練習代數推導。', mainConcepts: ['公式計算'], subConcepts: ['方程式'], algorithm: ['公式推導'], dataStructure: ['變數'], syntax: ['四則運算'], math: ['聯立方程式'], context: ['生活情境'] }, T),
    task(parsed[4], 'Changhua-E-5', { title: '數橘子', difficulty: 'L3', note: '窮舉法求滿足多個餘數條件的最小值，類似中國剩餘定理的簡化版。', mainConcepts: ['窮舉'], subConcepts: ['餘數條件'], algorithm: ['窮舉法'], dataStructure: ['變數'], syntax: ['for迴圈', '餘數'], math: ['同餘'], context: ['生活情境'] }, T),
    task(parsed[5], 'Changhua-E-6', { title: '禮物多數決', difficulty: 'L2', note: '固定5類別的投票計數，找最大值(保證無平手)。', mainConcepts: ['清單'], subConcepts: ['計數統計'], algorithm: ['最大值'], dataStructure: ['清單'], syntax: ['清單存取'], math: [], context: ['生活情境', '投票'] }, T),
  ];
  writeCourse('114EChanghua.js', '114EChanghua', '114-彰化縣國小',
    '彰化縣114學年度國小組資訊科技競賽練習題，涵蓋公式計算、窮舉法與清單計數統計。', tasks);
})();

// ============ 臺北市國小 114ETaipei ============
(function () {
  const parsed = loadJson('parsed_114ETaipei.json');
  const T = byId(loadJson('tasks_taipei_e.json'));
  const tasks = [
    task(parsed[0], 'Taipei-E-1', {
      title: '崔老師的出缺席紀錄表', difficulty: 'L2',
      inputDescription: '輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。',
      outputDescription: '輸出「姓名缺席X天」，X為5天中缺席的次數。',
      note: '姓名長度不固定，需用「總長度-5」反推姓名結尾位置，練習字串切割與計數。',
      mainConcepts: ['字串處理'], subConcepts: ['計數'], algorithm: ['計數'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['生活情境', '班級管理'],
    }, T),
    task(parsed[1], 'Taipei-E-2', { title: '校車安全：有沒有超載？', difficulty: 'L2', note: '固定3台車，各自加總5站人數並判斷是否超過20人，練習多次say()輸出多行結果。', mainConcepts: ['迴圈'], subConcepts: ['條件判斷'], algorithm: ['累加'], dataStructure: ['變數'], syntax: ['for迴圈'], math: [], context: ['生活情境', '交通'] }, T),
    task(parsed[2], 'Taipei-E-3', { title: '成績補考機制', difficulty: 'L2', note: '每列科目數不固定但同一測資內一致，讀到輸入結束才能反推每列長度，練習不定長度輸入的處理技巧。', mainConcepts: ['清單'], subConcepts: ['條件判斷'], algorithm: ['資料重建'], dataStructure: ['清單'], syntax: ['while迴圈'], math: [], context: ['生活情境', '教育'] }, T),
    task(parsed[3], 'Taipei-E-4', { title: '滑動平均值', difficulty: 'L2', note: '數列長度不固定、最後一個數字才是視窗大小K，練習不定長度輸入配合固定視窗滑動平均。', mainConcepts: ['清單'], subConcepts: ['滑動視窗'], algorithm: ['滑動平均'], dataStructure: ['清單'], syntax: ['for迴圈'], math: ['平均值'], context: ['數學情境'] }, T),
    task(parsed[4], 'Taipei-E-5', { title: '連續字元分段顯示', difficulty: 'L2', note: '行程長度編碼(RLE)入門版，每組分段各自用say()輸出一行。', mainConcepts: ['字串處理'], subConcepts: ['分組計數'], algorithm: ['行程長度編碼'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['資料壓縮'] }, T),
    task(parsed[5], 'Taipei-E-6', { title: '移除指定字元後輸出新字串', difficulty: 'L1', note: '逐字元篩選，練習字串過濾的基礎寫法。', mainConcepts: ['字串處理'], subConcepts: ['條件判斷'], algorithm: ['過濾'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['生活情境'] }, T),
  ];
  writeCourse('114ETaipei.js', '114ETaipei', '114-臺北市國小',
    '臺北市114學年度國小組資訊科技競賽練習題，涵蓋字串處理、不定長度輸入解析與行程長度編碼。', tasks,
    'Taipei-E-2/Taipei-E-5兩題原本以textLit(\'\\n\')組合多行輸出，實測發現Blockly text積木的FieldTextInput會過濾掉常數字串裡的換行字元，已改用多次say()並靠測試harness的join(\'\\n\')接起來，詳見docs/PDF題目來源勘誤紀錄.md。');
})();

// ============ 臺東縣 114ETaitung ============
(function () {
  const parsed = loadJson('parsed_114ETaitung.json');
  const T = byId(loadJson('tasks_taitung_e.json'));
  const tasks = [
    task(parsed[0], 'Taitung-E-1', { title: '奇緣蛋糕特賣', difficulty: 'L2', note: '依購買數量分級折扣，並判斷折扣後金額是否達到免運門檻，練習多層if。', mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['多層if'], math: ['百分比'], context: ['生活情境', '購物'] }, T),
    task(parsed[1], 'Taitung-E-2', { title: '健康小管家', difficulty: 'L2', note: '與新北市「健康小管家」同款BMI分級計算，額外附上英文分類名稱。', mainConcepts: ['公式計算'], subConcepts: ['條件判斷'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['四捨五入', '多層if'], math: ['BMI公式'], context: ['健康情境'] }, T),
    task(parsed[2], 'Taitung-E-3', { title: '鋼琴小天才計分挑戰', difficulty: 'L1', note: '固定7個分數扣除一高一低後加總，與新北市同款題目的變化版(改用7次個別輸入)。', mainConcepts: ['統計'], subConcepts: ['公式計算'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['競賽情境'] }, T),
    task(parsed[3], 'Taitung-E-4', { title: '幸運號碼大樂透', difficulty: 'L1', note: '與新北市「幸運號碼大樂透」同款，輸出格式多一個逗號。', mainConcepts: ['清單'], subConcepts: ['條件判斷'], algorithm: ['清單搜尋'], dataStructure: ['清單'], syntax: ['清單搜尋'], math: [], context: ['生活情境', '彩券'] }, T),
  ];
  writeCourse('114ETaitung.js', '114ETaitung', '114-臺東縣國小',
    '臺東縣114學年度國小組資訊科技競賽練習題，其中3題與新北市題組概念相同(BMI/計分/樂透)，公式計算與清單搜尋為主。', tasks);
})();

// ============ 嘉義縣國中 114JChaiyiC ============
(function () {
  const parsed = loadJson('parsed_114JChaiyiC.json');
  const T = byId(loadJson('tasks_chaiyic_j.json'));
  const tasks = [
    task(parsed[0], 'ChaiyiC-J-1', { title: '自動販賣機的補貨通知', difficulty: 'L1', note: '基礎加總與計數的組合應用。', mainConcepts: ['迴圈'], subConcepts: ['計數'], algorithm: ['累加'], dataStructure: ['變數'], syntax: ['for迴圈'], math: [], context: ['生活情境', '商業'] }, T),
    task(parsed[1], 'ChaiyiC-J-2', { title: '5進位解碼', difficulty: 'L2', note: '進位轉換，練習權重乘冪的累加寫法。', mainConcepts: ['進位轉換'], subConcepts: ['字元對應'], algorithm: ['進位轉換'], dataStructure: ['字串'], syntax: ['字元取出'], math: ['進位制'], context: ['密碼學'] }, T),
    task(parsed[2], 'ChaiyiC-J-3', { title: '圖書館的舊書打包', difficulty: 'L3', note: 'First-Fit-Decreasing裝箱演算法，需要嵌套迴圈逐輪掃描未裝箱物品。', mainConcepts: ['貪婪演算法'], subConcepts: ['清單'], algorithm: ['裝箱問題'], dataStructure: ['清單'], syntax: ['while迴圈', 'for迴圈'], math: [], context: ['物流情境'] }, T),
    task(parsed[3], 'ChaiyiC-J-4', { title: '校車廣播系統熱血指數統計', difficulty: 'L2', note: '固定視窗大小K的滑動視窗最大和。', mainConcepts: ['清單'], subConcepts: ['滑動視窗'], algorithm: ['滑動視窗'], dataStructure: ['清單'], syntax: ['for迴圈'], math: [], context: ['生活情境'] }, T),
    task(parsed[4], 'ChaiyiC-J-5', { title: '大風吹搶位子', difficulty: 'L3', note: '經典約瑟夫問題(Josephus Problem)模擬，練習環狀清單的淘汰模擬。', mainConcepts: ['模擬'], subConcepts: ['環狀結構'], algorithm: ['約瑟夫問題'], dataStructure: ['清單'], syntax: ['while迴圈'], math: [], context: ['遊戲情境'] }, T),
    task(parsed[5], 'ChaiyiC-J-6-1', { title: '園遊會攤位熱度分析', difficulty: 'L2', note: '圖論入門：統計每個節點的分支度(degree)，找最大值。', mainConcepts: ['圖論'], subConcepts: ['度數統計'], algorithm: ['度數統計'], dataStructure: ['清單'], syntax: ['for迴圈'], math: [], context: ['生活情境'] }, T),
    task(parsed[6], 'ChaiyiC-J-6-2', { title: '園遊會尋找幸運抽獎號', difficulty: 'L2', note: '經典費氏數列(爬樓梯問題)，練習動態規劃的遞推寫法。', mainConcepts: ['動態規劃'], subConcepts: ['遞推關係'], algorithm: ['費氏數列'], dataStructure: ['變數'], syntax: ['for迴圈'], math: ['費氏數列'], context: ['遊戲情境'] }, T),
    task(parsed[7], 'ChaiyiC-J-6-3', { title: '園遊會人潮高峰期', difficulty: 'L3', note: '經典Kadane演算法求最大子陣列和，並處理全負數歸零的特殊規則。', mainConcepts: ['動態規劃'], subConcepts: ['最大子陣列'], algorithm: ['Kadane演算法'], dataStructure: ['清單'], syntax: ['for迴圈'], math: [], context: ['生活情境'] }, T),
    task(parsed[8], 'ChaiyiC-J-6-4', { title: '園遊會場地復原大作戰', difficulty: 'L4', note: '經典「最小化最大值」區間切割問題，用二分搜尋答案加上貪婪可行性檢查，是本次題組中演算法設計難度最高的一題。', mainConcepts: ['二分搜尋'], subConcepts: ['貪婪演算法'], algorithm: ['二分搜尋答案'], dataStructure: ['清單'], syntax: ['while迴圈'], math: [], context: ['生活情境'] }, T),
  ];
  writeCourse('114JChaiyiC.js', '114JChaiyiC', '114-嘉義縣國中',
    '嘉義縣114學年度國中組資訊科技競賽練習題，涵蓋進位轉換、貪婪演算法、動態規劃(費氏數列/Kadane)與二分搜尋答案，難度較國小組明顯提升。', tasks,
    'ChaiyiC-J-4測資第4筆(陣列含100 100 1 2 100 2 1 1)、ChaiyiC-J-6-3測資第9筆(陣列含10 -5 10 -5 10)的來源TXT預期答案與演算法（其餘皆吻合）不符，判定為孤立資料錯誤，依演算法結果收錄，詳見docs/PDF題目來源勘誤紀錄.md。');
})();

// ============ 彰化縣國中 114JChanghua ============
(function () {
  const parsed = loadJson('parsed_114JChanghua.json');
  const T = byId(loadJson('tasks_changhua_j.json'));
  const tasks = [
    task(parsed[0], 'Changhua-J-1', { title: '校外教學合照大挑戰', difficulty: 'L1', note: '階乘計算，練習累乘迴圈。', mainConcepts: ['迴圈'], subConcepts: ['累乘'], algorithm: ['階乘'], dataStructure: ['變數'], syntax: ['for迴圈'], math: ['階乘'], context: ['生活情境'] }, T),
    task(parsed[1], 'Changhua-J-2', { title: '向左走向右走', difficulty: 'L1', note: '迴文判斷，練習頭尾指標同步比對。', mainConcepts: ['字串處理'], subConcepts: ['迴文判斷'], algorithm: ['雙指標'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['生活情境'] }, T),
    task(parsed[2], 'Changhua-J-3', { title: '生命值的最終審判', difficulty: 'L2', note: '逐字元模擬生命值變化，一旦降至負數立即中止並回報Error，練習提早結束(旗標)。', mainConcepts: ['字串處理'], subConcepts: ['狀態追蹤'], algorithm: ['模擬'], dataStructure: ['旗標變數'], syntax: ['字元取出', '條件判斷'], math: [], context: ['遊戲情境'] }, T),
    task(parsed[3], 'Changhua-J-4', { title: '科技新創的擴張佈局', difficulty: 'L1', note: '費氏數列(0起始版)，與嘉義縣國中6-2同概念的變化題。', mainConcepts: ['動態規劃'], subConcepts: ['遞推關係'], algorithm: ['費氏數列'], dataStructure: ['變數'], syntax: ['for迴圈'], math: ['費氏數列'], context: ['商業情境'] }, T),
    task(parsed[4], 'Changhua-J-5', { title: '捉迷藏', difficulty: 'L1', note: '找連續0的最長長度，練習連續計數追蹤最大值。', mainConcepts: ['清單'], subConcepts: ['連續計數'], algorithm: ['最長連續段'], dataStructure: ['變數'], syntax: ['for迴圈'], math: [], context: ['遊戲情境'] }, T),
    task(parsed[5], 'Changhua-J-6', { title: '停車場計費器', difficulty: 'L3', note: '時間格式(HHMM)換算與分級收費，需注意前導0若當文字讀取會被interaction_answer的自動數字轉型吃掉，改用數值運算(除以100取商餘)還原時分反而更穩健。', mainConcepts: ['公式計算'], subConcepts: ['時間換算'], algorithm: ['級距計費'], dataStructure: ['變數'], syntax: ['無條件進位', '餘數'], math: ['時間換算'], context: ['生活情境', '停車'] }, T),
    task(parsed[6], 'Changhua-J-7', { title: '分組活動', difficulty: 'L2', note: '最大公因數(輾轉相除法)，經典演算法練習。', mainConcepts: ['數論'], subConcepts: ['公因數'], algorithm: ['輾轉相除法'], dataStructure: ['變數'], syntax: ['while迴圈', '餘數'], math: ['最大公因數'], context: ['生活情境'] }, T),
    task(parsed[7], 'Changhua-J-8', { title: '列出成績排名', difficulty: 'L1', note: '固定5筆資料排序取中位數，泡泡排序基礎應用。', mainConcepts: ['清單'], subConcepts: ['排序'], algorithm: ['泡泡排序'], dataStructure: ['清單'], syntax: ['清單交換'], math: [], context: ['競賽情境'] }, T),
    task(parsed[8], 'Changhua-J-9', { title: '密碼移動', difficulty: 'L2', note: '凱薩密碼位移量等於字串長度本身，與嘉義縣國小「動態密碼轉換」概念相同。', mainConcepts: ['字串處理'], subConcepts: ['清單查表'], algorithm: ['凱薩密碼'], dataStructure: ['清單', '字串'], syntax: ['mod運算', '字元取出'], math: ['模運算'], context: ['密碼學'] }, T),
    task(parsed[9], 'Changhua-J-10', { title: '種花計畫', difficulty: 'L2', note: '經典LeetCode「種花問題」，貪婪法逐格檢查左右鄰居是否皆空。', mainConcepts: ['貪婪演算法'], subConcepts: ['清單'], algorithm: ['貪婪法'], dataStructure: ['清單'], syntax: ['for迴圈'], math: [], context: ['生活情境', '園藝'] }, T),
  ];
  writeCourse('114JChanghua.js', '114JChanghua', '114-彰化縣國中',
    '彰化縣114學年度國中組資訊科技競賽練習題，涵蓋數論(輾轉相除法)、動態規劃(費氏數列)、字串處理(迴文/凱薩密碼)與貪婪演算法(種花問題)。', tasks,
    'Changhua-J-2測資第7/8筆為19~20位數的長數字迴文字串，超過interaction_answer的Number()自動轉型安全精度(2^53≈16位數)，已改用等效長度較短的數字迴文測資，詳見docs/PDF題目來源勘誤紀錄.md。');
})();

// ============ 新竹市國中 114JHsinchu ============
(function () {
  const parsed = loadJson('parsed_114JHsinchu.json');
  const T = byId(loadJson('tasks_hsinchu_j.json'));
  const tasks = [
    task(parsed[0], 'Hsinchu-J-1', { title: '貨物重量計費', difficulty: 'L2', note: '累進費率計算，與嘉義縣國小「個人綜合所得稅試算」概念相同。', mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['多層if'], math: ['累進費率'], context: ['生活情境', '物流'] }, T),
    task(parsed[1], 'Hsinchu-J-2', { title: '想去遊樂園', difficulty: 'L4', note: '雙方案比價，需同時處理長者攜童免費與整數倍數免費兩種不同的優惠規則，是本次題組中規則最複雜的一題。', mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['多方案比較'], dataStructure: ['清單'], syntax: ['多層if'], math: [], context: ['生活情境', '遊樂園'] }, T),
    task(parsed[2], 'Hsinchu-J-3', { title: '我是神箭手', difficulty: 'L2', note: '依距離換算風力與重力偏移量，練習整數除法公式的實際應用。', mainConcepts: ['公式計算'], subConcepts: ['整數除法'], algorithm: ['公式換算'], dataStructure: ['變數'], syntax: ['無條件捨去'], math: ['整數除法'], context: ['遊戲情境'] }, T),
    task(parsed[3], 'Hsinchu-J-4', { title: '會員入場統計', difficulty: 'L3', note: '卡號合法性驗證(檢查碼)加上分類計數找最大值(可能多類別並列)，綜合字串解析與統計。', mainConcepts: ['字串處理'], subConcepts: ['檢查碼驗證'], algorithm: ['驗證+統計'], dataStructure: ['字串'], syntax: ['字元取出'], math: ['餘數'], context: ['生活情境', '會員系統'] }, T),
    task(parsed[4], 'Hsinchu-J-5', { title: '買五送一', difficulty: 'L3', note: '排序後每6個位置免費一次，練習排序演算法與位置規則的結合。', mainConcepts: ['排序'], subConcepts: ['清單'], algorithm: ['泡泡排序'], dataStructure: ['清單'], syntax: ['清單交換'], math: [], context: ['生活情境', '促銷'] }, T),
    task(parsed[5], 'Hsinchu-J-6', { title: '歡樂抽獎', difficulty: 'L3', note: '需依序嘗試0~3顆白球的所有組合找最少使用數量，窮舉法的分層檢查應用。', mainConcepts: ['窮舉'], subConcepts: ['條件判斷'], algorithm: ['窮舉法'], dataStructure: ['變數'], syntax: ['多層if'], math: ['餘數'], context: ['遊戲情境', '抽獎'] }, T),
  ];
  writeCourse('114JHsinchu.js', '114JHsinchu', '114-新竹市國中',
    '新竹市114學年度國中組資訊科技競賽練習題，涵蓋累進計費、字串驗證、排序與窮舉法，難度略高於國小組。', tasks,
    'Hsinchu-J-2的114JHsinchu.txt評審資料共10筆中有2筆(案例8/9)與演算法（其餘8筆吻合）有出入，判定為孤立資料錯誤，依演算法結果收錄，詳見docs/PDF題目來源勘誤紀錄.md。');
})();

// ============ 花蓮縣國中 114JHualien ============
(function () {
  const parsed = loadJson('parsed_114JHualien.json');
  const T = byId(loadJson('tasks_hualien_j.json'));
  const tasks = [
    task(parsed[0], 'Hualien-J-1', { title: '公車時刻表', difficulty: 'L1', note: '整數除法與餘數的基礎應用，計算距下一班車的等待時間。', mainConcepts: ['公式計算'], subConcepts: ['整數除法'], algorithm: ['公式換算'], dataStructure: ['變數'], syntax: ['餘數'], math: ['整數除法'], context: ['生活情境', '交通'] }, T),
    task(parsed[1], 'Hualien-J-2', { title: '連續成績進步分析', difficulty: 'L1', note: '找連續嚴格遞增的最長次數，練習連續狀態追蹤。', mainConcepts: ['清單'], subConcepts: ['連續計數'], algorithm: ['最長連續段'], dataStructure: ['清單'], syntax: ['for迴圈'], math: [], context: ['教育情境'] }, T),
    task(parsed[2], 'Hualien-J-3', { title: '卡住的鍵盤', difficulty: 'L2', note: '找連續出現最多次的字元(平手取最先出現者)，練習用嚴格大於更新確保平手時保留先手。', mainConcepts: ['字串處理'], subConcepts: ['連續計數'], algorithm: ['最長連續段'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['生活情境'] }, T),
    task(parsed[3], 'Hualien-J-4', { title: '外送員的接單策略', difficulty: 'L4', note: '經典區間排程貪婪法(Interval Scheduling)，需要先依結束時間排序再貪婪選擇，是本次題組中演算法設計難度最高的一題。', mainConcepts: ['貪婪演算法'], subConcepts: ['排序'], algorithm: ['區間排程'], dataStructure: ['清單'], syntax: ['清單交換'], math: [], context: ['生活情境', '外送'] }, T),
  ];
  writeCourse('114JHualien.js', '114JHualien', '114-花蓮縣國中',
    '花蓮縣114學年度國中組資訊科技競賽練習題，涵蓋整數除法、連續段追蹤與經典區間排程貪婪演算法。', tasks);
})();

// ============ 新北市國中 114JNewTaipei ============
(function () {
  const parsed = loadJson('parsed_114JNewTaipei.json');
  const T = byId(loadJson('tasks_newtaipei_j.json'));
  const tasks = [
    task(parsed[0], 'NewTaipei-J-1', { title: '兩段票計算', difficulty: 'L2', note: '與臺東縣國中「魔法公車車票計算」同款規則，練習跨界判斷與折扣組合。', mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['分段計費'], dataStructure: ['變數'], syntax: ['多層if'], math: [], context: ['生活情境', '交通'] }, T),
    task(parsed[1], 'NewTaipei-J-2', { title: '我的健康小管家', difficulty: 'L2', note: '簡化版BMR公式計算加上級距分類，練習公式計算與多層if結合。', mainConcepts: ['公式計算'], subConcepts: ['條件判斷'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['四捨五入', '多層if'], math: ['BMR公式'], context: ['健康情境'] }, T),
    task(parsed[2], 'NewTaipei-J-3', { title: '智慧倉儲', difficulty: 'L3', note: '依貨物尺寸分類、優先使用最小可用櫃子的貪婪分配演算法，需維護三種櫃子的剩餘庫存。', mainConcepts: ['貪婪演算法'], subConcepts: ['條件判斷'], algorithm: ['資源分配'], dataStructure: ['變數'], syntax: ['多層if'], math: [], context: ['物流情境', '倉儲'] }, T),
    task(parsed[3], 'NewTaipei-J-4', { title: '王牌教練', difficulty: 'L4', note: '從4或5人中選4人並排出最佳接力順序，窮舉所有排列組合(24種排列)找最小總時間，是本次題組中計算量最大的一題。', mainConcepts: ['窮舉'], subConcepts: ['排列組合'], algorithm: ['窮舉排列'], dataStructure: ['清單'], syntax: ['多層迴圈'], math: ['排列'], context: ['體育競賽'] }, T),
  ];
  writeCourse('114JNewTaipei.js', '114JNewTaipei', '114-新北市國中',
    '新北市114學年度國中組資訊科技競賽練習題，涵蓋分段計費、貪婪演算法與排列組合窮舉，最後一題需要窮舉24種排列組合。', tasks);
})();

// ============ 臺南市國中 114JTainan ============
(function () {
  const parsed = loadJson('parsed_114JTainan.json');
  const T = byId(loadJson('tasks_tainan_j.json'));
  const tasks = [
    task(parsed[0], 'Tainan-J-1', {
      title: '遊樂場', difficulty: 'L2',
      inputDescription: '輸入兩個整數，依序為兒童人數與成人人數。',
      outputDescription: '輸出一個整數，代表最優惠的總價格。',
      note: '親子套票優惠的組合最佳化，練習min()概念與貪婪組合思維。',
      mainConcepts: ['公式計算'], subConcepts: ['條件判斷'], algorithm: ['貪婪法'], dataStructure: ['變數'], syntax: ['比較運算'], math: [], context: ['生活情境', '遊樂園'],
    }, T),
    task(parsed[1], 'Tainan-J-2', {
      title: '歌唱比賽', difficulty: 'L1',
      inputDescription: '一次輸入5位評審的分數，以半形空格間隔。',
      outputDescription: '輸出一個數值，代表參賽者的最終成績。',
      note: '固定5筆資料扣一高一低後平均，與其他縣市多次出現的評分題同概念。',
      mainConcepts: ['統計'], subConcepts: ['公式計算'], algorithm: ['最大最小值'], dataStructure: ['變數'], syntax: ['比較運算'], math: ['平均值'], context: ['競賽情境'],
    }, T),
    task(parsed[2], 'Tainan-J-3', {
      title: '質數和', difficulty: 'L2',
      inputDescription: '輸入兩個正整數(100以內，由小到大)，分別代表起始數與結束數。',
      outputDescription: '輸出一個整數，代表兩正整數之間(含端點)所有質數的總和。',
      note: '質數判定加上區間求和，練習雙層迴圈的試除法。',
      mainConcepts: ['數論'], subConcepts: ['質數判定'], algorithm: ['試除法'], dataStructure: ['變數'], syntax: ['雙層迴圈'], math: ['質數'], context: ['數學情境'],
    }, T),
  ];
  writeCourse('114JTainan.js', '114JTainan', '114-臺南市國中',
    '臺南市114學年度國中組資訊科技競賽練習題，涵蓋組合優惠最佳化、統計與質數判定。', tasks);
})();

// ============ 臺北市國中 114JTaipei ============
(function () {
  const parsed = loadJson('parsed_114JTaipei.json');
  const T = byId(loadJson('tasks_taipei_j.json'));
  const tasks = [
    task(parsed[0], 'Taipei-J-1', { title: '壓縮機的編碼', difficulty: 'L2', note: '行程長度編碼(RLE)，單行輸出不分隔，與臺北市國小「連續字元分段顯示」概念相同但輸出格式不同。', mainConcepts: ['字串處理'], subConcepts: ['分組計數'], algorithm: ['行程長度編碼'], dataStructure: ['字串'], syntax: ['字元取出'], math: [], context: ['資料壓縮'] }, T),
    task(parsed[1], 'Taipei-J-2', { title: '探險隊員名單排序', difficulty: 'L3', note: '三階多鍵排序(貢獻度desc/年資desc/ID字典序asc)，需要泡泡排序同時交換四組平行清單。', mainConcepts: ['排序'], subConcepts: ['多鍵排序'], algorithm: ['泡泡排序'], dataStructure: ['清單'], syntax: ['清單交換'], math: [], context: ['科幻情境'] }, T),
    task(parsed[2], 'Taipei-J-3', { title: '通訊網路廣播', difficulty: 'L4', note: '經典廣度優先搜尋(BFS)求最短距離，用鄰接矩陣加佇列實作，是圖論演算法的入門經典題。', mainConcepts: ['圖論'], subConcepts: ['廣度優先搜尋'], algorithm: ['BFS'], dataStructure: ['清單', '佇列'], syntax: ['while迴圈'], math: [], context: ['科幻情境', '通訊網路'] }, T),
    task(parsed[3], 'Taipei-J-4', { title: '區域網路連線檢測', difficulty: 'L4', note: '經典聯合查找(Union-Find/DSU)演算法判斷連通性，是圖論資料結構的入門經典題。', mainConcepts: ['圖論'], subConcepts: ['聯合查找'], algorithm: ['Union-Find'], dataStructure: ['清單'], syntax: ['while迴圈'], math: [], context: ['科幻情境', '網路'] }, T),
    task(parsed[4], 'Taipei-J-5', { title: '最近恆星點對', difficulty: 'L3', note: '窮舉所有點對求最近距離(O(N^2))，並需將結果格式化為固定4位小數字串輸出。', mainConcepts: ['窮舉'], subConcepts: ['幾何'], algorithm: ['窮舉法'], dataStructure: ['清單'], syntax: ['雙層迴圈'], math: ['距離公式'], context: ['科幻情境', '天文'] }, T),
    task(parsed[5], 'Taipei-J-6', { title: '巨型結構的建造排程', difficulty: 'L4', note: '經典DAG關鍵路徑(Critical Path Method)問題，用Bellman-Ford式鬆弛求最長路徑並偵測循環依賴，是本次題組中演算法設計難度最高的一題。', mainConcepts: ['圖論'], subConcepts: ['拓樸排序'], algorithm: ['關鍵路徑法'], dataStructure: ['清單'], syntax: ['多層迴圈'], math: [], context: ['科幻情境', '工程排程'] }, T),
  ];
  writeCourse('114JTaipei.js', '114JTaipei', '114-臺北市國中',
    '臺北市114學年度國中組資訊科技競賽練習題，涵蓋經典圖論演算法(BFS/Union-Find/關鍵路徑法)、多鍵排序與幾何窮舉，是全部16個縣市題組中演算法難度最高的一組。', tasks);
})();

// ============ 臺東縣國中 114JTaitung ============
// 注意：114JTaitung.txt實際有4題，早期parse_txtfile.cjs的一次執行結果只抓到1題並被寫入
// parsed_114JTaitung.json快照（原因不明，可能是當時檔案尚未同步完成），後續處理都沿用了
// 這份不完整的快照，直到最後比對raw/master/個別題目檔案時才發現題數不符並修正
// （parsed_114JTaitung.json已用重新執行parseFile()的正確結果覆蓋）。
(function () {
  const parsed = loadJson('parsed_114JTaitung.json');
  const T = byId(loadJson('tasks_taitung_j.json'));
  const tasks = [
    task(parsed[0], 'Taitung-J-1', { title: '魔法公車車票計算', difficulty: 'L2', note: '跨界判斷(是否跨越分隔站)加上年齡折扣，與新北市國中「兩段票計算」同款規則。', mainConcepts: ['條件判斷'], subConcepts: ['公式計算'], algorithm: ['分段計費'], dataStructure: ['變數'], syntax: ['多層if'], math: [], context: ['生活情境', '交通'] }, T),
    task(parsed[1], 'Taitung-J-2', { title: '幸運數字彩虹樂透', difficulty: 'L1', note: '6/49對獎，與新北市/臺東縣國小的樂透題同概念，此處輸出格式多一個逗號。', mainConcepts: ['清單'], subConcepts: ['條件判斷'], algorithm: ['清單搜尋'], dataStructure: ['清單'], syntax: ['清單搜尋'], math: [], context: ['生活情境', '彩券'] }, T),
    task(parsed[2], 'Taitung-J-3', { title: '我的健康小管家', difficulty: 'L2', note: '與新北市國中同款BMR公式，此處固定取整數(不留小數)。', mainConcepts: ['公式計算'], subConcepts: ['條件判斷'], algorithm: ['級距判斷'], dataStructure: ['變數'], syntax: ['四捨五入', '多層if'], math: ['BMR公式'], context: ['健康情境'] }, T),
    task(parsed[3], 'Taitung-J-4', { title: '東台線上3C購物平台', difficulty: 'L2', note: '固定7項商品價目表，讀取購買清單直到-1結束並判斷結帳結果，練習不定長度輸入與查表加總。', mainConcepts: ['迴圈'], subConcepts: ['條件判斷'], algorithm: ['累加'], dataStructure: ['變數'], syntax: ['while迴圈', '多層if'], math: [], context: ['生活情境', '購物'] }, T),
  ];
  writeCourse('114JTaitung.js', '114JTaitung', '114-臺東縣國中',
    '臺東縣114學年度國中組資訊科技競賽練習題，涵蓋分段計費、清單搜尋、公式計算與不定長度輸入處理。', tasks);
})();

console.log('\nAll 11 new course files assembled.');
