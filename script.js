document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navigation-bar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
const gallery = document.getElementById("gallery");
const cards = gallery.children;
const totalCards = cards.length;

// Duplicate logos enough times to allow endless scrolling
gallery.innerHTML = gallery.innerHTML + gallery.innerHTML; // double
gallery.innerHTML += gallery.innerHTML; // quadruple

let currentIndex = 0;

function getCardWidth() {
  const gap = parseInt(getComputedStyle(gallery).gap) || 0;
  return cards[0].offsetWidth + gap;
}

function moveSlide() {
  const cardWidth = getCardWidth();
  currentIndex = currentIndex + 1;
  gallery.style.transition = "transform 0.5s ease-in-out";
  gallery.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

  // Reset transform silently when we’re far into duplicates
  if (currentIndex >= totalCards) {
    setTimeout(() => {
      gallery.style.transition = "none";
      currentIndex = 0;
      gallery.style.transform = `translateX(0px)`;
    }, 500);
  }
}

// Cousins carousel logic
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.cousins-carousel-track');
  const cards = track ? track.querySelectorAll('.cards') : [];
  const nextBtn = document.querySelector('.cousins-nav-btn.next');
  let currentIndex = 0;

  function getCardWidth() {
    if (!cards.length) return 0;
    const style = getComputedStyle(track);
    const gap = parseInt(style.gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  }

  if (nextBtn && cards.length) {
    nextBtn.addEventListener('click', function () {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
      } else {
        currentIndex = 0;
        updateCarousel();
      }
    });
  }

  // Optional: swipe support for mobile
  let startX = null;
  if (track) {
    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', function (e) {
      if (startX === null) return;
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 40) {
        // swipe left
        if (currentIndex < cards.length - 1) {
          currentIndex++;
          updateCarousel();
        } else {
          currentIndex = 0;
          updateCarousel();
        }
      }
      startX = null;
    });
  }
});