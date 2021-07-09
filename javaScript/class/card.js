export class Card {
    constructor(id , name, serving, [ingredients] ){
        this.id = id;
        this.name = name;
        this.serving =serving;
        this.time = time;
        this.description = description;
        this.ingredients = [ingredients];
    }
    
    

    createACard(){
        const ingredient = ingredients.forEach(ingredient =>{
            `<li>${ingredient}</li>`
        })
        const cart = `
            <article>
                <div class="cart_container-image jumbotron">
                </div>
                <div class="cart_container-text">
                <header>
                    <div class="cart_text-timerContainer row">
                        <div class="col-6" >
                            <h2 class="cart_text-title ">${this.name}</h2>
                        </div>
                        <div class="col-6 row">
                            <i class="far fa-clock  col"></i>
                            <p class="text_timer_timer  col-8">${this.time}</p>
                        </div>
                     
                    </div>
                </header>
                <div class="cart_text-descriptionContainer row">
                        <ul class="cart_text-ingredient col-6 ">
                          ${ingredient}
                        </ul>
                        <p class="cart_text-description col ">${this.description}</p>
                    </div>
                </div>
            </article>`
        const containerCart = document.querySelector('main');
        containerCart.innerHTML = cart;    
    }

    
}

