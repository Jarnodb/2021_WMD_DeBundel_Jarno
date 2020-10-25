"use strict";

/*
  Getting all items with .controls class
*/
const controls = document.querySelectorAll('.controls');

let slides = document.querySelectorAll('#all_slides .slide');
let currentSlide = 0;

const nextSlide = () => {
  goToSlide(currentSlide + 1);
}

const previousSlide = () => {
  goToSlide(currentSlide - 1);
}

/*
  Interval between images
*/

let slideInterval = setInterval(nextSlide, 3500);

// which slide to move to
const goToSlide = (s) => {
  slides[currentSlide].className = 'slide';

  /* 
     Slide 1 = 0
     Slide 2 = 1
     Slide 3 = 2
     Slide 4 = 3
     currentSlide = 0

     slide.length = 4
     This tells us that the index stops at 3.

     currentSlide = 0 + 4/4 = 1 [new currentSlide]

     now that the currentSlide is 1, when the setInterval runs it:

     currentSlide = 1 + 4/4 = 2 [new currentSlide]

     now that the currentSlide is 2, when the setInterval runs it:

     currentSlide = 2 + 4/4 = 3 [new currentSlide]

     since our index stops at 3. The setInternal starts from the
     beginning again by assigning 0 to currentSlide.
  */
  currentSlide = (s + slides.length) % slides.length;
  // in active we set opacity to 1.
  slides[currentSlide].className = 'slide active';
}


let playing = true;
let pauseButton = document.querySelector("#pause");

const pauseSlideshow = () => {
  pauseButton.innerHTML = '<i class="fas fa-play-circle"></i>';
  playing = false;
  clearInterval(slideInterval);
}

const playSlideshow = () => {
  pauseButton.innerHTML = '<i class="fas fa-pause-circle"></i>';
  playing = true;
  slideInterval = setInterval(nextSlide, 2100);
}

pauseButton.onclick = () => {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

let next_btn = document.querySelector('#next');
let previous_btn = document.querySelector('#previous');

next_btn.onclick = () => {
  nextSlide();
};
previous_btn.onclick = () => {
  /* 
   when the prev button is clicked:
     1. run the pauseSLideshow function, assuming the user would like to observe past image.
     2. run the previousSlide function.
   */
  pauseSlideshow();
  previousSlide();
};