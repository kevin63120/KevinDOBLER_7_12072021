// Algo 1
import { Card } from "./class/card";
import { warningMessageText } from "./testValueFunction";
import { displayUserSecondarySearchIgrendient } from "./secondarySearch";
import { displayUserSecondarySearchUstensile } from "./secondarySearch";
import { displayUserSecondarySearchAppareils } from "./secondarySearch";
import { returnAllCurentElementSecondarySearch } from "./secondarySearch";
import { initTags } from "./tags";

//global DOM Selection Items
const inputIngredient = document.querySelector("#dataListSecondarySearch1");
const inputApareil = document.querySelector("#dataListSecondarySearch2");
const inputUstensile = document.querySelector("#dataListSecondarySearch3");
let accentsTidy = function(s){
    var r=s.toLowerCase();
 
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");

    return r;
};


function removeCard() {
	const articles = document.querySelectorAll("article");

	articles.forEach((article) => {
		article.remove("h1");
		article.remove();
	});
}

// first algo search
function searchByReference(
	userInput = null,
	datas,
	searchSecondaryAppliance = [],
	searchSecondaryUstensils = [],
	searchSecondaryIngredient = []
) {
	let userInputModify = userInput.toLowerCase();
	userInputModify = accentsTidy(userInputModify)
	console.log(userInputModify)
	const dataDisplayArray = datas.filter((data) => {
		const ingredient = data.ingredients.map(
			(ingredient) => {
				console.log(accentsTidy(ingredient["ingredient"]))
				return  ingredient["ingredient"]}
		);

		const mainSearchByIngredient = ingredient
			.some(elm => elm.includes(userInputModify.toLowerCase()))
			

		console.log(mainSearchByIngredient)
		const mainSearchByDescription = data.description
			.toLowerCase()
			.includes(userInputModify);
		const mainSearchByName = data.name
			.toLowerCase()
			.includes(userInputModify);

		const secondSearchByAppliance = searchSecondaryAppliance.every(
			(selectedyAppliance) => data.appliance.includes(selectedyAppliance)
		);

		const secondSearchByUstensils = searchSecondaryUstensils.every(
			(selectedUstensil) => data.ustensils.includes(selectedUstensil)
		);

		const secondSearchByIngredient = searchSecondaryIngredient.every(
			(selectedIngredient) => ingredient.includes(selectedIngredient)
		);

		return Boolean(
			secondSearchByAppliance &&
				secondSearchByIngredient &&
				secondSearchByUstensils &&
				(mainSearchByIngredient ||
					mainSearchByDescription ||
					mainSearchByName)
		);
	});

	return dataDisplayArray;
}

//Global Search function
export function search(
	userInput,
	datas,
	searchSecondaryAppliance = [],
	searchSecondaryUstensils = [],
	searchSecondaryIngredient = []
) {
	const containerCard = document.querySelector(".card-container");
	const containerWarningMessage = document.querySelector(".warning");
	let arrayReturn;

	removeCard();
	if (userInput.length >= 3) {
		arrayReturn = searchByReference(
			userInput,
			datas,
			searchSecondaryAppliance,
			searchSecondaryUstensils,
			searchSecondaryIngredient
		);

		const objetForSecondarySearch =
			returnAllCurentElementSecondarySearch(arrayReturn);

		if (inputIngredient) {
			inputIngredient.addEventListener("keyup", (e) => {
				displayUserSecondarySearchIgrendient(
					e,
					objetForSecondarySearch.ingredientsDisponible
				);
				initTags();
			});
			inputIngredient.addEventListener("click ", (e) => {
				displayUserSecondarySearchIgrendient(
					e,
					objetForSecondarySearch.ingredientsDisponible
				);
				initTags();
			});
		}

		if (inputApareil) {
			inputApareil.addEventListener("keyup", (e) => {
				displayUserSecondarySearchAppareils(
					e,
					objetForSecondarySearch.appareilsDisponible
				);
				initTags();
			});
			inputApareil.addEventListener("click", (e) => {
				displayUserSecondarySearchAppareils(
					e,
					objetForSecondarySearch.appareilsDisponible
				);
				initTags();
			});
		}
		if (inputUstensile) {
			inputUstensile.addEventListener("keyup", (e) => {
				displayUserSecondarySearchUstensile(
					e,
					objetForSecondarySearch.ustensilesDisponible
				);
				initTags();
			});
			inputUstensile.addEventListener("click", (e) => {
				displayUserSecondarySearchUstensile(
					e,
					objetForSecondarySearch.ustensilesDisponible
				);
				initTags();
			});
		}
	} else {
		arrayReturn = searchByReference(
			"",
			datas,
			searchSecondaryAppliance,
			searchSecondaryUstensils,
			searchSecondaryIngredient
		);
	}

	const objetForSecondarySearch =
		returnAllCurentElementSecondarySearch(arrayReturn);

	if (inputIngredient) {
		inputIngredient.addEventListener("keyup", (e) => {
			displayUserSecondarySearchIgrendient(
				e,
				objetForSecondarySearch.ingredientsDisponible
			);
			initTags();
		});

		inputIngredient.addEventListener("click", (e) => {
			displayUserSecondarySearchIgrendient(
				e,
				objetForSecondarySearch.ingredientsDisponible
			);
			initTags();
		});
	}

	if (inputApareil) {
		inputApareil.addEventListener("keyup", (e) => {
			displayUserSecondarySearchAppareils(
				e,
				objetForSecondarySearch.appareilsDisponible
			);
			initTags();
		});

		inputApareil.addEventListener("click", (e) => {
			displayUserSecondarySearchAppareils(
				e,
				objetForSecondarySearch.appareilsDisponible
			);
			initTags();
		});
	}

	if (inputUstensile) {
		inputUstensile.addEventListener("keyup", (e) => {
			displayUserSecondarySearchUstensile(
				e,
				objetForSecondarySearch.ustensilesDisponible
			);
			initTags();
		});
		inputUstensile.addEventListener("click", (e) => {
			displayUserSecondarySearchUstensile(
				e,
				objetForSecondarySearch.ustensilesDisponible
			);
			initTags();
		});
	}

	arrayReturn.forEach((elementReturn) => {
		new Card(elementReturn).createCard(containerCard);
	});
	warningMessageText(
		arrayReturn,
		containerWarningMessage,
		'aucune recette corespondante, essayé "coco", "oeuf" '
	);
}
