import { recipes } from "../assets/data/recipes";

const arrayOfIngredient = [];



const ingredientArray = recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
       if(ingredient['ingredient']){
           ingredient['ingredient'].map
           arrayOfIngredient.push(ingredient['ingredient'])
       }
        console.log(arrayOfIngredient)
    })
})

console.log(ingredientArray)