const Asteroid = require('./asteroid.js');

const Game = function (DIM_X, DIM_Y, NUM_ASTEROIDS) {
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;

  this.asteroids = [];

  //
  this.addAsteroids = function(num) {
    if (num === 0) {
      return null;
    }
    else {
      this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
      this.addAsteroids(num - 1);
    }
  }

  this.randomPosition = function() {
    x = Math.floor(Math.random() * this.DIM_X);
    y = Math.floor(Math.random() * this.DIM_Y);
    return [x,y];
  }

  this.draw = function(ctx) {
    ctx.clearRect(0,0,DIM_X,DIM_Y);
    this.asteroids.forEach((asteroid) => {
      asteroid.draw(ctx);
    });
  }

  this.moveObjects = function() {
    this.asteroids.forEach((asteroid) => {
      asteroid.move();
    });
  }

  // this.start = function(canvasEl) {
  //    const ctx = canvasEl.getContext("2d");
  //    this.draw(ctx);
  // }


  this.addAsteroids(this.NUM_ASTEROIDS);
}
module.exports = Game;
// const game = new Game(100,100,3);
// console.log(game.asteroids);
// game.randomPosition();
