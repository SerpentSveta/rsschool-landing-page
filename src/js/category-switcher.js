import products from '../data/products.json';
import { createCard } from './cards.js';

const cardsWrapper = document.querySelector('.cards__wrapper');
const coffeeButtons = document.querySelector('.coffee__button-wrapper');
const productSwitch = document.querySelectorAll('.product-switch');

let selectedCat = 'coffee';

const filterCards = (selectedCat) => {
  return products.filter((item) => item.category === selectedCat);
};

const renderCards = (cards) => {
  if (!cardsWrapper) return;
  cardsWrapper.textContent = ' ';
  cards.forEach((product) => {
    const card = createCard(product);
    cardsWrapper.append(card);
  });
};

renderCards(filterCards(selectedCat));

if (coffeeButtons) {
  coffeeButtons.addEventListener('click', function (event) {
    const selectedTab = event.target.closest('.product-switch');
    if (selectedTab) {
      productSwitch.forEach((tab) => {
        tab.classList.remove('product-switch--active');
      });
      selectedTab.classList.add('product-switch--active');
      selectedCat = selectedTab.dataset.category;
      renderCards(filterCards(selectedCat));
    }
  });
}
