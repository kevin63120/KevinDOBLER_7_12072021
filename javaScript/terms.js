
import { recipes } from "../assets/data/recipes";

import { search } from "./search";

export const searchTerms = {
	main: "",
	appareil: [],
	ingredient: [],
	ustensile: [],
	
}; 

export function searchByTerms() {
	
	console.log('terms', searchTerms);
	search(
		searchTerms.main,
		recipes,
		searchTerms.appareil,
		searchTerms.ustensile,
		searchTerms.ingredient,
		
	);
}