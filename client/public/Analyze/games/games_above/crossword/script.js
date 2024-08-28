const crosswordData = {
    size: 10,
    words: [
        { word: "FUNDAMENTAL", clue: "Basic rights guaranteed by the Constitution", x: 0, y: 0, direction: "across" },
        { word: "DUTIES", clue: "Responsibilities of citizens", x: 2, y: 0, direction: "down" },
        // Add more words as needed
    ],
    hints: {
        "FUNDAMENTAL": "Basic rights guaranteed by the Constitution",
        "DUTIES": "Responsibilities of citizens"
        // Add more hints as needed
    }
};

function createCrossword() {
    const crossword = document.getElementById('crossword');
    crossword.style.gridTemplateColumns = `repeat(${crosswordData.size}, 40px)`;
    
    for (let i = 0; i < crosswordData.size * crosswordData.size; i++) {
        const cell = document.createElement('input');
        cell.className = 'crossword-cell';
        cell.maxLength = 1;
        crossword.appendChild(cell);
    }
}

function placeWords() {
    crosswordData.words.forEach(wordData => {
        const cells = document.querySelectorAll('.crossword-cell');
        let index = wordData.y * crosswordData.size + wordData.x;
        
        wordData.word.split('').forEach((char, i) => {
            const cell = cells[index];
            cell.value = char;
            index += wordData.direction === 'across' ? 1 : crosswordData.size;
        });
    });
}

function showHint() {
    const word = prompt("Enter the word you need a hint for:");
    if (crosswordData.hints[word]) {
        alert(`Hint: ${crosswordData.hints[word]}`);
    } else {
        alert("Hint not available for this word.");
    }
}

function initCrossword() {
    createCrossword();
    placeWords();
}

initCrossword();
