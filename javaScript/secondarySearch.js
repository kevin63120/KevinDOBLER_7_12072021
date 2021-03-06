const containerInput1 = document.querySelector(".header_searchbar-secondarySearchContainer1");
const containerInput2 = document.querySelector(".header_searchbar-secondarySearchContainer2");
const containerInput3 = document.querySelector(".header_searchbar-secondarySearchContainer3");
const inputIngredient = document.querySelector("#dataListSecondarySearch1");
const inputApareil = document.querySelector("#dataListSecondarySearch2");
const inputUstensile = document.querySelector("#dataListSecondarySearch3");

//list contenant les éléments de recherches secondaires
export const containerIngredient = document.querySelector(".active-ingredient");
export const containerAppareil = document.querySelector(".active-appareil");
export const containerUstensil = document.querySelector(".active-ustensile");
function hideSecondSearch(rootElement) {
	if (rootElement) {
		rootElement.style.display = "none";
	}
}
function appearSecondSearch(rootElement) {
	rootElement.style.display = "flex";
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
	return curentElementAvailable;
  }
  
export const displayUserSecondarySearchIgrendient = (e,arrayIngredientsInput) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayIngredientsInput
		.filter((ingredient) => {
			return ingredient.toLowerCase().includes(userInput);
		})
		.map((ingredient) => {
			return `<li class="secondarySearch-item-ingredient item col-4"  data-name = "${ingredient}">${ingredient}</li> `;
		});
		let finalArray = [...new Set(modifyArray)]
	containerIngredient.innerHTML = finalArray.join("");
};

export const displayUserSecondarySearchAppareils = (e, arrayAppareilsInput) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayAppareilsInput
		.filter((appareil) => {
			return appareil.toLowerCase().includes(userInput);
		})
		.map((appareil) => {
			return `<li class="secondarySearch-item-appareil item col-4" data-name = "${appareil}">${appareil}</li> `;
		});
	let finalArray = [...new Set(modifyArray)]
	containerAppareil.innerHTML = finalArray.join("");
};

export const displayUserSecondarySearchUstensile = (e,arrayUstensilesInput) => {
	let userInput = e.target.value.toLowerCase();
	let modifyArray = arrayUstensilesInput
		.filter((ustensile) => {
			return ustensile.toLowerCase().includes(userInput);
		})
		.map((ustensil) => {
			return `<li class="secondarySearch-item-ustensiles item col-4"  data-name = "${ustensil}">${ustensil}</li> `;
		});
		let finalArray = [...new Set(modifyArray)]
	containerUstensil.innerHTML = finalArray.join("");
};

export let activationIngredientSearch = () => {
	containerInput1.classList.replace("col-lg-2", "col-lg-6");
	containerInput2.classList.replace("col-lg-6", "col-lg-2");
	containerInput3.classList.replace("col-lg-6", "col-lg-2");
	appearSecondSearch(containerIngredient)
	hideSecondSearch(containerAppareil);
	hideSecondSearch(containerUstensil);
};

export let activationUstensileSearch = () => {
	containerInput1.classList.replace("col-lg-6", "col-lg-2");
	containerInput2.classList.replace("col-lg-6", "col-lg-2");
	containerInput3.classList.replace("col-lg-2", "col-lg-6");
	appearSecondSearch(containerUstensil)
	hideSecondSearch(containerIngredient);
	hideSecondSearch(containerAppareil);
};

export let activationAppareilSearch = () => {	
	containerInput1.classList.replace("col-lg-6", "col-lg-2");
	containerInput2.classList.replace("col-lg-2", "col-lg-6");
	containerInput3.classList.replace("col-lg-6", "col-lg-2");
	appearSecondSearch(containerAppareil)
	hideSecondSearch(containerIngredient);
	hideSecondSearch(containerUstensil);
};

function resetSearch() {	
	hideSecondSearch(containerIngredient);
	hideSecondSearch(containerAppareil);
	hideSecondSearch(containerUstensil);	
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
			if(containerInput1 || containerInput2 || containerInput3){
				containerInput1.classList.replace("col-lg-6", "col-lg-2");
				containerInput2.classList.replace("col-lg-6", "col-lg-2");
				containerInput3.classList.replace("col-lg-6", "col-lg-2");
			}			
			break;
		}
	  });