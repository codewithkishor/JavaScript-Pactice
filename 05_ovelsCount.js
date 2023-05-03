var sentence = "yes just do it man, I know you can";

// print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
    // char == "A" ||
    // char == "E" ||
    // char == "I" ||
    // char == "O" ||
    // char == "U"
  ) {
    console.log(charCopy);
    counter = counter + 1;
  }
}
console.log(`total vowels in the string is ${counter}`);

//string in reverse
// ini=sentence.lenght-1  condition=  index >=0  update = index--
var reverseString = " ";
var lastCharPos = sentence.length - 1;
for (let index = lastCharPos; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
}
console.log(reverseString);

// print 5 100times
var counter = 1;
while (counter <= 1000) {
  console.log(5);
  counter = counter + 1;
}
