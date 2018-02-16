// SCENE

scene = new THREE.Scene();

// CAMERA 

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.x = 0;
camera.position.y = 6;
camera.position.z = 20;
camera.lookAt(scene.position);

// RENDERER

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);

//OBJECT

var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
var material  = new THREE.MeshPhongMaterial()
var earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

// ADDING EARTH TEXTURE

material.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg')
