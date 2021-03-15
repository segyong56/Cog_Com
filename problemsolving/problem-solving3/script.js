
const colums = document.querySelector('.colums')
const colum1 = document.querySelector('.colum1')
const colum2 = document.querySelector('.colum2')
const colum3 = document.querySelector('.colum3')
const fadeAway = document.querySelector('.fadeAway');

setFun();
function setFun() {
  for (let i = 0; i < colum1.children.length; i++) {
    colum1.children[i].setAttribute("draggable", "true")
    colum1.children[i].setAttribute("ondragstart", "drag(event)")
  }

  for (let i = 0; i < colums.children.length; i++) {
    colums.children[i].setAttribute("ondrop", "drop(event)")
    colums.children[i].setAttribute("ondragover", "allowover(event)")
  }
}


let incorrect = 0;
let myTimer;

function drag(ev) {
  var parentChild = ev.target.parentElement
  var firstChild = parentChild.firstElementChild

  if (ev.target == firstChild) {
    ev.dataTransfer.setData("Text", ev.target.id)
    fadeAway.classList.remove("animation")
  } else {
    ev.dataTransfer.effectAllowed = "none";
    fadeAway.classList.add("animation")
    setTimeout(function(){
        fadeAway.classList.remove("animation");
    },500);
  }
}


function allowover(ev) {
  ev.preventDefault();
}


function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  if (ev.target.children.length == 0) {
    ev.target.prepend(document.getElementById(data));
  }
  else if (data < ev.target.firstElementChild.id) {
    ev.target.prepend(document.getElementById(data));

  } else {
    fadeAway.classList.add("animation")
  }
}

