// JavaScript to enable drag and drop for the Preamble Puzzle Game

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function checkOrder() {
    const correctOrder = ["word4", "word5", "word6", "word7", "word1", "word2", "word8", "word3", "word9", "word10", "word11"];
    const dropArea = document.getElementById("drop-area");
    const words = dropArea.querySelectorAll(".word");
    let result = document.getElementById("result");

    let isCorrect = Array.from(words).map(word => word.id).join() === correctOrder.join();

    if (isCorrect) {
        result.innerText = "Congratulations! You've arranged the words correctly.";
    } else {
        result.innerText = "Try again!";
    }
}
