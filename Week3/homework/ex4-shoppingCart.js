'use strict';

let shoppingCarts = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) {

    shoppingCarts + shoppingCarts.push(groceryItem);

    if(shoppingCarts.length > 3){ 
        shoppingCarts.shift();
    }

    for (let i = 0; i < shoppingCarts.length; i++) {
        let shoppingList = shoppingCarts[i];
    } 

    console.log(`You bought ${shoppingCarts.join(', ')}!`);
}

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');