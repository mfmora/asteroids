const Game = require('./game.js');

const GameView = function(ctx) {
  this.ctx = ctx;
  this.game = new Game(1920,1920,10);

  this.start = function() {
    setInterval(()=> {
      this.game.moveObjects();
      this.game.draw(ctx);
    }, 20);
  }
}

module.exports = GameView;
