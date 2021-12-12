var four_val = 48;
function topFunction() {
  var three_val = 24;
  innerFunction();
  function innerFunction() {
    var two_val = 12;
    lastInnerFunction();
    function lastInnerFunction() {
      var one_val = 6;
      console.log("one_val -> ", one_val, "two_val -> ", two_val);
      console.log("three_val -> ", three_val, "four_val -> ", four_val);
    }
  }
}
topFunction();