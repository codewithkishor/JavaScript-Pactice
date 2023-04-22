var stringTemplate = function () {
  //1 Q
  var myDreamCompony = "Google";
  console.log("My Dream company is", myDreamCompony);

  //Q2
  var myHobby1 = "Reading Novels";
  var myHobby2 = "Coding";
  var myHobby3 = "Content Creation";
  console.log(`My hobbies are ${myHobby1}, ${myHobby2}, and ${myHobby3}.`);
  console.log(`The concated hobbies are`, myHobby1.concat(myHobby2, myHobby3));
};
stringTemplate();

console.log(`======================================`);

var stringHandsOn = function () {
  var hands = "   Hey you are doing good,keep it up   ";
  console.log(`Given string is "${hands}"`);

  //length of string
  console.log(`Length of given string is ${hands.length}.`);

  //Remove the leading and trailing extra spaces
  console.log(
    `The string after Removal of the leading and trailing extra spaces is -"${hands.trim()}".`
  );

  var trimStr = hands.trim();

  //1st and last character after trim

  console.log(
    `1st character is "${trimStr.charAt(
      0
    )}" and last character is "${trimStr.charAt(32)}" after trim`
  );

  console.log(`Total length after trim is ${trimStr.length}`);

  console.log(
    `Word index of word 'good' from given string is ${trimStr.indexOf("good")}`
  );

  console.log(
    `The string starting from index 22 is  ${trimStr.substring(
      22
    )} and sliced it as "${trimStr.slice(23, 33)}"`
  );
};
stringHandsOn();

console.log(8 % 2 == 0);

console.log(`===============Assignment ===============`);

var squareOfWordLength = function (comp) {
  console.log(`Company name is ${comp}`);
  console.log(
    `Total length for the word ${comp} is ${
      comp.length
    }  and its word lenght square is ${comp.length * comp.length} .`
  );
};
squareOfWordLength("JavaScript");
squareOfWordLength("Google");
squareOfWordLength("Developer");

var sentence = function () {
  var str1 = "I am Angular Developer";
  console.log(
    `The given string is: ${str1}, it total lenght is ${
      str1.length
    }, its value when we divide by the available words is ${
      str1.length / 4
    } and its value when we multiply by the available words is ${
      str1.length * 4
    } `
  );
};
sentence();
