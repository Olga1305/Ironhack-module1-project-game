document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  var game = new Game({
    trees: [
      new Tree("left", 160),
      new Tree("medium", 640),
      new Tree("right", 400)
    ],
    monkeys: [new Monkey("left", 70), new Monkey("right", canvas.width - 140)],
    // monkeyLeft: new Monkey(this.width),
    // monkeyRight: new Monkey(canvas.width - this.width * 2),
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
