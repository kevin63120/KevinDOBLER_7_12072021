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





async function displayCard(datas){
    const containerCart = document.querySelector('main');
    await datas
    new Card().createACard(containerCart)
}

function removeCard(){
    const articles = document.querySelectorAll('article');
    articles.forEach( article =>{
            article.remove();
    })
}


export  function search (userInput , datas){
    console.log(userInput)
   
    if(userInput.length >= 3){
       datas.forEach((data)=>{
         if(data.name === userInput){
             console.log(data)
             const containerCart = document.querySelector('main');
            new Card(data).createACard(containerCart) 
         }
       })
       
    }else{
        removeCard()
    }
}