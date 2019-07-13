canvas.width = innerWidth;
canvas.height = innerHeight;

let games = [
  {
    id: "monkeys",
    x: canvas.width / 2 - 390,
    y: canvas.height / 3 + 50,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_monkeys/background1.jpg",
    lateralLeft: "../Ironhack-module1-project-game/img/game_monkeys/tree_6.png",
    lateralRight:
      "../Ironhack-module1-project-game/img/game_monkeys/tree_2.png",
    catcherLeft:
      "../Ironhack-module1-project-game/img/game_monkeys/monkey/monkey_jump_1.png",
    catcherRight:
      "../Ironhack-module1-project-game/img/game_monkeys/monkey/monkey_jump_1_r.png",
    jumper: "../Ironhack-module1-project-game/img/game_monkeys/coco.png",
    fallen:
      "../Ironhack-module1-project-game/img/game_monkeys/fallencoconut.png",
    bar: "../Ironhack-module1-project-game/img/game_monkeys/pad1.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_monkeys.png",
    lateralLeftX: -20,
    lateralLeftY: 100,
    lateralLeftWidth: 400,
    lateralLeftHeight: 550,
    lateralRightX: 550,
    lateralRightY: 80,
    lateralRightWidth: 400,
    lateralRightHeight: 550,
    catcherLeftImgX: 20,
    catcherLeftImgY: 250,
    catcherRightImgX: 740,
    catcherRightImgY: 250,
    catcherImgWidth: 140,
    catcherImgHeight: 168
  },
  {
    id: "hollywood",
    x: canvas.width / 2 - 50,
    y: canvas.height / 3 + 50,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_hollywood/bgd1.jpg",
    lateralLeft:
      "../Ironhack-module1-project-game/img/game_hollywood/marilyn.png",
    lateralRight:
      "../Ironhack-module1-project-game/img/game_hollywood/odri.png",
    catcherLeft: "../Ironhack-module1-project-game/img/game_hollywood/bag1.png",
    catcherRight:
      "../Ironhack-module1-project-game/img/game_hollywood/bag2.png",
    jumper: "../Ironhack-module1-project-game/img/game_hollywood/gem1.png",
    fallen: "../Ironhack-module1-project-game/img/game_hollywood/gem1.png",
    bar: "../Ironhack-module1-project-game/img/game_hollywood/9.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_hollywood.png",
    lateralLeftX: -20,
    lateralLeftY: 120,
    lateralLeftWidth: 198,
    lateralLeftHeight: 455,
    lateralRightX: 730,
    lateralRightY: 110,
    lateralRightWidth: 132,
    lateralRightHeight: 471,
    catcherLeftImgX: 70,
    catcherLeftImgY: 295,
    catcherRightImgX: 700,
    catcherRightImgY: 295,
    catcherImgWidth: 120,
    catcherImgHeight: 104
  },
  {
    id: "fox",
    x: canvas.width / 2 + 290,
    y: canvas.height / 3 + 50,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_fox/bg5.jpg",
    lateralLeft: "",
    lateralRight: "",
    catcherLeft: "../Ironhack-module1-project-game/img/game_fox/fox.png",
    catcherRight: "../Ironhack-module1-project-game/img/game_fox/fox.png",
    jumper: "../Ironhack-module1-project-game/img/game_fox/building_1.png",
    fallen: "../Ironhack-module1-project-game/img/game_fox/building_1.png",
    bar: "../Ironhack-module1-project-game/img/game_fox/9.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_fox.png",
    lateralLeftX: 0,
    lateralLeftY: 0,
    lateralLeftWidth: 0,
    lateralLeftHeight: 0,
    lateralRightX: 0,
    lateralRightY: 0,
    lateralRightWidth: 0,
    lateralRightHeight: 0,
    catcherLeftImgX: 60,
    catcherLeftImgY: 400,
    catcherRightImgX: 770,
    catcherRightImgY: 400,
    catcherImgWidth: 77,
    catcherImgHeight: 105
  },
  {
    id: "knight",
    x: canvas.width / 2 - 390,
    y: canvas.height / 3 + 290,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_knight/background_2.png",
    lateralLeft: "../Ironhack-module1-project-game/img/game_knight/castle1.png",
    lateralRight:
      "../Ironhack-module1-project-game/img/game_knight/castle2.png",
    catcherLeft:
      "../Ironhack-module1-project-game/img/game_knight/platform2.png",
    catcherRight:
      "../Ironhack-module1-project-game/img/game_knight/platform2.png",
    jumper: "../Ironhack-module1-project-game/img/game_knight/knight1.png",
    fallen: "../Ironhack-module1-project-game/img/game_knight/knight1.png",
    bar: "../Ironhack-module1-project-game/img/game_knight/6.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_knight.png",
    lateralLeftX: -20,
    lateralLeftY: 70,
    lateralLeftWidth: 200,
    lateralLeftHeight: 545,
    lateralRightX: 720,
    lateralRightY: 50,
    lateralRightWidth: 200,
    lateralRightHeight: 560,
    catcherLeftImgX: 105,
    catcherLeftImgY: 330,
    catcherRightImgX: 655,
    catcherRightImgY: 330,
    catcherImgWidth: 140,
    catcherImgHeight: 60
  },
  {
    id: "penguin",
    x: canvas.width / 2 - 50,
    y: canvas.height / 3 + 290,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_penguin/bg-icebergs-2.png",
    lateralLeft: "../Ironhack-module1-project-game/img/game_penguin/Prop_6.png",
    lateralRight:
      "../Ironhack-module1-project-game/img/game_penguin/Prop_6.png",
    catcherLeft:
      "../Ironhack-module1-project-game/img/game_penguin/Pad_03_1.png",
    catcherRight:
      "../Ironhack-module1-project-game/img/game_penguin/Pad_03_1.png",
    jumper:
      "../Ironhack-module1-project-game/img/game_penguin/Animations/penguin_jump02.png",
    fallen:
      "../Ironhack-module1-project-game/img/game_penguin/Animations/penguin_jump02.png",
    bar: "../Ironhack-module1-project-game/img/game_penguin/18.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_penguin.png",
    lateralLeftX: 0,
    lateralLeftY: 300,
    lateralLeftWidth: 178,
    lateralLeftHeight: 238,
    lateralRightX: 720,
    lateralRightY: 300,
    lateralRightWidth: 178,
    lateralRightHeight: 238,
    catcherLeftImgX: -10,
    catcherLeftImgY: 395,
    catcherRightImgX: 760,
    catcherRightImgY: 395,
    catcherImgWidth: 150,
    catcherImgHeight: 60
  },
  {
    id: "alien",
    x: canvas.width / 2 + 290,
    y: canvas.height / 3 + 290,
    width: 100,
    height: 100,
    click: 0,
    bg: "../Ironhack-module1-project-game/img/game_alien/background_3.png",
    lateralLeft:
      "../Ironhack-module1-project-game/img/game_alien/spaceship3.png",
    lateralRight:
      "../Ironhack-module1-project-game/img/game_alien/spaceship4.png",
    catcherLeft: "../Ironhack-module1-project-game/img/game_alien/11.png",
    catcherRight: "../Ironhack-module1-project-game/img/game_alien/11.png",
    jumper:
      "../Ironhack-module1-project-game/img/game_alien/alien_green/green__0029_jump_3.png",
    fallen:
      "../Ironhack-module1-project-game/img/game_alien/alien_green/green__0029_jump_3.png",
    bar: "../Ironhack-module1-project-game/img/game_alien/11.png",
    prev: "../Ironhack-module1-project-game/img/home/preview_alien.png",
    lateralLeftX: -150,
    lateralLeftY: 200,
    lateralLeftWidth: 450,
    lateralLeftHeight: 350,
    lateralRightX: 670,
    lateralRightY: 200,
    lateralRightWidth: 350,
    lateralRightHeight: 292,
    catcherLeftImgX: 120,
    catcherLeftImgY: 340,
    catcherRightImgX: 650,
    catcherRightImgY: 325,
    catcherImgWidth: 152,
    catcherImgHeight: 60
  }
];

let gameId = undefined;
let lateralLeftX = undefined;
let lateralLeftY = undefined;
let lateralLeftWidth = undefined;
let lateralLeftHeight = undefined;
let lateralRightX = undefined;
let lateralRightY = undefined;
let lateralRightWidth = undefined;
let lateralRightHeight = undefined;
let catcherLeftImgX = undefined;
let catcherLeftImgY = undefined;
let catcherRightImgX = undefined;
let catcherRightImgY = undefined;
let catcherImgWidth = undefined;
let catcherImgHeight = undefined;

// Home images

const bgdHome = new Image();
bgdHome.src = "../Ironhack-module1-project-game/img/home/home01.png";

const game01 = new Image();
game01.src = "../Ironhack-module1-project-game/img/home/game1.png";

const play01 = new Image();
play01.src = "../Ironhack-module1-project-game/img/home/play1.png";

const frame01 = new Image();
frame01.src = "../Ironhack-module1-project-game/img/home/frame.png";

const previewMonkeys = new Image();
previewMonkeys.src =
  "../Ironhack-module1-project-game/img/home/preview_monkeys.png";

const previewHollywood = new Image();
previewHollywood.src =
  "../Ironhack-module1-project-game/img/home/preview_hollywood.png";

const previewFox = new Image();
previewFox.src = "../Ironhack-module1-project-game/img/home/preview_fox.png";

const previewKhight = new Image();
previewKhight.src =
  "../Ironhack-module1-project-game/img/home/preview_knight.png";

const previewPenguin = new Image();
previewPenguin.src =
  "../Ironhack-module1-project-game/img/home/preview_penguin.png";

const previewAlien = new Image();
previewAlien.src =
  "../Ironhack-module1-project-game/img/home/preview_alien.png";

// Game images

const life = new Image();
life.src = "../Ironhack-module1-project-game/img/heart.png";

const lostLife = new Image();
lostLife.src = "../Ironhack-module1-project-game/img/heart2.png";

const background = new Image();
const leftLateral = new Image();
const rightLateral = new Image();
const leftCatcher = new Image();
const rightCatcher = new Image();
const jumperImg = new Image();
const fallenImg = new Image();
const barImg = new Image();

// Audio

const clickSound = document.createElement("audio");
clickSound.src =
  "../Ironhack-module1-project-game/audio/menu-selection-click.wav";

const bounceSound = document.createElement("audio");
bounceSound.src = "../Ironhack-module1-project-game/audio/jump.wav";

const bounce2Sound = document.createElement("audio");
bounce2Sound.src = "../Ironhack-module1-project-game/audio/jump2.wav";

const successSound = document.createElement("audio");
successSound.src = "../Ironhack-module1-project-game/audio/success-1.wav";

const success2Sound = document.createElement("audio");
success2Sound.src = "../Ironhack-module1-project-game/audio/success-2.wav";

const failSound = document.createElement("audio");
failSound.src = "../Ironhack-module1-project-game/audio/fail-1.wav";

const gameOverSound = document.createElement("audio");
gameOverSound.src = "../Ironhack-module1-project-game/audio/game-over.wav";

const gameOver2Sound = document.createElement("audio");
gameOver2Sound.src = "../Ironhack-module1-project-game/audio/game-over-2.wav";
