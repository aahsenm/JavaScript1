'use strict';

let shoppingCarts = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) {

    //After feedback of @dardecana, I found the extra information that is not needed. 
    //I changed the line, I hope it is better now.
    shoppingCarts.push(groceryItem);

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