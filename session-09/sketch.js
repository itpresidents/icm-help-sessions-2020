// ICM Help Sessions – Lesson 9
// NYU ITP, Fall 2020
// by Billy Bennett
// This sketch is a simple animation of a "spirit" image
// falling from the sky and breaking a previously invisible
// piece of glass. Here we work with triggering sounds,
// changing audio effects parameters, and manipulating images
// based on animated events.


let w = 200;
let spirit;
let glass;
let scale = 0;
let scream, screamDur, screamPlaying;
let shatter, shatterDur, shatterPlaying;
let reverb;
let rot = 0;
let clicked = false;


function preload() {
  spirit = loadImage('assets/spirit.png');
  glass = loadImage('assets/broken-glass.png');
  scream = loadSound('assets/scream-oof-mono.mp3');
  shatter = loadSound('assets/break-glass.mp3');
}


function setup() {
  let can = createCanvas(600, 600);
  colorMode(HSL);
  imageMode(CENTER);

  screamDur = scream.duration();
  shatterDur = shatter.duration();
  // The nf() function allows us to write floating point numbers to a 
  // specific decimal place.
  console.log("scream is " + nf(screamDur, 0, 2) + " seconds long");
  console.log("shatter is " + nf(shatterDur, 0, 2) + " seconds long");

  // Here we'll add some reverb and connect it to our sound.
  reverb = new p5.Reverb();
  
  // We'll disconnect the scream sound from the Master so 
  // that we only hear it processed through the reverb.
  scream.disconnect();
  // 3 second reverb time, decayRate of 2%
  reverb.process(scream, 3, 2);
  
}

function draw() {
  background(80, 255, 90);

  //// For intial testing, we can map the scale to the mouseX.
  // scale = constrain(map(mouseX, 0, width, 20, 220), 20, 220);

  // We will have to check these a couple times, 
  // so let's only call them once.
  screamPlaying = scream.isPlaying();
  shatterPlaying = shatter.isPlaying();

  // Here we get the current time of the scream sound.  
  let screamCur = scream.currentTime();
  // And the progress scaled from 0-1.
  screamProg = screamCur / screamDur;

  // Let's stop the scaling right before the oof in the scream sound
  // The last boolean argument constrains the values within our bounds
  if(screamPlaying) {
    scale = map(screamCur, 0.0, screamDur - 0.5, 10.0, 400.0, true);
    // console.log("image scale is = " + scale);
  } else {
    scale = scale;
  }
  
  // We will map the reverb mix from full reverb mix (wet) 
  // to no reverb (dry) as the spirit gets closer to us.  
  let m = map(screamCur, 0.0, screamDur, 1.0, 0.0);
  reverb.drywet(m);

  //// Our spirit from The Legend of Korra with no animations
  // image(spirit, width*0.5, height*0.5, scale, scale);

  // Would be nice to rotate the spirit as it 'falls' so we can use
  // translate() and rotate() inside of push() and pop(). 
  push();
  translate(width * 0.5, height * 0.5);
  // Check here to see if we have clicked the page yet.
  if (clicked) {
    rotate(rot);
    image(spirit, 0, 0, scale, scale);
  } //else {
  //   scale = scale;
  //   image(spirit, 0, 0, scale, scale);
  // }
  pop();

  // Once our the scream sound is almost done 
  // aka our spirit is close enough...
  if (screamProg > 0.92) {
  // Draw the glass shattered image
    image(glass, width * 0.45, height * 0.4, width * 0.45, height * 0.45);
  // ... and stop the rotation.
    rot = rot;
  } else {
  // Otherwise keep rotating the spirit image.
    rot = frameCount * 0.15;
  }
  
  // If the scream is playing & near the end
  // & the shatter sound is not playing, then play shatter.
  if (screamPlaying && screamProg > 0.92 && !shatterPlaying) {
    shatter.play();
  }

  //// We only want to play the first 1.5 seconds of the shatter sound, 
  // but for some reason, the addCue() function is buggy.
  
  // shatter.addCue(1.5, shatterStop);

  // So we can hand code it like so.  
  let shatterCur = shatter.currentTime();
  // console.log(shatterCur);
  if (shatterCur > 1.5) {
    shatter.stop();
    console.log("shatter stopped");
  }
}

function mousePressed() {
  // The first time we click on the canvas 
  // will start the spirit image rotating.
  clicked = true;
  if (!screamPlaying) {
    scream.play();
    console.log("scream playing");
  } else if (screamPlaying) {
    scream.stop();
    console.log("scream stopped");
  }
}

// This is a callback from the addCue() function which is buggy rn.
function shatterStop() {
  shatter.stop();
  console.log('shatter stopped');
}