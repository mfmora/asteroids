function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if(numbers.length === numArgs) {
      return numbers.reduce(function(acc, val) {
        return acc + val;
      }, 0);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// console.log(curriedSum(3)(1));
//
//

//
//
// Function.prototype.curry = function(numArgs) {
//   let numbers = [];
//   myMethod = this;
//   function _curry(num) {
//     numbers.push(num);
//
//     if(numbers.length === numArgs) {
//       // console.log(`numbers: ${numbers}`);
//       return myMethod(numbers);
//
//     } else {
//       return _curry;
//     }
//   }
//
//   return _curry;
// }


Function.prototype.curry = function(numArgs) {
  let numbers = [];
  myMethod = this;
  function _curry(num) {
    numbers.push(num);

    if(numbers.length === numArgs) {
      // return myMethod.apply(null, numbers)
      return myMethod(...numbers);

    } else {
      return _curry;
    }
  }

  return _curry;
}


function add(...numbers) {
  // console.log(numbers);
  return numbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}

// function add(a, b, c) {
//   // console.log(numbers);
//   return a + b + c;
// }

let arr = [1,2,3];
console.log(add.curry(3)(1)(2)(3));
