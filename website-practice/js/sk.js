const slides = document.querySelectorAll(".slide");
const progressBars = document.querySelectorAll(".indicator .bar");
const numIcons = document.querySelectorAll(".indicator span");
let currIndex = -1;
let timeout = null;

// document.getElementsByClassName("play-btn")[0].children[0].classList.contains("fa-pause")
// document.getElementsByClassName("play-btn")[0].children[0].classList.replace("fa-pause","fa-play")

function autoSlideNext() {
  timeout = setTimeout(autoSlideNext, 3000);
  autoSlide();
}

function autoSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    progressBars[i].style.display = "none";
    progressBars[i].classList.remove("active");
    numIcons[i].classList.remove("active");
  }
  if (currIndex == slides.length - 1) {
    currIndex = 0;
  } else {
    currIndex++;
  }
  slides[currIndex].style.display = "block";
  progressBars[currIndex].style.display = "block";
  progressBars[currIndex].classList.add("active");
  numIcons[currIndex].classList.add("active");
}

autoSlideNext();

function changeSlide(currIndicator) {
  clearTimeout(timeout);
  var indicatorInd = currIndicator.getAttribute("index");
  // const playBtnClass =
  //   document.getElementsByClassName(".play-btn").children[0].classList;
  slides[currIndex].style.display = "none";
  slides[indicatorInd].style.display = "block";
  currIndex = indicatorInd;
  currIndex--;

  // if (playBtnClass.contains("fa-play")) {
  autoSlide();
  currIndex = currIndex == 0 ? slides.length - 1 : currIndex - 1;
  autoSlideNext();
  // }
  /* this calls the autoSlideNext function AFTER a delay of 3000 milliseconds */
  // timeout = setTimeout(autoSlideNext, 3000);
}

function changePause(playBtn) {
  let iconClassList = playBtn.children[0].classList;
  if (iconClassList.contains("fa-play")) {
    //pause
    iconClassList.replace("fa-play", "fa-pause");
    document.getAnimations().forEach((animation) => {
      animation.pause();
    });
    clearTimeout(timeout);
  } else {
    //play
    console.log(currIndex);
    iconClassList.replace("fa-pause", "fa-play");
    // currIndex = currIndex == 0 ? slides.length - 1 : currIndex - 1;
    // currIndex--;
    autoSlide();
    currIndex = currIndex == 0 ? slides.length - 1 : currIndex - 1;
    autoSlideNext();
  }
}
