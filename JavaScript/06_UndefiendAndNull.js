function example() {
  var x;
  console.log("x :-", x);
  console.log("typeof x :- ", typeof x);
  // VM6947:2 x :- undefined
  // VM6947:3 typeof x :-  undefined
  undefined;
  var x = null;
  console.log("x :-", x);
  console.log("typeof x :- ", typeof x);
  // VM6984:2 x :- null
  // VM6984:3 typeof x :-  object
}

example();
