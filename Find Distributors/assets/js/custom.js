
// back to top - start
// --------------------------------------------------
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.backtotop:hidden').stop(true, true).fadeIn();
  } else {
    $('.backtotop').stop(true, true).fadeOut();
  }
});
$(function() {
  $(".scroll").on('click', function() {
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










