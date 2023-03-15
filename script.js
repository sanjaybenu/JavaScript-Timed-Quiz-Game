
//Add more Questions and replace placeholders

var quizArray = [
    { ques: "Where do you normally put a link to js file", ans1: "body", ans2: "footer", ans3: "Head", ans4: "header", ans: "body" },
    { ques: "Which of the following is not a variable in Javascript", ans1: "numbers", ans2: "boolean", ans3: "strings", ans4: "name", ans: "name" },
    { ques: "What symbol is used to assign a value to a variable", ans1: "=", ans2: "~", ans3: "===", ans4: "equals", ans: "=" },
    { ques: " if var a= 10; var b=3;var c=a%b. Value of c is ", ans1: "3", ans2: "30", ans3: "1", ans4: "undefined", ans: "1" },
    { ques: "Array is enclosed within ___ brackets", ans1: "Square", ans2: "curly", ans3: "parentheses", ans4: "Angle", ans: "Square" },
    { ques: "var fruits =[“kiwi”, “guava”, “apple”, “banana”] what is fruits[2]?" , ans1: "banana", ans2: "guava", ans3: "apple", ans4: "kiwi", ans: "apple" },
    { ques: "array.push(“value”) will add “value” to the _____ of the array", ans1: "end", ans2: "beginning", ans3: "anywhere", ans4: "replaces first item", ans: "end" },
    { ques: "var animal= [“cat”, “dog”, “tiger”, “horse”]. animal.shift() will replace____", ans1: "dog", ans2: "cat", ans3: "tiger", ans4: "horse", ans: "cat" },
    { ques: "What is the most common method to join multiple words?", ans1: "Pascal Case", ans2: "Underscore", ans3: "Camel Case", ans4: "Hyphens", ans: " Camel Case" },
    { ques: "Single Line Comments in JavaSript start with ___", ans1: "//", ans2: "<!---", ans3: "||", ans4: "/*", ans: "//" },
    { ques: "if var x = 0. What is the value of x+=1", ans1: "2", ans2: "undefined", ans3: "1", ans4: "x", ans: "1" },
    { ques: "Object is written between____brackets", ans1: "Square", ans2: "Curly", ans3: "Parentheses", ans4: "Angle", ans: "Curly" },
    { ques: "var x = 4. What value will Math.SQRT1_2(x)will return", ans1: "1", ans2: "3", ans3: "16", ans4: "2", ans: "2" },
    { ques: "var x = Math.ceil(4.7). What is the value of x", ans1: "4.7", ans2: "5", ans3: "4", ans4: "0.7", ans: "5" },
    { ques: " var x = Math.floor(4.7). What is the value of x ", ans1: "4.7", ans2: "5", ans3: "4", ans4: "0.7", ans:"4" },
    { ques: ' var cars = [“BMW”, “Merc”, “Toyota”, “Kia”] .  for(var i=0; i< cars.length;i++){console.log(cars[i])} will return' , ans1:"BMW", ans2: "Merc", ans3: "Kia", ans4: "BMW, Merc,Toyota,Kia", ans: " BMW, Merc,Toyota,Kia " },
    { ques: "typeof(null) is?" , ans1: "0", ans2: "undefined", ans3: "nil", ans4: "an object", ans: "an object" },
    { ques: 'var x = “500” + 1 ', ans1: "501", ans2: "undefined", ans3: "5001", ans4: "can not add", ans: "5001" },
    { ques: "if var a= ‘100’; var b = 100 is a==b", ans1: "true", ans2: "false", ans3: "undefined", ans4: "null", ans: "true" },
    { ques: "if var a= ‘100’; var b = 100 is a===b", ans1: "true", ans2: "false", ans3: "undefined", ans4: "null", ans: "false" },
    { ques: "Things you ca do with JavaScript", ans1: "Fly Drones", ans2: "Animate websites", ans3: "Make serverless websites", ans4: "All of the above", ans: "All of the above" },
    { ques: "Things you can build with JavaScript", ans1: "Web Applications", ans2: "Server applications", ans3: "Games", ans4: "All of the above", ans: "All of the above" }
];

var timeEl = document.getElementById("timer");
var playBtn = document.getElementById("play");
var secondsLeft = 100;
var quizHeader = document.getElementById("quizHeader")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft -= 1;
        timeEl.textContent = "Time left- " + secondsLeft + "secs";

        if (secondsLeft <= 0 || i === quizArray.length) {

            clearInterval(timerInterval);
            timeEl.textContent = "time over";
            
            endPlay();
        }

    }, 1000);
}


function startPlay() {
    var mainPage = document.getElementById("main");
    var quizPage = document.getElementById("quizSection");
    mainPage.style.display = "none";
    quizPage.style.display = "flex";
    quizHeader.textContent = quizArray[0].ques;
    btn1.textContent = quizArray[0].ans1;
    btn2.textContent = quizArray[0].ans2;
    btn3.textContent = quizArray[0].ans3;
    btn4.textContent = quizArray[0].ans4;
    btn1.setAttribute("id", quizArray[0].ans1);
    btn2.setAttribute("id", quizArray[0].ans2);
    btn3.setAttribute("id", quizArray[0].ans3);
    btn4.setAttribute("id", quizArray[0].ans4);
    setTime();
    play();
    return;
};

playBtn.addEventListener("click", startPlay);
var i = 0;
var score = 0;
var scoreEl = document.getElementById('score')
var quizContainer = document.querySelector("#quizSection");
var outcomeEl = document.getElementById('outcome')
function play() {
    quizContainer.addEventListener("click", function (event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("id");
            if (state === quizArray[i].ans) {
                score += 1;
                scoreEl.textContent = "Your Score: "+ score;
                outcomeEl.textContent = 'Correct Answer';

            }

            else { 
                outcomeEl.textContent = 'Wrong Answer';
                secondsLeft -= 10

            };
            i += 1;
            scoreEl.textContent = "Your Score: "+ score;
            quizHeader.textContent = quizArray[i].ques;
            btn1.textContent = quizArray[i].ans1;
            btn2.textContent = quizArray[i].ans2;
            btn3.textContent = quizArray[i].ans3;
            btn4.textContent = quizArray[i].ans4;
            btn1.setAttribute("id", quizArray[i].ans1);
            btn2.setAttribute("id", quizArray[i].ans2);
            btn3.setAttribute("id", quizArray[i].ans3);
            btn4.setAttribute("id", quizArray[i].ans4);
            setTimeout(function () {
                outcomeEl.textContent = ''
            }, 1000);
            var scoreDisplay = document.getElementById('playerScore');
            scoreDisplay.setAttribute('value', score);

        }
    })
    return;                              
};

function endPlay() {
    var quizPage = document.getElementById('quizSection');
    var scorePage = document.getElementById('scoreSection');
    var topSection = document.getElementById('top-section');
    topSection.style.display  = 'none';
    quizPage.style.display ='none';
    scorePage.style.display = 'flex';

    return;                               
}

function storeLocal(event) {

    event.preventDefault();
    if (score > localStorage.getItem('score') || localStorage.getItem('score')=== 'null') {     
        localStorage.setItem('score', score);
    var initials = document.getElementById('initials').value;
    localStorage.setItem('initials', initials);
    };
    
    var scorePage = document.getElementById('scoreSection');
    var topSection = document.getElementById('top-section');
    var mainPage = document.getElementById("main");
    scorePage.style.display= "none";
    topSection.style.display  = 'flex';
    mainPage.style.display = "flex";
    location.href = "score.html";
    return;
                                    
      
};


var storebtn = document.getElementById('playerRecord');
storebtn.addEventListener('click', storeLocal);
