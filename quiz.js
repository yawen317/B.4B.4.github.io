document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quizContainer");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("resultDiv");

    function loadQuiz() {
        quizContainer.innerHTML = "";
        const randomQuestions = getRandomQuestions(quizData, 1);  // 隨機選擇1題
        randomQuestions.forEach((q, index) => {
            const questionElement = document.createElement("p");
            questionElement.textContent = `${index + 1}. ${q.question}`;
            quizContainer.appendChild(questionElement);
            
            q.options.forEach(option => {
                const label = document.createElement("label");
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = `question${index}`;
                radio.value = option;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));
                quizContainer.appendChild(label);
                quizContainer.appendChild(document.createElement("br"));
            });
        });
    }

    function getRandomQuestions(questions, num) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());  // 隨機排列
        return shuffled.slice(0, num);  // 取前num題
    }

    function checkAnswers() {
        let score = 0;
        const randomQuestions = getRandomQuestions(quizData, 1);
        randomQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name='question${index}']:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        resultDiv.textContent = `你的得分是：${score} / ${randomQuestions.length}`;
    }

    submitButton.addEventListener("click", checkAnswers);
    loadQuiz();
});

