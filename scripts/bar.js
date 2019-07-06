class Bar {
  constructor() {
    this.width = 160;
    this.height = 15;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - 100;
    this.sections = [
      {
        min: this.x - 10,
        max: this.x + 9,
        angle: 150,
        speed: 100
      },
      {
        min: this.x + 10,
        max: this.x + 29,
        angle: 135,
        speed: 100
      },
      {
        min: this.x + 30,
        max: this.x + 49,
        angle: 120,
        speed: 100
      },
      {
        min: this.x + 50,
        max: this.x + 69,
        angle: 105,
        speed: 100
      },
      {
        min: this.x + 70,
        max: this.x + 89,
        angle: 90,
        speed: 100
      },
      {
        min: this.x + 90,
        max: this.x + 109,
        angle: 75,
        speed: 100
      },
      {
        min: this.x + 110,
        max: this.x + 129,
        angle: 60,
        speed: 100
      },
      {
        min: this.x + 130,
        max: this.x + 149,
        angle: 45,
        speed: 100
      },
      {
        min: this.x + 150,
        max: this.x + 170,
        angle: 30,
        speed: 100
      }
    ];
  }
}
