const slides = document.querySelectorAll(".slide");
let currIndex = -1;
let timeout = null;

function autoSlideNext() {
  timeout = setTimeout(autoSlideNext, 3000);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (currIndex == slides.length - 1) {
    currIndex = 0;
  } else {
    currIndex++;
  }
  slides[currIndex].style.display = "block";
}

autoSlideNext();

function changeSlide(currIndicator) {
  clearTimeout(timeout);
  var indicatorInd = currIndicator.getAttribute("index");
  slides[currIndex].style.display = "none";
  slides[indicatorInd].style.display = "block";
  currIndex = indicatorInd;
  setTimeout(
    autoSlideNext,
    3000
  ); /*how is this giving 3000ms to indicatorInd instead of indicatorInd++ ?*/
}
