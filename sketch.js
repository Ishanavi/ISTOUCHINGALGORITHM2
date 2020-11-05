var frec,mrec









function setup() {
  createCanvas(1200,800);
 frec = createSprite(200, 200, 50, 80);
 frec.shapeColor = "green";
 frec.debug = true;
 mrec = createSprite(400,200,80,50);
 mrec.shapeColor = "green";
 mrec.debug = true;

}

function draw() {
 background(0);  

mrec.x = World.mouseX;
mrec.y = World.mouseY;

if(mrec.x - frec.x < frec.width/2+mrec.width/2 
  && frec.x - mrec.x < frec.width/2+mrec.width/2 
  && frec.y - mrec.y < frec.height/2+mrec.height/2
  && mrec.y - frec.y < frec.height/2+mrec.height/2)
{
 frec.shapeColor = "red";
 mrec.shapeColor = "red";
}

else {
  frec.shapeColor = "green";
  mrec.shapeColor = "green";
 }

  drawSprites();
}