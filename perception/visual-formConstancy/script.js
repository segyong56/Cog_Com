
const imgDraggable = document.querySelector('.img-areas')
const areaDrop = document.querySelector('.drag-areas')
const nextBtn = document.getElementById('next')
const score = document.querySelector('.score')
const restartBtn = document.getElementById('restart')

const dragged = {
  el: null,
  id: null,
}

let question = [
  {
    q : ["furniture-21.png", "office-23.png", "office-25.png"],
    answer : [1, 2, 3]
  },
  {
    q : ["cooking-28.png", "office-26.png", "furniture-29.png"],
    answer : [3, 2, 1]
  },
  {
    q : ["cooking-32.png", "office-29.png", "office-31.png"],
    answer : [3, 2, 1]
  },
  {
    q : ["furniture-21.png", "office-23.png", "office-25.png"],
    answer : [1, 2, 3]
  }
]

let correct = 0;
let count = 0;

showQuestion(count);
restartBtn.style.display = "none";
restartBtn.addEventListener('click', function(){
  window.location.reload();
})

nextBtn.addEventListener('click', function (){
  if(count < question.length - 1){
  for(let i = 0; i < areaDrop.children.length; i++){
    areaDrop.children[i].innerHTML = "";
  }
  score.innerHTML = "";
  count++;
  showQuestion(count)
}else {
  areaDrop.innerHTML = "";
  imgDraggable.innerHTML = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "block";
  
}
})

function showQuestion (index) {
  imgDraggable.innerHTML = '<img class="img" draggable="true" src="' + question[index].q[0] + '" id="'+ question[index].answer[0] +'" alt="" ondragstart="drag(event)">' + 
  '<img class="img" draggable="true" src="' + question[index].q[1] + '" id="'+ question[index].answer[1]+ '" alt="" ondragstart="drag(event)">' +
  '<img class="img" draggable="true" src="' + question[index].q[2] + '" id="'+ question[index].answer[2] + '" alt="" ondragstart="drag(event)">';

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragover(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  if (data == ev.target.id){
    score.innerHTML = "correct!"
    ev.target.appendChild(document.getElementById(data));
  }
  var settime = setTimeout(function (){
    score.innerHTML = "";
  }, 400);
  console.log(data, ev.target.id)
}