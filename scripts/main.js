$(document).ready(function() {
  // Home Setup
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // Images

  const bgdHome = new Image();
  bgdHome.src = "../Ironhack-module1-project-game/img/home01.png";

  const game01 = new Image();
  game01.src = "../Ironhack-module1-project-game/img/game1.png";

  const play01 = new Image();
  play01.src = "../Ironhack-module1-project-game/img/play1.png";

  const frame01 = new Image();
  frame01.src = "../Ironhack-module1-project-game/img/frame.png";

  // Mouse

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  };

  var clickGame01 = 0;

  function mouseControls() {
    canvas.addEventListener("mousemove", function(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener("click", function a(e) {
      if (
        mouse.x > playGame1.x &&
        mouse.x < playGame1.x + playGame1.width &&
        mouse.y > playGame1.y &&
        mouse.y < playGame1.y + playGame1.height
      ) {
        clickGame01++;
        startGame();
      } else {
        init();
      }

      if (clickGame01 === 1) {
        canvas.removeEventListener("click", a);
      }
    });
  }

  function startGame() {
    window.cancelAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 900;
    canvas.height = 600;
    canvas.style = "padding-top: 150px";
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

  var ballArray = [];

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

  const playGame1 = {
    x: canvas.width / 2 - 390,
    y: canvas.height / 3 + 50,
    width: 100,
    height: 100
  };

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

  // Game images

  const background = new Image();
  background.src = "../Ironhack-module1-project-game/img/background1.jpg";

  const leftPalmTree = new Image();
  leftPalmTree.src = "../Ironhack-module1-project-game/img/tree_6.png";

  const rightPalmTree = new Image();
  rightPalmTree.src = "../Ironhack-module1-project-game/img/tree_2.png";

  const leftMonkey = new Image();
  leftMonkey.src =
    "../Ironhack-module1-project-game/img/monkey/monkey_jump_1.png";

  const rightMonkey = new Image();
  rightMonkey.src =
    "../Ironhack-module1-project-game/img/monkey/monkey_jump_1_r.png";

  const coconutImg = new Image();
  coconutImg.src = "../Ironhack-module1-project-game/img/coco.png";

  const fallenCoconutImg = new Image();
  fallenCoconutImg.src =
    "../Ironhack-module1-project-game/img/fallencoconut.png";

  const life = new Image();
  life.src = "../Ironhack-module1-project-game/img/heart.png";

  const lostLife = new Image();
  lostLife.src = "../Ironhack-module1-project-game/img/heart2.png";

  const barImg = new Image();
  barImg.src = "../Ironhack-module1-project-game/img/pad1.png";

  const game = new Game({
    trees: [
      new Tree("left", 160),
      new Tree("medium", 400),
      new Tree("right", 640)
    ],
    monkeys: [new Monkey("left", 70), new Monkey("right", 760)],
    coconut: new Coconut(),
    bar: new Bar(),
    ctx: ctx,
    background: background,
    leftPalmTree: leftPalmTree,
    rightPalmTree: rightPalmTree,
    leftMonkey: leftMonkey,
    rightMonkey: rightMonkey,
    coconutImg: coconutImg,
    fallenCoconutImg: fallenCoconutImg,
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
