var r = 0;
var g = 50;
var b=255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r,g,b);
  
  r = map (mouseX,0,100,0,255);
  g = map (mouseX,0,100,0,50);
  b = map (mouseX,0,100,0,0);
  ellipse (mouseX,20,20);
  
}