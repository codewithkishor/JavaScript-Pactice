console.log(`===============1.1. Define a class for Vehicle which should contains.
========`);
class Vehicle {
  constructor(company, model, year, color, ABS) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.color = color;
    this.ABS = ABS;
  }
  details() {
    console.log(this.company, this.model, this.year, this.color, this.ABS);
  }
}
let marutiVehicle = new Vehicle("Maruti", 800, 2009, "Grey", "No");
marutiVehicle.details();

console.log(`======2. Define a class for College ========`);
class College {
  constructor(name, estYear, stream, branches, totalStudents) {
    this.name = name;
    this.estYear = estYear;
    this.stream = stream;
    this.branches = branches;
    this.totalStudents = totalStudents;
  }
  details() {
    console.log(
      this.name,
      this.estYear,
      this.stream,
      this.branches,
      this.totalStudents
    );
  }
}
let karmayogi = new College(
  "Karmayogi Eng College",
  2002,
  "IT",
  "Engineering",
  800
);

karmayogi.details();

console.log(`=====3. Write a function → traverseObject() with one arg====`);
function traverseObject(arg) {
  for (const key in arg) {
    const element = arg[key];
    console.log(`${key} ${element}`);
  }
}
traverseObject(karmayogi);
