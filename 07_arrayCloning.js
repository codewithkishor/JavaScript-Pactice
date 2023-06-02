//Shallow cloning

let myArray = [0, 2, 4, 6];
let yourArray = [1, 3, 5, 7];
myArray[1] = 10;
console.log(myArray);

//deep cloning
let myArray = [0, 2, 4, 6];
let ourArray = [...myArray];
ourArray[2] = 200;
console.log(myArray);

//Merge using spread operator
let myArray = [0, 2, 4, 6];
let yoursArray = [1, 3, 5, 7];
let spOperator = [...myArray, ...yourArray];
console.log(spOperator);

//Array concat
let concatArray = myArray.concat(yoursArray);
console.log(concatArray);
