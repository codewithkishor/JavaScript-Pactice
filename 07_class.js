class Employee {
  // class with defination and name as Employee object
  constructor(name, age, id, city) {
    // We use constructor in order to initialize the object
    this.name = name; // this is the keyword will point the current object
    this.age = age;
    this.id = id;
    this.city = city;
  }
  details() {
    console.log(this.name, this.age, this.id, this.city);
  }
}
let empRaj = new Employee("Raj", 33, 2001, "Pune"); // we use new keyord in order to create new object
let empRahul = new Employee("Rahul", 35, 2002, "Pune");

//To access the details() method
empRahul.details();
empRaj.details();
