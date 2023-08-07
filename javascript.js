console.log("Hello World");

let rpsArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    return rpsArray[(Math.floor(Math.random()*rpsArray.length))];
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return "Player Wins";
    }
    else {
        return "Computer Wins";
    }
}

console.log("Player chose " + playerSelection);
console.log("Computer chose " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
