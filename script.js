// Function returns a random value of 0-2
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3);
  if (computer === 0) {
    return 'rock';
  } else if (computer === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let human = prompt('Please select Rock, Paper, or Scissors.');
  return human.toLowerCase();
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('Computer chose Scissors. You Win!');
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('Computer chose Rock. You Win!');
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Computer chose Paper. You Win!');
    humanScore++;
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    console.log('Computer chose Rock. You Lose.');
    computerScore++;
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    console.log('Computer chose Paper. You Lose.');
    computerScore++;
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log('Computer chose Scissors. You Lose.');
    computerScore++;
  } else {
    console.log('You tied! No one wins.');
  }
}
