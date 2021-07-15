export class Card {
  constructor(recipe) {
    this.appliance = recipe.appliance;
    this.description = recipe.description;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.name = recipe.name;
    this.servings = recipe.servings;
    this.time = recipe.time;
    this.ustensils = recipe.ustensils;
  }

  createCard(rootElement) {
    const createArticle = document.createElement('article');
    const article = rootElement.appendChild(createArticle);

    const ingredients = this.ingredients.map((ingredient) => {
      if (!ingredient.quantity) {
        return `<li class="ingredient">${ingredient.ingredient}</li>`
      }
      if (!ingredient.unit || ingredient.unit === undefined) {
        return `<li class="ingredient">${ingredient.ingredient} : <span> ${ingredient.quantity} </span></li>`
      } else {
        return `<li class="ingredient">${ingredient.ingredient} : <span> ${ingredient.quantity} ${ingredient.unit}</span></li>`
      }

    })
    const card = `
        <div class="card mr-4 mt-4 mb-4 ml-3 overflow-hidden "  style="width: 31rem; height: 25rem; ">
          <div class="card_container-image jumbotron bg-secondary"></div>
          <div class="card-body container">
            <div class="row">
              <div class="card_text-timerContainer container">
                <div class="row">
                  <div class="col-6">
                   <h5 class="card-title">${this.name}</h5>
                 </div>
                  <div class="col-6 text-right">
                   <img
                      src="./pictures/clock.svg"
                      width="22px"
                      height="22px"
                      alt=""
                    />
                    <span class="text_timer_timer col-8">${this.time} min</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_text-descriptionContainer row">
              <ul class="card-text list-unstyled col-6">
                ${ingredients.join("")}
              </ul>
              <p class="card-text  col">
                ${this.description}
              </p>
            </div>
          </div>
        </div>
        
      `
    article.innerHTML = (card)
  }

  createSecondarySearchList(rootElement) {
    const containerListSecondarySearch = rootElement;

    const itemSecondarySearch = this.ingredients.map((ingredient) => {
      return `<li>${ingredient.ingredient}</li>`
    })
    console.log(itemSecondarySearch)
    //containerListSecondarySearch.innerHTML=(itemSecondarySearch.join(""))


  }


}

