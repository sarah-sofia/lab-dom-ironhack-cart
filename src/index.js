

// src/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  var removeCartItemButtons = document.getElementsByClassName('btn-remove');
  for(const buttonRmv of removeCartItemButtons) {
    buttonRmv.addEventListener('click', removeLine);
  }
});




// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').valueAsNumber;

  const priceResult = price * quantity;
  let subtotalSpanDom = product.querySelector('.subtotal span');
  
  subtotalSpanDom.textContent = priceResult;
  return priceResult;
}

function calculateAll() {
  const productList = document.getElementsByClassName('product');
  let total = 0;
  for(const singleProduct of productList) {
    total = total + updateSubtotal(singleProduct)
  }
  document.querySelector('#total-value span').textContent = total
}

// ITERATION 4

function removeLine(event){
  var buttonClick = event.target
  buttonClick.parentElement.parentElement.remove()
}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});