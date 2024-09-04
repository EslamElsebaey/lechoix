$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  //**************************************************************************************************

  // Products Swiper

  const featuredSwiper = new Swiper(" #featured-content .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: "#featured-content .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#featured-content .swiper-button-next ",
      prevEl: "#featured-content .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const latestSwiper = new Swiper(" #latest-content .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: "#latest-content .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#latest-content .swiper-button-next ",
      prevEl: "#latest-content .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const specialSwiper = new Swiper(" #special-content .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: "#special-content .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#special-content .swiper-button-next ",
      prevEl: "#special-content .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const bestsellerSwiper = new Swiper(" #bestseller-content .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: "#bestseller-content .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#bestseller-content .swiper-button-next ",
      prevEl: "#bestseller-content .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //**************************************************************************************************

  // Testimonials Swiper

  const testimonialSwiper = new Swiper(" .testimonials .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: ".testimonials .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials .swiper-button-next ",
      prevEl: ".testimonials .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  // Blog Swiper

  const blogSwiper = new Swiper(" .blog .swiper", {
    loop: true,
     autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: ".blog .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog .swiper-button-next ",
      prevEl: ".blog .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  // ******************************************************************************************
  // show and hide search 

  $(".open-search").click(function () {
    $(".search").toggleClass("show-search-box");
  });

  $(".close-searh-btn").click(function () {
    $(".search").removeClass("show-search-box");
  });


  // **************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  //**************************************************************************************************

  // open and close sideBar

  $(".bars").click(function () {
    $("nav").addClass("show-site-menu");
    $("body").addClass("overflow-hidden");
  });

    $(".close-btn").click(function () {
      $("nav").removeClass("show-site-menu");
      $("body").removeClass("overflow-hidden");
    });


  //**************************************************************************************************




  //fixed nav

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $(".search").removeClass("show-search-box");
      $("header").addClass("sticky-header");
    } else {
      $("header").removeClass("sticky-header");
    }
  });

  // Footer mobile nav

  $(".footer-item-title").on("click", function () {
    $(this).siblings(".footer-ul-wrapper").slideToggle(300);
    $(this).toggleClass("rotate-arrow");
    $(".footer-item-title")
      .not(this)
      .siblings(".footer-ul-wrapper")
      .slideUp(300);
    $(".footer-item-title").not(this).removeClass("rotate-arrow");
  });

  // **************************************************************************************************
});
