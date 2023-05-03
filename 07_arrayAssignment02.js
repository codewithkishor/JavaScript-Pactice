const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(
  `1.Given Array is [${arrayNumbers}] and its length is ${arrayNumbers.length}`
);

let firstEle = arrayNumbers[0];
let lastEle = arrayNumbers[10];
console.log(
  `2. 1st element in given array is "${firstEle}" and last element is "${lastEle}"`
);

console.log(
  `3. Log the thirst last element using length property and log on console`
);
console.log(arrayNumbers[arrayNumbers.length - 3]); // Output: 9
