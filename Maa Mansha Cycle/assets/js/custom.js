(function ($) {

  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function () {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function () {
    canvasWrapper.addClass('active');
  });
  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function () {
    canvasWrapper.removeClass('active');
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
    appendTo: '.res-mobile-menu',
    closeOnClick: true,
    removeClasses: true,
    closedSymbol: '<i class="fa fa-angle-down"></i>',
    openedSymbol: '<i class="fa fa-angle-up"></i>'
  });


  // Swipper JS

  // Home Two Slider
  var swiper = new Swiper('.home-slider-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
      delay: 4000,
    },
    fadeEffect: {
      crossFade: true,
    },
  });

  // Gallery Trends Slider
  var swiper = new Swiper('.product-category1-slider-container', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      1500: {
        slidesPerView: 3
      },

      992: {
        slidesPerView: 3
      },

      768: {
        slidesPerView: 2
      },

      625: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      0: {
        slidesPerView: 1
      }
    }
  });

  // Brand Slider
  var swiper = new Swiper('.brand-logo-slider-container', {
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    spaceBetween: 0,
    autoplay: false,
    breakpoints: {
      1200: {
        slidesPerView: 6
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30

      },

      576: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      380: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      0: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });

  // Swipper JS
  var swiper = new Swiper('.product4-slider-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.product4-slider-container .swiper-button-next',
      prevEl: '.product4-slider-container .swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },

      992: {
        slidesPerView: 3
      },

      768: {
        slidesPerView: 2

      },

      576: {
        slidesPerView: 2
      },

      0: {
        slidesPerView: 1
      }
    }
  });

  var ProductNav = new Swiper('.single-product-nav-slider', {
    spaceBetween: 11,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
      nextEl: '.single-product-nav-slider .swiper-button-next',
      prevEl: '.single-product-nav-slider .swiper-button-prev',
    },
  });

  var ProductThumb = new Swiper('.single-product-thumb-slider', {
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: ProductNav
    }
  });

  // Gallery Trends Slider
  var swiper = new Swiper('.testimonial-slider-container', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      1500: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      620: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      0: {
        slidesPerView: 1
      }
    }
  });

  $('.product-tab1-slider').slick({
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Fancybox Js
  $('.lightbox-image').fancybox();
  // Isotope and data filter
  function isotopePortfolio() {
    var $grid = $('.masonry-grid').isotope({
      itemSelector: '.masonry-item',
      masonry: {
        columnWidth: 1
      }
    })
    // Isotope Masonry
    var $gridMasonry = $('.masonry-style').isotope({
      itemSelector: '.masonry-item'
    })
    // Isotope filter Menu
    $('.portfolio-filter-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $gridMasonry.isotope({ filter: filterValue });
      var filterMenuactive = $(".portfolio-filter-menu button");
      filterMenuactive.removeClass('active');
      $(this).addClass('active');
    });
  }

  // Images Zoom
  $('.zoom-hover').zoom();

  // Countdown JS
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear() + 1;
  var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

  // $('.countdown-timer').countdown({
  //   date: '1/2/2022 23:59:59', // TODO Date format: 07/27/2017 17:00:00
  //   offset: +2, // TODO Your Timezone Offset
  //   day: 'Day',
  //   days: 'Days',
  //   hideOnComplete: true
  // }, function (container) {
  //   alert('Done!');
  // });


  //Tippy Tooltip JS
  tippy('.ht-tooltip', {
    inertia: true,
    animation: 'shift-away',
    arrow: true
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function () {
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if ($('.sticky-header').length) {
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function (e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData
    }).done(function (response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success fade show');

      // Set the message text.
      formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
      formMessages.append(response);

      // Clear the form.
      $('#contact-form input,#contact-form textarea').val('');
    }).fail(function (data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger fade show');

      // Set the message text.
      if (data.responseText === '') {
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  /* ==========================================================================
      When document is loading, do
     ========================================================================== */

  varWindow.on('load', function () {
    isotopePortfolio();
    AOS.init({
      once: true,
    });
    stylePreloader();
  });


})(window.jQuery);