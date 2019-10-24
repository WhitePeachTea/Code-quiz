
var time = questions.length * 5
var timerEl = document.getElementById("time");

var QuizGame = function(){

        function init(){
            // this task contains steps to _initialize the game_
            // ex. setting the score to zero
            // loading the questions
            // etc.
            var score = 0;
            var Playername = ""; 
            var timer =0;
            startGame();
        }
        
        function startGame(){
            // this task handles starting the game
            // ex. showing the "splash page"
            // displaying the navigation
            // listening for the user to click upon the button
            // loads the score from localStorage or sets up localStorage
            var startPage = document.createElement("div");
            startPage.setAttribute("id", "start");
            var startButton = document.createElement("button");
            startButton.setAttribute("id", "startquiz");
            startPage.appendChild(startButton);
            document.getElementById("div1").appendChild(startPage);
            document.getElementById('startquiz').innerHTML = "Start Quiz!";
            document.getElementById("startquiz").addEventListener("click",startBtn_onClick(event));
        }
        
        function startBtn_onClick(event){
            // this task handles what to do when you click on the start button
            // shows a new page (maybe) that
            // displays the questions
            // that is all that it does.
            var start1 = document.getElementById("start");
            start1.setAttribute("class", "hide");
            var quizContainer = document.createElement("div");
            quizContainer.setAttribute("id", "quizcontainer");
            document.getElementById("div1").appendChild(quizContainer);

            gameLogic(); // now run the game logic itself
        }
        
        function gameLogic(){
            // this task deals with the game logic.
            // starts the timer
            // listen for click events of all quiz question buttons.
            // 
            timerId = setInterval(clockTick, 1000);
            document.getElementById("choices").addEventListener("click",quizBtns_onClick(event));
        }
        
        function quizBtns_onClick(event){
            // this task handles what to do when you click on a question's "answer button"
            // maybe call a function that determines if question is answered correctly (or not) 
            determineIfQuestionIsRightOrWrong(question);
            //move to next question
        }
        
        function determineIfQuestionIsRightOrWrong(question){
            // this task, given a question, determines if the answer is right or wrong
            // if question is correct, change the score and add some points
            // if question is incorrect, change the score and decrease points
            if (document.getElementById("choices").onclick == answer) {
                alert("right");
                changeTheScore(10);
            }
            else {
                alert("wrong");
                changeTheScore(-5);
            }

        }
        
        function changeTheScore(value){
            // this task, given a value will increase -or- decrease the score.
            // that is all it does.
            return score += value;
        }
        
        function endGame(){
            // steps required when the game is ended.
        setTimeout(function(){ $("#quizcontainer").add("<h1>Timeout!<h1>"); }, 75000);

        
        }
        
        // ... add additional functions as needed. THIS IS NOT COMPLETE.
        
        init(); // begins initializing the game
    };
    QuizGame();