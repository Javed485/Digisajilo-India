
// back to top - start
// --------------------------------------------------
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.backtotop:hidden').stop(true, true).fadeIn();
  } else {
    $('.backtotop').stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").on('click', function () {
    $("html,body").animate({
      scrollTop: $("#thetop").offset().top
    }, "slow");
    return false
  })
});

// preloader - start
// --------------------------------------------------
// $(window).on('load', function(){
//   $('#preloader').fadeOut('slow',function(){$(this).remove();});
// });

// Slice Slider Clicable  - start
// --------------------------------------------------
$(document).ready(function () {
  $('#popular_venue_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Slice Slider Popular Search  - start
// --------------------------------------------------
$(document).ready(function () {
  $('#popular_search_slider').slick({
    infinite: false,
    slidesToShow: 4.6,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Venue Accordion  - start
// --------------------------------------------------
// Without self clicking close
// $(".wedding_box").click(function(){
//   $(".padding_adjust").removeClass("active");
//   $(this).parent().addClass("active");  
// });

// self clicking close
$(document).ready(function () {
  $('.wedding_box').click(function () {
    if ($(this).next(".accordion_box").hasClass('active')) {
      $(this).next(".accordion_box").removeClass('active').slideUp();
    } else {
      $(".padding_adjust .accordion_box").removeClass('active').slideUp();
      $(this).next(".accordion_box").addClass('active').slideDown();
    }
  });
});


// Slice Slider Real Wedding  - start
// --------------------------------------------------
$(document).ready(function () {
  $('#real_wedding_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.92,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.95,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 0.99,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Slice Slider Gallery - start
// --------------------------------------------------
$(document).ready(function () {
  $('#gallery_slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.80,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.80,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.80,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Slice Slider Featured Vendors  - start
// --------------------------------------------------
$(document).ready(function () {
  $('#featured_slider').slick({
    infinite: false,
    slidesToShow: 3.50,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.50,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.50,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Slice Slider Blog  - start
// --------------------------------------------------
$(document).ready(function () {
  $('#blog_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.92,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.85,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 0.97,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Catelogue Section
// --------------------------------------------------
function showPricebox() {
  let price = document.getElementById('price_box');
  if (price.style.display === "none") {
    price.style.display = "block";
  } else {
    price.style.display = "none";
  }
}

// Catelogue Form
// --------------------------------------------------
let sendBox = document.getElementById('send-form');
sendBox.style.display = 'none';

let viewBox = document.getElementById('view-form');
viewBox.style.display = 'none';

$(document).ready(function () {
  $("#show_send_form").click(function () {
    sendBox.style.display = 'block';
    viewBox.style.display = 'none';
  });
  $("#show_view_form").click(function () {
    viewBox.style.display = 'block';
    sendBox.style.display = 'none';
  });
});


// Catelogue Mini Navbar Slider
// --------------------------------------------------
let portfolioBox = document.getElementById('portfolio');
let albumBox = document.getElementById('albumBox');
albumBox.style.display = 'none';

let albumVideo = document.getElementById('albumVideo');
albumVideo.style.display = 'none';

$(document).ready(function () {
  $("#ProjectsBtn").click(function () {
    portfolioBox.style.display = 'block';
    albumBox.style.display = 'none';
    albumVideo.style.display = 'none';
  });
  $("#albumsBtn").click(function () {
    portfolioBox.style.display = 'none';
    lbumVideo.style.display = 'none';
    albumBox.style.display = 'block';
  });
  $("#vidersBtn").click(function () {
    portfolioBox.style.display = 'none';
    albumBox.style.display = 'none';
    albumVideo.style.display = 'block';
  });
});









