const sliderImages = document.querySelector('.slider__images');
const sliderSlide = document.querySelectorAll('.slider__slide');
const sliderArrowRight = document.querySelector('.slider__arrow_right');
const sliderArrowLeft = document.querySelector('.slider__arrow_left');
const sliderControl = document.querySelectorAll('.slider__control');
const sliderInfo = document.querySelector('.slider__info-wrapper');

let current = 0;

const moveSlide = () => {
  sliderImages.style.transform = `translateX(-${current * 100}%)`;
  sliderInfo.style.transform = `translateX(-${current * 100}%)`;
};

const updateControl = () => {
  sliderControl.forEach((control, index) => {
    control.classList.remove('slider__control_active');
    if (index === current) {
      control.classList.add('slider__control_active');
    }
  });
};

const updateStateSlider = () => {
  moveSlide();
  updateControl();
};

sliderArrowRight.addEventListener('click', function () {
  current++;
  if (current == sliderSlide.length) {
    current = 0;
  }
  updateStateSlider();
});

sliderArrowLeft.addEventListener('click', function () {
  if (current == 0) {
    current = sliderSlide.length;
  }
  current--;
  updateStateSlider();
});

const handleClickControl = () => {
  sliderControl.forEach((control, index) => {
    control.addEventListener('click', function () {
      current = index;
      updateStateSlider();
    });
  });
};

handleClickControl();
