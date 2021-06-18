// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// - nome,
// - punti fatti,
// - falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.
const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

for (let i = 0; i < teams.length; i++) {
    
    teams[i].points = randomNumbers(1, 30);
    teams[i].fouls = randomNumbers(5, 15);

    let {name, fouls} = teams[i];

    teamsSpecs.push({
        name,
        fouls
    })                                                                                                      ;
    
}

console.log(teamsSpecs);