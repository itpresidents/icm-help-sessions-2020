// Did you know that, using commas, you can create multiple empty variables?
let w, h;
let noise, filter, ampEnv, osc, amplitude;
let lightSaber, deathStar, opacity, mouseMove, prevMouse;
let drawn = false;



function preload() {
  lightSaber = loadImage('assets/light-saber.png');
  deathStar = loadImage('assets/death-star.jpeg');
}


function setup() {
  // Did you know that once we have preloaded the image,
  // we can use it's width and height?
  w = deathStar.width, h = deathStar.height;   // Note the comma syntax again.
  console.log(w, h);

  createCanvas(w, h);
  strokeWeight(2);
  imageMode(CENTER);
  textSize(18);

  // This function removes the default mouse cursor from our canvas
  // which we will replace with out light saber.
  noCursor();

  // Noise is an assortment of oscillators at random frequencies.
  noise = new p5.Noise();
  // As such, it can be quite loud so we will turn the overall volume down quite a bit.
  masterVolume(0.2);
  // We could also put this on a slider?  TO DO?

  // We'll use an Envelope to control the overall amplitude.
  ampEnv = new p5.Envelope();
  ampEnv.setADSR(0.01, 0.2, 0.2, 0.0);
  ampEnv.setRange(0.5, 0.05);
  ampEnv.connect(noise);

  filter = new p5.BandPass();
  filter.res(5);

  filtEnv = new p5.Envelope(0.001, 400, 0.01, 4000, 1.0, 100);
  filtEnv.setExp(true);
  // filtEnv.setADSR(0.01, 0.1, 500, 100);
  // filtEnv.setRange(7000, 200);
  filtEnv.connect(filter);

  noise.disconnect();
  noise.connect(filter);
  noise.start();

  // amplitude = new p5.Amplitude();
  // amplitude.smooth(0.97);
  // noise.connect(amplitude);

  osc1 = new p5.Oscillator('saw');
  osc1.freq(100);
  // osc1.disconnect();
  // osc1.start();

  osc2 = new p5.Oscillator('saw');
  osc2.freq(150);
  // osc2.disconnect();
  // osc2.start();
}

function draw() {
  // first we change the filter freq with mouseX
  // filter.freq(map(mouseX, 0, width, 50, 5000));
  // then we use an Envelope
  filter.freq(filtEnv);

  // now we swing the light saber
  let mouseAmp = map(mouseY, height, 0, 0.0, 0.8);
  osc1.amp(mouseAmp);
  osc2.amp(mouseAmp);
  let swing = map(mouseMove, 0, 100, 0, 50, true);
  osc1.freq(80 + swing);
  osc2.freq(100 + swing);

  drawDeathStar();
  drawInstructions();
  if(drawn) {
    background(255, opacity);
    drawLightSaber();
  }

}

function mousePressed() {
  drawn = true;
  userStartAudio();
  filtEnv.play();
  ampEnv.play();
  osc1.start(1.0);
  osc2.start(1.0);
}

function drawDeathStar() {
    image(deathStar, w*0.5, h*0.5);
}

function drawInstructions() {
  fill(255);
  text("Click to draw your light saber!", 25, 30);
}

function drawLightSaber() {
  push();
  translate(mouseX, mouseY);
  let rot = map(mouseX, 0, width, -2, 0.5);
  rotate(rot);
  let w = lightSaber.width*0.2;
  image(lightSaber, 0, 0, w, w);
  pop();

  mouseMove = abs(mouseX - prevMouse);
  // We can smooth the frequency changes by interpolating the mouse position
  // and previous mouse position.
  // let mouseLerp = lerp(prevMouse, mouseX, 0.5);
  // mouseMove = abs(mouseLerp - prevMouse);

  // We feed opacity our background's alpha color channel.
  // This will flicker the white color which is drawn over the Death Star image.
  opacity = abs(map(mouseMove, 0, 10, 0.5, 10));
  prevMouse = mouseX;

}

// How could we start the sketch with a mouse click?
