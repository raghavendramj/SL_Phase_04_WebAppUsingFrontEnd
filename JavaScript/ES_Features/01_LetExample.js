function testVar() {
  var num1 = 10;
  console.log("First Num1 ->", num1);

  var num1 = 20;
  console.log("Again Num1 ->", num1);
}

//testVar();

function testLet() {
  let num3 = 10;
  console.log("First num3 ->", num3);

//   let num3 = 45;
//   console.log("Again num3 ->", num3);
}

// testLet();

function testLet2() {
  let x = 10;
  if (x == 10) {
    let x = 20;
    console.log("Inside if block : x  ->", x);
  }
  console.log("Outside if block : x  ->", x);
}

// testLet2();

function testSetTimeOut(){
    for(var i=0; i<5; i++){
        setTimeout(
            function(){
                console.log(i);
            }, 
            1000
        );
    }
}