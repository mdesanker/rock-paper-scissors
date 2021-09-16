// Rock Paper Scissors game

// Function that returns the computer's choice: rock, paper, or scissors
function computerPlay() {
    let random_number = Math.floor(Math.random(3) * 3);  // Set variable number to random integer between 0 and 2
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[random_number];   // Use random number to choose item from list of choices
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {    // Check for a tie
        console.log(`You chose: ${playerSelection} and your opponent chose: ${computerSelection}. You tied.`);
        return false
    } else if ((playerSelection === "rock" && computerSelection === "scissors")     // Check for wins
    || (playerSelection === "scissors" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You chose: ${playerSelection} and your opponent chose: ${computerSelection}. You win!`);
        return true
    } else {    // If not a tie game or a win, it's a loss
        console.log(`You chose: ${playerSelection} and your opponent chose: ${computerSelection}. You Lose.`)
        return false
    }
}

function game() {
    let num_games = 0;
    let player_wins = 0;
    while (num_games < 5) {     // Play through 5 games
        playerChoice = prompt("Enter 'rock', 'paper', or 'scissors': ")
        if (playRound(playerChoice, computerPlay())) { // playRound function returns true or false
            player_wins++;    // Player score only increases on a win
            num_games++;
        } else {
            num_games++;
        }
    }
    console.log(`You won ${player_wins} out of ${num_games} games`)     // Display how many games player won
}

game()