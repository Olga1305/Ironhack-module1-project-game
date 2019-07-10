class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.gravity = 0.2;
    this.friction = 0.98;
    this.ctx = canvas.getContext("2d");
  }

  _updateBalls() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy;
      this.dy = this.dy * this.friction;
      this.dx = this.dx * this.friction;
    } else {
      this.dy += this.gravity;
    }

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx * this.friction;
    }

    this.x += this.dx;
    this.y += this.dy;
    this._drawBalls();
  }

  _drawBalls() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
