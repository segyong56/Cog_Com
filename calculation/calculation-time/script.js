
const quiz_box = document.querySelector('.quiz-box')
const answer_box = document.querySelector('.answer-box')
const timeCount = document.querySelector('.timer')
const que_text = document.querySelector('.question-box')


let questions = [
    {
        question : "현재시간 3시 30분, 40분 후 몇시일까요?",
        options : ["4시", "4시 20분", "4시 10분", "4시 30분"],
        answer : "4시 10분"
    },
    {
        question : "현재시간 3시 30분, 40분 전 몇시였을까요?",
        options : ["2시 30분", "2시 50분", "3시 00분", "2시 40분"],
        answer : "2시 50분"
    },
    {
        question : "현재시간 5시 10분, 1시간 30분 후 몇시일까요?",
        options : ["6시 40분", "6시 30분", "6시 20분", "6시"],
        answer : "6시 40분"
    },
    {
        question : "현재시간 2시 30분, 50분 전 몇시였을까요?",
        options : ["2시 40분", "2시 30분", "1시 20분", "1시 40분"],
        answer : "1시 40분"
    },
    {
        question : "현재시간 11시 30분, 20분 후 몇시일까요?",
        options : ["11시", "11시 50분", "11시 10분", "12시 50분"],
        answer : "11시 50분"
    }
]

let que_count = 0;
let userScore = 0;
let counter;
let timeValue = 10;
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
    let que_tag = questions[index].question;
    let option_tag ='<div class="answer">' + questions[index].options[0] + '</div>'
    + '<div class="answer">' + questions[index].options[1] + '</div>'
    + '<div class="answer">' + questions[index].options[2] + '</div>'
    + '<div class="answer">' + questions[index].options[3] + '</div>';
    que_text.innerHTML = que_tag; 
    answer_box.innerHTML = option_tag;
    
    const option = answer_box.querySelectorAll(".answer");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent; 
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
    let scoreTag = '<div class="score"><p>맞은 점수 : '+ userScore +'점 / 총 '+ questions.length +' 문제</p></div>';
    quiz_box.innerHTML = scoreTag;
}