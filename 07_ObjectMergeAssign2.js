const car = {
  name: "Creta",
  company: "Hundai",
};

const carEngine = {
  power: "1500CC",
  boost: "115BHP",
};
console.log(`merge or concat these two objects using
1. Object.assign()`);
const objAssign = Object.assign(car, carEngine);
console.log(objAssign);

console.log(`merge or concat these two objects using
2. Spread operator …`);
const spreadOper = { ...car, ...carEngine };
console.log(spreadOper);
