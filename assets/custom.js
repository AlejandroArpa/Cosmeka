jQuery_T4NT(document).ready(function($) {
  // any code js

  

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const slideTrack = document.querySelector('.slide-track');
  let currentIndex = 0;

  function moveSlides() {
    currentIndex++;
    if (currentIndex >= slides.length / 2) {
      currentIndex = 0;
      slideTrack.style.transition = 'none';
      slideTrack.style.transform = 'translateX(0)';
    } else {
      slideTrack.style.transition = 'transform 1s linear';
      slideTrack.style.transform = 'translateX(-${currentIndex * 100}%)';
    }
  }

  setInterval(moveSlides, 3000);
});




});