class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.background = options.background;
    this.trees = options.trees;
    this.leftPalmTree = options.leftPalmTree;
    this.rightPalmTree = options.rightPalmTree;
    this.coconut = options.coconut;
    this.coconutImg = options.coconutImg;
    this.fallenCoconutImg = options.fallenCoconutImg;
    this.bar = options.bar;
    this.barImg = options.barImg;
    this.monkeys = options.monkeys;
    this.leftMonkey = options.leftMonkey;
    this.rightMonkey = options.rightMonkey;
    this.score = 0;
    this.lives = 3;
    this.life = options.life;
    this.lostLife = options.lostLife;
    this.gameOver = undefined;
    this.intervalGame = undefined;
  }

  _assignControlsToMouse() {
    document.onmousemove = e => {
      var relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        this.bar.x = relativeX - this.bar.width / 2;
      }
    };
    document.onmousedown = e => {
      this.intervalGame ? this.pause() : this._update();
    };
  }

  _drawCanvas() {
    this.ctx.drawImage(this.background, 0, 0, 900, 600);
    // this.ctx.beginPath();
    // this.ctx.rect(0, 0, canvas.width, canvas.height);
    // this.ctx.fillStyle = "#00aae4";
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  _drawTrees() {
    // Parche en el backgound
    this.ctx.beginPath();
    this.ctx.rect(canvas.width - 180, canvas.height / 2 - 40, 150, 80);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
    // Palmeras
    this.ctx.drawImage(this.leftPalmTree, -20, 100, 400, 550);
    this.ctx.drawImage(this.rightPalmTree, 550, 80, 400, 550);

    // for (var i = 0; i < this.trees.length; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.rect(
    //     this.trees[i].x,
    //     this.trees[i].y,
    //     this.trees[i].width,
    //     this.trees[i].height
    //   );
    //   this.ctx.fillStyle = "green";
    //   this.ctx.fill();
    //   this.ctx.closePath();
    // }
  }

  _randomTree() {
    return this.trees[Math.floor(Math.random() * this.trees.length)];
  }

  _drawMonkeys() {
    this.ctx.drawImage(
      this.leftMonkey,
      this.monkeys[0].x - 50,
      this.monkeys[0].y - 50,
      140,
      168
    );

    this.ctx.drawImage(
      this.rightMonkey,
      this.monkeys[1].x - 20,
      this.monkeys[1].y - 50,
      140,
      168
    );
    // for (var i = 0; i < this.monkeys.length; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.rect(
    //     this.monkeys[i].x,
    //     this.monkeys[i].y,
    //     this.monkeys[i].width,
    //     this.monkeys[i].height
    //   );
    //   this.ctx.fillStyle = "#804000";
    //   this.ctx.fill();
    //   this.ctx.closePath();
    // }
  }

  _drawBar() {
    this.ctx.drawImage(this.barImg, this.bar.x, this.bar.y, 160, 48);

    // this.ctx.beginPath();
    // this.ctx.rect(this.bar.x, this.bar.y, this.bar.width, this.bar.height);
    // this.ctx.fillStyle = "white";
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  _drawCoconut() {
    this.ctx.drawImage(this.coconutImg, this.coconut.x, this.coconut.y, 60, 60);
    // this.ctx.beginPath();
    // this.ctx.arc(
    //   this.coconut.x,
    //   this.coconut.y,
    //   this.coconut.radius,
    //   0,
    //   Math.PI * 2
    // );
    // this.ctx.fillStyle = "white";
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  _drawFallenCoconuts() {
    for (var i = 0; i < this.coconut.fallenCoconuts.length; i++) {
      this.ctx.drawImage(
        this.fallenCoconutImg,
        this.coconut.fallenCoconuts[i].x,
        this.coconut.fallenCoconuts[i].y - 50,
        124,
        82
      );
    }

    // for (var i = 0; i < this.coconut.fallenCoconuts.length; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.arc(
    //     this.coconut.fallenCoconuts[i].x,
    //     this.coconut.fallenCoconuts[i].y,
    //     this.coconut.radius,
    //     0,
    //     Math.PI * 2
    //   );
    //   this.ctx.fillStyle = "white";
    //   this.ctx.fill();
    //   this.ctx.closePath();
    // }
  }

  _drawScore() {
    this.ctx.font = "bold 70px sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, 30, 80);
  }

  _drawLives() {
    var x = 331;
    var y = 120;
    for (var i = 0; i < this.lives; i++) {
      this.ctx.drawImage(this.life, x, y, 46, 43);
      x += 90;
    }
    if (this.lives !== 3) {
      for (var i = 0; i < 3 - this.lives; i++) {
        this.ctx.drawImage(this.lostLife, x, y, 46, 43);
        x += 90;
      }
    }
  }

  _throwCoconut() {
    this.coconut.x = this._randomTree().x + 50;
    if (this.coconut.x === this.trees[0].x + 50) {
      this.coconut.dx = 1;
    } else {
      this.coconut.dx = -1;
    }
    this.coconut.y = 25;
    this.coconut.dy = 3;
  }

  _collisionDetect() {
    this.monkeys.forEach(monkey => {
      if (
        this.coconut.x > monkey.x &&
        this.coconut.x < monkey.x + monkey.width &&
        this.coconut.y > monkey.y &&
        this.coconut.y < monkey.y + monkey.height
      ) {
        this.score++;
        this._throwCoconut();
      } else {
        return this.score;
      }
    });
  }

  _update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this._drawCanvas();
    this._drawBar();
    this._drawTrees();
    this._drawMonkeys();
    this._drawScore();
    this._drawLives();
    this._drawCoconut();
    this._drawFallenCoconuts();
    this._collisionDetect();

    this.coconut._bounceLaterals();

    // Just in case :)
    this.coconut._bounceTop();

    // Rebote barra (condicionales)
    if (
      this.coconut.y + this.coconut.dy >
      this.bar.y - this.coconut.radius - 15
    ) {
      if (
        this.coconut.x >= this.bar.x - 10 &&
        this.coconut.x <= this.bar.x + this.bar.width + 10
      ) {
        this.bar.sections.forEach(barSection => {
          if (
            this.coconut.x >= barSection.min &&
            this.coconut.x <= barSection.max
          ) {
            this.coconut._setDirection(barSection.angle, barSection.speed);
          }
        });
        this.coconut._bounceBar();
      } else {
        if (
          this.coconut.y + this.coconut.dy >
          canvas.height - 20 - this.coconut.radius / 2
        ) {
          this.lives--;
          var fallenCoconut = {
            x: this.coconut.x,
            y: this.coconut.y
          };
          this.coconut.fallenCoconuts.push(fallenCoconut);
          if (!this.lives) {
            this.gameOver();
          } else {
            this._throwCoconut();
          }
        }
      }
    }

    this.coconut._fall();

    if (this.intervalGame !== undefined) {
      window.requestAnimationFrame(this._update.bind(this));
    }
  }

  pause() {
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }

  start() {
    this._assignControlsToMouse();
    this.coconut.x = this._randomTree().x + 50;
    this._update();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }
}
