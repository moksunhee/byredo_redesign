document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var swiper = new Swiper(".sec8-swiper", {
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
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});



let sec5Swiper = null;

function initSec5Swiper() {
  const target = document.querySelector(".sec_5_sub_prd");

  if (!target) return; // 요소 없을 때 에러 방지

  if (window.innerWidth <= 768) {
    if (!sec5Swiper) {
      sec5Swiper = new Swiper(target, {
        slidesPerView: 1.5,
        spaceBetween: 16,
        pagination: {
          el: ".sec_5_sub_prd .swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (sec5Swiper) {
      sec5Swiper.destroy(true, true);
      sec5Swiper = null;
    }
  }
}

initSec5Swiper();
window.addEventListener("resize", initSec5Swiper);



AOS.init();


