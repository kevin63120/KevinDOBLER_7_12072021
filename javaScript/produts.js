import { recipes } from "../assets/data/recipes";

const arrayOfIngredient = [];



recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient, index) => {
        if (ingredient.ingredient) {
            arrayOfIngredient.forEach(ingredientInArray => {
                if (ingredient.ingredient != ingredientInArray) {
                    arrayOfIngredient.push(ingredient.ingredient)
                    return arrayOfIngredient
                } else {
                    console.log("dejapresent")
                }
            });

        }
        console.log(arrayOfIngredient)
    })
})

