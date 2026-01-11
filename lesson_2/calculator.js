/**
 * Ask the user for the first number.
 * Ask the user for the second number.
 * Ask the user for the operation to perform
 * Perform operation on two numbers
 * Log the result
 */

const readline = require('readline-sync');
function promt(msg) {
  console.log(`=> ${msg}`);
}

function isNotaNumber (num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

promt('Welcome to the calculator');
promt('Pleaser enter first number');
let firstNUmber = readline.question();

while (isNotaNumber(firstNUmber)) {
  promt('This does not look like a number, please enter a valid number.');
  firstNUmber = readline.question();
}

promt('Pleaser enter second number: ');
let secondNUmber = readline.question();

while (isNotaNumber(secondNUmber)) {
  promt('This does not look like a number, please enter a valid number.');
  secondNUmber = readline.question();
}

promt('What operation you wish to perform on the two numbers?\n Enter (1) to Add,  (2) to Subtract,  (3) to Multiply, or (4) to Divide');
let operator = readline.question();

while (!['1', '2', '3', '4'].includes(operator)) {
  promt('Pick either 1, 2, 3, or 4 perform an operation.');
  operator = readline.question();
}

let output;
switch (operator) {
  case '1':
    output = Number(firstNUmber) + Number(secondNUmber);
    break;
  case '2':
    output = Number(firstNUmber) - Number(secondNUmber);
    break;
  case '3':
    output = Number(firstNUmber) * Number(secondNUmber);
    break;
  case '4':
    output = Number(firstNUmber) / Number(secondNUmber);
    break;
}

promt(`The result is ${output}`);