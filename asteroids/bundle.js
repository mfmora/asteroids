/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(3);
const Util = __webpack_require__(4);

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;

    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  // Return a randomly oriented vector with the given length.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}
module.exports = Util;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  //console.log(canvas);
  let ctx = canvas.getContext("2d");
  let view = new GameView(ctx);
  view.start();
});


/***/ })
/******/ ]);