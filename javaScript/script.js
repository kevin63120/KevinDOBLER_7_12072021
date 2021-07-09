import "../assets/data/recipes" 
import { recipes } from "../assets/data/recipes"
import {Card} from"./class/card"
  console.log(recipes)

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
   
recipes.forEach(recipe =>{
  const card = new Card(recipe);
  console.log(card)
})


function testInput(input, data) {
   input.addEventListener('keydown',(e)=>{
      const  userInput = e.target.value; 
      console.log(userInput)
      if(data.name === userInput){
         console.log(data)
      }  
   })
}

recipes.forEach(recipe=>{testInput(input,recipe)})





 