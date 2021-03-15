const container = document.querySelector(".container");
const score = document.querySelector(".score")
const restartBtn = document.getElementById('start')
const nextBtn = document.getElementById('next')

let icons = ["fas fa-paper-plane", "fab fa-angellist", "fas fa-phone-volume", 
"fas fa-adjust", "fas fa-crop", "fas fa-dna", "fas fa-car-battery", "fas fa-chess-knight",
"far fa-clock", "far fa-compass"]
let currentIcons;
let array = [];
let correct = 0;
let question = 0;

createIcon();
randomQuestion();
restartBtn.addEventListener("click", function () {
  window.location.reload();
})

nextBtn.addEventListener("click", function () {
  if(icons.length > 0){
  createIcon();
  randomQuestion();
  addEvent();
  }else {
    console.log("ended")
    nextBtn.style.display = "none";
    container.innerHTML = "";
    restartBtn.classList.remove("hide")
  }
  
})
console.log(icons.length)

function createIcon() {

  container.innerHTML = "";

  const randomIndex = icons[Math.floor(Math.random() * icons.length)]
  currentIcons = randomIndex


  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      const icons = document.createElement("i")
      icons.className = currentIcons + " p0"
      icons.id = "0";
      container.appendChild(icons)
      icons.setAttribute("onclick", "addEvent(this)")
      array.push(icons)
    } else {
      const icons = document.createElement("i")
      icons.className = currentIcons + " p1"
      icons.id = "1";
      container.appendChild(icons)
      icons.setAttribute("onclick", "addEvent(this)")
      array.push(icons)
    }
  }

  const index1 = icons.indexOf(currentIcons)
  icons.splice(index1, 1)

}

function randomQuestion() {

  container.innerHTML = "";

  for(let i = 0; i < 5; i++){
    const randomIcons = array[Math.floor(Math.random() * array.length)]
    const currentIndex = randomIcons

    container.appendChild(currentIndex)

    const index2 = array.indexOf(currentIndex)
    array.splice(index2, 1)
  }

  question++;
  console.log(question)
  console.log(icons.length)
}

function addEvent(element) {
  const id = parseInt(element.id);
  const optionLen = container.children.length;
  if(id == 1) {
    correct++;
    element.style.color = "green";
    score.innerHTML = "score : " + correct
    for(let i = 0; i < optionLen; i++){
      container.children[i].style.pointerEvents = "none";
    }
  }
  else {
    
    element.style.color = "red";
  
    for (let i = 0; i< optionLen; i++){
      if(parseInt(container.children[i].id) == 1){
        container.children[i].style.color = "green";
      }
      container.children[i].style.pointerEvents = "none";
    }
}
}






