// Горизонтальный слайдер
var sliderHoriz = document.getElementById('calc-horiz');

noUiSlider.create(sliderHoriz, {
    range: {
        min: 0,
        max: 300
    },
    step: .10,
    start: [ 250 ],
    connect: [true, false],
    pips: { mode: 'count', values: 5 }
});

var pips = sliderHoriz.querySelectorAll('.noUi-value');

function clickOnPip ( ) {
    var value = Number(this.getAttribute('data-value'));
    sliderHoriz.noUiSlider.set(value);
}

for ( var i = 0; i < pips.length; i++ ) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}

  // Активируем инпуты - Ширина
  var inputNumberHor = document.getElementById('jalWidth');

  sliderHoriz.noUiSlider.on('update', function( values, handle ) {

  	var value = values[handle];
    inputNumberHor.value = value;
  });

  inputNumberHor.addEventListener('change', function(){
  	sliderHoriz.noUiSlider.set([this.value, null]);
  });
  // /Активируем инпуты - Ширина
// Горизонтальный слайдер

// Вертикальный слайдер
var sliderVert = document.getElementById('calc-vert');

noUiSlider.create(sliderVert, {
    range: {
        min: 0,
        max: 300
    },
    start: [ 175 ],
    connect: [true, false],
    pips: { mode: 'count', values: 5 },
    orientation: 'vertical',
    step: .10,
    direction: 'rtl'
});

var pipsVert = sliderVert.querySelectorAll('.noUi-value');

function clickOnPipVert ( ) {
    var value = Number(this.getAttribute('data-value'));
    sliderVert.noUiSlider.set(value);
}

for ( var i = 0; i < pipsVert.length; i++ ) {

    // For this example. Do this in CSS!
    pipsVert[i].style.cursor = 'pointer';
    pipsVert[i].addEventListener('click', clickOnPipVert);
}

// Активируем инпуты - Высота
var inputNumberVert = document.getElementById('jalHeight');

sliderVert.noUiSlider.on('update', function( values, handle ) {

  var value = values[handle];
  inputNumberVert.value = value;
});

inputNumberVert.addEventListener('change', function(){
  sliderVert.noUiSlider.set([this.value, null]);
});
// /Активируем инпуты - Высота


// Слайдер - КАРНИЗЫ

var karCalc = document.getElementById('karCalc');

noUiSlider.create(karCalc, {
    range: {
        min: 0,
        max: 300
    },
    step: .10,
    start: [ 25 ],
    connect: [true, false],
    pips: { mode: 'count', values: 5 }
});

var pips = karCalc.querySelectorAll('.noUi-value');

function clickOnPip ( ) {
    var value = Number(this.getAttribute('data-value'));
    karCalc.noUiSlider.set(value);
}

for ( var i = 0; i < pips.length; i++ ) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}

  // Активируем инпуты - Ширина
  var inputNumber = document.getElementById('karWidth');

  karCalc.noUiSlider.on('update', function( values, handle ) {

  	var value = values[handle];
    inputNumber.value = value;
  });

  inputNumber.addEventListener('change', function(){
  	karCalc.noUiSlider.set([this.value, null]);
  });
  // /Активируем инпуты - Ширина
