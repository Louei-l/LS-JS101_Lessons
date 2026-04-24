//What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

// eslint-disable-next-line no-unused-vars
let newAnswer = messWithIt(answer);

console.log(answer - 8);

//ANS
// newAnswer value is not used.
// answer - 8 -> 42 - 8 => 34