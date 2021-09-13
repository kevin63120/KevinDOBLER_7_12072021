import "../assets/data/recipes";
import { initTags } from "./tags";
import { containerAppareil, containerIngredient, containerUstensil, initSecondarySearch, secondarySearch } from "./secondarySearch";
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { search } from "./search";
import { Data } from "./class/data";

// algo 1

/*test l'input utilisateur */
/* 
1. test le titre de la recette pour verifier une corespondence
2. test les ustensiles
3. test les appareil 
*/
document.addEventListener("DOMContentLoaded", () => {
	const containerCart = document.querySelector(".card-container");
	displayCardBase(containerCart);
	initTags();
	//initSecondarySearch();

});






function displayCardBase(container) {
  
	recipes.forEach((recipe) => {
		new Card(recipe).createCard(container); 

	});



	const searchTerms = {
		main: "",
		appareil: "",
		ingredient: "",
		ustensile: "",
	};

	const inputIngredient = document.querySelector("#dataListSecondarySearch1");
	const inputApareil = document.querySelector("#dataListSecondarySearch2");
	const inputUstensile = document.querySelector("#dataListSecondarySearch3");
	const input = document.querySelector(
		".header_searchbar-mainSearchContainer"
	);

	input.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		searchTerms.main = curentInput;
		searchByTerms();
	});

	inputApareil.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		searchTerms.appareil = curentInput;
		searchByTerms();
	});
	inputIngredient.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		searchTerms.ingredient = curentInput;
		searchByTerms();
	});

	inputUstensile.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		searchTerms.ustensile = curentInput;
		searchByTerms();
	});

	function searchByTerms() {
		search(
			searchTerms.main,
			recipes,
			searchTerms.appareil,
			searchTerms.ustensile,
			searchTerms.ingredient
		);
	}
}
