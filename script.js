import THREE from './node_modules/three';
import './style.css'
import { GUI } from 'dat.gui'
import { OrbitControls } from 'OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

const stats = Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()
const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
cubeFolder.open()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()


let renderer;


const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

const controls = new OrbitControls(camera, renderer.domElement);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x132644);

document.body.appendChild(rendu.domElement);


camera.position.set(0, 0, 100);

const scene = new THREE.Scene();

//------------DEPOSER ET CREER LA FORME----------------

var forme;


forme = new THREE.Group();

const geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);

const materiel = new THREE.MeshNormalMaterial({ wireframe: true });

forme.add(new THREE.Mesh(geometrie, materiel));

controls = new OrbitControls(camera);
controls.enableDamping = true;



scene.add(forme);


//-----------------------IMPORT MODELE--------------------------------
/*const loader = new GLTFLoader();

loader.load('modele\404.glb', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});*/
//-----------------------ANIMER--------------------------------



let animate = function () {
    requestAnimationFrame(animate);

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;
    renderer.render(scene, camera);
    controls.update();

}



if (WebGL.isWebGLAvailable()) {

    // Initiate function or other initializations here
    animer();

} else {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}




//-----------------------CONTROLER--------------------------------
