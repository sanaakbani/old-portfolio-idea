

$(document).ready(function() {
    typeSentence("Hello there.", ".text1", ".typewriter1");
    // new Promise(resolve => setTimeout(resolve, 2000)).then( function() {
    //     typeSentence("Nice to meet you.", ".text2", ".typewriter2");
    //     document.querySelector('.typewriter2').style.display = 'none';
    // })
  });

//TYPEWRITER EFFECT
function typeSentence(sentence, eleRef, typeRef) {
    const letters = sentence.split("");;
    let i = 0;
    delay = 100;
    document.querySelector(typeRef).style.display = 'inline-block';
    while(i < letters.length) {
      new Promise(resolve => setTimeout(resolve, delay)).then( function() {
        $(eleRef).append(letters[i]);
        i++;
      });
    }
    document.querySelector(typeRef).style.display = 'none';
    return;
  }


//CURSOR TRAILER
const LINE_DURATION = 1;
const LINE_WIDTH_START = 5;

var active = true;

var canvas;
var context;

var newWidth = 1000;
var newHeight = 800;

var lineColor = 'rgb(149, 224, 223)';
var lineDuration = LINE_DURATION;
var lineFadeLinger = 1;
var lineWidthStart = LINE_WIDTH_START;
var fadeDuration = 50;
var drawEveryFrame = 1; // Only adds a Point after these many 'mousemove' events

var clickCount = 0;
var frame = 0;

var flipNext = true;

var points = new Array();

$(document).ready(function() {
  enableDrawingCanvas();
  resizeCanvas(window.innerWidth, window.innerHeight);
});

// Find canvas reference & enable listeners
function enableDrawingCanvas() {
  if (canvas === undefined) {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    enableListeners();
    init();
  }
}

// Initialize animation start
function init() {
  draw();
}

// Draw current state
function draw() {
  if (active) {
    animatePoints();
    window.requestFrame(draw);
  }
}

// Update mouse positions
function animatePoints() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  var duration = lineDuration * 100 / 10;
  var point, lastPoint;

  for (var i = 0; i < points.length; i++) {
    point = points[i];

    if (points[i - 1] !== undefined) {
      lastPoint = points[i - 1];
    } else {
      lastPoint = points[i];
    }

    point.lifetime += 1;

    if (point.lifetime > duration) {
      points.splice(i, 1);
      continue;
    }

    // Begin drawing stuff!
    var spreadRate;
    spreadRate = lineWidthStart / point.lifetime;


    context.strokeStyle = lineColor;
    context.lineJoin = "round";
    context.lineWidth = spreadRate;

    context.beginPath();

    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);

    context.stroke();
    context.closePath();
  }

  //if (points.length > 0) { console.log(spreadRate + "|" + points.length + " points alive."); }
}

function addPoint(x, y) {
  flipNext = !flipNext;
  var point = new Point(x, y, 0, flipNext);
  points.push(point);
}


// RequestFrame definition
window.requestFrame = (function() {
  return window.requestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Update canvas dimensions based on input
function resizeCanvas(w, h) {
  if (context !== undefined) {
    context.canvas.width = w;
    context.canvas.height = h;

    newWidth = w;
    newHeight = h;
  }
}

// Listeners for mouse and touch events
function enableListeners() {

  //********* Mouse Listeners *********//
  $('#myCanvas').on('mousemove', function(e) {
    if (frame === drawEveryFrame) {
      addPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      frame = 0;
    }
    frame++;
  });

  $('#myCanvas').on('mouseover', function() {});
  $('#myCanvas').on('mouseleave', function() {});

  //********* Touch Listeners *********//
  $('#myCanvas').on('touchstart', function() {
  });
  $('#myCanvas').on('touchmove', function() {
  });
  $('#myCanvas').on('touchend', function() {});
}


// POINT CLASS
// location of where mouse location
// was previously at. 
var Point = class Point {

  // Define class constructor
  constructor(x, y, lifetime, flip) {
    this.x = x;
    this.y = y;
    this.lifetime = lifetime;
    this.flip = flip;
  }

}