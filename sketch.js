function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX=0;
  movingRect.velocityY=-2;

  fixedRect.velocityY=2;
  fixedRect.velocityX=0;

}

function draw() {
  background(0,0,0); 
 //movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY;
fill("orange");
text("MR-FR  x: " + (movingRect.x-fixedRect.x),200,100);
text("FR-MR  x: " + (fixedRect.x-movingRect.x),200,120);

text("MR-FR  y: " + (movingRect.y-fixedRect.y),200,150);
text("FR-MR  y: " + (fixedRect.y-movingRect.y),200,170);


 if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2 && 
    fixedRect.x-movingRect.x<=(movingRect.width+fixedRect.width)/2 &&
    movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2 && 
    fixedRect.y-movingRect.y<=(movingRect.height+fixedRect.height)/2){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
 }else
 {
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
 }

 if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2 && 
    fixedRect.x-movingRect.x<=(movingRect.width+fixedRect.width)/2 &&
    movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2 && 
    fixedRect.y-movingRect.y<=(movingRect.height+fixedRect.height)/2){

   movingRect.velocityY=movingRect.velocityY * -1;
   movingRect.velocityX=movingRect.velocityX * -1;

   fixedRect.velocityY=fixedRect.velocityY * -1;
   fixedRect.velocityX=fixedRect.velocityX * -1;
 }

  drawSprites();
}