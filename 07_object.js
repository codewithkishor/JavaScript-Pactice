const krishna = {
  qualities: 65,
  //   opulence: 6,
  //   lover: "Radha Rani",
  //   wives: 160108,
  age: 125,
  bestFriend: "Sudama",
  play: function () {
    console.log(`He play flute`);
  },
};
console.log(krishna);

console.log(`Accessing object property
 there are two methodbestFriends
 
 1.Using DOT(.) notation
 2.using bracket [" "] notation
 
 1.Using DOT(.) notation==>
 eg.`);
const krishnasAge = krishna.age;
console.log(krishnasAge);

console.log(`2.using bracket [" "] notation
eg.`);
const krishnasBestFriend = krishna["bestFriend"];

console.log(krishnasBestFriend);

console.log(`==Adding an property into an object===`);

krishna.place = "Vrindavan";
console.log(krishna);

console.log(`==Updating an property into an object===`);

krishna.place = "Golok Vrindavan";
console.log(krishna);

console.log(`==Deleting an property into an object===`);

delete krishna.place;
console.log(krishna);

console.log(`==Creating an empty object===`);

const mobile = {};
mobile.company = "Motorola";
mobile.camera = "50px";

console.log(mobile);

krishna.play = function () {
  console.log(`play with cowherd boys`);
};
console.log(krishna);

console.log(`==Accessing function from an object===`);
krishna.play(); //We can access function expression Using parenthesis()

console.log(`==Nested object===`);
const bhakt = {
  name: "Amogh Lila Prabu",
  age: 37,
  staying: "Delhi",
  spiritual: {
    chanting: 16,
    bg: 700,
    sb: 18000,
    qualification: function () {
      return this.bg + this.chanting + this.sb;
    },
  },
};
console.log(bhakt);
bhakt.spiritual.bg;
console.log(bhakt.spiritual.bg);

bhakt.spiritual.bg = 18;
console.log(bhakt.spiritual.bg);

bhakt.spiritual.qualification();
console.log(bhakt.spiritual.qualification());

console.log(`Object Entries`);
var lama = {
  name: "MI",
  age: "20",
  surname: "Mumbai",
};
console.log(`=============in operator=============`);
let isAvailable = "age" in lama; // all keys are available in string formate
if (isAvailable) {
  delete lama.age;
  console.log(`"age" property deleted successfully.`);
} else {
  console.log(`"age" property not deleted as it is available inside object.`);
}

// console.log(`${Object.entries(lama)}`);
// console.log(`${Object.keys(lama)}`);
// console.log(`${Object.values(lama)}`);

console.log(`==============for in loop==============`);
var lama = {
  name: "MI",
  age: "20",
  surname: "Mumbai",
  company: "Museum",
  evaluation: "2000B $",
};
for (const key in lama) {
  if (Object.hasOwnProperty.call(lama, key)) {
    const element = lama[key];
    console.log(key, element);
  }
}
