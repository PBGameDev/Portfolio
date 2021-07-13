import './index.css'
import * as THREE from 'three'
const loader = new THREE.TextureLoader();
const cross = loader.load("./cross.png");
const canvas = document.querySelector('canvas.stars')
const scene = new THREE.Scene()
const particleGeometry = new THREE.BufferGeometry;
const particleCount = 750;
const posArray = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
}
particleGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const materialParticle = new THREE.PointsMaterial({
    size: 0.15,
    map: cross,
    transparent: true,
    opacity: 0.9
});
const particleMesh = new THREE.Points(particleGeometry, materialParticle);
scene.add(particleMesh);
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.0001, 200)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 30
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.addEventListener("mousemove", animateParticles);
let mouseX = 0
let mouseY = 0
function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}
const tick = () => {
    particleMesh.rotation.x = -mouseY * 0.0008
    particleMesh.rotation.y = mouseX * 0.0008
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()