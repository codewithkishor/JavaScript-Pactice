console.log(`=Perform shallow clone on arrayNums=`);
var arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(arrayNums);
const newArraynum = arrayNums;

newArraynum.push(55, 66);

console.log(newArraynum);

console.log(`Perform deep clone using spread operator`);
var arrayNums = [20, 3, 4, 56, 90, 400, 49];
const deepClone = [...arrayNums];
console.log(deepClone);

deepClone.push(10, 25);
console.log(deepClone);

console.log(`3. Given other array → arrayEven = [ 2, 30, 14, 8],`);
var arrayNums = [20, 3, 4, 56, 90, 400, 49];
var arrayEven = [2, 30, 14, 8];

const merge = arrayNums.concat(arrayEven);
const myMerge = [...arrayNums, ...arrayEven];

console.log(merge);
console.log(myMerge);

console.log(`Create the employee_info object as shown in snippet`);

const employeeInfo = {
  empId: 17,
  empName: "Sona De",
  salary: {
    june: "40K",
    july: "45K",
    aug: "50K",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokhali, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: [8698236000, 9420026833, 843475012],
};

let add = employeeInfo.address;
console.log(add);

console.log(
  `Mobile numbers are :${employeeInfo.mobiles[0]}, ${employeeInfo.mobiles[1]}`
);

let deepClo = JSON.parse(JSON.stringify(employeeInfo));

console.log(deepClo);

deepClo.salary.june = "80K";

console.log(deepClo);
