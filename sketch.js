var b1,b2,b3,b4;
var level=[];

function preload(){
      bSound = loadSound("blue.mp3");
      gSound = loadSound("green.mp3");
      wrong = loadSound("wrong.mp3");
      yellow = loadSound("yellow.mp3");
      red = loadSound("red.mp3");
}
function setup(){
  createCanvas(450,450);
    b1=createSprite(160,150,90,90);
    b2=createSprite(290,150,90,90);
    b3=createSprite(160,270,90,90);
    b4=createSprite(290,270,90,90);
    b1.shapeColor="red";
    b2.shapeColor="green";
    b3.shapeColor="blue";
    b4.shapeColor="yellow";

   
}
function draw(){
    background(0);
    textSize(24);
    fill("white");
    strokeWeight(1);
    stroke("black");
    text("Simon",190,30);
    fill(random(0,255),random(0,255),random(0,255));
    text("Level = "+level,160,65);
    
    if (frameCount%30===0){
        Colour();
    }
    Click();
    drawSprites();
}
function Click(){

  if (mousePressedOver(b3)){
    bSound.play();
    
  }
  if (mousePressedOver(b2)){
     gSound.play();
     
   }
  
   //wrong.play();
   //}
   if (mousePressedOver(b4)){
        yellow.play();
        
   }
     if (mousePressedOver(b1)){
          red.play();
          
     }

}
function Colour(){
  if (level){
    if (frameCount%20===0){
  var rand = Math.round(random(1,4));
  switch(rand){
    case 1:b1.shapeColor=color(200,30,60);
    break;
    case 2:b2.shapeColor=color(0,200,50);
    break;
    case 3:b3.shapeColor=color(200,100,0);
    break;
    case 4:b4.shapeColor=color(200,0,100);
    break;
    default:break
  }
}
}else {
      level=null
}
}
