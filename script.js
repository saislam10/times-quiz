var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var timerEL = document.querySelector('#timer');

function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    setTime();
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
}

var secondsLeft = 5;


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEL.textContent = secondsLeft + " seconds left to finish quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      

    }

  }, 1000);
}

// function scoreCounter () {
//   var score = 0;

//   for (var i = 0; )

//   if (secondsLeft > 0){
//     secondsLeft += score;

//   }

// }



function init() {
  displayState();
}

startBtn.addEventListener("click", function() {
  state = 'quiz';
  displayState();
});

quizTitle.addEventListener("click", function () {
  state = 'end';
  displayState();
});



init();

