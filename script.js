document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


  var swiper = new Swiper('.sec8-swiper', {
  // loop: true,
  spaceBetween: 40,
  breakpoints: {
    1920: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 5,
    },
   375: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
  }
});


// var swiper = new Swiper(".sec8-swiper", {
//   slidesPerView: 5,
//   spaceBetween: 40,
//   navigation: {
//     // nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     // hide: true,
//   },
// });

AOS.init();