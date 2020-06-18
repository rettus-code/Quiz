//Object to hold objects
var questions = {
  question: "",
  ansOne: "",
  anstwo: "",
  ansthree: "",
  ansfour: "",
  correctChoice: null,
}
//array of object questions to form 10 questions
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
},
questions = {
  question: "What is Bootstrap",
  ansOne: "1. Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.",
  anstwo: "2. something that replaces CSS and completely for easier design.",
  ansthree: "3. A term about focusing on the current project and meeting deadlines.",
  ansfour: "4. A nickname for a pirate named Bill and father to William Turner",
  correctChoice: 1,
},
questions = {
  question: "When was JavaScript developed and by who?",
  ansOne: "1. JavaScript was created in 1994 by Samuel Sung while he was aSoftware consultant for Amazon.",
  anstwo: "2. JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape.",
  ansthree: "3. JavaScript was created in 1996 by Johnathon Snowden while working at apple to give Safari an edge over explorer.",
  ansfour: "4. JavaScript was created in 1995 by Jack Wolf, and Gene Grey while working together as independent contractors.",
  correctChoice: 2,
},
questions = {
  question: "Why are closures important?",
  ansOne: "1. It allows team members to better work together after a conflict in coding direction.",
  anstwo: "2. Parent, child and sibling functions look for closure in order to function properly",
  ansthree: "3. they control what is and isn’t in scope in a particular function, including variables shared between functions in the same scope.",
  ansfour: "4. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.",
  correctChoice: 3,
},
questions = {
  question: "What is functional programming?",
  ansOne: "1. Program that work and are easy to grasp.",
  anstwo: "2. is a programming paradigm that favors function over form often expecting code to be slightly expended for easier interpretation.",
  ansthree: "3. is a programming paradigm that relies heavily on object inheritance.",
  ansfour: "4. is a programming paradigm where programs are constructed by applying and composing functions.",
  correctChoice: 4,
},
questions = {
  question: "What is classical inheritance?",
  ansOne: "1. instances inherit from classes and create sub-class relationships: hierarchical class taxonomies.",
  anstwo: "2. instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`.",
  ansthree: "3. Programmers who developed code based on a predecessors style that incorporates best used practices",
  ansfour: "4. A programming method developed by Annie hall and Oliver Warbucks that allowed object attributes to pass from parent to child.",
  correctChoice: 1,
},
questions = {
  question: "Pros of object oriented programming?",
  ansOne: "1. code reuse can be achieved by assembling smaller units of functionality into new objects",
  anstwo: "2. Objects and behaviors may be accessed at random by any number of functions with non-deterministic orderd HTML.",
  ansthree: "3. Objects are easy to store and manipulate information.",
  ansfour: "4. It’s easy to understand the basic concept of objects and easy to interpret the meaning of method calls.",
  correctChoice: 4,
},
questions = {
  question: "What is one way data flow?",
  ansOne: "1. where user data is logged but not accessible to them.",
  anstwo: "2. data always flows in a single direction, which makes it easier to understand.",
  ansthree: "3. Monolithic architecture that reads from the top down.",
  ansfour: "4. performance advantages depending on how they’re organized because it’s possible to isolate services and scale them independent of the rest of the app.",
  correctChoice: 2,
},
]



var mainEl = document.querySelector("#seconds");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var highScores = document.querySelector(".navbar-brand");
one.addEventListener("click", checkAnswerOne);
two.addEventListener("click", checkAnswerTwo);
three.addEventListener("click", checkAnswerThree);
four.addEventListener("click", checkAnswerFour);
highScores.addEventListener("click", scores);
var index = 0;
var timeLeft = 300;
var score = 0;
startPage();
function startPage() {
  document.getElementById("qq").innerHTML = "Click here to start!";
  document.getElementById("quest").innerHTML = "Try your best at this JS test!";
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.querySelector("#qq").addEventListener("click", function() {
    questions = questionsArray[index];
    questionBuilder();
    console.log(questions);
    quizTime();
  }) 
}
function loop(){
  if (index < questionsArray.length) {
    questions = questionsArray[index];
    questionBuilder();
    console.log(questions);
    console.log(index);
  } else {
     score = timeLeft;
     endGame(); 
  }  
}      
function quizTime() {
   var timeInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft === 0) {
          score = timeLeft;
          clearInterval(timeInterval);
          endGame(); 
        } 
        mainEl.textContent = "" + timeLeft;
    }, 1000);
}
function checkAnswerOne(){
  index++
  if (1 === questions.correctChoice){
    correct();
  } else {
    incorrect();
  }
  loop();
}
function checkAnswerTwo(){
  index++
  if (2 === questions.correctChoice){
    correct();
  } else {
    incorrect();
  }
  loop();
}
function checkAnswerThree(){
  index++
  if (3 === questions.correctChoice){
    correct();
  } else {
    incorrect();
  }
  loop();
}
function checkAnswerFour(){
  index++
  if (4 === questions.correctChoice){
    correct();
  } else {
    incorrect();
  }
  loop();
}
function correct(){
  var tag = document.createElement("p");
    var t = document.createTextNode("correct")
    tag.appendChild(t)
    document.getElementById("result").appendChild(tag);
}
function incorrect(){
  var tag = document.createElement("p");
    var t = document.createTextNode("incorrect")
    tag.appendChild(t)
    document.getElementById("result").appendChild(tag);
    timeLeft -= 30;
}
function questionBuilder(){
  document.getElementById("qq").innerHTML = "Quiz Questions";
  document.getElementById("quest").innerHTML = questions.question;
  document.getElementById("one").innerHTML = questions.ansOne;
  document.getElementById("two").innerHTML = questions.anstwo;
  document.getElementById("three").innerHTML = questions.ansthree;
  document.getElementById("four").innerHTML = questions.ansfour;
}
function endGame(){
  var element = document.getElementById("form");
  element.parentNode.removeChild(element);
  document.getElementById("result").remove("P");
  var user = prompt("Your intials?");
  var tag = document.createElement("h1");
  var t = document.createTextNode("Game Over! " + user +" Your score = " + score);
  tag.appendChild(t)
  document.body.append(tag);
}
function scores(){
  console.log(score);

}


