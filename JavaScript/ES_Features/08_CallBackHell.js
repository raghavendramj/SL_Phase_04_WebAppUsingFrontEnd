// let mutliply = (a, b) => {
//   return a * b;
// };

// let add = (a, b) => {
//   return a + b;
// };

// let divide = (a, b) => {
//   return a / b;
// };

let operations = (a, b) => {
  //operateMutliply(a, b, mutliply);
  operateMutliply(a, b, (a, b) => {
    // operateAdd(10, 20, add);
    operateAdd(a, b, (a, b) => {
      // operateDivide(a, b, divide);
      operateDivide(a, b, (a, b) => {
        return a / b;
      });
      return a + b;
    });
    return a * b;
  });
};

let operateAdd = (a, b, addCallBack) => {
  let sum = addCallBack(a, b);
  console.log("Sum = ", sum);
};

let operateMutliply = (a, b, callBack) => {
  let product = callBack(a, b);
  console.log("Product is : ", product);
  return product;
};

let operateDivide = (a, b, divideCallBack) => {
  const result = divideCallBack(a, b);
  console.log("Division result is : ", result);
};

operations(100, 25);
