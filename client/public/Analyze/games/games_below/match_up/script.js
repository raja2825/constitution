const rights = [
    { id: 1, text: "Right to Equality" },
    { id: 2, text: "Right to Freedom" },
    { id: 3, text: "Right against Exploitation" },
    { id: 4, text: "Right to Freedom of Religion" },
    { id: 5, text: "Cultural and Educational Rights" }
];

const duties = [
    { id: 1, text: "Promote harmony and the spirit of common brotherhood" },
    { id: 2, text: "Abide by the Constitution and respect its ideals" },
    { id: 3, text: "Value and preserve the rich heritage of our composite culture" },
    { id: 4, text: "Protect and improve the natural environment" },
    { id: 5, text: "Defend the country and render national service" }
];

let selectedRight = null;
let selectedDuty = null;

function createListItems(list, items) {
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;
        li.dataset.id = item.id;
        li.addEventListener('click', () => handleSelection(li, list));
        document.getElementById(list).appendChild(li);
    });
}

function handleSelection(element, list) {
    if (list === 'rights-list') {
        if (selectedRight) {
            selectedRight.classList.remove('selected');
        }
        selectedRight = element;
    } else {
        if (selectedDuty) {
            selectedDuty.classList.remove('selected');
        }
        selectedDuty = element;
    }
    element.classList.add('selected');
}

function checkMatches() {
    if (!selectedRight || !selectedDuty) {
        alert("Please select both a Right and a Duty.");
        return;
    }

    if (selectedRight.dataset.id === selectedDuty.dataset.id) {
        document.getElementById('result').textContent = "Correct Match!";
        selectedRight.classList.add('correct');
        selectedDuty.classList.add('correct');
        selectedRight.removeEventListener('click', handleSelection);
        selectedDuty.removeEventListener('click', handleSelection);
    } else {
        document.getElementById('result').textContent = "Incorrect Match, Try Again!";
    }

    selectedRight.classList.remove('selected');
    selectedDuty.classList.remove('selected');
    selectedRight = null;
    selectedDuty = null;
}

document.getElementById('check-matches').addEventListener('click', checkMatches);

createListItems('rights-list', rights);
createListItems('duties-list', duties);
