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
    prev: "../Ironhack-module1-project-game/img/home/preview_monkeys.png"
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
    prev: "../Ironhack-module1-project-game/img/home/preview_hollywood.png"
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
    prev: "../Ironhack-module1-project-game/img/home/preview_fox.png"
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
    prev: "../Ironhack-module1-project-game/img/home/preview_knight.png"
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
    prev: "../Ironhack-module1-project-game/img/home/preview_penguin.png"
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
    prev: "../Ironhack-module1-project-game/img/home/preview_alien.png"
  }
];

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
