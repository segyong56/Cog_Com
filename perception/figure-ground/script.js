const container = document.querySelector(".container")
const questionBox = document.querySelector(".question")
const nextBtn = document.getElementById('next')
const restartBtn = document.getElementById('start')

let icons = [
  {
    q : ["fruits.png","fruits1.png","fruits2.png", "fruits3.png", "banana.png"],
    option : ["diamond.png", "fruits3.png", "helicopter.png", "teapot.png" ]
  },
  {
    q : ["airplane.png","truck.png","helicopter.png","paperplane.png","teapot.png"],
    option : ["teapot.png", "paperplane.png", "airplane.png", "cut.png"]
  },
  {
    q : ["pencil.png","tools1.png","glassess.png","cut.png","spoon.png"],
    option : ["cut.png", "tools1.png", "camera.png", "clock.png"]
  },
  {
    q : ["gabage.png","milk.png","camera.png","teapot.png","music.png"],
    option : ["milk.png","teapot.png", "camera.png", "phone.png" ]
  },
  {
    q : ["bottle.png","phone.png","crown.png","clock.png","umbella.png"],
    option : ["umbella.png", "house.png", "start.png", "heart.png"]
  },
  {
    q : ["house.png","start.png","heart.png","puzzle.png","bulb.png"],
    option : ["start.png", "heart.png", "puzzle.png", "truck.png" ]
  },
  {
    q : ["tools2.png","tools4.png","tools5.png","tools3.png","tools6.png"],
    option : ["tools3.png", "tools1.png", "tools5.png", "truck.png" ]
  }
]

let count = 0;
let currentOption;
let array3 = [];
let array1 = [];
let array2 = [];

showQuestion();
showOption();
console.log(array3)
let array = [
  ...array3[0],
  ...array3[1],
  ...array3[2],
  ...array3[3],
  ...array3[4]
]

restartBtn.style.display = "none";
restartBtn.addEventListener("click", function() {
  window.location.reload();
})

nextBtn.addEventListener("click", function(){
  count++;
  if(count < icons.length){
  showQuestion();
  showOption();
  array3.splice(0, 5)
  array = [
    ...array3[0],
    ...array3[1],
    ...array3[2],
    ...array3[3],
    ...array3[4]
  ]
  questionBox.classList.remove('disable')
} else {
  container.innerHTML = "";
  questionBox.innerHTML = ""; 
  restartBtn.style.display = "flex";
  console.log("ended")
}
})


function showQuestion () {

  container.innerHTML = "";

  const queLen = icons[count].q.length

  for(let i = 0; i < queLen; i++){
    array2.push(icons[count].q[i])
  }
  
  for(let i = 0; i < 5; i++){
  const currentque = array2[Math.floor(Math.random() * array2.length)]

  const index2 = array2.indexOf(currentque)
  array2.splice(index2, 1)
  
  const que_2 = document.createElement("div")
  que_2.innerHTML = `<img src="./image/${currentque}" alt="" class="img${[i]}">`
  container.appendChild(que_2)
 }

 for(let i = 0; i < 5; i++){
   array3.push(container.children[i].innerHTML.match(/src="([^">]+)/g))
 }
}


function showOption () {

  questionBox.innerHTML = "";

  const optionLen = icons[count].option.length

  for(let i = 0; i < optionLen; i++){
    array1.push(icons[count].option[i])
  }

  for(let i = 0; i < optionLen; i++){
  const randomOption = array1[Math.floor(Math.random() * array1.length)]
  currentOption = randomOption
  const index1 = array1.indexOf(randomOption)
  array1.splice(index1, 1)

  const que_1 = document.createElement("div")
  que_1.innerHTML = `<img src="./image/${currentOption}" alt="dd" class = "option">`;
  que_1.className = "que_1"
  que_1.setAttribute("onclick", "checkAnswer(this)")
  questionBox.appendChild(que_1)
 }
}

function checkAnswer(answer){

  var str = answer.innerHTML
  var getAnswer = str.match(/src="([^">]+)/g)
  var checked = array.includes(getAnswer[0])
 
  if(checked == true){
    console.log("correct")
    answer.style.boxShadow = "none";
    answer.style.border = "4px solid green"
    document.querySelector('.correct').classList.add('animation')
  } else {
    answer.style.border = "4px solid red"
    questionBox.classList.add('disable')
    document.querySelector('.incorrect').classList.add('animation')
  }

  var remove = setTimeout(() => {
    document.querySelector('.incorrect').classList.remove('animation')
    document.querySelector('.correct').classList.remove('animation')
  }, 500);


}