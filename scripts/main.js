$(document).ready(function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

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

  $("#game1").click(function(e) {
    $(".container").hide();
    $("#canvas").show();
    game.start();
  });

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
