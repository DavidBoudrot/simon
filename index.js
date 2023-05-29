//global variables

var greenButton = document.getElementById("greenbtn");
var redButton = document.getElementById("redbtn");
var yellowButton = document.getElementById("yellowbtn");
var blueButton = document.getElementById("bluebtn");
var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");


var started = true;
var level = 0;
var isCorrect = true;
var gameOver = false;

var AIsequence = [];
var playerSequence = [];

function checkUserInput() {
    isCorrect = true;
    for (var i = 0; i < playerSequence.length; i++) {
      if (playerSequence[i] != AIsequence[i]) {
        isCorrect = false;
        break;
      }
    }
    if (isCorrect) {
      level++;
      document.getElementById("level-title").innerHTML = "Level " + level;
      playerSequence = [];
      setTimeout(AISequence()), 100;
      //generate new AI sequence and show it to the user
    } else {
      gameOver = true;
      document.getElementById("level-title").innerHTML =
        "Game Over, Press Any Key to Restart";
      flashLose(blueButton); // Trigger the flashLose function
    }
  }

function AISequence() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  AIsequence.push(randomNumber);
  for (var i = 0; i < AIsequence.length; i++) {
    if (AIsequence[i] === 1) {
      setTimeout(function () {
        flashGreen(greenButton);
      }, (i + 1) * 1200); // Incremental delay based on the index
    } else if (AIsequence[i] === 2) {
      setTimeout(function () {
        flashRed(redButton);
      }, (i + 1) * 1200);
    } else if (AIsequence[i] === 3) {
      setTimeout(function () {
        flashYellow(yellowButton);
      }, (i + 1) * 1200);
    } else if (AIsequence[i] === 4) {
      setTimeout(function () {
        flashBlue(blueButton);
      }, (i + 1) * 1200);
    }
  }
}

if (started) {
    
    //initial game start

    AISequence();


    greenButton.addEventListener("click", function() {
        flashGreen(this);
        playerSequence.push(1);
        checkUserInput();
        if (gameOver == true) {
          flashLose(this);
          console.log("game over");
        } else {
          flashGreen(this);
        }

    });

    redButton.addEventListener("click", function() {
        flashRed(this);
        playerSequence.push(2);
        checkUserInput();
        if (gameOver == true) {
          flashLose(this);
          console.log("game over");
        } else {
          flashRed(this);
        }

    });

    yellowButton.addEventListener("click", function() {
        flashYellow(this);
        playerSequence.push(3);
        checkUserInput();
        if (gameOver == true) {
          flashLose(this);
          console.log("game over");
        } else {
          flashYellow(this);
        }
    });

    blueButton.addEventListener("click", function() {
      playerSequence.push(4);
      checkUserInput();
      if (gameOver == true) {
        flashLose(this);
        console.log("game over");
      } else {
        flashBlue(this);

      }

      
        
        
    });


}



// Aesthetic functions
// These should be moved to a separate file but for now they're here

function updateBackground(angle, targetColor1, targetColor2) {
  const overlay = document.querySelector(".gradient-overlay");
  overlay.style.backgroundImage = `linear-gradient(${angle}deg, ${targetColor1}, ${targetColor2})`;
  overlay.classList.add("gradient-transition");

  setTimeout(() => {
    overlay.classList.remove("gradient-transition");
  }, 1000);
}

function flashGreen(button) {
  let parent = button.parentElement;
  parent.style.backgroundColor = "rgba(0, 255, 0, 1)";
  parent.style.scale = "2";
  parent.style.zIndex = "1";
  greenSound.play();
  updateBackground(90, "green", "lime");
  setTimeout(() => {
    parent.style.zIndex = "0";
    parent.style.scale = "1";
    parent.style.background = "rgba(0, 255, 0, 0.5)";
  }, 1000);
}

function flashRed(button) {
    let parent = button.parentElement;
    parent.style.backgroundColor = "white";
    parent.style.scale = "2";
    //make parent slightly transparent
    parent.style.background = "rgba(255, 0, 0, 1)";
    parent.style.zIndex = "1";
    redSound.play();
    updateBackground(90, "red", "orange");
    setTimeout(() => {
        parent.style.zIndex = "0";
        parent.style.scale = "1";
        parent.style.background = "rgba(255, 0, 0, 0.5)";
        
    }, 1000);
}

function flashYellow(button) {
    let parent = button.parentElement;
    parent.style.backgroundColor = "rgba(255, 255, 0, 1)";
    parent.style.scale = "2";
    parent.style.zIndex = "1";
    yellowSound.play();
    updateBackground(90, "yellow", "orange");
    setTimeout(() => {
        parent.style.zIndex = "0";
        parent.style.scale = "1";
        parent.style.background = "rgba(255, 255, 0, 0.5)";
    }, 1000);
}

function flashBlue(button) {
    let parent = button.parentElement;
    parent.style.backgroundColor = "rgba(0, 0, 255, 1)";
    parent.style.scale = "2";
    parent.style.zIndex = "1";
    blueSound.play();
    updateBackground(90, "cyan", "darkblue");
    setTimeout(() => {
        parent.style.zIndex = "0";
        parent.style.scale = "1";
        parent.style.background = "rgba(0, 0, 255, 0.5)";
    }, 1000);
}

function flashLose(button) {
  let parent = button.parentElement;
  parent.style.backgroundColor = "rgba(255, 0, 0, 1)";
  parent.style.scale = "20";
  parent.style.zIndex = "2";
}
