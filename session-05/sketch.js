// ICM Help Sessions – Week 5
// NYU ITP, Fall 2020
// original version by Yuguang Zhang, 10/7/2020
// original piece: "Morisawa" 
// artist: John Maeda
// year: 1996

let jFont;
let tSize;
let t = "code";

let bbox;

function preload() {
  jFont = loadFont("electroharmonix.ttf")
}

function setup() {
  createCanvas(400, 400);
  textFont(jFont);
  fill(0);
  // noLoop();
}

function draw() {
  background(242);

  // //-------------1 line---------------
  // tSize = 160;
  // textSize(tSize);
  // bbox = jFont.textBounds(t, 0, 0, tSize);
  // text(t, 0, bbox.h);


  //-------------2 lines--------------------
  //     tSize = 160;
  //     textSize(tSize);
  //     bbox = jFont.textBounds(t, 0, 0, tSize);
  //     text(t, 0, bbox.h); //finish drawing first line of text

  //     curY = bbox.h; //for line 2, set its current Y position using the height of the first line's bounding box

  //     tSize = tSize / 2;
  //     textSize(tSize);
  //     bbox = jFont.textBounds(t, 0, 0, tSize);
  //     text(t, 0, curY + bbox.h);
  //     curX = bbox.w; //update the current X position for the second word
  //     text(t, curX, curY + bbox.h);

//   //-----------2 lines with left offset--------------------
//   tSize = 162; //increaes text size a little bit
//   let leftOffset = -5; //add a negative offset to fill up the margin on the left

//   textSize(tSize);
//   bbox = jFont.textBounds(t, 0, 0, tSize);
//   text(t, 0 + leftOffset, bbox.h);
//   curY = bbox.h;

//   tSize = tSize / 2;
//   leftOffset = leftOffset / 2;

//   textSize(tSize);
//   bbox = jFont.textBounds(t, 0, 0, tSize);
//   text(t, 0 + leftOffset, curY + bbox.h);
//   curX = bbox.w;
//   text(t, curX + leftOffset, curY + bbox.h);


  // //------------use a function to draw 2 lines--------------
  // //1. sets the size
  // //2. calculate the bbox, currentX, and currentY
  // //3. draw text using currentX, currentY, left offset, and the current line number
  // //4. return the updated currentY for nextline!
  // tSize = 162;
  // let leftOffset = -5;
  // let curX = 0;
  // let curY = 0;
  // let newY = drawTextLine(t, tSize, curX, curY, leftOffset, 1); //draw the 1st line and save it's returned Y position to a variable newY
  // drawTextLine(t, tSize/2, curX, newY, leftOffset/2, 2);//use newY to draw the second line

    //---------------wrap them in a loop!
    tSize = 162;
    let leftOffset = -5;
    let initialX = 0;
    let initialY = 0;

    let newY = initialY;

    for (let i = 1; i < 30; i++) {
      //draw each line by using i as the line number, and the text size as i-th portion of the 1st line's text size
      // newY = drawTextLine(t, tSize / i, initialX, newY, leftOffset / i, i);
      
      //BONUS: comment the line above and uncomment the line below to see animation
      newY = drawTextLineChangeColor(t, tSize / i, initialX, newY, leftOffset / i, i);
    }

}


function drawTextLine(t, tSize, startX, startY, leftOffset, numTimes) {
  textSize(tSize);
  bbox = jFont.textBounds(t, 0, 0, tSize);

  let curX = startX;
  let curY = startY + bbox.h;


  for (let i = 0; i < numTimes; i++) {
    text(t, curX + leftOffset, curY);
    curX = curX + bbox.w;
  }

  return curY; //return the current Y position of this line so that it can be used by the following line
}


function drawTextLineChangeColor(t, tSize, startX, startY, leftOffset, numTimes) {
  textSize(tSize);
  
  fill(sin(-frameCount * 0.1 + numTimes * 0.5) * 255); //same function as above, but also change color using sin();

  bbox = jFont.textBounds(t, 0, 0, tSize);

  let curX = startX;
  let curY = startY + bbox.h;

  for (let i = 0; i < numTimes; i++) {
    text(t, curX + leftOffset, curY);
    curX = curX + bbox.w;
  }

  return curY;
}