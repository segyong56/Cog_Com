
const qus_box = document.querySelector('.question')
const buttonBox = document.querySelector('.button-box')


let x = 10
let y = ["-1", "*2", "+3"]
let count = 0;
let randomPos = [];
let currentQ;

createDiv();
qus_box.innerHTML = x + y[count]
let inner = eval(qus_box.innerHTML)

function createDiv() {

  for (let i = 0; i < 3; i++) {
    const option = document.createElement("div")
    option.innerHTML = i + 7
    option.className = "button"
    buttonBox.appendChild(option)
    option.setAttribute("onclick", "clickEvent(this)");
    randomPos.push(option)
  }

}


function clickEvent(answer) {

  const randomQ = y[Math.floor(Math.random() * y.length)]
  currentQ = randomQ
  qus_box.innerHTML = currentQ;

  var value = answer.textContent
  var gap = eval(value + currentQ)
  randomPos[0].innerHTML = gap

  if(value == inner){

    console.log("correct : " + inner)
    inner = eval(inner + currentQ)
    var cal = ["+0", "+2", "-2"];

    for(let i = 0; i < 3; i++){
      var randomCal = cal[Math.floor(Math.random() * cal.length)]
      var index1 = cal.indexOf(randomCal)
      cal.splice(index1, 1)
      randomPos[i].innerHTML = eval(gap + randomCal)
    }
    
    console.log(inner)

  } else {
    console.log("incorrect")
    alert('다시 생각해 보세요')
    window.location.reload();
  }

  count++;

   if(count == 7){
    qus_box.innerHTML = "good!";
    buttonBox.classList.add('disable');
    for(let i = 0; i < randomPos.length; i++){
      randomPos[i].innerHTML = "";
    }
  }

}
