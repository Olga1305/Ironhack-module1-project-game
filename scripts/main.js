// var game;
// document.onload = (function() {
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let ballRadius = 20;
let x = canvas.width - canvas.width / 3;
let y = 100;
let dx = -1;
let dy = 3;
let gravity = 0.06;
let friction = 0.8;
let monkeyWidth = 70;
let monkeyHeight = 70;
let monkeyLeftX = monkeyWidth;
let monkeyRightX = canvas.width - monkeyWidth * 2;
let monkeyY = 300;
let barWidth = 160;
let barHeight = 15;
let barX = (canvas.width - barWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;

var score = 0;
var lives = 3;

var trees = [
  { id: "left", width: 100, heigth: 40, x: 160, y: 10 },
  { id: "medium", width: 100, heigth: 40, x: 640, y: 10 },
  { id: "right", width: 100, heigth: 40, x: 400, y: 10 }
];

function drawTrees() {
  for (var i = 0; i < trees.length; i++) {
    ctx.beginPath();
    ctx.rect(trees[i].x, trees[i].y, trees[i].width, trees[i].heigth);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomTree(trees) {
  return trees[Math.floor(Math.random() * trees.length)];
}

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// function keyDownHandler(e) {
//   if (e.keyCode == 39) {
//     rightPressed = true;
//   } else if (e.keyCode == 37) {
//     leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.keyCode == 39) {
//     rightPressed = false;
//   } else if (e.keyCode == 37) {
//     leftPressed = false;
//   }
// }

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    barX = relativeX - barWidth / 2;
  }
}

// function collisionDetect() {
//  if(x > monkeyLeftX && x < monkeyLeftX+monkeyWidth && y > monkeyY && y < monkeyY+monkeykHeight) {
// x = canvas.width - canvas.width/3;
//  y = 100;
// dx = -2;
// dy = 2;
//   score++;
//    }
//  else if (x > monkeyRightX && x < monkeyRightX+monkeyWidth && y > monkeyY && y < monkeyY+monkeykHeight) {
// x = canvas.width - canvas.width/3;
// y = 100;
//  dx = -2;
// dy = 2;
//   score++;

//  }

//}

function drawCanvas() {
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00aae4";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function drawBar() {
  ctx.beginPath();
  ctx.rect(barX, canvas.height - 120, barWidth, barHeight);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function drawMonkeys() {
  ctx.beginPath();
  ctx.rect(monkeyLeftX, monkeyY, monkeyWidth, monkeyHeight);
  ctx.fillStyle = "#804000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(monkeyRightX, monkeyY, monkeyWidth, monkeyHeight);
  ctx.fillStyle = "#804000";
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, canvas.width / 2 - 30, canvas.height / 4);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(
    "Lives: " + lives,
    canvas.width / 2 - 30,
    canvas.height / 4 + 30
  );
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvas();
  drawTrees();
  drawMonkeys();
  drawBall();
  drawBar();
  drawScore();
  drawLives();
  //   collisionDetect();

  if (x + dx >= canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx * friction;
  }
  dy += gravity;
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - 120 - ballRadius) {
    if (x > barX && x < barX + barWidth) {
      dy = -dy;
      dy = dy * friction;
      dx = dx * friction;
    } else {
      lives--;
      if (!lives) {
        // alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width - canvas.width / 3;
        y = 100;
        dx = -1;
        dy = 3;
        barX = (canvas.width - barWidth) / 2;
      }
    }
  }

  // if (rightPressed && barX < canvas.width - barWidth) {
  //   barX += 7;
  // } else if (leftPressed && barX > 0) {
  //   barX -= 7;
  // }

  x += dx;
  y += dy;

  requestAnimationFrame(draw);
}

draw();

// })();

// ctx.fillStyle = "#00aae4";
// ctx.fillRect(0, 0, 900, 600);

// ctx.beginPath();
// ctx.rect(40, 300, 70, 70);
// ctx.fillStyle = "#804000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(790, 300, 70, 70);
// ctx.fillStyle = "#804000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "green";
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(640, 10, 100, 40);
// ctx.strokeStyle = "green";
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(400, 10, 100, 40);
// ctx.strokeStyle = "green";
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(370, 470, 160, 15);
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.closePath();

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

// 1 version

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawTrees();
//   drawMonkeys()
//   drawBall();
//   drawBar();
//   drawScore();
//   drawLives();
//   //   collisionDetect();

//   if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//     dx = -dx;
//   }
//   if (y + dy < ballRadius) {
//     dy = -dy;
//   }
//   else if (y + dy > canvas.height - 120 - ballRadius) {
//     if (x > barX && x < barX + barWidth) {
//       dy = -dy;
//     }
//     else {
//       lives--;
//       if (!lives) {
//         // alert("GAME OVER");
//         document.location.reload();
//       }
//       else {
//         x = canvas.width - canvas.width / 3;
//         y = 100;
//         dx = -2;
//         dy = 2;
//         barX = (canvas.width - barWidth) / 2;
//       }
//     }
//   }

//   if (rightPressed && barX < canvas.width - barWidth) {
//     barX += 7;
//   }
//   else if (leftPressed && barX > 0) {
//     barX -= 7;
//   }

//   x += dx;
//   y += dy;
//   requestAnimationFrame(draw);
// }
