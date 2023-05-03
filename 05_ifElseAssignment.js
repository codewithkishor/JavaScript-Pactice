function greatestNumber(num1, num2, num3) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number"
  ) {
    if (num1 >= num2 && num1 >= num3) {
      console.log(`${num1} is valid`);
      console.log(`${num1} is greatest number`);
    } else if (num2 >= num3) {
      console.log(`${num2} is valid`);
      console.log(`${num2} is greatest number`);
      return;
    } else {
      console.log(`${num3} is valid`);
      console.log(`${num3} is greatest number`);

      return;
    }
  } else {
    console.log(`null`);
  }
}
greatestNumber(56, 70, 80);
greatestNumber(-90, -20, 0);

function findGreatestNumber(a, b, c) {
  // check if all inputs are valid numbers
  if (typeof a !== "number" || isNaN(a)) {
    a = Number.NEGATIVE_INFINITY; // set to smallest possible number
  }
  if (typeof b !== "number" || isNaN(b)) {
    b = Number.NEGATIVE_INFINITY; // set to smallest possible number
  }
  if (typeof c !== "number" || isNaN(c)) {
    c = Number.NEGATIVE_INFINITY; // set to smallest possible number
  }

  // compare the numbers and return the greatest
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findGreatestNumber(56, 70, 80)); // output: 80
console.log(findGreatestNumber(-20, -90, 0)); // output: 0
console.log(findGreatestNumber(5, "hello", [1, 2, 3])); // output: NaN (invalid input)

console.log(`=============Check is leap year or not ==============`);
const checkLeapYear = (leapyear) => {
  if (typeof leapyear !== "number" || isNaN(leapyear)) {
    console.log(`Invalid input: ${leapyear} should be a valid number`);
    return false;
  }

  if (leapyear % 4 === 0 && (leapyear % 100 !== 0 || leapyear % 400 === 0)) {
    console.log(`${leapyear} is a leap year`);
    return true;
  } else {
    console.log(`${leapyear} is not a leap year`);
    return false;
  }
};
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);

console.log(
  `===================marriage eligibility checker system=====================`
);
var marriageEligibilityCheck = function (gender, age) {
  if (gender === "Male" && age >= 21) {
    console.log(
      `Hey Congratulations, you are eligible for marriage! Your age is ${age}.`
    );
  } else if (gender === "Female" && age >= 18) {
    console.log(
      `Hey Congratulations, you are eligible for marriage! Your age is ${age}.`
    );
  } else if (gender === "Other" && age >= 18) {
    console.log(
      `Hey Congratulations, you are eligible for marriage! Your age is ${age}.`
    );
  } else {
    console.log(`Sorry, you are not eligible for marriage yet.`);
  }
};
marriageEligibilityCheck("Male", 17);
marriageEligibilityCheck("Male", 28);
marriageEligibilityCheck("Female", 28);
marriageEligibilityCheck("Female", 16);
marriageEligibilityCheck("Male", 25);
marriageEligibilityCheck("Other", 35);
marriageEligibilityCheck("Other", 41);
