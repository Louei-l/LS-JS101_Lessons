/**
 * Ask the user for the first number.
 * Ask the user for the second number.
 * Ask the user for the operation to perform
 * Perform operation on two numbers
 * Log the result
 */

const readline = require('readline-sync');
const text = require('./calculator_messages.json');
function promt(msg) {
  console.log(`=> ${msg}`);
}

promt(text.language);
let lang = readline.question().toUpperCase();
promt(text[lang].welcome);

let goAgain = true;
while (goAgain) {
  function isNotaNumber (num) {
    return num.trimStart() === '' || Number.isNaN(Number(num));
  }


  promt(text[lang].askFirstNumber);
  let firstNUmber = readline.question();

  while (isNotaNumber(firstNUmber)) {
    promt(text[lang].invalidNumber);
    firstNUmber = readline.question();
  }

  promt(text[lang].askSecondNumber);
  let secondNUmber = readline.question();

  while (isNotaNumber(secondNUmber)) {
    promt(text[lang].invalidNumber);
    secondNUmber = readline.question();
  }

  promt(text[lang].whatOperation);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    promt(text[lang].invalidOperation);
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

  promt(`${text[lang].result } ${output}`);
  promt(text[lang].repeat);
  let rawGoAgain = readline.question().toLowerCase();
  if (rawGoAgain === 'yes') goAgain = true;
  if (rawGoAgain === 'no')  {
    promt(text[lang].bye);
    goAgain = false;
  }
}