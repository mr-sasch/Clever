
// Корзина
  // жалюзи

let jalSbmt = document.querySelector('.jalcount__submit'), // добавить в заказ
cartSend = document.querySelector('.cart__send');
cartProduct = document.querySelector('.cart__product'),
cartHeight = document.querySelector('.cart__height'),
cartWidth = document.querySelector('.cart__width'),
cartName = document.querySelector('.cart__name'),
cartPhone = document.querySelector('.cart__phone'),
cartRemove = document.querySelector('.cart__remove'),
jalWidthForSend = document.querySelector('.cart__width-res');

// Клик "ОТПРАВИТЬ"
cartSend.onclick = () => {
  let tableWrap = document.querySelector('.cart__table');
  cartInput.innerHTML = tableWrap.outerHTML;
  // Отправка скрытой формы
  cartSubmit.click();
}

// Счетчик в корзине
let cartCount = document.querySelector('.cartbtn__numb'),
cartCountVal = 0;
cartCount.innerHTML = cartCountVal;
// Увеличение счетчика в корзине
const cartCountAdd = () => {
  cartCountVal++ ;
  cartCount.innerHTML = cartCountVal;
  showCartLabel();
}
// Уменьшение счетчика в корзине
const cartCountRem = () => {
  cartCountVal-- ;
  cartCount.innerHTML = cartCountVal;
  showCartLabel();
}
// Появление значка корзины
const showCartLabel = () => {
  let cartBtn = document.querySelector('.cartbtn');
  if (cartCountVal !== 0) {
    cartBtn.className = 'cartbtn active';
  } else {
    cartBtn.className = 'cartbtn';
  }
}

// Клик "ДОБАВИТЬ В ЗАКАЗ"
jalSbmt.onclick = () => {
  // Увеличить счетчик
  cartCountAdd();

  // Создаем строки виртуальной таблицы
  let cartTableBoby = document.querySelector('.cart__table tbody');
  var newTr = document.createElement('tr');
  newTr.className = 'table__tr';
  cartTableBoby.appendChild(newTr);
  for (let i = 0; i < 5; i++) {
    var newTd = document.createElement('td');
    newTr.appendChild(newTd);
  }
  var newTdAll = newTr.querySelectorAll('td');
  // /Создаем строки виртуальной таблицы

  // Создаем строку
    // Название
  var jalTypeForSend = document.createElement('div');
  jalTypeForSend.className = 'cart__product cart__product-res';
  cartProduct.appendChild(jalTypeForSend);
  newTdAll[0].innerHTML = jalcountType.value;
    // Высота
  var jalHeightForSend = document.createElement('div');
  jalHeightForSend.className = 'cart__height cart__height-res';
  cartHeight.appendChild(jalHeightForSend);
  newTdAll[1].innerHTML = inputNumberVert.value;
    // Ширина
  var jalWidthForSend = document.createElement('div');
  jalWidthForSend.className = 'cart__width cart__width-res';
  cartWidth.appendChild(jalWidthForSend);
  newTdAll[2].innerHTML = inputNumberHor.value;
    // Имя
  var jalNameForSend = document.createElement('div');
  jalNameForSend.className = 'cart__name cart__name-res';
  cartName.appendChild(jalNameForSend);
  newTdAll[3].innerHTML = jalName.value;
    // Телефон
  var jalPhoneForSend = document.createElement('div');
  jalPhoneForSend.className = 'cart__phone cart__phone-res';
  cartPhone.appendChild(jalPhoneForSend);
  newTdAll[4].innerHTML = jalPhone.value;
    // Колонка "Удалить строку"
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

// Клик на колонку "УДАЛИТЬ"
cartRemove.onclick = (e) => {

  // Строки с кнопкой "удалить"
  let cartProductItem = document.querySelectorAll('.cart__product.cart__product-res');
  // Строки с высотой
  let cartHeightItem = document.querySelectorAll('.cart__height.cart__height-res');
  // Строки с шириной
  let cartWidthItem = document.querySelectorAll('.cart__width.cart__width-res');
  // Строки с именем
  let cartNameItem = document.querySelectorAll('.cart__name.cart__name-res');
  // Строки с телефоном
  let cartPhoneItem = document.querySelectorAll('.cart__phone.cart__phone-res');
  // Строки с кнопкой "удалить"
  let cartRemoveItem = document.querySelectorAll('.cart__remove.cart__remove-res');
  let target = e.target;
  let i = 0;
  while (i < cartRemoveItem.length) {
    if (target === cartRemoveItem[i]) {
      break;
    }
    i++;
  };
  if (target !== cartRemoveItem[i]) {return};
  // Удаляем ячейки из корзины
  cartProductItem[i].remove();
  cartHeightItem[i].remove();
  cartWidthItem[i].remove();
  cartNameItem[i].remove();
  cartPhoneItem[i].remove();
  cartRemoveItem[i].remove();
  // Удаляем строку из виртуальной таблицы
  let tableTr = document.querySelectorAll('.table__tr');
  tableTr[i].remove();

// Если мы кликнули по полю со крестиком, уменьшаем счетчик на 1
if (target.className === cartRemoveItem[0].className) {cartCountRem();};
}



// /Корзина
