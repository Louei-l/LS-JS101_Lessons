/** CASUAL Pseudo code
 * loa calculator
 *
 * Input: Loan duration years & months
 * Input: Loan Amount
 * Input: Annual percentage rate (APR)
 *
 * Output: Monthly loan payment
 *
 * Key factor: interest is compounded monthly
 *
 * Aks user for the required inputs and be explicit when
 * requesting years and months.
 * Check if user enters 4% 0.04 or 4 and convert it to an integer.
 * dont use Mp formula if there is no interest rate.
 * Convert years into months and add months if the user entered any amount.
 * Clean up the years and months entry if required.
 * Clean up Loan amount input i.e. 12.00 or 12,00
 * Convert APR into monthly rate (APR/12)
 * use formula to calculate monthly payment:
 * Mp = Amount * ((APR/12) / (1 - Math.pow((1 + (APR/12)), (-duration months)));
 */


const readline = require('readline-sync');
const text = require('./loan_messages.json');

function getLanguage() {
  prompt(text.language);
  let lang = readline.question().toUpperCase().trim();

  while (lang !== "EN" && lang !== "JP") {
    prompt(text.invalidLanguage);
    lang = readline.question().toUpperCase().trim();
  }
  return lang;
}


let lang = getLanguage();
prompt(text[lang].welcome);

let goAgain = true;
while (goAgain) {

  let loanAmount = getLoanAmount();
  let duration = getLoanDuration();
  let APR = getAPR();


  let correct = false;
  while (!correct) {
    correct = isCorrect(loanAmount, duration, APR);

    if (!correct) {
      prompt(text[lang].modifyEntry);
      let modify = readline.question();

      while (!['1', '2', '3'].includes(modify)) {
        prompt(text[lang].oneTwoThree);
        modify = readline.question();
      }
      switch (modify) {
        case '1':
          loanAmount = getLoanAmount();
          break;
        case '2':
          duration = getLoanDuration();
          break;
        case '3':
          APR = getAPR();
          break;
      }
    }
  }

  let monthlyPayment;
  const loanDuartion = duration.totalMonths;
  if (APR === 0) {
    monthlyPayment = loanAmount / loanDuartion;
  } else {
    const monthlyAPR = APR / 12;
    monthlyPayment = loanAmount * ((monthlyAPR / 100) /
      (1 - Math.pow((1 + (monthlyAPR / 100)), (-loanDuartion))));
  }

  console.log(`The monthly payment is: ${monthlyPayment.toFixed(2)}`);

  prompt(text[lang].anotherCalculation);
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

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getConfirmation() {
  let input = readline.question().toLowerCase().trim();

  while (!['yes', 'no', 'n', 'y'].includes(input)) { // checking for wrong input or typoes
    prompt(text[lang].yesNO);
    input = readline.question().toLowerCase().trim();
  }

  return input;
}

function getLoanDuration() {
  prompt(text[lang].askLoanDuration);
  prompt(text[lang].loanDurationExample);

  while (true) {

    let rawInput = getValidatedInput();
    let years = Number(rawInput.split('-')[0]);
    let months = Number(rawInput.split('-')[1]);

    prompt(`Loan duration is ${years} years and ${months} months, confirm with [Yes/No]`);
    let confirmation = getConfirmation();

    if (confirmation[0] === 'y') {
      let totalMonths = (years * 12) + months;
      return { totalMonths, years, months };
    }

    prompt(text[lang].tryAgain);
  }
}

function getValidatedInput() {
  let rawInput = readline.question().trim();

  while (rawInput.split('-').length !== 2 // checking implicitly if user used a hyphen while also validating the correctness of format
    || isNaN(Number(rawInput.split('-')[0])) // checking if first digit (year) is not a number
    || isNaN(Number(rawInput.split('-')[1])) // checking if second digit (month) is not a number
    || Number(rawInput.split('-')[0]) < 0 // checking if first digit (year) is a negative number
    || Number(rawInput.split('-')[1]) < 0 // checking if second digit (month) is a negative number
    || Number(rawInput.split('-')[1]) > 11 // checking if second digit (month) is above 11
    || (Number(rawInput.split('-')[0]) === 0 && Number(rawInput.split('-')[1]) === 0)) { // checking if the year and month are both 0
    prompt(text[lang].invalidEntry);
    rawInput = readline.question().trim();
  }

  return rawInput;
}


function getLoanAmount() {
  while (true) {
    prompt(text[lang].askLoanAmount);
    let rawLoanAmount = parseFloat(readline.question().replace(/[^\d.]/g, '')); //remove everything that is NOT digit or decimal point. Return number
    if (rawLoanAmount <= 0 || isNaN(rawLoanAmount)) {
      prompt(text[lang].invalidNumber);
      continue; //jump back to the start of while loop
    }
    return rawLoanAmount;
  }
}

function getAPR() {
  while (true) {
    prompt(text[lang].askAPR);
    let rawAPR = parseFloat(readline.question()); //removes % sign at the end. Return number
    if (rawAPR >= 0 && !isNaN(rawAPR)) {
      return rawAPR;
    }
    prompt(text[lang].invalidAPR);
  }
}

function isCorrect(amount, dur, rate) {
  prompt(`Is the information provided correct ? [Yes / No]\n Loan Amount is: ${amount} \n the Duration is: ${dur.years} years and ${dur.months} months \n Annual Interest Rate is: ${rate}%`);
  let reply = getConfirmation();
  return reply[0] === 'y'; // returns boolean true
}