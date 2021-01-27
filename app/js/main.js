$(function(){
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });

  $('[data-fancybox]').fancybox({
    protect: true
  });

  var mixer = mixitup('.product-week__content');
  
/* 
  $('.product-week__btn').on('click', function () {
    $('.product-week__btn').toggleClass('product-week__btn--active');
  }) */

});