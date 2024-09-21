const slider = document.querySelector('.elements-review');
const slides = Array.from(slider.querySelectorAll('.element-review'));
const slideCount = slides.length;
let slideIndex = 0;

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } 
    else {
      slide.style.display = 'none';
    }});
}

updateSlider();