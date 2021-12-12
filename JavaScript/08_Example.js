function testFoo(){
    var x = 185;
    bar();
    x = 258;
}

function bar(){
    console.log(x);
}

testFoo();
// ----------------------------

var x = 10;
function test(){
    var x = 20;
    console.log(x);
}
test();
console.log(x);