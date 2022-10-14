// const playerSelection = prompt("enter a name").toLowerCase();
const gameChoices = ["rock", "paper", "scissors"];
const playerSelection = prompt(
  "enter a name ;either rock,paper or scissors"
).toLowerCase();
const getComputerChoice =
  gameChoices[Math.floor(Math.random() * gameChoices.length)];

console.log(getComputerChoice);

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection === getComputerChoice) {
    console.log(
      `computer and player tied :They both chose ${getComputerChoice}`
    );
  } else if (playerSelection === scissors && getComputerChoice === paper) {
    console.log(
      `player beats computer because player chose ${playerSelection} and computer chose ${getComputerChoice}`
    );
  } else if (playerSelection === paper && getComputerChoice === rock) {
    console.log(
      `player beats computer because player chose ${playerSelection} and computer chose ${getComputerChoice}`
    );
  } else if (playerSelection === rock && getComputerChoice === scissors) {
    console.log(
      `player beats computer because player chose ${playerSelection} and computer chose ${getComputerChoice}`
    );
  } else if (getComputerChoice === scissors && getComputerChoice === paper) {
    console.log(
      `computer beats computer because player chose ${getComputerChoice} and computer chose ${playerSelection}`
    );
  } else if (getComputerChoice === paper && getComputerChoice === rock) {
    console.log(
      `computer beats computer because player chose ${getComputerChoice} and computer chose ${playerSelection}`
    );
  } else if (getComputerChoice === rock && getComputerChoice === scissors) {
    console.log(
      `computer beats computer because player chose ${getComputerChoice} and computer chose ${playerSelection}`
    );
  }
}
