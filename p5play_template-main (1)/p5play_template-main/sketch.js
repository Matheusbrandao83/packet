var box


function setup() {
  createCanvas(1000,1000);
  box = createSprite(1000,1000,30,30);
}


function draw() 
{
  background("blue");
  if(keyDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5
  }
drawSprites()
}




