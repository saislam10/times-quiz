var state = 'begin';
var beginPage = document.querySelector("#begin");
var questionPage = document.querySelector("#questions");
var initialsPage = document.querySelector("#initials");
var highScorePage = document.querySelector("#highScore")
var startBtn = document.querySelector("#starter");
var submitBtn = document.querySelector("#submit");
var restartBtn = document.querySelector('#highScore button')
var timerEL = document.querySelector('#timer');
var questionEl = document.querySelector("#question");
var secondsLeft = 30;
var score = document.querySelector('#score');
var userName = document.querySelector('#name')
var currentIndex = 0;

var questions = [
  {
    title: "What is the format called that is used for storing and transporting data?",
    answers: [
      "Json",
      "HTML",
      "CSS",
      "Java",
    ],
    correct: 0
  },
  {
    title: "What is the default behavior called that is used to move declarations to the top of the current scope??",
    answers: [
      "Jumping",
      "Sorting",
      "Hoisting",
      "Looping",

    ],
    correct: 2
  },
  {
    title: "In JavaScript, what element is used to store multiple values in a single variable?",
    answers: [
      "Functions",
      "Variables",
      "Parsing",
      "Arrays",
    ],
    correct: 3
  },
  {
    title: "What is the element used and hidden in code that explains things and makes the content more readable?",
    answers: [
      "Code",
      "Notes",
      "Quotes",
      "Comments",
    ],
    correct: 3
  }
];

function pageDisplay() {
  if (state === 'begin') {
    beginPage.style.display = 'flex';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'none';
  }
  if (state === 'questions') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'flex';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'none';
  }
  if (state === 'initials') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'flex';
    highScorePage.style.display = 'none';
    score.textContent = "Your score: " + secondsLeft;
  }
  if (state === 'highScore') {
    beginPage.style.display = 'none';
    questionPage.style.display = 'none';
    initialsPage.style.display = 'none';
    highScorePage.style.display = 'flex';
  }
}

questionEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.type === 'submit') {
    if (!(element.textContent === questions[currentIndex].answers[questions[currentIndex].correct])) {
      secondsLeft -= 3;
    }
    currentIndex++;
    if (currentIndex === questions.length) {
      state = "initials";
      pageDisplay();
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

function highScoreSaver() {
  var highScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
  var leaderboard = {
    initials: userName.value,
    score: secondsLeft,
  }
  highScores.push(leaderboard);
  var scoresString = JSON.stringify(highScores);
  window.localStorage.setItem("leaderboard", scoresString);
  displayHighScores();
}

function displayHighScores() {
  var items = JSON.parse(localStorage.getItem("leaderboard")) || [];
  for (var i = 0; i < items.length; i++) {
    var dlEl = document.createElement("dl");
    var dtEl = document.createElement("dt");
    var ddEl = document.createElement("dd");
    dlEl.appendChild(dtEl);
    dlEl.appendChild(ddEl);
    dtEl.textContent = items[i].initials;
    ddEl.textContent = items[i].score;
    document.getElementById("scores").appendChild(dlEl);
  }
}
function timer() {
  var timerInterval = setInterval(function () {
    if (state != "questions") {
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

submitBtn.addEventListener("click", function () {
  state = 'highScore';
  pageDisplay();
  timer();
  highScoreSaver();
});

restartBtn.addEventListener("click", function () {
  state = 'begin';
  currentIndex = 0;
  secondsLeft = 30;
  pageDisplay();
});

init(); 