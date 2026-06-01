console.log("Main JS loaded");

// Elements
const cvPanel = document.getElementById("cv-panel");
const canvas3D = document.getElementById("cv-scene");

const btnCV = document.getElementById("btn-cv");
const btn3D = document.getElementById("btn-3d");

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
