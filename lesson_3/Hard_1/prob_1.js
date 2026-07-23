//Will the following functions return the same results?

/*
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
*/

//ANS
// no they will return not same results, in second function
// return will be executed thus returning undefined.