// Rock Paper Scissors game

// Function that returns the computer's choice: rock, paper, or scissors
function computerPlay() {
    let random_number = Math.floor(Math.random(3) * 3);  // Set variable number to random integer between 0 and 2
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[random_number];   // Use random number to choose item from list of choices
    return computerChoice
}

// Function to take player choice and computer choice and determine who wins the round
// Returns true if player wins and returns false if computer wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {    // Check for a tie
        return false;
    } else if ((playerSelection === "rock" && computerSelection === "scissors")     // Check for wins
    || (playerSelection === "scissors" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "rock")) {
        return true;
    } else {    // If not a tie game or a win, it's a loss
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

const outputWindow = document.querySelector('.output');

const displayPlayerChoice = document.querySelector('#player-choice');
const displayComputerChoice = document.querySelector('#computer-choice');
const displayRoundWinner = document.querySelector('#round-winner');
const displayCurrentScore = document.querySelector('#current-score');
const displayGameWinner = document.querySelector('#game-winner');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id; // Check var name
        let computerChoice = computerPlay();
        displayPlayerChoice.textContent = `You chose: ${playerChoice}`;
        displayComputerChoice.textContent = `Computer chose: ${computerChoice}`;

        if (playerChoice === computerChoice) {  // Check for tie
            displayRoundWinner.textContent = "This round was a tie."
        } else if (playRound(playerChoice, computerChoice)) {     // Play round with player's selection
            playerScore += 1;
            displayRoundWinner.textContent = "You won this round!";
        } else {
            computerScore += 1;
            displayRoundWinner.textContent = "You lost this round.";
        };

        // Display the current player and computer scores
        displayCurrentScore.textContent = `Player: ${playerScore}; Computer: ${computerScore}`

        // Check for 5 games won and end match
        if (playerScore === 5) {
            displayGameWinner.style.cssText = "font-weight: 900; font-size: 32px; text-align: center; color: green"
            displayGameWinner.textContent = "You win!";
            buttons.forEach(button => button.disabled = true); // Disable buttons to prevent play
        } 
        if (computerScore === 5) {
            displayGameWinner.style.cssText = "font-weight: 900; font-size: 32px; text-align: center; color: red"
            displayGameWinner.textContent = "You lose.";
            buttons.forEach(button => button.disabled = true);
        }
    })
})


