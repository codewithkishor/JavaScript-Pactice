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
isEvenOrOdd(0);
isEvenOrOdd("70");
