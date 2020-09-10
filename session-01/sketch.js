// ICM Help Sessions – Lesson 1
// NYU ITP, Fall 2020
// Original version from recode project, Guillermo Montecinos, 2/1/2018
// adapted on 9/2020
// original piece: Green & Orange
// artist: Carmen Herrera
// year: 1958
// original size: 182.9 x 152.4 cm
// fuente: https://whitney.org/Exhibitions/CarmenHerrera#artworks-4

function setup(){
    createCanvas(180 * 5, 150 * 5);

    // paint the background orange
    background(252, 108, 33);

    // green stripes (2nd and 3rd)
    noStroke();
    fill(20, 149, 76);
    rect(0, height / 5, width, height / 5);
    rect(0, 3 * height / 5, width, height / 5);
    
    // left triangle (green)
    triangle(0, 0, width * 5 / 14, height, 0, height);
    
    // right triangle (orange)
    fill(252, 108, 33);
    triangle(width * 9 / 14, 0, width, 0, width, height);
}