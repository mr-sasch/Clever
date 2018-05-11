// Закрепленное меню
window.onload = function() {
  var headerBottom = document.getElementById('headerBottom'),
  headerTop = document.getElementById('header__top'),
  height = headerTop.offsetHeight,
  top = window.pageYOffset;

  if (top >= height) {
    headerBottom.classList.add('header__bottom-fixed');
  } else {
    headerBottom.classList.remove('header__bottom-fixed');
  }

  document.onscroll = function() {
    var top = window.pageYOffset,
    height = headerTop.offsetHeight;
    if (top >= height) {
      headerBottom.classList.add('header__bottom-fixed');
    } else {
      headerBottom.classList.remove('header__bottom-fixed');
    }
  }
}

// Активные кнопки меню
jalBtn.onclick = function() {
  jalBtn.classList.add('active');
  karBtn.classList.remove('active');
}
karBtn.onclick = function() {
  karBtn.classList.add('active');
  jalBtn.classList.remove('active');
}
topLogo.onclick = function() {
  karBtn.classList.remove('active');
  jalBtn.classList.remove('active');
}

// Прокрутка при нажатии на кнопки
$(document).ready(function(){

  $("#jalBtn").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var headerBottomPosition = getComputedStyle(headerBottom).position;
    var headerBottomHeight = headerBottom.offsetHeight;
    var offset = $(id).offset();

    if (headerBottomPosition != 'fixed') {
      $("html, body").animate({
        scrollTop: offset.top - headerBottomHeight
      }, 500);
    } else {
      $("html, body").animate({
        scrollTop: offset.top
      }, 500);
    }
  });

  $("#karBtn").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var headerBottomPosition = getComputedStyle(headerBottom).position;
    var headerBottomHeight = headerBottom.offsetHeight;
    var offset = $(id).offset();

    if (headerBottomPosition != 'fixed') {
      $("html, body").animate({
        scrollTop: offset.top - headerBottomHeight
      }, 500);
    } else {
      $("html, body").animate({
        scrollTop: offset.top
      }, 500);
    }
  });

  $(".footer__kar-lnk").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var headerBottomPosition = getComputedStyle(headerBottom).position;
    var headerBottomHeight = headerBottom.offsetHeight;
    var offset = $(id).offset();

    if (headerBottomPosition != 'fixed') {
      $("html, body").animate({
        scrollTop: offset.top - headerBottomHeight
      }, 500);
    } else {
      $("html, body").animate({
        scrollTop: offset.top
      }, 500);
    }
  });

  $(".footer__jal-lnk").click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var headerBottomPosition = getComputedStyle(headerBottom).position;
    var headerBottomHeight = headerBottom.offsetHeight;
    var offset = $(id).offset();

    if (headerBottomPosition != 'fixed') {
      $("html, body").animate({
        scrollTop: offset.top - headerBottomHeight
      }, 500);
    } else {
      $("html, body").animate({
        scrollTop: offset.top
      }, 500);
    }
  });

  $("#topLogo").click(function(e){
    e.preventDefault();

    var id = $(this).attr("href");
    var offset = $(id).offset();

    $("html, body").animate({
      scrollTop: offset.top
    }, 500);
  });
});

// Таймер
var timer;
var thisis_time = $('#datefortimer')[0].value;
  var compareDate = new Date(thisis_time+"T00:00:00");

  timer = setInterval(function() {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      clearInterval(timer);

    } else {

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      $(".days").text(days);
      $(".hours").text(hours);
      $(".minutes").text(minutes);
      $(".seconds").text(seconds);
    }
  }

// Инициация слайдера "Фото с производства"
$('.photo-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  pauseOnHover: false,
  swipeToSlide: true
});
baguetteBox.run('.photo-slider');

// Отзывы
var otzivi_slider = $('.otzivi-slider');

otzivi_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.otzivi-slider__current').text(i);
    $('.otzivi-slider__total').text(slick.slideCount);
});

otzivi_slider.slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
swipeToSlide:true,
adaptiveHeight:true,
responsive: [
  {
    breakpoint: 1170,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
  }
]
});
