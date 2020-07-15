let motorCycle = function() {
    let made = "honda";
    let year = "2019";
   
     this.kilometers = 20000;
     this.cost = function() {
       return this.kilometers /year;
     };
      this.buying = function() {
        return this.cost() > 10000 ? true : false;
     };

     Object.defineProperty(this, 'made', {
         get: function() {
             return made;
         },
         set: function(value) {
             console.log(typeof(value));
             if(typeof(value) !== 'string')
             throw new Error('Invalid type');
             made = value;
         }
     })

   }
   
   const val  = new motorCycle();
   val.made = 'BMW';

   console.log(val);