
const numbersContainer = document.querySelector('.numbers-container');
const newBtn = document.querySelector(".start-btn");
const endText = document.querySelector(".end");

let totalNum = ['1', 'ㄱ', '2', 'ㄴ', '3', 'ㄷ', '4', 'ㄹ', '5', 'ㅁ', '6', 'ㅂ', '7', 'ㅅ', '8', 'ㅇ', '9', 'ㅈ', '10', 'ㅊ', '11', 'ㅋ', '12', 'ㅌ', '13', 'ㅍ', '14', 'ㅎ'];

let cards = [];
let availableCard = [];
let min = 0;
let sec = 0;
let time = 0;
let timer;


newGame();
 

function newGame() {
  numbersContainer.innerHTML = "";
  cards = createCard();
  shuffle(cards).forEach(card => numbersContainer.appendChild(card))


  for (let i = 0; i < cards.length; i++) {
    var x = document.getElementsByClassName('number')[i].id
    availableCard.push(Number(x))
  }
  
  timer = setInterval(function () {
  
    time++;

    min = Math.floor(time / 60);
    sec = time % 60;
    min = min % 60;

    var tm = min;
    var ts = sec;
    
    if (tm < 10) {
      tm = "0" + min;
    }
    if (ts < 10) {
      ts = "0" + sec;
    }
   console.log(ts);

  Array.from(cards).forEach(obj => obj.addEventListener('click', function (event) {
      const obj = Number(event.target.id);
      const min = Math.min(...availableCard);
      const idx = availableCard.indexOf(min);
  
      if (obj === min) {
        event.target.style.display = "none";
        availableCard.splice(idx, 1);
        
      } 
      if (availableCard.length === 0){
        const end = document.createElement("div");
        end.className = "ended";
        end.innerText = tm + " : " + ts;
        endText.appendChild(end)
        clearInterval(timer)
      }
   })
  );
}, 1000);
}

function createCard() {
  const tempArray = [];
  totalNum.forEach(function (item, index) {
    var div = document.createElement("div");
    div.id = index;
    div.innerHTML = item;
    div.className = 'number' ;
    numbersContainer.appendChild(div)
    tempArray.push(div)
  })
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








