import products from '../data/products.json';

const cardsWrapper = document.querySelector('.cards__wrapper');

const createCard = (product) => {
  const card = document.createElement('article');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.className = 'card__image';
  cardImg.src = `${product.image}`;
  cardImg.alt = `${product.name}`;

  card.append(cardImg);

  const cardDescription = document.createElement('div');
  cardDescription.className = 'card__description';
  card.append(cardDescription);

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card__title';
  cardTitle.textContent = `${product.name}`;

  cardDescription.append(cardTitle);

  const cardText = document.createElement('p');
  cardText.className = 'card__text';
  cardText.textContent = `${product.description}`;

  cardDescription.append(cardText);
  
  const cardPrice = document.createElement('div');
  cardPrice.className = 'card__price';
  cardPrice.textContent = `$${product.price}`;

  cardDescription.append(cardPrice);

  return card;
};

products.forEach((product) => {
  const card = createCard(product);
  cardsWrapper.append(card);
});
