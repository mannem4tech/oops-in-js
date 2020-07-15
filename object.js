/*
JS is all about objects

________________________________________________________________________________________
                  Objects Literals 

 => {} these open and close braces are object literals
 => object contains key and value pairs
 => using . notation we access the members from the object
 => If an object contains more than one method we called it as object has behavior
 => 
________________________________________________________________________________________

if we declare let x = {}; 
  => Internally js engine will transable to let x = new Object();

________________________________________________________________________________________
constructor       literals

new Object(); -->  {} 
new string;   -->  ' ', " ", ` `
new Boolean();  ---> true, false
new Number(); -----> 1, 2, 100

________________________________________________________________________________________
*/

// Example: sample object
const person = {
  name: "hari", //property
  dobYear: 1992, //property: used to hold a value
  nonVeg: true, //property
  address: {
    present: "usa",
    past: "india",
  },
  age: function () {
    // used to hold a function
    const todayDate = new Date();
    const age = todayDate.getFullYear() - this.dobYear;
    return console.log(age);
  },
};

person.age();

// Example: Adding more properties
person.newJoining = "no";
person.studies = { depart: "ECE", MS: true };
person["job-it-depart"] = { depart: "QA" };

// Example: Deleting more properties
delete person.newJoining;
delete person["job-it-depart"];

//Enumerating Properties
for (let keyVal in person) {
  console.log(keyVal); // key's
  console.log(person[keyVal]); // value's
}

const keys = Object.keys(person);
console.log(keys);

if('newJoining' in person) {
    console.log('Present');
} else {
    console.log('Not Present');
}