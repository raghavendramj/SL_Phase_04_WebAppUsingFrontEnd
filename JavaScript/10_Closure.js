function greeting() {
  var message = "Welcome to Simpilearn";
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}

var hifunc = greeting();
console.dir(hifunc);

var salaryOfEmployee = (function () {
  var salary = 60000;
  function changeSalaryBy(amount) {
    // CLOSURE -> PRESERVE OUTER FUNCTION's SALARY VARIBLE -> 60000
    salary += amount;
  }

  return {
    raise: function (val) {
      changeSalaryBy(val);
    },
    lower: function (val) {
      changeSalaryBy(-val);
    },
    currentSalary: function () {
      return salary;
    },
  };
})();
