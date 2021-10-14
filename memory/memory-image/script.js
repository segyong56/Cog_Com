


const startBtn = document.getElementById('start');
const nextBtn = document.getElementById('next');
const questionBox = document.querySelector('.question-box');
const optionContainer = document.querySelector('.answer-box');
const score = document.querySelector('.score')
const timeH = document.getElementById('timer');

let timeSecond = 3;
let countDown;
let availableQuestions = [];
let currentQuestion;
let quesitonCounter = 0;
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


const quiz = [
  {
    q: "qeustion1.jpg",
    options: ['1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg'],
    answer: 2
  },
  {
    q: "question2.jpg",
    options: ['2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg'],
    answer: 0
  },
  {
    q: "ani3.jpeg",
    options: ['ani1.jpeg', 'ani2.jpeg', 'ani3.jpeg', 'ani4.jpeg'],
    answer: 2
  },
  {
    q: "ani6.jpeg",
    options: ['ani5.jpeg', 'ani6.jpeg', 'ani7.jpeg', 'ani8.jpeg'],
    answer: 1
  },
  {
    q: "ani9.jpeg",
    options: ['ani9.jpeg', 'ani10.jpeg', 'ani11.jpeg', 'ani12.jpeg'],
    answer: 0
  },
  {
    q: "car4.jpeg",
    options: ['car1.jpeg', 'car2.jpeg', 'car3.jpeg', 'car4.jpeg'],
    answer: 3
  },
  {
    q: "bug4.jpeg",
    options: ['bug1.jpeg', 'bug2.jpeg', 'bug3.jpeg', 'bug4.jpeg'],
    answer: 3
  },
  {
    q: "trans3.jpeg",
    options: ['trans1.jpeg', 'trans2.jpeg', 'trans3.jpeg', 'trans4.jpeg'],
    answer: 2
  }
]

startBtn.addEventListener('click', () => {
  correctAnswers = 0;
  timeSecond = 3;
  quesitonCounter = 0;
  score.style.display = "none";
  startBtn.style.display = "none";
  questionBox.classList.remove('hide')
  setAvailableQuestions();
  getNewQuestion();
  timerStart();
});

nextBtn.addEventListener('click', () => {
  optionContainer.classList.add("hide2")
  questionBox.classList.remove("hide")
  nextBtn.classList.add("hide3")
  if (quesitonCounter === quiz.length) {
    startBtn.style.display = "block";
    nextBtn.classList.add('hide3')
    questionBox.classList.add("hide")
  } else {
    getNewQuestion();
    console.log(availableQuestions.length)
    timeSecond = 3;
    clearInterval(countDown)
    timerStart(timeSecond);
  }
});

function timerStart() {

  timeH.innerHTML = timeSecond;

  countDown = setInterval(() => {
    if (timeSecond > 0) {
      timeSecond--;
      timeH.innerHTML = timeSecond;
    } else {
      endTime();
      clearInterval(countDown)
    }
  }, 1000)

  function endTime() {
    questionBox.classList.add('hide')
    optionContainer.classList.remove('hide2')
    nextBtn.classList.remove('hide3')
    timeH.innerHTML = getNewOption();
  }
}



function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i])
  }
}

function getNewQuestion() {

  questionBox.innerHTML = '';

  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex
  const question = document.createElement("img");
  question.src = `./image/${currentQuestion.q}`;
  question.className = "question";
  questionBox.appendChild(question)

  const index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);

  quesitonCounter++

}

function getNewOption() {
  const optionLen = currentQuestion.options.length
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i)
  }

  optionContainer.innerHTML = '';

  for (let i = 0; i < optionLen; i++) {
    const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

    const index2 = availableOptions.indexOf(optionIndex);

    availableOptions.splice(index2, 1);

    const option = document.createElement("img");
    option.src = `./image/${currentQuestion.options[optionIndex]}`;
    option.id = optionIndex;
    option.className = "option" + i;
    option.style.width = "230px";
    option.style.height = "250px";
    option.style.cursor = "pointer";
    optionContainer.appendChild(option)
    option.setAttribute("onclick", "getResult(this)");
  }
}

function getResult(element) {

  const id = parseInt(element.id);
  if (id == currentQuestion.answer) {
    element.style.border = "3px solid green";
    correctAnswers++;
    score.style.display = "flex";
    score.innerHTML = "score : " + correctAnswers;
  }
  else {

    element.style.border = "3px solid red";

    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].style.border = "3px solid green";
      }
    }
    attempt++;
  }
  attempt++;
  unclickableOption();
}

function unclickableOption() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].style.pointerEvents = "none";
  }
}