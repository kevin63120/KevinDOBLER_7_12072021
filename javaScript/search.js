// Algo 1
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { testvalue } from "./testValueFunction";
import { testValue2 } from "./testValueFunction";
import { warningMessageText } from "./testValueFunction";
import { displayUserSecondarySearchIgrendient } from "./secondarySearch";
import { displayUserSecondarySearchUstensile } from "./secondarySearch";
import { displayUserSecondarySearchAppareils } from "./secondarySearch";
import { activationIngredientSearch } from "./secondarySearch";
import { activationAppareilSearch } from "./secondarySearch";
import { activationUstensileSearch } from "./secondarySearch";
import { resetSearch } from "./secondarySearch";

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

function removeCard() {
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    article.remove("h1");
    article.remove();
  });
}


function searchByReference(
  userInput,
  datas,
  searchSecondaryAppliance = "",
  searchSecondaryUstensils = "",
  searchSecondaryIngredient = ""
) {
  let userInputModify = userInput.toLowerCase();
  const dataDisplayArray = [];

  datas.forEach((data) => {
    const ingredient = data.ingredients.map(
      (ingredient) => ingredient["ingredient"]
    );

    const mainSearchByIngredient = ingredient
      .join(" ")
      .toLowerCase()
      .includes(userInputModify);

    const mainSearchByDescription = data.description
      .toLowerCase()
      .includes(userInputModify);
    const mainSearchByName = data.name.toLowerCase().includes(userInputModify);

    const secondSearchByAppliance = data.appliance
      .toLowerCase()
      .includes(searchSecondaryAppliance);

    const secondSearchByUstensils = data.ustensils
      .join("")
      .toLowerCase()
      .includes(searchSecondaryUstensils);

    const secondSearchByIngredient = ingredient
      .join(" ")
      .toLowerCase()
      .includes(searchSecondaryIngredient);
    if (
      secondSearchByAppliance &&
      secondSearchByIngredient &&
      secondSearchByUstensils &&
      (mainSearchByIngredient || mainSearchByDescription || mainSearchByName)
    ) {
      testvalue(data, dataDisplayArray);
    }
  });

  return dataDisplayArray;
}

export function search(
  userInput,
  datas,
  searchSecondaryAppliance = "",
  searchSecondaryUstensils = "",
  searchSecondaryIngredient = ""
){
  const containerCard = document.querySelector(".card-container");
  const containerWarningMessage = document.querySelector(".warning");
  let arrayReturn;
  removeCard();
  if (userInput.length >= 3) {
    arrayReturn = searchByReference(
      userInput,
      datas,
      searchSecondaryAppliance,
      searchSecondaryUstensils,
      searchSecondaryIngredient
    );

    const objetForSecondarySearch = returnAllCurentElementSecondarySearch(arrayReturn);
    console.log();

    inputIngredient.addEventListener("keyup", (e) =>
      displayUserSecondarySearchIgrendient(
        e,
        objetForSecondarySearch.ingredientsDisponible
      )
    );

    inputApareil.addEventListener("keyup", (e) =>
      displayUserSecondarySearchAppareils(
        e,
        objetForSecondarySearch.appareilsDisponible
      )
    );

    inputUstensile.addEventListener("keyup", (e) =>
      displayUserSecondarySearchUstensile(
        e,
        objetForSecondarySearch.ustensilesDisponible
      )
    );

    document.addEventListener("click", (e) => {
      switch (e.target) {
        case inputIngredient:
          console.log(objetForSecondarySearch.ingredientsDisponible)
          activationIngredientSearch(objetForSecondarySearch.ingredientsDisponible);
          break;
        case inputUstensile:
          console.log(objetForSecondarySearch.ustensilesDisponible)
          activationUstensileSearch(objetForSecondarySearch.ustensilesDisponible);
          break;
        case inputApareil:
          console.log(objetForSecondarySearch.appareilsDisponible)
          activationAppareilSearch(objetForSecondarySearch.appareilsDisponible);
          break;
        default:
          resetSearch();
          break;
      }
    });
  } else {
    arrayReturn = searchByReference(
      "",
      datas,
      searchSecondaryAppliance,
      searchSecondaryUstensils,
      searchSecondaryIngredient
    );
    returnAllCurentElementSecondarySearch(arrayReturn);
  }

  arrayReturn.forEach((elementReturn) => {
    new Card(elementReturn).createCard(containerCard);
  });
  warningMessageText(
    arrayReturn,
    containerWarningMessage,
    'aucune recette corespondante, essayé "coco", "oeuf" '
  );
}

function returnAllCurentElementSecondarySearch(array1) {
  let ingredient1 = array1.map((elm) => elm.ingredients[0].ingredient);
  let appareil1 = array1.map((elm) => elm.appliance);
  let ustensile1 = array1.map((elm) => elm.ustensils);

  let curentElementAvailable = {
    ingredientsDisponible: ingredient1,
    appareilsDisponible: appareil1,
    ustensilesDisponible: ustensile1,
  };
  return curentElementAvailable;
}
