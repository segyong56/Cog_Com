
const quiz_box = document.querySelector('.quiz-box')
const answer_box = document.querySelector('.answer-box')
const timeCount = document.querySelector('.timer')
const que_text = document.querySelector('.question-box')


let questions = [
    {
        question : "fas fa-air-freshener",
        options : ["fab fa-apple", "fab fa-affiliatetheme", "fas fa-air-freshener", "fab fa-canadian-maple-leaf"],
        answer : "fas fa-air-freshener answer"
    },
    {
        question : "fas fa-cloud-sun-rain",
        options : [ "fas fa-cloud-moon", "fas fa-cloud-sun-rain", "fas fa-cloud-moon-rain", "fas fa-cloud-moon"],
        answer : "fas fa-cloud-sun-rain answer"
    },
    {
        question : "fas fa-dice-three",
        options : ["fas fa-dice-four", "fas fa-dice-four", "fas fa-dice-six", "fas fa-dice-three"],
        answer : "fas fa-dice-three answer"
    },
    {
        question :"far fa-file-alt",
        options : ["far fa-file-alt", "fas fa-file-alt", "fas fa-file", "fas fa-file-powerpoint"],
        answer : "far fa-file-alt answer"
    },
    {
        question : "far fa-grin",
        options : ["fas fa-grin-alt", "far fa-grin", "fas fa-grin-beam", "far fa-grin-squint"],
        answer : "far fa-grin answer"
    }
]

let que_count = 0;
let userScore = 0;
let counter;
let timeValue = 5;
showQuetions(que_count);
startTimer(timeValue)

console.log(que_count)

const nextBtn = document.querySelector('.next')
nextBtn.onclick = () => {
    if(que_count < questions.length - 1){
    que_count++;
    showQuetions(que_count);
    clearInterval(counter);
    startTimer(timeValue);
    nextBtn.classList.add("hide")
   } else {
    clearInterval(counter);
    showResult();
    console.log("question ended")
   }
}


function showQuetions(index){
    let que_tag = '<i class="' + questions[index].question + '"></i>';
    let option_tag ='<i class="' + questions[index].options[0] + ' answer"></i>'
    + '<i class="' + questions[index].options[1] + ' answer"></i>'
    + '<i class="' + questions[index].options[2] + ' answer"></i>'
    + '<i class="' + questions[index].options[3] + ' answer"></i>';
    que_text.innerHTML = que_tag;
    answer_box.innerHTML = option_tag;
    
    const option = answer_box.querySelectorAll(".answer");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.className; 
    console.log(answer.className)
    let correcAns = questions[que_count].answer; 
    const allOptions = answer_box.children.length;

        if(userAns == correcAns){
            userScore += 1;
            answer.classList.add("correct");
            console.log("Your correct answers = " + userScore);
        }else{
            answer.classList.add("incorrect");
            console.log("Wrong Answer");
            for(i=0; i < allOptions; i++){
                if(answer_box.children[i].textContent == correcAns){
                    answer_box.children[i].setAttribute("class", "answer correct");
                   // answer_box.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
            }
        }
        for(i=0; i < allOptions; i++){
            answer_box.children[i].classList.add("disabled");
        }
        nextBtn.classList.remove("hide");
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            //timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = answer_box.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(answer_box.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    answer_box.children[i].setAttribute("class", "answer correct"); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                answer_box.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            nextBtn.classList.remove("hide"); //show the next button if user selected any option
        }
    }
}

function showResult(){
    nextBtn.classList.add("hide");
    const scoreText = document.querySelector(".score-text");
    let scoreTag = '<span class="score"><p>맞은 점수 : '+ userScore +'점 / 총 '+ questions.length +' 문제</p></span>';
    quiz_box.innerHTML = scoreTag;
}