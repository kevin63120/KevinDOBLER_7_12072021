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
	const dataDisplayArray = [];

	datas.forEach((data) => {
		const ingredient = data.ingredients.map(
			(ingredient) => ingredient["ingredient"]
		);

		const mainSearchByIngredient = ingredient
			.join(" ")
			.toLowerCase()
			.includes(userInputModify);

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

		if (
			secondSearchByAppliance &&
			secondSearchByIngredient &&
			secondSearchByUstensils &&
			(mainSearchByIngredient ||
				mainSearchByDescription ||
				mainSearchByName)
		) {
			dataDisplayArray.push(data);
		}
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
