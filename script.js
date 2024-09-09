

!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);




const btnModal = document.querySelectorAll('.product__detail');
const contentModal = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.modal-btn__close');

    btnModal.forEach(function(item){
    item.addEventListener('click', function(){
        let currenBtn = item;
        let tabId = currenBtn.getAttribute('data-tab');
        let currenTab = document.querySelector(tabId);

        currenTab.classList.add('visible');

         });

})

closeModal.forEach(function(item){
    item.addEventListener('click', function(e) {
       let parentModal = this.closest('.modal');
       parentModal.classList.remove('visible');
       
    });
 });




window.addEventListener('click', function(event){
   
    let counter;

if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
     
     const counterWraper = event.target.closest('.order__product-count')
     
    counter = counterWraper.querySelector('[data-counter]') 
}

 
    if (event.target.dataset.action === 'plus'){
       counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus'){

    
      if(event.target.closest('.order__list') && parseInt(counter.innerText) === 1){
   
    event.target.closest('.order__item').remove();
    }


       if(parseInt(counter.innerText) > 1) {         
        counter.innerText = --counter.innerText;
    } else if(event.target.closest('.order__list') && parseInt(counter.innerText) === 1){
        
        event.target.closest('.order__item').remove();

       

    }
    toggleCardStatus();
    
    calcCardPrise();
    }

   
    if(event.target.hasAttribute('data-action') && event.target.closest('.order--wrapper')){
      calcCardPrise();

    }
})





const cardWrapper = document.querySelector('.order__list');


window.addEventListener('click', function(event){
   
if(event.target.hasAttribute('data-card')){
   
    const card = event.target.closest('.product');
    
    
const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product__img').getAttribute('src'),
    title: card.querySelector('.product__detail').innerText,
    prise: card.querySelector('.product__prise').innerText,
    weight: card.querySelector('.product__weight').innerText,
    counter: card.querySelector('[data-counter]').innerText,
    
}


const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`)

if(itemInCard){
   const counterElement = itemInCard.querySelector('[data-counter]');
   counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
}else{
 

const cardItemHTML = `<li class="order__item" data-id="${productInfo.id}">
                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                    <div class="order__product">
                                        <h3 class="order__product-title">${productInfo.title}</h3>
                                        <p class="order__product-weight">${productInfo.weight} <span class="weight-gram"></span></p>
                                        <p class="order__product-price">
                                            <span class="order__product-price-elem">${productInfo.prise} </span>
                                            <span class="currency"></span>
                                        </p>
                                    </div>
                                    <div class="order__product-count">
                                        <button class="count__minus" data-action="minus">-</button>
                                        <p class="count__amount" data-counter>${productInfo.counter}</p>
                                        <button class="count__plus" data-action="plus">+</button>
                                    </div>
                                </li>`;

cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);

}

card.querySelector('[data-counter]').innerText = '1';

toggleCardStatus();

calcCardPrise();

}
})



function toggleCardStatus(){
    const cardWrapper = document.querySelector('.order__list');
    const cardEmptyBadge = document.querySelector('.alert');
  
const checkout = document.querySelector('#checkout')

  if (cardWrapper.children.length > 0){
        cardEmptyBadge.classList.add('none')
        checkout.classList.remove('none')
    }
    else {
        cardEmptyBadge.classList.remove('none')
        checkout.classList.add('none')
    }
   
}






const modalBtnForm = document.getElementById('modal-form')
const modalForm = document.getElementById('order-form')


modalBtnForm.addEventListener('click', function(){
    modalForm.classList.add('visible')
});


const openBasket = document.querySelector('.order__title');
const basket = document.querySelector('.catalog__order');
const closeBasket = document.querySelector('.order__close');

openBasket.addEventListener('click', function(){
  basket.classList.add('order_open')
})
closeBasket.addEventListener('click', function(){
  basket.classList.remove('order_open')
})



function calcCardPrise(){
  const cardItems = document.querySelector('.order__list');
  const priceEl = cardItems.querySelectorAll('.order__product-price-elem');
  const priceTogether = document.querySelector('.order__total-amount');
  const countsEl = cardItems.querySelectorAll('[data-counter]');
  const countTogether = document.querySelector('.order__count');

  let totalPrice = 0;
  let totalCount = 0;

  priceEl.forEach(function(item) {
    
    const amountEl = item.closest('.order__item').querySelector('[data-counter]');
    totalPrice +=  parseInt(item.innerText) * parseInt(amountEl.innerText);
    
  })
  countsEl.forEach(function(item) {
    
    const countEl = item.closest('.order__item').querySelector('[data-counter]');
    totalCount = totalCount + parseInt(countEl.innerText);
  
  })

priceTogether.innerText = totalPrice;
countTogether.innerText = totalCount

const deliveryCost = document.querySelector('.order__apeal');


if(totalPrice >= 599){
deliveryCost.innerText = 'Безкоштовна доставка'
} else {
  deliveryCost.innerText = 'Доставка 100 грн'
}

}





const btnTab = document.querySelectorAll('.navigation__button');
const contentTab = document.querySelectorAll('.catalog--wrapper');

btnTab.forEach(function(item){
    item.addEventListener('click', function(){
        let currenBtn = item;
        let tabId = currenBtn.getAttribute('data-tab');
        let currenTab = document.querySelector(tabId);

        if(!currenBtn.classList.contains('active')){

            btnTab.forEach(function(item){
                item.classList.remove('active')
            })
            currenBtn.classList.add('active');
    
            contentTab.forEach(function(item){
                item.classList.remove('active')
            })
            currenTab.classList.add('active');
    
        }
    })

})