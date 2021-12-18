//MAP
function mapFunction() {
  let numbers = [2, 4, 6, 8];
  console.log("Numbers : ", numbers);
  let squares = numbers.map((x) => x * x);
  console.log("And its squares : ", squares);

  let names = ["Virat", "Rishabh", "Rahul", "Venkatesh"];
  console.log("Names : ", names);

  let lenArray = names.map((eachString) => eachString.length);
  console.log("Length of Names : ", lenArray);
}
// mapFunction();

//FILTER
function filterFunction() {
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let even = allNumbers.filter((num) => num % 2 == 0);
  console.log("Even Numbers : ", even);

  let odd = allNumbers.filter((num) => num % 2 != 0);
  console.log("Odd Numbers : ", odd);
}

// filterFunction();

function reduceFunction() {
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let sumOfAllNumbers = allNumbers.reduce((accumulator, element) => {
    console.log("accumulator: ", accumulator, " and element: ", element);
    return accumulator + element;
  });
  console.log("Sum of all nums : ", sumOfAllNumbers);
}
reduceFunction();
