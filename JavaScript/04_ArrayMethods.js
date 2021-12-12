function arrayExample() {
  var students = [
    "Anurag",
    "Nimish",
    "Naman",
    "Hamsa",
    "Royal",
    "Gokulraj",
    "Varun",
  ];
  console.log(students);
  console.log(students[5]);
  console.log(typeof students);
}

// arrayExample();

function printArrayContents(arr) {
  console.log(arr);
  console.log("Size of the array : ", arr.length);
  console.log("Last element of the array : ", arr[arr.length - 1]);
}

function arrayPushPop() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printArrayContents(students);
  students.push("Kumuda");
  students.push("Deepak");
  console.log("************** After addition - From End *********************");
  printArrayContents(students);

  students.pop();
  students.pop();
  students.pop();
  console.log(
    "************** After removal  - From End  *********************"
  );
  printArrayContents(students);
}

function arrayShiftUnShift() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printArrayContents(students);

  //Addition
  students.unshift("Kumuda");
  students.unshift("Deepak");

  console.log(
    "************** After addition - From The Beginning *********************"
  );
  printArrayContents(students);

  //Removal
  students.shift();
  students.shift();
  students.shift();
  students.shift();
  console.log(
    "************** After removal  - From The Beginning  *********************"
  );
  printArrayContents(students);
}
function arrjoin() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  console.log(students.join("---"));
}

function deleteMethod() {
  var students = ["Anurag", "Nimish", "Naman", "Hamsa"];
  printArrayContents(students);

  delete students[2];
  printArrayContents(students);
}

// deleteMethod();

function mergeTwoArrays() {
  var arr1 = ["Bangalore", "Mysore"];
  var arr2 = ["Chennai", "Mumbai"];

  var cities = arr1.concat(arr2);
  console.log("mergeTwoArrays -> ", cities);
}

// mergeTwoArrays();

function spliceExamples(){
    var cities = [ 'Bangalore', 'Mysore', 'Chennai', 'Mumbai', 'Kolkota', 'Hyderabad', 'Delhi' ];

    // Params -> 
    //     1 -> pos where new elements are added
    //     2 -> how many elements needs to be removed
    //     3 and ... -> new elements to be added

    console.log(cities);
    //Both Removal and addition
    cities.splice(3, 3, "Kerala", "Gujurat");
    console.log("After Splice 1:- ", cities);
    
    //Only Removal case
    cities.splice(3, 2);
    console.log("After Splice 2:- ", cities);

    //only addition case
    cities.splice(0, 0, "Lucknow", "Madhya Pradesh");
    console.log("After Splice 3:- ", cities);
}

// spliceExamples();


function sliceMethods(){
    var cities = [ 'Bangalore', 'Mysore', 'Chennai', 'Mumbai', 'Kolkota', 'Hyderabad', 'Delhi' ]; 
    console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));
    console.log("cities.slice(0, 3) :- ", cities.slice(-3, -1));
}
sliceMethods();





