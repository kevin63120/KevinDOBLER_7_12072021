import { Card } from "./class/card"
import { recipes } from "../assets/data/recipes"
const inputIngredient = document.querySelector('.search_secondarySearchContainer-secondarySearch1');
const secondaryList = document.querySelector('.secondarySearch1_suggestions')

const li = document.createElement('li');







inputIngredient.addEventListener("click", (e) => {
    const ingredientMap = recipes.forEach((recipe) => {
        recipe.ingredients.map((ingredient) => {
            return `<option value="${ingredient.ingredient}"></option>`
        })
    })
    secondaryList.innerHTML = (ingredientMap)
})
