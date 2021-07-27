var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var level=0
var form, player, game;
var background1,background2,background3
var isCorrect=0
var sound1
var checkCorrect=0


function preload() {

background1=loadImage("Images/startbackground.jpg")
background2=loadImage("Images/quizbackground.jpeg")
background3=loadImage("Images/dancestage.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1&&isCorrect==0){
    clear();
    level=1
    game.play();
  }
  if(level==1){
   form.displaylevel1()
  }
  if(gameState===2){
   game.end();
  }
  if(isCorrect==1||isCorrect==2||checkCorrect==1){
 game.dancelevel()
  }
}
