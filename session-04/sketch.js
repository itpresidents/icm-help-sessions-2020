// ICM Help Sessions – Lesson 4
// NYU ITP, Fall 2020
// Original version from recode project, Guillermo Montecinos, 2/1/2018
// adapted on 9/2020
// original piece: Metaesquema
// artist: Hélio Oiticica
// year: 1958
// original size: 639 x 550 mm
// source: http://www.tate.org.uk/art/artworks/oiticica-metaesquema-t12419

const rectsWidth = [13, 8.5, 8.5, 13] //applies to all columns
const rectsHeight = [8, 6, 5, 8] //applies to the first two columns, then it has to be inverted
const grid = [51, 33] //represents the system grid [columns, rows]
let positionX, positionY //store the center of the current rect
let sizeScale = 1

function setup(){
    createCanvas(64 * 14, 55 * 14)
    randomSeed(100)
    background(169, 153, 110)
    noStroke()
    fill(0, 31, 132)
    rectMode(CENTER)
    // set initial positionX as the left margin accordin to the grid
    positionX = 4
    //iterates over columns
    for (let x = 0; x < 4; x++) { 
        positionX += rectsWidth[x] / 2 //update positionX as the number of the column before plus the current rect's width / 2
        positionY = 3 //set initial positionY every time the y-for loop is called
        // iterates over rows
        for (let y = 0; y < 4; y++) {
            let yHeight //stores the height of each rect depending on the y position.
            if (x < 2) { //the two first columns read rectsHeight as it is
                yHeight = rectsHeight[y]
            }
            else { //the two last columns read rectsHeight inversely
                yHeight = rectsHeight[3 - y]
            }
            positionY += yHeight / 2 //update positionY to the current rect's height
            push()
            translate(width * positionX / grid[0], height * positionY / grid[1]); //translate the system to the center of the current rect
            // even squares on uneven rows and uneven squares on even rows get rotated
            if((x + 1) % 2 == 0 && (y + 1) % 2 != 0 || (x + 1) % 2 != 0 && (y + 1) % 2 == 0) {
                rotate(random(-PI/20))
                sizeScale = .95
            }
            else {
                sizeScale = 1
            }
            rect(0, 0, sizeScale * width * rectsWidth[x] / grid[0], sizeScale * height * yHeight / grid[1]) //draw react converting from grid to pixels
            pop()
            positionY += yHeight / 2
        }
        positionX += rectsWidth[x] / 2
    }
}