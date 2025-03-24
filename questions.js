const quizData = [
    {
        question: "一名外籍移工剛至臺灣的第 3 天，於醫院接受腸道寄生蟲檢查，醫檢師發現其糞便內有許多肝毛線蟲(Capillaria hepatica)蟲卵，下列敘述何者最適當？",
        options: [
            "該外籍移工在母國因為嗜食魚的肝臟，而受到肝毛線蟲蟲卵的感染(egg infection)",
            "該外籍移工在母國因為嗜食鼠的肝臟，而受到肝毛線蟲幼蟲的感染(larval infection)",
            "該外籍移工在母國因為嗜食鵝的肝臟，而受到肝毛線蟲蟲卵的感染(egg infection)",
            "該外籍移工其實是一種假性感染(spurious infection)"
        ],
        answer: "該外籍移工其實是一種假性感染(spurious infection)",
        explanation: `答案是：D. 該外籍移工其實是一種假性感染(spurious infection)。解析：肝毛線蟲 (Capillaria hepatica) 主要寄生於**哺乳動物（尤其是鼠類）**的肝臟，並在宿主死亡後，當屍體分解或被其他動物吞食時，蟲卵才有機會釋放到外界環境。蟲卵需要經過一段時間在土壤中發育後才能具備感染性，因此，人類不會直接因為食用受感染動物的肝臟而感染該寄生蟲。當人類的糞便中出現肝毛線蟲蟲卵，通常是因為食入含有蟲卵的動物肝臟後，蟲卵通過腸道排出，而沒有真正的組織感染，這種情況稱為假性感染（spurious infection）。由於這位外籍移工剛來臺灣 3 天，不可能在這麼短的時間內完成該寄生蟲的感染週期，因此最合理的解釋是他在母國食用了受感染的動物肝臟，蟲卵只是隨著糞便排出。`
    },
    {
        question: "下列有關蟯蟲(Enterobius vermicularis)感染的敘述，何者錯誤？",
        options: [
            "感染後易於夜間導致睡眠病(sleeping sickness)",
            "蟲卵可藉空氣傳播感染人體",
            "婦女感染後有可能引起慢性骨盆腔腹膜炎(pelvic peritonitis)",
            "最正確的診斷方式為肛圍擦拭法(perianal swab)檢查是否有蟲卵"
        ],
        answer: "感染後易於夜間導致睡眠病(sleeping sickness)",
        explanation: `答案是：A. 感染後易於夜間導致睡眠病(sleeping sickness)\n
        解析： 蟯蟲 (*Enterobius vermicularis*) 感染通常會引起**肛門周圍瘙癢**，特別是在晚上，因為雌蟯蟲會在夜間爬出來產卵，這是常見的症狀，但它不會導致所謂的「睡眠病」（sleeping sickness）。睡眠病是由**奈及利亞睡眠病（Trypanosoma）**引起的，而不是蟯蟲。\n
        其他選項正確的原因如下：\n
        - **B. 蟲卵可藉空氣傳播感染人體**：蟯蟲的蟲卵非常小，會隨著空氣中的灰塵或接觸物品散播，因此可以藉由空氣或接觸傳播給人。\n
        - **C. 婦女感染後有可能引起慢性骨盆腔腹膜炎**：蟯蟲感染在女性中有可能造成遷移感染，進而引發骨盆腔感染或腹膜炎。\n
        - **D. 最正確的診斷方式為肛圍擦拭法(perianal swab)檢查是否有蟲卵**：診斷蟯蟲感染的金標準是使用肛圍擦拭法收集蟯蟲蟲卵，然後進行顯微鏡檢查。\n`
    },
    {
        question: "下列有關血吸蟲的敘述，何者錯誤？",
        options: [
            "雌雄同體，具口吸盤和腹吸盤",
            "中間宿主釋出之尾動幼蟲(cercaria)可以穿透人的皮膚",
            "曼森血吸蟲(Schistosoma mansoni)的分布地區最廣",
            "致病機轉主要來自宿主對蟲卵的免疫反應"
        ],
        answer: "雌雄同體，具口吸盤和腹吸盤",
        explanation: `答案是：  **A. 雌雄同體，具口吸盤和腹吸盤**\n
        **簡單解析：血吸蟲是**雌雄異體**的，雌蟲與雄蟲不同，並且血吸蟲具有**腹吸盤**，但**沒有口吸盤**。`
    },
    {
        question: "人類感染下列何種寄生蟲之主要途徑，不是經由飲用受污染的水所致？",
        options: [
            "環孢子蟲（Cyclospora cayetanensis）",
            "弓蟲（Toxoplasma gondii）",
            "梨形鞭毛蟲（Giardia lamblia / G. intestinalis）",
            "隱孢子蟲（Cryptosporidium spp.）"
        ],
        answer: "弓蟲（Toxoplasma gondii）",
        explanation: `答案是：**B. 弓蟲（Toxoplasma gondii）**
        ### **簡單解析：**  
        弓蟲感染主要是通過食用受污染的肉類（特別是生肉或未煮熟的肉）或接觸受污染的貓糞，而不是飲用受污染的水。其他選項的寄生蟲（環孢子蟲、梨形鞭毛蟲和隱孢子蟲）都是通過飲用受污染的水而感染。`
    },
    {
        question: "有關間日瘧原蟲(Plasmodium vivax)，下列敘述何者錯誤？",
        options: [
            "其裂殖子(merozoite)主要侵犯年輕的紅血球，如網狀紅血球(reticulocyte)",
            "Duffy 血型抗原是該瘧原蟲的附著部位",
            "由間日瘧原蟲造成的瘧疾在西非最為常見",
            "因紅血球破裂，大量裂殖子(merozoite)、細胞殘骸及血紅素釋出，造成畏寒、發燒的臨床症狀"
        ],
        answer: "由間日瘧原蟲造成的瘧疾在西非最為常見",
        explanation: `答案是：  
        **C. 由間日瘧原蟲造成的瘧疾在西非最為常見**

        ### **簡單解析：**  
        間日瘧原蟲（*Plasmodium vivax*）在**東南亞**和**中南美洲**的感染較為常見，而在**西非**，最常見的瘧疾致病原是**惡性瘧原蟲（*Plasmodium falciparum*）**。其他選項正確地描述了間日瘧原蟲的特徵與致病機轉。`
    },
    {
        
        question: "下列有關隱孢子蟲(Cryptosporidium spp.)，下列敘述何者錯誤？",
        options: [
            "人隱孢子蟲(C. hominis)及小隱孢子蟲(C. parvum)最常感染人類",
            "僅存在於宿主腸道上皮刷狀緣",
            "隱孢子蟲症主要是經水傳播",
            "可在腹瀉患者糞便中找到大量活動體(trophozoites)"
        ],
        answer: ["僅存在於宿主腸道上皮刷狀緣", "可在腹瀉患者糞便中找到大量活動體(trophozoites)"],  // 兩個正確答案
        explanation: `隱孢子蟲(Cryptosporidium spp.)的錯誤敘述：
        D. 可在腹瀉患者糞便中找到大量活動體(trophozoites)

        簡單解析：
        隱孢子蟲在糞便中並不以**活動體（trophozoites）形式存在，而是以囊體（oocyst）**的形式排出。活動體通常出現在宿主腸道內`
    },
    {
        question: "下列何種疾病的主要病媒(vector)不是體蝨(body louse)？",
        options: [
            "流行性斑疹傷寒(epidemic typhus)",
            "回歸熱(relapsing fever)",
            "地方性斑疹傷寒(endemic typhus)",
            "戰壕熱(trench fever)"
        ],
        answer: "地方性斑疹傷寒(endemic typhus)",
        explanation: `B. 回歸熱(relapsing fever)

        簡單解析：
        回歸熱的主要病媒是軟蜱（soft ticks），而不是體蝨。其他選項中的疾病（流行性斑疹傷寒、地方性斑疹傷寒、戰壕熱）都是由體蝨傳播的。`
    }
];



