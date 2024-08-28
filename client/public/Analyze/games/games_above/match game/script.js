let timer;
let timeLeft = 60; // Timer duration in seconds

function startGame() {
    document.getElementById('startBtn').style.display = 'none';
    document.querySelectorAll('.draggable').forEach(el => {
        el.addEventListener('dragstart', dragStart);
    });
    document.querySelectorAll('.drop-zone').forEach(el => {
        el.addEventListener('dragover', dragOver);
        el.addEventListener('drop', drop);
    });
    startTimer();
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    const dropZone = e.target;

    if (dropZone.dataset.term === id) {
        dropZone.innerText = draggedElement.innerText;
        dropZone.classList.add('correct');
        draggedElement.style.display = 'none';
    } else {
        dropZone.innerText = "Incorrect! Try again.";
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Game over.');
            document.querySelectorAll('.draggable').forEach(el => {
                el.style.display = 'block';
            });
        }
    }, 1000);
}
