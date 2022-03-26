const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER WINS';
const COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER}, OR ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid selection. You get ${ROCK}`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue >= 0.34 && randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const determineWinner = (pChoice, cChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER) {
    return PLAYER_WINS;
  } else if (cChoice === ROCK && pChoice === SCISSORS) {
    return COMPUTER_WINS;
  } else if (cChoice === PAPER && pChoice === SCISSORS) {
    return PLAYER_WINS;
  } else if (cChoice === PAPER && pChoice === ROCK) {
    return COMPUTER_WINS;
  } else if (cChoice === SCISSORS && pChoice === ROCK) {
    return PLAYER_WINS;
  } else if (cChoice === SCISSORS && pChoice === PAPER) {
    return COMPUTER_WINS;
  } else {
    COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('starting....');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = determineWinner(computerChoice, playerSelection);
  } else {
    winner = determineWinner(computerChoice);
  }

  console.log('Player throws ' + playerSelection);
  console.log('Computer throws ' + computerChoice);
  console.log(winner);
  let message;
  const msgStart = `You threw ${
    playerSelection ? playerSelection : DEFAULT_USER_CHOICE
  } and the computer threw ${computerChoice}. `;
  if (winner === RESULT_DRAW) {
    message = msgStart + "It's a draw";
  } else if (winner === PLAYER_WINS) {
    message = msgStart + 'You win!';
  } else if (winner === COMPUTER_WINS) {
    message = msgStart + 'The computer wins.';
  }
  alert(message);
  gameIsRunning = false;
});

// function as declaration. auto hoisted to top of file. can be called anywhere

// function startGame() {
//   console.log('starting....');
// }

// startGameBtn.addEventListener('click', startGame);

// function as expression. 'Anonymous function'. not hoisted and cant't be accessed after it's initial creation, unless stored in a variable, as this one is. Often used with event listeners or passing as arguments into another function

// const start = function () {
//   console.log('starting...');
// };

// can use anonymous function here because this is the only time I'm using this function
// startGameBtn.addEventListener('click', function () {
//   console.log('starting....')
// });

// adding a name to the above could help with locating a thrown error
