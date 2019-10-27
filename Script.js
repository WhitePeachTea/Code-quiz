var score = 0;
var Playername = ""; 
var time = questions.length * 15;
var timerContent = document.getElementById("time");
var timerSection = document.getElementById("timer");
var timer;
var quizStatus = 0;
var titleSection = document.getElementById("title");
var questionSection = document.getElementById("questions");
var startPage = document.getElementById("start");
var choicesSection = document.getElementById("choices")
var quizStatus = 0;
var thisQuestion = questions[quizStatus];
var answers = document.getElementById("answers")
var endPage = document.getElementById("endpage");
var names = document.getElementById("names");

$(endPage).hide();


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
    
        answers.textContent = "Correct!";
    }
    
    setTimeout(function(){$(answers).hide();}, 1000);
        
}); 

$(".choices").click(function(){

    quizStatus++;
    
    if (quizStatus === questions.length) {
        $(answers).show();
        setTimeout(function(){endGame();
        }, 2000);
    } else {
        setTimeout(function(){generateQuestions();
    }, 1000);
    $(answers).show();
}
});

}

$("#startquiz").click(function(){
    $(startPage).hide();
    setTimeout(function(){ $("#endgame").removeAttribute("hide"); }, 75000);
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
    $(questionSection).hide();
    $(timerSection).hide();
    $(answers).hide();
    $(endPage).show();
    }


    
    // ... add additional functions as needed. THIS IS NOT COMPLETE.
    


    function saveHighscore() {
        var winnerNames = names.value.trim();
      
        if (winnerNames !== "") {
          
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
      
        var newScore = {
            score: time,
            winnerNames: winnerNames
          };
      
          highscores.push(newScore);
          window.localStorage.setItem("highscores", JSON.stringify(highscores));
      
          window.location.href = "score.html";
        }
      }
