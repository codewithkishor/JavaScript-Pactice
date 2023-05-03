const fruitsSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let firstEle = fruitsSeasonal[0];
let lastEle = fruitsSeasonal[4];
console.log(
  `1. 1st element in given array is "${firstEle}" and last element is "${lastEle}"`
);
console.log(`2. Adding "Papaya" element before "Banana"`);

fruitsSeasonal.unshift("Papaya");
console.log(fruitsSeasonal);

console.log(`3. Remove mango from array`);
console.log(fruitsSeasonal.splice(4, 1));
console.log(fruitsSeasonal);

console.log(`4.Add "Pineapple" to the last`);
console.log(fruitsSeasonal.push("Pineapple"));
console.log(fruitsSeasonal);

console.log(`5.inserting "Dragon Fruit" before "Water Melon"`);

fruitsSeasonal.splice(4, 0, "Dragon Fruit");
console.log(fruitsSeasonal);

console.log(`6. Replacing an element 'Orange' with 'Kiwi'`);
fruitsSeasonal.splice(2, 1, "Kiwi");
console.log(fruitsSeasonal);

console.log(`7. Log the elements starting from index 1 to 4`);
fruitsSeasonal.slice(1, 5);
console.log(fruitsSeasonal.slice(1, 5));

console.log(
  `8. Only select last 3 element and log on console: Use the length property`
);
fruitsSeasonal.slice(-3);
console.log(fruitsSeasonal.slice(-3));
