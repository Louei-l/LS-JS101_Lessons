/**
 * Ask the user for the first number.
 * Ask the user for the second number.
 * Ask the user for the operation to perform
 * Perform operation on two numbers
 * Log the result
 */

const readline = require('readline-sync');
const text = require('./calculator_messages.json');
function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(text.language);
let lang = readline.question().toUpperCase().trim();

while (lang !== "EN" && lang !== "JP") {
  prompt(text.invalidLanguage);
  lang = readline.question().toUpperCase().trim();
}

prompt(text[lang].welcome);

function isNotaNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

let goAgain = true;
while (goAgain) {

  prompt(text[lang].askFirstNumber);
  let firstNumber = readline.question();

  while (isNotaNumber(firstNumber)) {
    prompt(text[lang].invalidNumber);
    firstNumber = readline.question();
  }

  prompt(text[lang].askSecondNumber);
  let secondNumber = readline.question();

  while (isNotaNumber(secondNumber)) {
    prompt(text[lang].invalidNumber);
    secondNumber = readline.question();
  }

  prompt(text[lang].whatOperation);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt(text[lang].invalidOperation);
    operator = readline.question();
  }

  let output;
  switch (operator) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  if ((output === Infinity || output === -Infinity)) {
    output = text[lang].infinity;
  }

  prompt(`${text[lang].result} ${output}`);
  prompt(text[lang].repeat);
  let rawGoAgain = readline.question().toLowerCase().trim();

  while (rawGoAgain === "") {
    prompt(text[lang].yesNO);
    rawGoAgain = readline.question().toLowerCase().trim();
  }

  goAgain = (rawGoAgain[0] === 'y');
  if (!goAgain) {
    prompt(text[lang].bye);
  }
}