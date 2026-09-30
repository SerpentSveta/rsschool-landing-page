const headerBtn = document.querySelector('.header__btn');
const headerNavigation = document.querySelector('.header__navigation');

const setMenuState = function (isOpen) {
  headerNavigation.classList.toggle('header__navigation--open', isOpen);
  headerBtn.classList.toggle('header__btn--open', isOpen);
  document.body.classList.toggle('scroll-block', isOpen);
};

headerBtn.addEventListener('click', function () {
  setMenuState(
    !headerNavigation.classList.contains('header__navigation--open'),
  );
});

headerNavigation.addEventListener('click', function (event) {
  if (event.target.closest('.navigation__link')) {
    setMenuState(false);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

const mediaQuery = window.matchMedia('(min-width: 769px)');

mediaQuery.addEventListener('change', function () {
  if (mediaQuery.matches) {
    setMenuState(false);
  }
});
