var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var nextButton = document.querySelector('#next')
var timerEL = document.querySelector('#timer');
var question = document.querySelector('#quiz #question');
var questionNumber = 0;
var questionEl = document.querySelector("#question");
var questionsArray = [];
var secondsLeft = 30;

function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
    questionBank();
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
}

function questionBank () {

  var currentIndex = 0; // current question
  var questions = [
    {
      title: "What's 1 + 0?",
      answers: [
        "One",
        "Two", // index 1 of array is the correct answer 
        "Three",
        "Four",
      ],
      correct: 0 // index of correct answer
    },
    {
      title: "What's 1 + 1?",
      answers: [
        "four",
        "Two",
        "Three",
        "Four",
        // index 2 of array is the correct answer 
      ],
      correct: 1 // index of correct answer
    },
    {
      title: "What's 1 + 2?",
      answers: [
        "One",
        "Two", // index 1 of array is the correct answer 
        "Three",
        "Four",
      ],
      correct: 2 // index of correct answer
    },
    {
      title: "What's 1 + 3?",
      answers: [
        "One",
        "Two", // index 1 of array is the correct answer 
        "Three",
        "Four",
      ],
      correct: 3 // index of correct answer
    }
  ];

  var listOfAnswers = questions[currentIndex].answers;

  for (var i = 0; i < listOfAnswers.length; i++) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = listOfAnswers[i];
    // questionEl.innerHTML = "";
    questionEl.appendChild(buttonEl);
  }
}



function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEL.textContent = secondsLeft + " seconds left to finish quiz.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);


    }

  }, 1000);
}



function init() {
  displayState();
  
}

startBtn.addEventListener("click", function () {
  state = 'quiz';
  displayState();
  setTime();
});

nextButton.addEventListener("click", function (event) {
  var position = 0;
  var element = event.target;
  state = 'end';
  if (element.matches('#question')) {
    position++;
    questionEl.innerHTML ="";
    if (position < questionBank(questions).length) {
      questionBank();
    } else {
      state = 'end';
    }
  }
  displayState();
});

init();

