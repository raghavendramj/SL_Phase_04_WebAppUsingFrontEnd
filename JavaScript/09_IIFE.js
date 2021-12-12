//Function expressio
var test = function () {
  console.log("Function expression");
};
test();

(function () {
  //..... all the code, it will be immediatly invoked.
  console.log(
    "Hey Buddy, I'm IIFE ->  immediately invoked function expressions"
  );
})();

function add(a, b) {
  return a + b;
}
console.log(window.add);

(function (a, b) {
  return a + b;
})(15, 16);

(() => {
  //...
})();

(function myIIFE() {
  var counter = 0;
  function add(a, b) {
    return a + b;
  }
  console.log(add(10, 20));
})();

const calculator = (function () {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return {
    sum: add,
    product: multiply,
    diff: subtract,
  };
})();

console.log(calculator.sum(10, 20));
console.log(calculator.product(10, 20));
console.log(calculator.diff(90, 20));
