var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var nextButton = document.querySelector('#next')
var timerEL = document.querySelector('#timer');
var question = document.querySelector('#quiz #question');

var questionNumber = 0;
var questionsArray = [];
var secondsLeft = 5;

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

  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }

//   function questionBank() {
//     var allQuestions = [
//       {
//         question: "What's 1 + 0?",
//         answers: {
//           0: "one",
//           1: "two",
//           2: "three",
//           3: "four"
//         },
//         correct: 0
//       },

//       {
//         question: "What's 1 + 1?",
//         answers: {
//           0: "one",
//           1: "two",
//           2: "three",
//           3: "four"
//         },
//         correct: 1

//       },
//       {
//         question: "What's 1 + 2?",
//         answers: {
//           0: "one",
//           1: "two",
//           2: "three",
//           3: "four"
//         },
//         correct: 2

//       },
//       {
//         question: "What's 1 + 3?",
//         answers: {
//           0: "one",
//           1: "two",
//           2: "three",
//           3: "four"
//         },
//         correct: 3
//       }
//     ]
//     questionsArray.push(allQuestions);
//   }
//   questionBank();
// }

// function displayQ() {
//   var answer1El = document.querySelector('#Answer1');
//   var answer2El = document.querySelector('#Answer2');
//   var answer3El = document.querySelector('#Answer3');
//   var answer4El = document.querySelector('#Answer4');

//   answer1El.textContent = questionsArray[questionNumber].answers[0];
//   answer2El.textContent = questionsArray[questionNumber].answers[1];
//   answer3El.textContent = questionsArray[questionNumber].answers[2];
//   answer4El.textContent = questionsArray[questionNumber].answers[3];

// }


// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timerEL.textContent = secondsLeft + " seconds left to finish quiz.";

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);


//     }

//   }, 1000);
// }




// function scoreCounter () {
//   var score = 0;

//   for (var i = 0; )

//   if (secondsLeft > 0){
//     secondsLeft += score;

//   }

// }


// function displayEnd() {
//   questionsEl.innerHTML = "<h2>Fin</h2>";
// }

function init() {
  displayState();
}

startBtn.addEventListener("click", function () {
  state = 'quiz';
  displayState();
  setTime();
});

nextButton.addEventListener("click", function () {
  state = 'end';
  displayState();
});

// nextButton.addEventListener('click', function (event) {
//   var element = event.target;
//   if (element.matches('#Questions')) {
//     questionNumber++;
//     if (questionNumber < allQuestions.length) {
//       displayQ();
//     } else {
//       displayEnd();
//     }
//   }
// });



init();

