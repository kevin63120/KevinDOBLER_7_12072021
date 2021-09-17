import {recipes} from "../assets/data/recipes"
let tagsDisplay = [];
export function initTags() {
	const tagContainer = document.querySelector(".tag-container");
	const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");

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

 

	function tagAdd(value, array) {
		if (array.length < 4) {
			array.push(value);
      console.log(array)
			return array;
		} else {
			array.splice(0, 0, value);
			array.splice(4, 1);
      console.log(array)
			return array;
		}
	}
  
  function createTag(array, container) {
		if (array.length != 0) {
			const result = array.map((tag) => {
				return `<button type="button" class="tag btn btn-primary mt-3 mb-3">${tag}<img class="tags_Btn-Close ml-3 " src="./pictures/x-circle.svg" width="20px" height="20px" alt=""/>
        </button>`;
			});
			return (container.innerHTML = result.join(""));
		}
	}

	let elementTag = document.querySelectorAll("li");

	document.addEventListener("click", (e) => {
		
		e.stopPropagation();
    let value = e.target.value;
		if (elementTag) {
			elementTag.forEach((tag) => {
				tag.addEventListener("click", () => {
					console.log(tag.innerHTML);
          tagAdd(tag.innerHTML, tagsDisplay)
        
		return	createTag(tagsDisplay, tagContainer);
				});
			});
		}
	});
  
  

  
}



	// Selection de tag
	

