import "../assets/data/recipes" 
import { recipes } from "../assets/data/recipes"
import {Card} from"./class/card"
import {search} from "./search"
  console.log(recipes)
const containerCart = document.querySelector('main');
const input = document.querySelector('.header_searchbar_mainSearch');
/*input.addEventListener((e)=>{
   const currentInput  = e.target.value ;
   console.log(currentInput)
})*/


// algo 1

/*test l'input utilisateur */
  /* 
  1. test le titre de la recette pour verifier une corespondence
  2. test les ustensiles
  3. test les appareil 
  */  

  async function displayCardBase(){
     await recipes.forEach((recipe) =>{
       new Card(recipe).createACard(containerCart)
      })
      const input = document.querySelector('.header_searchbar_mainSearch');
      input.addEventListener('keyup',(e)=>{
      const curentInput = e.target.value
      search(curentInput, recipes);
   })

     

  }

displayCardBase()








 