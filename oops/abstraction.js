/* Hide the details and show the essentials

=> Simpler Interface
=> Reduce the complexity + Isolate impact of changes
=> Senstive info don't leak to outside

*/

function motorCycle() {
 let made = "honda";
 let year = "2019";


  this.kilometers = 20000;
  this.cost = function() {
    return kilometers / year;
  };
   this.buying = function() {
    this.cost() > 10000 ? true : false;
  };
}

const val = motorCycle();
val.cost
