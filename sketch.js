//Global Variable
var bullet, wall,speed,wall,status,bulletImg,thickness;

function preload() {
bulletImg = loadImage("bullet.png");

}





function setup() {
  createCanvas(1600,700);

  thickness = Math.round(random(22,83));
  
  bullet = createSprite(45, 359, 100, 45);
  bullet.addImage(bulletImg);
  //bullet.scale = 0.3;
  wall = createSprite(1400, 350, thickness, height/2);
  wall.shapeColor = (80,80,80);
  bulSpeed = Math.round(random(123,221));
  bulWeight = Math.round(random(65,90));
  
  bullet.velocityX = bulSpeed;
  
}


function draw() {
  background("black"); 
  

  if(isTouching(bullet,wall)) {

    
    bullet.velocityX = 0;
    
    var Damage = Math.round(0.5*bulWeight*bulSpeed*bulSpeed/(thickness*thickness*thickness));
    textSize(50);
    fill("blue");
    text("Damage = "+Damage,1000,680);
    textSize(30);
    fill("white");
    text("Bullet Weight = " + bulWeight,15,680);
    fill("white");
    text("Bullet Speed = "+ bulSpeed,350,680);
    textSize(50);
    fill("white");
    text("Status = "+ status,300,200);
    textSize(30);
    fill("white");
    text("Wall Thickness = " + thickness,650,680);


    if(Damage > 10){
      wall.shapeColor = color(255,0,0);
      status = "Dangerous";
    } else if(Damage <= 10){
      wall.shapeColor = color(0,255,0);
      status = "Safe";
    } 

  }   

  
  
  
  

  drawSprites();
}