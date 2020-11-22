'use strict';

// We made this solution with Inou in Q&A session. I preferred to use this code to make the project.

function validateAllChsAreNumbers(number) {
    const parsedNumber = Number.parseInt(number);
    const isNumber = Number.isInteger(parsedNumber);
    return isNumber && parsedNumber.toString().length === number.length;
  }

  function validateDifferentElements(number) {
    var occurences = {};
    for(let i = 0; i < number.length; i++) {
      occurences[number[i]] = undefined;
    }
    var uniqueValues = Object.keys(occurences);
    return uniqueValues.length > 1;
  }

  function validateSumIsLargerThan16(number) {
    var sum = 0;
    for(let i = 0; i < number.length; i++) {
      sum = sum + Number.parseInt(number[i]);
    }
    return sum > 16;
  }

  function isEven(number) {
    return number % 2 === 0;
  }

  function validateCreditNumber(number) {
    if (number.length !== 16) {
      console.log(`Invalid! The input ${number} charecters must be 16!`);
    }else if (! validateAllChsAreNumbers(number)) {
      console.log(`Invalid! The input ${number}  should contain only numbers!`);
    }else if (! validateDifferentElements(number)) {
      console.log(`Invalid! The input ${number}  should contain at least 2 different types of numbers!`);
    }else if (! validateSumIsLargerThan16(number)) {
      console.log(`Invalid! The input ${number} charecters sum must be greater than 16!`);
    }else if (! isEven(number[number.length - 1])) {
      console.log(`Invalid! The input ${number}  last number must be even!`);
    }else 
    console.log(`Success! The input ${number}  is a valid credit card number!`);
  }

  console.log(validateCreditNumber('a92332119c011112')); 
  console.log(validateCreditNumber('4444444444444444')); 
  console.log(validateCreditNumber('6666666666661666')); 