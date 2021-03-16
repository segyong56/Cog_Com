

const container = document.querySelector(".container");
const score = document.querySelector(".score")
const startBtn = document.getElementById('start');

let directions = ["up", "right", "left"];
let direction;
let correct = 0;
let repeat;
let create = 0;

startBtn.addEventListener("click", function(){
  create = 0;
  startBtn.style.display = "none";
  container.style.display = "flex";
  createArrows();
  repeat = setInterval (createArrows, 2000)
})

window.addEventListener("keydown", function(event){

  const moveArrow = document.getElementById('move-arrow')

  var key = document.getElementById(event.key)
  if (key){
    key.classList.add("pressed")
  }
  if(event.key == "ArrowLeft" && direction == "left"){
    moveArrow.style.display = "none";
    correct++;
  }
  if(event.key == "ArrowUp" && direction == "up"){
    moveArrow.style.display = "none";
    correct++;
  }
  if(event.key == "ArrowRight" && direction == "right"){
    moveArrow.style.display = "none";
    correct++;
  }
  console.log("correct :" + correct)
  score.innerHTML = "score : " + correct
});

window.addEventListener("keyup", function(event){
  var key = document.getElementById(event.key)
  if (key){
    key.classList.remove("pressed")
  }
});

function createArrows () {
   
  container.innerHTML = "";
  const getDirect = directions[Math.floor(Math.random() * 3)]
  direction = getDirect

  const arrow = document.createElement("i");
  arrow.classList.add("fas", `fa-arrow-circle-${direction}`, direction);
  arrow.id = "move-arrow"
  container.appendChild(arrow);

  create++;

  if(create == 15){
    container.style.display = "none";
    clearInterval(repeat)
    startBtn.style.display = "flex";
  }
  console.log(create)

}
