// ICM Help Sessions – Lesson 2
// NYU ITP, Fall 2020
// original version by Yuguang Zhang, 9/12/2020
// original piece: "Catalog" 
// artist: John Whitney
// year: 1961

//r stands for radius, and it is a variable.
let r = 50;


function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  noFill();
}

function draw() {
  // paint the background black with some alpha
  background(0, 10);


  // comment / uncomment each section to see different effects

  //   // ----- 1. static ------

  //   // move the starting point to the middle
  //   translate(width / 2, height / 2);

  //   // set the stroke color in HSB & weight, then draw the 1st inner circle
  //   stroke(40, 100, 100);
  //   strokeWeight(5);
  //   ellipse(0, 0, 50);

  //   // same thing for the 2nd circle
  //   stroke(50, 100, 90);
  //   strokeWeight(5);
  //   // ellipse(0, 0, 100);

  //   // 3rd circle
  //   stroke(60, 100, 80);
  //   strokeWeight(5);
  //   ellipse(0, 0, 150);

  //   // 4th circle
  //   stroke(70, 100, 70);
  //   strokeWeight(5);
  //   ellipse(0, 0, 200);

  //   // 5th circle
  //   stroke(80, 100, 60);
  //   strokeWeight(5);
  //   ellipse(0, 0, 250);

  //   // 6th circle
  //   stroke(90, 100, 50);
  //   strokeWeight(5);
  //   ellipse(0, 0, 300);

  //   // 7th circle
  //   stroke(100, 100, 40);
  //   strokeWeight(5);
  //   ellipse(0, 0, 350);

  //   // 8th circle
  //   stroke(110, 100, 30);
  //   strokeWeight(5);
  //   ellipse(0, 0, 400);

  //     //----- 2. use built-in varialble "mouseX" (X position of mouse) to control location of circles -----

  //     // set the stroke color in HSB & weight, then draw the 1st inner circle
  //     stroke(40, 100, 100);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 50);

  //     // same thing for the 2nd circle
  //     stroke(50, 100, 90);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 100);

  //     // 3rd circle
  //     stroke(60, 100, 80);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 150);

  //     // 4th circle
  //     stroke(70, 100, 70);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 200);

  //     // 5th circle
  //     stroke(80, 100, 60);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 250);

  //     // 6th circle
  //     stroke(90, 100, 50);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 300);

  //     // 7th circle
  //     stroke(100, 100, 40);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 350);

  //     // 8th circle
  //     stroke(110, 100, 30);
  //     strokeWeight(5);
  //     ellipse(mouseX, mouseY, 400);


  //     // -- -- - 3. mouseX controlling variable r(radius) -- -- -

  //     // move the starting point to the middle
  //     translate(width / 2, height / 2);

  //     // map r to mouse
  //     r = map(mouseX, 0, width, 20, 300);

  //     // set the stroke color in HSB & weight, then draw the 1st inner circle
  //     stroke(40, 100, 100);
  //     strokeWeight(5);
  //     ellipse(0, 0, r);


  //     // same thing for the 2nd circle
  //     stroke(50, 100, 90);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 50);

  //     // 3rd circle
  //     stroke(60, 100, 80);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 100);

  //     // 4th circle
  //     stroke(70, 100, 70);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 150);

  //     // 5th circle
  //     stroke(80, 100, 60);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 200);

  //     // 6th circle
  //     stroke(90, 100, 50);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 250);

  //     // 7th circle
  //     stroke(100, 100, 40);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 300);

  //     // 8th circle
  //     stroke(110, 100, 30);
  //     strokeWeight(5);
  //     ellipse(0, 0, r + 350);


  //   // ----- 4. frameCount controlling variable r -----

  //   // move the starting point to the middle
  //   translate(width / 2, height / 2);

  //   // map r to frameCount
  //   // r = map(frameCount, 0, 200, 20, 200); // map frameCount to an increasing r
  //   r = map(frameCount, 0, 200, 200, 20); // map frameCount to a decressing r
  //   r = constrain(r, 0, 200); // constrain r so that it does not grow / shrink forever

  //   // set the stroke color in HSB & weight, then draw the 1st inner circle
  //   stroke(40, 100, 100);
  //   strokeWeight(5);
  //   ellipse(0, 0, r);

  //   // same thing for the 2nd circle
  //   stroke(50, 100, 90);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 50);

  //   // 3rd circle
  //   stroke(60, 100, 80);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 100);

  //   // 4th circle
  //   stroke(70, 100, 70);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 150);

  //   // 5th circle
  //   stroke(80, 100, 60);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 200);

  //   // 6th circle
  //   stroke(90, 100, 50);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 250);

  //   // 7th circle
  //   stroke(100, 100, 40);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 300);

  //   // 8th circle
  //   stroke(110, 100, 30);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + 350);


  // ----- 5. frameCount controlling variable r Version 2-----

  // move the starting point to the middle
  translate(width / 2, height / 2);

  // map r to frameCount
  r = map(frameCount, 0, 200, 200, 20);

  // set the stroke color in HSB & weight, then draw the 1st inner circle
  stroke(40, 100, 100);
  strokeWeight(5);
  ellipse(0, 0, r);

  // same thing for the 2nd circle
  stroke(50, 100, 90);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 0.1);

  // 3rd circle
  stroke(60, 100, 80);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 0.3);

  // 4th circle
  stroke(70, 100, 70);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 0.5);


  // 5th circle
  stroke(80, 100, 60);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 0.7);


  // 6th circle
  stroke(90, 100, 50);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 0.9);


  // 7th circle
  stroke(100, 100, 40);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 1.1);


  // 8th circle
  stroke(110, 100, 30);
  strokeWeight(5);
  ellipse(0, 0, r + frameCount * 1.3);


  //   // ----- 6. frameCount controlling variable r Version 2 + random color-----

  //   // move the starting point to the middle
  //   translate(width / 2, height / 2);

  //   // map r to frameCount
  //   // r = map(frameCount, 0, 300, 20, 200);
  //   r = map(frameCount, 0, 200, 200, 20);

  //   //Use random to change the colors of the circles
  //   //change the randomSeed number to see different random colors!
  //   randomSeed(3600);
  //   let h; // h stands for hue

  //   // get a random hue color, then draw the 1st inner circle
  //   h = random(0, 360);
  //   stroke(h, 100, 100);
  //   strokeWeight(5);
  //   ellipse(0, 0, r);

  //   // same thing for the 2nd circle
  //   h = random(0, 360);
  //   stroke(h, 100, 90);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 0.1);

  //   // 3rd circle
  //   h = random(0, 360);
  //   stroke(h, 100, 80);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 0.3);

  //   // 4th circle
  //   h = random(0, 360);
  //   stroke(h, 100, 70);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 0.5);


  //   // 5th circle
  //   h = random(0, 360);
  //   stroke(h, 100, 60);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 0.7);


  //   // 6th circle
  //   h = random(0, 360);
  //   stroke(h, 100, 50);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 0.9);


  //   // 7th circle
  //   h = random(0, 360);
  //   stroke(h, 100, 40);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 1.1);


  //   // 8th circle
  //   h = random(0, 360);
  //   stroke(h, 100, 30);
  //   strokeWeight(5);
  //   ellipse(0, 0, r + frameCount * 1.3);
}