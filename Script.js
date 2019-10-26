var score = 0;
var Playername = ""; 
var time = questions.length * 5;
var timerContent = document.getElementById("time");
var timer;
var quizStatus = 0;
var titleSection = document.getElementById("title");
var questionSection = document.getElementById("questions");
var startPage = document.getElementById("start");
var choicesSection = document.getElementById("choices")
var quizStatus = 0;



function generateQuestions(){
    var thisQuestion = questions[quizStatus];
    titleSection.textContent = thisQuestion.title;
    choicesSection.innerHTML = "";
    thisQuestion.choices.forEach(function(choice, i) {
    var choicesButton = document.createElement("button");
    choicesButton.setAttribute("class", "choices");
    choicesButton.setAttribute("value", choice);
    choicesButton.textContent = i + 1 + ". " + choice;          
    choicesSection.appendChild(choicesButton);
 });
}
 


$("#startquiz").click(function(){
    $(startPage).hide();
  });

        document.getElementById("startquiz").addEventListener("click",function(){
            startPage.setAttribute("class", "hide");
            questionSection.removeAttribute("class", "hide");
            generateQuestions();
        });
            

    function gameLogic(){
        // this task deals with the game logic.
        // starts the timer
        // listen for click events of all quiz question buttons.
        // 
        timer = setInterval(clockTick, 1000);
        timerContent.textContent = time;

        document.getElementsByClassName("choices").addEventListener("click",quizBtns_onClick(event));
    }
    
    function quizBtns_onClick(event){
        // this task handles what to do when you click on a question's "answer button"
        // maybe call a function that determines if question is answered correctly (or not) 
        if (this.value !== questions[thisQuestion].answer) {
            time -= 15;
        
            if (time < 0) {
              time = 0;
            }
            
            timerContent.textContent = time;
        
            feedbackEl.textContent = "Wrong!";
          } else {
        
            feedbackEl.textContent = "Correct!";}
            quizStatus++;

        if (quizStatus === questions.length) {
              endGame();
        } else {
            generateQuestions();
            }
    }
    
    function endGame(){
        // steps required when the game is ended.
    setTimeout(function(){ $("#quizcontainer").add("<h1>Timeout!<h1>"); }, 75000);

    }
    
    // ... add additional functions as needed. THIS IS NOT COMPLETE.
    
    init(); // begins initializing the game
        
      