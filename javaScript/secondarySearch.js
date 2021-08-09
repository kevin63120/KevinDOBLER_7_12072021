import { recipes } from "../assets/data/recipes";
import { testvalue } from "./testValueFunction";


export function initSecondarySearch() {
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

  //list contenant les élément de recherche secondaires
  const containerIngredient = document.querySelector(".active-ingredient");
  const containerAppareil = document.querySelector(".active-appareil");
  const containerUstensil = document.querySelector(".active-ustensile");

  // tableau d'element de recherche secondaire
  const arrayIngredients = [];
  const arrayUstensiles = [];
  const arrayAppareils = [];



  recipes.forEach((recipe) => {
    const appareil = recipe.appliance;
    testvalue(appareil, arrayAppareils);
  });

  recipes.forEach((recipe) => {
   recipe.ustensils.forEach((ustensil)=>{
        testvalue(ustensil, arrayUstensiles); 
    });
  });

  recipes.forEach((recipe) => {
    const ingredient = recipe.ingredients.map((elt) => {
      return elt["ingredient"];
    });
    ingredient.forEach((elt) => {
      testvalue(elt , arrayIngredients)
    });
  });

  // crée un nouveau tableau comtenant tout les élémént HTML à renvoyer
  const returnIngredient = arrayIngredients.map((ingredient) => {
    return `<li class="secondarySearch-item_1 col-4">${ingredient}</li> `;
  });
  const returnAppareils = arrayAppareils.map((appareil) => {
    return `<li class="secondarySearch-item_2 col-4">${appareil}</li> `;
  });
  const returnUstensiles = arrayUstensiles.map((ustensile) => {
    return `<li class="secondarySearch-item_3 col-4">${ustensile}</li> `;
  });

  function removeSecondSearch(rootElement) {
    rootElement.innerHTML = "";
  }

  const checkUserSecondarySearchEntry = (e) => {
    let inputIngredient = e.target.value; 
    console.log(arrayIngredients)
    if (arrayIngredients.includes(inputIngredient)) {
        removeSecondSearch( containerIngredient);
        console.log('e')
        containerIngredient.innerHTML = returnIngredient
       //containerInput1.classList.replace("col-2", "col-6");
       //containerInput2.classList.replace("col-6", "col-2");
       //containerInput3.classList.replace("col-6", "col-2");
       //containerIngredient.innerHTML = returnIngredient.join("");
       //removeSecondSearch(containerAppareil);
       //removeSecondSearch(containerUstensil);
    }
  };

  let activationIngredientSearch = () => {
    containerInput1.classList.replace("col-lg-2", "col-lg-6");
    containerInput2.classList.replace("col-lg-6", "col-lg-2");
    containerInput3.classList.replace("col-lg-6", "col-lg-2");
    containerIngredient.innerHTML = returnIngredient.join("");
    removeSecondSearch( containerAppareil);
    removeSecondSearch( containerUstensil);
  };

  let activationUstensileSearch = () => {
    containerInput1.classList.replace("col-lg-6", "col-lg-2");
    containerInput2.classList.replace("col-lg-6", "col-lg-2");
    containerInput3.classList.replace("col-lg-2", "col-lg-6");
    containerUstensil.innerHTML = returnUstensiles.join("");
    removeSecondSearch( containerIngredient);
    removeSecondSearch( containerAppareil);
  };

  let activationAppareilSearch = () => {
    containerInput1.classList.replace("col-lg-6", "col-lg-2");
    containerInput2.classList.replace("col-lg-2", "col-lg-6");
    containerInput3.classList.replace("col-lg-6", "col-lg-2");
    containerAppareil.innerHTML = returnAppareils.join("");
    removeSecondSearch(containerIngredient);
    removeSecondSearch(containerUstensil);
  };

  function resetSearch() {
     if( containerInput1.classList === "col-6" ||containerInput3.classList === "col-6" ||containerInput3.classList === "col-6"){
        containerInput1.classList.replace("col-6", "col-2");
        containerInput2.classList.replace("col-6", "col-2");
        containerInput3.classList.replace("col-6", "col-2");
     }if (containerInput1.classList === "col-10" ||containerInput3.classList === "col-10" ||containerInput3.classList === "col-10") {
        containerInput1.classList.replace("col-10", "col-2");
        containerInput2.classList.replace("col-10", "col-2");
        containerInput3.classList.replace("col-10", "col-2");
     }
    
    removeSecondSearch(containerIngredient);
    removeSecondSearch(containerAppareil);
    removeSecondSearch(containerUstensil);
    
  }

  inputIngredient.addEventListener("keyup", checkUserSecondarySearchEntry);

  document.addEventListener("click", (e) => {
    switch (e.target) {
      case inputIngredient:
        activationIngredientSearch();
        break;
      case inputUstensile:
        activationUstensileSearch();
        break;
      case inputApareil:
        activationAppareilSearch();
        break;
      default:
        resetSearch();
        break;
    }
  });

 
}
