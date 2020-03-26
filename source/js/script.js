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

var htmlItem = document.querySelector('html');
var deviceWidth = window.innerWidth;
var desktopWidth = 1300;
var mobileWidth = 320;

// Get desktop root size
var getDesktopRootSize = function () {
  var rootSize = deviceWidth / desktopWidth;
  return rootSize;
};

// Get mobile root size
var getMobileRootSize = function () {
  var rootSize = deviceWidth / mobileWidth;
  return rootSize;
};

// Set root size
var setRootSize = function (rootFontSize) {
  htmlItem.style.fontSize = rootFontSize + 'px';
}

// Slider destroying
var checkDeviceWidth = function () {
  if (deviceWidth >= 768 && deviceWidth < 1380) {
    setRootSize(getDesktopRootSize() - 0.1);
  } else if (deviceWidth >= 1380) {
    setRootSize(1);
  } else {
    setRootSize(getMobileRootSize());
  }
};

// Start state for document on loading
var onDOMLoading = function () {
  checkDeviceWidth();
};

document.addEventListener('DOMContentLoaded', onDOMLoading);

// Нажатие на превью изображения товара
var imagePreview = document.querySelector('.item__image');
var imagePreviewList = document.querySelectorAll('.item__image-item');

imagePreviewList.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    var itemImage = item.querySelector('.item__image--small');
    imagePreview.src = itemImage.src;
  });
});
