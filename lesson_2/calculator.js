/**
 * Ask the user for the first number.
 * Ask the user for the second number. 
 * Ask the user for the operation to perform
 * Perform operation on two numbers
 * Log the result
 */

console.log('Welcome to the Calculator!');

const readline = require('readline-sync');
const firstNUmber = Number(readline.question('Pleaser enter first number: '));
const secondNUmber = Number(readline.question('Pleaser enter second number: '));
const operator = readline.question('What operation you wish to perform on the two numbers?\n1) Add 2) Subtract 3) Multiply 4) Divide  ');
if (operator === '1') {
  output = firstNUmber + secondNUmber;
}

if (operator === '2') {
  output = firstNUmber - secondNUmber;
}

if (operator === '3') {
  output = firstNUmber * secondNUmber;
}

if (operator === '4') {
  output = firstNUmber / secondNUmber;
}

console.log(`the result is ${output}`);