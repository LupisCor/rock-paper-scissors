console.log("Hello World");

let rpsArray = ["Rock", "Paper", "Scissors"]


let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

while (roundsPlayed < 5) {
    playerSelection = prompt("Please select 'Rock', 'Paper', or 'Scissors'.");
    computerSelection = getComputerChoice();
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection)
    console.log(playRound(playerSelection, computerSelection));

}

if (playerScore > computerScore){
    console.log("Final Score: Player Wins: " + playerScore + ", Computer Wins: " + computerScore + ", Draws: " + drawScore);
    console.log("Player Wins The Game!");
}
else if (playerScore < computerScore){
    console.log("Final Score: Player Wins: " + playerScore + ", Computer Wins: " + computerScore + ", Draws: " + drawScore);
    console.log("Computer Wins The Game!");
}
else{
    console.log("Final Score: Player Wins: " + playerScore + ", Computer Wins: " + computerScore + ", Draws: " + drawScore);
    console.log("Tie Game");
}

function getComputerChoice(){
    return rpsArray[(Math.floor(Math.random()*rpsArray.length))];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        drawScore++;
        roundsPlayed++;
        return "Draw";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        roundsPlayed++;
        return "Player Wins round " + roundsPlayed;
    }
    else {
        computerScore++;
        roundsPlayed++
        return "Computer Wins round " + roundsPlayed;
    }
}

