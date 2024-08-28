const scenarios = {
    "Member of Constituent Assembly": [
        {
            text: "You are debating the inclusion of Fundamental Rights in the Constitution. Do you support their inclusion?",
            choices: [
                { text: "Yes, Fundamental Rights are essential.", outcome: "The Constitution includes Fundamental Rights." },
                { text: "No, focus on governance structures.", outcome: "Focus shifts away from Fundamental Rights." }
            ]
        },
        {
            text: "Should the Constitution have provisions for social and economic justice?",
            choices: [
                { text: "Yes, it’s necessary for equality.", outcome: "Directive Principles of State Policy are added." },
                { text: "No, it’s outside the scope of the Constitution.", outcome: "Economic justice is left to the states." }
            ]
        }
    ],
    "Judge": [
        {
            text: "You have a case challenging the constitutionality of a law restricting free speech. How do you rule?",
            choices: [
                { text: "Strike down the law as unconstitutional.", outcome: "The law is struck down, reinforcing free speech." },
                { text: "Uphold the law for national security.", outcome: "Free speech is limited in favor of security." }
            ]
        }
    ],
    "Lawmaker": [
        {
            text: "You are drafting a new law. Should it align strictly with constitutional provisions?",
            choices: [
                { text: "Yes, align with the Constitution.", outcome: "The law aligns with constitutional principles." },
                { text: "No, prioritize current political needs.", outcome: "The law prioritizes current needs over the Constitution." }
            ]
        }
    ]
};

function selectCharacter(role) {
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('game-content').style.display = 'block';
    document.getElementById('character-role').textContent = role;
    showScenario(role);
}

function showScenario(role) {
    const scenario = scenarios[role][0];
    document.getElementById('scenario-text').textContent = scenario.text;
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    scenario.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            alert(choice.outcome);
            showScenario(role); // Show the next scenario or restart the game
        };
        choicesContainer.appendChild(button);
    });
}
