const preambleWords = [
    "WE", "THE", "PEOPLE", "OF", "INDIA,", "having", "solemnly", "resolved", "to", "constitute", "India", "into", "a", 
    "SOVEREIGN,", "SOCIALIST,", "SECULAR,", "DEMOCRATIC", "REPUBLIC", "and", "to", "secure", "to", "all", "its", "citizens:"
];

const correctOrder = [
    "WE", "THE", "PEOPLE", "OF", "INDIA,", "having", "solemnly", "resolved", "to", "constitute", "India", "into", "a", 
    "SOVEREIGN,", "SOCIALIST,", "SECULAR,", "DEMOCRATIC", "REPUBLIC", "and", "to", "secure", "to", "all", "its", "citizens:"
];

let puzzleContainer = document.getElementById('puzzle-container');
let chosenOrderContainer = document.getElementById('chosen-order');
let selectedWord = null;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createPuzzle() {
    let shuffledWords = shuffle([...preambleWords]);
    shuffledWords.forEach(word => {
        let wordElement = document.createElement('div');
        wordElement.classList.add('word');
        wordElement.textContent = word;
        wordElement.draggable = true;
        wordElement.addEventListener('dragstart', handleDragStart);
        wordElement.addEventListener('dragover', handleDragOver);
        wordElement.addEventListener('drop', handleDrop);
        puzzleContainer.appendChild(wordElement);
    });
    updateChosenOrder(); // Update initially
}

function handleDragStart(event) {
    selectedWord = event.target;
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    if (event.target.className === 'word') {
        puzzleContainer.insertBefore(selectedWord, event.target.nextSibling);
        updateChosenOrder(); // Update the chosen order whenever a word is dropped
    }
}

function updateChosenOrder() {
    let currentOrder = Array.from(puzzleContainer.children).map(word => word.textContent);
    chosenOrderContainer.textContent = currentOrder.join(' ');
}

function checkOrder() {
    let currentOrder = Array.from(puzzleContainer.children).map(word => word.textContent);
    if (currentOrder.join(' ') === correctOrder.join(' ')) {
        document.getElementById('result').textContent = "Congratulations! You have arranged the Preamble correctly.";
    } else {
        document.getElementById('result').textContent = "Incorrect order. Please try again.";
    }
}

document.getElementById('check-order').addEventListener('click', checkOrder);

createPuzzle();
