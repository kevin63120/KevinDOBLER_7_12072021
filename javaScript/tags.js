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
			
				}
				if (searchTerms.appareil) {
					searchTerms.appareil = searchTerms.appareil.filter(
						(term) => term !== value
					);
					tagsDisplay = tagsDisplay.filter((term) => term !== value);
					tag.remove();
			
					searchByTerms();
				}
				if (searchTerms.ustensile) {
					tagsDisplay = tagsDisplay.filter((term) => term !== value);
					searchTerms.ustensile = searchTerms.ustensile.filter(
						(term) => term !== value
					);
					
					tag.remove();
					searchByTerms();
				}
			});
		});
	}

	function createTag(source, container) {
		if (source) {
		
			const domString = Object.entries(source).map( (elm) =>{
			
				if(elm[0] === "ingredient" && elm[1] !=""){
			
				let result =  elm[1].map(elm =>{
					return `<button type="button" class="tag btn tag-color1 btn-secondary m-1 ml-0" >${elm}<img class="tags_Btn-Close ml-3 " data-tag ="${elm}"src="./pictures/x-circle.svg" width="20px" height="20px"alt=""/>
        			</button>`;
				})
				return result
					
				}
				if (elm[0] === "appareil" && elm[1] !=""){
					let result =  elm[1].map(elm =>{
						return `<button type="button" class="tag btn tag-color3 btn-secondary m-1 ml-0" >${elm}<img class="tags_Btn-Close ml-3 " data-tag ="${elm}"src="./pictures/x-circle.svg" width="20px" height="20px"alt=""/>
						</button>`;
					})
					return result
						
				}
				if (elm[0] === "ustensile" && elm[1] !=""){
					let result =  elm[1].map(elm =>{
						return `<button type="button" class="tag btn tag-color2 btn-secondary m-1 ml-0" >${elm}<img class="tags_Btn-Close ml-3 " data-tag ="${elm}"src="./pictures/x-circle.svg" width="20px" height="20px"alt=""/>
						</button>`;
					})
					return result
						
				}
				
			});

			return (container.innerHTML = domString.join(" "));
		}
		searchByTerms();
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
				createTag(searchTerms, tagContainer);
	
				searchByTerms();
				removeTag();
				e.stopPropagation();
			});
		});
	});
}
