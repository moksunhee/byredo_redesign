  document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


//   var swiper = new Swiper('.sec8-swiper', {
//   loop: true,
//   spaceBetween: 40,
//   breakpoints: {
//     1920: {
//       slidesPerView: 6,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     480: {
//       slidesPerView: 2,
//     },
//     0: {
//       slidesPerView: 1,
//     },
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// });