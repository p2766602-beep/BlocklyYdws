// Hand-authored by Claude from YDWS-CodingBank/txtFile/114EPingtung.txt。
// 2026-09-13：已補上starterXml範例答案（headless Blockly驗證100% pass，見
// BlocklyYdws/.scratch_verify/build_pingtung_e.cjs、build_pingtung_j.cjs）。

const course = {
  "code": "114EPingtung",
  "title": "114-屏東縣國小",
  "type": "programming",
  "mode": "learning",
  "description": "114-屏東縣國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-09-13T02:59:13.000Z",
    "sourceTxt": "txtFile/114EPingtung.txt",
    "version": "manual-parsed-verified"
  },
  "tasks": [
    {
      "id": "114EPingtung-1",
      "title": "1-小島越野賽",
      "problemTitle": "1-小島越野賽",
      "courseCode": "114EPingtung",
      "courseName": "114-屏東縣國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "小機器人要挑戰穿過一連串高低不平的小島。這條路是由一格一格組成的，每一格都有不同的高度數字(例如：1 1 2 2 1)。小機器人現在站在第1格，目標是走到最後一格。\n向前走的時候，小機器人可以選擇以下5種走路方式，每種方式花掉的時間不一樣，請找出最快(花最少秒數)到達終點的方法：\n1. 平地小衝刺(1秒)： 如果前面的連續兩格高度都跟現在站的地方一樣高，你可以直接衝到前方第2格。(目前高度 == 前方第1格高度 == 前方第2格高度)\n2. 爬小階梯(1秒)：往前走1格。但下一格的高度，只能比現在高1層、一樣高、或是低1層(高度差在1以內)。\n3. 動力大跳躍(3秒)：如果下一格太高了(比現在高出2層或更多)時，必須啟動噴射裝置才跳得上去，但只能往前走1格。\n4. 跨越小坑洞(2秒)：如果前方第1格比較矮(是個洞)，但前方第2格的高度剛好跟現在站的地方一樣高，你可以直接跳過洞口，踩到前方第2格。\n5. 深谷急降(1秒)：往前走1格。這個是用在，如果下一格非常矮(比現在低了2層或更多)，你可以直接垂直降落。\n【輸入說明】\n第1個輸入為整數N，代表小島的總格數。\n接下來N個輸入：代表每一格的地形高度數字(整數)。(以半形空格分隔)\n【輸出說明】\n輸出一個整數，代表機器人到達最後一格所需要花費的「最少秒數」。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小機器人要挑戰穿過一連串高低不平的小島。這條路是由一格一格組成的，每一格都有不同的高度數字(例如：1 1 2 2 1)。小機器人現在站在第1格，目標是走到最後一格。\n向前走的時候，小機器人可以選擇以下5種走路方式，每種方式花掉的時間不一樣，請找出最快(花最少秒數)到達終點的方法：\n1. 平地小衝刺(1秒)： 如果前面的連續兩格高度都跟現在站的地方一樣高，你可以直接衝到前方第2格。(目前高度 == 前方第1格高度 == 前方第2格高度)\n2. 爬小階梯(1秒)：往前走1格。但下一格的高度，只能比現在高1層、一樣高、或是低1層(高度差在1以內)。\n3. 動力大跳躍(3秒)：如果下一格太高了(比現在高出2層或更多)時，必須啟動噴射裝置才跳得上去，但只能往前走1格。\n4. 跨越小坑洞(2秒)：如果前方第1格比較矮(是個洞)，但前方第2格的高度剛好跟現在站的地方一樣高，你可以直接跳過洞口，踩到前方第2格。\n5. 深谷急降(1秒)：往前走1格。這個是用在，如果下一格非常矮(比現在低了2層或更多)，你可以直接垂直降落。\n【輸入說明】\n第1個輸入為整數N，代表小島的總格數。\n接下來N個輸入：代表每一格的地形高度數字(整數)。(以半形空格分隔)\n【輸出說明】\n輸出一個整數，代表機器人到達最後一格所需要花費的「最少秒數」。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "4\n1 1 1 2",
          "output": "2",
          "explanation": "平地小衝刺到第3格(1秒)，\n爬小階梯到第4格(1秒)，\n共花費2秒"
        },
        {
          "input": "4\n3 1 3 6",
          "output": "5",
          "explanation": "跨越小坑洞到第3格(2秒)\n動力大跳躍到第4格(3秒)\n共花費5秒"
        },
        {
          "input": "5\n4 1 2 3 1",
          "output": "4",
          "explanation": "深谷急降到第2格(1秒)\n爬小階梯到第3格(1秒)\n爬小階梯到第4格(1秒)\n深谷急降到第5格(1秒)\n共花費4秒"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e1_n\">n</variable><variable id=\"e1_i\">i</variable><variable id=\"e1_heights\">heights</variable><variable id=\"e1_pos\">pos</variable><variable id=\"e1_cost\">cost</variable><variable id=\"e1_c\">c</variable><variable id=\"e1_n1\">n1</variable><variable id=\"e1_hasNext2\">hasNext2</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_n\">n</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_heights\">heights</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n\">n</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_heights\">heights</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_i\">i</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">UNTIL</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n\">n</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_c\">c</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_heights\">heights</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_n1\">n1</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_heights\">heights</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_hasNext2\">hasNext2</field><value name=\"VALUE\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n\">n</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"4\" else=\"0\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_hasNext2\">hasNext2</field></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_heights\">heights</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></next></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"math_single\"><field name=\"OP\">ABS</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement><value name=\"IF3\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_hasNext2\">hasNext2</field></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_heights\">heights</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value></block></value></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></next></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_n1\">n1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_c\">c</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">-2</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_cost\">cost</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "4\n1 1 1 2",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "4\n3 1 3 6",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "5\n4 1 2 3 1",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "5\n1 1 1 1 1",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "6\n5 1 5 1 5 10",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "4\n1 10 100 1000",
          "expectedOutput": "9",
          "score": 10
        },
        {
          "input": "6\n10 9 8 7 6 5",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "6\n10 5 10 5 10 5",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "6\n2 2 2 2 2 2",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "7\n1 2 3 4 5 6 7",
          "expectedOutput": "6",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
