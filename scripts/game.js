class Game {
  constructor(options) {
    this.gameNum = options.gameNum;
    this.gameId = options.gameId;
    this.ctx = options.ctx;
    this.background = options.background;
    this.laterals = options.laterals;
    this.leftLateral = options.leftLateral;
    this.lateralLeftX = options.lateralLeftX;
    this.lateralLeftY = options.lateralLeftY;
    this.lateralLeftWidth = options.lateralLeftWidth;
    this.lateralLeftHeight = options.lateralLeftHeight;
    this.rightLateral = options.rightLateral;
    this.lateralRightX = options.lateralRightX;
    this.lateralRightY = options.lateralRightY;
    this.lateralRightWidth = options.lateralRightWidth;
    this.lateralRightHeight = options.lateralRightHeight;
    this.jumper = options.jumper;
    this.jumperImg = options.jumperImg;
    this.fallenImg = options.fallenImg;
    this.bar = options.bar;
    this.barImg = options.barImg;
    this.catchers = options.catchers;
    this.leftCatcher = options.leftCatcher;
    this.rightCatcher = options.rightCatcher;
    this.catcherLeftImgX = options.catcherLeftImgX;
    this.catcherLeftImgY = options.catcherLeftImgY;
    this.catcherRightImgX = options.catcherRightImgX;
    this.catcherRightImgY = options.catcherRightImgY;
    this.catcherImgWidth = options.catcherImgWidth;
    this.catcherImgHeight = options.catcherImgHeight;
    this.scoreLeft = 0;
    this.scoreRight = 0;
    this.lives = 3;
    this.life = options.life;
    this.lostLife = options.lostLife;
    this.gameOver = undefined;
    this.intervalGame = undefined;
    this.intervalJumper = undefined;
    this.curFrame = 0;
    this.frameCount = 4;
    this.loopCount = 0;
  }

  _assignControlsToMouse() {
    document.onmousemove = e => {
      var relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        this.bar.x = relativeX - this.bar.width / 2;
      }
    };
    // document.onmousedown = e => {
    //   this.intervalGame ? this.pause() : this._update();
    // };
  }

  _drawCanvas() {
    this.ctx.drawImage(this.background, 0, 0, 900, 600);
    // this.ctx.beginPath();
    // this.ctx.rect(0, 0, canvas.width, canvas.height);
    // this.ctx.fillStyle = "#00aae4";
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  _drawLaterals() {
    // Parche en el backgound
    // this.ctx.beginPath();
    // this.ctx.rect(canvas.width - 180, canvas.height / 2 - 40, 150, 80);
    // this.ctx.fillStyle = "green";
    // this.ctx.fill();
    // this.ctx.closePath();

    // Laterals
    // this.ctx.drawImage(this.leftLateral, -20, 100, 400, 550);
    // this.ctx.drawImage(this.rightLateral, 550, 80, 400, 550);

    this.ctx.drawImage(
      this.leftLateral,
      this.lateralLeftX,
      this.lateralLeftY,
      this.lateralLeftWidth,
      this.lateralLeftHeight
    );
    this.ctx.drawImage(
      this.rightLateral,
      this.lateralRightX,
      this.lateralRightY,
      this.lateralRightWidth,
      this.lateralRightHeight
    );
  }

  _randomLateral() {
    return this.laterals[Math.floor(Math.random() * this.laterals.length)];
  }

  _drawCatchers() {
    this.ctx.drawImage(
      this.leftCatcher,
      this.catcherLeftImgX,
      this.catcherLeftImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );

    this.ctx.drawImage(
      this.rightCatcher,
      this.catcherRightImgX,
      this.catcherRightImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );

    // this.ctx.drawImage(
    //   this.leftCatcher,
    //   this.catchers[0].x - 50,
    //   this.catchers[0].y - 50,
    //   140,
    //   168
    // );

    // this.ctx.drawImage(
    //   this.rightCatcher,
    //   this.catchers[1].x - 20,
    //   this.catchers[1].y - 50,
    //   140,
    //   168
    // );

    // for (var i = 0; i < this.catchers.length; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.rect(
    //     this.catchers[i].x,
    //     this.catchers[i].y,
    //     this.catchers[i].width,
    //     this.catchers[i].height
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

  _updateFrameJumper() {
    this.intervalJumper = setInterval(
      function() {
        this.curFrame = ++this.curFrame % this.frameCount;
        this.jumperImg.src = games[this.gameNum].jumper[this.curFrame];
      }.bind(this),
      200
    );
  }

  _drawJumper() {
    // console.log(this.jumperImg);

    switch (this.gameId) {
      case "monkeys":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          60,
          60
        );
        break;
      case "hollywood":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          60,
          60
        );
        break;
      case "fox":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          60,
          60
        );
        break;
      case "knight":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          60,
          60
        );
        break;
      case "penguin":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          72,
          64
        );
        break;
      case "alien":
        this.ctx.drawImage(
          this.jumperImg,
          this.jumper.x,
          this.jumper.y,
          41,
          80
        );
        break;
    }

    // this.ctx.drawImage(this.jumperImg, this.jumper.x, this.jumper.y, 60, 60);

    // this.ctx.beginPath();
    // this.ctx.arc(
    //   this.jumper.x,
    //   this.jumper.y,
    //   this.jumper.radius,
    //   0,
    //   Math.PI * 2
    // );
    // this.ctx.fillStyle = "white";
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  _drawFallen() {
    for (var i = 0; i < this.jumper.fallen.length; i++) {
      switch (this.gameId) {
        case "monkeys":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 50,
            124,
            82
          );
          break;
        case "hollywood":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 20,
            60,
            60
          );
          break;
        case "fox":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 20,
            56,
            26
          );
          break;
        case "knight":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 20,
            60,
            60
          );
          break;
        case "penguin":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 50,
            72,
            64
          );
          break;
        case "alien":
          this.ctx.drawImage(
            this.fallenImg,
            this.jumper.fallen[i].x,
            this.jumper.fallen[i].y - 20,
            80,
            41
          );
          break;
      }
      // if (this.gameId === "monkeys") {
      //   this.ctx.drawImage(
      //     this.fallenImg,
      //     this.jumper.fallen[i].x,
      //     this.jumper.fallen[i].y - 50,
      //     124,
      //     82
      //   );
      // } else {
      //   this.ctx.drawImage(
      //     this.fallenImg,
      //     this.jumper.fallen[i].x,
      //     this.jumper.fallen[i].y - 50,
      //     60,
      //     60
      //   );
      // }
    }

    // for (var i = 0; i < this.jumper.fallen.length; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.arc(
    //     this.jumper.fallen[i].x,
    //     this.jumper.fallen[i].y,
    //     this.jumper.radius,
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
    if (this.gameId === "penguin") {
      this.ctx.fillStyle = "red";
    } else {
      this.ctx.fillStyle = "white";
    }

    if (this.gameId === "hollywood") {
      if (this.scoreRight < 10) {
        this.ctx.fillText(this.scoreRight, 830, 80);
      } else {
        this.ctx.fillText(this.scoreRight, 800, 80);
      }
    }

    this.ctx.fillText(this.scoreLeft, 30, 80);
  }

  _drawLives() {
    var x = 337;
    var y;
    if (this.gameId === "hollywood") {
      y = 180;
    } else {
      y = 120;
    }

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

  _throwJumper() {
    this.jumper.x = this._randomLateral().x + 50;
    if (this.jumper.x === this.laterals[0].x + 50) {
      this.jumper.dx = 1;
    } else {
      this.jumper.dx = -1;
    }
    this.jumper.y = 25;
    this.jumper.dy = 3;
  }

  _collisionDetect() {
    if (
      this.jumper.x > this.catchers[0].x &&
      this.jumper.x < this.catchers[0].x + this.catchers[0].width &&
      this.jumper.y > this.catchers[0].y &&
      this.jumper.y < this.catchers[0].y + this.catchers[0].height
    ) {
      ++this.scoreLeft;
      this._throwJumper();
    }

    if (
      this.jumper.x > this.catchers[1].x &&
      this.jumper.x < this.catchers[1].x + this.catchers[1].width &&
      this.jumper.y > this.catchers[1].y &&
      this.jumper.y < this.catchers[1].y + this.catchers[1].height
    ) {
      if (this.gameId === "hollywood") {
        ++this.scoreRight;
      } else {
        ++this.scoreLeft;
      }

      this._throwJumper();
    } else {
      return this.scoreLeft;
    }
  }

  _update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this._drawCanvas();
    this._drawLaterals();
    this._drawCatchers();
    this._drawScore();
    this._drawLives();
    this._drawJumper();
    this._drawFallen();
    this._drawBar();
    this._collisionDetect();

    this.jumper._bounceLaterals();

    // Just in case :)
    this.jumper._bounceTop();

    // Rebote barra (condicionales)
    if (this.jumper.y + this.jumper.dy > this.bar.y - this.jumper.radius - 15) {
      if (
        this.jumper.x >= this.bar.x - 10 &&
        this.jumper.x <= this.bar.x + this.bar.width + 10
      ) {
        this.bar.sections.forEach(barSection => {
          if (
            this.jumper.x >= barSection.min &&
            this.jumper.x <= barSection.max
          ) {
            this.jumper._setDirection(barSection.angle, barSection.speed);
          }
        });
        this.jumper._bounceBar();
      } else {
        if (
          this.jumper.y + this.jumper.dy >
          canvas.height - 20 - this.jumper.radius / 2
        ) {
          this.lives--;
          failSound.play();

          var fallenJumper = {
            x: this.jumper.x,
            y: this.jumper.y
          };
          this.jumper.fallen.push(fallenJumper);
          if (!this.lives) {
            gameOver2Sound.play();

            this.gameOver();
          } else {
            this._throwJumper();
          }
        }
      }
    }

    this.jumper._fall();

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
    this.jumper.x = this._randomLateral().x + 50;
    this._update();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    this._updateFrameJumper();
  }
}
