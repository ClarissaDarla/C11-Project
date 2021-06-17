var ship,shipImg;
var sea,seaImg;

function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  
  sea = createSprite (400,300,800,20);
  sea.addImage("sea1",seaImg);
  sea.scale = 0.4;
  
  sea.velocityX=-4;
  
  ship = createSprite(400,300,50,50);
  ship.addAnimation("ship1",shipImg);
  ship.scale = 0.5;
  
}

function draw() {
  background("blue");
  if(sea.x<0){
  sea.x = sea.width/10;
  }
  
  
 drawSprites();

}