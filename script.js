var state = 'begin';

var beginPage = document.querySelector("#begin");
var questionPage = document.querySelector("#questions");
var initialsPage = document.querySelector("#initials");
var highScorePage = document.querySelector ("#highScore")
var startBtn = document.querySelector("#starter");
var submitBtn = document.querySelector("#submit");
var timerEL = document.querySelector('#timer');
var question = document.querySelector('#questions #question');
var questionEl = document.querySelector("#question");
var secondsLeft = 30;
var score = document.querySelector('#score');
var userName = document.querySelector('#name')

function pageDisplay() {
  if (state === 'begin') {
    beginPage.style.display = 'block';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'none';
  }
  if (state === 'questions') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'block';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'none';
  }
  if (state === 'initials') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'block';
    highScorePage.style.display = 'none';
    score.textContent = "Your score: " + secondsLeft;
  }
  if (state === 'highScore') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'block';
  }
}

var currentIndex = 0; 
var questions = [
  {
    title: "What's 1 + 0?",
    answers: [
      "One",
      "Two", 
      "Three",
      "Four",
    ],
    correct: 0 
  },
  {
    title: "What's 1 + 1?",
    answers: [
      "One",
      "Two",
      "Three",
      "Four",
      
    ],
    correct: 1 
  },
  {
    title: "What's 1 + 2?",
    answers: [
      "One",
      "Two", 
      "Three",
      "Four",
    ],
    correct: 2 
  },
  {
    title: "What's 1 + 3?",
    answers: [
      "One",
      "Two", 
      "Three",
      "Four",
    ],
    correct: 3 
  }
];

questionEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.type === 'submit') {
    if (!(element.textContent === questions[currentIndex].answers[questions[currentIndex].correct])) {
      secondsLeft -= 3;
    }
    currentIndex++;
    if (currentIndex === questions.length) {
      state = "initials"
      pageDisplay()
    }
    else {
      displayQuestions();
    }
  }

})

function displayQuestions() {
  questionEl.innerHTML = "";
  var questionTitle = document.createElement('h2');
  questionTitle.textContent = questions[currentIndex].title;
  questionEl.appendChild(questionTitle);
  for (var i = 0; i < questions[currentIndex].answers.length; i++) {
    var questionButton = document.createElement('button');
    questionButton.textContent = questions[currentIndex].answers[i];
    questionEl.appendChild(questionButton);
  }
}

function highScoreSaver () {
  var highScores = JSON.parse(localStorage.getItem("leaderboard")) || [];

  var leaderboard = {
    initials: userName.value,
    score: score
  }
  highScores.push(leaderboard);
  var scoresString = JSON.stringify(highScores);
  window.localStorage.setItem("leaderboard", scoresString);
  document.getElementById("scores").textContent = scoresString;
}

function timer() {
  var timerInterval = setInterval(function () {
    if (state != "questions"){
      clearInterval(timerInterval);
    }
    secondsLeft--;
    timerEL.textContent = secondsLeft + " seconds left to finish quiz.";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function init() {
  pageDisplay()
}

startBtn.addEventListener("click", function () {
  state = 'questions';
  pageDisplay();
  timer();
  displayQuestions();

});

submitBtn.addEventListener("click", function(){
  state = 'highScore';
  pageDisplay();
  // highScoreSaver();
});

init(); 