class SuperPixel {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.homeX = x;
    this.homeY = y;
    this.size = size;
    this.col = col;
    this.easing = 0.08;
  }
  
  repel(mX, mY) {
    let repelX = mX - this.x;
    this.x -= repelX * this.easing;

    let repelY = mY - this.y;
    this.y -= repelY * this.easing;
  }

  goHome() {
    let newX = this.homeX - this.x;
    this.x += newX * this.easing;

    let newY = this.homeY - this.y;
    this.y += newY * this.easing;
  }

  show() {
    fill(this.col);
    rect(this.x, this.y, this.size);
  }

}