const slideContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(n) {
  slides.forEach(slide => slide.style.opacity = 0);
  slides[n].style.opacity = 1;
  currentSlide = n;
}

showSlide(currentSlide); // Display the first slide on page load

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 3000); // Change slides every 3 seconds (adjust as needed)
