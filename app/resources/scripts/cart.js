
// Корзина
  // жалюзи
let jalSbmt = document.querySelector('.jalcount__submit'),
cartProduct = document.querySelector('.cart__product'),
cartHeight = document.querySelector('.cart__height'),
cartWidth = document.querySelector('.cart__width'),
cartName = document.querySelector('.cart__name'),
cartPhone = document.querySelector('.cart__phone'),
cartRemove = document.querySelector('.cart__remove'),
jalWidthForSend = document.querySelector('.cart__width-res');
jalSbmt.onclick = () => {
  // Создаем строку
    // Название
  var jalTypeForSend = document.createElement('div');
  jalTypeForSend.className = 'cart__product cart__product-res';
  cartProduct.appendChild(jalTypeForSend);
    // Высота
  var jalHeightForSend = document.createElement('div');
  jalHeightForSend.className = 'cart__height cart__height-res';
  cartHeight.appendChild(jalHeightForSend);
    // Ширина
  var jalWidthForSend = document.createElement('div');
  jalWidthForSend.className = 'cart__width cart__width-res';
  cartWidth.appendChild(jalWidthForSend);
    // Имя
  var jalNameForSend = document.createElement('div');
  jalNameForSend.className = 'cart__name cart__name-res';
  cartName.appendChild(jalNameForSend);
    // Телефон
  var jalPhoneForSend = document.createElement('div');
  jalPhoneForSend.className = 'cart__phone cart__phone-res';
  cartPhone.appendChild(jalPhoneForSend);
    // Удалить строку
  var jalRemove = document.createElement('div');
  jalRemove.className = 'cart__remove cart__remove-res';
  cartRemove.appendChild(jalRemove);
  // inputNumberVert и inputNumberHor - берутся из файла инициализации слайдера
  jalHeightForSend.innerHTML = inputNumberVert.value;
  jalWidthForSend.innerHTML = inputNumberHor.value;
  jalTypeForSend.innerHTML = jalcountType.value;
  jalPhoneForSend.innerHTML = jalPhone.value;
  jalNameForSend.innerHTML = jalName.value;
}

cartRemove.onclick = (e) => {
  // Строки с нопкой "удалить"
  let cartProductItem = document.querySelectorAll('.cart__product.cart__product-res');
  // Строки с высотой
  let cartHeightItem = document.querySelectorAll('.cart__height.cart__height-res');
  // Строки с шириной
  let cartWidthItem = document.querySelectorAll('.cart__width.cart__width-res');
  // Строки с именем
  let cartNameItem = document.querySelectorAll('.cart__name.cart__name-res');
  // Строки с телефоном
  let cartPhoneItem = document.querySelectorAll('.cart__phone.cart__phone-res');
  // Строки с нопкой "удалить"
  let cartRemoveItem = document.querySelectorAll('.cart__remove.cart__remove-res');
  let target = e.target;
  let i = 0;
  while (i < cartRemoveItem.length) {
    if (target === cartRemoveItem[i]) {
      break;
    }
    i++;
  };
  cartProductItem[i].remove();
  cartHeightItem[i].remove();
  cartWidthItem[i].remove();
  cartNameItem[i].remove();
  cartPhoneItem[i].remove();
  cartRemoveItem[i].remove();
}


// /Корзина
