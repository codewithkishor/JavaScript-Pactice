//Ternary operator syntax

//var condition = exp1 ? exp2 : exp3;

//if ssc marks greater than equal to 35 ten pass or fail

var sscMarks = 30;
var result = sscMarks >= 35 ? "Pass" : "Fail";

console.log(`The Final result is ${result}`);

//Ternary operator in function expression as argument with return value

var result = function (sscMarks) {
  //var sscResult = (sscMarks >= 35 && !(sscMarks > 100)) ? "Pass" : "Fail";
  //var sscResult = (sscMarks >= 35 && !sscMarks < 100)?"Pass" : "Fail";
  var sscResult =
    sscMarks < 0 || sscMarks > 100
      ? "In valid data"
      : sscMarks > 35
      ? "Pass"
      : "Fail";
  return sscResult;
};
console.log(`The Final result 23 is ${result(23)}`);
console.log(`The Final result 45 is ${result(45)}`);
console.log(`The Final result is ${result(1200)}`);
console.log(`The Final result is ${result("Ten")}`);
console.log(`The Final result is ${result(-10)}`);
console.log(`The Final result is ${result(-50)}`);
