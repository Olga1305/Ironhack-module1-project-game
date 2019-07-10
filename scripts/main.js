$(document).ready(function() {
  // Home Setup
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // Images

  // const bgdHome = new Image();
  // bgdHome.src = "../Ironhack-module1-project-game/img/home01.png";

  // const game01 = new Image();
  // game01.src = "../Ironhack-module1-project-game/img/game1.png";

  // const play01 = new Image();
  // play01.src = "../Ironhack-module1-project-game/img/play1.png";

  // const frame01 = new Image();
  // frame01.src = "../Ironhack-module1-project-game/img/frame.png";

  // Mouse

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  };

  // let clickGame01 = 0;
  // let clickGame02 = 0;
  // let clickGame03 = 0;
  // let clickGame04 = 0;
  // let clickGame05 = 0;
  // let clickGame06 = 0;

  function mouseControls() {
    canvas.addEventListener("mousemove", function(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener("click", function a(e) {
      games.forEach(function(game) {
        if (
          mouse.x > game.x &&
          mouse.x < game.x + game.width &&
          mouse.y > game.y &&
          mouse.y < game.y + game.height
        ) {
          game.click++;
          if (game.click === 1) {
            canvas.removeEventListener("click", a);
            startGame();
          }
        } else {
          init();
        }

        if (game.click === 1) {
          canvas.removeEventListener("click", a);
        }
      });
    });
  }

  function startGame() {
    window.cancelAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 900;
    canvas.height = 600;
    canvas.style = "padding-top: 200px";
    game.start();
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

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgdHome, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < ballArray.length; i++) {
      ballArray[i]._updateBalls();
    }

    drawPreviews();
  }

  // Menu

  let games = [
    {
      id: "monkeys",
      x: canvas.width / 2 - 390,
      y: canvas.height / 3 + 50,
      width: 100,
      height: 100,
      click: 0
    },
    {
      id: "hollywood",
      x: canvas.width / 2 - 50,
      y: canvas.height / 3 + 50,
      width: 100,
      height: 100,
      click: 0
    },
    {
      id: "fox",
      x: canvas.width / 2 + 290,
      y: canvas.height / 3 + 50,
      width: 100,
      height: 100,
      click: 0
    },
    {
      id: "knight",
      x: canvas.width / 2 - 390,
      y: canvas.height / 3 + 290,
      width: 100,
      height: 100,
      click: 0
    },
    {
      id: "penguin",
      x: canvas.width / 2 - 50,
      y: canvas.height / 3 + 290,
      width: 100,
      height: 100,
      click: 0
    },
    {
      id: "alien",
      x: canvas.width / 2 + 290,
      y: canvas.height / 3 + 290,
      width: 100,
      height: 100,
      click: 0
    }
  ];

  // const playGame1 = {
  //   x: canvas.width / 2 - 390,
  //   y: canvas.height / 3 + 50,
  //   width: 100,
  //   height: 100
  // };

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
      ctx.drawImage(game01, x, y, 300, 200);
      x += 340;
    }
    y += 240;
    x = canvas.width / 2 - 490;
    for (var i = 0; i < 3; i++) {
      ctx.drawImage(game01, x, y, 300, 200);
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

  mouseControls();
  init();
  animate();

  // Game Monkey images

  const background = new Image();
  background.src = "../Ironhack-module1-project-game/img/background1.jpg";

  const leftLateral = new Image();
  leftLateral.src = "../Ironhack-module1-project-game/img/tree_6.png";

  const rightLateral = new Image();
  rightLateral.src = "../Ironhack-module1-project-game/img/tree_2.png";

  const leftCatcher = new Image();
  leftCatcher.src =
    "../Ironhack-module1-project-game/img/monkey/monkey_jump_1.png";

  const rightCatcher = new Image();
  rightCatcher.src =
    "../Ironhack-module1-project-game/img/monkey/monkey_jump_1_r.png";

  const jumperImg = new Image();
  jumperImg.src = "../Ironhack-module1-project-game/img/coco.png";

  const fallenImg = new Image();
  fallenImg.src = "../Ironhack-module1-project-game/img/fallencoconut.png";

  // const life = new Image();
  // life.src = "../Ironhack-module1-project-game/img/heart.png";

  // const lostLife = new Image();
  // lostLife.src = "../Ironhack-module1-project-game/img/heart2.png";

  const barImg = new Image();
  barImg.src = "../Ironhack-module1-project-game/img/pad1.png";

  const game = new Game({
    laterals: [
      new Lateral("left", 160),
      new Lateral("medium", 400),
      new Lateral("right", 640)
    ],
    catchers: [new Catcher("left", 70), new Catcher("right", 760)],
    jumper: new Jumper(),
    bar: new Bar(),
    ctx: ctx,
    background: background,
    leftLateral: leftLateral,
    rightLateral: rightLateral,
    leftCatcher: leftCatcher,
    rightCatcher: rightCatcher,
    jumperImg: jumperImg,
    fallenImg: fallenImg,
    life: life,
    lostLife: lostLife,
    barImg: barImg
  });

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
});
