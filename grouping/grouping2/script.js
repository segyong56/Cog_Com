
const figure = document.querySelectorAll('.figure')
const dropContainer = document.querySelector('.drop-area')
const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function(){
  window.location.reload();
})

for(let i = 0; i < figure.length; i++){
  figure[i].style.left = ((100*i)+270) + "px";
  figure[i].style.top = "150px";
}

var moving = false;

for (let i = 0; i < figure.length; i++){
figure[i].addEventListener("mousedown", initialClick, false);

}


function move(e){

  var newX = e.clientX - 50;
  var newY = e.clientY - 50;

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
