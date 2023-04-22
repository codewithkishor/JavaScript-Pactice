var num1 = 100;
var num2 = 5;

console.log(
  `==============1. Arithmetic Operators============================`
);

var addResult = num1 + num2;
console.log(`Addition is ${addResult}`);

var addResult = num1 - num2;
console.log(`Subtraction is ${addResult}`);

var addResult = num1 * num2;
console.log(`Multiplication is ${addResult}`);

var addResult = num1 / num2;
console.log(`Division is ${addResult}`);

var addResult = num1 % num2;
console.log(`Modulus is ${addResult}`); //%  is denotes as reminder

var addResult = 20 % 2; // return 0 i.e true it means value is even
console.log(`Modulus is ${addResult}`);

var addResult = 25 % 2; // return 1 i.e false it means value is odd
console.log(`Modulus is ${addResult}`);

console.log(`==============Unary Operators============================`);
var num = 10;
num = ++num; //num=num+1
console.log(`Increment Operator result is ${num}`);
var numb = 20;
numb = --numb;
console.log(`decrement Operator result is ${numb}`);
console.log(
  `==============1. (=)Assignment Operators============================`
);
var num1 = 100;
var num2 = 5;
num1 += num2; //this is shortcut of num1=num1+num2

//var num1 = num1 + num2;
console.log(`Compound Addition is ${num1}`);

console.log(`Compound Subtraction is ${(num1 -= num2)}`);

console.log(`Compound Multiplication is ${(num1 *= num2)}`);

console.log(`Compound Division is ${(num1 /= num2)}`);

console.log(`Compound Modulus is ${(num1 %= num2)}`);

console.log(`============== Comparison Operators============================`);
var number1 = 10;
var number2 = 2;
