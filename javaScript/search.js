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

function removeCard() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.remove();
    })
}

function searchByName(userInput, datas) {
    datas.forEach((data) => {
        console.log(data.name)
        let inputModify = userInput.toLowerCase()
        if (data.name.toLowerCase().includes(inputModify)) {
            const containerCart = document.querySelector('main');
            return new Card(data).createCard(containerCart)
        }

    })
}

function searchByIngredient(userInput, datas) {
    datas.forEach((data) => {
        if (data.ingredients) {
            data.ingredients.forEach((ingredient) => {
                let inputModify = userInput.toLowerCase()
                if (ingredient["ingredient"].toLowerCase().includes(inputModify)) {
                    console.log(data)
                    const containerCart = document.querySelector('main');
                    new Card(data).createCard(containerCart)
                }
            })
        }

    })
}

function searchByUstensiles(userInput, datas) {
    datas.forEach((data) => {
        if (data.ustensils) {
            let inputModify = userInput.toLowerCase()
            data.ustensils.forEach((ustensil) => {
                console.log(ustensil)
                if (ustensil.toLowerCase().includes(inputModify)) {
                    const containerCart = document.querySelector('main');
                    new Card(data).createCard(containerCart)
                }
            })
        }

    })
}

function searchByAppliance(userInput, datas) {
    datas.forEach((data) => {
        let userModify = userInput.toLowerCase()
        if (data.appliance.toLowerCase().includes(userModify)) {
            console.log(data)
            const containerCart = document.querySelector('main');
            new Card(data).createCard(containerCart)
        }
    })
}

export function search(userInput, datas) {
    console.log(userInput)

    if (userInput.length >= 3) {
        removeCard()
        searchByName(userInput, datas)
        searchByIngredient(userInput, datas)
        searchByUstensiles(userInput, datas)
        searchByAppliance(userInput, datas)

    } if (userInput.length < 3) {
        const containerCart = document.querySelector('main');
        new Card(datas).createCard(containerCart)
    }
}


