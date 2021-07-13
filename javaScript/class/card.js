export class Card {
    constructor(recipes){
        this.appliance = recipes.appliance;
        this.description = recipes.description;
        this.id = recipes.id;
        this.ingredients = recipes.ingredients;
        this.name = recipes.name;
        this.servings = recipes.servings;
        this.time = recipes.time;
        this.ustensils = recipes.ustensils;        
    }

    createACard(rootElement)
    {
      const createArticle = document.createElement('article');
      const article = rootElement.appendChild(createArticle);

        const ingredients = this.ingredients.map((ingredient) =>{
            return `<li>${ingredient.ingredient}</li>`
        })
        const cart = `
        
        <div class="cart_container-image jumbotron"></div>
        <div class="cart_container-text">
          <header>
            <div class="cart_text-timerContainer row">
              <div class="col-6">
                <h5 class="card-title">${this.name}</h5>
              </div>
              <div class="col-6 row">
                <img
                  src="./pictures/clock.svg"
                  width="22px"
                  height="22px"
                  alt=""
                />
                <p class="text_timer_timer col-8">${this.time} min</p>
              </div>
            </div>
          </header>
          <div class="cart_text-descriptionContainer row">
            <ul class="cart_text-ingredient list-unstyled col-6">
              ${ingredients.join("")}
            </ul>
            <p class="card-text col">
              ${this.description}
            </p>
          </div>
        </div>
      `
        
        article.innerHTML = (cart)
    }

   

    
}

