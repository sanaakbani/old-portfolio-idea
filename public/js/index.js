$(document).ready(function() {
    fadeIn(document.querySelector('.bottom-line', 1));
    fadeIn(document.querySelector('.box6', 1));
    fadeIn(document.querySelector('.box7', 1));
    fadeIn(document.querySelector('.box6', 1));
    typeSentence("Hello there.", ".text1", ".typewriter1", 60);
    new Promise(resolve => setTimeout(resolve, 2000)).then( function() {
      fadeIn(document.querySelector('.box3', 1));
      fadeIn(document.querySelector('.box4', 1));
      typeSentence("Nice to meet you. I am Sana Akbani, a full-time student studying computer science, mathematics, and business administration as a freshman at The University of Houston.", ".text2", ".typewriter2", 60);
      new Promise(resolve => setTimeout(resolve, 11500)).then( function() {
        typeSentence("I hope this portfolio finds you well and that you will find your time here worthwhile. To begin, click the button below and continue on. See you soon!", ".text3", ".typewriter3", 60);
        new Promise(resolve => setTimeout(resolve, 12000)).then( function() {
          fadeIn(document.querySelector('.begin', 1));
        })
      })
    })
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

//if user clicks anywhere
$('.empty').click(function(){
  document.querySelector('.begin').style.display = 'block';
});

$('.footer').click(function () {
  $('body').slideUp();
  location.href = "home.html";
});



//TYPEWRITER EFFECT
async function typeSentence(sentence, eleRef, typeRef, delay) {
    const letters = sentence.split("");;
    let i = 0;
    document.querySelector(typeRef).style.display = 'inline-block';
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
  document.querySelector(typeRef).style.display = 'none';
    return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}



// //3D ANIMATION
import * as THREE from '//cdn.skypack.dev/three@0.131.1'

// //Camera, scene, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(28, 1, 1, 1000);
scene.add(camera);
camera.position.set(-11,0,70);

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xffffff, 0 );
document.body.append(renderer.domElement);

var texLoader = new THREE.TextureLoader();
var tex1 = texLoader.load( "IMG_2409.jpg"); 
var tex2 = texLoader.load( "IMG_2412.jpg"); 
// Create an array of materials to be used in a cube, one for each side
var cubeMaterialArray = [];

// order to add materials: x+,x-,y+,y-,z+,z-
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { map: tex1 } ) );
cubeMaterialArray.push( new THREE.MeshBasicMaterial( { map: tex2 } ) );

// Cube parameters: width (x), height (y), depth (z), 
//       (optional) segments along x, segments along y, segments along z
var cubeGeometry = new THREE.BoxGeometry(7, 15, 0);

// using THREE.MeshFaceMaterial() in the constructor below
//   causes the mesh to use the materials stored in the geometry

var cube = new THREE.Mesh( cubeGeometry, cubeMaterialArray );
scene.add(cube);

Object.assign(renderer.domElement.style, {
  width: '100vw',
  height: '100vh',
})

// //Render loop
var render = function() {
  cube.rotation.y += .005;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();