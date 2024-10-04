const sliderPict = document.querySelector(".picture-section");
const slidesPict = Array.from(sliderPict.querySelectorAll('img'));
const sliderText = document.querySelector(".text-section");
const slidesText = Array.from(sliderText.querySelectorAll('ul'));
const slideCount = slidesText.length;
let slideIndexCenter = 0;
let slideIndetLeft = slideCount-1;
let slideIndexRight = 1;

updateSlider();

function showPreviousSlide() {
  slideIndexCenter = (slideIndexCenter - 1 + slideCount) % slideCount;  
  slideIndetLeft = (slideIndexCenter - 1 + slideCount) % slideCount;
  slideIndexRight = (slideIndexCenter + 1) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndexCenter = (slideIndexCenter + 1) % slideCount;  
  slideIndetLeft = (slideIndexCenter - 1 + slideCount) % slideCount;
  slideIndexRight = (slideIndexCenter + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slidesPict.forEach((slide, index) => {
    
    slide.classList.remove('left-img');
    slide.classList.remove('center-img');
    slide.classList.remove('right-img');

    switch (index){

      case slideIndetLeft:{
        slide.style.display = 'block';
        slide.classList.add('left-img');
        break;
      }
      case slideIndexCenter:{
        slide.style.display = 'block';
        slide.classList.add('center-img');
        break;
      }
      case slideIndexRight:{
        slide.style.display = 'block';
        slide.classList.add('right-img');
        break;
      }
      default:{
        slide.style.display = 'none';
      }

    }
  });
  slidesText.forEach((slide, index) => {

    if (index == slideIndexCenter) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }

  });
}