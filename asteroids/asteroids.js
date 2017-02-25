const GameView = require('./lib/game_view.js');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  //console.log(canvas);
  let ctx = canvas.getContext("2d");
  let view = new GameView(ctx);
  view.start();
});
