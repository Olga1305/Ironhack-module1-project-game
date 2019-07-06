document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  var game = new Game({
    trees: [
      new Tree("left", 160),
      new Tree("medium", 400),
      new Tree("right", 640)
    ],
    monkeys: [new Monkey("left", 70), new Monkey("right", 760)],
    coconut: new Coconut(),
    bar: new Bar(),
    ctx: ctx
  });

  game.start();

  game.gameOver = function() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };
})();
