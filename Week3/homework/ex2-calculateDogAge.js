'use strict';

const calculateDogAge = age => {
    
    let dogAge = age * 7;

    return `Your doggie is ${dogAge} years old in dog years!`

}

console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));