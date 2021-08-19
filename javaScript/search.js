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

function searchByReference(userInput, datas , searchSecondaryAppliance = "" , searchSecondaryUstensils ="" , searchSecondaryIngredient="") {
  let userInputModify = userInput.toLowerCase();
  const containerCart = document.querySelector("main");
  const dataDisplayArray = [];

  datas.forEach((data) => {
   /* if (data.appliance.toLowerCase().includes(userInputModify)) {
      testvalue(data, dataDisplayArray);
    }*/
    if(searchSecondaryAppliance != ""){
      if(data.appliance.toLowerCase().includes(searchSecondaryAppliance)){
        testvalue(data, dataDisplayArray)
      }
      
    }
    if(searchSecondaryIngredient!= ""){
      if(data.ingredient.toLowerCase().includes(searchSecondaryIngredient)){
        testvalue(data, dataDisplayArray)
      } 
    }
    if(searchSecondaryUstensils != ""){
      if(data.searchSecondaryUstensils.toLowerCase().includes(searchSecondaryUstensils)){
        testvalue(data, dataDisplayArray)
      }
    }
    if (data.description.toLowerCase().includes(userInputModify)) {
      testvalue(data, dataDisplayArray);
    }
    /*if (data.ustensils) {
      data.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase().includes(userInputModify)) {
          testvalue(data, dataDisplayArray);
        }
      });
    }*/
    if (data.ingredients) {
      data.ingredients.forEach((ingredient) => {
        if (ingredient["ingredient"].toLowerCase().includes(userInputModify)) {
          testvalue(data, dataDisplayArray);
        }
      });
    }

    if (data.name.toLowerCase().includes(userInputModify)) {
      testvalue(data, dataDisplayArray);
    }
  });
  console.log(dataDisplayArray)
  return dataDisplayArray;
}

export function search(userInput, datas) {
  const containerCard = document.querySelector("main");

  if (userInput.length >= 3) {
    removeCard();

    let arrayReturn = searchByReference(userInput, datas);

    arrayReturn.forEach((elementReturn) => {
      new Card(elementReturn).createCard(containerCard);
    });
    warningMessageText(
      arrayReturn,
      containerCard,
      'aucune recette corespondante, essayé "coco", "oeuf" '
    );
  }
  if (userInput.length < 3) {
    let arrayReturn = [];
    warningMessageText(arrayReturn, containerCard, "");
    datas.forEach((data) => {
      new Card(data).createCard(containerCard);
    });
  }
}
