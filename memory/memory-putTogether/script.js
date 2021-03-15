
const cardBox = document.querySelector('.card-box')
const nameBox = document.querySelector('.name-box')
const dragArea = document.querySelector('.drag-area')
const nextBtn = document.getElementById('next')
const restartBtn = document.getElementById('restart')

let array = [
    {
        q:["1-1-2.jpg", "1-2-2.jpg", "1-3-2.jpg", "1-4-2.jpg"],
        correct: ["케익", "아이스크림", "우유", "빵"],
        nameTag: ["우유", "빵", "케익", "아이스크림"]
    },
    {
        q:["2-1-2.jpg", "2-2-2.jpg", "2-3-2.jpg", "2-4-2.jpg"],
        correct: ["사자", "코끼리", "기린", "호랑이"],
        nameTag: ["사자", "호랑이", "코끼리", "기린"]
    },
    {
        q:["3-1.jpg", "3-2.jpg", "3-3.jpg", "3-4.jpg"],
        correct: ["시금치", "양배추", "호박", "토마토"],
        nameTag: ["토마토", "시금치", "양배추", "호박"]
    },
    {
        q:["4-1.jpg", "4-2.jpg", "4-3.jpg", "4-4.jpg"],
        correct: ["자두", "딸기", "포도", "키위"],
        nameTag: ["포도", "딸기", "자두", "키위"]
    },
    {
        q:["5-1.jpg", "5-2.jpg", "5-3.jpg", "5-4.jpg"],
        correct: ["크레파스", "색연필", "스케치북", "연필"],
        nameTag: ["스케치북", "색연필", "연필", "크레파스"]
    },
    {
        q:["6-1.jpeg", "6-2.jpeg", "6-3.jpeg", "6-4.jpeg"],
        correct: ["수박", "참외", "귤", "체리"],
        nameTag: ["참외", "수박", "체리", "귤"]
    },
    {
        q:["7-1.jpg", "7-2.jpg", "7-3.jpg", "7-4.jpg"],
        correct: ["가방", "지우개", "필통", "노트"],
        nameTag: ["노트", "필통", "지우개", "가방"]
    }
]
let currentCard;
let question = 0;
let correct = 0;

nextBtn.addEventListener('click', function(){
    console.log(question)
if(array.length > 0){
    showQestion();
    showName();
    nextBtn.classList.add('hide')
}else {
    console.log("ended")
    for(let i = 0; i < nameBox.children.length; i++){
    nameBox.children[i].innerHTML = "";
    }
    nextBtn.classList.add('hide')
    restartBtn.classList.remove('hide1')
}
})

restartBtn.addEventListener('click', function(){
    window.location.reload();
})

function showQestion(){

    cardBox.innerHTML = "";

    const arrayRandom = array[Math.floor(Math.random() * array.length)]
    currentCard = arrayRandom
    const index1 = array.indexOf(currentCard)
    array.splice(index1, 1)
    
    for(let i = 0; i < 4; i++){
    const name_img = document.createElement("img")
    name_img.src = currentCard.q[i]
    name_img.className = "card";
    cardBox.appendChild(name_img)
    }
    
    question++;
}

function showName() {
    dragArea.innerHTML = '<div class="drag" id="drop0">' + currentCard.nameTag[0] + '</div>' + 
    '<div class="drag" id="drop1">' + currentCard.nameTag[1] + '</div>' + 
    '<div class="drag" id="drop2">' + currentCard.nameTag[2] + '</div>' +
    '<div class="drag" id="drop3">' + currentCard.nameTag[3] + '</div>';
    for(let i = 0; i < dragArea.children.length; i ++){
        dragArea.children[i].setAttribute("draggable", "true")
        dragArea.children[i].setAttribute("ondragstart", "drag(event)")
    }

    nameBox.innerHTML = '<div class="' + currentCard.correct[0] +'" id="div0"></div>' +
    '<div class="' + currentCard.correct[1] +'" id="div1"></div>' +
    '<div class="' + currentCard.correct[2] +'" id="div2"></div>' +
    '<div class="' + currentCard.correct[3] +'" id="div3"></div>';

    for(let i = 0; i < nameBox.children.length; i++){
        nameBox.children[i].setAttribute("ondrop", "drop(event)")
        nameBox.children[i].setAttribute("ondragover", "allowDrop(event)")
    }
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  const nameClass = ev.target.className
  const nameText = ev.target.textContent
  const score = document.querySelector('.score')

  if(nameClass == nameText){
      correct++;
      score.innerHTML = "perfect! " + "score : " + correct;
      console.log("correct")
  } else {
      score.innerHTML = "wrong! " + "score : " + correct;
  }
  var repeat = setTimeout(() => {
      score.innerHTML = "score : " + correct;
      
  }, 500);

  const dragAreaLen = dragArea.children.length
  if(dragAreaLen == 0){
      nextBtn.classList.remove('hide')
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

showQestion();
showName();


