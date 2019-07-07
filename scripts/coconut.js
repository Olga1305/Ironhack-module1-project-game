class Coconut {
  constructor(x) {
    this.radius = 20;
    this.x = canvas.width / 2;
    this.y = 25;
    this.dx = -1;
    this.dy = 3;
    this.gravity = 0.4;
    this.friction = 0.995;
    this.fallenCoconuts = [];
  }

  _fall() {
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
  }

  _bounceLaterals() {
    if (
      this.x + this.dx >= canvas.width - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx * this.friction;
    }
  }

  _bounceTop() {
    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    }
  }

  _bounceBar() {
    this.dy = -this.dy;
    this.dy = this.dy * this.friction;
    this.dx = this.dx * this.friction;
  }

  _setDirection(angle, speed) {
    var rads = (angle * Math.PI) / 180;
    this.dx = (Math.cos(rads) * speed) / 6;
    this.dy = (Math.sin(rads) * speed) / 6;
  }
}
