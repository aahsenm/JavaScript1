'use strict';

let myMeal = {
    Name: 'Cream of Mushroom Soup',
    Serves: 4,
    Ingredients: ['Mushroom', 'Cream', 'Butter']
}

// I used forEach method as we learned it in Q&A session with Inou.

let recipe = [myMeal];

recipe.forEach(recipe => {
    console.log('Meal Name :', myMeal.Name);
    console.log('Servings :', myMeal.Serves);
    console.log('Ingredients :', myMeal.Ingredients); 
})
