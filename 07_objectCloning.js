//Shallow cloning
let car = {
  brand: "Tata",
  color: "Red",
};
let vehicle = car;
console.log(car, vehicle);

//1.Deep cloning using (...) spread operator
let empSumit = {
  empName: "Sumit",
  empSlary: "70K",
};
let empSuhas = { ...empSumit };
empSuhas.empName = "Ram";
console.log(empSuhas);

//2.Deep cloning using JSON.parse() and JSON.stringify

let studStew = {
  name: "Stew Jobs",
  age: "50",
  marks: {
    science: 70,
    math: 90,
    english: 70,
  },
};
let studBill = JSON.parse(JSON.stringify(studStew));
console.log(studBill);
