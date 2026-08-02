var e={code:`CYELEMENT01`,title:`114-嘉義市國小`,type:`programming`,mode:`learning`,description:``,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-01T13:28:18+08:00`,sourceCsv:`data\\problem_bank_master_complete.csv`,version:`PB05-4B`},tasks:[{id:`cyelement-001`,title:`營養午餐分析(1-1)`,problemTitle:`營養午餐分析(1-1)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（1）: 若規定「每 5 天至少要出現1次豆製（C）才算健康」，請檢查：第1～5天是否符合？第 6～10天是否符合？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（1）: 若規定「每 5 天至少要出現1次豆製（C）才算健康」，請檢查：第1～5天是否符合？第 6～10天是否符合？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`},examples:[{input:`B A B A B C D E F F`,output:`N Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天不符合，6~10天符合`},{input:`C A B C D A B C D E`,output:`Y Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天符合，6~10天符合`},{input:`A A A D C E F B B C`,output:`Y Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天符合，6~10天符合`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`N N`,output:`N N`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`Y N`,output:`Y N`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`N Y`,output:`N Y`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`N Y`,output:`N Y`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`Y Y`,output:`Y Y`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_c1">C次數上半週</variable>
    <variable id="var_c2">C次數下半週</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入10天主菜記錄，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_c1">C次數上半週</field>
        <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
        <next><block type="controls_for">
          <field name="VAR" id="var_i">i</field>
          <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
          <value name="TO"><block type="math_number"><field name="NUM">5</field></block></value>
          <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
          <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_c1">C次數上半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c1">C次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement>
          <next><block type="variables_set">
            <field name="VAR" id="var_c2">C次數下半週</field>
            <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
            <next><block type="controls_for">
              <field name="VAR" id="var_i">i</field>
              <value name="FROM"><block type="math_number"><field name="NUM">6</field></block></value>
              <value name="TO"><block type="math_number"><field name="NUM">10</field></block></value>
              <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
              <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_c2">C次數下半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c2">C次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement>
              <next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c1">C次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">Y</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">N</field></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c2">C次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">Y</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">N</field></block></value></block></value></block></value></block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-002`,title:`營養午餐分析(1-2)`,problemTitle:`營養午餐分析(1-2)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（2）: 營養師她想知道每週是否「紅肉攝取過量」。假設規則：「B 的總次數不可超過所有 A + C 次數的總和」。請檢查：第 1～5 天是否有超量？第 6～10 天是否有超量？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（2）: 營養師她想知道每週是否「紅肉攝取過量」。假設規則：「B 的總次數不可超過所有 A + C 次數的總和」。請檢查：第 1～5 天是否有超量？第 6～10 天是否有超量？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`},examples:[{input:`B A B A B C D E F F`,output:`Y N`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`},{input:`C A B C D A B C D E`,output:`N N`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`},{input:`A A A D C E F B B C`,output:`N Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`N Y`,output:`N Y`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`N N`,output:`N N`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`Y N`,output:`Y N`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`N N`,output:`N N`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`N N`,output:`N N`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_a1">A次數上半週</variable>
    <variable id="var_b1">B次數上半週</variable>
    <variable id="var_c1">C次數上半週</variable>
    <variable id="var_a2">A次數下半週</variable>
    <variable id="var_b2">B次數下半週</variable>
    <variable id="var_c2">C次數下半週</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入10天主菜記錄，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
      <field name="VAR" id="var_a1">A次數上半週</field>
      <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_b1">B次數上半週</field>
        <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_c1">C次數上半週</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
            <value name="TO"><block type="math_number"><field name="NUM">5</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">A</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_a1">A次數上半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a1">A次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">B</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_b1">B次數上半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_b1">B次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_c1">C次數上半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c1">C次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement></block></statement>
            <next><block type="variables_set">
      <field name="VAR" id="var_a2">A次數下半週</field>
      <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_b2">B次數下半週</field>
        <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_c2">C次數下半週</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">6</field></block></value>
            <value name="TO"><block type="math_number"><field name="NUM">10</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">A</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_a2">A次數下半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a2">A次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">B</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_b2">B次數下半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_b2">B次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_c2">C次數下半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c2">C次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement></block></statement>
            <next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_b1">B次數上半週</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a1">A次數上半週</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_c1">C次數上半週</field></block></value></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">Y</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">N</field></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_b2">B次數下半週</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a2">A次數下半週</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_c2">C次數下半週</field></block></value></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">Y</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">N</field></block></value></block></value></block></value></block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
    </block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-003`,title:`營養午餐分析(1-3)`,problemTitle:`營養午餐分析(1-3)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（3）: 請分別統計：第 1～5 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？第 6～10 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行: 第一週次數 第二週次數，中間使用1個半形空格分開`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（3）: 請分別統計：第 1～5 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？第 6～10 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行: 第一週次數 第二週次數，中間使用1個半形空格分開`},examples:[{input:`B A B A B C D E F F`,output:`2 0`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天2次，6~10天0次`},{input:`C A B C D A B C D E`,output:`1 1`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天1次，6~10天1次`},{input:`A A A D C E F B B C`,output:`0 0`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天0次，6~10天0次`}],testCases:[{input:`C C C D E F B A B A`,expectedOutput:`0 1`,output:`0 1`,score:10,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`1 0`,output:`1 0`,score:15,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`0 0`,output:`0 0`,score:20,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`1 0`,output:`1 0`,score:25,hidden:!1},{input:`A B A B A B D D D D`,expectedOutput:`2 0`,output:`2 0`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_ab1">AB次數上半週</variable>
    <variable id="var_ab2">AB次數下半週</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入10天主菜記錄，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
      <field name="VAR" id="var_ab1">AB次數上半週</field>
      <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
      <next><block type="controls_for">
        <field name="VAR" id="var_i">i</field>
        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
        <value name="TO"><block type="math_number"><field name="NUM">4</field></block></value>
        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
        <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">A</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="text"><field name="TEXT">B</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_ab1">AB次數上半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_ab1">AB次數上半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement>
        <next><block type="variables_set">
      <field name="VAR" id="var_ab2">AB次數下半週</field>
      <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
      <next><block type="controls_for">
        <field name="VAR" id="var_i">i</field>
        <value name="FROM"><block type="math_number"><field name="NUM">6</field></block></value>
        <value name="TO"><block type="math_number"><field name="NUM">9</field></block></value>
        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
        <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">A</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="text"><field name="TEXT">B</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_ab2">AB次數下半週</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_ab2">AB次數下半週</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement>
        <next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_ab1">AB次數上半週</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_ab2">AB次數下半週</field></block></value></block></value></block></next>
      </block></next>
    </block></next>
      </block></next>
    </block></next>
    </block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-004`,title:`營養午餐分析(1-4)`,problemTitle:`營養午餐分析(1-4)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（4）: 在這10天裡，哪一種主菜出現次數最多？(假設不會出現重複狀況，也就是只有一種主菜是最多)`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行: 出現次數最多的主菜`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（4）: 在這10天裡，哪一種主菜出現次數最多？(假設不會出現重複狀況，也就是只有一種主菜是最多)`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行: 出現次數最多的主菜`},examples:[{input:`B A B A B C D E F F`,output:`B`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`},{input:`C A B C D A B C D E`,output:`C`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`},{input:`A A A D C E F B B C`,output:`A`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`D`,output:`D`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`C`,output:`C`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`F`,output:`F`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`C`,output:`C`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`B`,output:`B`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_cA">次數A</variable>
    <variable id="var_cB">次數B</variable>
    <variable id="var_cC">次數C</variable>
    <variable id="var_cD">次數D</variable>
    <variable id="var_cE">次數E</variable>
    <variable id="var_cF">次數F</variable>
    <variable id="var_max">最大次數</variable>
    <variable id="var_letter">結果字母</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入10天主菜記錄，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_cA">次數A</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_cB">次數B</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_cC">次數C</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_cD">次數D</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_cE">次數E</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_cF">次數F</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for">
        <field name="VAR" id="var_i">i</field>
        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
        <value name="TO"><block type="math_number"><field name="NUM">10</field></block></value>
        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
        <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">A</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cA">次數A</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cA">次數A</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">B</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cB">次數B</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cB">次數B</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cC">次數C</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cC">次數C</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">D</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cD">次數D</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cD">次數D</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">E</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cE">次數E</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cE">次數E</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">F</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_cF">次數F</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cF">次數F</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement>
        <next><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cA">次數A</field></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">A</field></block></value>
        <next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cF">次數F</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大次數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cF">次數F</field></block></value>
          <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">F</field></block></value></block></next>
        </block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cE">次數E</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大次數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cE">次數E</field></block></value>
          <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">E</field></block></value></block></next>
        </block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cD">次數D</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大次數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cD">次數D</field></block></value>
          <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">D</field></block></value></block></next>
        </block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cC">次數C</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大次數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cC">次數C</field></block></value>
          <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">C</field></block></value></block></next>
        </block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_cB">次數B</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大次數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_cB">次數B</field></block></value>
          <next><block type="variables_set"><field name="VAR" id="var_letter">結果字母</field><value name="VALUE"><block type="text"><field name="TEXT">B</field></block></value></block></next>
        </block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_letter">結果字母</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
      </block></next>
    </block></next>
      </block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-005`,title:`停車費計算`,problemTitle:`停車費計算`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`停車場採用階梯式收費方式。停車時會依照停放時間長短來計價，其中停車1小時內有優惠，超過 1小時後依半小時計費。計費方式如下：

1. 停車時間小於或等於30分鐘，收費20 元

2. 停車時間在31~60分鐘之間，收費40 元

3. 若停車時間超過60分鐘，則在60分鐘以後的時間，每30分鐘加收30元，若剩餘不足 30 分鐘，也以 30分鐘計算。

另外單日無論停車時間多長，單日最高收費上限為400元。若停車超過24小時，剩餘不足24小時部分一樣享有1小時優惠。小柔開車於此停車場停放，請計算本次停車應繳的費用。`,inputDescription:`第一行:停車分鐘數(整數)`,outputDescription:`第一行: 應繳納的費用(整數）`,statement:{description:`停車場採用階梯式收費方式。停車時會依照停放時間長短來計價，其中停車1小時內有優惠，超過 1小時後依半小時計費。計費方式如下：

1. 停車時間小於或等於30分鐘，收費20 元

2. 停車時間在31~60分鐘之間，收費40 元

3. 若停車時間超過60分鐘，則在60分鐘以後的時間，每30分鐘加收30元，若剩餘不足 30 分鐘，也以 30分鐘計算。

另外單日無論停車時間多長，單日最高收費上限為400元。若停車超過24小時，剩餘不足24小時部分一樣享有1小時優惠。小柔開車於此停車場停放，請計算本次停車應繳的費用。`,input:`第一行:停車分鐘數(整數)`,output:`第一行: 應繳納的費用(整數）`},examples:[{input:`100`,output:`100`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式:停車60分鐘以40元計算，超過時間每30分鐘加30元，不足30分鐘也收30元，40+30+30=100元`},{input:`820`,output:`400`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式: 停車820分鐘，時間未超過1日(1440分)，但繳費金額超過單日400元上限，故以400元計`},{input:`1443`,output:`420`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式: 停車1443分鐘，時間超過1日(1440分)，單日繳金額400元為上限，隔日的3分鐘繳費20元，故合計為400+20=420元`}],testCases:[{input:`60`,expectedOutput:`40`,output:`40`,score:10,hidden:!1},{input:`61`,expectedOutput:`70`,output:`70`,score:15,hidden:!1},{input:`145`,expectedOutput:`130`,output:`130`,score:20,hidden:!1},{input:`1500`,expectedOutput:`440`,output:`440`,score:25,hidden:!1},{input:`3005`,expectedOutput:`930`,output:`930`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_total">總分鐘數</variable>
    <variable id="var_fulldays">整天數</variable>
    <variable id="var_remainder">剩餘分鐘</variable>
    <variable id="var_totalfee">總費用</variable>
    <variable id="var_dayfee">當日費用</variable>
    <variable id="var_extra">超額分鐘</variable>
    <variable id="var_blocks">半小時區塊數</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_total">總分鐘數</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入停車分鐘數</field></shadow></value></block></value>
    <next><block type="variables_set"><field name="VAR" id="var_fulldays">整天數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分鐘數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1440</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_remainder">剩餘分鐘</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分鐘數</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_fulldays">整天數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1440</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_totalfee">總費用</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_fulldays">整天數</field></block></value><value name="B"><block type="math_number"><field name="NUM">400</field></block></value></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_remainder">剩餘分鐘</field></block></value><value name="B"><block type="math_number"><field name="NUM">30</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_dayfee">當日費用</field><value name="VALUE"><block type="math_number"><field name="NUM">20</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_remainder">剩餘分鐘</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_dayfee">當日費用</field><value name="VALUE"><block type="math_number"><field name="NUM">40</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_extra">超額分鐘</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_remainder">剩餘分鐘</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_blocks">半小時區塊數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_extra">超額分鐘</field></block></value><value name="B"><block type="math_number"><field name="NUM">30</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_dayfee">當日費用</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_number"><field name="NUM">40</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_blocks">半小時區塊數</field></block></value><value name="B"><block type="math_number"><field name="NUM">30</field></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_dayfee">當日費用</field></block></value><value name="B"><block type="math_number"><field name="NUM">400</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_dayfee">當日費用</field><value name="VALUE"><block type="math_number"><field name="NUM">400</field></block></value></block></statement></block></next></block></next></block></next></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_totalfee">總費用</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_totalfee">總費用</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_dayfee">當日費用</field></block></value></block></value><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_totalfee">總費用</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-006`,title:`班級活動票選`,problemTitle:`班級活動票選`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!1,description:`班上將舉辦期末班級活動，本次活動地點有5個候選選項，編號為1、2、3、4、5，每位同學有1票。請設計一個程式讀取所有同學投票的地點編號，統計每個地點的得票數，並依下列規則輸出結果

1.若只有一個地點得票最高，輸出該地點編號。

2.若最高票有多個地點同票，輸出全部最高票的地點編號，並依照地點編號大小，由小到大依序排列。`,inputDescription:`第一行:投票人數(整數)。

第二行:每票選擇的活動地點編號(中間使用1個半形空格分開)。`,outputDescription:`第一行:輸出最高票活動地點編號或是全部並列最高票的活動地點編號(中間使用1個半形空格分開，同時依照地點編號大小，由小到大排列)。`,statement:{description:`班上將舉辦期末班級活動，本次活動地點有5個候選選項，編號為1、2、3、4、5，每位同學有1票。請設計一個程式讀取所有同學投票的地點編號，統計每個地點的得票數，並依下列規則輸出結果

1.若只有一個地點得票最高，輸出該地點編號。

2.若最高票有多個地點同票，輸出全部最高票的地點編號，並依照地點編號大小，由小到大依序排列。`,input:`第一行:投票人數(整數)。

第二行:每票選擇的活動地點編號(中間使用1個半形空格分開)。`,output:`第一行:輸出最高票活動地點編號或是全部並列最高票的活動地點編號(中間使用1個半形空格分開，同時依照地點編號大小，由小到大排列)。`},examples:[{input:`4
1 5 1 5`,output:`1 5`,explanation:`輸入部分
第1行 代表有4位投票人員
第2行 代表4張選票所圈選的地點編號
輸出部分
第1行 代表地點1與地點5獲得最高票，需要重新投票`},{input:`5
1 2 1 1 4`,output:`1`,explanation:`輸入部分
第1行 代表有5位投票人員
第2行 代表5張選票所圈選的地點編號
輸出部分
第1行 代表地點1獲得最高票`},{input:`8
3 4 5 1 3 4 5 1`,output:`1 3 4 5`,explanation:`輸入部分
第1行 代表有8位投票人員
第2行 代表8張選票所圈選的地點編號
輸出部分
第1行 代表地點1、3、4、5獲得最高票，需要重新投票`}],testCases:[{input:`4
1 2 1 3`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`6
5 1 5 2 1 4`,expectedOutput:`1 5`,output:`1 5`,score:15,hidden:!1},{input:`8
2 2 2 2 2 2 2 2`,expectedOutput:`2`,output:`2`,score:20,hidden:!1},{input:`10
1 2 3 4 5 1 2 3 4 5`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:25,hidden:!1},{input:`10
3 3 3 5 5 5 4 4 4 1`,expectedOutput:`3 4 5`,output:`3 4 5`,score:30,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">投票人數</variable>
    <variable id="var_line2">選票列</variable>
    <variable id="var_votes">選票清單</variable>
    <variable id="var_v1">票數1</variable>
    <variable id="var_v2">票數2</variable>
    <variable id="var_v3">票數3</variable>
    <variable id="var_v4">票數4</variable>
    <variable id="var_v5">票數5</variable>
    <variable id="var_max">最高票數</variable>
    <variable id="var_result">結果文字</variable>
    <variable id="var_isfirst">是否為第一筆</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_n">投票人數</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入投票人數</field></shadow></value></block></value>
    <next><block type="variables_set"><field name="VAR" id="var_line2">選票列</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入每票地點編號，以空白分隔</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="var_votes">選票清單</field><value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line2">選票列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="var_v1">票數1</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_v2">票數2</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_v3">票數3</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_v4">票數4</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_v5">票數5</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for">
  <field name="VAR" id="var_i">i</field>
  <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
  <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">投票人數</field></block></value>
  <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
  <statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_votes">選票清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_v1">票數1</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v1">票數1</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_votes">選票清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_v2">票數2</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v2">票數2</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_votes">選票清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_v3">票數3</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v3">票數3</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_votes">選票清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_v4">票數4</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v4">票數4</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_votes">選票清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">5</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_v5">票數5</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v5">票數5</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement>
  <next><block type="variables_set"><field name="VAR" id="var_max">最高票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_v1">票數1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v2">票數2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最高票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_v2">票數2</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v3">票數3</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最高票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_v3">票數3</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v4">票數4</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最高票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_v4">票數4</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v5">票數5</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最高票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_v5">票數5</field></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value>
    <next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value>
      <next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v1">票數1</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="var_isfirst">是否為第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="text"><field name="TEXT">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text"><field name="TEXT">1</field></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v2">票數2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="var_isfirst">是否為第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="text"><field name="TEXT">2</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text"><field name="TEXT">2</field></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v3">票數3</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="var_isfirst">是否為第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="text"><field name="TEXT">3</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text"><field name="TEXT">3</field></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v4">票數4</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="var_isfirst">是否為第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="text"><field name="TEXT">4</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text"><field name="TEXT">4</field></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_v5">票數5</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最高票數</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="var_isfirst">是否為第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="text"><field name="TEXT">5</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isfirst">是否為第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text"><field name="TEXT">5</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block></next></block></next></block></next></block></next></block></next></block></next>
</block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};