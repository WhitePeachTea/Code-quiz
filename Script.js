var QuizGame = function(){

    var score = 0;
    var Playername = ""; 
    var time = questions.length * 5;
    var timerContent = document.getElementById("time");
    var timer;
    var quizStatus = 0;

        function init(){
            // this task contains steps to _initialize the game_
            // ex. setting the score to zero
            // loading the questions
            // etc.            
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
            var questionSection = document.createElement("div");
            questionSection.setAttribute("id", "questions");
            questionSection.setAttribute("class", "hide");
            var title = document.createElement("h2");
            title.setAttribute("id", "title");
            var choicesSection = document.createElement("div");
            choicesSection.setAttribute("id", "choices");
            choicesSection.setAttribute("class", "choices");
            generateQuestions();
        }

        function generateQuestions(event){
            var quizStatus = 0;
            var thisQuestion = questions[quizStatus];
           document.getElementById("title").textContent = thisQuestion.title;
            choicesSection.innerHTML = "";
            thisQuestion.choices.forEach(function(choice, i) {
            var choiceButton = document.createElement("button");
            choiceButton.setAttribute("class", "choice");
            choiceButton.setAttribute("value", choice);
            choiceButton.textContent = i + 1 + ". " + choice;          
            choiceButton.onclick = questionClick;
            choicesSection.appendChild(choiceButton);
        });
            startBtn_onClick();
        }
            
        function startBtn_onClick(event){
            // this task handles what to do when you click on the start button
            // shows a new page (maybe) that
            // displays the questions
            // that is all that it does.
            document.getElementById("startquiz").addEventListener("click",startBtn_onClick(event));
            var start1 = document.getElementById("start");
            start1.setAttribute("class", "hide");
            var quizContainer = document.createElement("div");
            quizContainer.setAttribute("id", "quizcontainer");
            document.getElementById("div1").appendChild(quizContainer);
            gameLogic(); 
        }
        
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
    };

    QuizGame();