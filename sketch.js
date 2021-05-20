const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var line1,line2;
var mammoth;
var elephant;
var cup;


function preload(){
// elephantimg=loadImage("elephant.png")
 //mammothimg=loadImage("mammoth.png")
 //cup=loadImage("cup.png")
}

function setup(){
createCanvas(3000,700)
engine=Engine.create();
world=engine.world;

ground = new Ground(600, 600, 1200, 20);
var mammoth=createSprite(700,500,20,20);
var elephant=createSprite(900,700,20,20);
var cup=createSprite(1200,600,20,20);

line1=createSprite();
line2=createSprite();
}

function draw(){
    background("white");

    
    if (keydown(UP_ARROW)){
        elephant.velocityX=0
        elephant.velocityX=-3;
       }
    
       if (keydown(DOWN_ARROW)){
        elephant.velocityX=0
        elephant.velocityX=3;
       }   
   
      
       if (keydown(LEFT_ARROW)){
        elephant.velocityX=-3
        elephant.velocityX=0;
       }   

       if (keydown(RIGHT_ARROW)){
        elephant.velocityX=3
        elephant.velocityX=0;
       }






       if (keydown(UP_ARROW)){
        mammoth.velocityX=0
        mammoth.velocityX=-3;
       }
    
       if (keydown(DOWN_ARROW)){
        mammoth.velocityX=0
        mammoth.velocityX=3;
       }   
   
      
       if (keydown(LEFT_ARROW)){
        mammoth.velocityX=-3
        mammoth.velocityX=0;
       }   

       if (keydown(RIGHT_ARROW)){
        mammoth.velocityX=3
        mammoth.velocityX=0;
       }

       if(elephant.istouching(cup)){
           textSize(25);
           textFont("Bold");
           text("YOU WIN",2500,500);
       }
       textSize(30)
       text("CUP",1000,550)
       textSize(30)
       text("elephant",800,600)
       text("mammoth",600,400);
       
       if(elephant.istouching(cup)){
           elephant.velocityX=0;
           elephant.velocityY=0;
       }

       if(elephant.istouching(cup)){
        mammoth.velocityX=0;
        mammoth.velocityY=0;
    }
       
       
}