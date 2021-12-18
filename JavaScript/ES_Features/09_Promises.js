let operateMultiply = (arr) => {
  return new Promise((resolve, reject) => {
    let product = arr[0] * arr[1];
    console.log("Product is : ", product);
    resolve(arr);
  });
};

let operateAdd = (arr) => {
  return new Promise((resolve, reject) => {
    let sum = arr[0] + arr[1];
    console.log("Sum is : ", sum);
    resolve(arr);
  });
};

let operateDivide = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr[1] === 0) {
      reject("Cant divide number because of denomintor is 0");
    } else {
      let result = arr[0] / arr[1];
      console.log("Division is : ", result);
      resolve(arr);
    }
  });
};

let errorHandled = (error) => {
  console.log("errorHandled --- Something went wrong : ", error);
};

operateMultiply([20, 5])
  .then(
    (nums) => operateAdd(nums),
    (error) => errorHandled(error)
  )
  .then(
    (nums) => operateDivide(nums),
    (error) => errorHandled(error)
  )
  .then(
    (nums) => console.log(nums),
    (error) => errorHandled(error)
  ).catch(error => errorHandled(error));


//   a -> b -> c -> d -> e
//   a? then(succes, error -> ) -> b -> c -> d -> e