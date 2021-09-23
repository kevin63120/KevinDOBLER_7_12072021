import {
	containerIngredient,
	containerAppareil,
	containerUstensil,
} from "../secondarySearch";

export class Data {
	constructor(recipes) {
		this.recipes = recipes;
	}

	displayHtmlListIngedient(ingredient = "") {
		if (ingredient === "") {
			const containerIngredient =
				document.querySelector(".active-ingredient");
			const listIngredientFiltered = [];
			const listIngredient = this.recipes
				.map((elm) => elm.ingredients)
				.flat()
				.map((elm) => {
					let lower = elm.ingredient.toLowerCase();
					return `<li class="secondarySearch-item-ingredient col-4" id = "ingredient-item">${lower}</li>`;
				});
			listIngredient.forEach((elm) => {
				if (!listIngredientFiltered.includes(elm)) {
					listIngredientFiltered.push(elm);
				}
			});
			containerIngredient.innerHTML = listIngredientFiltered
				.sort()
				.join("");
		} else {
			const listIngredient = ingredient.map((elm) => {
				return `<li class="secondarySearch-item-ingredient col-4" id = "ingredient-item">${elm}</li>`;
			});
			containerIngredient.innerHTML = listIngredient;
		}
		return this
	}

	displayHtmlListAppliance(appliance = "") {
		const containerAppareil = document.querySelector(".active-appareil");
		if (appliance === "") {
			const listApplianceFiltered = [];
			const listAppliance = this.recipes.map((elm) => {
				elm.appliance;
				let lower = elm.appliance.toLowerCase();
				return `<li class="secondarySearch-item-appareil col-4 " id = "appliance-item">${lower}</li>`;
			});
			listAppliance.forEach((elm) => {
				if (!listApplianceFiltered.includes(elm)) {
					listApplianceFiltered.push(elm);
				}
			});
			containerAppareil.innerHTML = listApplianceFiltered.join("");
		} else {
			const listApplianceFiltered = [];
			const listAppliance = appliance.map((elm) => {
				let lower = elm.toLocaleLowerCase();
				return `<li class="secondarySearch-item-appareil  col-4 " id="appliance-item">${lower}</li>`;
			});
			listAppliance.forEach((elm) => {
				if (!listApplianceFiltered.includes(elm)) {
					listApplianceFiltered.push(elm);
				}
			});
			containerAppareil.innerHTML = listApplianceFiltered.join("");
		}
		return this
	}

	displayHtmlListUstensile(ustensile = "") {
		const containerUstensile = document.querySelector(".active-ustensile");
		if (ustensile === "") {
			const listUstensile = this.recipes.map((elm) =>
				elm.ustensils.flat().map((elm) => {
					let lower = elm.toLowerCase();
					return `<li class="secondarySearch-item-ustensiles col-4" id = "ustensile-item">${lower}</li>`;
				})
			);
			const listUstensileFiltered = [];
			listUstensile.flat().forEach((element) => {
				if (!listUstensileFiltered.includes(element)) {
					listUstensileFiltered.push(element);
				}
			});
			containerUstensile.innerHTML = listUstensileFiltered.join("");
		} else {
			const listUstensileFiltered = [];
			const listUstensile = ustensile.map((elm) => {
				let lower = elm.toLowerCase();
				return `<li class="secondarySearch-item-ustensiles col-4  id = "ustensile-item"">${lower}</li>`;
			});
			listUstensile.forEach((elm) => {
				if (!listUstensileFiltered.includes(elm)) {
					listUstensileFiltered.push(elm);
				}
				containerUstensile.innerHTML = listUstensileFiltered;
			});
		}
		return this
	}
}
