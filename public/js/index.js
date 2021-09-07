$(document).ready(function() {
    fadeIn(document.querySelector('.bottom-line', 1));
    fadeIn(document.querySelector('.box6', 1));
    fadeIn(document.querySelector('.box7', 1));
    fadeIn(document.querySelector('.box6', 1));
    fadeIn(document.querySelector('.shadow', 1));
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

// //CURSOR TRAILER
// const LINE_DURATION = 1;
// const LINE_WIDTH_START = 5;

// var active = true;

// var canvas;
// var context;

// var newWidth = 1000;
// var newHeight = 800;

// var lineColor = 'black';
// var lineDuration = LINE_DURATION;
// var lineFadeLinger = 1;
// var lineWidthStart = LINE_WIDTH_START;
// var fadeDuration = 50;
// var drawEveryFrame = 1; // Only adds a Point after these many 'mousemove' events

// var clickCount = 0;
// var frame = 0;

// var flipNext = true;

// var points = new Array();

// $(document).ready(function() {
//   enableDrawingCanvas();
//   resizeCanvas(window.innerWidth, window.innerHeight);
// });

// // Find canvas reference & enable listeners
// function enableDrawingCanvas() {
//   if (canvas === undefined) {
//     canvas = document.getElementById('myCanvas');
//     context = canvas.getContext('2d');
//     enableListeners();
//     init();
//   }
// }

// // Initialize animation start
// function init() {
//   draw();
// }

// // Draw current state
// function draw() {
//   if (active) {
//     animatePoints();
//     window.requestFrame(draw);
//   }
// }

// // Update mouse positions
// function animatePoints() {
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height);

//   var duration = lineDuration * 100 / 10;
//   var point, lastPoint;

//   for (var i = 0; i < points.length; i++) {
//     point = points[i];

//     if (points[i - 1] !== undefined) {
//       lastPoint = points[i - 1];
//     } else {
//       lastPoint = points[i];
//     }

//     point.lifetime += 1;

//     if (point.lifetime > duration) {
//       points.splice(i, 1);
//       continue;
//     }

//     // Begin drawing stuff!
//     var spreadRate;
//     spreadRate = lineWidthStart / point.lifetime;


//     context.strokeStyle = lineColor;
//     context.lineJoin = "round";
//     context.lineWidth = spreadRate;

//     context.beginPath();

//     context.moveTo(lastPoint.x, lastPoint.y);
//     context.lineTo(point.x, point.y);

//     context.stroke();
//     context.closePath();
//   }

//   //if (points.length > 0) { console.log(spreadRate + "|" + points.length + " points alive."); }
// }

// function addPoint(x, y) {
//   flipNext = !flipNext;
//   var point = new Point(x, y, 0, flipNext);
//   points.push(point);
// }


// // RequestFrame definition
// window.requestFrame = (function() {
//   return window.requestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60);
//     };
// })();

// // Update canvas dimensions based on input
// function resizeCanvas(w, h) {
//   if (context !== undefined) {
//     context.canvas.width = w;
//     context.canvas.height = h;

//     newWidth = w;
//     newHeight = h;
//   }
// }

// // Listeners for mouse and touch events
// function enableListeners() {

//   //********* Mouse Listeners *********//
//   $('#myCanvas').on('mousemove', function(e) {
//     if (frame === drawEveryFrame) {
//       addPoint(e.pageX, e.pageY);
//       frame = 0;
//     }
//     frame++;
//   });

//   $('#myCanvas').on('mouseover', function() {});
//   $('#myCanvas').on('mouseleave', function() {});

//   //********* Touch Listeners *********//
//   $('#myCanvas').on('touchstart', function() {
//   });
//   $('#myCanvas').on('touchmove', function() {
//   });
//   $('#myCanvas').on('touchend', function() {

//   });
// }


// // POINT CLASS
// // location of where mouse location
// // was previously at. 
// var Point = class Point {

//   // Define class constructor
//   constructor(x, y, lifetime, flip) {
//     this.x = x;
//     this.y = y;
//     this.lifetime = lifetime;
//     this.flip = flip;
//   }

// }


//3D ANIMATION
import * as THREE from '//cdn.skypack.dev/three@0.131.1'
import { OrbitControls } from '//cdn.skypack.dev/three@0.131.1/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from '//cdn.skypack.dev/three@0.131.1/examples/jsm/loaders/RGBELoader.js'

const hdriURL = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_02_1k.hdr'
const heightMapURL = 'https://i.imgur.com/dMYV4cf.png'
const displacementMapURL = 'https://i.imgur.com/L1pqRg9.jpeg'


createApp({
	params: {
  	roughness: 0.1,
    iterations: 128,
    depth: 1,
    smoothing: 0,
    displacement: 0,
    speed: 0.039,
    colorA: '#000000',
    colorB: 'rgb(225, 33, 64)'
  },
	async init2() {
  	const geometry = new THREE.SphereGeometry(1, 64, 32)
    const material = new THREE.MeshStandardMaterial({ roughness: this.params.roughness })
    
    // Load heightmap and displacement textures
    const heightMap = await this.loadTexture(heightMapURL)
    const displacementMap = await this.loadTexture(displacementMapURL)
    displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
    
    // Prevent seam introduced by THREE.LinearFilter
    heightMap.minFilter = displacementMap.minFilter = THREE.NearestFilter
    
    // Set up local uniforms object
    this.uniforms = {
    	iterations: { value: this.params.iterations },
      depth: { value: this.params.depth },
      smoothing: { value: this.params.smoothing },
    	colorA: { value: new THREE.Color(this.params.colorA) },
    	colorB: { value: new THREE.Color(this.params.colorB) },
      heightMap: { value: heightMap },
      displacementMap: { value: displacementMap },
      displacement: { value: this.params.displacement },
      time: { value: 0 }
    }
    
    material.onBeforeCompile = shader => {
    	// Wire up local uniform references
      shader.uniforms = { ...shader.uniforms, ...this.uniforms }
      
      // Add to top of vertex shader
      shader.vertexShader = `
        varying vec3 v_pos;
        varying vec3 v_dir;
      ` + shader.vertexShader
      
      // Assign values to varyings inside of main()
      shader.vertexShader = shader.vertexShader.replace(/void main\(\) {/, (match) => match + `
        v_dir = position - cameraPosition; // Points from camera to vertex
        v_pos = position;
      `)
      
      // Add to top of fragment shader
      shader.fragmentShader = `
      	#define FLIP vec2(1., -1.)
        
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform sampler2D heightMap;
        uniform sampler2D displacementMap;
        uniform int iterations;
        uniform float depth;
        uniform float smoothing;
        uniform float displacement;
        uniform float time;
        
        varying vec3 v_pos;
        varying vec3 v_dir;
      ` + shader.fragmentShader
      
      // Add above fragment shader main() so we can access common.glsl.js
      shader.fragmentShader = shader.fragmentShader.replace(/void main\(\) {/, (match) => `
       	/**
         * @param p - Point to displace
         * @param strength - How much the map can displace the point
         * @returns Point with scrolling displacement applied
         */
        vec3 displacePoint(vec3 p, float strength) {
        	vec2 uv = equirectUv(normalize(p));
          vec2 scroll = vec2(time, 0.);
          vec3 displacementA = texture(displacementMap, uv + scroll).rgb; // Upright
					vec3 displacementB = texture(displacementMap, uv * FLIP - scroll).rgb; // Upside down
          
          // Center the range to [-0.5, 0.5], note the range of their sum is [-1, 1]
          displacementA -= 0.5;
          displacementB -= 0.5;
          
          return p + strength * (displacementA + displacementB);
        }
        
				/**
          * @param rayOrigin - Point on sphere
          * @param rayDir - Normalized ray direction
          * @returns Diffuse RGB color
          */
        vec3 marchMarble(vec3 rayOrigin, vec3 rayDir) {
          float perIteration = 1. / float(iterations);
          vec3 deltaRay = rayDir * perIteration * depth;

          // Start at point of intersection and accumulate volume
          vec3 p = rayOrigin;
          float totalVolume = 0.;

          for (int i=0; i<iterations; ++i) {
            // Read heightmap from spherical direction of displaced ray position
            vec3 displaced = displacePoint(p, displacement);
            vec2 uv = equirectUv(normalize(displaced));
            float heightMapVal = texture(heightMap, uv).r;

            // Take a slice of the heightmap
            float height = length(p); // 1 at surface, 0 at core, assuming radius = 1
            float cutoff = 1. - float(i) * perIteration;
            float slice = smoothstep(cutoff, cutoff + smoothing, heightMapVal);

            // Accumulate the volume and advance the ray forward one step
            totalVolume += slice * perIteration * 3.;
            p += deltaRay;
          }
          return mix(colorA, colorB, clamp(totalVolume, 0., 1.));
        }
      ` + match)
      
    	shader.fragmentShader = shader.fragmentShader.replace(/vec4 diffuseColor.*;/, `
      	vec3 rayDir = normalize(v_dir);
        vec3 rayOrigin = v_pos;
        
        vec3 rgb = marchMarble(rayOrigin, rayDir);
				vec4 diffuseColor = vec4(rgb, 1.);      
      `)
    }
    
    this.mesh = new THREE.Mesh(geometry, material)
    this.scene.add(this.mesh)

    
    // MISC
		await this.setupEnvironment()
    this.setupOrbitControls()
  },
  tick(time, delta) {
    this.controls.update()
    this.uniforms.time.value += delta * this.params.speed
  },
  setupOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.autoRotate = true
  },
  async setupEnvironment() {
    const envMap = await loadHDRI(hdriURL, this.renderer)
  	this.scene.environment = envMap
  },
  async loadTexture(url) {
  	this.textureLoader = this.textureLoader || new THREE.TextureLoader()
    return new Promise(resolve => {
      this.textureLoader.load(url, texture => {
				resolve(texture)
      })
    })
  }
})

/**
 * Below: boilerplate Three.js app setup and helper functions
 */

function createApp(app) {
  const scene = new THREE.Scene()
  const renderer = createRenderer()
  const camera = createCamera()
  
  Object.assign(renderer.domElement.style, {
  	position: 'absolute',
    width: '40vw',
    height: '40vh',
    right: '0',
    touchAction: 'none',
    marginTop: '31vh',
    dropShadow: '30px 10px 4px black'
  })
  document.body.appendChild(renderer.domElement)
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth * .4, window.innerHeight * .4)
  }, false)
  const clock = new THREE.Clock()
  const loop = () => {
    requestAnimationFrame(loop)
    const delta = clock.getDelta()
    app.tick(clock.elapsedTime, delta)
    renderer.render(scene, camera)
  }
  Object.assign(app, { scene, camera, renderer, clock })
  app.init2().then(loop)
}

/**
 * Sets up a WebGLRenderer with color management
 * See https://www.donmccurdy.com/2020/06/17/color-management-in-threejs/
 */
function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 2)
  return camera
}

/**
 * @param {string} url - Path to equirectandular .hdr
 * @param {THREE.WebGLRenderer} renderer
 * @returns {Promise<THREE.Texture>}
 */
function loadHDRI(url, renderer) {
  return new Promise(resolve => {
    const loader = new RGBELoader()
    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    loader.load(url, (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture
      texture.dispose()
      pmremGenerator.dispose()
      resolve(envMap)
    })
  })
}