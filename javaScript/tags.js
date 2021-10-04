
import { searchByTerms, searchTerms } from "./terms";
export let tagsDisplay = [];
const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");
const tag = document.querySelectorAll(".tag");

export function initTags() {
	const tagContainer = document.querySelector(".tag-container");

	function removeTag(){
		let tags = document.querySelectorAll(".tag");
		tags.forEach((tag) => {
			tag.children[0].addEventListener("click", () => {
				let value = tag.innerText;

				if (searchTerms.ingredient) {
					let elmIndex = searchTerms.ingredient.indexOf(value);
					searchTerms.ingredient.splice(elmIndex, 1);
					console.log('tag', searchTerms);
					tag.remove()
					searchByTerms();
					console.log(searchTerms);
				}
				if (searchTerms.appareil) {
					let elmIndex = searchTerms.appareil.indexOf(value);
					searchTerms.appareil.splice(elmIndex, 1);
					tag.remove()
					searchByTerms();
					console.log(searchTerms);
				}
				if (searchTerms.ustensile) {
					let elmIndex = searchTerms.ustensile.indexOf(value);
					searchTerms.ustensile.splice(elmIndex, 1);
					tag.remove()
					searchByTerms();
					console.log(searchTerms);
				}
			});
			console.log("value de tag", tag,"value de search terms", searchTerms)
		});
	}


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
					removeTag()
				}
				if (e.target == applianceContainer) {
					searchTerms.appareil.push(tag.innerHTML);
					console.log(searchTerms);
					tagAdd(tag.innerHTML, tagsDisplay);
					searchByTerms();
					createTag(tagsDisplay, tagContainer);
					removeTag()
				}
				if (e.target == ustensilContainer) {
					searchTerms.ustensile.push(tag.innerHTML);
					console.log(searchTerms);
					tagAdd(tag.innerHTML, tagsDisplay);
					searchByTerms();
					createTag(tagsDisplay, tagContainer);
					removeTag()
				}
			});
		});
	});
	
}


