motorCycle = {
    made: "honda",
    year: "2019",
    kilometers: 20000,
    cost: function costCheck() {
      return this.kilometers / this.year;
    },
    buying: function buyingCheck() {
        return this.cost() > 10 ? true : false;
    },
  };
  
  console.log(motorCycle.buying());
  

  motorCycle = {
    made: "honda",
    year: "2019",
    kilometers: 20000,
    cost: () => {
      return kilometers / year;
    },
    buying: () => {
        return cost() > 10 ? true : false;
    },
  };
  
  console.log(motorCycle.buying());
  