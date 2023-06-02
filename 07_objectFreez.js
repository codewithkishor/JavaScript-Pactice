const anil = {
  name: "Anil",
  age: 28,
  company: "Microsoft",
};
//we cant add or assign any value to the given reference object normally but by using method we can modify given object

anil.country = "India";
anil.age = 22;
delete anil.company; // if we want to delete property from object
console.log(anil);
//if we don't want to delete, update or change the property then we can use freeze method
Object.freeze(anil); //object freezing

//Array freezing
const arrayNumber = [2, 4, 5, 8];
arrayNumber.push(10);
Object.freeze(arrayNumber); //this will freeze given array

//merging two object

const ram = {
  name: "Ram",
  wife: "Sita",
};

const ramAddress = {
  address: "Ayodhya",
};

Object.assign(ram, ramAddress);
console.log(ram);
