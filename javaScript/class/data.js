import { recipes } from "../../assets/data/recipes";
import { testvalue, testValue2 } from "../testValueFunction";

class Data {
	constructor(recipes) {
		this.recipes = recipes;
	}

	displayHtmlListIngedient() {
		const listIngredient = this.recipes
			.map((elm) => elm.ingredients)
			.flat()
			.map((i) => i.ingredient);
		const listIngredientFiltered = testValue2(listIngredient);
		const HtmlResult = listIngredientFiltered.flat().map((result) => {
			return `<li class="secondarySearch-item_1 col-4">${result}</li>`;
		});

		return HtmlResult;
	}

	displayHtmlListAppliance() {
		const listAppliance = this.recipes.map((elm) => elm.appliance);
		const listApplianceFiltered = testValue2(listAppliance);
		const HtmlResult = listApplianceFiltered.map((elem) => {
			`<li class="secondarySearch-item_2 col-4">${elem}</li>`;
		});

		return HtmlResult;
	}

	displayHtmlListUstensile() {
		const listUstensile = this.recipes.map((elm) => elm.ustensile);
		const listUstensileFiltered = testValue2(listUstensile);
		const HtmlResult = listUstensileFiltered.map((elem) => {
			`<li class="secondarySearch-item_3 col-4">${elem}</li>`;
		});

		return HtmlResult;
	}
}

let html1 = new Data(recipes).displayHtmlListIngedient();
