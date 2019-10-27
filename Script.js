var score = 0;
var Playername = ""; 
var time = questions.length * 15;
var timerContent = document.getElementById("time");
var timer;
var quizStatus = 0;
var titleSection = document.getElementById("title");
var questionSection = document.getElementById("questions");
var startPage = document.getElementById("start");
var choicesSection = document.getElementById("choices")
var quizStatus = 0;
var thisQuestion = questions[quizStatus];
var answers = document.getElementById("answers")


function generateQuestions(){
    titleSection.textContent = questions[quizStatus].title;
    choicesSection.innerHTML = "";
    questions[quizStatus].choices.forEach(function(choice, i) {
    var choicesButton = document.createElement("button");
    choicesButton.setAttribute("class", "choices");
    choicesButton.setAttribute("value", choice);
    choicesButton.textContent = i + 1 + ". " + choice;         
    choicesSection.appendChild(choicesButton);
});

$(".choices").click(function(){
    // this task handles what to do when you click on a question's "answer button"
    // maybe call a function that determines if question is answered correctly (or not) 
    if (this.value !== questions[quizStatus].answer) {
        time -= 15;
    
        if (time < 0) {
          time = 0;
        }
        
        timerContent.textContent = time;
    
        answers.textContent = "Wrong!";
      } else {
    
        answers.textContent = "Correct!";}
        
}); 

$(".choices").click(function(){

    quizStatus++;
    
    if (quizStatus === questions.length) {
          endGame();
    } else {
        generateQuestions();
        }
    });

}

$(".choices").click(function(){

quizStatus++;

if (quizStatus === questions.length) {
      endGame();
} else {
    generateQuestions();
    }
});



$("#startquiz").click(function(){
    $(startPage).hide();
  });

function setTimer(){
  time--;
  timerContent.textContent = time;

  if (time <= 0) {
    endGame();
  }
}

document.getElementById("startquiz").addEventListener("click",function(){
            questionSection.removeAttribute("class", "hide");
            generateQuestions();
            timer = setInterval(setTimer, 1000);
            timerContent.textContent = time;
        });            
    
    function endGame(){
        // steps required when the game is ended.
    setTimeout(function(){ $("#quizcontainer").add("<h1>Timeout!<h1>"); }, 75000);

    }
    
    // ... add additional functions as needed. THIS IS NOT COMPLETE.
    
        
      