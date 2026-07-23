// Can you identify all of the variables,
// primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/**
 * variables: boo, scare, myBoo, halloweenCollection, myBoo
 * prim. values: "Happy Halloween", "Boo", "May all your pumpkins be glowing",
 *               "greet", "HAPPY HALLOWEEN!!!"
 * objects: boo, toUpperCase, console, log, halloweenCollection
 *
 * MISSED some primitive values
 * object keys -> greet, scare, wish
 * !!!
 * HAPPY HALLOWEEN -> result of toUpperCase()
 * "HAPPY HALLOWEEN!!!" // value passed to console.log
 * "Happy Halloween" // value passed to boo
 * undefined return value of boo()
 */