console.log("Main JS loaded");

// Elements
const cvPanel = document.getElementById("cv-panel");
const canvas3D = document.getElementById("cv-scene");

const btnCV = document.getElementById("btn-cv");
const btn3D = document.getElementById("btn-3d");

document.getElementById("cv-panel").style.display = "none";
document.getElementById("cv-scene").style.display = "block";

document.getElementById("btn-cv").addEventListener("click", () => {
    document.getElementById("cv-panel").style.display = "block";
    document.getElementById("cv-scene").style.display = "none";
    document.body.classList.add("show-cv");
});

document.getElementById("btn-3d").addEventListener("click", () => {
    document.getElementById("cv-panel").style.display = "none";
    document.getElementById("cv-scene").style.display = "block";
    document.body.classList.remove("show-cv");
});

// Default mode: 3D Experience
cvPanel.style.display = "none";
canvas3D.style.display = "block";

// Show Classic CV
btnCV.addEventListener("click", () => {
    cvPanel.style.display = "block";
    canvas3D.style.display = "none";
});

// Show 3D Experience
btn3D.addEventListener("click", () => {
    cvPanel.style.display = "none";
    canvas3D.style.display = "block";
});

document.getElementById("btn-cv").addEventListener("click", () => {
    const cv = document.getElementById("cv-panel");
    cv.style.display = "block";   // show panel
    cv.style.animation = "fadeInCV 0.6s ease forwards"; // restart animation

    document.getElementById("cv-scene").style.display = "none";
    document.body.classList.add("show-cv");
});

document.getElementById("btn-3d").addEventListener("click", () => {
    document.getElementById("cv-panel").style.display = "none";
    document.getElementById("cv-scene").style.display = "block";
    document.body.classList.remove("show-cv");
});

