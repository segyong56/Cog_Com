
const gameContainer = document.querySelector('.container')
const startBtn = document.getElementById('start')
var container = $('#container');
var squareSize = 100;
var containerSize = 600;

let count = 0;
let repeat = 0

startBtn.addEventListener("click", function(){
  startBtn.style.display = "none";
  createDiv();
  clicked();
})

function createDiv (){

gameContainer.innerHTML = "";

for (var i = 0; i < 5; i++) {
  var foundSpace = false;

  while (!foundSpace) {
    // Generate random X and Y
    var randX = Math.floor(Math.random() * (containerSize - squareSize));
    var randY = Math.floor(Math.random() * (containerSize - squareSize));
    var hitsSquare = false;
    var squares = container.children();

    squares.each(function(index, square) {
      var square = $(square);
      
      // parseInt() because .css() returns a string
      var left = parseInt(square.css('left'));
      var top = parseInt(square.css('top'));
      
      // Check boundaries
      var hitsSquareX = Math.abs(left - randX) < squareSize;
      var hitsSquareY = Math.abs(top - randY) < squareSize;

      // Will overlap a square
      if (hitsSquareX && hitsSquareY) {
        hitsSquare = true;

        // jQuery break .each()
        return false;
      }
    });

    // If doesn't overlap any square
    if (!hitsSquare) {
      foundSpace = true;

      var newSquare = $('<div class="circle"><span></span></div>');

      newSquare.offset({
        left: randX,
        top: randY
      });

      container.append(newSquare);
    }
  }
}

repeat++;

}

function clicked () {
const circles = document.querySelectorAll('.circle')
const spans = document.getElementsByTagName('span')

for(let i = 0; i < circles.length; i++){
  circles[i].setAttribute("id", "circle" + i)
  spans[i].innerHTML = i+1
  spans[i].id = i
  spans[i].className = "text" + i
}

circles.forEach(function (obj){
  obj.addEventListener("click", function(e){
    var num = parseInt(e.target.id)
    if(num == count){
      count++;
      e.target.style.opacity = "1";
      console.log(count)
    }
    if(count == 5){
      count = 0;
      createDiv();
      clicked();
    }
  })
})
if (repeat == 10){
  startBtn.style.display = "block";
  gameContainer.innerHTML = "";
}
}
