// ICM Help Sessions – Week 8
// NYU ITP, Fall 2021
// original version by Yuguang Zhang, 11/5/2020
// Pixel Sorting - Kim Asendorf
// Brightness sorting code adopted from Antonio Belluscio's version
// on https://www.openprocessing.org/sketch/422167/

let waveImg;
let imgWidth, imgHeight;

let groupedPixels;
let bPixels = [];
let bThres = 50;

function preload() {
  waveImg = loadImage("wave.jpg", imgLoad);
}

function imgLoad() {
  console.log(waveImg.width, waveImg.height)
}

function setup() {
  createCanvas(waveImg.width, waveImg.height);
  pixelDensity(1);

  background(220);
  image(waveImg, 0, 0);
  loadPixels();

  //get the brightness representation of all pixels to deside 
  //where to begin and end sorting for each row / column
  bPixels = getBrightnessPixels(pixels);
  
  //   for (let i = 0; i < height; i++) {
  //     for (let j = 0; j < width; j++) {
  //       let bIdx = (i * width + j);
  //       let idx = bIdx * 4;

  //       pixels[idx] = bPixels[bIdx];
  //       pixels[idx + 1] = bPixels[bIdx];
  //       pixels[idx + 2] = bPixels[bIdx];
  //     }
  //   }

  //pixels in p5 are "flattened"
  //they are [R1, G1, B1, A1, R2, G2, B2, A2, ...]
  //instead of [[R1, G1, B1, A1], [R2, G2, B2, A2], ...]
  //so we need to group pixels into units of three (R,G,B) or four (R, G, B, A)
  //so that they can be sorted together
  groupedPixels = getGroupedPixels(pixels);

  updatePixels();

}



function draw() {
  // image(waveImg, 0, 0);
  loadPixels();
  bThres = int(map(mouseX, 0, width, 0, 255));
  
  sortRow(groupedPixels, pixels, 0, height);
  sortColumn(groupedPixels, pixels, 0, width);
  updatePixels();
}

function getBrightnessPixels(originalPixels) {
  let brightnessPixels = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let idx = (i * width + j) * 4;
      let r = originalPixels[idx];
      let g = originalPixels[idx + 1];
      let b = originalPixels[idx + 2];
      let brightness = (r + g + b) / 3;

      brightnessPixels.push(brightness);
    }
  }
  return brightnessPixels;
}


function getGroupedPixels(originalPixels) {
  let pixelsToGroup = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let idx = (i * width + j) * 4;
      let groupedPixel = [];
      let r = originalPixels[idx];
      let g = originalPixels[idx + 1];
      let b = originalPixels[idx + 2];
      pixelsToGroup.push([r, g, b]);
    }
  }

  return pixelsToGroup;
}


function sortRow(groupedPixels, originalPixels, startRow, endRow) {

  for (let i = startRow; i < endRow; i++) {

    //----------------- method 1: sort the entire row ----------------
    // let startX = i * width;
    // let endX = i * width + width;
    // let rowToSort = groupedPixels.slice(startX, endX);
    // rowToSort.sort();
    // for (let j = 0; j < width; j++) {
    //   let idx = (i * width + j) * 4;
    //   originalPixels[idx] = rowToSort[j][0];
    //   originalPixels[idx + 1] = rowToSort[j][1];
    //   originalPixels[idx + 2] = rowToSort[j][2];
    // }

    //----------------- method 2: sort a random portion of the row -----------------------
    //         let startX = floor(random(width / 4));
    //         let endX = floor(random(width / 4, width / 2));
    //         let portionBefore = groupedPixels.slice(i * width, i * width + startX);
    //         let portionToSort = groupedPixels.slice(i * width + startX, i * width + endX);
    //         let portionAfter = groupedPixels.slice(i * width + endX, i * width + width);

    //         portionToSort.sort();
    //         let rowToSort = portionBefore.concat(portionToSort, portionAfter);

    //         for (let j = 0; j < width; j++) {
    //           let idx = (i * width + j) * 4;
    //           originalPixels[idx] = rowToSort[j][0];
    //           originalPixels[idx + 1] = rowToSort[j][1];
    //           originalPixels[idx + 2] = rowToSort[j][2];
    //         }

    //---------------- method 3: sort by brightness -----------------------------
        let startX = 0;
        let endX = 0;

        while (endX < width - 1) {

          startX = getFirstBrightX(startX, i);
          endX = getNextDarkX(startX, i);

          // console.log(startX, endX);

          if (startX < 0) break;

          let sortLength = endX - startX;

          let unsorted = [];
          let sorted = [];

          for (let j = 0; j < sortLength; j++) {
            unsorted[j] = groupedPixels[startX + j];
          }

          sorted = unsorted.sort();

          for (let j = 0; j < sortLength; j++) {
            let idx = (i * width + startX + j) * 4;
            originalPixels[idx] = sorted[j][0];
            originalPixels[idx + 1] = sorted[j][1];
            originalPixels[idx + 2] = sorted[j][2];
          }

          startX = endX + 1;
        }
  }
}

function sortColumn(groupedPixels, originalPixels, startColumn, endColumn) {

  for (let i = startColumn; i < endColumn; i++) {

    //sort the entire column
    //     let x = i
    //     let unsorted = [];
    //     let sorted = [];
    //     for (let j = 0; j < height; j++) {
    //       unsorted.push(groupedPixels[j*width + i])
    //     }
    //     sorted = unsorted.sort();
    //     for (let j = 0; j < height; j++) {
    //       let idx = (j * width + i) * 4;
    //       originalPixels[idx] = sorted[j][0];
    //       originalPixels[idx + 1] = sorted[j][1];
    //       originalPixels[idx + 2] = sorted[j][2];
    //     }

    //sort by brightness
    let x = i;
    let startY = 0;
    let endY = 0;

    while (endY < height - 1) {

      startY = getFirstBrightY(x, startY);
      endY = getNextDarkY(x, startY);

      // console.log(startY, endY);

      if (startY < 0) break;

      let sortLength = endY - startY;

      let unsorted = [];
      let sorted = [];

      for (let j = 0; j < sortLength; j++) {
        unsorted[j] = groupedPixels[(j + startY) * width + x];
      }

      sorted = unsorted.sort();

      for (let j = 0; j < sortLength; j++) {
        let idx = ((j + startY) * width + x) * 4;
        originalPixels[idx] = sorted[j][0];
        originalPixels[idx + 1] = sorted[j][1];
        originalPixels[idx + 2] = sorted[j][2];
      }

      startY = endY + 1;
    }
  }
}

// helper function to get the X position of first pixel
// that is brighter than the threshold
function getFirstBrightX(x, y) {
  // console.log(bPixels[x + y * width]);
  while (bPixels[x + y * width] < bThres) {
    x++;
    // console.log(x);
    if (x >= width)
      return -1;
  }
  return x;
}

// helper function to get the X position of first pixel
// that is darker than the threshold
function getNextDarkX(_x, _y) {
  let x = _x + 1;
  let y = _y;

  while (bPixels[x + y * width] > bThres) {
    x++;
    if (x >= width) return width - 1;
  }
  return x - 1;
}

// helper function to get the Y position of first pixel
// that is brighter than the threshold
function getFirstBrightY(x, y) {
  // console.log(bPixels[x + y * width]);
  if (y < height) {
    while (bPixels[x + y * width] < bThres) {
      y++;
      // console.log(x);
      if (y >= height)
        return -1;
    }
  }
  return y;
}

// helper function to get the Y position of first pixel
// that is darker than the threshold
function getNextDarkY(x, y) {
  y++;
  if (y < height) {

    while (bPixels[x + y * width] > bThres) {
      y++;
      if (y >= height) return height - 1;
    }
  }
  return y - 1;
}