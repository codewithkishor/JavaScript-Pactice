function display() {
  console.log(`Kishor Bargaje`);
}
display(); // Function call or function invocation

function show() {
  console.log(
    `My college Name Is Karmayogi Engineering College Shelve Pandharpur`
  );
}
show();

`Swap Value in Function`;

function swapValues(Value1, Value2) {
  console.log(`Before Swap values are `);
  console.log(Value1, Value2);
  var temp1 = Value1;
  Value1 = Value2;

  Value2 = temp1;
  console.log(`After Swap values are `);
  console.log(Value1, Value2);
}

swapValues(100, 200);
swapValues("Komal", "Kishor");
swapValues("Kishori", "Komal");

//FUNCTION WITH ARGUMENT AND WITH RETURN VALUE

function rajuBhaiya(paisa) {
  console.log("Going in market", paisa);
  console.log("Purchased fresh vegetables", paisa);
  console.log("Come Back");
  return "Bag of Vegetables";
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);
