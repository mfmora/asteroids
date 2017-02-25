
const Game = require('./lib/game.js')

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = 100;
canvasEl.width = 100;
new Game(
  canvasEl.width,
  canvasEl.height, 10
).start(canvasEl);
