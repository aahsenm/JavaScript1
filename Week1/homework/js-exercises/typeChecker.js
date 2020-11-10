'use strict'

let name = 'Ahsen';
let origin = 'Turkey';
let favoriteSeries = { comedy: 'Sherlock', mystery: 'Dark' };
let favoriteFilms = { romance: 'The Notebook', action: 'Inception'};

console.log(typeof name, typeof origin);
console.log(typeof favoriteFilms, typeof favoriteSeries);

function compareTypes(type1, type2) {
    if (typeof type1 === typeof type2) {
        console.log("SAME TYPE");
    } else {
        console.log("NOT THE SAME");
    }
}

compareTypes(name, origin);
compareTypes(name, favoriteFilms);
compareTypes(name, favoriteSeries);
compareTypes(origin, favoriteFilms);
compareTypes(origin, favoriteSeries);
compareTypes(favoriteSeries, favoriteFilms);