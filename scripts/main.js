$(document).ready(function() {
  // Home Setup
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  let gameNumber = undefined;

  // Mouse
  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  };

  function mouseControls() {
    window.addEventListener("resize", function() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      (games[0].x = canvas.width / 2 - 390),
        (games[0].y = canvas.height / 3 + 50),
        (games[1].x = canvas.width / 2 - 50),
        (games[1].y = canvas.height / 3 + 50),
        (games[2].x = canvas.width / 2 + 290),
        (games[2].y = canvas.height / 3 + 50),
        (games[3].x = canvas.width / 2 - 390),
        (games[3].y = canvas.height / 3 + 290),
        (games[4].x = canvas.width / 2 - 50),
        (games[4].y = canvas.height / 3 + 290),
        (games[5].x = canvas.width / 2 + 290),
        (games[5].y = canvas.height / 3 + 290),
        init();
    });

    canvas.addEventListener("mousemove", function(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener("click", function a(e) {
      for (var i = 0; i < games.length; i++) {
        if (
          mouse.x > games[i].x &&
          mouse.x < games[i].x + games[i].width &&
          mouse.y > games[i].y &&
          mouse.y < games[i].y + games[i].height
        ) {
          games[i].click++;
          clickSound.play();
          if (games[i].click === 1) {
            canvas.removeEventListener("click", a);
            gameNumber = i;

            startGame();
          }
        } else {
          init();
        }
      }
    });
  }

  function startGame() {
    window.cancelAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 900;
    canvas.height = 600;
    canvas.style = "padding-top: 200px";
    $(".container").show();
    $(".copy > a").css("color", "#616060");
    $(".copy > p").css("color", "#616060");
    $(".about > a").css("color", "#616060");

    gameNum = gameNumber;
    gameId = games[gameNumber].id;
    background.src = games[gameNumber].bg;
    leftLateral.src = games[gameNumber].lateralLeft;
    rightLateral.src = games[gameNumber].lateralRight;
    leftCatcher.src = games[gameNumber].catcherLeft;
    leftCatcherAnimate.src = games[gameNumber].animateCatcherLeft[0];
    rightCatcher.src = games[gameNumber].catcherRight;
    rightCatcherAnimate.src = games[gameNumber].animateCatcherRight[0];
    jumperImg.src = games[gameNumber].jumper[0];
    fallenImg.src = games[gameNumber].fallen;
    barImg.src = games[gameNumber].bar;

    lateralLeftX = games[gameNumber].lateralLeftX;
    lateralLeftY = games[gameNumber].lateralLeftY;
    lateralLeftWidth = games[gameNumber].lateralLeftWidth;
    lateralLeftHeight = games[gameNumber].lateralLeftHeight;
    lateralRightX = games[gameNumber].lateralRightX;
    lateralRightY = games[gameNumber].lateralRightY;
    lateralRightWidth = games[gameNumber].lateralRightWidth;
    lateralRightHeight = games[gameNumber].lateralRightHeight;
    catcherLeftImgX = games[gameNumber].catcherLeftImgX;
    catcherLeftImgY = games[gameNumber].catcherLeftImgY;
    catcherRightImgX = games[gameNumber].catcherRightImgX;
    catcherRightImgY = games[gameNumber].catcherRightImgY;
    catcherImgWidth = games[gameNumber].catcherImgWidth;
    catcherImgHeight = games[gameNumber].catcherImgHeight;
    catcherWidth = games[gameNumber].catcherWidth;
    catcherHeight = games[gameNumber].catcherHeight;
    catcherLeftX = games[gameNumber].catcherLeftX;
    catcherRightX = games[gameNumber].catcherRightX;
    catcherY = games[gameNumber].catcherY;

    const game = new Game({
      gameNum: gameNum,
      gameId: gameId,
      catchers: [
        new Catcher(
          "left",
          catcherLeftX,
          catcherY,
          catcherWidth,
          catcherHeight
        ),
        new Catcher(
          "right",
          catcherRightX,
          catcherY,
          catcherWidth,
          catcherHeight
        )
      ],
      jumper: new Jumper(),
      bar: new Bar(),
      ctx: ctx,
      background: background,
      leftLateral: leftLateral,
      lateralLeftX: lateralLeftX,
      lateralLeftY: lateralLeftY,
      lateralLeftWidth: lateralLeftWidth,
      lateralLeftHeight: lateralLeftHeight,
      rightLateral: rightLateral,
      lateralRightX: lateralRightX,
      lateralRightY: lateralRightY,
      lateralRightWidth: lateralRightWidth,
      lateralRightHeight: lateralRightHeight,
      leftCatcher: leftCatcher,
      catcherLeftImgX: catcherLeftImgX,
      catcherLeftImgY: catcherLeftImgY,
      leftCatcherAnimate: leftCatcherAnimate,
      rightCatcher: rightCatcher,
      catcherRightImgX: catcherRightImgX,
      catcherRightImgY: catcherRightImgY,
      rightCatcherAnimate: rightCatcherAnimate,
      catcherImgWidth: catcherImgWidth,
      catcherImgHeight: catcherImgHeight,
      jumperImg: jumperImg,
      fallenImg: fallenImg,
      life: life,
      lostLife: lostLife,
      barImg: barImg
    });

    game.start();

    $("#home").click(function(e) {
      window.location.reload(e);
    });
  }

  // Balls on homepage
  const colors = [
    "#217472",
    "#15b5b0",
    "#f9da82",
    "#FFF6E5",
    "#FF7F66",
    "#ababab"
  ];

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let ballArray = [];

  function init() {
    ballArray = [];

    for (let i = 0; i < 600; i++) {
      var radius = randomIntFromRange(10, 40);
      var x = randomIntFromRange(radius, canvas.width - radius);
      var y = randomIntFromRange(0, canvas.height - radius);
      var dx = randomIntFromRange(-3, 3);
      var dy = randomIntFromRange(-2, 2);
      ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
    }
  }

  // Previews menu

  function drawPreviews() {
    var x = canvas.width / 2 - 495;
    var y = canvas.height / 3 - 5;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(frame01, x, y, 310, 210);
      x += 340;
    }
    y += 240;
    x = canvas.width / 2 - 495;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(frame01, x, y, 310, 210);
      x += 340;
    }

    x = canvas.width / 2 - 490;
    y = canvas.height / 3;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(previews[i], x, y, 300, 200);
      x += 340;
    }
    y += 240;
    x = canvas.width / 2 - 490;
    for (var i = 3; i < 6; i++) {
      ctx.drawImage(previews[i], x, y, 300, 200);
      x += 340;
    }
    x = canvas.width / 2 - 390;
    y = canvas.height / 3 + 50;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(play01, x, y, 100, 100);
      x += 340;
    }
    y += 240;
    x = canvas.width / 2 - 390;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(play01, x, y, 100, 100);
      x += 340;
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgdHome, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < ballArray.length; i++) {
      ballArray[i]._updateBalls();
    }

    drawPreviews();
  }

  mouseControls();
  init();
  animate();
});
