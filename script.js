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
    767: {
      slidesPerView: 4,
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






let teaSwiper = null;

function initTeaSwiper() {
  const swiperContainer = document.querySelector(".sec_5_sub_prd.swiper");

  if (!swiperContainer) return;

  if (window.innerWidth <= 768) {
    if (!teaSwiper) {
      teaSwiper = new Swiper(swiperContainer, {
        loop: false,
        spaceBetween: 24,
        
        breakpoints: {
          0: { 
            slidesPerView: 2,
          },
          375: { 
            slidesPerView: 2,
          },
          500: { 
            slidesPerView: 3,
          },
          768: { 
            slidesPerView: 4,
          },
        }
      });
    }
  } else {
    if (teaSwiper) {
      teaSwiper.destroy(true, true);
      teaSwiper = null;
    }
  }
}

window.addEventListener("load", initTeaSwiper);
window.addEventListener("resize", initTeaSwiper);



$(function () {
  $(".menu_box li > a").click(function (e) {
    e.preventDefault();

    const $parent = $(this).parent("li");
    const $submenu = $(this).siblings("ul");

    if ($submenu.length === 0) return;

    if ($submenu.is(":visible")) {
      // 부드럽게 사라짐
      $submenu.fadeOut(300);
      $parent.removeClass("active");
    } else {
      // 다른 서브메뉴는 부드럽게 닫고
      $(".menu_box li ul:visible").fadeOut(300);
      $(".menu_box li.active").removeClass("active");

      // 클릭한 메뉴만 부드럽게 열림
      $submenu.fadeIn(250);
      $parent.addClass("active");
    }
  });
});

$(function () {

  // 메뉴 열기
  $(".hamburger-button").on("click", function (e) {
    e.preventDefault(); // 화면 위로 튀는 현상 방지
    $(".hammenu").addClass("open");
    $(".menu-overlay").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // 메뉴 닫기 (공통 함수)
  function closeMenu() {
    $(".hammenu").removeClass("open");
    $(".menu-overlay").fadeOut(300);
    $("body").removeClass("no-scroll");

    // 🔥 닫을 때 메뉴 상태 리셋!
    $(".menu_box li ul").hide(); // 펼친 서브메뉴들 숨기기
    $(".menu_box li").removeClass("active"); // active 제거
  }

  // X 버튼 닫기
  $(".close_buttom a").on("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  // 바탕(오버레이) 클릭 → 닫기
  $(".menu-overlay").on("click", function () {
    closeMenu();
  });

});


AOS.init();


