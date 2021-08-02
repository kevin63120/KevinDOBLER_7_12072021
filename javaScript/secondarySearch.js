import { Card } from "./class/card";
import { recipes } from "../assets/data/recipes";
import { displayTag } from "./tags";
const containerInput1 = document.querySelector(".header_searchbar-secondarySearchContainer1");
const containerInput2 = document.querySelector(".header_searchbar-secondarySearchContainer2");
const containerInput3 = document.querySelector(  ".header_searchbar-secondarySearchContainer3");

const inputIngredient = document.querySelector("#dataListSecondarySearch1");
const inputApareil = document.querySelector("#dataListSecondarySearch2");
const inputUstensile = document.querySelector("#dataListSecondarySearch3");

//list contenant les élément de recherche secondaires
const containerIngredient = document.querySelector(".active-ingredient");
const containerAppareil = document.querySelector(".active-appareil");
const containerUstensil = document.querySelector(".active-ustensile");


// tableau d'element de recherche secondaire 
const arrayIngredients = [];
const arrayUstensiles = [];
const arrayAppareils = [];


// function qui teste si la valeur est contenut dans le tableau et si non l'insert dans le tableau.
function testIngredient(value) {
  if (!arrayIngredients.includes(value)) {
    arrayIngredients.push(value);
  }
}
function testvalue(value, array) {
  if (!array.includes(value)) {
    array.push(value);
  }
}

recipes.forEach((recipe) => {
  const appareil = recipe.appliance;
  testvalue(appareil, arrayAppareils);
});

recipes.forEach((recipe) => {
  const ustensile = recipe.ustensils.forEach((elm) => {
    return elm;
  });
  testvalue(ustensile, arrayUstensiles);
});

recipes.forEach((recipe) => {
  const ingredient = recipe.ingredients.map((elt) => {
    return elt["ingredient"];
  });
  ingredient.forEach((elt) => {
    testIngredient(elt);
  });
});


// crée un nouveau tableau comtenant tout les élémént HTML à renvoyer 
const returnIngredient = arrayIngredients.map((ingredient) => {return `<li class="secondarySearch-item_1 col-4">${ingredient}</li> `;});
const returnAppareils = arrayAppareils.map((appareil) => {return `<li class="secondarySearch-item_2 col-4">${appareil}</li> `;});
const returnUstensiles = arrayUstensiles.map((ustensile) => {return `<li class="secondarySearch-item_3 col-4">${ustensile}</li> `;});

function removeSecondSearch(array, rootElement) {
  const elem = array.splice(0, array.length);
  rootElement.innerHTML = elem;
}

function comparseValue(valueData, valueInput, containerElmReturn) {
  let inputModify = valueInput.toLowerCase();
  if (valueData.includes(inputModify)) {
    console.log(valueData);
    return (containerElmReturn.innerHTML = `<li class="secondarySearch-item_3 col-4">${valueData}</li> `);
  }
}

const inputClick = (e) => {

  let inputIngredient = e.target.value;
  if(!arrayIngredients.includes(inputIngredient)){
     containerIngredient.innerHTML = arrayIngredients.filter((ingredient) => {
    removeSecondSearch(arrayIngredients, containerIngredient);
    return `<li class="secondarySearch-item_1 col-4 ml-2">${ingredient}</li> `;
   
  });
  containerInput1.classList.replace("col-2", "col-6");
  containerInput2.classList.replace("col-6", "col-2");
  containerInput3.classList.replace("col-6", "col-2");
  containerIngredient.innerHTML = returnIngredient.join("");
  removeSecondSearch(arrayAppareils, containerAppareil);
  removeSecondSearch(arrayUstensiles, containerUstensil); 
  }
};

let activationIngredientSearch = (e)=>{
  containerInput1.classList.replace("col-lg-2", "col-lg-6");
      containerInput2.classList.replace("col-lg-6", "col-lg-2");
      containerInput3.classList.replace("col-lg-6", "col-lg-2");
      containerIngredient.innerHTML = returnIngredient.join("");
      removeSecondSearch(arrayAppareils, containerAppareil);
      removeSecondSearch(arrayUstensiles, containerUstensil);
}

let activationUstensileSearch = (e)=>{
  containerInput1.classList.replace("col-lg-6", "col-lg-2");
  containerInput2.classList.replace("col-lg-6", "col-lg-2");
  containerInput3.classList.replace("col-lg-2", "col-lg-6");
  containerUstensil.innerHTML = returnUstensiles.join("");
  removeSecondSearch(arrayIngredients, containerIngredient);
  removeSecondSearch(arrayAppareils, containerAppareil);
}

let activationAppareilSearch =(e)=>{
  containerInput1.classList.replace("col-lg-6", "col-lg-2");
      containerInput2.classList.replace("col-lg-2", "col-lg-6");
      containerInput3.classList.replace("col-lg-6", "col-lg-2");
      containerAppareil.innerHTML = returnAppareils.join("");
      removeSecondSearch(arrayIngredients, containerIngredient);
      removeSecondSearch(arrayUstensiles, containerUstensil);
}

inputIngredient.addEventListener("keyup", inputClick, displayTag);

containerInput1.addEventListener("click", activationIngredientSearch)
containerInput2.addEventListener("click", activationAppareilSearch)
containerInput3.addEventListener("click", activationUstensileSearch)
document.addEventListener("click", (e)=>{
  if(e.eventPhase.target != containerInput1 || e.eventPhase.target != containerInput2 || e.eventPhase.target != containerInput3){
    removeSecondSearch(arrayIngredients, containerIngredient);
      removeSecondSearch(arrayAppareils, containerAppareil);
      removeSecondSearch(arrayUstensiles, containerUstensil);
      containerInput1.classList.replace("col-6", "col-2");
      containerInput2.classList.replace("col-6", "col-2");
      containerInput3.classList.replace("col-6", "col-2");
  }
      
})

/*document.addEventListener("click", (e) => {
  switch (e.target) {
    case inputIngredient:
      containerInput1.classList.replace("col-lg-2", "col-lg-6");
      containerInput2.classList.replace("col-lg-6", "col-lg-2");
      containerInput3.classList.replace("col-lg-6", "col-lg-2");
      containerIngredient.innerHTML = returnIngredient.join("");
      removeSecondSearch(arrayAppareils, containerAppareil);
      removeSecondSearch(arrayUstensiles, containerUstensil);
      break;
    case inputUstensile:
      containerInput1.classList.replace("col-lg-6", "col-lg-2");
      containerInput2.classList.replace("col-lg-6", "col-lg-2");
      containerInput3.classList.replace("col-lg-2", "col-lg-6");
      containerUstensil.innerHTML = returnUstensiles.join("");
      removeSecondSearch(arrayIngredients, containerIngredient);
      removeSecondSearch(arrayAppareils, containerAppareil);
      break;
    case inputApareil:
      containerInput1.classList.replace("col-lg-6", "col-lg-2");
      containerInput2.classList.replace("col-lg-2", "col-lg-6");
      containerInput3.classList.replace("col-lg-6", "col-lg-2");
      containerAppareil.innerHTML = returnAppareils.join("");
      removeSecondSearch(arrayIngredients, containerIngredient);
      removeSecondSearch(arrayUstensiles, containerUstensil);
      break;
    default:
      removeSecondSearch(arrayIngredients, containerIngredient);
      removeSecondSearch(arrayAppareils, containerAppareil);
      removeSecondSearch(arrayUstensiles, containerUstensil);
      containerInput1.classList.replace("col-6", "col-2");
      containerInput2.classList.replace("col-6", "col-2");
      containerInput3.classList.replace("col-6", "col-2");
      break;
  }
});*/
