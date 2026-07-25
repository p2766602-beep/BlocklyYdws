var e={code:`M1-06-StringFormat`,title:`字串處理進階：格式與編碼`,type:`programming`,mode:`learning`,tier:`t1`,tasks:[{id:`JSS01-D03`,title:`逐字元輸出`,description:`輸入一個字串，請依序輸出每一個字元，每個字元各佔一行。本題用來示範用迴圈逐一處理字元。
輸入格式：
第一行：一個不含空白的字串 S。
輸出格式：
依序輸出 S 的每一個字元，每個字元各佔一行。`,inputDescription:`第一行：一個不含空白的字串 S。`,outputDescription:`依序輸出 S 的每一個字元，每個字元各佔一行。`,examples:[{input:`cat`,output:`c
a
t`,explanation:`依序輸出 c、a、t。`},{input:`Hi`,output:`H
i`,explanation:`依序輸出 H、i。`}],testCases:[{input:`cat`,expectedOutput:`c
a
t`,output:`c
a
t`,score:20},{input:`Hi`,expectedOutput:`H
i`,output:`H
i`,score:20},{input:`A`,expectedOutput:`A`,output:`A`,score:20},{input:`code`,expectedOutput:`c
o
d
e`,output:`c
o
d
e`,score:20},{input:`123`,expectedOutput:`1
2
3`,output:`1
2
3`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`JSS01-P01`,title:`指定字元出現次數`,description:`第一行輸入一個字串 S，第二行輸入一個字元 C。請計算 C 在 S 中出現幾次。本題用來練習字串遍歷與條件計數。
輸入格式：
第一行：一個不含空白的字串 S。
第二行：一個字元 C。
輸出格式：
輸出 C 在 S 中出現的次數。`,inputDescription:`第一行：一個不含空白的字串 S。

第二行：一個字元 C。`,outputDescription:`輸出 C 在 S 中出現的次數。`,examples:[{input:`banana
a`,output:`3`,explanation:`a 在 banana 中出現 3 次。`},{input:`code
z`,output:`0`,explanation:`z 沒有出現。`}],testCases:[{input:`banana
a`,expectedOutput:`3`,output:`3`,score:20},{input:`code
z`,expectedOutput:`0`,output:`0`,score:20},{input:`hello
l`,expectedOutput:`2`,output:`2`,score:20},{input:`aaaaa
a`,expectedOutput:`5`,output:`5`,score:20},{input:`Blockly
o`,expectedOutput:`1`,output:`1`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`JSS01-P02`,title:`簡易格式檢查`,description:`輸入一個字串 S。若 S 的長度為 4，輸出 OK；否則輸出 NG。本題用來練習簡單的字串格式檢查。
輸入格式：
第一行：一個不含空白的字串 S。
輸出格式：
若 S 長度為 4，輸出 OK；否則輸出 NG。`,inputDescription:`第一行：一個不含空白的字串 S。`,outputDescription:`若 S 長度為 4，輸出 OK；否則輸出 NG。`,examples:[{input:`ABCD`,output:`OK`,explanation:`ABCD 長度為 4。`},{input:`ABC`,output:`NG`,explanation:`ABC 長度不是 4。`}],testCases:[{input:`ABCD`,expectedOutput:`OK`,output:`OK`,score:20},{input:`ABC`,expectedOutput:`NG`,output:`NG`,score:20},{input:`1234`,expectedOutput:`OK`,output:`OK`,score:20},{input:`hello`,expectedOutput:`NG`,output:`NG`,score:20},{input:`A`,expectedOutput:`NG`,output:`NG`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`A-10-0`,title:`多科成績計算`,description:`小明參加了數學、英文、自然...等多科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入多科的成績，計算總分與平均。

第一行輸入共有幾科

第二行依序輸入各科成績，科成績之間以空白間隔

計算總分，平均成績以四捨五入取整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,inputDescription:``,outputDescription:``,examples:[{input:`3
80 70 90`,output:`240
80
及格`,explanation:`第一行輸入3，表示後面會有3個數字輸入
第二行輸入80 70 90，經過計算後
總分180、平均80、及格`},{input:`6
50 41 60 55 70 65`,output:`341
57
不及格`,explanation:`第一行輸入6，表示後面會有3個數字輸入
第二行輸入50 41 60 55 70 65，經過計算後
程式輸出總分341、平均57、不及格`}],testCases:[{input:`3
20 60 90`,expectedOutput:`170 57 不及格`,output:`170 57 不及格`,score:10},{input:`6
50 41 60 55 70 65`,expectedOutput:`341 57 不及格`,output:`341 57 不及格`,score:10},{input:`5
80 70 75 85 90`,expectedOutput:`400 80 及格`,output:`400 80 及格`,score:10},{input:`1
55`,expectedOutput:`55 55 不及格`,output:`55 55 不及格`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`A-11-0`,title:`計算字元出現次數`,description:`請設計程式，輸入一個字串，並輸入一個英文字母輸出該字母在字串中出現的次數。

這樣的練習可以訓練你操作字串與統計。`,inputDescription:``,outputDescription:``,examples:[{input:`banana
a`,output:`3`,explanation:`第一行輸入banana
第二行輸入字元a
程式運算比對a出現3次
程式輸出3`},{input:`student
t`,output:`2`,explanation:`第一行輸入student
第二行輸入字元t
程式運算比對t出現2次
程式輸出2`}],testCases:[{input:`Goodmoning
o`,expectedOutput:`3`,output:`3`,score:10},{input:`ChaiYiCity
i`,expectedOutput:`3`,output:`3`,score:10},{input:`announcement
n`,expectedOutput:`4`,output:`4`,score:10},{input:`experimen
e`,expectedOutput:`3`,output:`3`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`A-12-0`,title:`簡易密碼轉換`,description:`小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。

密碼環：abcdefghijklmnopqrstuvwxyz

請寫一個程式，輸入一個英文單字，輸出轉換後的字串。

這樣的練習訓練你字元處理與條件轉換。`,inputDescription:``,outputDescription:``,examples:[{input:`banana`,output:`dcpcpc`,explanation:`第一行輸入banana
程式運算，將字串往後移2個位置加密
程式輸出dcpcpc`},{input:`student`,output:`uvwfgpv`,explanation:`第一行輸入student
程式運算，將字串往後移2個位置加密
程式輸出uvwfgpv`}],testCases:[{input:`goodmoning`,expectedOutput:`iqqfoqpkpi`,output:`iqqfoqpkpi`,score:10},{input:`chaiyicity`,expectedOutput:`ejckakekva`,output:`ejckakekva`,score:10},{input:`announcement`,expectedOutput:`cppqwpegogpv`,output:`cppqwpegogpv`,score:10},{input:`experimen`,expectedOutput:`gzrgtkogp`,output:`gzrgtkogp`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycjunior-002`,title:`5進位解碼`,description:`程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：
A=0, B=1, C=2, D=3, E=4，
例如密碼 BC 代表 5進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。
1. 輸入密碼長度 L 與密碼內容（由A-E組成）。
2. 權重計算：最右邊位數是 5的0次方(任何數的0次方為1)，左邊一位是 5的1次方，以此類推。
3. 將每個字母轉換為對應數值後，計算總和。
輸入格式：
第一行：整數 L。
第二行：L 個字元（以空格分隔，如 B C）。
輸出格式：
一個整數（10 進位數值）。`,inputDescription:`第一行：整數 L。

第二行：L 個字元（以空格分隔，如 B C）。`,outputDescription:`一個整數（10 進位數值）。`,examples:[{input:`2
B C`,output:`7`,explanation:`B=1, C=2。
1 × 5 + 2 = 7。`},{input:`3
B A E`,output:`29`,explanation:`B=1, A=0, E=4。
1 × 25 + 0 × 5 + 4 × 1 = 29。`}],testCases:[{input:`1
A`,expectedOutput:`0`,output:`0`,score:10},{input:`2
E E`,expectedOutput:`24`,output:`24`,score:15},{input:`3
B A A`,expectedOutput:`25`,output:`25`,score:20},{input:`4
B A A A`,expectedOutput:`125`,output:`125`,score:25},{input:`5
C D E A B`,expectedOutput:`1726`,output:`1726`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`TYTN-10`,title:`檢查碼`,description:`書店會員卡享有購書8折優惠，為避免有人偽造會員卡，書店老闆在卡號中加入檢查碼。

會員卡編號格式為：一個英文字母 + 4個數字 + 1個檢查碼。

英文字母對應的數字如下：

A → 11 B → 13 C → 15 D → 17

若為正確的會員卡號，則 (英文字母對應的數字 + 4個數字 + 檢查碼) 除以 5 的餘數會是 4，其餘情況皆為不正確。

例如：

B20135 = 13+2+0+1+3+5 = 24 → 24÷5=4餘4 → 正確會員卡

A15274 = 11+1+5+2+7+4 = 30 → 30÷5=6餘0 → 不正確會員卡

請寫一個程式判斷會員卡號是否正確，若正確輸出 yes，否則輸出 no。`,inputDescription:``,outputDescription:``,examples:[{input:`C20351`,output:`no`,explanation:`C20351 = 15+2+0+3+5+1 = 26
26÷5 = 5餘1 → 不正確會員卡。`},{input:`D15713`,output:`yes`,explanation:`D15713 = 17+1+5+7+1+3 = 34
34÷5 = 6餘4 → 正確會員卡。`}],testCases:[{input:`C20351`,expectedOutput:`no`,output:`no`,score:10},{input:`D15713`,expectedOutput:`yes`,output:`yes`,score:10},{input:`A40244`,expectedOutput:`no`,output:`no`,score:10},{input:`B99994`,expectedOutput:`no`,output:`no`,score:10},{input:`A22146`,expectedOutput:`no`,output:`no`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`W4-01`,title:`數位顯示器`,description:`七段顯示器是一種常見的數字顯示裝置，由 7 條 LED 燈條組成，可用來顯示數字 0~9。
每個數字所需點亮的 LED 燈條數量如下：
0→6條、1→2條、2→5條、3→5條、4→4條、5→5條、6→6條、7→3條、8→7條、9→6條。
現在給定 N 條可用的 LED 燈條，請你使用這些燈條組成一個「數字（可為雙位數）」，並且必須符合以下規則：
1. 數字（0~9）最多只能各使用一次（兩位數時十位與個位不能相同）。
2. 組成的數字不可有前導零（除非答案本身就是 0）。
3. 組成的數字最多只能有 2 位（0~99）。
請設計一個程式，找出在符合上述條件下「剛好用完所有 N 條 LED 燈條」時，可以組成的最大值。
若無法用 1 位數或 2 位數剛好用完所有 N 條 LED 燈條，請輸出 -1。
【輸入格式】
一行輸入一個整數 N（2 ≤ N ≤ 30），代表可用的 LED 燈條數。
【輸出格式】
一行輸出可組成的最大值（最大值 < 100），若不存在則輸出 -1。`,inputDescription:`一行輸入一個整數 N（2 ≤ N ≤ 30），代表可用的 LED 燈條數。`,outputDescription:`一行輸出可組成的最大值（最大值 < 100），若不存在則輸出 -1。`,examples:[{input:`3`,output:`7`,explanation:`3 條燈條可以組成數字 7（需要 3 條）。`},{input:`7`,output:`74`,explanation:`7(3條)+4(4條)=7。可組成 74 或 47，最大為 74。`}],testCases:[{input:`3`,expectedOutput:`7`,output:`7`,score:10},{input:`7`,expectedOutput:`74`,output:`74`,score:15},{input:`6`,expectedOutput:`41`,output:`41`,score:20},{input:`8`,expectedOutput:`91`,output:`91`,score:25},{input:`14`,expectedOutput:`-1`,output:`-1`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`A-10-1`,title:`加權成績計算`,description:`大明綜合高中辦理考試，不同科系考試科目數量、每周上課時數不一定相同

成績計算時，以每一科成績乘以該科上課時數為加權成績，將所有科目的加權成績加總，並除以全部科目總時數，即為學生加權平均成績

請設計一個程式，輸入各科的成績、各科加權時數，程式運算後輸出加權總分、加權平均、等弟。

第一行輸入N，代表該科共有N科考試成績

第二行依序輸入N筆各科成績，各科成績之間以空白間隔

第三行依序輸入N筆各科對應加權時數，各科加權時數之間以空白間隔

計算全部加權總分，加權平均成績以四捨五入取整數

如果平均分數大於等於 80，就是「A」等第，小於80大於等於70則是「B」等第，小於70大於等於60則是「C」等第，否則是「D」等第。

程式輸出加權總分、加權平均、等弟。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,inputDescription:``,outputDescription:``,examples:[{input:`3
80 70 90
1 2 1`,output:`310
78
B`,explanation:`第一行輸入3，表示後面會有3科成績輸入
第二行輸入各科原始成績80 70 90
第三行輸入各科加權時數1 2 1
程式運算輸出加權總分310、平均78、等第B`},{input:`6
50 41 60 55 70 65`,output:`668
56
D`,explanation:`第一行輸入6，表示後面會有6科成績輸入
第二行輸入各科原始成績50 41 60 55 70 65
第三行輸入各科加權時數1 3 3 2 2 1
程式運算輸出加權總分668、平均56、等第D`}],testCases:[{input:`1
80
3`,expectedOutput:`240 80 A`,output:`240 80 A`,score:10},{input:`6
50 41 60 55 70 65
1 3 3 2 2 1`,expectedOutput:`668 56 D`,output:`668 56 D`,score:10},{input:`5
80 70 75 85 90
1 1 3 2 1`,expectedOutput:`635 79 B`,output:`635 79 B`,score:10},{input:`3
55 90 99
2 3 3`,expectedOutput:`677 85 A`,output:`677 85 A`,score:10}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``},{id:`A-11-1`,title:`計算字元出現最多次數`,description:`請設計程式，輸入一字串由小寫英文字母組合，長度1~50間的字串

程式會統計該字串的字母中，出現最多的次數。

這樣的練習可以訓練你循環計數迴圈與字串統計。`,inputDescription:``,outputDescription:``,examples:[{input:`banana`,output:`3`,explanation:`第一行輸入banana
程式運算比對，出現最多為a，共出現3次
程式輸出3`},{input:`student`,output:`2`,explanation:`第一行輸入student
程式運算比對，出現最多為t，共出現2次
程式輸出2`},{input:`spider`,output:`1`,explanation:`第一行輸入spider
程式運算比對，全部字母都只出現1次
程式輸出1`}],testCases:[{input:`goodmoning`,expectedOutput:`3`,output:`3`,score:10},{input:`ChaiYiCity`,expectedOutput:`3`,output:`3`,score:10},{input:`announment`,expectedOutput:`4`,output:`4`,score:10},{input:`experimen`,expectedOutput:`3`,output:`3`,score:10},{input:`junior`,expectedOutput:`1`,output:`1`,score:10}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``},{id:`A-12-1`,title:`動態密碼轉換`,description:`小明設計了一種英文字元密碼環編碼規則：

密碼環為『abcdefghijklmnopqrstuvwxyz0123456789』

第一行輸入數字N(N介於0~36)，N為編碼位移值

編碼時，待編碼字串每個字元都按照密碼環『往前』移動N個位置

如果轉換後密碼超過密碼環最後一個字元9，則從回前面a繼續接回密碼環

請寫一個程式，輸入一個英文單字，程式輸出依照編碼規則轉換後的密碼字串。

這樣的練習訓練你字元處理與條件轉換。`,inputDescription:``,outputDescription:``,examples:[{input:`2
banana`,output:`98l8l8`,explanation:`第一行輸入2，表示編碼時要往後前2個位置
第二行輸入banana表示待編碼字串為banana
程式運算，將字串往後移2個位置加密
程式輸出98l8l8`},{input:`10
student`,output:`ijk34dj`,explanation:`第一行輸入10，表示編碼時要往後前10個位置
第二行輸入student表示待編碼字串為student
程式運算，將字串往後移10個位置加密
程式輸出ijk34dj`}],testCases:[{input:`12
goodmoning`,expectedOutput:`4cc1acb6b4`,output:`4cc1acb6b4`,score:10},{input:`29
chaiyicity`,expectedOutput:`johp5pjp05`,output:`johp5pjp05`,score:10},{input:`9
announcement`,expectedOutput:`1eefle35d5ek`,output:`1eefle35d5ek`,score:10},{input:`0
experimen`,expectedOutput:`experimen`,output:`experimen`,score:10}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``}]};export{e as default};