// Abbiamo sempre un array di squadre, con:
// - nome
// - punti fatti
// - falli subiti
// Stampare in html (in forma tabellare!!!) i dati relativi alle squadre evidenziando
// in giallo la riga corrispondente alla squadra con più falli subiti.

const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const caseAdjusted = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

const teams = [
    {
        name: "Germany",
        points: 0,
        fouls: 0
    },
    {
        name: "England",
        points: 0,
        fouls: 0
    },
    {
        name: "Spain",
        points: 0,
        fouls: 0
    }
];

const teamsSpecs = [];

let formaTabellareHeader = document.querySelector('#forma-tabellare-header');

let formaTabellare = document.querySelector('#forma-tabellare');

for (const key in teams[0]) {
    
    formaTabellareHeader.innerHTML += `<li>${caseAdjusted(key)}</li>`;
        
}

let foulsCompare = 0;

let majorFoulsTeam;

for (let i = 0; i < teams.length; i++) {

    teams[i].points = randomNumbers(1, 30);
    teams[i].fouls = randomNumbers(5, 15);

    if (teams[i].fouls > foulsCompare) {

        foulsCompare = teams[i].fouls;

        majorFoulsTeam = teams[i];

    }

}

for (let i = 0; i < teams.length; i++) {
    
    let { name, points, fouls } = teams[i];

    if (teams[i] === majorFoulsTeam) {

        formaTabellare.innerHTML +=
            `
        <ul class="bg-yellow">
            <li>${name}</li>
            <li>${points}</li>
            <li>${fouls}</li>
        </ul>
        `;
        
    } else {

        formaTabellare.innerHTML +=
            `
        <ul>
            <li>${name}</li>
            <li>${points}</li>
            <li>${fouls}</li>
        </ul>
        `;

    }
    
}