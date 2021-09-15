$(document).ready(function() {
    fadeIn(document.querySelector('.home', 1));
    fadeIn(document.querySelector('.about', 1));
    fadeIn(document.querySelector('.work', 1));
    fadeIn(document.querySelector('.volunteer', 1));
    fadeIn(document.querySelector('.projects', 1));
    fadeIn(document.querySelector('.resume', 1));
    fadeIn(document.querySelector('.contact', 1));
    fadeIn(document.querySelector('.slider-home', 1));
});

$('.home').mouseover(function(){
    fadeIn(document.querySelector('.slider-home', 1));
});

$('.about').mouseover(function(){
    fadeIn(document.querySelector('.slider-about', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.work').mouseover(function(){
    fadeIn(document.querySelector('.slider-work', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.volunteer').mouseover(function(){
    fadeIn(document.querySelector('.slider-volunteer', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.projects').mouseover(function(){
    fadeIn(document.querySelector('.slider-projects', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.resume').mouseover(function(){
    fadeIn(document.querySelector('.slider-resume', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.contact').mouseover(function(){
    fadeIn(document.querySelector('.slider-contact', 1));
    document.querySelector('.slider-home').style.display = 'none';
});

$('.header-img').mouseover(function(){
    console.log('hover');
    fadeIn(document.querySelector('.slider-home', 1));
    document.querySelector('.slider-about').style.display = 'none';
    document.querySelector('.slider-work').style.display = 'none';
    document.querySelector('.slider-volunteer').style.display = 'none';
    document.querySelector('.slider-projects').style.display = 'none';
    document.querySelector('.slider-resume').style.display = 'none';
    document.querySelector('.slider-contact').style.display = 'none';
});

function fadeIn(element, endOpacity) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= endOpacity){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op + ")";
        op += op * .2;
    }, 10);
}

