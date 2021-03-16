const container = document.querySelector(".container");
const text = document.querySelector(".text");

let div = 30;
let colors = ["blue", "red", "green", "yellow", "purple"]
let divArray = [];
let colorArray = [];
let repeat;

function createDiv() {
  for (let i = 0; i < div; i++) {
    const randomColor = colors[Math.floor(Math.random() * 5)]
    const obj = document.createElement("div")
    obj.className = "btn"
    obj.style.backgroundColor = randomColor
    container.appendChild(obj)
    divArray.push(obj)
  }
}

function createColor() {
  for (let i = 0; i < divArray.length; i++) {
    colorArray.push(divArray[i].style.backgroundColor)
  }
}

createDiv();
createColor();

var cong1 = colorArray[Math.floor(Math.random() * colorArray.length)]
var cong2 = colorArray.indexOf(cong1)

function isColor(color) {
  var randomText = colorArray[cong2];
  return color === randomText;
}


var arrayFilter = colorArray.filter(isColor)
arrayFilter.slice()
var getText = arrayFilter[Math.floor(Math.random() * arrayFilter.length)]
text.style.backgroundColor = getText

let count = 0;

const button = document.querySelectorAll(".btn");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    var getColor = e.target.style.backgroundColor
    if (getColor === getText) {
      e.target.style.backgroundColor = "white";
      count++;
    }
    if (arrayFilter.length === count) {
    repeat = setInterval(function () {
        window.location.reload();
    }, 500);
    }
  });
}