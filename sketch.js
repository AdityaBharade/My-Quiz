var canvas;
var gameState,contestantCount,quiz,question,contestant,game;
var database;
var allContestants;

function setup(){

 database = firebase.database();

  canvas = createCanvas(850,400);

  gameState = 0;

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  
 



}


function draw(){
  
  background("pink");

  if(contestantCount===4){

    gameState = 1;
    quiz.update(1);

  }

  if(gameState === 1){

   question.play();

  }

  
}
