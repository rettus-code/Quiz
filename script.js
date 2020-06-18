var questions = {
  question: "",
  ansOne: "",
  anstwo: "",
  ansthree: "",
  ansfour: "",
  correctChoice: null,
}

var questionsArray = [questions = {
  question: "What is a click counter?",
  ansOne: "1. A surface you can click your mouse on.",
  anstwo: "2. Code that tracks how often a button was clicked.",
  ansthree: "3. Code that counters or prevents default actions from occurring due to a click event.",
  ansfour: "4. How often a procedure must be repeated before it clicks.",
  correctChoice: 2,
},
questions = {
  question: "What are two pillars of of JavaScript?",
  ansOne: "1. GUI and Interactive functionality.",
  anstwo: "2. CSS and HTML.",
  ansthree: "3. Functional inheritance and OLOO.",
  ansfour: "4. Prototypal OO and Functional Programming.",
  correctChoice: 4,
}
]
startPage();


var mainEl = document.querySelector("#seconds");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
one.addEventListener("click", checkAnswerOne);
two.addEventListener("click", checkAnswerTwo);
three.addEventListener("click", checkAnswerThree);
four.addEventListener("click", checkAnswerFour);



function startPage() {
  document.getElementById("qq").innerHTML = "Click here to start!";
  document.getElementById("quest").innerHTML = "Try your best at this JS test!";
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.querySelector("#qq").addEventListener("click", function() {
    quizTime();
  }) 
}
  
function quizTime() {
  
  var timeLeft = 300;
    var timeInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft === 0) {
          clearInterval(timeInterval);
        } 
        mainEl.textContent = "" + timeLeft;
    }, 1000);
    var index = 0;
    while (index < questionsArray.length); {
      questions = questionsArray[index];
      questionBuilder();
    }

}


function checkAnswerOne(){
  index++
  if (ansOne === questions.correctChoice){
    document.getElementById("two").innerHTML = "correct";
  } else {
    timeLeft -+ 30;
  }
}
function checkAnswerTwo(){
  index++
  if (ansTwo === questions.correctChoice){
    document.getElementById("two").innerHTML = "correct";
  } else {
    timeLeft -+ 30;
  }
}
function checkAnswerThree(){
  index++
  if (ansThree === questions.correctChoice){
    document.getElementById("two").innerHTML = "correct";
  } else {
    timeLeft -+ 30;
  }
}
function checkAnswerFour(){
  index++
  if (ansFour === questions.correctChoice){
    document.getElementById("two").innerHTML = "correct";
  } else {
    timeLeft -+ 30;
  }
}
function questionBuilder(){
  document.getElementById("qq").innerHTML = "Quiz Questions";
  document.getElementById("quest").innerHTML = questions.question;
  document.getElementById("one").innerHTML = questions.ansOne;
  document.getElementById("two").innerHTML = questions.anstwo;
  document.getElementById("three").innerHTML = questions.ansthree;
  document.getElementById("four").innerHTML = questions.ansfour;
}

console.log(questionsArray);
console.log(questions);

