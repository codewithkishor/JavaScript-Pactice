//set will allow unique elements

const setNum = new Set(); //creating set
setNum.add(0);
setNum.add(1);
setNum.add(3);
setNum.add(4);
setNum.add(5);
setNum.add(2);
console.log(setNum);

const totalEle = setNum.size; //available elements in set
console.log(`Total element available in set are ${totalEle}`);

//Delete elements in set
const del = setNum.delete(5);
console.log(setNum);

//clearing set using clear()
//setNum.clear();
console.log(setNum);

//traversing the set

for (const element of setNum) {
  console.log(element);
}

//removing duplicate elements
let arrayOfNum = [20, 2, 50, 60, 20, 2, 30, 40, 60, 1, 8, 60];
const mySet = new Set(arrayOfNum);
console.log(mySet);
//but we want that in Array
// const myArray = [...mySet];
// console.log(myArray);

const myArray = [...new Set(arrayOfNum)];

console.log(myArray);

class Employee {
  constructor(empId, empName, empAge, empCity) {
    this.empId = empId;
    this.empName = empName;
    this.empAge = empAge;
    this.empCity = empCity;
  }
}
const empRaj = new Employee(11, "Raj", 22, "Pune");
const empRamesh = new Employee(12, "Ramesh", 20, "Pandharpur");
const empSuresh = new Employee(13, "Suresh", 23, "Barshi");
const empDipak = new Employee(14, "Dipak", 25, "Beed");
const empParam = new Employee(15, "Param", 26, "Shelve");

//collection-Collection of elements
//Elements of Data type-Primitive and Non-Primitive Data type

const arrayOfEmployee = [empRaj, empRamesh, empSuresh, empDipak, empParam];
for (const Employee of arrayOfEmployee) {
  console.log(
    `Employee details are:${Employee.empName}, ${Employee.empId}, ${Employee.empAge}, ${Employee.empCity}.`
  );
}

const setOfEmployee = new Set();

setOfEmployee.add(empRaj);
setOfEmployee.add(empRamesh);
setOfEmployee.add(empSuresh);
setOfEmployee.add(empDipak);
setOfEmployee.add(empParam);

for (const arrayOfEmployee of setOfEmployee) {
  console.log(arrayOfEmployee);
}
