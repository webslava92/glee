$(function(){
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });

  
  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');
  
  var mixer1 = mixitup('.product-week__content', {
    selectors: {
      control: '.filter-1'
    }
  });

  var mixer2 = mixitup('.new-design__items', {
    selectors: {
      control: '.filter-2'
    }
  });


  /* var mixer = mixitup('.product-week__content, .new-design__items'); */

});