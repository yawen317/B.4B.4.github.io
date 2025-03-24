document.addEventListener("DOMContentLoaded", function () { 
    const quizContainer = document.getElementById("quizContainer");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("resultDiv");

    // 隨機選擇問題
    function getRandomQuestions(questions, num) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);  // 隨機排列
        return shuffled.slice(0, num);  // 取前num題
    }

    // 生成問題和選項的HTML結構
    function createQuestionElement(q, index) {
        const questionElement = document.createElement("p");
        questionElement.textContent = `${index + 1}. ${q.question}`;

        const optionsContainer = document.createElement("div");  // 用於包裝選項

        q.options.forEach(option => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(label);
        });

        return { questionElement, optionsContainer };
    }

    // 顯示詳解與選擇的答案
    function createExplanationElement(selectedOption, isCorrect, explanationText) {
        const explanationElement = document.createElement("p");
        const answerText = isCorrect ? "正確" : "錯誤";
        explanationElement.textContent = `你的回答：${selectedOption.value} (${answerText})`;

        const explanationTitle = document.createElement("p");
        explanationTitle.textContent = "詳解：";

        const explanation = document.createElement("p");
        explanation.textContent = explanationText;

        return [explanationElement, explanationTitle, explanation];
    }

    // 加載題目
    function loadQuiz() {
        quizContainer.innerHTML = "";
        const randomQuestions = getRandomQuestions(quizData, 1);  // 隨機選擇1題

        randomQuestions.forEach((q, index) => {
            const { questionElement, optionsContainer } = createQuestionElement(q, index);
            quizContainer.appendChild(questionElement);
            quizContainer.appendChild(optionsContainer);
        });
    }

    // 檢查答案並顯示結果
    function checkAnswers() {
        let score = 0;
        const randomQuestions = getRandomQuestions(quizData, 1);  // 隨機選擇1題
        resultDiv.innerHTML = "";  // 清空結果區域
    
        randomQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name='question${index}']:checked`);  // 獲取用戶選擇的單一選項
    
            const explanationElement = document.createElement("p");
    
            // 如果沒有選擇答案，顯示提示
            if (!selectedOption) {
                explanationElement.textContent = "你沒有選擇任何答案";
                resultDiv.appendChild(explanationElement);
                return;  // 沒有選擇答案的情況下跳過此題
            }
    
            // 輸出選擇的答案和正確答案來進行調試
            console.log("選擇的答案: ", selectedOption.value);
            console.log("正確答案: ", q.answer);
    
            // 檢查選擇的答案是否正確
            const isCorrect = Array.isArray(q.answer)
                ? q.answer.some(ans => ans.trim() === selectedOption.value.trim())  // 如果有多個正確答案，檢查是否包含選中的選項
                : q.answer.trim() === selectedOption.value.trim();  // 如果只有一個正確答案，直接比較
    
            // 顯示用戶選擇的答案和是否正確
            const answerText = isCorrect ? "正確" : "錯誤";
            explanationElement.textContent = `你的回答：${selectedOption.value} (${answerText})`;
            resultDiv.appendChild(explanationElement);
    
            // 顯示詳解
            const explanationTitle = document.createElement("p");
            explanationTitle.textContent = "詳解：";
            resultDiv.appendChild(explanationTitle);
    
            const explanationText = document.createElement("p");
            explanationText.textContent = q.explanation;
            resultDiv.appendChild(explanationText);
    
            if (isCorrect) {
                score++;
            }
        });
    
        resultDiv.innerHTML += `<p>你的得分是：${score} / ${randomQuestions.length}</p>`;
    }
    
    
    

    // 綁定事件
    submitButton.addEventListener("click", checkAnswers);

    // 加載測驗
    loadQuiz();
});
