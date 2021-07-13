// Algo 1 

import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";

/*
La fonction de recherche prend en entré une recherche utilisateur grace a une saisie dans un champ de recherche
La function recupère la saisie 
elle lis les information 
et elle cherche une correspondance
si elle en trouve elle renvoi les données
*/





function displayCard(datas) {
    const containerCart = document.querySelector('main');
   
    
}

function removeCard() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.remove();
    })
}

function searchByName(userInput, datas) {
    datas.forEach((data) => {
        if (data.name === userInput) {
            console.log(data)
            const containerCart = document.querySelector('main');
           return new Card(data).create(containerCart)
        }
        if(data.ingredients){
           data.ingredients.forEach((ingredient) => {
            console.log(ingredient)
            if (ingredient.ingredient === userInput) {
                    console.log(data)
                    const containerCart = document.querySelector('main');
                  new Card(data).create(containerCart)
                }
        }) 
        }
    })
}

function searchByIngredient(userInput, datas) {
    datas.forEach((data) => {
        
    })
}


export function search(userInput, datas) {
    console.log(userInput)

    if (userInput.length >= 3) {
        removeCard()
        searchByName(userInput, datas)
        searchByIngredient(userInput, datas)

    } if(userInput.length === 0) {
        const containerCart = document.querySelector('main');
        new Card(datas).create(containerCart)
    }
}