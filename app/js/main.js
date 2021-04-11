$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.shop__filters-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });

  $('.menu__home-link, .menu__pages-link').on('click', function () {
    $('.menu__home').removeClass('menu__home--active');
    $('.menu__pages').removeClass('menu__pages--active');
  });

  $('.home-btn').on('click', function () {
    $('.menu__home').toggleClass('menu__home--active');
  });

  $('.pages-btn').on('click', function () {
    $('.menu__pages').toggleClass('menu__pages--active');
  });

  $('.relayted__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__content-num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__wrapper').addClass('shop-content__wrapper-nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__wrapper').removeClass('shop-content__wrapper-nogrid');
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