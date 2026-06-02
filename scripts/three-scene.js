// ===============================
// THREE.JS STARTER SCENE
// ===============================

let scene, camera, renderer, cube;

function initThreeScene() {

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d0d);

    // Camera
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(2, 2, 4);

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("cv-scene"),
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(3, 5, 2);
    scene.add(light);

    // Cube (placeholder object)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x4da6ff,
        roughness: 0.4,
        metalness: 0.1
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Resize handling
window.addEventListener("resize", () => {
    if (!renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize scene
initThreeScene();
