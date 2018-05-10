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

  $("#topLogo").click(function(e){
    e.preventDefault();

    var id = $(this).attr("href");
    var offset = $(id).offset();

    $("html, body").animate({
      scrollTop: offset.top
    }, 500);
  });
});
