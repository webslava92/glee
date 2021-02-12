$(function () {

  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.product-item__btn').on('click', function () {
    $('.product-item__btn').removeClass('product-item__btn--active');
    $(this).addClass('product-item__btn--active');
  });

  $('.product-item__btn').on('click', function () {
    $('.product-item__controls').removeClass('product-item__controls-visible');
    $('.product-item__controls').addClass('product-item__controls-visible');
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#cccccc",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    min: 0,
    max: 700,
    from: 100,
    to: 500,
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });
  
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