/*
________________________________________________________________________________________
value Types: || primitive data types
      
               --> Independent of each other
               --> primitives are copied by their value
=> Number
=> String
=> Boolean
=> Symbol
=> undefined
=> null

________________________________________________________________________________________

Reference Types:

           --> Store value somewhere in memory
           --> Objects are copied by their reference
=> Object
=> Function
=> Array

________________________________________________________________________________________
*/

// Example: 1
let x = 10; // primitive data types
let y = x;
x = 20;
console.log(x); // 20
console.log(y);  // 10


let x = { value: 10}; // Reference data types
let y = x;
x.value = 20;
console.log(x); // {value: 20}
console.log(y); // {value: 20}



// Example: 2

let number1 = 10;
function increase(number1) {
    number1++;
}

increase(number1);
console.log(number1); // 10



let obj = {value:10};
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // 11


