class Bar {
  constructor() {
    this.width = 160;
    this.heigth = 15;
    this.x = (canvas.width-this.width)/2;
    // this.rightPressed = false;
    // this.leftPressed = false;
  }

  drawBar() {
  ctx.beginPath();
  ctx.rect(this.x, canvas.height - 120, this.width, this.heigth);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  }
  

  moveLeft() {}

  moveRight() {}
}
