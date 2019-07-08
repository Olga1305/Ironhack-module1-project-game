document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const bkGround = new Image();
  bkGround.src = "../Ironhack-module1-project-game/img/background1.jpg";
  // bkGround.src = "../Ironhack-module1-project-game/img/bg_r.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/background.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/background2.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/BG_jungle.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/game_background_1.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/game_background_2.png";
  // bkGround.src = "../Ironhack-module1-project-game/img/game_background_3.png";
  bkGround.id = "bkGround";
  bkGround.style = "display: none";
  document.body.appendChild(bkGround);
  const background = document.getElementById("bkGround");

  const leftTree = new Image();
  leftTree.src = "../Ironhack-module1-project-game/img/tree_6.png";
  leftTree.id = "leftTree";
  leftTree.style = "display: none";
  document.body.appendChild(leftTree);
  const leftPalmTree = document.getElementById("leftTree");

  const righttTree = new Image();
  righttTree.src = "../Ironhack-module1-project-game/img/tree_2.png";
  righttTree.id = "righttTree";
  righttTree.style = "display: none";
  document.body.appendChild(righttTree);
  const rightPalmTree = document.getElementById("righttTree");

  const lMonkey = new Image();
  lMonkey.src = "../Ironhack-module1-project-game/img/monkey/monkey_jump_1.png";
  lMonkey.id = "lMonkey";
  lMonkey.style = "display: none";
  document.body.appendChild(lMonkey);
  const leftMonkey = document.getElementById("lMonkey");

  const rMonkey = new Image();
  rMonkey.src =
    "../Ironhack-module1-project-game/img/monkey/monkey_jump_1_r.png";
  rMonkey.id = "rMonkey";
  rMonkey.style = "display: none";
  document.body.appendChild(rMonkey);
  const rightMonkey = document.getElementById("rMonkey");

  const coco = new Image();
  coco.src = "../Ironhack-module1-project-game/img/coco.png";
  coco.id = "coco";
  coco.style = "display: none";
  document.body.appendChild(coco);
  const coconutImg = document.getElementById("coco");

  const cocoFalls = new Image();
  cocoFalls.src = "../Ironhack-module1-project-game/img/fallencoconut.png";
  cocoFalls.id = "cocoFalls";
  cocoFalls.style = "display: none";
  document.body.appendChild(cocoFalls);
  const fallenCoconutImg = document.getElementById("cocoFalls");

  const heart = new Image();
  heart.src = "../Ironhack-module1-project-game/img/heart.png";
  heart.id = "heart";
  heart.style = "display: none";
  document.body.appendChild(heart);
  const life = document.getElementById("heart");

  const heart2 = new Image();
  heart2.src = "../Ironhack-module1-project-game/img/heart2.png";
  heart2.id = "heart2";
  heart2.style = "display: none";
  document.body.appendChild(heart2);
  const lostLife = document.getElementById("heart2");

  const padle = new Image();
  padle.src = "../Ironhack-module1-project-game/img/pad1.png";
  padle.id = "padle";
  padle.style = "display: none";
  document.body.appendChild(padle);
  const barImg = document.getElementById("padle");

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

  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
