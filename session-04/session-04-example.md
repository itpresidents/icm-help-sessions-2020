# Session 04 – Metaesquema by Hélio Oiticica
*by Guillermo Montecinos*

[Meataesquemas](https://en.wikipedia.org/wiki/H%C3%A9lio_Oiticica#Selected_works) is an exploratory series of more than 350 paitings by the [neo-concrete](https://en.wikipedia.org/wiki/Neo-Concrete_Movement) brazilian artist [Hélio Oiticica](https://en.wikipedia.org/wiki/H%C3%A9lio_Oiticica). The series pursue to explore spatiality and dinamism on a static framework using repetitive basic geometric shapes and plain colors. In this tutorial you will learn how to interpret this piece in code and replicate it on your browser.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/metaesquema-original.png" align="middle" width="80%">
</p>

## Looking for patterns in the piece
First of all, let's analyze the composition of the piece. It can be break down as an array of blue rects displayed as a `4 x 4` grid, where even squares on uneven rows (2, 4, 10 & 12) and uneven squares on even rows (5, 7, 13 & 15) are slightly rotated. Note that all rects that are not rotated touch their borders with the next one, for example rect 1 and 6 touch their vertices, an so on. We can also note that rect's sizes can be paired: 1 & 16, 2 & 15, 3 & 14, 4 & 13, 5 & 12, 6 & 11, 7 & 10 and 8 & 9. We can also note that the rotated rects are slightly smaller than we could expect them to be, for example rect 2 is smaller than rect 3, while rect 15 is smaller than the negative space among rects 11, 14 and 16.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/metaesquema-rotated.jpg" align="middle" width="80%">
</p>

Then, in or oder to set a system that helps us find the proportions of each element in the composition, we can set a grid of 52 columns by 33 rows. Based on this system we can estimate the size of each element. For example, in terms of width we can appreciate that the width of each rect depends on what column it's placed, being 13 units for column 1, 8.5 units for columns 2 and 3, and 13 units for column 4 (we said earlier that rect 2 is slightly smaller than rect 3, but let's assume for now its width is 8 units, just like rect 3). Based on this, we can declare an array `rectsWidth = [13, 8.5, 8.5, 13]`.

On the other hand, we can note that the hight of each rect is also consistent with the row it is placed on, being 8 units for rows 1 & 4, 6 units for row 2 and 5 units for row 3. Please note that this pattern is applicable only for columns 1 & 2, but if we pay attention to the heights on columns 3 & 4 we will realize they are the same from columns 1 & 2, but inverted. Then, we can declare an array `rectsHeight = [8, 6, 5, 8]` that can be used as it is on columns 1 & 2, and in opposite direction on columns 3 & 4.

<!-- <p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/metaesquema-grid.jpg" align="middle" width="80%">
</p> -->

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/metaesquema-grid-dimensions.jpg" align="middle" width="80%">
</p>

Considering the above, we can start our sketch by declaring the two arrays previously mentioned, plus an array that stores the grid size for future calculation purposes. Note that all these arrays are declared as `const`, since they are thought as elements that won't change over time.

```js
const rectsWidth = [13, 8.5, 8.5, 13] //applies to all columns
const rectsHeight = [8, 6, 5, 8] //applies to the first two columns, then it has to be inverted
const grid = [51, 33] //represents the system grid [columns, rows]

function setup(){

}
```

Now, let's create a canvas of the paiting's size. Since the original piece is 640 mm x 550 mm, let's create a p5.js canvas of 64 x 14 (x-axis) by 55 x 14 (y-axis) pixels in order to maintain the proportion. Then, let's paint the background's color of the original canvas color, which is `rgb(169, 153, 110)` (for more information on how to pick the color, take a look of [Session 01 example](https://github.com/itpresidents/icm-help-sessions-2020/blob/master/session-01/session-01.md)).

```js
const rectsWidth = [13, 8.5, 8.5, 13] //applies to all columns
const rectsHeight = [8, 6, 5, 8] //applies to the first two columns, then it has to be inverted
const grid = [51, 33] //represents the system grid [columns, rows]

function setup(){
    createCanvas(64 * 14, 55 * 14)
    background(169, 153, 110)
}
```

## Using a `for` loop to draw four squares
As a first attempt to recreate the piece, let's draw a simplification of the first row of squares, which means let's draw them in their actual position, but not taking care of their width, height and rotation. To do that, let's create a variable called `positionX` that will store the position of the center of each rect. Then, let's setup the rects features, like getting rid of the shape's stroke by calling [`noStroke()`](https://p5js.org/reference/#/p5/noStroke), paiting them of blue with [`fill(0, 31, 132)`](https://p5js.org/reference/#/p5/fill) and setting the center of the rects as the coordinate where they get drawn from with [`rectMode(CENTER)`](https://p5js.org/reference/#/p5/rectMode).

The easiest way to perform a series of operations –like drawing squares– is by declaring a `for` loop, a programming structure that iterates over certain kind of data. For example, since we want to draw 4 rectangles, we can declare a loop that iterates an index `x` from `0` to `3`, by typing: `for(let x = 0; x < 4; x++)`. Having this, we can write for example:

```js
for (let x = 0; x < 4; x++){
    console.log('x: ' + x)
}
```

The above will print `x: 0, x: 1, x: 2, x: 3`. Now, in order to draw the rects in the same positions they were drawn in the painting, we need variable that stores the position of the rect before and gets updated on every iteration. Let's focus first in the x-coordinates: if we think in terms of the columns of the grid system, the first rect has to be drawn on `4 + 13 / 2` units, since `4` is the left margin and `13` is the rect's width. Let's create then, a variable called `positionX` that gets initialized with the value `4` right before the `for` loop that iterates over the columns gets executed. Then, inside the loop let's update that value by increasing it in the half of the rect's width, so we can make `positionX` to correspond with the first rect's center when `x = 0`.

```js
positionX = 4
//iterates over columns
for (let x = 0; x < 4; x++) { 
    positionX += rectsWidth[x] / 2 //update positionX as the number of the column before plus the current rect's width / 2
}
```

After that, let's call the function rect to draw the shape in the position `(positionX, height / 2)`, with a size of 50 pixels –let's draw them in the vertical center of the canvas for now. There is one more thing we need to make in order to draw the 4 rects in their actual position, which is increasing `positionX` by the half of the current rect's width after it gets drawn. If we don't do that we'll see an overlap of shapes, bacuse they will be always shifted `1/2` of the width before.


```js
// set initial positionX as the left margin accordin to the grid
positionX = 4
//iterates over columns
for (let x = 0; x < 4; x++) { 
    positionX += rectsWidth[x] / 2 //update positionX as the number of the column before plus the current rect's width / 2
    rect(width * positionX / grid[0], height / 2, 50, 50)
    positionX += rectsWidth[x] / 2
}
```

Note that each rect's x position is not just equals to `positionX`, because that parameter is defined in columns of the grid system. Then we have to convert it into pixels by the following operation: `width * positionX / grid[0]`. After all this, the sketch should look like follows.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/first-row.png" align="middle" width="80%">
</p>

Then, let's draw the first row in the actual y-coordinate by doing similar of what we did with `positionX` and declaring a variable called `positionY` that takes `3 + rectsHeight[0] / 2` as value. We should also modify the rect's y position to `height * positionY / grid[1]`.

```js
const rectsWidth = [13, 8.5, 8.5, 13] //applies to all columns
const rectsHeight = [8, 6, 5, 8] //applies to the first two columns, then it has to be inverted
const grid = [51, 33] //represents the system grid [columns, rows]
let positionX, positionY //store the center of the current rect
let sizeScale = 1

function setup(){
    createCanvas(64 * 14, 55 * 14)
    background(169, 153, 110)
    noStroke()
    fill(0, 31, 132)
    rectMode(CENTER)

    // set initial positionX as the left margin accordin to the grid
    positionX = 4
    //iterates over columns
    for (let x = 0; x < 4; x++) { 
        positionX += rectsWidth[x] / 2 //update positionX as the number of the column before plus the current rect's width / 2
        positionY = 3 + rectsHeight[0] / 2
        rect(width * positionX / grid[0], height * positionY / grid[1], 50, 50)
        positionX += rectsWidth[x] / 2
    }
}
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/first-row-right-position.png" align="middle" width="80%">
</p>

## Using nested `for` loops to draw a `4 x 4` grid of squares
<!-- * draw the grid in small squares
* draw the actual sizes
* add rotation stuff / explain random and random seed -->

We can expand the logic of drawing a series of 4 rects by calling a `for` loop to the design of the `4 x 4` grid, which can be drawn by calling one `for` loop inside the other `for` loop, what we knoe as **nested loops**. 

```js
for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
    
    }    
}
```

The easiest way to see this is thinking that on every iteration of the `x` loop we iterate over all the possible values that `y` can take. So, for example –following the numbers we assigned earlier to the rects–, when `x = 0` we iterate `y`from `0` to `3` which means that the rects 1, 4, 9 & 13 are drawn. Then, when `x = 1`, rects 2, 6, 10 & 14 are drawn, and so on.

If we incorporate the aforementioned to the code we've been working on, we should nest the `y` `for` loop inside the `x` one, modify `positionY = 3` –because now we only need to initialize it with the upper margin, and increase it by `rectsHeight[y] / 2` before and after drawing the rect.

```js
// set initial positionX as the left margin accordin to the grid
positionX = 4
//iterates over columns
for (let x = 0; x < 4; x++) { 
    positionX += rectsWidth[x] / 2 //update positionX as the number of the column before plus the current rect's width / 2
    positionY = 3 //set initial positionY every time the y-for loop is called
    // iterates over rows
    for (let y = 0; y < 4; y++) {
        positionY += rectsHeight[y] / 2 //update positionY to the current rect's height
        rect(width * positionX / grid[0], height * positionY / grid[1], 50, 50)
        positionY += rectsHeight[y] / 2
    }
    positionX += rectsWidth[x] / 2
}
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/simplified-4x4-grid.png" align="middle" width="80%">
</p>

Now, in order to reflect the fact that heights of rects on columns 1 & 2 are different from the ones on columns 3 & 4, we need to incorportate on our code some decision that allows the `y` `for` loop to iterate the array `rectsHeight` in one direction for the first half of columns, and in the inverse direction for the second half. To do that, let's create inside the `y` loop a variable called `yHeight` that will store the height of the current rect, and after its declaration let's call an `if` statement that evaluates whether `x < 2` or not. In the case `x < 2`, let's assign `yHeight = rectsHeight[y]` whilst in the other case let's assign `yHeight = rectsHeight[3 - y]` (because `y` goes from `0 - 3`). Then, let's update `positionY += yHeight / 2` before and after drawing the rect.

```js
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
        rect(width * positionX / grid[0], height * positionY / grid[1], 50, 50)
        positionY += yHeight / 2
    }
    positionX += rectsWidth[x] / 2
}
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/simplified-4x4-grid-actual-pos.png" align="middle" width="80%">
</p>

## Rotating the elements
In order to rotate the rects we need to implement in code the rule enunciated before that *even squares on uneven rows (2, 4, 10 & 12) and uneven squares on even rows (5, 7, 13 & 15) get rotated*. To do that we are going to use a mathematical operator called **modulo** noted with the symbol `%`, that returns the remainder of the division of one number by another. For, `9 / 4 = 2` but the remainder is `1`, because `4 * 2 + 1 = 9`. Then, we can say that `9 % 4 = 1`.

How do we apply this to check if a number is even or not? By simply performing the modulo operation between that number and `2`, and comparing that result with `0`. 

```js
4 % 2 = 0 //4 is even
5 % 2 = 1 //5 is uneven
```

Now, considering that `x` and `y` start on `0` instead of `1`, to properly apply the rule above we need to increase them by `1` and apply the modulo operator. Then, the logical test to know if the current rect has to be rotated or not can be defined by:

```js
if((x + 1) % 2 == 0 && (y + 1) % 2 != 0 || (x + 1) % 2 != 0 && (y + 1) % 2 == 0){
    // apply rotation
}
```

Next, considering a rotation –in order to be properly applied– has to carry a translation operation before and the use of `push()` and `pop()` to avoid the accumulation of spatial transformations, the line of code that draes the rect can be updated to the following. The rotation gets performed by the function [`rotate()`](https://p5js.org/reference/#/p5/rotate) that takes a [radian angle](https://en.wikipedia.org/wiki/Radian) as an argument. In this case let's make the rotation random in the range between `0 & -PI/20`, so we can perform a slight rotation.

```js
positionY += yHeight / 2 //update positionY to the current rect's height
push()
translate(width * positionX / grid[0], height * positionY / grid[1]); //translate the system to the center of the current rect
if((x + 1) % 2 == 0 && (y + 1) % 2 != 0 || (x + 1) % 2 != 0 && (y + 1) % 2 == 0) {
    rotate(random(-PI / 20))
}
rect(0, 0, 50, 50)
pop()
positionY += yHeight / 2
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/simplified-4x4-grid-rotated.png" align="middle" width="80%">
</p>

## Setting the current sizes on each element
To finish the interpretation of the piece we simply have to set the sizes of each of the elements. but this have to be done in two steps: first we are going to set all alements sizes and then we will adjust the sizes of the rotated ones because –as we said earlier– those rects are slightly smaller than the others.

To set the sizes of all the rects to their respective sizes we only have to change one line of code, which the one that draws the elements, and change the size of them.

```js
rect(0, 0, sizeScale * width * rectsWidth[x] / grid[0], sizeScale * height * yHeight / grid[1]) //draw react converting from grid to pixels
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/actual-sizes-not-adjusted.png" align="middle" width="80%">
</p>

Finally, we need to declare a variable that will store the size proportion of the current rect, let's call it `sizeScale`. Since rotated rects are slightly smaller, let's assign `sizeScale = .95` when the elements are rotated and `sizeScale = 1` when they are not –to do that we need to declare an `else` statement after the existing `if`. Finally, let's include `sizeScale` in the size arguments of the `rect()` function, by multiplying the existing width and height value by `sizeScale`. If we put all the code together it would look like this.

```js
const rectsWidth = [13, 8.5, 8.5, 13] //applies to all columns
const rectsHeight = [8, 6, 5, 8] //applies to the first two columns, then it has to be inverted
const grid = [51, 33] //represents the system grid [columns, rows]
let positionX, positionY //store the center of the current rect
let sizeScale = 1

function setup(){
    createCanvas(64 * 14, 55 * 14)
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
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-04/assets/actual-sizes-adjusted.png" align="middle" width="80%">
</p>