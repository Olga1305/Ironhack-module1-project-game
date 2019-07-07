document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const bkGround = new Image();
  // bkGround.src = "../Ironhack-module1-project-game/img/background.png";
  bkGround.src = "../Ironhack-module1-project-game/img/background1.jpg";
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
    rightMonkey: rightMonkey
  });

  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
