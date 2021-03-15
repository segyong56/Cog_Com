
const imageContainer = document.querySelector(".image-container");
const gameText = document.getElementById('game-text');
const resultBox = document.querySelector(".result-box");
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart')



const options = [
  { option: ["1-1.jpg", '1-2.jpg', '1-3.jpg', '1-4.jpg', '1-5.jpg', '1-6.jpg']},
  { option: ["2-1.jpg", '2-2.jpg', '2-3.jpg', '2-4.jpg', '2-5.jpg', '2-6.jpg']}
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
  if (optionCount === options.length) {
    quizOver();
    restartBtn.style.display = "block";
    nextBtn.classList.add('hide')
    gameText.classList.add('hide2')
  } else {
    gameText.classList.add('hide2')
    setGame();
  }
})

restartBtn.addEventListener('click', function(){
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

