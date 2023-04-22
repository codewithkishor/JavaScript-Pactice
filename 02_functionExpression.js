//function expression with no argument and no return value
var showResult = function () {
  console.log("Show...");
};
showResult();

//function expression with argument and return value
var showResult = function (num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
};
showResult(20, 10);
console.log(typeof showResult);

//function expression with argument and return value
var showResult = function (num1, num2) {
  var sum = num1 + num2;
  console.log("Final sum is", sum);
  return sum;
};
//var sum = showResult(2, 10);
console.log(showResult(2, 10));
