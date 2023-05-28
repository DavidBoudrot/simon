//global variables

var greenButton = document.getElementById("greenbtn");
var redButton = document.getElementById("redbtn");
var yellowButton = document.getElementById("yellowbtn");
var blueButton = document.getElementById("bluebtn");

var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");

// event listeners

greenButton.addEventListener("click", function() {
    let parent = this.parentElement;
    parent.style.backgroundColor = "white";
    parent.style.scale = "2";
    greenSound.play();
    updateBackground(90, "green", "lime");
    parent.style.zIndex = "1";

    setTimeout(() => {
        parent.style.scale = "1";
        parent.style.background = "rgba(0, 255, 0, 0.5)";
    }, 1000);
});

redButton.addEventListener("click", function() {
    
    let parent = this.parentElement;
    parent.style.backgroundColor = "white";
    parent.style.scale = "2";
    parent.style.zIndex = "1";
    redSound.play();
    updateBackground(90, "red", "orange");
    setTimeout(() => {
        parent.style.scale = "1";
        parent.style.background = "rgba(255, 0, 0, 0.5)";
        
    }, 1000);
});

yellowButton.addEventListener("click", function() {
    let parent = this.parentElement;
    parent.style.backgroundColor = "white";
    parent.style.scale = "2";
    parent.style.zIndex = "1";
    updateBackground(90, "yellow", "orange");
    yellowSound.play(); 
    setTimeout(() => { 
        parent.style.scale = "1"; 
        parent.style.background = "rgba(255, 255, 0, 0.5)";
    }, 1000);
});

blueButton.addEventListener("click", function() {
    let parent = this.parentElement;
    parent.style.backgroundColor = "white";
    parent.style.scale = "2";
    blueSound.play();
    parent.style.zIndex = "1";
    updateBackground(90, "cyan", "darkblue");
    setTimeout(() => {
        parent.style.scale = "1";
        parent.style.background = "rgba(0, 0, 255, 0.5)";
    }  , 1000);
});

function updateBackground(angle, targetColor1, targetColor2) {
  const overlay = document.querySelector(".gradient-overlay");
  overlay.style.backgroundImage = `linear-gradient(${angle}deg, ${targetColor1}, ${targetColor2})`;
  overlay.classList.add("gradient-transition");

  setTimeout(() => {
    overlay.classList.remove("gradient-transition");
  }, 1000);
}
