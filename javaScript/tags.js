import { searchByTerms, searchTerms } from "./terms";
let tagsDisplay = [];
export function initTags() {
	const tagContainer = document.querySelector(".tag-container");

	function removeTag() {
		let tags = document.querySelectorAll(".tag");
		tags.forEach((tag) => {
			tag.children[0].addEventListener("click", () => {
				let value = tag.innerText;

				if (searchTerms.ingredient.includes(value)) {
					searchTerms.ingredient = searchTerms.ingredient.filter(
						(term) => term !== value
					);
					tagsDisplay = tagsDisplay.filter((term) => term !== value);
					tag.remove();
					searchByTerms();
					console.log("tag", tagsDisplay);
					console.log(searchTerms);
				}
				if (searchTerms.appareil) {
					searchTerms.appareil = searchTerms.appareil.filter(
						(term) => term !== value
					);
					tagsDisplay = tagsDisplay.filter((term) => term !== value);
					tag.remove();
					console.log("tag", searchTerms);
					searchByTerms();
				}
				if (searchTerms.ustensile) {
					tagsDisplay = tagsDisplay.filter((term) => term !== value);
					searchTerms.ustensile = searchTerms.ustensile.filter(
						(term) => term !== value
					);
					console.log("tag", searchTerms);
					tag.remove();
					searchByTerms();
				}
			});
		});
	}

	function createTag(array, container, type = "") {
		if (array.length != 0) {
			console.log(array);
			const result = array.map((tag) => {
				return `<button type="button" class="tag btn btn-primary m-1"data-type ="${type}"  >${tag}<img class="tags_Btn-Close ml-3 " data-tag ="${tag}"src="./pictures/x-circle.svg" width="20px" height="20px"alt=""/>
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

	document.addEventListener("click", (e) => {
		e.stopPropagation();
		elementTag.forEach((tag) => {
			tag.addEventListener("click", () => {
				if (e.target === ingredientContainer) {
					searchTerms.ingredient.push(tag.innerHTML);
				}
				if (e.target === applianceContainer) {
					searchTerms.appareil.push(tag.innerHTML);
				}
				if (e.target === ustensilContainer) {
					searchTerms.ustensile.push(tag.innerHTML);
				}
				let arrayDiplayOnPage = [
					...searchTerms.ingredient,
					...searchTerms.ustensile,
					...searchTerms.appareil,
				];
				createTag(arrayDiplayOnPage, tagContainer);
				console.log(searchTerms);
				searchByTerms();
				removeTag();
				e.stopPropagation();
			});
		});
	});
}
