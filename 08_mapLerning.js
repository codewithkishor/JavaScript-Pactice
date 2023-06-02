const mapOfNum = new Map(); //Creating an Map
mapOfNum.set(11, "Eleven"); //Adding Element in key and value pair
mapOfNum.set(2, "Two");
mapOfNum.set(5, "Five");
mapOfNum.set(6, "Six");
mapOfNum.set(1, "Eleven");
console.log(mapOfNum); //map

console.log(mapOfNum.get(11)); // Get value by key

console.log(mapOfNum.size); // Get size of Map

console.log(mapOfNum.delete(11)); // delete element

console.log(mapOfNum);

//Check whether Given Key is available or not
const keyIsAvailable = mapOfNum.has(2);
console.log(keyIsAvailable);

console.log(`============Traversing over Map============`);
const keys = mapOfNum.keys();
console.log(keys);
for (const key of keys) {
  console.log(key, mapOfNum.get(key));
}
