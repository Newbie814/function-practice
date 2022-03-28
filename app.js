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

//  Not for game. rest parameter is for functions that take in a variable number of arguments.

// const sumUp = (numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// reminder that return allows me to access variable sum outside of function

// console.log(sumUp([1, 5, 10, -3, 6, 10]));

// const sumUp = (...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(sumUp(1, 5, 10, -3, 6, 10));

// be mindful, in the first example, the function is called with the arguments, and the second is called with the rest parameter. You have to soecify array in console log of the first example. The second example is called with the rest parameter, which "coerces" the arguments into an array. You saw this more clearly in the debugger in devtools.

// can only be one rest parameter per function..
// has to be the last parameter

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else if (operation === 'SUBTRACT') {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     // don't use that
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (msgText, result) => {
  alert(msgText + '' + result);
};

combine(
  showResult.bind(this, 'The numbers add to: '),
  'ADD',
  1,
  5,
  'fdsa',
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The numbers add to: '),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The numders after subtraction equal: '),
  'SUBTRACT',
  1,
  10,
  15,
  20
);
