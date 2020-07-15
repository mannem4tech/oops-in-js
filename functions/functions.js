function motorCycle(arg1) {
    let made = "honda";
    let year = "2019";
    let kilometers = arg1;
    let cost = function costCheck() {
      return kilometers / year;
    };
    let buying = function buyingCheck() {
      return cost() > 10000 ? true : false;
    };
    return `${cost()} and ${buying()}`;
  }
  
  let newVal = motorCycle(399999);
  console.log(newVal);


// returns object
function motorCycle2(arg1) {
  return {
  made: "honda",
   year : "2019",
   kilometers: arg1,
   cost: function() {
    return this.kilometers / this.year;
  },
   buying: function() {
    return this.cost() > 10000 ? true : false;
  }
}
}
let newVal = motorCycle2(399999).buying();
let newVal2 = motorCycle2(399999).cost();
console.log(newVal);