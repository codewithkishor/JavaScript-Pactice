var isRoadBlocked = false;

if (isRoadBlocked) {
  console.log(`Short way to go Mumbai`); // when statement is true them print if side
  console.log(`Minimum Time Required`);
} else {
  console.log(`long way to go Mumbai`);
  console.log(`Maximum Time Required`); // when statement is false them print else side
}

function isEvenOrOdd(num) {
  if (typeof num == "number") {
    console.log(`Valid ${num}`);
    if (num % 2 === 0) {
      console.log(`Number is "Even"`);
    } else {
      console.log(`Number is "Odd"`);
    }
  } else {
    console.log(`Invalid number ${num}`);
  }
}
isEvenOrOdd(2);
isEvenOrOdd(45);
isEvenOrOdd(13);
isEvenOrOdd(88);
isEvenOrOdd(0);
isEvenOrOdd("70");
isEvenOrOdd("Ten");

var voteEligibility = function (age) {};
voteEligibility(23);
