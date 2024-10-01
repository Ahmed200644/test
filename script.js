let currentLevel = 1;
const questions = [
    {
        question: "What is the main environmental issue in Alexandria?",
        correctAnswer: "correct",
        nextLevel: 2
    },
    {
        question: "What is the population of Alexandria?",
        correctAnswer: "correct",
        nextLevel: 3
    },
    {
        question: "What is the famous landmark in Alexandria?",
        correctAnswer: "correct",
        nextLevel: 4
    }
];

function checkAnswer(answer) {
    const resultContainer = document.getElementById('result');

    if (answer === questions[currentLevel - 1].correctAnswer) {
        resultContainer.innerHTML = "Correct! Moving to the next level...";
        currentLevel++;
        
        if (currentLevel <= questions.length) {
            loadQuestion(currentLevel);
        } else {
            // Redirect to the success page after completion
            window.location.href = 'success.html'; // The new page showing completion message
        }
    } else {
        resultContainer.innerHTML = "Wrong answer. Please try again.";
    }
}

function loadQuestion(level) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = `<h2 class="Green-Horizon">Level ${level}</h2>
                                    <div class="question">
                                        <p>${questions[level - 1].question}</p>
                                        <button class="start" onclick="checkAnswer('correct')">Answer A (Correct)</button>
                                        <button class="start" onclick="checkAnswer('wrong')">Answer B</button>
                                    </div>`;
}
