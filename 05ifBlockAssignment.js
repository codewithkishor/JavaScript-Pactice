console.log(`============1.Even or odd using if block==================`);
var evenOrOdd = function (value) {
  if (value % 2 == 0) {
    console.log(`Given value ${value} is even.`);
  }

  if (value % 2 != 0) {
    console.log(`Given value ${value} is odd.`);
  }
};
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log(
  `============2.Check person is eligible for vote or not ==================`
);
var isEligibleForVote = function (age) {
  if (age >= 18) {
    console.log(`Your age is ${age} are eligible for vote`);
  }
  if (age < 18) {
    console.log(`Your age is ${age} are not eligible for vote`);
  }
};
isEligibleForVote(18);
isEligibleForVote(20);
isEligibleForVote(17);
isEligibleForVote(40);

console.log(
  `=============Check if string contains more than 10 character or not Ex → "JavaScript ES-6"==========`
);
var checkString = function name(str1) {
  var str1 = "JavaScript";

  if (str1.length >= 10) {
  }
  console.log(`Given string is of 10 character.`);
  if (str1.length < 10) {
  }
  console.log(`Given string is of fewer or more than 10 character.`);
};
checkString("JavaScript ES-6");

console.log(`===========3.if string start with java==============`);
var strStart = function (str2) {
  if (str2.startsWith("Java")) {
    console.log("The string starts with 'Java'.");
  }
};
strStart("JavaScript Language");

console.log(`============1.check if eligible for voting=============`);
var isEligibleForVoting = function (age1) {
  if (age1 <= 0 || age1 > 120) {
    console.log(`Data is invalid`);
  }
  if (age1 >= 18) {
    console.log(`Your age is ${age1} are eligible for vote`);
  }
  if (age1 < 18) {
    console.log(`Your age is ${age1} are not eligible for vote`);
  }
};
isEligibleForVoting(45);
isEligibleForVoting(8);
isEligibleForVoting(20);
isEligibleForVoting(-10);
isEligibleForVoting(200);
isEligibleForVoting(0);

console.log(`=================2.Grade Calculation===============`);

var gradeCalculation = function (marks) {
  if (marks <= 0 || marks > 100) {
    console.log(` Please provide the valid marks`);
    return;
  }
  if (marks >= 90) {
    console.log(`Fantastic marks : ${marks}, Your grade is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks ${marks}, your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks ${marks}, your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`Marks is ${marks}, your grade is C, Need improvement`);
  }
};
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(98);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty”");

console.log(
  `===========Design a grade system with gradeSystem(), Negative marks are not allowed==============`
);
var gradeSystem = function (score) {
  if (score <= 0 || score >= 100 || score === null || score === undefined) {
    console.log(`Invalid Input`);
    return;
  }
  if (score < 35) {
    console.log(`You are Failed`);
  }

  if (score >= 35 && score < 60) {
    console.log(`You Passed as ${score} and GRADE is ‘C’`);
  }
  if (score >= 60 && score < 75) {
    console.log(`You Passed as ${score} and GRADE is ‘B’`);
  }
  if (score >= 75 && score <= 90) {
    console.log(`You Passed as ${score} and GRADE is ‘A’`);
  }
  if (score >= 90 && score <= 100) {
    console.log(`You Passed as ${score} and GRADE is ‘A+’`);
  }
};
gradeSystem(66);
gradeSystem("fifty Five");
gradeSystem(undefined);
gradeSystem(13);
gradeSystem(35);
gradeSystem(-20);
gradeSystem(" ");
gradeSystem(75);
gradeSystem(55);
gradeSystem(98);
gradeSystem(null);
gradeSystem(82);
