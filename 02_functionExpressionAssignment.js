console.log(" ==========1. Find Square of------5,6,25,100 ========== ");

var square = function (num) {
  console.log("Square of ", num, "=", num * num);
};
square(5);
square(6);
square(25);
square(100);
console.log(typeof square);

console.log(" ==========2. Find area of Rectangle ========== ");
var areaOfRectangle = function (lenght, height) {
  var area = lenght * height;
  console.log("Area of Rectangle is", area, "mm");
};
areaOfRectangle(499, 917);

console.log(" ==========3. Swap value using FE ========== ");

var swapValues = function (value1, value2) {
  console.log("Before swap values are", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap values are", value1, value2);
};
swapValues("Virat", "Anuska");
swapValues(1000, 2000);

console.log(" ==========3. Swap value using FE ========== ");
