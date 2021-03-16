
const instructText = document.querySelector('.text');
const signColor = document.querySelector('.color-text');
const correctSign = document.querySelector('.correct');
const wrongSign = document.querySelector('.wrong');

let colors = ["blue", "red", "green", "yellow", "purple"];
let nameEn =
{
  "파란색": "blue",
  "빨강색": "red",
  "초록색": "green",
  "노란색": "yellow",
  "보라색": "purple"
};

let instruct = ["글자", "색깔"];
let correct = 0;
let changeInstruct;

function resetGame() {
  correctSign.style.opacity = "0";

  var changeColor = colors[Math.floor(Math.random() * 5)]
  var koreanText = Object.keys(nameEn)
  var changeText = koreanText[Math.floor(Math.random() * 5)]
  var textValue = nameEn[changeText]

  changeInstruct = instruct[Math.floor(Math.random() * 2)]
  signColor.style.color = changeColor
  signColor.innerHTML = changeText
  instructText.innerHTML = changeInstruct

  addClick("blue", changeColor, textValue);
  addClick("red", changeColor, textValue);
  addClick("green", changeColor, textValue);
  addClick("yellow", changeColor, textValue);
  addClick("purple", changeColor, textValue);

}


function addClick(color, changeColor, textValue) {
  var colorBtn = document.getElementById(color);
  let onclick = "checkColor('".concat(color, "','", changeColor, "','", textValue, "')");
  colorBtn.setAttribute("onclick", onclick);
}

function checkColor(color, changeColor, textValue) {
  if (changeInstruct == "글자" && color == textValue) {
    correct++;
    correctSign.classList.add("fadeAway");
  }
  if (changeInstruct == "색깔" && color == changeColor) {
    correct++;
    correctSign.classList.add("fadeAway");
  } 
  if(color != changeColor && color != textValue) {
    wrongSign.classList.add("fadeAway");
  }
  setTimeout(function () {
    correctSign.classList.remove("fadeAway");
    wrongSign.classList.remove("fadeAway");
  }, 500);
  resetGame();
}

resetGame();

