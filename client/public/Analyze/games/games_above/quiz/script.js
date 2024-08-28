const questions = [
    {
        question: "Who is known as the father of the Constitution of India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
        correctAnswer: 2,
        hint: "He is often called the chief architect of the Indian Constitution."
    },
    {
        question: "When was the Constitution of India adopted?",
        options: ["26th January 1950", "15th August 1947", "26th November 1949", "1st January 1950"],
        correctAnswer: 2,
        hint: "It was adopted before the Republic Day."
    },
    {
        question: "Which of the following is a Fundamental Duty listed in Part IV-A?",
        options: ["Respect for the National Flag", "Right to Privacy", "Right to Education", "Right to Vote"],
        correctAnswer: 0,
        hint: "It involves honoring national symbols."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const TIME_LIMIT = 30; // 30 seconds

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });
    document.getElementById('hintBtn').style.display = 'inline-block'; // Show hint button
    document.getElementById('nextBtn').style.display = 'none'; // Hide next button
    startTimer();
}

function selectAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('result').innerText = "Correct!";
    } else {
        document.getElementById('result').innerText = "Wrong! The correct answer is: " + currentQuestion.options[currentQuestion.correctAnswer];
    }
    document.getElementById('scoreValue').innerText = score; // Update score display
    clearInterval(timer); // Stop the timer
    document.getElementById('nextBtn').style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').innerText = "";
    } else {
        document.getElementById('quiz').style.display = "none";
        document.getElementById('result').innerText = `Quiz Finished! Your score is ${score} out of ${questions.length}.`;
        document.getElementById('nextBtn').style.display = "none";
    }
}

function startTimer() {
    let time = TIME_LIMIT;
    document.getElementById('time').innerText = time;
    timer = setInterval(() => {
        time--;
        document.getElementById('time').innerText = time;
        if (time <= 0) {
            clearInterval(timer);
            document.getElementById('result').innerText = "Time's up! Moving to the next question.";
            setTimeout(nextQuestion, 1000); // Move to next question after a short delay
        }
    }, 1000);
}

function showHint() {
    const hint = questions[currentQuestionIndex].hint;
    alert(`Hint: ${hint}`);
}

// Initialize the quiz
loadQuestion();
