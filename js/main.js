'use strict';

// Night Mode function; changes document background to black and button background to white.
const nightMode = function () {
   const background = document.body;
   background.classList.toggle("nightMode");
   const button = document.getElementById("btn");
   button.classList.toggle("buttonNightMode");
}

// Invokes the nightMode function when "btn" is clicked.
document.getElementById("btn").addEventListener("click", nightMode);