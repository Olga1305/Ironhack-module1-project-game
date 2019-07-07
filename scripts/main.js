document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const bkGround = new Image();
  // bkGround.src = "../Ironhack-module1-project-game/img/background.png";
  bkGround.src = "../Ironhack-module1-project-game/img/background1.jpg";
  bkGround.id = "bkGround";
  document.body.appendChild(bkGround);
  const background = document.getElementById("bkGround");

  const leftTree = new Image();
  leftTree.src = "../Ironhack-module1-project-game/img/tree_6.png";
  leftTree.id = "leftTree";
  document.body.appendChild(leftTree);
  const leftPalmTree = document.getElementById("leftTree");

  const righttTree = new Image();
  righttTree.src = "../Ironhack-module1-project-game/img/tree_2.png";
  righttTree.id = "righttTree";
  document.body.appendChild(righttTree);
  const rightPalmTree = document.getElementById("righttTree");

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
    rightPalmTree: rightPalmTree
  });

  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
