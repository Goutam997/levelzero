var readlineSync = require('readline-sync');
var players = new Array();
var playerData = {};
//var p = "true";
var again = "yes";

while(again == "yes"){
var userName = readlineSync.question("Please enter your name: ");
//var userName = prompt("enter your name");
console.log("Hi "+userName+". How well do you know GOUTAM");

var highScore= 0;
const q1 = {question : "Am i older than 25? ", ans : "No"}
const q2 = {question : "Where am i from? ", ans : "Cuttack"}
var p= "true";
var quizArr = new Array();
quizArr.push(q1);
quizArr.push(q2);
// play(questionOne, ansOne);
// play(questionTwo, ansTwo);
while(p == "true"){
var score = 0;
for (var i=0; i<quizArr.length; i++){
  play(quizArr[i].question, quizArr[i].ans);
  console.log("---------");
}
console.log("Final score:" + score);
if(score >= highScore){
  highScore= score;
}
p = readlineSync.question("Do you still want to play: (true/false) ");
}
console.log("Your High score is:" + highScore);

playerData.name = userName;
playerData.high_score = highScore;
players.push(playerData);

again = playAgain();
}

function play(questionQ, Answer){
var userAnsOne = readlineSync.question(questionQ);
if(userAnsOne==Answer){
  score+=1;
  console.log("you are right!")
}
else{
  console.log("you are wrong!!")  
}
}

function playAgain(){
  var play_again = readlineSync.question("New Game? [yes/no]");
  return play_again;
}

