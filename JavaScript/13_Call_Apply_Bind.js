function add(a) {
    return this.b + a;
}

var obj = { b : 10 };

console.log("Call : ", add.call(obj, 45));
console.log("Apply : ", add.apply(obj, [45]));
var add10 = add.bind(obj);
console.log("Bind : ", add10(45));