3D CV House Starter Project

🏠 Overview
This project is a 3D CV / Portfolio Experience built with:

HTML & CSS (core layout + UI panels)

JavaScript (interactions + logic)

Three.js (lightweight) for a small 3D scene

Optional React shell for component‑based structure

The goal is to create a virtual exhibition house where each “room” or “object” represents a section of your CV (About, Skills, Projects, Education, Contact).

This repository is designed to scale from simple front‑end to interactive 3D experience.

📁 Project Structure 

text´

project/
│── index.html
│── styles/
│     └── main.css
│── scripts/
│     ├── main.js
│     └── three-scene.js
│── assets/
│     ├── images/
│     └── models/
└── components/
      └── ui-panels/

text´

🔹 index.html
Base layout, canvas for 3D scene, UI panels.

🔹 styles/main.css
Global styles, layout, typography, responsive design.

🔹 scripts/main.js
Handles UI interactions, buttons, navigation, animations.

🔹 scripts/three-scene.js
Initializes a minimal Three.js scene:

Scene

Camera

Light

One simple 3D object (cube or room placeholder)

🔹 assets/
Images, textures, icons, and future 3D models.

🔹 components/ui-panels/
Reusable HTML fragments for CV sections.


🎯 Goals of This Starter
✔ Build a clean HTML/CSS foundation
Responsive layout

Clear UI/UX

Panels for CV content

✔ Add a small Three.js scene
Lightweight

Easy to understand

Expandable into a full 3D house

✔ Keep React optional
If you want to scale later, you can wrap the project in a React structure:

text´ 

react-app/
│── src/
│     ├── App.jsx
│     ├── components/
│     ├── styles/
│     └── three/
└── public/

text´ 
