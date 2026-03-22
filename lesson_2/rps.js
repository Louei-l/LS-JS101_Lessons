const readline = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg}`);
}
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let goAgain = true;

const rules = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
};

function result(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "It's a draw!";
  return rules[humanChoice].includes(computerChoice)
    ? 'Player Wins!'
    : 'Computer Wins!';
}

function choiceValidator(humanChoiceRaw) {
  let workingVar = humanChoiceRaw;
  if (workingVar === 's') {
    prompt('do you mean <spock> or <scissors> ? You can enter <sp> or <sc>');
    workingVar = readline.question().toLowerCase().trim();

    while (!workingVar.startsWith('sp') && !workingVar.startsWith('sc')) {
      prompt('Invalid entry, try again');
      workingVar = readline.question().toLowerCase().trim();
    }
  }

  let validChoice = VALID_CHOICES.find((x) => x.startsWith(workingVar));
  while (!validChoice) {
    prompt('Invalid choice, enter again');
    workingVar = readline.question().toLowerCase().trim();
    validChoice = VALID_CHOICES.find((x) => x.startsWith(workingVar));
  }

  return validChoice;
}

function assignPoint(outcome) {
  if (outcome === 'Player Wins!') {
    humanScore += 1;
  } else if (outcome === 'Computer Wins!') {
    computerScore += 1;
  }
}

function matchWinner() {
  if (humanScore === 3) {
    prompt('Congratulations you won the match!');
  } else {
    prompt('Hard luck, you lost the match...');
  }
}

function playAgain() {
  prompt('Do you want to play again? enter Yes or No.');
  let answer = readline.question().toLowerCase().trim();

  while (!answer.startsWith('y') && !answer.startsWith('n')) {
    prompt('Invalid choice, enter again');
    answer = readline.question().toLowerCase().trim();
  }

  goAgain = (answer.startsWith('y'));
  if (goAgain) {
    humanScore = 0;
    computerScore = 0;
    console.clear();
  }
}


while (goAgain) {
  while (humanScore < 3 && computerScore < 3) {

    prompt(`
    Player score: ${humanScore} 
    Computer score ${computerScore}
    `);
    prompt(`Choose your move: ${VALID_CHOICES.join(', ')}`);
    let humanChoiceRaw = readline.question().toLowerCase().trim();
    humanChoice = choiceValidator(humanChoiceRaw);

    prompt(`You chose ${humanChoice}.`);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];
    prompt(`Computer chose ${computerChoice}.`);


    let outcome = result(humanChoice, computerChoice);
    prompt(outcome);

    assignPoint(outcome);
  }

  matchWinner();
  playAgain();

}