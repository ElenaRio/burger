fetchProducts();
const productBurger = document.querySelector('#product-burger');
const productSnack = document.querySelector('#product-snack');
const productHotDog = document.querySelector('#product-hotdog');
const productCombo = document.querySelector('#product-combo');
const productShaverma = document.querySelector('#product-shaverma');
const productPizza = document.querySelector('#product-pizza');
const productBox = document.querySelector('#product-box');
const productDecert = document.querySelector('#product-decert');
const productSous = document.querySelector('#product-sous');



function createProductCard(product) {
    return `<li class="catalog__item">
                                <article class="product" data-id="${product.id}">
                                    <img class="product__img" src="${product.imgSrc}" alt="${product.title}">
                                    <p class="product__prise">${product.prise} <span class="currency">грн</span></p>
                                    <h3 class="product__title">
                                        <button class="product__detail" data-tab="${product.data_tab}">${product.title}</button>
                                    </h3>
                                    <p class="product__weight">${product.weight} <span>г</span></p>
                                    <!-- счетчик -->
                                    <div class="order__product-count order__product-count_catalog">
                                        <button data-action="minus" class="count__minus">-</button>
                                        <p class="count__amount" data-counter>1</p>
                                        <button data-action="plus" class="count__plus">+</button>
                                    </div>
                                    <!-- счетчик -->
                                    <button class="btn btn__plus" type="btn" data-card >Додати</button>
                                </article>
                            </li>`;
}



 async function fetchProducts() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        
        data.burger.forEach(product => {
            productBurger.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.snack.forEach(product => {
            productSnack.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.hotdog.forEach(product => {
            productHotDog.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.combo.forEach(product => {
            productCombo.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.shaverma.forEach(product => {
            productShaverma.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.pizza.forEach(product => {
            productPizza.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.box.forEach(product => {
            productBox.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.decert.forEach(product => {
            productDecert.insertAdjacentHTML('beforeend', createProductCard(product));
        });
        data.sous.forEach(product => {
            productSous.insertAdjacentHTML('beforeend', createProductCard(product));
        });

    } catch (error) {
        console.error('Помилка отримання продуктів:', error);
    }
}


