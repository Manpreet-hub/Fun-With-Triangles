const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-btn");
const output=document.querySelector("#output");

const correctAnswer=["90°","right angled"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let values of formResults.values()){
        if(values === correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
    }
   output.innerText="Your score is : "+score;
}
submitBtn.addEventListener('click',calculateScore);