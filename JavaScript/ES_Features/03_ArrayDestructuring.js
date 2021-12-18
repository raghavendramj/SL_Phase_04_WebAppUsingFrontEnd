function arrayDestruc1() {
  function getScores() {
    return [45, 55, 20, 30, 56, 78, 12, 62];
  }

  let scores = getScores();

  let x = scores[0],
    y = scores[1],
    z = scores[2];
  console.log("X =", x);
  console.log("Y =", y);
  console.log("Z =", z);
  console.log("\n**********************************");
  let [a, b, c, ...restOthers] = getScores();
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("Others =", restOthers);
  console.log("\n**********************************");

  let m, n;
  [m, n] = [10, 20];

  console.log("M =", m);
  console.log("N =", n);
}

function arrayDestruc2() {
  console.log("\n*********Default Values***********");
  let [a, b = 1, c = 2, d = 3] = [10, 56];
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("d =", d);
}

arrayDestruc2();
