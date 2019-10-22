


//sessionStorage.setItem("lastname", "Smith");
//document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");

//localStorage.setItem("lastname", "Smith");

//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
var QuizGame = function(){

        function init(){
            // this task contains steps to _initialize the game_
            // ex. setting the score to zero
            // loading the questions
            // etc.
            var score = 0;
            var Playername = ""; 
            var timer =0;
            for (i=0;i<questions.length;i++) {
                console.log(questions[i]);}
            startGame();
        }
        
        function startGame(){
            // this task handles starting the game
            // ex. showing the "splash page"
            // displaying the navigation
            // listening for the user to click upon the button
            // loads the score from localStorage or sets up localStorage
            var startPage = document.createElement("div");
            startPage.setAttribute("id", "quizcontainer");
            var startButton = document.createElement("button");
            startButton.setAttribute("id", "startquiz");
            startPage.appendChild(startButton);
            document.getElementById("div1").appendChild(startPage);
            document.getElementById('startquiz').innerHTML = "Start Quiz!";
            document.getElementById("startquiz").addEventListener("click",startBtn_onClick());
        }
        
        function startBtn_onClick(event){
            // this task handles what to do when you click on the start button
            // shows a new page (maybe) that
            // displays the questions
            // that is all that it does.
            var titile = document.createElement("div").innerText(Object.titile);
            var choices = document.createElement("button").innerText(Object.choices);
            title.appendChild(choices);
            startPage.replaceChild(title, startButton);
            gameLogic(); // now run the game logic itself
        }
        
        function gameLogic(){
            // this task deals with the game logic.
            // starts the timer
            // listen for click events of all quiz question buttons.
            // 
            function startTimer() {
                var tobj = document.getElementById("timespent")
                var t = "0:00";
                var s = 00;
                var d = new Date();
                var timeint = setInterval(function () {
                  s += 1;
                  d.setMinutes("0");
                  d.setSeconds(s);
                  min = d.getMinutes();
                  sec = d.getSeconds();
                  if (sec < 10) sec = "0" + sec;
                  document.getElementById("time").value = min + ":" + sec;
                }, 1000);
                tobj.value = t;
              }
              if (window.addEventListener) {              
                window.addEventListener("load", startTimer);
              } else if (window.attachEvent) {                 
                window.attachEvent("onload", startTimer);
              }

        
        }
        
        function quizBtns_onClick(event){
            // this task handles what to do when you click on a question's "answer button"
            // maybe call a function that determines if question is answered correctly (or not) 
            $(".choices").click(function(){
                if (question ==! true) {
                    alert("right");
                }
                else {
                    alert("wrong");
                }
            });
            determineIfQuestionIsRightOrWrong(question);
        }
        
        function determineIfQuestionIsRightOrWrong(question){
            // this task, given a question, determines if the answer is right or wrong
            // if question is correct, change the score and add some points
            // if question is incorrect, change the score and decrease points
            var question = $(".choices").click();
            if (question == answer) {
                return true;
            }

            else {
                return false;
            }

        }
        
        function changeTheScore(value){
            // this task, given a value will increase -or- decrease the score.
            // that is all it does.
            $(".choices").click(function(){
                if (question ==! answer) {
                    score += 10;
                }
                else {
                    score -= 5;
                }
            });
        }
        
        function endGame(){
            // steps required when the game is ended.
        setTimeout(function(){ $("#quizcontainer").add("<h1>Timeout!<h1>"); }, 75000);

        
        }
        
        // ... add additional functions as needed. THIS IS NOT COMPLETE.
        
        init(); // begins initializing the game
    };
    QuizGame();