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

  // Якоря для блоков жалюзей и карнизов
  var mainBlocksTop = height - 2*height,
  karnizi = document.getElementById('karniziAnchor'),
  jaluzi = document.getElementById('jaluziAnchor');
  karnizi.style.top = mainBlocksTop - 70 + 'px';
  jaluzi.style.top = mainBlocksTop - 70 + 'px';
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
