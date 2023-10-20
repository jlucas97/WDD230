
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");



        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Picture of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', "lazy");
        portrait.setAttribute('width', 360);
        portrait.setAttribute('height', 440);

        cards.appendChild(card);
        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerText = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.innerText = `Place of Birth: ${prophet.birthplace}`;
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
    });
}

getProphetData();

