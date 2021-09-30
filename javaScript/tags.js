import { recipes } from "../assets/data/recipes";
import { searchByTerms, searchTerms } from "./terms";
export let tagsDisplay = [];
const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");
const tag = document.querySelectorAll(".tag");

export let deleteTags = (tag, e) => {
	btn = e.taget;
	if (btn === tagsBtnClose) {
		tag.innerHTML = "";
	}
};




export function initTags() {

	const tagContainer = document.querySelector(".tag-container");

	const inputSecondarySearchIngredient = document.querySelector(
		"#dataListSecondarySearch1"
	);
	const inputSecondarySearchAppliance = document.querySelector(
		"#dataListSecondarySearch2"
	);
	const inputSecondarySearchUstensil = document.querySelector(
		"#dataListSecondarySearch3"
	);
	const tagIngredientOnListBaseHtml = document.querySelectorAll(
		".secondarySearch-item-ingredient "
	);

	
	let tags = document.querySelectorAll(".tag");
	console.log(tags)	
		tags.forEach((tag) => {
			tag.children[0].addEventListener("click", (e) => {
				if (searchTerms.ingredient) {
					let value = tag.innerText;
					let elmIndex = searchTerms.ingredient.indexOf(value);
					searchTerms.ingredient.splice(elmIndex, 1);

					searchByTerms();
					console.log(searchTerms);
				}
				if (searchTerms.appareil.includes(tag.innerHTML)) {
					let value = tag.innerText;
					let elmIndex = searchTerms.appareil.indexOf(value);
					searchTerms.appareil.splice(elmIndex, 1);

					searchByTerms();
					console.log(searchTerms);
				}
				if (searchTerms.ustensile.includes(tag.innerHTML)) {
					let value = tag.innerText;
					let elmIndex = searchTerms.ustensile.indexOf(value);
					searchTerms.ustensile.splice(elmIndex, 1);

					searchByTerms();
					console.log(searchTerms);
				}
			});
		});

	function tagAdd(value, array) {
		if (array.length < 4) {
			array.push(value);
			return array;
		} else {
			array.splice(0, 0, value);
			array.splice(4, 1);
			return array;
		}
	}

	function createTag(array, container) {
		if (array.length != 0) {
			const result = array.map((tag) => {
				return `<button type="button" class="tag btn btn-primary m-1">${tag}<img class="tags_Btn-Close ml-3 " data-tag ="${tag}"src="./pictures/x-circle.svg" width="20px" height="20px" alt=""/>
        </button>`;
			});
			return (container.innerHTML = result.join(""));
		}
		
	}

	let elementTag = document.querySelectorAll(".item");
	let ingredientContainer = document.querySelector(
		"#dataListSecondarySearch1"
	);
	let applianceContainer = document.querySelector(
		"#dataListSecondarySearch2"
	);
	let ustensilContainer = document.querySelector("#dataListSecondarySearch3");
	let input = document.querySelectorAll("input");

	document.addEventListener("click", (e) => {
		e.stopPropagation();
		elementTag.forEach((tag) => {
			tag.addEventListener("click", () => {
				/**
				 * 1 - Vérifier à quelle catégorie appartient le tag (ingrediénts, ustensiles, appareils)
				 * 2 - Lors du clic sur un élément de la liste, on l'ajoute aux searchTerms
				 * 3 - on relance la recherche
				 */
				// 1
				// TODO
				if (e.target == ingredientContainer) {
					searchTerms.ingredient.push(tag.innerHTML);
					console.log(searchTerms);
					tagAdd(tag.innerHTML, tagsDisplay);
					searchByTerms();
					createTag(tagsDisplay, tagContainer);
				}
				if (e.target == applianceContainer) {
					searchTerms.appareil.push(tag.innerHTML);
					console.log(searchTerms);
					tagAdd(tag.innerHTML, tagsDisplay);
					searchByTerms();
					createTag(tagsDisplay, tagContainer);
				}
				if (e.target == ustensilContainer) {
					searchTerms.ustensile.push(tag.innerHTML);
					console.log(searchTerms);
					tagAdd(tag.innerHTML, tagsDisplay);
					searchByTerms();
					createTag(tagsDisplay, tagContainer);
				}

				// 2

				// 3
			});
		});
	});
}

// Selection de tag
