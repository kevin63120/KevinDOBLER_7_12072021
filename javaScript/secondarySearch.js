import { recipes } from "../assets/data/recipes";
import { testvalue } from "./testValueFunction";
import { arrayUstensiles } from "./script";
import { arrayIngredients } from "./script";
import { arrayAppareils } from "./script";

// je recupere une list par recherche
//je la place a la place de mes recherche

//export function initSecondarySearch() {
const containerInput1 = document.querySelector(
  ".header_searchbar-secondarySearchContainer1"
);
const containerInput2 = document.querySelector(
  ".header_searchbar-secondarySearchContainer2"
);
const containerInput3 = document.querySelector(
  ".header_searchbar-secondarySearchContainer3"
);

const inputIngredient = document.querySelector("#dataListSecondarySearch1");
const inputApareil = document.querySelector("#dataListSecondarySearch2");
const inputUstensile = document.querySelector("#dataListSecondarySearch3");

//list contenant les éléments de recherches secondaires
const containerIngredient = document.querySelector(".active-ingredient");
const containerAppareil = document.querySelector(".active-appareil");
const containerUstensil = document.querySelector(".active-ustensile");

// tableaux d'elements de recherches secondaires
// const arrayIngredients = [];
// const arrayUstensiles = [];
// const arrayAppareils = [];

const listIngredientSelected = document.querySelectorAll(
  ".secondarySearch-item_1"
);
const listApplianceSelected = document.querySelectorAll(
  ".secondarySearch-item_2"
);
const listUstensiltSelected = document.querySelectorAll(
  ".secondarySearch-item_3"
);

// recipes.forEach((recipe) => {
//   const appareil = recipe.appliance;
//   testvalue(appareil, arrayAppareils);

//   recipe.ustensils.forEach((ustensil) => {
//     testvalue(ustensil, arrayUstensiles);
//   });

//   const ingredient = recipe.ingredients.map((elt) => {
//     return elt["ingredient"];
//   });
//   ingredient.forEach((elt) => {
//     testvalue(elt, arrayIngredients);
//   });
// });

//  crée un nouveau tableau comtenant tout les élémént HTML à renvoyer
// const returnIngredient = arrayIngredients.map((ingredient) => {return `<li class="secondarySearch-item_1 col-4">${ingredient}</li> `;  });
// const returnAppareils = arrayAppareils.map((appareil) => {return `<li class="secondarySearch-item_2 col-4">${appareil}</li> `;});
// const returnUstensiles = arrayUstensiles.map((ustensile) => {return `<li class="secondarySearch-item_3 col-4">${ustensile}</li> `;});

function removeSecondSearch(rootElement) {
  rootElement.innerHTML = "";
}

// les trois fonction displaySecondarySearch s'utilise aux moment d'un keyboard event user et modifie leurs valeur en fonction des disponibilité
// dans le tableau qu'ils recoivent

export const displayUserSecondarySearchIgrendient = (
  e,
  arrayIngredientsInput
) => {
  let userInput = e.target.value.toLowerCase();
  let modifyArray = arrayIngredientsInput
    .filter((ingredient) => {
      return ingredient.toLowerCase().includes(userInput);
    })
    .map((ingredient) => {
      return `<li class="secondarySearch-item_1 col-4">${ingredient}</li> `;
    });
  containerIngredient.innerHTML = modifyArray.join("");
};

export const displayUserSecondarySearchAppareils = (e, arrayAppareilsInput) => {
  let userInput = e.target.value.toLowerCase();
  let modifyArray = arrayAppareilsInput
    .filter((appareil) => {
      return appareil.toLowerCase().includes(userInput);
    })
    .map((appareil) => {
      return `<li class="secondarySearch-item_2 col-4">${appareil}</li> `;
    });
  containerAppareil.innerHTML = modifyArray.join("");
};

export const displayUserSecondarySearchUstensile = (
  e,
  arrayUstensilesInput
) => {
  let userInput = e.target.value.toLowerCase();
  let modifyArray = arrayUstensilesInput
  .filter((ustensile) => {
    return ustensile.toLowerCase().includes(userInput);
  })
  .map((ustensil)=>{
    return `<li class="secondarySearch-item_3 col-4">${ustensil}</li> `;
  })

  containerUstensil.innerHTML = modifyArray.join("");
};

// les function activation active de base les élément de recheche secondaire aux clic et renvoix les données de base non modifié par un input user
export let activationIngredientSearch = (returnIngredient) => {
  returnIngredient.map((elem) => {
    return `<li class="secondarySearch-item_1 col-4">${elem}</li>`;
  });
  containerInput1.classList.replace("col-lg-2", "col-lg-6");
  containerInput2.classList.replace("col-lg-6", "col-lg-2");
  containerInput3.classList.replace("col-lg-6", "col-lg-2");
  containerIngredient.innerHTML = returnIngredient;
  removeSecondSearch(containerAppareil);
  removeSecondSearch(containerUstensil);
};

export let activationUstensileSearch = (returnUstensiles) => {
  console.log(returnUstensiles);
  containerInput1.classList.replace("col-lg-6", "col-lg-2");
  containerInput2.classList.replace("col-lg-6", "col-lg-2");
  containerInput3.classList.replace("col-lg-2", "col-lg-6");
  containerUstensil.innerHTML = `<li class="secondarySearch-item_3 col-4">${returnUstensiles.join("")}</li>`;
  removeSecondSearch(containerIngredient);
  removeSecondSearch(containerAppareil);
};

export let activationAppareilSearch = (returnAppareils) => {
  returnAppareils.forEach((elem) => {
    containerAppareil.innerHTML = `<li class="secondarySearch-item_2 col-4">${elem}</li>`;
  });
  containerInput1.classList.replace("col-lg-6", "col-lg-2");
  containerInput2.classList.replace("col-lg-2", "col-lg-6");
  containerInput3.classList.replace("col-lg-6", "col-lg-2");
  removeSecondSearch(containerIngredient);
  removeSecondSearch(containerUstensil);
};

export function resetSearch() {
  if (
    containerInput1.classList === "col-6" ||
    containerInput3.classList === "col-6" ||
    containerInput3.classList === "col-6"
  ) {
    containerInput1.classList.replace("col-6", "col-2");
    containerInput2.classList.replace("col-6", "col-2");
    containerInput3.classList.replace("col-6", "col-2");
  }
  if (
    containerInput1.classList === "col-10" ||
    containerInput3.classList === "col-10" ||
    containerInput3.classList === "col-10"
  ) {
    containerInput1.classList.replace("col-10", "col-2");
    containerInput2.classList.replace("col-10", "col-2");
    containerInput3.classList.replace("col-10", "col-2");
  }

  removeSecondSearch(containerIngredient);
  removeSecondSearch(containerAppareil);
  removeSecondSearch(containerUstensil);
}
