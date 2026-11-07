// Built by tools/lib/course-store.mjs：courses/114JKinmen.js ＋ courses-overrides/114JKinmen.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "114JKinmen",
  "title": "114-金門縣國中",
  "type": "programming",
  "mode": "learning",
  "description": "114-金門縣國中114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-26T08:31:37.381Z",
    "sourceTxt": "txtFile/114JKinmen.txt",
    "version": "manual-blockly-build-verified"
  },
  "tasks": [
    {
      "id": "114JKinmen-1",
      "title": "1-資訊競賽獎勵統計",
      "problemTitle": "1-資訊競賽獎勵統計",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "縣府舉辦「科技教育創意實作競賽」，共有許多選手參加。評審委員們根據每位選手的最終得分(0至100分)，頒發不同等級的獎勵。由於參賽人數眾多，請寫一個程式協助主辦單位統計獲得「金牌獎」、「銀牌獎」與「銅牌獎」的人數各有多少。\n每位選手的得分僅會被歸類在最高的一項獎勵中(不可重複領獎)：\n1. 金牌獎：若得分為90分(含)以上。\n2. 銀牌獎：若不符合金牌獎，但得分為80分(含)以上。\n3. 銅牌獎：若不符合上述獎項，但得分為70分(含)以上。\n4. 佳作：若不符合上述獎項，但得分為60分(含)以上。\n5. 參賽證明：若得分未滿60分，則僅頒發參賽證明，不計入上述獎項。\n【輸入說明】\n• 第一行輸入一個整數N，代表總參賽人數。\n• 接下來輸入N行，每行包含一個整數，代表該名選手的得分。\n【輸出說明】\n• 輸出四個整數，分別代表獲得「金牌獎」、「銀牌獎」、「銅牌獎」與「佳作」的總張數，中間以逗號隔開。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "縣府舉辦「科技教育創意實作競賽」，共有許多選手參加。評審委員們根據每位選手的最終得分(0至100分)，頒發不同等級的獎勵。由於參賽人數眾多，請寫一個程式協助主辦單位統計獲得「金牌獎」、「銀牌獎」與「銅牌獎」的人數各有多少。\n每位選手的得分僅會被歸類在最高的一項獎勵中(不可重複領獎)：\n1. 金牌獎：若得分為90分(含)以上。\n2. 銀牌獎：若不符合金牌獎，但得分為80分(含)以上。\n3. 銅牌獎：若不符合上述獎項，但得分為70分(含)以上。\n4. 佳作：若不符合上述獎項，但得分為60分(含)以上。\n5. 參賽證明：若得分未滿60分，則僅頒發參賽證明，不計入上述獎項。\n【輸入說明】\n• 第一行輸入一個整數N，代表總參賽人數。\n• 接下來輸入N行，每行包含一個整數，代表該名選手的得分。\n【輸出說明】\n• 輸出四個整數，分別代表獲得「金牌獎」、「銀牌獎」、「銅牌獎」與「佳作」的總張數，中間以逗號隔開。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "6\n92\n55\n80\n90\n72\n65",
          "output": "2,1,1,1",
          "explanation": "總共6位選手：\n92, 90分：金牌獎(2人)\n80分：銀牌獎(1人)\n72分：銅牌獎(1人)\n65分：佳作(1人)\n55分：未達標，不計入獎項"
        },
        {
          "input": "3\n45\n60\n59",
          "output": "0,0,0,1",
          "explanation": "總共3位選手：\n60分符合「佳作」(1人)\n45, 59分皆未滿60分。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">人數</variable><variable id=\"v2\">金牌</variable><variable id=\"v3\">銀牌</variable><variable id=\"v4\">銅牌</variable><variable id=\"v5\">佳作</variable><variable id=\"v6\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">人數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">金牌</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">銀牌</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">銅牌</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">佳作</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">人數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">分數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"3\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">90</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">金牌</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">80</field></block></value></block></value><statement name=\"DO1\"><block type=\"math_change\"><field name=\"VAR\" id=\"v3\">銀牌</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">70</field></block></value></block></value><statement name=\"DO2\"><block type=\"math_change\"><field name=\"VAR\" id=\"v4\">銅牌</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><statement name=\"DO3\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">佳作</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"7\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">金牌</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">銀牌</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">銅牌</field></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value><value name=\"ADD6\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">佳作</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "6\n92\n55\n80\n90\n72\n65",
          "expectedOutput": "2,1,1,1",
          "score": 10
        },
        {
          "input": "3\n45\n60\n59",
          "expectedOutput": "0,0,0,1",
          "score": 10
        },
        {
          "input": "5\n100\n100\n100\n100\n100",
          "expectedOutput": "5,0,0,0",
          "score": 10
        },
        {
          "input": "4\n85\n88\n80\n89",
          "expectedOutput": "0,4,0,0",
          "score": 10
        },
        {
          "input": "3\n75\n70\n79",
          "expectedOutput": "0,0,3,0",
          "score": 10
        },
        {
          "input": "2\n60\n69",
          "expectedOutput": "0,0,0,2",
          "score": 10
        },
        {
          "input": "5\n0\n10\n20\n30\n40",
          "expectedOutput": "0,0,0,0",
          "score": 10
        },
        {
          "input": "8\n95\n85\n75\n65\n55\n45\n99\n81",
          "expectedOutput": "2,2,1,1",
          "score": 10
        },
        {
          "input": "1\n90",
          "expectedOutput": "1,0,0,0",
          "score": 10
        },
        {
          "input": "10\n60\n60\n70\n70\n80\n80\n90\n90\n50",
          "expectedOutput": "2,2,2,2",
          "score": 10
        }
      ]
    },
    {
      "id": "114JKinmen-2",
      "title": "2-台灣星鏈(T-Starlink) 衛星佈署計畫",
      "problemTitle": "2-台灣星鏈(T-Starlink) 衛星佈署計畫",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "台灣正致力於研發自主低軌衛星通訊系統「T-Starlink」，以確保在特殊情況下通訊不中斷。TASA 國家太空中心預計在特定的軌道高度上，沿著預定路徑佈署通訊衛星。根據衛星的訊號覆蓋半徑與任務需求，不同路徑段有不同的佈署模式。請寫一個程式，根據路徑總長度、衛星間的固定間隔，以及指定的「佈署模式」，計算該路段總共需要佈署多少顆衛星。\n根據輸入的模式編號M，請依照下列規則計算衛星數量：\n1. 模式1(全線覆蓋)：該路段的「起點」與「終點」都必須佈署衛星。\n2. 模式2(銜接佈署)：僅在「起點」佈署衛星，「終點」不佈署(以便與下一段軌道無縫銜接)。\n3. 模式3(受限區域)：「起點」與「終點」都不佈署衛星(例如為了避免干擾特定的天文觀測站)。\n4. 模式4(全球環繞軌道)：這是一段首尾相接的圓形封閉軌道。\n【特殊限制與說明】\n• 衛星之間的間隔必須為整數。\n• 若路段長度無法被間隔整除，剩餘不足一個間隔的距離將不佈署衛星(即：計算間隔數時請取整數商)。\n【輸入說明】\n• 第一行輸入一個整數L，代表路段總長度(公里)。\n• 第二行輸入一個整數D，代表衛星與衛星間的固定間隔(公里)。\n• 第三行輸入一個整數M，代表佈署模式(1、2、3或4)。\n【輸出說明】\n• 輸出一個整數，代表該路段所需的衛星總數。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "台灣正致力於研發自主低軌衛星通訊系統「T-Starlink」，以確保在特殊情況下通訊不中斷。TASA 國家太空中心預計在特定的軌道高度上，沿著預定路徑佈署通訊衛星。根據衛星的訊號覆蓋半徑與任務需求，不同路徑段有不同的佈署模式。請寫一個程式，根據路徑總長度、衛星間的固定間隔，以及指定的「佈署模式」，計算該路段總共需要佈署多少顆衛星。\n根據輸入的模式編號M，請依照下列規則計算衛星數量：\n1. 模式1(全線覆蓋)：該路段的「起點」與「終點」都必須佈署衛星。\n2. 模式2(銜接佈署)：僅在「起點」佈署衛星，「終點」不佈署(以便與下一段軌道無縫銜接)。\n3. 模式3(受限區域)：「起點」與「終點」都不佈署衛星(例如為了避免干擾特定的天文觀測站)。\n4. 模式4(全球環繞軌道)：這是一段首尾相接的圓形封閉軌道。\n【特殊限制與說明】\n• 衛星之間的間隔必須為整數。\n• 若路段長度無法被間隔整除，剩餘不足一個間隔的距離將不佈署衛星(即：計算間隔數時請取整數商)。\n【輸入說明】\n• 第一行輸入一個整數L，代表路段總長度(公里)。\n• 第二行輸入一個整數D，代表衛星與衛星間的固定間隔(公里)。\n• 第三行輸入一個整數M，代表佈署模式(1、2、3或4)。\n【輸出說明】\n• 輸出一個整數，代表該路段所需的衛星總數。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "1000\n200\n1",
          "output": "6",
          "explanation": "長度 1000公里，每200公里放一顆。間隔有5個，因為模式 1終點也要放，故5+1=6。"
        },
        {
          "input": "1000\n200\n3",
          "output": "4",
          "explanation": "長度1000，間隔200，間隔數為5。模式3兩端都不佈署，故5-1=4。"
        },
        {
          "input": "1050\n200\n2",
          "output": "5",
          "explanation": "長度1050，間隔 200。1050 ÷ 200=5.25，取整數商為5。模式2輸出5。"
        },
        {
          "input": "800\n200\n4",
          "output": "4",
          "explanation": "長度800，間隔200。模式4為環狀軌道，衛星數等於間隔數，故輸出4。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">總長度</variable><variable id=\"v2\">間隔</variable><variable id=\"v3\">模式</variable><variable id=\"v4\">間隔數</variable><variable id=\"v5\">衛星數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">總長度</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">間隔</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">模式</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">間隔數</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">總長度</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">間隔</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">衛星數</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">間隔數</field></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">模式</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">衛星數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">模式</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><statement name=\"DO1\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">衛星數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">衛星數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "1000\n200\n1",
          "expectedOutput": "6",
          "score": 10
        },
        {
          "input": "1000\n200\n3",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "1050\n200\n2",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "800\n200\n4",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "2000\n500\n1",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "2000\n500\n2",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "2000\n500\n3",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "2000\n500\n4",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "750\n100\n1",
          "expectedOutput": "8",
          "score": 10
        },
        {
          "input": "750\n100\n3",
          "expectedOutput": "6",
          "score": 10
        }
      ]
    },
    {
      "id": "114JKinmen-3",
      "title": "3-「一杯心情」飲料調製",
      "problemTitle": "3-「一杯心情」飲料調製",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "金門最近開了一間超人氣手搖店「一杯心情」，調飲師會依照顧客的心情，製作一杯具有層次感的「心情飲料」：現在要製作的是一杯「五層漸層奶蓋茶」。為了讓飲料呈現漂亮的分層效果，店長規定原料必須依照「密度(重量)」的大小順序依次倒入杯中，密度大的原料會沉在下層，密度小的原料會浮在上層。\n請你模擬調飲師倒入原料的過程，根據輸入的原料資料，輸出完成後飲料「由下往上」的正確層次順序。\n【原料代碼表】\n• B：黑糖糖漿(Brown Sugar)\n• M：鮮奶(Milk)\n• T：茶(Tea)\n• F：奶蓋(Foam)\n• J：果凍(Jelly)\n【調製規則】\n1. 每種原料皆有一個整數密度值 D\n2. 調飲師會依照輸入順序，逐一倒入原料\n3. 倒入原料時，需依照密度規則放到正確位置：\n• 密度較大的原料位於下層\n• 密度較小的原料位於上層\n4. 若有多種原料的密度相同，需保持它們在輸入中的先後順序不變\n5. 原料倒入後不可重新調整位置\n【輸入說明】\n• 共有5組資料\n• 每組包含：一個大寫字母(B, M, T, F, J)\n• 一個整數(代表密度D)\n（註：代碼與密度以空白隔開，如範例所示）\n【輸出說明】\n• 請輸出5個原料代碼\n• 代表飲料完成後，由杯底到杯口的原料排列順序\n• 每個代碼之間以一個逗號隔開",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "金門最近開了一間超人氣手搖店「一杯心情」，調飲師會依照顧客的心情，製作一杯具有層次感的「心情飲料」：現在要製作的是一杯「五層漸層奶蓋茶」。為了讓飲料呈現漂亮的分層效果，店長規定原料必須依照「密度(重量)」的大小順序依次倒入杯中，密度大的原料會沉在下層，密度小的原料會浮在上層。\n請你模擬調飲師倒入原料的過程，根據輸入的原料資料，輸出完成後飲料「由下往上」的正確層次順序。\n【原料代碼表】\n• B：黑糖糖漿(Brown Sugar)\n• M：鮮奶(Milk)\n• T：茶(Tea)\n• F：奶蓋(Foam)\n• J：果凍(Jelly)\n【調製規則】\n1. 每種原料皆有一個整數密度值 D\n2. 調飲師會依照輸入順序，逐一倒入原料\n3. 倒入原料時，需依照密度規則放到正確位置：\n• 密度較大的原料位於下層\n• 密度較小的原料位於上層\n4. 若有多種原料的密度相同，需保持它們在輸入中的先後順序不變\n5. 原料倒入後不可重新調整位置\n【輸入說明】\n• 共有5組資料\n• 每組包含：一個大寫字母(B, M, T, F, J)\n• 一個整數(代表密度D)\n（註：代碼與密度以空白隔開，如範例所示）\n【輸出說明】\n• 請輸出5個原料代碼\n• 代表飲料完成後，由杯底到杯口的原料排列順序\n• 每個代碼之間以一個逗號隔開",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "B 120\nJ 120\nT 110\nM 110\nF 90",
          "output": "B,J,T,M,F",
          "explanation": "密度比較：B(120) = J(120) > T(110) = M(110) > F(90)。\n最重的B放底部，第二放入的是J，接著往上是T、M，最輕的F在最上面"
        },
        {
          "input": "F 100\nM 110\nT 110\nJ 110\nB 120",
          "output": "B,M,T,J,F",
          "explanation": "密度比較：B(120) > M(110) = T(110) = J(110) > F(100)。\n順序為 B,M,T,J,F"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">原料</variable><variable id=\"v2\">數值</variable><variable id=\"v3\">最大位置</variable><variable id=\"v4\">第幾個</variable><variable id=\"v5\">結果</variable><variable id=\"v6\">第幾層</variable><variable id=\"v7\">代碼</variable><variable id=\"v8\">密度</variable><variable id=\"v9\">順序</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">代碼</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v8\">密度</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">原料</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">數值</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">代碼</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">原料</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">密度</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">數值</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v9\">順序</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最大位置</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">第幾個</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">密度</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">密度</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最大位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最大位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></statement></block></statement><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">順序</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">代碼</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最大位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">密度</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最大位置</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">順序</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v6\">第幾層</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">順序</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">第幾層</field></block></value></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "B 120\nJ 120\nT 110\nM 110\nF 90",
          "expectedOutput": "B,J,T,M,F",
          "score": 10
        },
        {
          "input": "F 100\nM 110\nT 110\nJ 110\nB 120",
          "expectedOutput": "B,M,T,J,F",
          "score": 10
        },
        {
          "input": "B 10\nM 20\nT 30\nJ 40\nF 50",
          "expectedOutput": "F,J,T,M,B",
          "score": 10
        },
        {
          "input": "M 50\nB 40\nT 60\nF 30\nJ 70",
          "expectedOutput": "J,T,M,B,F",
          "score": 10
        },
        {
          "input": "B 100\nM 100\nT 100\nF 100\nJ 100",
          "expectedOutput": "B,M,T,F,J",
          "score": 10
        },
        {
          "input": "T 10\nM 10\nB 10\nF 10\nJ 10",
          "expectedOutput": "T,M,B,F,J",
          "score": 10
        },
        {
          "input": "B 99\nM 98\nT 97\nF 96\nJ 95",
          "expectedOutput": "B,M,T,F,J",
          "score": 10
        },
        {
          "input": "F 50\nJ 50\nT 30\nM 30\nB 20",
          "expectedOutput": "F,J,T,M,B",
          "score": 10
        },
        {
          "input": "J 20\nB 30\nT 40\nM 50\nF 60",
          "expectedOutput": "F,M,T,B,J",
          "score": 10
        },
        {
          "input": "B 30\nJ 10\nT 30\nF 10\nM 30",
          "expectedOutput": "B,T,M,J,F",
          "score": 10
        }
      ]
    },
    {
      "id": "114JKinmen-4",
      "title": "4-數位交趾陶花",
      "problemTitle": "4-數位交趾陶花",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "金門的交趾陶產業正結合科技藝術，開發一款「數位交趾陶花預覽器」。這款程式使用 Scratch 的「畫筆」內的「蓋章」功能，設計出具有「雙層花瓣」的花朵圖案。花朵由 外層花瓣與內層花瓣組成，兩層花瓣皆透過重複蓋章與旋轉的方式完成，但每一層的花瓣數量與旋轉角度並不相同。\n請你依照下列規則，模擬程式執行後所產生的花朵圖形。\n【繪圖規則說明】\n【共通規則】\n1. 選擇角色 Button2一開始位於舞台正中央\n2. 角色初始面向為0度\n3. 點選花瓣造型，花瓣需離開畫布中心一段距離\n4. 每畫出一片花瓣，需依序執行：\n• 使用畫筆「蓋章一次」\n• 原地向右旋轉指定角度\n5. 不需要考慮花瓣的顏色、大小或形狀，只需依規則完成蓋章動作\n【外層花瓣規則】\n1. 外層花瓣數量為N，大小設為100%\n2. 每畫一片外層花瓣後，旋轉角度為360 ÷ N度\n3. 外層花瓣需先全部畫完\n【內層花瓣規則】\n1. 內層花瓣數量為M，大小設為80%\n2. 置入積木《圖像效果亮度改變25》\n3. 每畫一片內層花瓣後，旋轉角度為360 ÷ M度\n4. 內層花瓣需在外層完成後才開始繪製\n【輸入說明】\n• 第一行輸入一個正整數N，表示外層花瓣數量\n• 第二行輸入一個正整數M，表示內層花瓣數量\n【輸出說明】\n(圖形輸出)\n請使用 Scratch 的畫筆與蓋章功能\n• 畫出完成後的雙層花瓣花朵圖形\n• 外層與內層花瓣必須各自平均分布，形成兩個完整的圖形",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "金門的交趾陶產業正結合科技藝術，開發一款「數位交趾陶花預覽器」。這款程式使用 Scratch 的「畫筆」內的「蓋章」功能，設計出具有「雙層花瓣」的花朵圖案。花朵由 外層花瓣與內層花瓣組成，兩層花瓣皆透過重複蓋章與旋轉的方式完成，但每一層的花瓣數量與旋轉角度並不相同。\n請你依照下列規則，模擬程式執行後所產生的花朵圖形。\n【繪圖規則說明】\n【共通規則】\n1. 選擇角色 Button2一開始位於舞台正中央\n2. 角色初始面向為0度\n3. 點選花瓣造型，花瓣需離開畫布中心一段距離\n4. 每畫出一片花瓣，需依序執行：\n• 使用畫筆「蓋章一次」\n• 原地向右旋轉指定角度\n5. 不需要考慮花瓣的顏色、大小或形狀，只需依規則完成蓋章動作\n【外層花瓣規則】\n1. 外層花瓣數量為N，大小設為100%\n2. 每畫一片外層花瓣後，旋轉角度為360 ÷ N度\n3. 外層花瓣需先全部畫完\n【內層花瓣規則】\n1. 內層花瓣數量為M，大小設為80%\n2. 置入積木《圖像效果亮度改變25》\n3. 每畫一片內層花瓣後，旋轉角度為360 ÷ M度\n4. 內層花瓣需在外層完成後才開始繪製\n【輸入說明】\n• 第一行輸入一個正整數N，表示外層花瓣數量\n• 第二行輸入一個正整數M，表示內層花瓣數量\n【輸出說明】\n(圖形輸出)\n請使用 Scratch 的畫筆與蓋章功能\n• 畫出完成後的雙層花瓣花朵圖形\n• 外層與內層花瓣必須各自平均分布，形成兩個完整的圖形",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "12\n12",
          "output": "外層12瓣,內層12瓣",
          "explanation": "先每次旋轉角度為360÷12=30度，共蓋章12次，形成12片對稱花瓣。\n後每次旋轉角度為360÷12=30度，共蓋章12次，形成12片對稱花瓣。\n先完成外層花瓣，再完成內層花瓣"
        },
        {
          "input": "10\n8",
          "output": "外層10瓣,內層8瓣",
          "explanation": "先每次旋轉角度為360÷10=36度，共蓋章10次，形成10片對稱花瓣。\n後每次旋轉角度為360÷8=45度，共蓋章8次，形成8片對稱花瓣。\n先完成外層花瓣，再完成內層花瓣"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">外層數</variable><variable id=\"v2\">內層數</variable><variable id=\"v3\">方向</variable><variable id=\"v4\">外層瓣數</variable><variable id=\"v5\">內層瓣數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">外層數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">內層數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">方向</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">外層瓣數</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">外層數</field></block></value><statement name=\"DO\"><block type=\"math_change\"><field name=\"VAR\" id=\"v4\">外層瓣數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"math_change\"><field name=\"VAR\" id=\"v3\">方向</field><value name=\"DELTA\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">360</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">外層數</field></block></value></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">內層瓣數</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">內層數</field></block></value><statement name=\"DO\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">內層瓣數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"math_change\"><field name=\"VAR\" id=\"v3\">方向</field><value name=\"DELTA\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">360</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">內層數</field></block></value></block></value></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">外層</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">外層瓣數</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">瓣,內層</field></block></value><value name=\"ADD3\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">內層瓣數</field></block></value><value name=\"ADD4\"><block type=\"text\"><field name=\"TEXT\">瓣</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "12\n12",
          "expectedOutput": "外層12瓣,內層12瓣",
          "score": 10
        },
        {
          "input": "10\n8",
          "expectedOutput": "外層10瓣,內層8瓣",
          "score": 10
        },
        {
          "input": "4\n4",
          "expectedOutput": "外層4瓣,內層4瓣",
          "score": 10
        },
        {
          "input": "5\n5",
          "expectedOutput": "外層5瓣,內層5瓣",
          "score": 10
        },
        {
          "input": "6\n3",
          "expectedOutput": "外層6瓣,內層3瓣",
          "score": 10
        },
        {
          "input": "8\n4",
          "expectedOutput": "外層8瓣,內層4瓣",
          "score": 10
        },
        {
          "input": "15\n10",
          "expectedOutput": "外層15瓣,內層10瓣",
          "score": 10
        },
        {
          "input": "20\n15",
          "expectedOutput": "外層20瓣,內層15瓣",
          "score": 10
        },
        {
          "input": "36\n18",
          "expectedOutput": "外層36瓣,內層18瓣",
          "score": 10
        },
        {
          "input": "72\n36",
          "expectedOutput": "外層72瓣,內層36瓣",
          "score": 10
        }
      ]
    },
    {
      "id": "114JKinmen-5",
      "title": "5-風獅爺排排隊",
      "problemTitle": "5-風獅爺排排隊",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "金門各村落的風獅爺要準備祭典大合照，村長要求將4尊風獅爺依照身高「由矮到高」排好。工讀生小金負責進行搬動，規則如下：\n• 比較規則：從小金的角度看，每次比較相鄰的兩尊風獅爺。\n• 交換規則：如果「左邊」的風獅爺比「右邊」的高，兩尊就必須交換位置。\n• 紀錄規則：每當風獅爺成功交換一次位置，小金就要在筆記本上畫一個「正」字(紀錄總交換次數)。\n請寫一個程式，幫小金算出排好隊後的風獅爺身高，以及他搬動的完整過程。\n【任務說明】\n1. 輸入數量N：讀取總共有幾尊風獅爺。\n2. 追蹤每一輪：程式必須輸出「每一輪」完整比較後(即該輪最大的數值「浮」到正確位置後)的序列狀態。\n3. 計算交換次數：統計整個排序過程中，總共執行了幾次「交換」動作。\n【輸入說明】\n• 第一行：一個整數N(2≤ N ≤10)，代表風獅爺的數量。\n• 第二行：N個整數，代表各尊風獅爺的身高，中間以空白隔開。\n【輸出說明】\n• 前N-1行：依序輸出每一輪(Pass)排序結束後的風獅爺身高序列。\n• 最後一行：輸出一個整數，代表總共進行的「交換次數」。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "金門各村落的風獅爺要準備祭典大合照，村長要求將4尊風獅爺依照身高「由矮到高」排好。工讀生小金負責進行搬動，規則如下：\n• 比較規則：從小金的角度看，每次比較相鄰的兩尊風獅爺。\n• 交換規則：如果「左邊」的風獅爺比「右邊」的高，兩尊就必須交換位置。\n• 紀錄規則：每當風獅爺成功交換一次位置，小金就要在筆記本上畫一個「正」字(紀錄總交換次數)。\n請寫一個程式，幫小金算出排好隊後的風獅爺身高，以及他搬動的完整過程。\n【任務說明】\n1. 輸入數量N：讀取總共有幾尊風獅爺。\n2. 追蹤每一輪：程式必須輸出「每一輪」完整比較後(即該輪最大的數值「浮」到正確位置後)的序列狀態。\n3. 計算交換次數：統計整個排序過程中，總共執行了幾次「交換」動作。\n【輸入說明】\n• 第一行：一個整數N(2≤ N ≤10)，代表風獅爺的數量。\n• 第二行：N個整數，代表各尊風獅爺的身高，中間以空白隔開。\n【輸出說明】\n• 前N-1行：依序輸出每一輪(Pass)排序結束後的風獅爺身高序列。\n• 最後一行：輸出一個整數，代表總共進行的「交換次數」。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "4\n150 120 180 110",
          "output": "120 150 110 180\n120 110 150 180\n110 120 150 180\n4",
          "explanation": "過程分析：\n1. 第一輪：150換120，180換110。結束後180就位。(交換2次)\n2. 第二輪：150換110。結束後150就位。(交換1次)\n3. 第三輪：120換110。結束後120就位。(交換1次)\n總交換次數：2+1+1=4"
        },
        {
          "input": "5\n160 140 170 130 150",
          "output": "140 160 130 150 170\n140 130 150 160 170\n130 140 150 160 170\n130 140 150 160 170\n6",
          "explanation": "1. 第一輪：交換3次\n2. 第二輪：交換2次\n3. 第三輪：交換1次\n4. 第四輪：不換\n總交換次數：6"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">尊數</variable><variable id=\"v2\">交換次數</variable><variable id=\"v3\">第幾輪</variable><variable id=\"v4\">第幾尊</variable><variable id=\"v5\">暫存</variable><variable id=\"v6\">這一行</variable><variable id=\"v7\">身高</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">尊數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">身高</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">尊數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">交換次數</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾輪</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">尊數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">第幾尊</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">尊數</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾輪</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">暫存</field></block></value><next><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">交換次數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">這一行</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">尊數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">第幾尊</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">尊數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">這一行</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">這一行</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">身高</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾尊</field></block></value></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">這一行</field></block></value></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">交換次數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "4\n150 120 180 110",
          "expectedOutput": "120 150 110 180\n120 110 150 180\n110 120 150 180\n4",
          "score": 10
        },
        {
          "input": "5\n160 140 170 130 150",
          "expectedOutput": "140 160 130 150 170\n140 130 150 160 170\n130 140 150 160 170\n130 140 150 160 170\n6",
          "score": 10
        },
        {
          "input": "3\n30 20 10",
          "expectedOutput": "20 10 30\n10 20 30\n3",
          "score": 10
        },
        {
          "input": "4\n10 20 30 40",
          "expectedOutput": "10 20 30 40\n10 20 30 40\n10 20 30 40\n0",
          "score": 10
        },
        {
          "input": "5\n50 40 30 20 10",
          "expectedOutput": "40 30 20 10 50\n30 20 10 40 50\n20 10 30 40 50\n10 20 30 40 50\n10",
          "score": 10
        },
        {
          "input": "4\n40 10 20 30",
          "expectedOutput": "10 20 30 40\n10 20 30 40\n10 20 30 40\n3",
          "score": 10
        },
        {
          "input": "4\n20 30 40 10",
          "expectedOutput": "20 30 10 40\n20 10 30 40\n10 20 30 40\n3",
          "score": 10
        },
        {
          "input": "3\n10 30 20",
          "expectedOutput": "10 20 30\n10 20 30\n1",
          "score": 10
        },
        {
          "input": "6\n20 10 60 50 40 30",
          "expectedOutput": "10 20 50 40 30 60\n10 20 40 30 50 60\n10 20 30 40 50 60\n10 20 30 40 50 60\n10 20 30 40 50 60\n7",
          "score": 10
        },
        {
          "input": "2\n20 10",
          "expectedOutput": "10 20\n1",
          "score": 10
        }
      ]
    },
    {
      "id": "114JKinmen-6",
      "title": "6-金門粥糜採購任務",
      "problemTitle": "6-金門粥糜採購任務",
      "courseCode": "114JKinmen",
      "courseName": "114-金門縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "金門的粥糜聞名遐邇，許多遊客會指名購買不同店家的粥糜(共有9間名店，編號為 1, 2, 3, ......, 9)。導遊小金今天收到了團員們的訂單，準備前往各家店代購。為了節省時間，小金會先統計所有訂單中各家店的粥糜數量，並依照他規劃好的「取貨路線順序」來購買。請幫小金列出最終外送箱中粥糜排列的順序。\n【規則說明】\n1. 數量統計：首先統計所有訂單中，各個店家編號出現的總次數。\n2. 依序排列：根據小金指定的「店家取貨順序」，將該店家的編號依出現次數重複列出。\n【輸入說明】\n• 第一行輸入一個整數N，代表粥糜訂單的總碗數。\n• 第二行輸入N個整數，代表每碗粥糜所屬的店家編號。\n• 第三行輸入一個整數M，代表訂單中包含的店家種類數量。\n• 第四行輸入 M個整數，代表小金指定的店家取貨順序。\n【輸出說明】\n• 依據取貨順序，輸出排列後的店家編號序列，數字間以逗號隔開。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "金門的粥糜聞名遐邇，許多遊客會指名購買不同店家的粥糜(共有9間名店，編號為 1, 2, 3, ......, 9)。導遊小金今天收到了團員們的訂單，準備前往各家店代購。為了節省時間，小金會先統計所有訂單中各家店的粥糜數量，並依照他規劃好的「取貨路線順序」來購買。請幫小金列出最終外送箱中粥糜排列的順序。\n【規則說明】\n1. 數量統計：首先統計所有訂單中，各個店家編號出現的總次數。\n2. 依序排列：根據小金指定的「店家取貨順序」，將該店家的編號依出現次數重複列出。\n【輸入說明】\n• 第一行輸入一個整數N，代表粥糜訂單的總碗數。\n• 第二行輸入N個整數，代表每碗粥糜所屬的店家編號。\n• 第三行輸入一個整數M，代表訂單中包含的店家種類數量。\n• 第四行輸入 M個整數，代表小金指定的店家取貨順序。\n【輸出說明】\n• 依據取貨順序，輸出排列後的店家編號序列，數字間以逗號隔開。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "5\n8,9,9,9,8\n2\n9,8",
          "output": "9,9,9,8,8",
          "explanation": "總共點了 5碗粥，店家編號分別為8,9,9,9,8。共有2種店家，取貨順序為「先9號店、再8號店」。因此先輸出三個9，再輸出兩個8。"
        },
        {
          "input": "7\n3,1,4,1,5,9,3\n5\n1,9,4,3,5",
          "output": "1,1,9,4,3,3,5",
          "explanation": "總共點了7碗粥。取貨順序為1,9,4,3,5。1號店出現2次、9號店1次、4號店1次、3號店2次、5號店1次。依照順序輸出其編號。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">碗數</variable><variable id=\"v2\">訂單</variable><variable id=\"v3\">店家數</variable><variable id=\"v4\">路線</variable><variable id=\"v5\">第幾字</variable><variable id=\"v6\">字元</variable><variable id=\"v7\">結果</variable><variable id=\"v8\">店家</variable><variable id=\"v9\">次數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">碗數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">訂單</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">店家數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">路線</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">訂單</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">訂單</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"></field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">路線</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">路線</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"></field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v9\">次數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"9\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD1\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD2\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD3\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD4\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD5\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD6\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD7\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD8\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v5\">第幾字</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">訂單</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">字元</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">訂單</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾字</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">字元</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">次數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">字元</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">次數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">字元</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v5\">第幾字</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">路線</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v8\">店家</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">路線</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾字</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">店家</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">次數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">店家</field></block></value></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\"></field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">店家</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">,</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">店家</field></block></value></block></value></block></statement></block></statement></block></statement></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "5\n8,9,9,9,8\n2\n9,8",
          "expectedOutput": "9,9,9,8,8",
          "score": 10
        },
        {
          "input": "7\n3,1,4,1,5,9,3\n5\n1,9,4,3,5",
          "expectedOutput": "1,1,9,4,3,3,5",
          "score": 10
        },
        {
          "input": "3\n1,2,3\n3\n3,2,1",
          "expectedOutput": "3,2,1",
          "score": 10
        },
        {
          "input": "4\n5,5,5,5\n1\n5",
          "expectedOutput": "5,5,5,5",
          "score": 10
        },
        {
          "input": "6\n1,2,1,2,1,2\n2\n2,1",
          "expectedOutput": "2,2,2,1,1,1",
          "score": 10
        },
        {
          "input": "10\n1,2,3,4,5,1,2,3,4,5\n5\n5,4,3,2,1",
          "expectedOutput": "5,5,4,4,3,3,2,2,1,1",
          "score": 10
        },
        {
          "input": "5\n7,7,8,8,9\n3\n8,7,9",
          "expectedOutput": "8,8,7,7,9",
          "score": 10
        },
        {
          "input": "8\n9,8,7,6,5,4,3,2\n8\n2,3,4,5,6,7,8,9",
          "expectedOutput": "2,3,4,5,6,7,8,9",
          "score": 10
        },
        {
          "input": "4\n3,3,4,4\n2\n4,3",
          "expectedOutput": "4,4,3,3",
          "score": 10
        },
        {
          "input": "10\n1,1,1,2,2,2,3,3,3,4\n4\n4,3,2,1",
          "expectedOutput": "4,3,3,3,2,2,2,1,1,1",
          "score": 10
        }
      ]
    }
  ]
};
