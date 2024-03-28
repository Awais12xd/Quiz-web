
let questionContent = document.querySelector(".question-element");
let buttonList = document.querySelector(".answer-list");
let nextBtn = document.querySelector(".next-btn");
let answerBtn = document.querySelectorAll(".answer-list button")
let showMsg = document.querySelector(".show-score p");
let restartBtn = document.querySelector(".show-score button");

let score = 0;

let index= 0;

const showQuestions =  () =>{
    let currentQuestion = questions[index];
    let answers = currentQuestion.answers;
      questionContent.innerHTML =  currentQuestion.question;
      let answerIndex; 
      let mark = 1;
      for(answerIndex = 0 ; answerIndex <= 3 ;answerIndex++){
        answerBtn[answerIndex].innerHTML= `${mark}. ${currentQuestion.answers[answerIndex].text}`;
        mark++;
      }
}



const freezeBtns = () => {
    for(let freezeBtn of answerBtn){
        freezeBtn.disabled = true;
    }
    
}

const checkFunction = (checkInde) =>{

    let currentQuestion = questions[index];
let answers = currentQuestion.answers;
    let check2 = answers[checkInde].correct;
    if(check2){
        answerBtn[checkInde].setAttribute("class","checked");
       freezeBtns();
    }
}

const eventFunction = (eventIndex) =>{
    answerBtn[eventIndex].addEventListener("click", () =>{
        let currentQuestion = questions[index];
let answers = currentQuestion.answers;
        let check = answers[eventIndex].correct;
        if(check){
            answerBtn[eventIndex].setAttribute("class","checked");
           freezeBtns();
           score++;
        }else{
            answerBtn[eventIndex].setAttribute("class","unchecked");
            let checkIndex = 0;
            while(checkIndex < 4){
                checkFunction(checkIndex);
                checkIndex++;
            }
        }
        nextBtn.style.display = "block";
        console.log(check);
    });
}


const loopBtnFunction = () =>{
let btnIndex = 0 ;
while(btnIndex < 4){
    eventFunction(btnIndex);
    btnIndex++;
};
}


const startQuiz = () =>{
    showQuestions();
    loopBtnFunction();
}

startQuiz();


const reset = () => {
    let currentQuestion = questions[index];
    let answers = currentQuestion.answers;
      questionContent.innerHTML =  "";
      let answerIndex;
      for(answerIndex = 0 ; answerIndex <= 3 ;answerIndex++){
        answerBtn[answerIndex].innerHTML= "";
      }
      for(let freezeBtn of answerBtn){
        freezeBtn.removeAttribute("class","checked");
        freezeBtn.removeAttribute("class","unchecked");
        freezeBtn.disabled = false;
    }
    nextBtn.style.display ="none";
}

const showScore = (scorePara) => {
      
}
 
if(index < 11){
nextBtn.addEventListener("click" , () =>{
    reset();
      index++;
      if(index === 10){
        questionContent.style.display = "none";
        buttonList.style.display = "none";
        showMsg.innerText = `You get ${score} out of 10`
        showMsg.style.display = "block";
        restartBtn.style.display = "block";
      }
      if(index === 5){
        alert(`Half of the game has finished and your current score is ${score}. I know you can do it nigga.`)
      }
      if(index < 11){
      showQuestions();}
});
};

restartBtn.addEventListener("click" , () => {
    questionContent.style.display = "block";
        buttonList.style.display = "block";
        showMsg.style.display = "none";
        restartBtn.style.display = "none";
        score = 0;
        index = 0;
        showQuestions();
})