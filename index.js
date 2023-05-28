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
    this.parentElement.style.backgroundColor = "white";
    this.parentElement.style.scale = "2";
    greenSound.play();
    // set pages body background to green gradient with transition
    document.getElementsByTagName("body")[0].classList.add("gradient-transition");
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, #00b09b, #96c93d)";
    setTimeout(() => {
        this.parentElement.style.scale = "1";
        this.parentElement.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("body")[0].classList.remove("gradient-transition");
    }, 1000);
});

redButton.addEventListener("click", function() {
    this.parentElement.style.backgroundColor = "white";
    this.parentElement.style.scale = "2";
    redSound.play();
    // set pages body background to red gradient with transition
    document.getElementsByTagName("body")[0].classList.add("gradient-transition");
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, #f12711, #f5af19)";
    setTimeout(() => {
        this.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        this.parentElement.style.scale = "1";
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("body")[0].classList.remove("gradient-transition");
    }, 1000);
});

yellowButton.addEventListener("click", function() {
    this.parentElement.style.backgroundColor = "white";
    this.parentElement.style.scale = "2";
    yellowSound.play();
    // set pages body background to yellow gradient with transition
    document.getElementsByTagName("body")[0].classList.add("gradient-transition");
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, #f7ff00, #db36a4)";
    setTimeout(() => {
        this.parentElement.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
        this.parentElement.style.scale = "1";
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("body")[0].classList.remove("gradient-transition");
    }, 1000);
});

blueButton.addEventListener("click", function() {
    this.parentElement.style.backgroundColor = "white";
    this.parentElement.style.scale = "2";
    blueSound.play();
    // set pages body background to blue gradient with transition
    document.getElementsByTagName("body")[0].classList.add("gradient-transition");
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
    setTimeout(() => {
        this.parentElement.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
        this.parentElement.style.scale = "1";
        document.getElementsByTagName("body")[0].style.background = "";
        document.getElementsByTagName("body")[0].classList.remove("gradient-transition");
    }  , 1000);
});