import "../assets/data/recipes";
import { initTags } from "./tags";
import { initSecondarySearch } from "./secondarySearch";
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { search } from "./search";

// algo 1

/*test l'input utilisateur */
/* 
1. test le titre de la recette pour verifier une corespondence
2. test les ustensiles
3. test les appareil 
*/
document.addEventListener("DOMContentLoaded", () => {
  const containerCart = document.querySelector("main");
  displayCardBase(containerCart);
  initTags();
  initSecondarySearch();
});

function displayCardBase(container) {
  recipes.forEach((recipe) => {
    new Card(recipe).createCard(container);
  });
  const input = document.querySelector(".header_searchbar-mainSearchContainer");
  input.addEventListener("keyup", (e) => {
    const curentInput = e.target.value;
    search(curentInput, recipes);
  });
}
