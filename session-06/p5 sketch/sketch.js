let pusheen;
let pixelSize = 3;
let superPixels = [];
let isStickingTogether = false;

function preload(){
  pusheen = loadImage('pixelPusheen.png');
}
function setup() {
  createCanvas(400, 400);
  noStroke();
  pusheen.loadPixels();
  
  //make new object pixels using the data we get from the pusheen pixels
  for(let x = 0; x < pusheen.width; x += pixelSize){
    for(let y = 0; y < pusheen.height; y += pixelSize){
      let index = ((y*pusheen.width) + x) * 4;
      let redVal = pusheen.pixels[index];
      let greenVal = pusheen.pixels[index+1];
      let blueVal = pusheen.pixels[index+2];
      //no alpha needed, ignore index+3
      let newCol = color(redVal, greenVal, blueVal);
      let newPixel = new SuperPixel(x + 100, y + 100, pixelSize, newCol);
      superPixels.push(newPixel);
    }
  }
}

function draw() {
  background(155, 0, 155);
  
  for(let i = 0; i < superPixels.length; i++){
    if(dist(mouseX, mouseY, superPixels[i].x, superPixels[i].y) < 30){
      superPixels[i].repel(mouseX, mouseY);  
    }
    if(isStickingTogether){
      superPixels[i].goHome();
    }
    superPixels[i].show();
  }
}

function mousePressed(){
  isStickingTogether = !isStickingTogether;
}