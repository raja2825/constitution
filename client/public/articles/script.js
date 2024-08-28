// script.js

// Add JavaScript functionality here if needed
// For example, handling click events on headings

document.querySelectorAll('.heading-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});