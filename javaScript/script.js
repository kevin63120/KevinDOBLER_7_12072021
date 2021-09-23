import { initTags } from "./tags";
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { search } from "./search";
import {removeTags} from "./tags";
import {tagsDisplay} from "./tags";
import { searchByTerms, searchTerms } from "./terms";


// algo 1

/*test l'input utilisateur */
/* 
1. test le titre de la recette pour verifier une corespondence
2. test les ustensiles
3. test les appareil 
*/
let tags  =  document.querySelectorAll(".tag");

document.addEventListener("DOMContentLoaded", () => {
	const containerCart = document.querySelector(".card-container");
	displayCardBase(containerCart);
	initTags();
	
	
});

function displayCardBase(container) {
  
	recipes.forEach((recipe) => {
		new Card(recipe).createCard(container); 

	});

	
    
    document.addEventListener("click", (e)=>{
		let value = e.target.innerHTML
		if(value === searchTerms.tag){
			removeTags()
		}
		//searchTerms.tags = tagsDisplay
	    //console.log(searchTerms.tags)
	})
	

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
	inputApareil.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		//searchTerms.appareil = curentInput;
		searchByTerms();
	});
	inputIngredient.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		//searchTerms.ingredient = curentInput;
		searchByTerms();
	});

	inputUstensile.addEventListener("keyup", (e) => {
		const curentInput = e.target.value;
		//searchTerms.ustensile = curentInput;
		searchByTerms();
	});
	input.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		searchTerms.main = curentInput;
		searchByTerms();
	});

	inputApareil.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		// searchTerms.appareil = curentInput;
		searchByTerms();
	});
	inputIngredient.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		// searchTerms.ingredient = curentInput;
		searchByTerms();
	});

	inputUstensile.addEventListener("click", (e) => {
		const curentInput = e.target.value;
		//searchTerms.ustensile = curentInput;
		searchByTerms();
	});

	document.addEventListener("change", ()=>{
		if(tagsContainerDom)
		
			tagsContainerDom.forEach((tag)=>{
				console.log(tag.textContent)
				//searchTerms.tags = tag.innerHTML
				
				searchByTerms();
		})
	})

}
