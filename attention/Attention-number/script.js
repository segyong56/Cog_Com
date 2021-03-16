
const numbersContainer = document.querySelector('.numbers-container');
const endText = document.querySelector(".end");

let totalNum = 20;

let cards = [];
let availableCard = [];
let min = 0;
let sec = 0;
let time = 0
let timer;
let repeatGame = 0;

let repeat = setInterval(() => {
    if (availableCard.length === 0){
        newGame();
        totalNum += 2;
      }
   }, 500);

function gameTimer () {
  timer = setInterval(function(){
  
    time++;

    min = Math.floor(time/60);
    sec = time%60;
    min = min%60;

    var tm = min;
    var ts = sec;
    
    if(tm < 10){
    tm = "0" + min;
    }
    if(ts < 10){
    ts = "0" + sec;
    }
  },1000);
}

function newGame() {
  numbersContainer.innerHTML = "";
  cards = createCard();
  shuffle(cards).forEach(card => numbersContainer.appendChild(card))


  for (let i = 0; i < cards.length; i++) {
    var x = document.getElementsByClassName('number')[i].id
    availableCard.push(Number(x))
  }

  Array.from(cards).forEach(obj => obj.addEventListener('click', function (event) {
      const obj = Number(event.target.id);
      const min = Math.min(...availableCard);
      const idx = availableCard.indexOf(min);
      if (obj === min) {
        event.target.style.display = "none";
        availableCard.splice(idx, 1);
      }
   })
  );

repeatGame++;
if (repeatGame === 7){
  clearInterval(repeat)
  numbersContainer.innerHTML = "";
  const end = document.createElement("div");
   end.className = "ended";
   end.innerHTML = "perfect!"
   endText.append(end)
  }
}


function createCard() {
  const tempArray = [];
  for (let i = 1; i <= totalNum; i++) {
    var div = document.createElement("div");
    div.id = i;
    div.innerText = i;
    div.className = 'number' ;
    numbersContainer.appendChild(div)
    tempArray.push(div)
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









