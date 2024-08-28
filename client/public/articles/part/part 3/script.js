
const articlesData = {
    type1: [
        { number: "Article 14", description: "Right to Equality" },
        { number: "Article 15", description: "Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth" },
        { number: "Article 16", description: "Equality of opportunity in matters of public employment" },
        { number: "Article 17", description: "Abolition of Untouchability" },
        { number: "Article 18", description: "Abolition of titles" }
        // Add more articles for type 1
    ],
    type2: [
        { number: "Article 19", description: "Protection of certain rights regarding freedom of speech, etc." },
        { number: "Article 20", description: "Protection in respect of conviction for offences" },
        { number: "Article 21", description: "Protection of life and personal liberty" },
        { number: "Article 21A", description: "Right to Education" },
        { number: "Article 22", description: "Protection against arrest and detention in certain cases" }
        // Add more articles for type 2
    ],
    type3: [
        { number: "Article 23", description: "Prohibition of traffic in human beings and forced labour" },
        { number: "Article 24", description: "Prohibition of employment of children in factories, etc." }
        // Add more articles for type 3
    ],
    type4: [
        { number: "Article 25", description: "Freedom of conscience and free profession, practice, and propagation of religion" },
        { number: "Article 26", description: "Freedom to manage religious affairs" },
        { number: "Article 27", description: "Freedom as to payment of taxes for promotion of any particular religion" },
        { number: "Article 28", description: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions" }
        // Add more articles for type 4
    ],
    type5: [
        { number: "Article 29", description: "Protection of interests of minorities" },
        { number: "Article 30", description: "Right of minorities to establish and administer educational institutions" }
        // Add more articles for type 5
    ],
    type6: [
        { number: "Article 32", description: "Right to constitutional remedies. Allows individuals to approach the Supreme Court for enforcing fundamental rights." },
        { number: "Article 33", description: "Parliament can modify application of fundamental rights for armed forces and similar organizations." },
        { number: "Article 34", description: "Restrictions on fundamental rights during martial law. No court can challenge actions under martial law." },
        { number: "Article 35", description: "Parliament has power to make laws regarding fundamental rights. State legislatures cannot alter these rights." }
        // Add more articles for type 6
    ]
};

// Detailed descriptions for each article
const descriptions = {
    '14': 'Article 14 guarantees the right to equality before the law and equal protection of the laws to all persons within the territory of India.',
    '15': 'Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.',
    '16': 'Article 16 provides for equality of opportunity in public employment and prohibits discrimination in matters of public employment.',
    '17': 'Article 17 abolishes untouchability and forbids its practice in any form.',
    '18': 'Article 18 abolishes titles and prohibits the conferring of titles by the State, except for military or academic distinctions.',
    '19': 'Article 19 guarantees certain freedoms including freedom of speech and expression, assembly, association, movement, residence, and profession.',
    '20': 'Article 20 provides protection against arbitrary arrest and detention and specifies the rights of individuals against conviction for offenses.',
    '21': 'Article 21 guarantees protection of life and personal liberty to all individuals.',
    '21A': 'Article 21A provides for the right to education for children aged six to fourteen years.',
    '22': 'Article 22 provides protection against arrest and detention in certain cases and the right to be informed of the grounds of arrest.',
    '23': 'Article 23 prohibits trafficking in human beings and forced labor.',
    '24': 'Article 24 prohibits the employment of children in factories, mines, or any other hazardous employment.',
    '25': 'Article 25 guarantees freedom of conscience and the right to profess, practice, and propagate religion.',
    '26': 'Article 26 guarantees freedom to manage religious affairs and establish and maintain institutions for religious purposes.',
    '27': 'Article 27 provides freedom from payment of taxes for the promotion of any particular religion.',
    '28': 'Article 28 provides freedom regarding attendance at religious instruction or religious worship in certain educational institutions.',
    '29': 'Article 29 protects the interests of minorities by allowing them to conserve their culture, language, or script.',
    '30': 'Article 30 gives minorities the right to establish and administer educational institutions of their choice.',
    '32': 'Article 32 provides the right to constitutional remedies, allowing individuals to approach the Supreme Court to enforce fundamental rights.',
    '33': 'Article 33 empowers Parliament to modify the application of fundamental rights for armed forces and similar organizations.',
    '34': 'Article 34 imposes restrictions on fundamental rights during martial law, stating that no court can challenge actions taken under martial law.',
    '35': 'Article 35 confers power on Parliament to make laws regarding fundamental rights, which state legislatures cannot alter.'
};

// Function to display articles on article.html
function displayArticles() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const articlesContainer = document.getElementById('articles');
    const articles = articlesData[type];

    articlesContainer.innerHTML = ''; // Clear previous content

    if (articles) {
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            const articleNumber = article.number.split(' ')[1]; // Extract number (e.g., '14' from 'Article 14')
            articleDiv.innerHTML = `<a href="#" class="article-link" data-article="${articleNumber}"><strong>${article.number}:</strong> ${article.description}</a>`;
            articlesContainer.appendChild(articleDiv);
        });
    } else {
        articlesContainer.innerHTML = 'No articles available for this type.';
    }
}

// Function to display detailed description on click
document.addEventListener('DOMContentLoaded', () => {
    const descriptionBox = document.getElementById('article-description');
    const links = document.querySelectorAll('.article-link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const articleNumber = event.target.getAttribute('data-article');
            descriptionBox.textContent = descriptions[articleNumber] || 'Description not available.';
        });
    });
});

// Run displayArticles function if on article.html
if (window.location.pathname.includes('article.html')) {
    displayArticles();
}

