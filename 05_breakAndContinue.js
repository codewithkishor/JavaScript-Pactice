//iteration mean repetition of cycle or code execution.

// break when we use while loop statement
var i = 0;
while (i <= 10) {
  console.log(i);
  if (i == 5) {
    //this will break at number 5
    break;
  }
  i++;
}

// break statement when we use for loop statement
for (let i = 0; i <= 10; i++) {
  console.log(i);

  if (i == 5) {
    break;
  }
}

// continue

// var i = 0;
// while (i <= 10) {
//   console.log(i);

//   if (i == 5) {
//     //this will continue at number 5 from 0 to 5 an infinite loop.
//     continue; // this will skip code below
//   }
//   i++; // this will not execute to over come this we write below while
// }

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;

  if (i == 5) {
    //this will continue at number 5 from 0 to 5 an infinite loop.
    continue; // this will skip code below
  }
}

//
for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue; // this will skip 3 as its condition will fulfill
  }
  console.log(i);
}
