// Algo 1

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
  datas.forEach((data) => {
    if (data.appliance.toLowerCase().includes(userInputModify)) {
      new Card(data).createCard(containerCart);
    }
    if (data.ustensils) {
      data.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase().includes(userInputModify)) {
          new Card(data).createCard(containerCart);
        }
      });
    }
    if (data.ingredients) {
      data.ingredients.forEach((ingredient) => {
        if (ingredient["ingredient"].toLowerCase().includes(userInputModify)) {
          new Card(data).createCard(containerCart);
        }
      });
    }
    if (data.name.toLowerCase().includes(userInputModify)) {
      return new Card(data).createCard(containerCart);
    }
  });
}

export function search(userInput, datas) {
  if (userInput.length >= 3) {
    removeCard();
    searchByReference(userInput, datas);
  }
  if (userInput.length < 3) {
    datas.forEach((data) => {
      const containerCart = document.querySelector("main");
      new Card(data).createCard(containerCart);
    });
  }
}
