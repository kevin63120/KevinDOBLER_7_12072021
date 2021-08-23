// Algo 1

import { Card } from "./class/card";
import { testvalue } from "./testValueFunction";
import { warningMessageText } from "./testValueFunction";

function removeCard() {
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    article.remove("h1");
    article.remove();
  });
}
// fonction qui renverra un tableau contenant les recette comprenant element saisie
const displayUserSecondarySearch = (e, elementsSelected) => {
  let userInput = e.target.value.toLowerCase();
  let modifyArray = [];
  elementsSelected.map((newElement) => {
    if (newElement.toLowerCase().includes(userInput)) {
      modifyArray.push(newElement);
    }
  });
  return console.log(modifyArray);
};

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
    const ingredient = data.ingredients.map((ingredient) => ingredient["ingredient"]);
    const mainSearchByIngredient =  ingredient.join(" ").toLowerCase().includes(userInputModify)
    const mainSearchByDescription = data.description.toLowerCase().includes(userInputModify)
    const mainSearchByName = data.name.toLowerCase().includes(userInputModify)
    const secondSearchByAppliance  = data.appliance.toLowerCase().includes(searchSecondaryAppliance)
    const secondSearchByUstensils = data.ustensils.join("").toLowerCase().includes(searchSecondaryUstensils)
    const secondSearchByIngredient = ingredient.join(" ").toLowerCase().includes(searchSecondaryIngredient)
 
    if (secondSearchByAppliance
      && secondSearchByIngredient
      && secondSearchByUstensils
      &&(mainSearchByIngredient || mainSearchByDescription || mainSearchByName) 
        ) {  
      testvalue(data, dataDisplayArray);
    }

  });
  console.log(dataDisplayArray);
  return dataDisplayArray;
}

export function search(userInput,datas, searchSecondaryAppliance = "",  searchSecondaryUstensils = "", searchSecondaryIngredient = "") {
  const containerCard = document.querySelector("main");
  let arrayReturn;

  removeCard();
  if (userInput.length >= 3) {
    arrayReturn = searchByReference(userInput, datas, searchSecondaryAppliance, searchSecondaryUstensils,searchSecondaryIngredient );
  }
  else{
    arrayReturn = searchByReference('',datas,searchSecondaryAppliance,searchSecondaryUstensils,searchSecondaryIngredient); 
  }

 arrayReturn.forEach((elementReturn) => {
      new Card(elementReturn).createCard(containerCard);
    });
    warningMessageText(
      arrayReturn,
      containerCard,
      'aucune recette corespondante, essayé "coco", "oeuf" '
    );
}
