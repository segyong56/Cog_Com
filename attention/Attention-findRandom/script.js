const container = document.querySelector(".container");
const text = document.querySelector(".text");

let div = 30;
const colors = ["blue", "red", "green", "yellow", "purple"]
const clipPath = [
  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "polygon(50% 0%, 0% 100%, 100% 100%)",
  "circle(50% at 50% 50%)",
  "inset(5% 20% 15% 10%)"
]
let divArray = [];
let colorArray = [];
let repeat;

function createDiv() {
  for (let i = 0; i < div; i++) {
    const randomColor = colors[Math.floor(Math.random() * 5)]
    const randomShape = clipPath[Math.floor(Math.random() * 5)]
    const obj = document.createElement("div")
    obj.className = "btn"
    obj.style.backgroundColor = randomColor
    obj.style.clipPath = randomShape
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