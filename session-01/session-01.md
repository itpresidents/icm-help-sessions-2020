## Example 1 – Green and Orange by Carmen Herrera
*by Guillermo Montecinos*

In this tutorial you'll learn how to recode the piece [Green and Orange](https://whitney.org/Exhibitions/CarmenHerrera#artworks-4) by the visual artist [Carmen Herrera](https://en.wikipedia.org/wiki/Carmen_Herrera) (Cuba, 1915. For more information about the artist, please check out her [documentary](https://www.netflix.com/title/80106609) on Netflix). Along the tutorial we'll cover the basics of p5.js, including `setup()` and `draw()`, `background()`, and basic shapes as `rect()` and `triangle()`.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-plain.jpg" align="middle" width="80%">
</p>

### Recognizing shapes
When recreating a piece it's important to find a way to represent its content by using simple shapes. In this case we can break the piece down in two kind of shapes: triangles and rects.

#### Triangles
Two triangles can be found in the piece, the one at the left is green whilst the one at the right is orange, which is also inverted in respect to the first one.
<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-triangles.jpg" align="middle" width="80%">
</p>

#### Stripes
We can also recognize five stripes that cross the canvas horizontally, three of them orange and two green.
<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-stripes.jpg" align="middle" width="80%">
</p>

#### Fitting a grid
In this case, since we know the piece is built from simple geometric shapes, it is very useful to find a grid system that helps us find the proportion of each shape depending on the size of the canvas. Vertically the grid is pretty obvious: the canvas can be divided into five rows. Now, horizontally the grid can become al little tricker or arbitrary, but we can always guess how many columns the canvas can be divided into: let's stick with 14 columns.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-grid.jpg" align="middle" width="80%">
</p>

### Let's code it up
Since we have an idea on what's the proportion of each shape based on the canvas size, the only piece of information when still need to find out is how to represent each color. To do this we can use a Chrome Extension called [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper) that will return you an specific pixel's color, or the Apple built-in app Digital Color Meter. You can also just google "Color Picker" and will find a variety of tools.

Using any of them, we can got to the conclusion that the green color in the piece can be represented by `rgb(20, 149, 76)` whilst the orange color can be represented by `rgb(252, 108, 33)`.

#### Painting the background
Summarizing what we discussed above, the piece can be broken down in the following pieces: an orange background, two green stripes drawn above of the background, and two triangles drawn on top, one painted of green (on the left side of the canvas) and the other painted of orange (on the right side of the canvas).

Before coding, let's discuss something: as you learned in the first lesson, p5.js is composed by two main functions `setup()` and `draw()`. As the name says, `setup()` is a function meant to set up all the elements required to run your code and is executed only once at the beginning of the program (because we need to setup the elements only once). In turn, `draw()` is a time-based loop that gets executed every certain amount of milliseconds. Since `draw()` is meant for animations, we are not going to use it in our example, because the painting is static. 

Now, let's create a canvas and paint its background inside the `setup()` function. Since the original piece is 182.9 x 152.4 cm let's create a canvas approximately proportional to this size, let's say `w = 180 * 5` and `h = 150 * 5`, by calling the function [`createCanvas(180 * 5, 150 * 5)`](https://p5.js.org/reference/#/p5/createCanvas). Then, let's paint the background using the function `background(color)` that takes a color as an argument. Remember that p5.js' default `colorMode` is RGB, so the [`background(252, 108, 33)`](https://p5.js.org/reference/#/p5/background) function will interpret the data you pass as RGB.

```js
function setup(){
    createCanvas(180 * 5, 150 * 5);

    // paint the background orange
    background(252, 108, 33);
}
```

This would look like this:

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-background.jpg" align="middle" width="80%">
</p>

#### Drawing the horizontal stripes
Now, let's draw the two horizontal green stripes, with p5.js function [`rect(x, y, w, h)`](https://p5.js.org/reference/#/p5/rect) that takes as arguments the upper-left corner of the rect `(x, y)` and its width `w` and height `h`. Let's go back to the grid: the upper rect starts on `x = 0` and `y = height / 5` –since it corresponds to the second row of the grid–, and it's width and height are `w = width` and `h = height / 5`, since it corresponds to the same height of a row. 

Please note that we use the key words `width` and `height` written in code-like typeface to talk about the p5.js built-in [`width`](https://p5.js.org/reference/#/p5/width) and [`height`](https://p5.js.org/reference/#/p5/height) variables that return the canvas' size. The second rect is pretty much the same of the first, with the only difference that its upper-left corner starts on `y = height * 3 / 5`.

We need to take two more considerations into account. The first of all is we want the rects to be painted of green, what we do calling the function [`fill(color)`](https://p5.js.org/reference/#/p5/fill) that takes a `color` as an argument and fills all the shapes drawn after it with that `color`. The second one has to do with the shape's stroke, that gets drawn by default with any shape. In order to get rid of it we can use the function [`noStroke()`](https://p5.js.org/reference/#/p5/noStroke) that disables the stroke for all the shapes drawn after the function is called.

```js
function setup(){
    createCanvas(180 * 5, 150 * 5);

    // paint the background orange
    background(252, 108, 33);

    // green stripes (2nd and 3rd)
    noStroke();
    fill(20, 149, 76);
    rect(0, height / 5, width, height / 5);
    rect(0, 3 * height / 5, width, height / 5);
}
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-stripes.png" align="middle" width="80%">
</p>

#### Drawing the triangles
Now, we are going to draw the two triangles that complete the piece, using the p5.js built-in function [`triangle(x1, y1, x2, y2, x3, y3)`](https://p5js.org/reference/#/p5/triangle) that takes the `x` and `y` coordinates of the three vertices. To be coherent, let's name the vertices clockwise and always starting from the upper-left corner.

First of all, let's draw the left green triangle. According with the clockwise criteria, the first vertex is located on the upper-left corner of the canvas, which menans `v1 = (0, 0)`. Then, to estimate the position of the second vertex –which is the one on the lower-right corner of the triangle– we can go back to the grid and count on which column the point lies. The vertex is approximately in the right side of the 5th column –remember the grid contains 14 columns– so its position is `v2 = (width * 5 / 14, height)`. Finally, the thrid vertex is located on the lower-left corner of the canvas, then `v3 = (0, height)`. Following the above, we can draw the first triangle by calling.

```js
triangle(0, 0, width * 5 / 14, height, 0, height);
```

Which leaves our sketch like this:

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-left-triang.png" align="middle" width="80%">
</p>

Finally, let's draw the last triangle. First of all, take into account that after drawing the first triangle, tha color activated by the function `fill()` is green, so the first thing we need to do before drawing the second triangle is to update the filling color to orange by calling `fill(252, 108, 33);`. Then, we can repeat the procedure we did for the first triangle and apply it to the second. Following that, each of the vertices lie in the following coordinates : `v1 = (width * 9 / 14, 0)`, `v2 = (width, 0)` and `v3 = (width, height)`. Then, your code should look like this:

```js
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
```

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_residency_2020_2021/blob/master/icm-workshops/session-01/assets/green-orange-plain.jpg" align="middle" width="80%">
</p>