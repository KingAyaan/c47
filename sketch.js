var bg,bgImg;
var ironman,ironmanIMG,ironmanRunning
var thanos, thanosIMG,thanosRunning


function preload(){
  ironmanRunning = loadAnimation("assets/ironman2.png " , "assets/ironman3.png" , "assets/ironman4.png")
  ironmanIMG = loadImage("assets/ironman1.png")
  thanosRunning = loadAnimation("assets/thanos2.png " , "assets/thanos3.png" , "assets/thanos4.png")
  thanosIMG = loadImage("assets/thanos1.png")
  bgImg = loadImage("assets/background1.png")
  obstacle1 = loadImage("assets/shield.png");
  obstacle2 = loadImage("assets/hammer.png");
  obstacle3 = loadImage("assets/lazer.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  path=createSprite(width/2,height/2);
  path.addImage(bgImg);
 path.velocityX = -5;
 path.scale=1.5

  thanos = createSprite(250,height/2,20,20)
  thanos.addAnimation("evil",thanosRunning)
  thanos.scale = 0.3


  ironman = createSprite(width/2,height/2,20,20)
  ironman.addAnimation("good",ironmanRunning)
  ironman.scale = 0.3



  invisibleGround = createSprite(width/2,height/2+200,width,10);
  invisibleGround.visible = false;
 

  invisibleGround2 = createSprite(width/2,250,width,10);
  invisibleGround2.visible = false;
}

function draw() {
  background(0); 

console.log(ironman.y)

  if(path.x < 650 ){
    path.x = width/2;
  }
  
  ironman.collide(invisibleGround2)
  thanos.collide(invisibleGround2)

  if(keyDown("space")&& ironman.y >= 516){
    ironman.velocityY=-15
    thanos.velocityY=-15

  }

  ironman.velocityY = ironman.velocityY + 0.6
  thanos.velocityY = thanos.velocityY + 0.6

 ironman.collide(invisibleGround)
 thanos.collide(invisibleGround)

 spawnObstacles()

drawSprites();

}



function spawnObstacles(){
  if (frameCount % 150 === 0){
    var obstacle = createSprite(width,height/2+190,10,40);
    obstacle.velocityX = -(6);
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
       obstacle.scale = 0.5;
               break;
       case 2: obstacle.addImage(obstacle2);
       obstacle.scale = 0.3;
               break;

      case 3: obstacle.addImage(obstacle3);
      obstacle.scale = 0.1;
                       break;

       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
    // obstaclesGroup.add(obstacle);
  }
 }
 