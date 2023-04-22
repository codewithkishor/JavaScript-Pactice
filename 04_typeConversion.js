//implicit conversion to string
var res = "3" + 2;
console.log(res);

//Implicit boolean conversion to Number
var res = "3" + false;
console.log(res);

//Implicit string conversion to Number
var res = "4" - "2";
console.log(res);

//Undefined used with number, boolean or null given NaN
var res = 4 + undefined;
console.log(res);

//Explicit conversion: Convert number strings and boolean values to numbers,In that case we can use Number();
