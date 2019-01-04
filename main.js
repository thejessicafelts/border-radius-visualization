const box = document.getElementById("box");
const slider = document.getElementById("slider");
let radius = document.getElementById("radius").value;
let currentRadius = document.getElementById("currentRadius");

// Displays the default value for currentRadius ("0");
currentRadius.innerHTML = radius;

// Watches for the slider value to be changed
slider.onchange = updateRadius;

function updateRadius(){

 // Updates the radius value
 let radius = document.getElementById("radius").value;

 // Updates the currentRadius value, under the slider
 currentRadius.innerHTML = radius;

 // Uses the currentRadius value to update border-radius on box
 box.style.borderRadius = radius + "%";

};
