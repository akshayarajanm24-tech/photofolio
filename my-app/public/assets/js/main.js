
/**
 * PhotoFolio - Next.js compatible main.js
 */

(() => {
  "use strict";

  /**
   * Mobile Navbar
   * Controlled by Navbar.jsx
   */

  /**
   * Toggle mobile nav dropdowns
   */
  document.addEventListener("click", function (event) {
    const dropdownLink = event.target.closest(".navbar .dropdown > a");

    if (
      dropdownLink &&
      document.body.classList.contains("mobile-nav-active")
    ) {
      event.preventDefault();

      dropdownLink.classList.toggle("active");

      const submenu = dropdownLink.nextElementSibling;

      if (submenu) {
        submenu.classList.toggle("dropdown-active");
      }

      const indicator = dropdownLink.querySelector(".dropdown-indicator");

      if (indicator) {
        indicator.classList.toggle("bi-chevron-up");
        indicator.classList.toggle("bi-chevron-down");
      }
    }
  });

  /**
   * Scroll top visibility
   * Click functionality is controlled by ScrollTop.jsx
   */
  const toggleScrollTop = () => {
    const scrollTop = document.querySelector(".scroll-top");

    if (!scrollTop) return;

    if (window.scrollY > 100) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  };

  window.addEventListener("scroll", toggleScrollTop);
  window.addEventListener("load", toggleScrollTop);

  /**
   * Initialize GLightbox
   */
  const initializeLightbox = () => {
    if (typeof window.GLightbox !== "undefined") {
      window.GLightbox({
        selector: ".glightbox",
      });
    }
  };

  initializeLightbox();

  /**
   * Initialize Swiper
   */
  const initializeSwiper = () => {
    if (typeof window.Swiper === "undefined") return;

    const swiperElement = document.querySelector(".slides-1");

    if (swiperElement && !swiperElement.swiper) {
      new window.Swiper(swiperElement, {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  };

  initializeSwiper();

})();
