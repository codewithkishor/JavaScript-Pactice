const interestRate = 7.5; // we cant change its value, this is constant object/constant reference variable
const lama = {
  name: "MI",
  age: "20",
  surname: "Mumbai",
  company: "Museum",
  evaluation: "2000B $",
};
console.log(`====adding more properties===`);
lama.country = "INDIA";
lama.evaluation = "40000B $";
console.log(lama);

console.log(`====object freezing`); //this will freeze object and wont allow new property to add in object
console.log(lama);
