// class Game {
//   constructor(options) {
//     this.rows = options.rows;
//     this.columns = options.columns;
//     this.maxCells = options.maxCells;
//     this.ctx = options.ctx;
//     this.coconut = options.coconut;
//     this.bar = options.bar;
//     this.monkey = options.monkey;
//     this.rightPressed = false;
//     this.leftPressed = false;
//     this.gameOver = undefined;
//   }

//   _drawBoard() {
//     this.ctx.fillStyle = "#00aae4";
//     this.ctx.fillRect(
//       0,
//       0,
//       this.rows * this.maxCells,
//       this.columns * this.maxCells
//     );
//   }

//   _drawTrees() {}

//   _drawMonkeys() {}

//   _drawCoconut() {}

//   _drawBar() {}

//   _update() {}

//   document.addEventListener("keydown", keyDownHandler, false);
//   document.addEventListener("keyup", keyUpHandler, false);
//   document.addEventListener("mousemove", mouseMoveHandler, false);

// keyDownHandler(e) {
//   if (e.keyCode == 39) {
//     this.rightPressed = true;
//   }
//   else if (e.keyCode == 37) {
//     this.leftPressed = true;
//   }
// }
// keyUpHandler(e) {
//   if (e.keyCode == 39) {
//     this.rightPressed = false;
//   }
//   else if (e.keyCode == 37) {
//     this.leftPressed = false;
//   }
// }

// mouseMoveHandler(e) {
//   var relativeX = e.clientX - canvas.offsetLeft;
//   if (relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth / 2;
//   }
// }

//   start() {}
// }
