// Algo 2

import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";

function removeCard() {
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    article.remove("h1");
    article.remove();
  });
}

function searchByReference(userInput, datas) {
  let userInputModify = userInput.toLowerCase();
  const containerCart = document.querySelector("main");
 datas.filter((data) => {
    if (data.appliance.toLowerCase().includes(userInputModify)) {
     return data 
    }
    if (data.ustensils) {
      data.ustensils.filter((ustensil) => {
        if (ustensil.toLowerCase().includes(userInputModify)) { 
          return data       
        }
      });
    }
    if (data.ingredients) {
      data.ingredients.filter((ingredient) => {
        if (ingredient["ingredient"].toLowerCase().includes(userInputModify)) {     
          return ingredient  
        }
      });
    }
    if (data.name.toLowerCase().includes(userInputModify)) {
      return data.name
    }
  });
}

function displayCard (data , container){
  new Card(data).createCard(container)
}

export function search(userInput, datas) {
  if (userInput.length >= 3) {
    const containerCart = document.querySelector("main");
    removeCard();
    displayCard(searchByReference(userInput, datas),containerCart)
    
  }
  if (userInput.length < 3) {
    datas.forEach((data) => {
      const containerCart = document.querySelector("main");
      displayCard(data,containerCart)
    });
  }
}
