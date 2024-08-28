const cards = [
    { term: 'Article 14', section: 'Part 3' }, 
    { term: 'Equality', section: 'Part 3' },
    { term: 'Article 21', section: 'Part 3' },
    { term: 'Right to Life', section: 'Part 3' },
    { term: 'Article 39A', section: 'Part 4' },
    { term: 'Equal Justice', section: 'Part 4' },
    { term: 'Article 51A', section: 'Part 4A' },
    { term: 'Fundamental Duties', section: 'Part 4A' }
];

let gameBoard = document.getElementById('game-board');
let startButton = document.getElementById('start-button');
let selectedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    let cardArray = shuffle([...cards, ...cards]);
    cardArray.forEach((item, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.term = item.term;
        card.dataset.section = item.section;
        card.textContent = '?';
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (this.classList.contains('flipped') || selectedCards.length === 2) return;
    
    this.classList.add('flipped');
    this.textContent = this.dataset.term;
    selectedCards.push(this);

    if (selectedCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.term === card2.dataset.term) {
        matchedPairs++;
        if (matchedPairs === cards.length) {
            setTimeout(() => alert('Congratulations! You matched all the pairs!'), 500);
        }
    } else {
        card1.classList.remove('flipped');
        card1.textContent = '?';
        card2.classList.remove('flipped');
        card2.textContent = '?';
    }
    selectedCards = [];
}

startButton.addEventListener('click', () => {
    gameBoard.innerHTML = '';
    matchedPairs = 0;
    selectedCards = [];
    createBoard();
});
