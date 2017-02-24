// Function.prototype.inherits = function(parent) {
//   function Surrogate() {};
//
//   Surrogate.prototype = parent.prototype;
//
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }


Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}


function MovingObject () {
  // let hi = function() {
  //   console.log("hi");
  // }
}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.hi = () => {
  console.log("hi");
}
Asteroid.prototype.bye = () => {
  console.log("bye asteroid");
}
let m = new MovingObject();
m.hi();
let s = new Ship();
s.hi();
let a = new Asteroid();
a.bye();
console.log(a.__proto__);
