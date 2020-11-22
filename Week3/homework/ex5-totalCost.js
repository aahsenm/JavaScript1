'use strict';

let cartForParty = {
    cola : 1.99,
    chips: 1.75,
    water: 1.00,
    cheesecake: 3.95,
    lemonade: 2.00
}

// After learning "[key,value] of Object.entries" in Q&A session with Inou, I tried to solve this exercise with this code.
// Thanks Inou!

let calculateTotalPrice = (myObject) => {
    let total = 0;
    for (let [key, value] of Object.entries(myObject)) {
        total += value;
    }
    console.log(`Total: €${total}`);
};

calculateTotalPrice(cartForParty);