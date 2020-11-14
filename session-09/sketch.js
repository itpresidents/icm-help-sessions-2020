// ICM Help Sessions – Lesson 9
// NYU ITP, Fall 2020
// by Billy Bennett
// This sketch is a simple animation of a "spirit" image
// falling from the sky and breaking a previously invisible
// piece of glass. Here we work with triggering sounds,
// changing audio effects parameters, and manipulating images
// based on animated events.


let spirit;
let scream, screamDur;
let shatter;
let glass;
let scale = 0.001;
let mix = 1.0;
let reverb;
let rot = 0;


function preload() {
  spirit = loadImage('assets/spirit.png');
  glass = loadImage('assets/broken-glass.png')
  scream = loadSound('assets/scream-oof-mono.mp3');
  shatter = loadSound('assets/break-glass.mp3');
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSL);
  imageMode(CENTER);

  masterVolume(0.3);

  screamDur = scream.duration();
  console.log("scream is " + nf(screamDur, 0, 2) + " seconds long");

  reverb = new p5.Reverb();

  scream.disconnect();

  // 3 second reverb time, decayRate of 2%
  reverb.process(scream, 3, 2);

  scream.play();
}

function draw() {
  background(80, 255, 90);

  let screamCur = scream.currentTime();
  let screamProg = screamCur/screamDur; // value between 0.0 & 1.0

  // If the sound is playing, scale the image to the progress
  // and change the wet/dry mix of the reverb,
  // Else leave scale alone and set mix to fully 'dry'
  if (scream.isPlaying()) {
    scale = map(screamProg, 0.0, 1.0, 10, 400);
    mix = map(screamCur, 0.0, screamDur, 1.0, 0.0);
  } else {
    scale = scale;
    mix = 0.0;
  }
  reverb.drywet(mix);

  if (screamProg > 0.94 && !shatter.isPlaying()) {
    shatter.play();
  }

  push();
  translate(width * 0.5, height * 0.5);
  rotate(rot);
  image(spirit, 0, 0, scale, scale);
  pop();

  if (screamProg < 0.94 && scream.isPlaying()) {
    rot = frameCount*0.15;
  } else {
    rot = rot;
    image(glass, width * 0.45, height *0.4, width * 0.45, height *0.4);
  }

  if (shatter.currentTime() > 1.5) {
    shatter.stop();
  }

}
