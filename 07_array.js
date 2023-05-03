let arrayOfNumber = [2, 5, 10, 6, 8, 9, 3, 0];
console.log(`Array is ${arrayOfNumber}`);
let totalEle = arrayOfNumber.length;
console.log(`Total number of elements in array ==> ${totalEle}`);
console.log(`Given arrays type is ${typeof arrayOfNumber}`);

console.log(`================Accessing Array elements=================`);
console.log(`Element at zero index is ${arrayOfNumber[0]}`);
console.log(`Element at two index is ${arrayOfNumber[2]}`);

console.log(`Element at last is ${totalEle - 1}`);

console.log(`====Update or modify value using index=====`);
arrayOfNumber[3] = 200;
console.log(`Modified Array is [${arrayOfNumber}]`);

console.log(`========= indexOf() Method================`);
let indexOfNum3 = arrayOfNumber.indexOf(3);
console.log(`index of element 3 is ${indexOfNum3}.`);

let indexOfNum0 = arrayOfNumber.indexOf(0);
console.log(`index of element 0 is ${indexOfNum0}.`);

console.log(`===============Traverse the array using for loop============`);

//initialization ====     , condition==   update===
for (let index = 0; index < arrayOfNumber.length; index++) {
  const element = arrayOfNumber[index];

  console.log(element);
}

console.log(`=============== Accessing only indexed even values============`);
for (let index = 0; index < arrayOfNumber.length; index++) {
  if (index % 2 == 0) {
    const element = arrayOfNumber[index];
    console.log(element);
  }
}

console.log(
  `===============Traverse the reverse array using for loop============`
);

//initialization ====     , condition==   update===
for (let index = arrayOfNumber.length - 1; index >= 0; index--) {
  const element = arrayOfNumber[index];

  console.log(element);
}

console.log(`===============Accessing salary of each employee=============`);
let arrayOfSalary = [50000, 40000, 70000, 90000, 85000, 75900];
let sumOfSal = 0;
for (let index = 0; index < arrayOfSalary.length; index++) {
  const element = arrayOfSalary[index];
  sumOfSal = sumOfSal + element;
}
console.log(`Total salary is of all the employees ${sumOfSal}.`);

console.log(
  `=============push() Method: adding element in last of the array===============`
);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1];
console.log(arrayOfNum);
arrayOfNum.push(5);
console.log(arrayOfNum);
arrayOfNum.push(10, 12, 22, 45); //Adding element in last
console.log(arrayOfNum);

console.log(
  `=============unshift() Method: adding element in start or beginning of the array===============`
);

console.log(arrayOfNum);
arrayOfNum.unshift(5);
console.log(arrayOfNum);
arrayOfNum.unshift(10, 12, 22, 45); //Adding element in beginning
console.log(arrayOfNum);

console.log(
  `=============pop() Method: remove element from last position of the array===============`
);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];

console.log(arrayOfNum.pop()); // removes element from last
console.log(arrayOfNum);
console.log(
  `=============shift() Method: remove element from 1st position of the array===============`
);

console.log(arrayOfNum.shift()); // removes element from start
console.log(arrayOfNum);

console.log(
  `=============slice() Method: take piece of array from selected index to last index element ===============`
);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
arrayOfNum.slice(3);
console.log(arrayOfNum.slice(3));
console.log(arrayOfNum.slice(3, 6)); // it will exclude last one

console.log(arrayOfNum);

console.log(`=============splice() Method:  ===============`);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
//remove elements
let spliceM = arrayOfNum.splice(3); //this will remove all element of index after 3
console.log(`After using splice method`);
console.log(`Array after deleted elements`, arrayOfNum);
console.log(`Total deleted elements`, spliceM);

var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
//remove elements
let spliceMeth = arrayOfNum.splice(2, 3); //this will remove element from index 2 of 3 elements
console.log(`After using splice(2, 3) method`);
console.log(`Array after deleted elements`, arrayOfNum);
console.log(`Total deleted elements`, spliceMeth);

console.log(
  `=============insert element using splice() Method:  ===============`
);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
//remove elements
let spliceInsert = arrayOfNum.splice(2, 0, 22); //this will insert element at index 2
console.log(`After using splice(2, 0, 22) method of inserting element`);
console.log(`Total inserted elements`, spliceInsert);
console.log(`Array after inserting elements at the index 2`, arrayOfNum);

//
arrayOfNum.splice(1, 0, 22, 20, 63, 69); // this will insert element at the index value 1
console.log(`Array after inserting elements from the index 1`, arrayOfNum);

console.log(
  `=============Replacing element using splice() Method:  ===============`
);

arrayOfNum.splice(3, 0, 226); // this will Replace 1 element at start at the index value 3 by 22
console.log(`Array after replacing elements from the index 3`, arrayOfNum);

// to replace 3 element with value 99,77 at starting index 2 we use splice(2,3, 99,77)
arrayOfNum.splice(2, 3, 99, 77);
console.log(
  `Array after replacing elements from the index 2 with 3 elements by 99, 77 `,
  arrayOfNum
);

console.log(`=============sorting an array in ascending order===============`);

var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
arrayOfNum.sort();
console.log(arrayOfNum);

console.log(`==========includes() method============`);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
arrayOfNum.includes(9);
console.log(arrayOfNum.includes(9));

console.log(`=====join() method 
1.join() methods returns an array as a string & does not change the original array
2. The default separator is a comma (,) separator, We can also specify any separator like |, ; etc======`);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
arrayOfNum.join("|");
console.log(arrayOfNum.join("|")); //2|3|4|8|9|7|6|1|33|45

console.log(`concat() method
This method is used for concatenation
1. This method concat two strings
2. This method can be used to concat or merge two arrays
`);

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(`================Resize an array===============`);
var arrayOfNum = [2, 3, 4, 8, 9, 7, 6, 1, 33, 45];
arrayOfNum.length = 8;
console.log((arrayOfNum.length = 4));
console.log(arrayOfNum);
