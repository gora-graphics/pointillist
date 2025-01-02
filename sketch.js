let bg;
let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('Untitled-3.jpg');
  
}

function setup() {
  
  createCanvas(1656, 1080);
  smallPoint = 4;
  largePoint = 40;
  background(img);
  imageMode(CENTER);
  
  noStroke();
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
  
  
}
