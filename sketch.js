var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obsticle1, obsticle2,obsticle3, obsticle4, obsticle5,obsticle6



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obsticle1=loadImage("obsticle1.png");
  obsticle1=loadImage("obsticle2.png");
  obsticle1=loadImage("obsticle3.png");
  obsticle1=loadImage("obsticle4.png");
  obsticle1=loadImage("obsticle5.png");
  obsticle1=loadImage("obsticle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
 spawnObsticles() 
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime=300
    
    
    }
}
function spawnObsticles() {
  if(frameCount % 60===0){
    var obsticle= createSprite(600,165,20,12)
    trex.velocityX= -6;
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1:obsticle.addImage(obsticle1)
          break;
      case 2: obsticle.addImage(obsticle2)
         break;
      case 3:obsticle.addImage(obsticle3)
          break;
     case 4:obsticle.addImage(obsticle4)
          break;
      case 5:obsticle.addImage(obsticle5)
          break;
      case 6:obsticle.addImage(obsticle6)
          break;
          default:break
      
    }
    obsticle.Scale=0.5
    obsticle.lifetime=300
  }
}

