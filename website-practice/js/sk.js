const slides = document.querySelectorAll(".slide");
let currIndex = -1;

function autoSlideNext() {
  setTimeout(autoSlideNext, 3000);
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
  var indicatorInd = currIndicator.getAttribute("index");
  currIndex = indicatorInd - 1;
}
