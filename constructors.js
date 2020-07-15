/* 
=> Another way to create an object is using constructor
=> First letter while creating function must be Capital letter
=> Every object in js contains constructor
 */


 // constructor function
function Multiply(val1, val2) {
    this.number = val1;
    this.logicVal = function() {
     return val1 * val2;
    }
}

const multipCheck = new Multiply(8, 5);

Multiply.call({}, 1);


console.log(JSON.stringify(multipCheck)); 
console.log(multipCheck.logicVal()); 


// creating function using constructor

const MultiplyTwo = new Function('val1, val2', `
           this.number = val1;
           this.logicVal = function() {
           return val1 * val2;
              }` 
        );


        const multipCheck2 = new MultiplyTwo(8, 5);

console.log(JSON.stringify(multipCheck2)); 
console.log(multipCheck2.logicVal()); 


 // constructor property

