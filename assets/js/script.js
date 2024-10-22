const startButton = document.getElementById("start-btn");
const questionContainerElement=document.getElementById("question-container");
const questionElement=document.getElementById("question")

const suffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);


function startGame(){
    console.log("Started");
    startButton.classList.add("hide")
    suffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestion=0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}


function setNextQuestions(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){

}

function selectAnswer(){

}

const questions=[
    {
        question:"What is 2+2"
        answers:[
            {text: "4", correct:true}
            {text: "22", correct:false}
        ]
    }
]