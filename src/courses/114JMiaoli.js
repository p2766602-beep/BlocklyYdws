// Hand-authored by Claude from YDWS-CodingBank/txtFile/114JMiaoli.txt，每題starterXml皆用
// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。

const course = {
  "code": "114JMiaoli",
  "title": "114-苗栗縣國中",
  "type": "programming",
  "mode": "learning",
  "description": "114-苗栗縣國中114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-31T12:29:59.258Z",
    "sourceTxt": "txtFile/114JMiaoli.txt",
    "version": "manual-blockly-build-verified"
  },
  "tasks": [
    {
      "id": "114JMiaoli-1",
      "title": "1-罰寫位數",
      "problemTitle": "1-罰寫位數",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "有許多人在班上吵鬧，老師非常生氣，於是只好命令全班罰寫：從正整數1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21...... 這樣依序寫下去，直到天荒地老，這樣大家就再也不會吵鬧了。\n大家寫著寫著，老師非常好奇，想要知道：假設大家都乖乖罰寫，在已經寫下一些數字後，接下來的三個數字是多少呢？在此只看連續寫下的連續阿拉伯數字部分，忽略數字之間的所有分隔與符號，則寫起來會長得像是123456789101112131415161718192021 ...\n舉例來說，如果大家已經寫下了8個數字，也就是12345678，那麼接下來出現的三個數字就是910。如果大家已經寫下了18個數字，也就是123456789101112131，那麼接下來出現的三個數字就是415。\n請使用 Scratch 撰寫一個程式專案，幫老師計算接下來出現的三個數字。\n【輸入格式】\n「詢問...並等待」第一次後，「詢問的答案」會得到整數：大家已經寫下了幾個數字。\n• 已經寫下的數字至少1個，至多10000個。\n【輸出格式】\n回答恰好一次，請回答接下來的三個數字，中間不可以有空格或任何其他符號，「說出」接下來出現的三個數字，如上述說明。(僅需輸出該字串)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "有許多人在班上吵鬧，老師非常生氣，於是只好命令全班罰寫：從正整數1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21...... 這樣依序寫下去，直到天荒地老，這樣大家就再也不會吵鬧了。\n大家寫著寫著，老師非常好奇，想要知道：假設大家都乖乖罰寫，在已經寫下一些數字後，接下來的三個數字是多少呢？在此只看連續寫下的連續阿拉伯數字部分，忽略數字之間的所有分隔與符號，則寫起來會長得像是123456789101112131415161718192021 ...\n舉例來說，如果大家已經寫下了8個數字，也就是12345678，那麼接下來出現的三個數字就是910。如果大家已經寫下了18個數字，也就是123456789101112131，那麼接下來出現的三個數字就是415。\n請使用 Scratch 撰寫一個程式專案，幫老師計算接下來出現的三個數字。\n【輸入格式】\n「詢問...並等待」第一次後，「詢問的答案」會得到整數：大家已經寫下了幾個數字。\n• 已經寫下的數字至少1個，至多10000個。\n【輸出格式】\n回答恰好一次，請回答接下來的三個數字，中間不可以有空格或任何其他符號，「說出」接下來出現的三個數字，如上述說明。(僅需輸出該字串)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "8",
          "output": "910",
          "explanation": "程式詢問任意文字並等待一次，得到回答8。\n程式經過運算後，答案是三個數字910，所以用「說出」積木回答，說出910。"
        },
        {
          "input": "18",
          "output": "415",
          "explanation": "程式詢問任意文字並等待一次，得到回答 18。\n程式經過運算後，答案是三個數字415，所以用「說出」積木回答，說出415。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j1_n\">N</variable><variable id=\"j1_stream\">STREAM</variable><variable id=\"j1_k\">K</variable><variable id=\"j1_c1\">C1</variable><variable id=\"j1_c2\">C2</variable><variable id=\"j1_c3\">C3</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入已經寫下的數字個數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_k\">K</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_k\">K</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_k\">K</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_k\">K</field></block></value></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_c1\">C1</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_c2\">C2</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j1_c3\">C3</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_stream\">STREAM</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_c1\">C1</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_c2\">C2</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j1_c3\">C3</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "8",
          "expectedOutput": "910",
          "score": 10
        },
        {
          "input": "18",
          "expectedOutput": "415",
          "score": 10
        },
        {
          "input": "1",
          "expectedOutput": "234",
          "score": 10
        },
        {
          "input": "9",
          "expectedOutput": "101",
          "score": 10
        },
        {
          "input": "10",
          "expectedOutput": "011",
          "score": 10
        },
        {
          "input": "11",
          "expectedOutput": "111",
          "score": 10
        },
        {
          "input": "12",
          "expectedOutput": "112",
          "score": 10
        },
        {
          "input": "15",
          "expectedOutput": "131",
          "score": 10
        },
        {
          "input": "189",
          "expectedOutput": "100",
          "score": 10
        },
        {
          "input": "2889",
          "expectedOutput": "100",
          "score": 10
        }
      ]
    },
    {
      "id": "114JMiaoli-2",
      "title": "2-誰沒上學",
      "problemTitle": "2-誰沒上學",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "期待已久的寒假終於快要開始了！但是今天班上有一個同學沒有來上學考試，也沒有請假。\n老師迷迷糊糊，已經分不清楚是誰沒來了，於是決定舉辦一場小考，這樣就能知道是誰沒有來。\n收回考卷後，老師發現大事不妙：所有人的座號亂成一團，很難直接看出來是少了哪一個座號。\n這個班級的座號從1開始，依照1,2,3,... 順序編下去，中間不會有跳號，直到最後一號，也就是班級的總人數。請使用Scratch 撰寫一個程式專案，根據所有來上學考試的考卷上寫的座號，幫老師找出是誰沒有來上學考試。\n【輸入格式】\n先詢問班級的總人數，使用「詢問...並等待」一次取得輸入：\n• 「詢問...並等待」一次後，這次「詢問的答案」會得到：班級的總人數。(2~20人)\n接著繼續使用「詢問...並等待」取得每張考卷上寫的座號，次數比「班級的總人數」少一次：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一張考卷上寫的座號。\n• 考卷上不會寫不存在的座號，也不會重複。\n【輸出格式】\n回答恰好一次，「說出」沒有來上學考試的座號。(僅需輸出該座號)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "期待已久的寒假終於快要開始了！但是今天班上有一個同學沒有來上學考試，也沒有請假。\n老師迷迷糊糊，已經分不清楚是誰沒來了，於是決定舉辦一場小考，這樣就能知道是誰沒有來。\n收回考卷後，老師發現大事不妙：所有人的座號亂成一團，很難直接看出來是少了哪一個座號。\n這個班級的座號從1開始，依照1,2,3,... 順序編下去，中間不會有跳號，直到最後一號，也就是班級的總人數。請使用Scratch 撰寫一個程式專案，根據所有來上學考試的考卷上寫的座號，幫老師找出是誰沒有來上學考試。\n【輸入格式】\n先詢問班級的總人數，使用「詢問...並等待」一次取得輸入：\n• 「詢問...並等待」一次後，這次「詢問的答案」會得到：班級的總人數。(2~20人)\n接著繼續使用「詢問...並等待」取得每張考卷上寫的座號，次數比「班級的總人數」少一次：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一張考卷上寫的座號。\n• 考卷上不會寫不存在的座號，也不會重複。\n【輸出格式】\n回答恰好一次，「說出」沒有來上學考試的座號。(僅需輸出該座號)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "4\n3\n2\n4",
          "output": "1",
          "explanation": "得到回答4，表示「班級的總人數」為4，也就是說全班有4人，座號分別是1,2,3,4。\n繼續詢問總共3次。第一次得到回答3，表示座號3有來上學考試；第二次得到回答2，表示座號2有來上學考試；第三次得到回答4，表示座號4有來上學考試。\n程式經過計算後，得出沒有來上學考試的是座號1，所以用「說出」積木回答，說出1。"
        },
        {
          "input": "5\n1\n2\n3\n4",
          "output": "5",
          "explanation": "得到回答5，表示「班級的總人數」為5，全班有5人，座號分別是1,2,3,4,5。\n繼續詢問總共4次。分別得到回答1、2、3、4。\n得出沒有來上學考試的是座號5，所以用「說出」積木回答，說出5。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j2_n\">N</variable><variable id=\"j2_sum\">SUM</variable><variable id=\"j2_i\">i</variable><variable id=\"j2_v\">V</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入班級總人數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j2_sum\">SUM</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入考卷座號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j2_v\">V</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j2_sum\">SUM</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_sum\">SUM</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_v\">V</field></block></value></block></value></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_n\">N</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j2_sum\">SUM</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "4\n3\n2\n4",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "5\n1\n2\n3\n4",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "3\n2\n3",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "6\n6\n5\n4\n3\n1",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "7\n7\n6\n4\n3\n2\n1",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "2\n1",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "2\n2",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "8\n8\n6\n5\n4\n3\n2\n1",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "9\n8\n7\n6\n5\n4\n3\n2\n1",
          "expectedOutput": "9",
          "score": 10
        },
        {
          "input": "10\n10\n9\n8\n6\n5\n4\n3\n2\n1",
          "expectedOutput": "7",
          "score": 10
        }
      ]
    },
    {
      "id": "114JMiaoli-3",
      "title": "3-借位運算",
      "problemTitle": "3-借位運算",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "數學老師發現大家算數時常常粗心大意，連基本的加減法都不太熟...於是老師決定出一大堆減法的練習題給大家來練習，由於總是有偷懶的學生使用計算機幫忙算，這樣就沒有練習到了，所以老師要求只需要回答進行減法運算中，發生借位(亦稱退位)的次數。\n在直式減法中，依位數由低位到高位逐位相減。若某一位的被減數(該位上的數字)小於減數(該位上的數字)，則需向左邊相鄰的高一位借1。借位時，高一位的數字減少1；同時因為十進位制中「1個高一位=10個本位」，本位的被減數增加10，使本位得以完成相減。上述「向左邊高一位借1，並在本位增加10」的處理，稱為「借位」。\n「借位的次數」定義為：在完成整個直式減法的計算過程中，因為某一位被減數小於減數而發生「向左邊高一位借1」之動作的總次數。若出現連續借位(例如中間位數為0而需再向更高位借)，每一次實際發生的「借1」動作均各計為1次，借位次數為其累計。\n舉例來說，當計算1000減1時，總共發生了3次借位；而計算2025減37時，總共也發生了3次借位；但是計算2025減17時，總共只發生了1次借位。\n【輸入格式】\n「詢問...並等待」第一次後，這次「詢問的答案」會得到：被減數。(1~1000000)\n「詢問...並等待」第二次後，這次「詢問的答案」會得到：減數。(1~1000000)\n被減數必定大於減數。\n【輸出格式】\n回答恰好一次，「說出」總共發生幾次借位。(僅需輸出數字)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "數學老師發現大家算數時常常粗心大意，連基本的加減法都不太熟...於是老師決定出一大堆減法的練習題給大家來練習，由於總是有偷懶的學生使用計算機幫忙算，這樣就沒有練習到了，所以老師要求只需要回答進行減法運算中，發生借位(亦稱退位)的次數。\n在直式減法中，依位數由低位到高位逐位相減。若某一位的被減數(該位上的數字)小於減數(該位上的數字)，則需向左邊相鄰的高一位借1。借位時，高一位的數字減少1；同時因為十進位制中「1個高一位=10個本位」，本位的被減數增加10，使本位得以完成相減。上述「向左邊高一位借1，並在本位增加10」的處理，稱為「借位」。\n「借位的次數」定義為：在完成整個直式減法的計算過程中，因為某一位被減數小於減數而發生「向左邊高一位借1」之動作的總次數。若出現連續借位(例如中間位數為0而需再向更高位借)，每一次實際發生的「借1」動作均各計為1次，借位次數為其累計。\n舉例來說，當計算1000減1時，總共發生了3次借位；而計算2025減37時，總共也發生了3次借位；但是計算2025減17時，總共只發生了1次借位。\n【輸入格式】\n「詢問...並等待」第一次後，這次「詢問的答案」會得到：被減數。(1~1000000)\n「詢問...並等待」第二次後，這次「詢問的答案」會得到：減數。(1~1000000)\n被減數必定大於減數。\n【輸出格式】\n回答恰好一次，「說出」總共發生幾次借位。(僅需輸出數字)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "1000\n1",
          "output": "3",
          "explanation": "得到回答1000，表示「被減數」為1000。\n得到回答1，表示「減數」為1。\n程式經過計算後，得出減法總共發生了三次借位，所以用「說出」積木回答，說出3。"
        },
        {
          "input": "2025\n37",
          "output": "3",
          "explanation": "計算2025減37時，總共發生了3次借位。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j3_a\">A</variable><variable id=\"j3_b\">Bn</variable><variable id=\"j3_borrow\">BORROW</variable><variable id=\"j3_count\">COUNT</variable><variable id=\"j3_da\">DA</variable><variable id=\"j3_db\">DB</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入被減數A</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_a\">A</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入減數B</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_b\">Bn</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_borrow\">BORROW</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_count\">COUNT</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_a\">A</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_b\">Bn</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_da\">DA</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_a\">A</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_db\">DB</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_b\">Bn</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_borrow\">BORROW</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_da\">DA</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_db\">DB</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_borrow\">BORROW</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_count\">COUNT</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_count\">COUNT</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_borrow\">BORROW</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_a\">A</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_a\">A</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j3_b\">Bn</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_b\">Bn</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j3_count\">COUNT</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "1000\n1",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "2025\n37",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "2025\n17",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "100\n1",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "999\n998",
          "expectedOutput": "0",
          "score": 10
        },
        {
          "input": "101\n2",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "1000000\n1",
          "expectedOutput": "6",
          "score": 10
        },
        {
          "input": "505\n16",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "3000\n2999",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "1234\n987",
          "expectedOutput": "3",
          "score": 10
        }
      ]
    },
    {
      "id": "114JMiaoli-4",
      "title": "4-教室進出",
      "problemTitle": "4-教室進出",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "在一個偌大的禮堂中，人潮進進出出。為了安全起見，老師指派一個學生守著出入口，每當有人進入或離開，就記錄下來，這樣就可以從記錄中，得到禮堂中總共有多少人。\n禮堂一開始沒有人，每當有人進入時，這位學生就會在紙上多寫下英文字母A；每當有人離開時，這位學生就會在紙上多寫下英文字母B。這張紙上的字母一定依序寫下，不會被擦除。除此之外，紙上不會有其他的東西。\n舉例來說，如果現在紙上寫著AAABABB，那麼老師就可以知道：現在禮堂中總共有一個人；另外，如果現在紙上寫著ABAB，那麼老師就可以知道現在禮堂中沒有人。\n但是這個學生偶爾會出槌，寫出不可能發生的紀錄，像是如果紙上寫著ABBAA，那麼我們應該直接認定這個學生的記錄發生過錯誤，因為在任何時候，離開的次數都不可能超過進入的次數，所以就不應該再相信這份紀錄了。\n【輸入格式】\n「詢問...並等待」一次後，這次「詢問的答案」會得到現在紙上寫著什麼。\n• 紙上的紀錄長度在1至100之間。\n• 紙上只會有英文字母A與B。\n【輸出格式】\n總共回答恰好一次。\n• 如果記錄發生過錯誤，請輸出全大寫的英文單詞ERR，「說出」ERR三個字母。\n• 如果記錄沒有發生過錯誤，請輸出禮堂中現在總共有多少人，「說出」禮堂中的人數。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "在一個偌大的禮堂中，人潮進進出出。為了安全起見，老師指派一個學生守著出入口，每當有人進入或離開，就記錄下來，這樣就可以從記錄中，得到禮堂中總共有多少人。\n禮堂一開始沒有人，每當有人進入時，這位學生就會在紙上多寫下英文字母A；每當有人離開時，這位學生就會在紙上多寫下英文字母B。這張紙上的字母一定依序寫下，不會被擦除。除此之外，紙上不會有其他的東西。\n舉例來說，如果現在紙上寫著AAABABB，那麼老師就可以知道：現在禮堂中總共有一個人；另外，如果現在紙上寫著ABAB，那麼老師就可以知道現在禮堂中沒有人。\n但是這個學生偶爾會出槌，寫出不可能發生的紀錄，像是如果紙上寫著ABBAA，那麼我們應該直接認定這個學生的記錄發生過錯誤，因為在任何時候，離開的次數都不可能超過進入的次數，所以就不應該再相信這份紀錄了。\n【輸入格式】\n「詢問...並等待」一次後，這次「詢問的答案」會得到現在紙上寫著什麼。\n• 紙上的紀錄長度在1至100之間。\n• 紙上只會有英文字母A與B。\n【輸出格式】\n總共回答恰好一次。\n• 如果記錄發生過錯誤，請輸出全大寫的英文單詞ERR，「說出」ERR三個字母。\n• 如果記錄沒有發生過錯誤，請輸出禮堂中現在總共有多少人，「說出」禮堂中的人數。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "AAABABB",
          "output": "1",
          "explanation": "得到回答 AAABABB 表示「紙上的紀錄」為AAABABB。\n程式經過計算，判定沒有發生錯誤且禮堂內總共有1人，所以用「說出」積木回答，說出1。"
        },
        {
          "input": "ABBAA",
          "output": "ERR",
          "explanation": "得到回答 ABBAA 表示「紙上的紀錄」為ABBAA。\n程式經過計算，判定有發生錯誤，所以用「說出」積木回答，說出ERR。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j4_s\">S</variable><variable id=\"j4_len\">LEN</variable><variable id=\"j4_cur\">CUR</variable><variable id=\"j4_err\">ERR</variable><variable id=\"j4_i\">i</variable><variable id=\"j4_ch\">CH</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入紙上紀錄</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_s\">S</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_len\">LEN</field><value name=\"VALUE\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_s\">S</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_cur\">CUR</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_err\">ERR</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_len\">LEN</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_ch\">CH</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_s\">S</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_i\">i</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_ch\">CH</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_cur\">CUR</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_cur\">CUR</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_cur\">CUR</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_cur\">CUR</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_cur\">CUR</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j4_err\">ERR</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_err\">ERR</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j4_cur\">CUR</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "AAABABB",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "ABBAA",
          "expectedOutput": "ERR",
          "score": 10
        },
        {
          "input": "ABAB",
          "expectedOutput": "0",
          "score": 10
        },
        {
          "input": "A",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "B",
          "expectedOutput": "ERR",
          "score": 10
        },
        {
          "input": "AABA",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "AAABBB",
          "expectedOutput": "0",
          "score": 10
        },
        {
          "input": "AABBBA",
          "expectedOutput": "ERR",
          "score": 10
        },
        {
          "input": "AAAAAAAAAA",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "AABBAABB",
          "expectedOutput": "0",
          "score": 10
        }
      ]
    },
    {
      "id": "114JMiaoli-5",
      "title": "5-木材切割",
      "problemTitle": "5-木材切割",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "為了讓學生參與木工創作，老師從學校砍了一些直徑相同、但是長度不一定相同的一些樹枝下來。為了把這些樹枝做成一致的材料，老師決定把其中一些樹枝切割成一些小段教學用木材。為了方便教學，最終得到的每一段教學用木材長度必須完全一樣，且不同的樹枝不能接合。如果樹枝切割後，還有剩餘未用畢的部分，或是不需要使用的樹枝，就直接埋回土裡即可。\n由於每位學生都必須得到一段教學用木材，老師正在苦惱著：如果每一段的長度太長，那樹枝無論怎麼切割都不夠用；如果每一段的長度太短，那有點浪費這些樹枝。該如何是好呢？\n你已經自告奮勇，幫忙老師測量好每一根樹枝的長度，請使用Scratch 撰寫一個程式專案，幫忙老師找出最長的教學用木材長度，但是要保證每個學生都可以拿到一根。為了測量方便，樹枝的長度以及教學用木材的長度都必須是整數。\n【輸入格式】\n「詢問...並等待」第一次後，這次「詢問的答案」會得到：學生的人數。(1~100人)\n「詢問...並等待」第二次後，這次「詢問的答案」會得到：樹枝的數量。(1~100根)\n接著繼續使用「詢問...並等待」取得每根樹枝的長度，次數與「樹枝的數量」相同。\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一根樹枝的長度，一定是正整數，不超過10000單位。最終保證至少能讓每位學生拿到一段長度為1的木材。\n【輸出格式】\n回答恰好一次，「說出」最長的教學用木材的長度。(僅需輸出數字)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "為了讓學生參與木工創作，老師從學校砍了一些直徑相同、但是長度不一定相同的一些樹枝下來。為了把這些樹枝做成一致的材料，老師決定把其中一些樹枝切割成一些小段教學用木材。為了方便教學，最終得到的每一段教學用木材長度必須完全一樣，且不同的樹枝不能接合。如果樹枝切割後，還有剩餘未用畢的部分，或是不需要使用的樹枝，就直接埋回土裡即可。\n由於每位學生都必須得到一段教學用木材，老師正在苦惱著：如果每一段的長度太長，那樹枝無論怎麼切割都不夠用；如果每一段的長度太短，那有點浪費這些樹枝。該如何是好呢？\n你已經自告奮勇，幫忙老師測量好每一根樹枝的長度，請使用Scratch 撰寫一個程式專案，幫忙老師找出最長的教學用木材長度，但是要保證每個學生都可以拿到一根。為了測量方便，樹枝的長度以及教學用木材的長度都必須是整數。\n【輸入格式】\n「詢問...並等待」第一次後，這次「詢問的答案」會得到：學生的人數。(1~100人)\n「詢問...並等待」第二次後，這次「詢問的答案」會得到：樹枝的數量。(1~100根)\n接著繼續使用「詢問...並等待」取得每根樹枝的長度，次數與「樹枝的數量」相同。\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一根樹枝的長度，一定是正整數，不超過10000單位。最終保證至少能讓每位學生拿到一段長度為1的木材。\n【輸出格式】\n回答恰好一次，「說出」最長的教學用木材的長度。(僅需輸出數字)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "3\n1\n101",
          "output": "33",
          "explanation": "得到回答3，表示「學生的人數」為3，也就是總共有3位學生。\n得到回答1，表示「樹枝的數量」為1，也就是只有一根樹枝。\n得到回答101，表示樹枝的長度為101。\n程式經過計算後，得出最長的教學用木材的長度是33，所以用「說出」積木回答，說出33。"
        },
        {
          "input": "5\n4\n4\n1\n7\n9",
          "output": "3",
          "explanation": "得到回答5，表示「學生的人數」為5。\n得到回答4，表示「樹枝的數量」為4。\n依序得到回答4, 1, 7, 9，表示四根樹枝的長度為4, 1, 7, 9。\n程式經過計算後，得出最長的教學用木材的長度是3，所以用「說出」積木回答，說出3。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j5_s\">S</variable><variable id=\"j5_m\">M</variable><variable id=\"j5_lens\">LENS</variable><variable id=\"j5_k\">K</variable><variable id=\"j5_v\">V</variable><variable id=\"j5_maxlen\">MAXLEN</variable><variable id=\"j5_lo\">LO</variable><variable id=\"j5_hi\">HI</variable><variable id=\"j5_mid\">MID</variable><variable id=\"j5_sum\">SUM</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入學生人數S</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_s\">S</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入樹枝數量M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_lens\">LENS</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_m\">M</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j5_k\">K</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入樹枝長度</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_v\">V</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lens\">LENS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_k\">K</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_v\">V</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_maxlen\">MAXLEN</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j5_k\">K</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lens\">LENS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_k\">K</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_maxlen\">MAXLEN</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_maxlen\">MAXLEN</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lens\">LENS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_k\">K</field></block></value></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_lo\">LO</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_hi\">HI</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_maxlen\">MAXLEN</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lo\">LO</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_hi\">HI</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_mid\">MID</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lo\">LO</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_hi\">HI</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_sum\">SUM</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j5_k\">K</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_sum\">SUM</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_sum\">SUM</field></block></value><value name=\"B\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lens\">LENS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_k\">K</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_mid\">MID</field></block></value></block></value></block></value></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_sum\">SUM</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_s\">S</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_lo\">LO</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_mid\">MID</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"j5_hi\">HI</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_mid\">MID</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j5_lo\">LO</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "3\n1\n101",
          "expectedOutput": "33",
          "score": 10
        },
        {
          "input": "5\n4\n4\n1\n7\n9",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "1\n1\n10",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "10\n2\n10\n10",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "2\n2\n10\n100",
          "expectedOutput": "50",
          "score": 10
        },
        {
          "input": "3\n3\n1\n1\n1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "4\n2\n15\n25",
          "expectedOutput": "8",
          "score": 10
        },
        {
          "input": "5\n3\n10\n20\n30",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "2\n3\n5\n5\n5",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "4\n1\n100",
          "expectedOutput": "25",
          "score": 10
        }
      ]
    },
    {
      "id": "114JMiaoli-6",
      "title": "6-身高排列",
      "problemTitle": "6-身高排列",
      "courseCode": "114JMiaoli",
      "courseName": "114-苗栗縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "班上有男生與女生，已知男生與女生的身高都已經各自從小到大排好，請使用 Scratch3撰寫一個程式專案，根據每一位男生與女生的身高，幫忙老師按照全班同學(男女)的身高從小到大排列。\n【輸入格式】\n先詢問男生的部分：\n「詢問...並等待」一次後，這次「詢問的答案」會得到：男生的人數。(1~1000人)\n接著繼續使用「詢問...並等待」取得每個男生的身高，次數與「男生的人數」相同：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一個男生的身高(100~200)。\n• 每個男生的身高會依照詢問的順序遞增回答(從小到大，或相同)。\n然後詢問女生的部分：\n「詢問...並等待」一次後，這次「詢問的答案」會得到：女生的人數。(1~1000人)\n接著繼續使用「詢問...並等待」取得每個女生的身高，次數與「女生的人數」相同：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一個女生的身高(100~200)。\n• 每個女生的身高會依照詢問的順序遞增回答(從小到大，或相同)。\n【輸出格式】\n請依序從小到大，回答每一位同學的身高，次數與「男生的人數」加上「女生的人數」相同。\n• 回答總次數與「男生的人數」加「女生的人數」相同。\n• 每一次請「說出」一位同學的身高，均為整數。(從小到大「說出」，可能相同)\n• 每一位同學的身高均須恰好說出一次，也請勿加入額外的文字。\n(註：本平台為一次性輸出，請將所有數字以換行分隔輸出，代表多次說出)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "班上有男生與女生，已知男生與女生的身高都已經各自從小到大排好，請使用 Scratch3撰寫一個程式專案，根據每一位男生與女生的身高，幫忙老師按照全班同學(男女)的身高從小到大排列。\n【輸入格式】\n先詢問男生的部分：\n「詢問...並等待」一次後，這次「詢問的答案」會得到：男生的人數。(1~1000人)\n接著繼續使用「詢問...並等待」取得每個男生的身高，次數與「男生的人數」相同：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一個男生的身高(100~200)。\n• 每個男生的身高會依照詢問的順序遞增回答(從小到大，或相同)。\n然後詢問女生的部分：\n「詢問...並等待」一次後，這次「詢問的答案」會得到：女生的人數。(1~1000人)\n接著繼續使用「詢問...並等待」取得每個女生的身高，次數與「女生的人數」相同：\n• 每次「詢問...並等待」後，「詢問的答案」得到整數：其中一個女生的身高(100~200)。\n• 每個女生的身高會依照詢問的順序遞增回答(從小到大，或相同)。\n【輸出格式】\n請依序從小到大，回答每一位同學的身高，次數與「男生的人數」加上「女生的人數」相同。\n• 回答總次數與「男生的人數」加「女生的人數」相同。\n• 每一次請「說出」一位同學的身高，均為整數。(從小到大「說出」，可能相同)\n• 每一位同學的身高均須恰好說出一次，也請勿加入額外的文字。\n(註：本平台為一次性輸出，請將所有數字以換行分隔輸出，代表多次說出)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "2\n120\n130\n3\n125\n126\n128",
          "output": "120\n125\n126\n128\n130",
          "explanation": "得到回答2，表示男生有2人。依序得到回答120, 130 表示2個男生的身高。\n得到回答3，表示女生有3人。依序得到回答 125, 126, 128，表示3個女生的身高。\n得出總共有5人，且身高從小到大排列為120, 125, 126, 128, 130，所以總共用「說出」積木回答5次，依序說出120, 125, 126, 128, 130。"
        },
        {
          "input": "1\n200\n1\n200",
          "output": "200\n200",
          "explanation": "得到回答 1, 200, 1, 200 表示男生與女生各有1人，皆為200。\n得出總共有2人，所以總共用「說出」積木回答2次，依序說出200, 200。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"j6_nb\">NB</variable><variable id=\"j6_boys\">BOYS</variable><variable id=\"j6_ng\">NG</variable><variable id=\"j6_girls\">GIRLS</variable><variable id=\"j6_i\">i</variable><variable id=\"j6_j\">j</variable><variable id=\"j6_k\">k</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入男生人數NB</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_nb\">NB</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_boys\">BOYS</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_nb\">NB</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j6_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_nb\">NB</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入男生身高</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_boys\">BOYS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_k\">k</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入女生人數NG</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_ng\">NG</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_girls\">GIRLS</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_ng\">NG</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"j6_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_ng\">NG</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入女生身高</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_girls\">GIRLS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_k\">k</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_i\">i</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_j\">j</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_nb\">NB</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_ng\">NG</field></block></value></block></value></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_boys\">BOYS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_girls\">GIRLS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_boys\">BOYS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_i\">i</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_girls\">GIRLS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_j\">j</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_nb\">NB</field></block></value></block></value><statement name=\"DO\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_boys\">BOYS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_i\">i</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_ng\">NG</field></block></value></block></value><statement name=\"DO\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_girls\">GIRLS</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"j6_j\">j</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"j6_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "2\n120\n130\n3\n125\n126\n128",
          "expectedOutput": "120\n125\n126\n128\n130",
          "score": 10
        },
        {
          "input": "1\n200\n1\n200",
          "expectedOutput": "200\n200",
          "score": 10
        },
        {
          "input": "3\n140\n150\n160\n3\n140\n150\n160",
          "expectedOutput": "140\n140\n150\n150\n160\n160",
          "score": 10
        },
        {
          "input": "4\n100\n110\n120\n130\n4\n140\n150\n160\n170",
          "expectedOutput": "100\n110\n120\n130\n140\n150\n160\n170",
          "score": 10
        },
        {
          "input": "3\n150\n150\n150\n2\n150\n150",
          "expectedOutput": "150\n150\n150\n150\n150",
          "score": 10
        },
        {
          "input": "2\n130\n130\n4\n130\n130\n130\n130",
          "expectedOutput": "130\n130\n130\n130\n130\n130",
          "score": 10
        },
        {
          "input": "5\n110\n120\n130\n140\n150\n5\n120\n130\n140\n150\n160",
          "expectedOutput": "110\n120\n120\n130\n130\n140\n140\n150\n150\n160",
          "score": 10
        },
        {
          "input": "1\n100\n2\n110\n120",
          "expectedOutput": "100\n110\n120",
          "score": 10
        },
        {
          "input": "2\n150\n160\n1\n160",
          "expectedOutput": "150\n160\n160",
          "score": 10
        },
        {
          "input": "3\n140\n140\n150\n3\n140\n150\n150",
          "expectedOutput": "140\n140\n140\n150\n150\n150",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
