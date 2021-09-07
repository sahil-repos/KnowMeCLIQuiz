//ex13: put a list of questions together


var que1 = {
  que: "Who is my favorite superhero? ",
  ans: "Superman"
}
var que2={
  que:"Who is my favourite anti- hero?",
  ans:"Stansfield"
}
var que3={
  que:"Where do I live? ",
  ans:"Ghaziabad"
}
var que4={
  que:"A)Scaling Mt.Everest \n B)swimming with whale\n what would excite me the most? ",
  ans:"B"
}
var que5={
  que:"I prefer Coffee over Tea?[y/n] ",
  ans:"y"
}
var que6={
  que:"My favourite cricketer? ",
  ans:"Sehwag"
}

var queList=[que1,que2,que3,que4,que5,que6];


//ex14: club everything to make the game
var rls = require("readline-sync");
var chalk=require('chalk');
var log=console.log;

var score = 0;
var highScore=0;

var userScores = [
  {
    name: "Sahil",
    score: 6,
  }

  
]

function getScore() {
   var userName = rls.question("Hi, let's play a game to check how well you know  me. \n Please enter your name to continue..");
     log(chalk.yellow.bold("*******************************************"));

  for (var i=0; i<queList.length; i++) {
    var q = queList[i];
    testQuestion(q.que, q.ans)
  }
  var element={};
  element[ "name" ] = userName;
  element["score"]=score;
  userScores.push(element);
  log(chalk.yellow.bold("*******************************************"));
  log(chalk.black.bgWhite.bold("Final score: ",score));
  log(chalk.yellow.bold("*******************************************"));
  if(score>highScore){
    var msg=score>3?" You know a lot about me!!!":"";
    log(chalk.red.bold("NEW HIGH SCORE",msg));
    highScore=score;
  }
  else{
    log(chalk.red.bold("So close to beating previous highscore of ",highScore));
  }
  score=0;
  anotherGame();

}

function testQuestion(question, answer)
 {
  var inp = rls.question(question);

  if (inp.toUpperCase() === answer.toUpperCase())
   { 
   log(chalk.green.bold("Correct!"));
    score = score + 1;
    
  } 
  else 
  {
    log(chalk.red.bold("Oops, slightly off the correct!"));  
  }
  console.log("\n current score: "+score+"\n");
}

function anotherGame(){
  var choice=rls.question("Want to try again ?[y/n] ");
  if(choice==="y"){
    getScore();
  }
}

getScore();
