'use strict'

function giveCompliment(name = 'a') {
    const compliment = [
    'amazing',
    'kind',
    'smart',
    'funny',
    'incredible',
    'trusty',
    'animal lover',
    'impressive',
    'awesome',
    'cool',
    ];

    const randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];

    return `You are ${randomCompliment}, ${name}!`;
}

console.log(giveCompliment('Ahsen'));
console.log(giveCompliment('Ahsen'));
console.log(giveCompliment('Ahsen'));
