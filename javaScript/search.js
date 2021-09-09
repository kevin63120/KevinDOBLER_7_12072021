// Algo 1
import { recipes } from "../assets/data/recipes";
import { Card } from "./class/card";
import { Data } from "./class/data"
import { testvalue } from "./testValueFunction";
import { warningMessageText } from "./testValueFunction";
import { containerIngredient, displayUserSecondarySearchIgrendient } from "./secondarySearch";
import { displayUserSecondarySearchUstensile } from "./secondarySearch";
import { displayUserSecondarySearchAppareils } from "./secondarySearch";
import { activationIngredientSearch } from "./secondarySearch";
import { activationAppareilSearch } from "./secondarySearch";
import { activationUstensileSearch } from "./secondarySearch";
import { resetSearch } from "./secondarySearch";
import { objetForSecondarySearch } from "./secondarySearch"
import { returnAllCurentElementSecondarySearch } from "./secondarySearch"


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

inputIngredient.addEventListener("click", () =>{
  new Data(recipes).displayHtmlListIngedient()
}
);
inputApareil.addEventListener("click", () =>
{
  new Data(recipes).displayHtmlListAppliance()
}
);

inputUstensile.addEventListener("click", () =>{
 new Data(recipes).displayHtmlListUstensile()
}
);

function removeCard() {
  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    article.remove("h1");
    article.remove();
  });
}



function searchByReference(
  userInput=null,
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
     dataDisplayArray.push(data)
     new Data().displayHtmlListIngedient(ingredient)
  
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
    
      inputIngredient.addEventListener("click", (e) =>{
     //   new Data().displayHtmlListIngedient(objetForSecondarySearch.ingredientsDisponible)
      }
     // displayUserSecondarySearchIgrendient( e,objetForSecondarySearch.ingredientsDisponible)
    );

    inputApareil.addEventListener("click", (e) =>
      {/*new Data().displayHtmlListAppliance(objetForSecondarySearch.appareilsDisponible)*/}
      //displayUserSecondarySearchAppareils( e,objetForSecondarySearch.appareilsDisponible)
    );

    inputUstensile.addEventListener("click", (e) =>{}
     // displayUserSecondarySearchUstensile(e, objetForSecondarySearch.ustensilesDisponible)
    );

    inputIngredient.addEventListener("keyup", (e) =>{displayUserSecondarySearchIgrendient(e, objetForSecondarySearch.ingredientsDisponible)}
      
    );

    inputApareil.addEventListener("keyup", (e) =>{displayUserSecondarySearchAppareils(e, objetForSecondarySearch.appareilsDisponible)}
      
    );

    inputUstensile.addEventListener("keyup", (e) =>{displayUserSecondarySearchUstensile(e, objetForSecondarySearch.ustensilesDisponible)}
      
    );

    
  } else {


    arrayReturn = searchByReference(
      "",
      datas,
      searchSecondaryAppliance,
      searchSecondaryUstensils,
      searchSecondaryIngredient
    );
    
  }


  const objetForSecondarySearch = returnAllCurentElementSecondarySearch(arrayReturn);
  console.log(objetForSecondarySearch)
  



  inputIngredient.addEventListener("keyup", (e) =>{displayUserSecondarySearchIgrendient(e, objetForSecondarySearch.ingredientsDisponible)}
    
  );

  inputApareil.addEventListener("keyup", (e) =>{displayUserSecondarySearchAppareils(e, objetForSecondarySearch.appareilsDisponible)}
    
  );

  inputUstensile.addEventListener("keyup", (e) =>{displayUserSecondarySearchUstensile(e, objetForSecondarySearch.ustensilesDisponible)}
    
  );


  arrayReturn.forEach((elementReturn) => {
    new Card(elementReturn).createCard(containerCard);
  });
  warningMessageText(
    arrayReturn,
    containerWarningMessage,
    'aucune recette corespondante, essayé "coco", "oeuf" '
  );

  
}

