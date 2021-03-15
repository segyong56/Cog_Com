
const cardContainer = document.getElementById('container');
const cardBoard = document.getElementById('card-board');
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart-btn')

const setCard = 16;
let position = [];
let isPlaying = false;
let correct = 0;

function setGame() {
  const resultText = document.querySelector(".text")
  resultText.style.display = "none";
  isPlaying = true;
  setBoard();
  cardBoard.innerHTML = '';
  position = setBoard();
  position.forEach(card => cardBoard.appendChild(card))
  shuffle(position).forEach(card => cardBoard.appendChild(card))
  setTimeout(() => {
    position.forEach(card => {
      card.style.backgroundColor = "white";
    })
  }, 5000);

  Array.from(position).forEach(card => card.addEventListener("click", () => {
    let obj = event.target.id
    if (obj === "0"){
      event.target.style.backgroundColor = "yellow";
      correct++;
      if(correct == 4){
        resultText.style.display = "flex";
        resultText.innerHTML = "good! perfect!";
      }
    }
    console.log(correct)
  })
);
}

function setBoard () {
 const tempArray = [];
  for (let i = 0; i < setCard; i++) {
    if (i < 4) {
      const div2 = document.createElement("div");
      div2.id = "0";
      div2.classList.add('card')
      div2.style.backgroundColor = "yellow";
      cardBoard.appendChild(div2)
      tempArray.push(div2)
    } else {
      const div3 = document.createElement("div")
      div3.id = i;
      div3.classList.add('card')
      cardBoard.appendChild(div3)
      tempArray.push(div3)
    }
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


startBtn.addEventListener('click', () => {
  cardContainer.classList.remove('hide')
  startBtn.style.display = "none";
  setGame();
});

restartBtn.addEventListener('click', () => {
  setGame();
  correct = 0;
})

function changeColor (event) {
  const color = event.target.style.backgroundColor;
  grid.addEventListener ('click', function (x){
    if(x.target.nodeName === 'TD'){
      x.target.style.backgroundColor = color;
    }

  });

}
