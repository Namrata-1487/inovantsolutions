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

// restaurant list 
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById("cards");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const cards = document.querySelectorAll(".restaurant-card");

  let currentIndex = 0;

  // Calculate visible cards based on screen size
  function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4; // default for desktop
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Enable/Disable buttons when needed
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - getVisibleCards();
  }

  // Next Button → Move 1 Card Forward
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - getVisibleCards()) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Prev Button → Move 1 Card Backward
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Update slider on window resize
  window.addEventListener("resize", updateCarousel);

  // Initialize carousel on load
  updateCarousel();

});


//  restaurant list 2
document.addEventListener('DOMContentLoaded', function () {
  const carousel2 = document.getElementById("cards-2");
  const prevBtn2 = document.getElementById("prev-2");
  const nextBtn2 = document.getElementById("next-2");
  const cards2 = document.querySelectorAll("#cards-2 .restaurant-card-img");

  let currentIndex2 = 0;

  // Calculate visible cards based on screen width
  function getVisibleCards2() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3; // Default: 3 on desktop
  }

  // Update carousel position
  function updateCarousel2() {
    const cardWidth = cards2[0].offsetWidth + 16; // width + gap
    carousel2.style.transform = `translateX(-${currentIndex2 * cardWidth}px)`;

    // Enable/Disable buttons dynamically
    prevBtn2.disabled = currentIndex2 === 0;
    nextBtn2.disabled = currentIndex2 >= cards2.length - getVisibleCards2();
  }

  // Next Button
  nextBtn2.addEventListener("click", () => {
    if (currentIndex2 < cards2.length - getVisibleCards2()) {
      currentIndex2++;
      updateCarousel2();
    }
  });

  // Previous Button
  prevBtn2.addEventListener("click", () => {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateCarousel2();
    }
  });

  // Update on window resize
  window.addEventListener("resize", updateCarousel2);

  // Initialize
  updateCarousel2();

})

// Our Influencers carousel (5 visible at a time)
document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('#our-influencer #cards-influencer');
  if (!cardsContainer) return;
  const cards = cardsContainer.querySelectorAll('.influencer-card');
  const prevBtn = document.getElementById("prev-3");
  const nextBtn = document.getElementById("next-3");

  let currentIndex = 0;

  function getCardsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 5;
  }

  function getCardWidth() {
    if (!cards.length) return 0;
    const style = getComputedStyle(cardsContainer);
    const gap = parseInt(style.gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, cards.length - cardsPerView);

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const cardWidth = getCardWidth();
    cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
    prevBtn.classList.toggle('disabled', prevBtn.disabled);
    nextBtn.classList.toggle('disabled', nextBtn.disabled);
  }

  if (prevBtn && nextBtn && cards.length) {
    prevBtn.addEventListener('click', function () {
      currentIndex--;
      updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
      currentIndex++;
      updateCarousel();
    });

    window.addEventListener('resize', function () {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, cards.length - cardsPerView);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateCarousel();
    });

    updateCarousel();
  }
});

// PickedForYou
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById("PickedForYou-cards");
  const prevBtn = document.getElementById("PickedForYou-prev");
  const nextBtn = document.getElementById("PickedForYou-next");
  const cards = document.querySelectorAll("#PickedForYou .restaurant-card");

  let currentIndex = 0;

  // Calculate visible cards based on screen size
  function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4; // default for desktop
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Enable/Disable buttons when needed
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - getVisibleCards();
  }

  // Next Button → Move 1 Card Forward
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - getVisibleCards()) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Prev Button → Move 1 Card Backward
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Update slider on window resize
  window.addEventListener("resize", updateCarousel);

  // Initialize carousel on load
  updateCarousel();

});

// chocolate lover
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById("chocolate-cards");
  const prevBtn = document.getElementById("chocolate-prev-3");
  const nextBtn = document.getElementById("chocolate-next-3");
  const cards = document.querySelectorAll("#chocolate-cards .chocolate-card");

  let currentIndex = 0;

  // Calculate visible cards based on screen size
  function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4; // default for desktop
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Enable/Disable buttons when needed
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - getVisibleCards();
  }

  // Next Button → Move 1 Card Forward
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - getVisibleCards()) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Prev Button → Move 1 Card Backward
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Update slider on window resize
  window.addEventListener("resize", updateCarousel);

  // Initialize carousel on load
  updateCarousel();

});
// DeliciousDeals
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById("DeliciousDeals-cards");
  const prevBtn = document.getElementById("DeliciousDeals-prev");
  const nextBtn = document.getElementById("DeliciousDeals-next");
  const cards = document.querySelectorAll("#DeliciousDeals .restaurant-card");

  let currentIndex = 0;

  // Calculate visible cards based on screen size
  function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4; // default for desktop
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Enable/Disable buttons when needed
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - getVisibleCards();
  }

  // Next Button → Move 1 Card Forward
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - getVisibleCards()) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Prev Button → Move 1 Card Backward
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Update slider on window resize
  window.addEventListener("resize", updateCarousel);

  // Initialize carousel on load
  updateCarousel();

});
