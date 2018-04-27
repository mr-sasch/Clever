// Горизонтальный слайдер

var pipsSlider = document.getElementById('calc-horiz');

noUiSlider.create(pipsSlider, {
    range: {
        min: 0,
        max: 300
    },
    step: 1,
    start: [ 0 ],
    pips: { mode: 'count', values: 5 }
});

var pips = pipsSlider.querySelectorAll('.noUi-value');

function clickOnPip ( ) {
    var value = Number(this.getAttribute('data-value'));
    pipsSlider.noUiSlider.set(value);
}

for ( var i = 0; i < pips.length; i++ ) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}


// Вертикальный слайдер

var pipsSlider = document.getElementById('calc-vert');

noUiSlider.create(pipsSlider, {
    range: {
        min: 0,
        max: 300
    },
    start: [ 0 ],
    pips: { mode: 'count', values: 5 },
    orientation: 'vertical',
    direction: 'rtl'
});

var pips = pipsSlider.querySelectorAll('.noUi-value');

function clickOnPip ( ) {
    var value = Number(this.getAttribute('data-value'));
    pipsSlider.noUiSlider.set(value);
}

for ( var i = 0; i < pips.length; i++ ) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}
