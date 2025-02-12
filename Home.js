
//slider


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".dot");
const innerCarousel = document.querySelector(".inner-carousel");
const totalSlides = slides.length;

innerCarousel.style.width = `${totalSlides * 100}%`;

function showSlide(i) {
    if (i >= slides.length) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = i;
    }

    
  innerCarousel.style.transform = `translateX(-${currentSlide * 100}%)`

    indicators.forEach((dot) => dot.classList.remove("active"));
    indicators[currentSlide].classList.add("active");
}


document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function jumpToSlide(i) {
    showSlide(i);
}

setInterval(() => {
    changeSlide(1);
}, 3000); 

//video
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".play-button");
    const videoWrapper = document.querySelector(".video-wrapper");

    playButton.addEventListener("click", function() {
      videoWrapper.innerHTML = `
        <iframe width="100%" height="100%"
          src="https://www.youtube.com/embed/T9TaETg6eI8?si=ygCxnFXpOdQMKTqQ&autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
    });
  });
  
//toggler
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });
    });
  