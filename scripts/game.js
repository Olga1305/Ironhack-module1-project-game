class Game {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.ctx = options.ctx;
    // this.coconut = options.coconut;
    this.gameOver = undefined;
  }

  _drawBoard() {
    this.ctx.fillStyle = "#E3D4AB";
    this.ctx.fillRect(
      0,
      0,
      this.rows * this.maxCells,
      this.columns * this.maxCells
    );
  }

  _drawTrees() {}

  _drawMonkeys() {}

  _drawCoconut() {}

  _drawBar() {}

  _update() {}

  start() {}
}
