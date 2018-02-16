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

var geometry  = new THREE.SphereGeometry(0.5, 32, 32)
var material  = new THREE.MeshPhongMaterial()
var earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

// ADDING EARTH TEXTURE

material.map    = THREE.ImageUtils.loadTexture('Images/earthmap1k.jpg')

// ADDING BUMP TEXTURE

material.bumpMap    = THREE.ImageUtils.loadTexture('Images/earthbump1k.jpg')
material.bumpScale = 0.05

// FINISH SCENE SETUP

document.body.appendChild(renderer.domElement);

render();

var delta = 0;
function render() {
	
	// pan the camera around the scene center	
	// delta += 0.1;
	// camera.lookAt(floor.position);
	// camera.position.x = Math.sin(delta) * 20;
	// camera.position.y = 20;
	// camera.position.z = Math.cos(delta) * 20;
	
	// rotate the cube around its center	
	earthMesh.rotation.y -= .03;
		
	renderer.render(scene, camera);
	
	requestAnimationFrame(render);
}