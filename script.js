var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var timerEL = document.querySelector('#timer');
var question = document.querySelector ('#quiz #question');
var questionNumber = 0;
var questionsArray = [];

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

function displayQ () {
  var answer1El = document.querySelector('#answer1');
  var answer2El = document.querySelector('#answer2');
  var answer3El = document.querySelector('#answer3');
  var answer4El = document.querySelector('#answer4');

  answer1El.textContent = questionsArray[currentQuestion].answer[0];
  answer2El.textContent = questionsArray[currentQuestion].answer[1];
  answer3El.textContent = questionsArray[currentQuestion].answer[2];
  answer4El.textContent = questionsArray[currentQuestion].answer[3];

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

