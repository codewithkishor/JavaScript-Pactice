console.log(
  `==========Assignment 0A: Object, Array Freeze and merge ============`
);
console.log(`====Create an object using literals namely→ personalDetails with your actual detail.
======`);
const personalDetails = {
  name: "Kishor",
  surname: "Bargaje",
  education: "B.Tech",
  address: "Pune",
};

const collegeDetails = {
  collegeName: "Karmayogi Institute of Technology",
  location: "Shelve, Pandharpur",
  estYear: "2002",
};
//merge both
Object.assign(personalDetails, collegeDetails);
console.log(personalDetails);

let friendsArray = ["Ram, 23"];
Object.freeze(friendsArray);
console.log(friendsArray);
for (const iterator of object) {
    
}
