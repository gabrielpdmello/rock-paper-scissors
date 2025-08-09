const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissor = document.querySelector(".scissor");
const gameContainer = document.querySelector(".game-container");
const displayRound = document.querySelector(".round");
const displayHumanScore = document.querySelector(".human-score");
const displayComputerScore = document.querySelector(".computer-score")
const displayTies = document.querySelector(".ties");
const gameMessage = document.querySelector(".game-message");
const gameResult = document.querySelector(".game-result");

let round = 0;
let computerScore = 0;
let humanScore = 0;
let ties = 0;
let gameIsRunning = true;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else if (choice === 3) {
        return "scissor"
    }
}

function playRound(computerChoice, humanChoice) {
    if (gameIsRunning) {
        if (computerChoice === humanChoice) {
            gameMessage.textContent = `Tie! both chose ${computerChoice}`;
            ties++;
            displayTies.textContent = `${ties}`;

        } else if (computerChoice === "rock" && humanChoice === "paper") {
            gameMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `${humanScore}`;

        } else if (computerChoice === "paper" && humanChoice === "scissor") {
            gameMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `${humanScore}`;
            
        } else if (computerChoice === "scissor" && humanChoice === "rock") {
            gameMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `${humanScore}`;

        } else if (humanChoice === "rock" && computerChoice === "paper") {
            gameMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `${computerScore}`;

        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            gameMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `${computerScore}`;

        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            gameMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `${computerScore}`;
        }

        round++;
        displayRound.textContent = `Round ${round}`;

        if (round > 4) {
            gameIsRunning = false;
            if (computerScore > humanScore) {
                gameResult.textContent += "Game result: You lost!";
            } else if (computerScore < humanScore) {
                gameResult.textContent += "Game result: You won!";
            } else {
                gameResult.textContent += "Game result: Tie!";
            }
        
            const resetBtn = document.createElement("button");
            resetBtn.textContent = "play again?";
            resetBtn.classList.add("reset-btn");
            gameContainer.appendChild(resetBtn);
            resetBtn.addEventListener("click", ()=> {
                gameContainer.removeChild(resetBtn);

                round = 0;
                computerScore = 0;
                humanScore = 0;
                ties = 0;
                gameIsRunning = true
        
                displayRound.textContent = "Round";
                displayHumanScore.textContent = "0";
                displayTies.textContent = "0";
                displayComputerScore.textContent = "0";

                gameMessage.textContent = "Click to play!";
                gameResult.textContent = "";

            })
        }
    }
    
}

buttonRock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

buttonPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

buttonScissor.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissor");
});