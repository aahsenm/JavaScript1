'use strict';

// I watched Q&A session with Yash and learned this code from this video.

let drinkTray = [];
let drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {

    let addDrinks = true;

    while(addDrinks){
        const randomDrink = drinkTypes[Math.floor(Math.random()*3)];

        const drinksInTray = drinkTray.filter(function(drink) {
            return drink === randomDrink;
        });


        if (drinksInTray.length<2){
            drinkTray.push(randomDrink);
            addDrinks = false;
        } else {
            addDrinks = true;
        }
    }

    console.log('Hey guys, I brought a ' + drinkTray.join(' ') + '!!!')
}   
