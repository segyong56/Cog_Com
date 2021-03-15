
const container = document.querySelector('.container')
const dragArea = document.querySelector('.drop-area')

let food = [
  "fas fa-apple-alt food", "fas fa-pizza-slice food", "fas fa-carrot food",
  "fas fa-ice-cream food", "fas fa-pepper-hot food"]

let vechicle = [
  "fas fa-bicycle vechicle", "fas fa-bus vechicle",
  "fas fa-car vechicle", "fas fa-plane vechicle", "fas fa-motorcycle vechicle", "fas fa-helicopter vechicle"]
  
let animal = ["fas fa-horse animal", "fas fa-cat animal", "fas fa-dog animal", "fas fa-crow animal"]
   
let array = [];
const dragged = {
  el: null,
  id: null
}

function makeArray () {

  for (let i = 0; i < food.length; i++){
    const foodIcon = document.createElement("i")
    foodIcon.className = food[i]
    foodIcon.id = "icon"
    foodIcon.setAttribute("draggable", "true")
    array.push(foodIcon)
  }
  for (let i = 0; i < vechicle.length; i++){
    const vechicleIcon = document.createElement("i")
    vechicleIcon.className = vechicle[i]
    vechicleIcon.id = "icon"
    vechicleIcon.setAttribute("draggable", "true")
    array.push(vechicleIcon)
  }
  for (let i = 0; i < animal.length; i++){
    const animalIcon = document.createElement("i")
    animalIcon.className = animal[i]
    animalIcon.id = "icon"
    animalIcon.setAttribute("draggable", "true")
    array.push(animalIcon)
  }
}


makeArray();

function putRandom() {
  for(let i = 0; i < 15; i++){
    const randomIndex = array[Math.floor(Math.random() * array.length)]
    const index1 = array.indexOf(randomIndex)
    array.splice(index1, 1)
    document.body.appendChild(randomIndex)
  }
}

putRandom();

const iconI = document.getElementsByTagName('i')
console.log(iconI)
var moving = false;

for (let i = 0; i < 15; i++){
iconI[i].addEventListener("mousedown", initialClick, false);
if(i < 8){
  iconI[i].style.top = "100px"
  iconI[i].style.left = 80 * (i+5) + "px"
} else {
  iconI[i].style.top = "200px"
  iconI[i].style.left = 80 * (i-2) + "px"
}
}


function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

    
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);
}




