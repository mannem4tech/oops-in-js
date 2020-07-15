// Factory Function
function adding(val1, val2) {
    return {
        val1: val1,
        val2,
          add: () => { 
            return val1 + val2;
       } 
    }
  };

  const addCheckOne = adding(4, 5);
  const addCheckTwo = adding(14, 5);
  console.log(addCheckOne);
  console.log(addCheckOne.val1);
  console.log(addCheckOne.add());
  console.log(addCheckTwo);
  console.log(addCheckTwo.add());
  