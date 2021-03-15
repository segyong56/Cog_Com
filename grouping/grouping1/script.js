
const cardBox = document.querySelector('.card-box')
const dropBox = document.querySelector('.drop-box')
const score = document.querySelector('.score')

let obj = ["1-1.jpg", "1-2.jpg", "1-3.jpg", "1-4.jpg"]
let ani = ["2-1.jpg", "2-2.jpg", "2-3.jpg", "2-4.jpg"]
let foo = ["3-1.jpg", "3-2.jpg", "3-3.jpg", "3-4.jpg"]

let array = [];
let currentIndex;
let correct = 0;
let question = 0;


function createArray() {

    for(let i = 0; i < obj.length; i++){
        const objImg = document.createElement("img")
        objImg.src = obj[i]
        objImg.id = "obj"
        objImg.className = "img"
        cardBox.appendChild(objImg)
        array.push(objImg)
    }
    for(let i = 0; i < ani.length; i++){
        const aniImg = document.createElement("img")
        aniImg.src = ani[i]
        aniImg.id = "ani"
        aniImg.className = "img"
        cardBox.appendChild(aniImg)
        array.push(aniImg)
    }
    for(let i = 0; i < foo.length; i++){
        const fooImg = document.createElement("img")
        fooImg.src = foo[i]
        fooImg.id = "foo"
        fooImg.className = "img"
        cardBox.appendChild(fooImg)
        array.push(fooImg)
    }

}

function showRandom() {

    cardBox.innerHTML = "";

    const getRandom = array[Math.floor(Math.random() * array.length)]
    currentIndex = getRandom
    const index1 = array.indexOf(currentIndex)
    array.splice(index1, 1)

    cardBox.appendChild(currentIndex)

    question++;

    if(question == 12){
       console.log("question ended") 
    }
    
}

createArray();
showRandom();

function clickFun (answer) {
    const setId = answer.id
    const getId = currentIndex.id
    if(getId == setId){
        if(array.length > 0){
        correct++;
        score.innerHTML = "score : " + correct;
        showRandom();
    } else {
        cardBox.innerHTML = "";
    }
}
}

