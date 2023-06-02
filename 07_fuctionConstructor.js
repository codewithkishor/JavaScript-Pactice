function Student(name, age, rollNo, graduation) {
  this.name = name;
  this.age = age;
  this.rollNo = rollNo;
  this.graduation = graduation;
}
Student.prototype.country = "INDIA"; // This is the coman property which is added for all object
let s1 = new Student("Raj", 20, 111, "B.Tech");
let s2 = new Student("Ram", 22, 121, "B.Sc");
console.log(s2);
console.log(s1.country);
