$('.slider-header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  prevArrow: '.slider__controls-prev',
  nextArrow: '.slider__controls-next',
});

$('.slider-wholesalers').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: '.header--wholesalers .slider__controls-prev',
  nextArrow: '.header--wholesalers .slider__controls-next',
});
