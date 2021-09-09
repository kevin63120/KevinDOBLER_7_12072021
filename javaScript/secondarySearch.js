import { recipes } from "../assets/data/recipes";
import { testvalue } from "./testValueFunction";
import { arrayUstensiles } from "./script";
import { arrayIngredients } from "./script";
import { arrayAppareils } from "./script";
import { Data } from "./class/data";

// je recupere une list par recherche
//je la place a la place de mes recherche

//export function initSecondarySearch() {
const containerInput1 = document.querySelector(
	".header_searchbar-secondarySearchContainer1"
);
const containerInput2 = document.querySelector(
	".header_searchbar-secondarySearchContainer2"
);
const containerInput3 = document.querySelector(
	".header_searchbar-secondarySearchContainer3"
);

const inputIngredient = document.querySelector("#dataListSecondarySearch1");
const inputApareil = document.querySelector("#dataListSecondarySearch2");
const inputUstensile = document.querySelector("#dataListSecondarySearch3");

//list contenant les éléments de recherches secondaires
export const containerIngredient = document.querySelector(".active-ingredient");
export const containerAppareil = document.querySelector(".active-appareil");
export const containerUstensil = document.querySelector(".active-ustensile");


const listIngredientSelected = document.querySelectorAll(
	".secondarySearch-item-ingredient"
);
const listApplianceSelected = document.querySelectorAll(
	".secondarySearch-item-appareil"
);
const listUstensiltSelected = document.querySelectorAll(
	".secondarySearch-item-ustensiles"
);



//  crée un nouveau tableau comtenant tout les élémént HTML à renvoyer
// const returnIngredient = arrayIngredients.map((ingredient) => {return `<li class="secondarySearch-item-ingredient col-4">${ingredient}</li> `;  });
// const returnAppareils = arrayAppareils.map((appareil) => {return `<li class="secondarySearch-item-appareil col-4">${appareil}</li> `;});
// const returnUstensiles = arrayUstensiles.map((ustensile) => {return `<li class="secondarySearch-item-ustensiles col-4">${ustensile}</li> `;});

function removeSecondSearch(rootElement) {
	rootElement.innerHTML = "";
}

// les trois fonction displaySecondarySearch s'utilise aux moment d'un keyboard event user et modifie leurs valeur en fonction des disponibilité
// dans le tableau qu'ils recoivent

export function returnAllCurentElementSecondarySearch(array1) {
	let ingredient1 = array1.map((elm) => elm.ingredients).flat().map(i => i.ingredient);
	let appareil1 = array1.map((elm) => elm.appliance);
	let ustensile1 = array1.map((elm) => elm.ustensils).flat();
	
	let curentElementAvailable = {
	  ingredientsDisponible: ingredient1,
	  appareilsDisponible: appareil1,
	  ustensilesDisponible: ustensile1,
	};
	console.log(curentElementAvailable.ingredientsDisponible)
	console.log(curentElementAvailable.appareilsDisponible)
	console.log(curentElementAvailable.ustensilesDisponible)
	
	return curentElementAvailable;
  }
  
export const displayUserSecondarySearchIgrendient = (e,arrayIngredientsInput) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayIngredientsInput
		.filter((ingredient) => {
			return ingredient.toLowerCase().includes(userInput);
		})
		.map((ingredient) => {
			return `<li class="secondarySearch-item-ingredient col-4">${ingredient}</li> `;
		});
	containerIngredient.innerHTML = modifyArray.join("");
};

export const displayUserSecondarySearchAppareils = (e, arrayAppareilsInput) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayAppareilsInput
		.filter((appareil) => {
			return appareil.toLowerCase().includes(userInput);
		})
		.map((appareil) => {
			return `<li class="secondarySearch-item-appareil col-4">${appareil}</li> `;
		});
	containerAppareil.innerHTML = modifyArray.join("");
};

export const displayUserSecondarySearchUstensile = (
	e,
	arrayUstensilesInput
) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayUstensilesInput
		.filter((ustensile) => {
			return ustensile.toLowerCase().includes(userInput);
		})
		.map((ustensil) => {
			return `<li class="secondarySearch-item-ustensiles col-4">${ustensil}</li> `;
		});

	containerUstensil.innerHTML = modifyArray.join("");
};






// les function activation active de base les élément de recheche secondaire aux clic et renvoix les données de base non modifié par un input user
export let activationIngredientSearch = () => {
	containerInput1.classList.replace("col-lg-2", "col-lg-6");
	containerInput2.classList.replace("col-lg-6", "col-lg-2");
	containerInput3.classList.replace("col-lg-6", "col-lg-2");
	removeSecondSearch(containerAppareil);
	removeSecondSearch(containerUstensil);
};

export let activationUstensileSearch = () => {

	containerInput1.classList.replace("col-lg-6", "col-lg-2");
	containerInput2.classList.replace("col-lg-6", "col-lg-2");
	containerInput3.classList.replace("col-lg-2", "col-lg-6");
	
	removeSecondSearch(containerIngredient);
	removeSecondSearch(containerAppareil);
};

export let activationAppareilSearch = () => {
	
	containerInput1.classList.replace("col-lg-6", "col-lg-2");
	containerInput2.classList.replace("col-lg-2", "col-lg-6");
	containerInput3.classList.replace("col-lg-6", "col-lg-2");
	removeSecondSearch(containerIngredient);
	removeSecondSearch(containerUstensil);
};

export function resetSearch() {
	/*if (
		containerInput1.classList === "col-6" ||
		containerInput3.classList === "col-6" ||
		containerInput3.classList === "col-6"
	) {
		containerInput1.classList.replace("col-6", "col-2");
		containerInput2.classList.replace("col-6", "col-2");
		containerInput3.classList.replace("col-6", "col-2");
	}
	if (
		containerInput1.classList === "col-10" ||
		containerInput3.classList === "col-10" ||
		containerInput3.classList === "col-10"
	) {
		containerInput1.classList.replace("col-10", "col-2");
		containerInput2.classList.replace("col-10", "col-2");
		containerInput3.classList.replace("col-10", "col-2");
	}

	removeSecondSearch(containerIngredient);
	removeSecondSearch(containerAppareil);
	removeSecondSearch(containerUstensil);
	*/
}
document.addEventListener("click", (e) => {
		switch (e.target) {
		  case inputIngredient:
			activationIngredientSearch();
			break;
		  case inputUstensile:
			activationUstensileSearch();
			break;
		  case inputApareil:
			activationAppareilSearch();
			break;
		  default:
			resetSearch();
			break;
		}
	  });