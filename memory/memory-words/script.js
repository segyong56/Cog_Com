


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
    q: "사자",
    options: ['코끼리', '호랑이', '사자', '원숭이'],
    answer: 2
  },
  {
    q: "기린",
    options: ['뱀', '기린', '타조', '코끼리'],
    answer: 1
  },
  {
    q: "뱀",
    options: ['뱀', '기린', '타조', '코끼리'],
    answer: 0
  },
  {
    q: "타조",
    options: ['뱀', '기린', '타조', '코끼리'],
    answer: 2
  },
  {
    q: "가방",
    options: ['음식', '가방', '연필', '책상'],
    answer: 1
  },
  {
    q: "컴퓨터",
    options: ['세탁기', '프린트', '컴퓨터', '키보드'],
    answer: 2
  },
  {
    q: "침대",
    options: ['책상', '침대', '이불', '의자'],
    answer: 1
  },
  {
    q: "책",
    options: ['책', '노트', '연필', '책상'],
    answer: 0
  },
  {
    q: "떡볶이",
    options: ['김치찌개', '떡볶이', '순대', '김밥'],
    answer: 1
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
  const question = document.createElement("div");
  question.innerHTML = currentQuestion.q;
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

    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.className = "option";
    option.style.width = "180px";
    option.style.height = "180px";
    option.style.cursor = "pointer";
    optionContainer.appendChild(option)
    option.setAttribute("onclick", "getResult(this)");
  }
}

function getResult(element) {

  const id = parseInt(element.id);
  if (id == currentQuestion.answer) {
    element.style.color = "green";
    correctAnswers++;
    score.style.display = "flex";
    score.innerHTML = "score : " + correctAnswers + "/" + quiz.length;
  }
  else {

    element.style.color = "red";

    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].style.color = "green";
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