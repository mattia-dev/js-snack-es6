// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso. Stampare a schermo la bici con peso minore utilizzando
// destructuring e template literal. Risolvetelo prima in versione ES5,
// poi commentate la versione in ES5 e fatelo in ES6.

// var bikes = [
//     {
//         name: "Slow",
//         weight: 100
//     },
//     {
//         name: "Speed",
//         weight: 10
//     },
//     {
//         name: "Rider",
//         weight: 50
//     }
// ];

// var weightCompare = bikes[0].weight;

// var index = 0;

// for (var i = 0; i < bikes.length; i++) {
    
//     if (bikes[i].weight < weightCompare ) {
        
//         weightCompare = bikes[i].weight;

//         index = i;

//     }
    
// }

// var {name, weight} = bikes[index];

// console.log(`La bici con il peso minore si chiama ${name} e pesa ${weight}kg.`);

// ES6 version
const bikes = [
    {
        name: "Slow",
        weight: 100
    },
    {
        name: "Speed",
        weight: 10
    },
    {
        name: "Rider",
        weight: 50
    }
];

let weightCompare = bikes[0].weight;

let index = 0;

for (let i = 0; i < bikes.length; i++) {

    if (bikes[i].weight < weightCompare) {

        weightCompare = bikes[i].weight;

        index = i;

    }

}

let {name, weight} = bikes[index];

console.log(`La bici con il peso minore si chiama ${name} e pesa ${weight}kg.`);