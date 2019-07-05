class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.trees = options.trees;
    this.coconut = options.coconut;
    this.bar = options.bar;
    this.monkeys = options.monkeys;
    // this.monkeyLeft = options.monkeyLeft;
    // this.monkeyRight = options.monkeyRight;
    this.score = 0;
    this.lives = 3;
    this.gameOver = undefined;
  }

  _assignControlsToMouse() {
    document.onmousemove = e => {
      var relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        this.bar.x = relativeX - this.bar.width / 2;
      }
    };
  }

  _drawCanvas() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = "#00aae4";
    this.ctx.fill();
    this.ctx.closePath();
  }

  _drawTrees() {
    for (var i = 0; i < this.trees.length; i++) {
      this.ctx.beginPath();
      this.ctx.rect(
        this.trees[i].x,
        this.trees[i].y,
        this.trees[i].width,
        this.trees[i].height
      );
      this.ctx.fillStyle = "green";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  // _drawMonkeys() {
  //     for (var i = 0; i < this.monkeys.length, i++) {
  //         this.ctx.beginPath();
  //         this.ctx.rect(
  //             this.monkeys[i].x,
  //             this.monkeys[i].y,
  //             this.monkeys[i].width,
  //             this.monkeys[i].height
  //         );
  //         this.ctx.fillStyle = "#804000";
  //         this.ctx.fill();
  //         this.ctx.closePath();
  //     }

  // }

  _drawBar() {
    this.ctx.beginPath();
    this.ctx.rect(this.bar.x, this.bar.y, this.bar.width, this.bar.height);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
  }

  _drawCoconut() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.coconut.x,
      this.coconut.y,
      this.coconut.radius,
      0,
      Math.PI * 2
    );
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
  }

  _drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Score: " + this.score,
      canvas.width / 2 - 30,
      canvas.height / 4
    );
  }

  _drawLives() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Lives: " + this.lives,
      canvas.width / 2 - 30,
      canvas.height / 4 + 30
    );
  }

  _update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this._drawCanvas();
    this._drawBar();
    this._drawTrees();
    // this._drawMonkeys();
    this._drawCoconut();
    this._drawScore();
    this._drawLives();

    //   collisionDetect();

    if (
      this.coconut.x + this.coconut.dx >= canvas.width - this.coconut.radius ||
      this.coconut.x + this.coconut.dx < this.coconut.radius
    ) {
      this.coconut.dx = -this.coconut.dx * this.coconut.friction;
    }

    this.coconut.dy += this.coconut.gravity;

    if (this.coconut.y + this.coconut.dy < this.coconut.radius) {
      this.coconut.dy = -this.coconut.dy;
    } else if (
      this.coconut.y + this.coconut.dy >
      this.bar.y - this.coconut.radius
    ) {
      this.coconut.y += this.coconut.dy;
      if (
        this.coconut.x > this.bar.x &&
        this.coconut.x < this.bar.x + this.bar.width
      ) {
        this.coconut.dy = -this.coconut.dy;
        this.coconut.dy = this.coconut.dy * this.coconut.friction;
        this.coconut.dx = this.coconut.dx * this.coconut.friction;
      } else {
        this.lives--;
        if (!this.lives) {
          // alert("GAME OVER");
          document.location.reload();
        } else {
          this.coconut.x = canvas.width - canvas.width / 3;
          this.coconut.y = 100;
          this.coconut.dx = -1;
          this.coconut.dy = 3;
          this.bar.x = (canvas.width - this.bar.width) / 2;
        }
      }
    }

    // if (rightPressed && barX < canvas.width - barWidth) {
    //   barX += 7;
    // } else if (leftPressed && barX > 0) {
    //   barX -= 7;
    // }

    this.coconut.x += this.coconut.dx;
    this.coconut.y += this.coconut.dy;

    if (this.intervalGame !== undefined) {
      window.requestAnimationFrame(this._update.bind(this));
    }
  }

  start() {
    this._assignControlsToMouse();
    this._update();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }
}

//   document.addEventListener("keydown", keyDownHandler, false);
//   document.addEventListener("keyup", keyUpHandler, false);

// _keyDownHandler(e) {
//   if (e.keyCode === 39) {
//     this.rightPressed = true;
//   }
//   else if (e.keyCode === 37) {
//     this.leftPressed = true;
//   }
// }
// _keyUpHandler(e) {
//   if (e.keyCode === 39) {
//     this.rightPressed = false;
//   }
//   else if (e.keyCode === 37) {
//     this.leftPressed = false;
//   }
// }
