
const imgContainer = document.querySelector(".image-container");
const nextBtn = document.getElementById('next');
const gameText = document.querySelector('.game-text');

let tiles = [];
const imgCount = 16;
let isPlaying = false;
const dragged = {
  el: null,
  class: null,
  index: null,
}

setGame();


function checkState() {
  const currentList = [...imgContainer.children];
  const unMatchedList = currentList.filter((child, index) => Number(child.getAttribute("data-index")) !== index)
  if (unMatchedList.length === 0) {
    gameText.classList.remove('hide')
  }
}

function setGame() {
  isPlaying = true;
  imgContainer.innerHTML = "";
 
  tiles = createImageTiles();
  tiles.forEach(tile => imgContainer.appendChild(tile))
  setTimeout(() => {
    imgContainer.innerHTML = "";
    shuffle(tiles).forEach(tile => imgContainer.appendChild(tile))
  }, 5000)
}

function createImageTiles() {
  const tempArray = [];
  Array(imgCount).fill().forEach((_, i) => {
    const li = document.createElement("li");
    li.setAttribute('data-index', i)
    li.classList.add('list' + i)
    li.setAttribute('draggable', 'true');
    imgContainer.appendChild(li)
    tempArray.push(li)
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

imgContainer.addEventListener('dragstart', e => {
  
  const obj = e.target
  dragged.el = obj;
  dragged.class = obj.className;
  dragged.index = [...obj.parentNode.children].indexOf(obj);
})

imgContainer.addEventListener('dragover', e => {
  e.preventDefault()
})

imgContainer.addEventListener('drop', e => {
  
  const obj = e.target;
  if (obj.className !== dragged.class) {
    let originPlace;
    let isLast = false;

    if (dragged.el.nextSibling) {
      originPlace = dragged.el.nextSibling
    } else {
      originPlace = dragged.el.previousSibling
      isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj);
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
    isLast ? originPlace.after(obj) : originPlace.before(obj)
  }
  checkState();
})


nextBtn.addEventListener('click', () =>{
  location.reload();
})


