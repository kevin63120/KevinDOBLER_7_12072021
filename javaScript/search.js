// Algo 1
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { Data } from "./class/data";
import { testvalue } from "./testValueFunction";
import { warningMessageText } from "./testValueFunction";
import {
	containerIngredient,
	displayUserSecondarySearchIgrendient,
} from "./secondarySearch";
import { displayUserSecondarySearchUstensile } from "./secondarySearch";
import { displayUserSecondarySearchAppareils } from "./secondarySearch";
import { activationIngredientSearch } from "./secondarySearch";
import { activationAppareilSearch } from "./secondarySearch";
import { activationUstensileSearch } from "./secondarySearch";
import { resetSearch } from "./secondarySearch";
import { objetForSecondarySearch } from "./secondarySearch";
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
	searchSecondaryAppliance = "",
	searchSecondaryUstensils = "",
	searchSecondaryIngredient = "",
	tags = []
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

		const secondSearchByAppliance = data.appliance
			.toLowerCase()
			.includes(searchSecondaryAppliance);

		const secondSearchByUstensils = data.ustensils
			.join("")
			.toLowerCase()
			.includes(searchSecondaryUstensils);

		const secondSearchByIngredient = ingredient
			.join(" ")
			.toLowerCase()
			.includes(searchSecondaryIngredient);
		
		const secondeSearchByTag = tags.map(tag =>  ingredient.includes(tag))
		//const searchByTagIngredient = tags.map(tag=> {return ingredient.join("").toLowerCase().includes(tag)})
		//const searchByTagAppliance = data.appliance.toLowerCase().includes(tag);
		//const searchByTagUstensile = data.ustensils.join("").toLowerCase().includes(tag);

		if (
			secondSearchByAppliance &&
			secondSearchByIngredient &&
			secondSearchByUstensils &&
			secondeSearchByTag &&
			// searchByTagUstensile&&
			// searchByTagAppliance &&
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
	searchSecondaryAppliance = "",
	searchSecondaryUstensils = "",
	searchSecondaryIngredient = "",
	tags = []
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
			searchSecondaryIngredient,
			tags
		);

		
		const objetForSecondarySearch =
			returnAllCurentElementSecondarySearch(arrayReturn);

		inputIngredient.addEventListener("keyup", (e) => {
			displayUserSecondarySearchIgrendient(
				e,
				objetForSecondarySearch.ingredientsDisponible
			);
			initTags()
		});

		inputApareil.addEventListener("keyup", (e) => {
			displayUserSecondarySearchAppareils(
				e,
				objetForSecondarySearch.appareilsDisponible
			);
			initTags()
		});

		inputUstensile.addEventListener("keyup", (e) => {
			displayUserSecondarySearchUstensile(
				e,
				objetForSecondarySearch.ustensilesDisponible
			);
			initTags()
		});
    inputIngredient.addEventListener("click ", (e) => {
			displayUserSecondarySearchIgrendient(
				e,
				objetForSecondarySearch.ingredientsDisponible
			);
			initTags()
		});

		inputApareil.addEventListener("click", (e) => {
			displayUserSecondarySearchAppareils(
				e,
				objetForSecondarySearch.appareilsDisponible
			);
			initTags()
		});

		inputUstensile.addEventListener("click", (e) => {
			displayUserSecondarySearchUstensile(
				e,
				objetForSecondarySearch.ustensilesDisponible
			);
			initTags()
		});
    
    
  

	} else {
		arrayReturn = searchByReference(
			"",
			datas,
			searchSecondaryAppliance,
			searchSecondaryUstensils,
			searchSecondaryIngredient,
			tags
		);
	}

	const objetForSecondarySearch =
		returnAllCurentElementSecondarySearch(arrayReturn);
	console.log(objetForSecondarySearch);
	console.log(tags)
	inputIngredient.addEventListener("keyup", (e) => {
		displayUserSecondarySearchIgrendient(
			e,
			objetForSecondarySearch.ingredientsDisponible
		);
		initTags()
	});

	inputApareil.addEventListener("keyup", (e) => {
		displayUserSecondarySearchAppareils(
			e,
			objetForSecondarySearch.appareilsDisponible
		);
		initTags()
	});

	inputUstensile.addEventListener("keyup", (e) => {
		displayUserSecondarySearchUstensile(
			e,
			objetForSecondarySearch.ustensilesDisponible
		);
		initTags()
	});
  inputIngredient.addEventListener("click", (e) => {
    displayUserSecondarySearchIgrendient(
      e,
      objetForSecondarySearch.ingredientsDisponible
    );
	initTags()
  });

  inputApareil.addEventListener("click", (e) => {
    displayUserSecondarySearchAppareils(
      e,
      objetForSecondarySearch.appareilsDisponible
    );
	initTags()
  });

  inputUstensile.addEventListener("click", (e) => {
    displayUserSecondarySearchUstensile(
      e,
      objetForSecondarySearch.ustensilesDisponible
    );
	initTags()
  });

	arrayReturn.forEach((elementReturn) => {
		new Card(elementReturn).createCard(containerCard);
	});
	warningMessageText(
		arrayReturn,
		containerWarningMessage,
		'aucune recette corespondante, essayé "coco", "oeuf" '
	);
}
