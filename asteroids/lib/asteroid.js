const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const Asteroid = function(attributes) {

  this.COLOR = attributes["color"] || "red";
  this.RADIUS = attributes["radius"] || 15;
  const vector = Util.randomVec(1);

  MovingObject.call(this, { color: this.COLOR, radius: this.RADIUS, pos: attributes["pos"], vel: vector });


}
Util.inherits(Asteroid, MovingObject);

// a = new Asteroid({ pos: [30, 30] });
// console.log(a);
//
// a.move();
//
// console.log(a);
// // console.log(a.__proto__.__proto__);

module.exports = Asteroid;
