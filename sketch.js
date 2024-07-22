//variables//
var heartX = 250;
var xSpeed = 5;    
 
function setup() {
  createCanvas(windowWidth,windowHeight);
 fill(random(0,255),random(0,255),random(0,255));
}
function draw() {
  
 //console.log(random(0,255));
 background(0,0,0);
 heart(heartX,height/2,300);

 heartX= heartX+ xSpeed;
  if (heartX > width) {
   xSpeed =  - xSpeed;
    fill(random(0,255),random(0,255),random(0,255));
 }
  if (heartX< 0){
     xSpeed =  - xSpeed;
    fill(random(0,255),random(0,255),random(0,255));
  }
  
}
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

        