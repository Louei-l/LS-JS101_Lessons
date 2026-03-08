const readline = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function result (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "It's a draw.";

  switch (humanChoice) {
    case 'rock':
      return computerChoice === 'scissors' ? 'You win' : 'You lose.';
    case 'scissors':
      return computerChoice === 'paper' ? 'You win' : 'You lose.';
    case 'paper':
      return computerChoice === 'rock' ? 'You win' : 'You lose.';
    default:
      return 'Invalid Choice.';
  }
}

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let goAgain = true;

while (goAgain) {
  prompt(`Please choose either ${VALID_CHOICES.join(', ')}`);
  let humanChoice = readline.question().toLowerCase().trim();

  while (!VALID_CHOICES.includes(humanChoice)) {
    prompt('Invalid choice, enter again');
    humanChoice = readline.question().toLowerCase().trim();
  }

  prompt(`You chose ${humanChoice}.`);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  prompt(`Computer chose ${computerChoice}.`);


  prompt(result(humanChoice, computerChoice));

  prompt('Do you want to play again? enter Yes or No.');
  let answer = readline.question().toLowerCase().trim();

  while (!answer.startsWith('y') && !answer.startsWith('n')) {
    prompt('Invalid choice, enter again');
    answer = readline.question().toLowerCase().trim();
  }

  goAgain = (answer.startsWith('y'));
}