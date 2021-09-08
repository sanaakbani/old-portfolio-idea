$(document).ready(function() {
    fadeIn(document.querySelector('.home', 1));
    fadeIn(document.querySelector('.about', 1));
    fadeIn(document.querySelector('.work', 1));
    fadeIn(document.querySelector('.volunteer', 1));
    fadeIn(document.querySelector('.projects', 1));
    fadeIn(document.querySelector('.resume', 1));
    fadeIn(document.querySelector('.contact', 1));
});

$('.slider-home').mouseover(function(){
    console.log('hover');
    $('.slider-home').css("background-color", "rgba(85, 37, 97, 0.5);")
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