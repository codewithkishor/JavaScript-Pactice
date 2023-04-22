//greatest number among two numbers
var greatestNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`The greatest value is ${result}`);
};
greatestNumber(10, -10);
greatestNumber(800, 899);

//Given Number is even or odd
var isEvenOrOdd = function (value) {
  var result = value % 2 == 0 ? "TRUE" : "FALSE";
  console.log(`The ${value} is ${result}.`);
};
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

// Check which word has even or odd length
var isEvenOrOddLength = function (value) {
  var len = value.length;
  var result = len % 2 == 0 ? "EVEN" : "ODD";
  console.log(`The given ${value} is ${result}.`);
};
isEvenOrOddLength("JavaScript");
isEvenOrOddLength("Developer");
isEvenOrOddLength("Google");

//TCS Interview eligibility check

var interviewEligibility = function (
  gradScore,
  hscScore,
  sscScore,
  CandidateName
) {
  var result =
    gradScore > 70 || hscScore >= 80 || sscScore > 90
      ? `Congrats ${CandidateName} you are eligible for TCS interview.`
      : `Unfortunately you
are not eligible for interview`;
  console.log(result);
};
interviewEligibility(80, 86, 90, "Kishor");
interviewEligibility(70, 65, 55, "Ramesh");
interviewEligibility(60, 79, 88, "Shiva");

//Marriage age eligibility for Male and for female.
var maleMarriageEligibility = function (gender, age, boyName) {
  var eligibilityCheck =
    (gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)
      ? `Hey ${boyName} you are ${gender} and your age is ${age}so you are eligible for Marriage.`
      : `Sorry, you are not eligible for Marriage.`;
  console.log(eligibilityCheck);
};
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 18, "Stew Jobs");
maleMarriageEligibility("Female", 15, "Jenifer");
maleMarriageEligibility("Female", 27, "Malinda Gates");
