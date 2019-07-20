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
    this.leftCatcherAnimate = options.leftCatcherAnimate;
    this.catcherLeftImgX = options.catcherLeftImgX;
    this.catcherLeftImgY = options.catcherLeftImgY;
    this.rightCatcher = options.rightCatcher;
    this.rightCatcherAnimate = options.rightCatcherAnimate;
    this.catcherRightImgX = options.catcherRightImgX;
    this.catcherRightImgY = options.catcherRightImgY;
    this.catcherImgWidth = options.catcherImgWidth;
    this.catcherImgHeight = options.catcherImgHeight;
    this.scoreLeft = 0;
    this.scoreRight = 0;
    this.lives = 3;
    this.life = options.life;
    this.lostLife = options.lostLife;
    this.intervalGame = undefined;
    this.intervalJumper = undefined;
    this.curFrameJumper = 0;
    this.frameCountJumper = 3;
    this.intervalLeftCatcher = undefined;
    this.curFrameLeftCatcher = 0;
    this.intervalRightCatcher = undefined;
    this.curFrameRightCatcher = 0;
    this.frameCountCatcher = 3;
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
    this.ctx.drawImage(this.background, 0, 0, 900, 600);
  }

  _drawLaterals() {
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

  _drawLeftCatcher() {
    this.ctx.drawImage(
      this.leftCatcher,
      this.catcherLeftImgX,
      this.catcherLeftImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );
  }

  _drawRightCatcher() {
    this.ctx.drawImage(
      this.rightCatcher,
      this.catcherRightImgX,
      this.catcherRightImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );
  }

  _drawCatchers() {
    if (!this.intervalLeftCatcher) {
      this._drawLeftCatcher();
    } else {
      this._animateLeftCatcher();
    }

    if (!this.intervalRightCatcher) {
      this._drawRightCatcher();
    } else {
      this._animateRightCatcher();
    }

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

  _updateFrameLeftCatcher() {
    this.intervalLeftCatcher = setInterval(
      function() {
        if (this.curFrameLeftCatcher === this.frameCountCatcher) {
          this._cancelIntervalLeftCatcher();
        } else {
          this.curFrameLeftCatcher++;
          this.leftCatcherAnimate.src =
            games[this.gameNum].animateCatcherLeft[this.curFrameLeftCatcher];
        }
      }.bind(this),
      100
    );
  }

  _cancelIntervalLeftCatcher() {
    clearInterval(this.intervalLeftCatcher);
    this.intervalLeftCatcher = undefined;
    this.curFrameLeftCatcher = 0;
  }

  _animateLeftCatcher() {
    this.ctx.drawImage(
      this.leftCatcherAnimate,
      this.catcherLeftImgX,
      this.catcherLeftImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );
  }

  _updateFrameRightCatcher() {
    this.intervalRightCatcher = setInterval(
      function() {
        if (this.curFrameRightCatcher === this.frameCountCatcher) {
          this._cancelIntervalRightCatcher();
        } else {
          this.curFrameRightCatcher++;
          this.rightCatcherAnimate.src =
            games[this.gameNum].animateCatcherRight[this.curFrameRightCatcher];
        }
      }.bind(this),
      100
    );
  }

  _cancelIntervalRightCatcher() {
    clearInterval(this.intervalRightCatcher);
    this.intervalRightCatcher = undefined;
    this.curFrameRightCatcher = 0;
  }

  _animateRightCatcher() {
    this.ctx.drawImage(
      this.rightCatcherAnimate,
      this.catcherRightImgX,
      this.catcherRightImgY,
      this.catcherImgWidth,
      this.catcherImgHeight
    );
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
        this.curFrameJumper = ++this.curFrameJumper % this.frameCountJumper;
        this.jumperImg.src = games[this.gameNum].jumper[this.curFrameJumper];
      }.bind(this),
      200
    );
  }

  _drawJumper() {
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
          80,
          70
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
            this.jumper.fallen[i].y - 40,
            90,
            80
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
    }
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

  _drawElements() {
    this._drawCanvas();
    this._drawLaterals();
    this._drawCatchers();
    this._drawScore();
    this._drawLives();
    this._drawJumper();
    this._drawFallen();
    this._drawBar();
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
      this._updateFrameLeftCatcher();
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
        this._updateFrameRightCatcher();
      }

      this._throwJumper();
    } else {
      return this.scoreLeft;
    }
  }

  _bounceBar() {
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
  }

  _update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this._drawElements();
    this._collisionDetect();
    this.jumper._bounceLaterals();
    this.jumper._bounceTop();
    this._bounceBar();
    this.jumper._fall();

    if (this.intervalGame !== undefined) {
      window.requestAnimationFrame(this._update.bind(this));
    }
  }

  start() {
    this._assignControlsToMouse();
    this.jumper.x = this._randomLateral().x + 50;
    this._update();
    this._updateFrameJumper();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }

  gameOver() {
    this.intervalGame = window.cancelAnimationFrame(this.intervalGame);
    $(".copy > a").css("color", "white");
    $(".copy > p").css("color", "white");
    $(".about > a").css("color", "white");
    $("#canvas").hide();
    $("#gameover").show();
    $(".container").css("right", "44%");
    $(".container").css("top", "70%");
  }
}
