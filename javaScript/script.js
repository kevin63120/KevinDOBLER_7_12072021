import { deleteTag, deleteTags, initTags } from "./tags";
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { search } from "./search";
import {removeTags} from "./tags";
import {tagsDisplay} from "./tags";
import { searchByTerms, searchTerms } from "./terms";
	
document.addEventListener("DOMContentLoaded", () => {
	const containerCart = document.querySelector(".card-container");
	displayCardBase(containerCart);
	initTags();
	
});

function displayCardBase(container) {
  
	recipes.forEach((recipe) => {
		new Card(recipe).createCard(container); 

	});

	

	const inputIngredient = document.querySelector("#dataListSecondarySearch1");
	const inputApareil = document.querySelector("#dataListSecondarySearch2");
	const inputUstensile = document.querySelector("#dataListSecondarySearch3");
	const input = document.querySelector(
		".header_searchbar-mainSearchContainer"
	);
	const tagsContainerDom = document.querySelectorAll(".tag-container");


	input.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		searchTerms.main = curentInput;
		searchByTerms();
	});
	
	input.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		searchByTerms();
		
	});


	inputApareil.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		searchByTerms();
		
	});
	inputIngredient.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		searchByTerms();
		
	});

	inputUstensile.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		searchByTerms();
		
	});


}
