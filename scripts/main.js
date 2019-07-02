var game;
document.onload = (function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const widthCell = 10;

  ctx.fillStyle = "#00aae4";
  ctx.fillRect(0, 0, 900, 600);

  ctx.beginPath();
  ctx.rect(40, 300, 70, 70);
  ctx.fillStyle = "#804000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(790, 300, 70, 70);
  ctx.fillStyle = "#804000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(160, 10, 100, 40);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(640, 10, 100, 40);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(400, 10, 100, 40);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(370, 470, 160, 15);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  //   game = new Game({
  //     rows: canvas.width / widthCell,
  //     columns: canvas.height / widthCell,
  //     maxCells: widthCell,
  //     snake: new Snake(canvas.width / widthCell, canvas.height / widthCell),
  //     ctx: ctx
  //   });
  // game.start();

  // game.gameOver = function () {
  //     let gameOver = document.getElementById("gameover");
  //     canvas.style = "display: none";
  //     gameOver.style = "display: block";
  // };
})();
