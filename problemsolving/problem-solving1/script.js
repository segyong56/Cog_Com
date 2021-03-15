
const imageContainer = document.querySelector(".image-container");
const gameText = document.getElementById('game-text');
const resultBox = document.querySelector(".result-box");
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart')


const options = [
  { option: ["3-1.jpg", '3-2.jpg', '3-3.jpg', '3-4.jpg', '3-5.jpg', '3-6.jpg']},
  { option: ["4-1.jpg", '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg', '4-6.jpg']},
  { option: ["5-1.jpg", '5-2.jpg', '5-3.jpg', '5-4.jpg', '5-5.jpg', '5-6.jpg']}
]

let availableOptions = [];
let currentQuestion;
let tiles = [];
const dragged = {
  el: null,
  class: null,
  index: null,
}
let optionCount = 0;

restartBtn.style.display = "none";

startBtn.addEventListener('click', () => {
  startBtn.style.display = "none";
  nextBtn.classList.remove('hide')
  setAvailableOption();
  setGame();
})


nextBtn.addEventListener('click', () => {
  if (optionCount == options.length) {
    quizOver();
    restartBtn.style.display = "block"
    nextBtn.classList.add('hide')
    gameText.classList.add('hide2')
  } else {
    //optionCount++;
    console.log(optionCount)
    gameText.classList.add('hide2')
    setGame();
  }
})

restartBtn.addEventListener("click", () => {
  window.location.reload();
})


function setAvailableOption() {
const optionsLen = options.length;
for (let i = 0; i < optionsLen; i++) {
  availableOptions.push(options[i])
}
}

function getOptions() {
imageContainer.innerHTML = '';

const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
currentQuestion = optionIndex
const index2 = availableOptions.indexOf(optionIndex);
availableOptions.splice(index2, 1);

optionCount++;

const tempArray = [];
const optionLen = currentQuestion.option.length;
for (let i = 0; i < optionLen; i++) {
  const option = document.createElement("img");
  option.src = currentQuestion.option[i];
  option.setAttribute('data-index', i)
  option.setAttribute('draggable', 'true');
  option.className = "option" + i;
  imageContainer.appendChild(option)
  tempArray.push(option)
}
return tempArray;

}

function shuffle(array) {
  let index = array.length - 1;
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
    index--;
  }
  return array;
}

function setGame() {
  tiles = getOptions();
  tiles.forEach(tile => imageContainer.appendChild(tile))
  setTimeout (() => {
    imageContainer.innerHTML = "";
    shuffle(tiles).forEach(tile => imageContainer.appendChild(tile))
  }, 1000)
}


function checkState() {
  const currentList = [...imageContainer.children];
  const unMatchedList = currentList.filter((child, index) => Number(child.getAttribute("data-index")) !== index)
  if (unMatchedList.length === 0) {
    gameText.classList.remove('hide2')
  }
}

imageContainer.addEventListener('dragstart', e => {
  
  const obj = e.target
  dragged.el = obj;
  dragged.class = obj.className;
  dragged.index = [...obj.parentNode.children].indexOf(obj);
})

imageContainer.addEventListener('dragover', e => {
  e.preventDefault()
})

imageContainer.addEventListener('drop', e => {
  const obj = e.target;
  if (obj.className !== dragged.class) {
    let originPlace;
    let isLast = false;

    if (dragged.el.nextSibling) {
      originPlace = dragged.el.nextSibling
    } else {
      originPlace = dragged.el.previousSibling
      isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj);
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    isLast ? originPlace.after(obj) : originPlace.before(obj)
  }
  checkState();
})

function quizOver() {
  const over = document.createElement("div")
  over.className = "quiz-over";
  over.innerHTML = "문제가 끝났습니다."
  resultBox.appendChild(over)
}

