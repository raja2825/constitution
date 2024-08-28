const clues = [
    {
        question: "Which Directive Principle promotes the welfare of children?",
        answer: "Principle of Promotion of Welfare of Children",
        hint: "This principle focuses on ensuring children’s education and protection.",
    },
    {
        question: "Which Directive Principle advocates for the provision of a uniform civil code?",
        answer: "Principle of Uniform Civil Code",
        hint: "This principle aims for the unification of laws governing personal matters.",
    },
    {
        question: "Which Directive Principle is concerned with the equitable distribution of resources?",
        answer: "Principle of Distribution of Resources",
        hint: "This principle aims to reduce economic inequalities.",
    }
];

let currentClueIndex = 0;

function displayClue(index) {
    if (index < clues.length) {
        const clue = clues[index];
        const clueContainer = document.getElementById('clues-container');
        
        const clueElement = document.createElement('div');
        clueElement.className = 'clue';
        clueElement.innerHTML = `
            <p>${clue.question}</p>
            <input type="text" id="answer-${index}" placeholder="Type your answer here">
            <button onclick="checkAnswer(${index})">Submit Answer</button>
        `;
        
        clueContainer.appendChild(clueElement);
    } else {
        document.getElementById('result').textContent = "Congratulations! You have found all the treasures!";
    }
}

function checkAnswer(index) {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim();
    const correctAnswer = clues[index].answer;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! Moving to the next clue.");
        currentClueIndex++;
        displayClue(currentClueIndex);
    } else {
        alert("Incorrect answer. Try again!");
    }
}

function showHint() {
    if (currentClueIndex < clues.length) {
        document.getElementById('hint').textContent = clues[currentClueIndex].hint;
    } else {
        document.getElementById('hint').textContent = "No more hints available.";
    }
}

document.getElementById('show-hint').addEventListener('click', showHint);

displayClue(currentClueIndex);
