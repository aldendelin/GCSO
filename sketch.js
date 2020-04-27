var car1weight = 0;
 var car2weight = 0;
 var car3weight = 0;
 var car4weight = 0;
 var car1speed = 0;
 var car2speed = 0;
 var car3speed = 0;
 var car4speed =0;

 var car1deformation=0;
 var car2deformation=0;
 var car3deformation=0;
 var car4deformation=0;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(20, 200, 60, 1600);
  sp1 = createSprite(800, 100, 1600, 10); 
  sp2 = createSprite(800, 200, 1600, 10); 
  sp3 = createSprite(800, 300, 1600, 10); 
  
  car1 = createSprite(1500,50,20,20);
  car2 = createSprite(1500,150,20,20);
  car3 = createSprite(1500,250,20,20);
  car4 = createSprite(1500,350,20,20);
  
  car1.shapeColor = "white";
  car2.shapeColor = "white";
  car3.shapeColor = "white";
  car4.shapeColor = "white";

}

function draw() {
  background("pink");  

car1.velocityX = -5;
car2.velocityX = -5;
car3.velocityX = -5;
car4.velocityX = -5;

  if(car1.x-wall.x < car1.width/2+wall.width/2){
    car1.velocityX = 0;
    deformation();
    text("Deformation of car1: "+ car1deformation, 500,50);
  }

  if(car2.x-wall.x < car2.width/2+wall.width/2){
    car2.velocityX = 0;
    deformation();
    text("Deformation of car2: "+ car2deformation, 500,150);
  }

  if(car3.x-wall.x < car3.width/2+wall.width/2){
    car3.velocityX = 0;
    deformation();
    text("Deformation of car3: "+ car3deformation, 500,250);
  }

  if(car4.x-wall.x < car4.width/2+wall.width/2){
    car4.velocityX = 0;
    deformation();
    text("Deformation of car4: "+ car4deformation, 500,350);
  }

wall.lifetime = -1;
sp1.lifetime = -1;
sp2.lifetime = -1;
sp3.lifetime = -1;

  drawSprites();
}

function deformation(){
  car1weight = 500;
  car2weight = 1400;
  car3weight = 800;
  car4weight = 1100;

  car1speed = 40;
  car2speed = 80;
  car3speed = 95;
  car4speed = 55;
  
  car1deformation = (0.5*car1speed*car1speed*car1weight)/22500;
  car2deformation = (0.5*car2speed*car2speed*car2weight)/22500;
  car3deformation = (0.5*car3speed*car3speed*car3weight)/22500;
  car4deformation = (0.5*car4speed*car4speed*car4weight)/22500;
  
  wall.visible = true;
  sp1.visible = true;
  sp2.visible = true;
  sp3.visible = true;

  if(car1deformation<100){
    car1.shapeColor = "green";
  }
  
  if(car2deformation<100){
    car2.shapeColor = "green";
  }
  
  if(car3deformation<100){
    car3.shapeColor = "green";
  }
  
  if(car4deformation<100){
    car4.shapeColor = "green";
  }
  
  if(car1deformation<181 && car1deformation>99){
    car1.shapeColor = "yellow";
  }
  
  if(car2deformation<181 && car2deformation>99){
    car2.shapeColor = "yellow";
  }
  
  if(car3deformation<181 && car3deformation>99){
    car3.shapeColor = "yellow";
  }
  
  if(car4deformation<181 && car4deformation>99){
    car4.shapeColor = "yellow";
  }
  
  if(car1deformation>180){
    car1.shapeColor = "red";
  }
  
  if(car2deformation>180){
    car2.shapeColor = "red";
  }
  
  if(car3deformation>180){
    car3.shapeColor = "red";
  }
  
  if(car4deformation>180){
    car4.shapeColor = "red";
  }
}