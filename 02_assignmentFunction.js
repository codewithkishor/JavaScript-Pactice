console.log(
  "===========================Que 1 write any two function with no arg and no return value================================"
);
//1st function
function fuction1() {
  console.log("This is 1st function with no argument and no return value");
}

//2nd function
function fuction2() {
  console.log("This is 2nd function with no argument and no return value");
}

console.log(
  "===========================Que 2 write function with arg and no return value================================"
);
function personalDetails(firstName, lastName, collegeName) {
  console.log("My personal details are as", firstName, lastName, collegeName);
}
personalDetails(
  "Kishor",
  "Bargaje",
  "Karmayogi Technical institute, Shelve Pandharpur"
);

console.log(
  "===========================Que 3 write function with swap value================================"
);
console.log(
  "===========================Que 3.1 write function with swap value================================"
);
function swapValues(value1, value2) {
  console.log("Before swap values are", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap values are", value1, value2);
}
swapValues("Kishor", "Kishori");
swapValues(1000, 2000);

console.log(
  "===========================Que 4 write function with 3 parameter and 3 argument================================"
);

function addThreeNum(num1, num2, num3) {
  console.log("The addition is");
  console.log(num1 + num2 + num3);
}
addThreeNum(100, 200, 300);
addThreeNum(10.23, 600, 40);
addThreeNum("Hello", "Good", "Morning");

function bankDetails(bankName, acNo, location, pinCode) {
  console.log(
    `My bank details are "${bankName}", ${acNo},${location},${pinCode}`
  );
}
bankDetails("Axis Bank", 3456782345, "Pune", 413304);
bankDetails("State Bank", 1254814782, "Pune", 410501);

function multiply(num1, num2) {
  var Result = num1 * num2;
  return Result;
}
console.log(multiply(20, 30));
