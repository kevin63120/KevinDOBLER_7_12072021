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
    const createArticle = document.createElement("article");
    const article = rootElement.appendChild(createArticle);
    article.className = " col-12 col-lg-4";

    const ingredients = this.ingredients.map((ingredient) => {
      if (!ingredient.quantity) {
        return `<li class="ingredient">${ingredient.ingredient}</li>`;
      }
      if (!ingredient.unit || ingredient.unit === undefined) {
        return `<li class="ingredient">${ingredient.ingredient} : <span> ${ingredient.quantity} </span></li>`;
      } else {
        return `<li class="ingredient">${ingredient.ingredient} : <span> ${ingredient.quantity} ${ingredient.unit}</span></li>`;
      }
    });

    const descriptionSubString = this.description.substring(0, 180) + "...";
    const card = `
        <div class="card  mt-4 mb-4  overflow-hidden " >
          <div class="card_container-image jumbotron bg-secondary"></div>
          <div class="card-body container">
            <div class="row">
              <div class="card_text-timerContainer container">
                <div class="row">
                  <div class="col-8">
                   <h5 class="card-title">${this.name}</h5>
                 </div>
                  <div class="col-4 p-0 text-center">
                   <img
                      src="./pictures/clock.svg"
                      width="22px"
                      height="22px"
                      class="m-r-1"
                      alt=""
                    />
                    <span class="text_timer_timer col-6">${this.time} min</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_text-descriptionContainer row">
              <ul class="card-text list-unstyled col-6">
                ${ingredients.join("")}
              </ul>
              <p class="card-text  col">
                ${descriptionSubString}
              </p>
            </div>
          </div>
        </div>
        
      `;
    article.innerHTML = card;
  }
}
