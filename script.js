// Selects element by class
var time = document.querySelector(".time");

// Selects element by id
var buttonEl = document.getElementById("button");

var secondsLeft = 10;

buttonEl.addEventListener("click", function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left till quiz ends.";

    if(secondsLeft === 0 || secondsLeft <0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
  quizQuestions();
  removeButton();
});

function removeButton() {
  var elem = document.getElementById('button');
  elem.parentNode.removeChild(elem);
 }

// Function to create and append colorsplosion image
function sendMessage() {
    console.log("Time's UP!");

}

function quizQuestions() {
  document.getElementById("main").textContent = "Hello World";
}