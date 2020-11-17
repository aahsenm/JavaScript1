'use strict';

// Firstly, I created a function which converts the score into a percentage.

function gradeCalculator(grade,maxGrade) {
// Secondly, I have declared a variable to convert the score into a percentage.
    let percentage = (grade * 100) / maxGrade; 
//I prefer to use if/else statement to calculate which grades correspond to which percentages.
    if (percentage <= 100 && percentage >= 90) {
        return 'You got a A ( ${percentage} %)!' 
    } if (percentage <= 79 && percentage >= 70) {
        return `You got a B ( ${percentage} %)!`
    } if (percentage <= 69 && percentage >= 60) {
        return `You got a C ( ${percentage} %)!`
    } if (percentage <= 59 && percentage >= 50) {
        return `You got a D ( ${percentage} %)!`
    } else {
        return `You got a F ( ${percentage} %)!`
    }
}

console.log(gradeCalculator(60,80));