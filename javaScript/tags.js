import {recipes} from "../assets/data/recipes"
import { searchByTerms, searchTerms } from "./terms";
 export let tagsDisplay = [];
const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");


export const removeTags = (arrayTagAvailable, e) =>{
  let data = e.target.data-tag
  if (data=== displayTag){
    displayTag.innerHTML = ""
}
}



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

	let elementTag = document.querySelectorAll("li");
  let ingredientContainer = document.querySelector("#dataListSecondarySearch1");
  let applianceContainer = document.querySelector("#dataListSecondarySearch2");
  let ustensilContainer = document.querySelector("#dataListSecondarySearch3")
  
	document.addEventListener("click", (e) => {
		e.stopPropagation();
    let value = e.target
		if (elementTag) {

			elementTag.forEach((tag) => {
				tag.addEventListener("click", () => {
          tagAdd(tag.innerHTML, tagsDisplay)

          /**
           * 1 - Vérifier à quelle catégorie appartient le tag (ingrediénts, ustensiles, appareils)
           * 2 - Lors du clic sur un élément de la liste, on l'ajoute aux searchTerms
           * 3 - on relance la recherche
           */

          // 1
          // TODO
            if(e.target == ingredientContainer){
             searchTerms.ingredient.push(tag.innerHTML)
            }
            if(e.target == applianceContainer ){
             searchTerms.appareil.push(tag.innerHTML)
             console.log(searchTerms)
            }
            if(e.target == ustensilContainer) {
              searchTerms.ustensile.push(tag.innerHTML)
            }
            console.log(searchTerms)
            
           // 2
           
           
           // 3
           searchByTerms()
          console.log(tagsDisplay)
		return	createTag(tagsDisplay, tagContainer);
				});
			});
		}
	});
  
  

  
}

export function deleteTag(){
  console.log("fermer")
}



	// Selection de tag
	

