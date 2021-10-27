
const gridContainer = document.querySelector(".grid-container");
const imgCo = document.querySelector(".image-co")
const nextBtn = document.getElementById('next');
const gameText = document.querySelector('.game-text');
var gridColor = document.getElementById('colorPicker');
var colors = document.getElementsByClassName('jsColor');

const images = ["batman.jpg","superman.jpg","wonder.jpg"];
const grid = 121;
let availableImage = [];
let currentImage;


createGrid();
createImg();


function createGrid() {
  for (let i = 0; i < grid; i++){
    const div = document.createElement("div");
    div.id = i
    div.className = "grid";
    gridContainer.appendChild(div)
  }
}

function createImg() {

  const grids = document.querySelectorAll('.grid')
  grids.forEach((el) => {
    el.style.backgroundColor = "white";
  })
    const totalImage = images.length;
  for (let i = 0; i < totalImage; i++) {
    availableImage.push(images[i])
  }

  imgCo.innerHTML = '';

  const imagesIndex = availableImage[Math.floor(Math.random() * availableImage.length)]
  currentImage = imagesIndex
  const img = document.createElement("img")
  img.src = currentImage;
  img.className = "image";
  imgCo.appendChild(img)

  const index1 = availableImage.indexOf(imagesIndex);
  availableImage.splice(index1, 1);
}

function changeColor (event) {
  const color = event.target.style.backgroundColor;
  gridContainer.addEventListener ('click', function (x){
    console.log(x.target.className)
    if(x.target.className === 'grid'){
      x.target.style.backgroundColor = color;
    }
  });
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

nextBtn.addEventListener('click', createImg);
