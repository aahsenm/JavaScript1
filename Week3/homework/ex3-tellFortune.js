'use strict';

function randomValueOf(array) {
    var randomIndex = Math.round(Math.random() * (array.length - 1));
    return array[randomIndex];
  }
  const numChildren = [0,1,2,3,4];
  const partnerNames = ['Jon Snow', 'Jaime Lannister', 'Daenerys Targaryen', 'Arya Stark', 'Tyrion Lannister'];
  const locations = ['King\'s Landing', 'Winterfell', 'Beyond the Wall', 'Dragonstone', 'Iron Islands'];
  const jobs = ['Mother of Dragons', 'King of the Andals', 'King in the North', 'Hand of the King', 'Lord of Dragonstone' ];
  function tellMeMyFortune(name) {
    console.log(
      `${name} you will have ${randomValueOf(numChildren)} child`,
      `and you will be married with ${randomValueOf(partnerNames)}`,
      `living in ${randomValueOf(locations)}`,
      `working as a ${randomValueOf(jobs)}`
    );
  }

  tellMeMyFortune('Ahsen');