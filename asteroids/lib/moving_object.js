const MovingObject = function(attributes) {


  this.pos = attributes["pos"],
  this.vel = attributes["vel"],
  this.radius = attributes["radius"],
  this.color = attributes["color"];


  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  this.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}

module.exports = MovingObject;
m = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
// console.log(m);
//
// m.move();
//
// console.log(m);
