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

// var minorWeightBike;

// for (var i = 0; i < bikes.length; i++) {
    
//     if (bikes[i].weight < weightCompare ) {
        
//         weightCompare = bikes[i].weight;

//         minorWeightBike = bikes[i];

//     }
    
// }

// console.log("La bici con il peso minore si chiama " + minorWeightBike.name + " e pesa " + minorWeightBike.weight + "kg.");

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

let weightCompare;

let minorWeightBike;

for (let i = 0; i < bikes.length; i++) {

    if (bikes[i].weight < weightCompare || weightCompare === undefined) {

        weightCompare = bikes[i].weight;

        minorWeightBike = bikes[i];

    }

}

let {name, weight} = minorWeightBike;

console.log(`La bici con il peso minore si chiama ${name} e pesa ${weight}kg.`);