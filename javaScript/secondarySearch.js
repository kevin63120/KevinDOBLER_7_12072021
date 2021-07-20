import { Card } from "./class/card"
import { recipes } from "../assets/data/recipes"
const containerInput1 = document.querySelector('.header_searchbar-secondarySearchContainer1');
const containerInput2 = document.querySelector('.header_searchbar-secondarySearchContainer2');
const containerInput3 = document.querySelector('.header_searchbar-secondarySearchContainer3');

const inputIngredient = document.querySelector('.search_secondarySearchContainer-secondarySearch1');
const inputApareil = document.querySelector('.search_secondarySearchContainer-secondarySearch2');
const inputUstensile = document.querySelector('.search_secondarySearchContainer-secondarySearch3');

const secondaryList = document.querySelector('.secondarySearch1_suggestions');
const containerIngredient = document.querySelector('.active-ingredient');
const containerAppareil = document.querySelector('.active-appareil')
const containerUstensil = document.querySelector('.active-ustensile')
const li = document.createElement('li');

const arrayIngredients = [];
const arrayUstensiles = [];
const arrayAppareils = [];

recipes.forEach((recipe) => {
    const ingredient = recipe.ingredients.map((elt) => {
        return elt['ingredient'];
    })
    ingredient.forEach(elt => {
        testIngredient(elt)
    })
})

recipes.forEach((recipe) => {
    const appareil = recipe.appliance
    testvalue(appareil, arrayAppareils)
})

recipes.forEach((recipe) => {
    const ustensile = recipe.ustensils.map((elm) => {
        return elm
    });
    testvalue(ustensile, arrayUstensiles)
    
})

recipes.forEach((recipe) => {
    const ingredient = recipe.ingredients.map((elt) => {
        return elt['ingredient'];
    })
    ingredient.forEach(elt => {
        testIngredient(elt)
    })
})


function testIngredient(value) {
    if (!arrayIngredients.includes(value)) {
        arrayIngredients.push(value);
    };

}
function testvalue(value, array) {
    if (!array.includes(value)) {
        array.push(value);
    };

}

const returnIngredient = arrayIngredients.map(ingredient => {
    return `<li class="secondarySearch-item_1 col-4">${ingredient}</li> `
});
const returnAppareils = arrayAppareils.map(appareil => {
    return `<li class="secondarySearch-item_2 col-4">${appareil}</li> `
});
const returnUstensiles = arrayUstensiles.map(ustensile => {
    return `<li class="secondarySearch-item_3 col-4">${ustensile}</li> `
});

function removeSecondSearch(array, rootElement) {
    const elem = array.splice(0, array.length)
    rootElement.innerHTML = (elem)
}

function comparseValue(valueData, valueInput) {
    if (valueData.includes(valueInput)) {
        return containerIngredient.innerHTML = (valueData);
    }
}

inputIngredient.addEventListener("keyup", (e) => {
    comparseValue(arrayIngredients, e.target.value)

})


document.addEventListener("click", (e) => {
    switch (e.target) {
        case inputIngredient:
            containerInput1.classList.replace('col-2', 'col-6');
            containerInput2.classList.replace('col-6', 'col-2');
            containerInput3.classList.replace('col-6', 'col-2')
            containerIngredient.innerHTML = (returnIngredient.join(""));
            removeSecondSearch(arrayAppareils, containerAppareil)
            removeSecondSearch(arrayUstensiles, containerUstensil)
            break
        case inputUstensile:
            console.log(arrayUstensiles)
            containerInput1.classList.replace('col-6', 'col-2');
            containerInput2.classList.replace('col-6', 'col-2');
            containerInput3.classList.replace('col-2', 'col-6')
            containerUstensil.innerHTML = (returnUstensiles.join(""))
            removeSecondSearch(arrayIngredients, containerIngredient)
            removeSecondSearch(arrayAppareils, containerAppareil)
            break;
        case inputApareil:
            console.log('appareil')
            containerInput1.classList.replace('col-6', 'col-2');
            containerInput2.classList.replace('col-2', 'col-6');
            containerInput3.classList.replace('col-6', 'col-2');
            containerAppareil.innerHTML = (returnAppareils.join(""))
            removeSecondSearch(arrayIngredients, containerIngredient)
            removeSecondSearch(arrayUstensiles, containerUstensil)
            break;
        default:
            removeSecondSearch(arrayIngredients, containerIngredient)
            removeSecondSearch(arrayAppareils, containerAppareil)
            removeSecondSearch(arrayUstensiles, containerUstensil)
            containerInput1.classList.replace('col-6', 'col-2');
            containerInput2.classList.replace('col-6', 'col-2');
            containerInput3.classList.replace('col-6', 'col-2');
            break

    }
    if (e.target == inputIngredient) {

    }

})




