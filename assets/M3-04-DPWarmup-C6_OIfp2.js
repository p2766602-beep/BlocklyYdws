var e={code:`M3-04-DPWarmup`,title:`動態規劃暖身`,type:`programming`,mode:`learning`,tier:`t3`,tasks:[{id:`M3-04-01`,title:`爬樓梯方法數`,description:`小朋友在爬樓梯，每一步可以爬1階或2階，請問爬到第N階，總共有幾種不同的爬法？（N保證大於等於1）

第一行輸入N

輸出爬到第N階的方法數。`,inputDescription:`N`,outputDescription:`爬法總數`,requiresGreenFlag:!0,examples:[{input:`5`,output:`8`,explanation:`第5階的方法數=第4階方法數+第3階方法數=5+3=8`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:25},{input:`2`,expectedOutput:`2`,output:`2`,score:25},{input:`5`,expectedOutput:`8`,output:`8`,score:25},{input:`8`,expectedOutput:`34`,output:`34`,score:25}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`M3-04-02`,title:`最小花費爬樓梯`,description:`每一階樓梯都有一個花費，你可以選擇從第1階或第2階開始爬（不用付出發那階的費用以外的額外代價），每次可以往上爬1階或2階，最終目標是離開樓梯（爬過最後一階或倒數第二階再跨一步出去都算離開）。請問離開樓梯最少要花多少錢？

第一行輸入N，代表共有N階樓梯

第二行輸入N個數字，代表第1階到第N階（由1開始編號）各自的花費

輸出離開樓梯的最小花費。`,inputDescription:`N、N個花費數字`,outputDescription:`最小花費`,requiresGreenFlag:!0,examples:[{input:`3
10 15 20`,output:`15`,explanation:`從第2階(花費15)出發，直接跨兩步離開樓梯，只需付15`}],testCases:[{input:`3
10 15 20`,expectedOutput:`15`,output:`15`,score:25},{input:`4
1 100 1 1`,expectedOutput:`2`,output:`2`,score:25},{input:`2
5 6`,expectedOutput:`5`,output:`5`,score:25},{input:`5
1 2 3 4 5`,expectedOutput:`6`,output:`6`,score:25}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`M3-04-03`,title:`不能選相鄰兩個的最大總和`,description:`一排數字，請你從中挑選一些數字（可以不挑），規則是不能同時挑選相鄰的兩個位置，求挑選出來的數字總和最大是多少。

第一行輸入N

第二行輸入N個數字

輸出可以選出的最大總和。`,inputDescription:`N、N個數字`,outputDescription:`最大總和`,requiresGreenFlag:!0,examples:[{input:`5
3 2 5 10 7`,output:`15`,explanation:`選第1、3、5個數字：3+5+7=15，彼此都不相鄰`}],testCases:[{input:`5
3 2 5 10 7`,expectedOutput:`15`,output:`15`,score:25},{input:`1
5`,expectedOutput:`5`,output:`5`,score:25},{input:`2
5 1`,expectedOutput:`5`,output:`5`,score:25},{input:`4
1 2 3 1`,expectedOutput:`4`,output:`4`,score:25}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`M3-04-04`,title:`硬幣湊金額最少枚數`,description:`有K種硬幣面額可以使用（面額中一定包含1，所以任何金額都湊得出來），每種面額可以重複使用，請你算出湊出目標金額amount最少需要幾枚硬幣。

第一行輸入K，代表有K種硬幣面額

第二行輸入K個數字，代表各面額（保證其中包含1）

第三行輸入amount，代表目標金額

輸出最少需要的硬幣枚數。`,inputDescription:`K、K個硬幣面額、amount`,outputDescription:`最少硬幣枚數`,requiresGreenFlag:!0,examples:[{input:`3
1 5 10
18`,output:`5`,explanation:`用10+5+1+1+1共5枚湊出18`}],testCases:[{input:`3
1 5 10
18`,expectedOutput:`5`,output:`5`,score:25},{input:`3
1 5 10
10`,expectedOutput:`1`,output:`1`,score:25},{input:`3
1 3 4
6`,expectedOutput:`2`,output:`2`,score:25},{input:`1
1
7`,expectedOutput:`7`,output:`7`,score:25}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`M3-04-05`,title:`方格地圖走法數`,description:`有一個R列C行的方格地圖，你從左上角（第1列第1行）出發，每次只能往右走一格或往下走一格，請問走到右下角（第R列第C行）總共有幾種不同的走法？

第一行輸入R C

輸出走法總數。`,inputDescription:`R C`,outputDescription:`走法總數`,requiresGreenFlag:!0,examples:[{input:`3 3`,output:`6`,explanation:`3x3方格從左上到右下，總共有6種不同走法`}],testCases:[{input:`3 3`,expectedOutput:`6`,output:`6`,score:25},{input:`2 2`,expectedOutput:`2`,output:`2`,score:25},{input:`1 5`,expectedOutput:`1`,output:`1`,score:25},{input:`3 4`,expectedOutput:`10`,output:`10`,score:25}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`M3-04-06`,title:`兩字串最長共同子序列長度`,description:`給你兩個字串，請你求出它們的『最長共同子序列』長度（子序列不需要連續出現，但字母的相對先後順序要一致）。

第一行輸入字串A

第二行輸入字串B

輸出最長共同子序列的長度。`,inputDescription:`字串A、字串B`,outputDescription:`最長共同子序列長度`,requiresGreenFlag:!0,examples:[{input:`ABCDE
ACE`,output:`3`,explanation:`A、C、E依序出現在兩個字串中，長度3`}],testCases:[{input:`ABC
AC`,expectedOutput:`2`,output:`2`,score:25},{input:`ABCDE
ACE`,expectedOutput:`3`,output:`3`,score:25},{input:`AAAA
AA`,expectedOutput:`2`,output:`2`,score:25},{input:`ABC
DEF`,expectedOutput:`0`,output:`0`,score:25}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``}]};export{e as default};