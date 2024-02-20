const choices = ['Rock', 'Paper', 'Scissor'];
const buttons = document.querySelectorAll('.button');
const newGameButton = document.querySelector('.newGameButton');
const computerChoiceImgPlaceholder = document.querySelector('.computerImgPlaceholder');
const playerChoiceImgPlaceholder = document.querySelector('.playerImgPlaceholder');
const computerScoreDev = document.querySelector('.computerScore');
const playerScoreDev = document.querySelector('.playerScore');

let computerScore = 0;
let playerScore = 0;
computerScoreDev.append('Computer: ' + computerScore);
playerScoreDev.append('You: ' + playerScore);

computerScoreDev.setAttribute('style', 'background-color: #a688fa; color: black; padding: 5px 5px; font-size: 20px; font-weight: bold; border-radius: 10px; margin-top: 5px;')
playerScoreDev.setAttribute('style', 'background-color: #a688fa; color: black; padding: 5px 5px; font-size: 20px; font-weight: bold; border-radius: 10px; margin-top: 5px;')

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    console.log("Scores reset. Let's play again!");
    computerScoreDev.innerHTML = '';
    playerScoreDev.innerHTML = '';
    computerScoreDev.append('Computer: ' + computerScore);
    playerScoreDev.append('You: ' + playerScore);
}

// Event listener for new game button
newGameButton.addEventListener('click', resetGame);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if game is over
        if (computerScore === 5 || playerScore === 5) {
            console.log("Game over. Please start a new game.");
            displayFinalResult();
            return; // Stop the game
        }

        // Clear the computer choice image placeholder
        computerChoiceImgPlaceholder.innerHTML = '';

        // Randomizing and getting the computer choice
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const computerChoiceImg = document.createElement('img');
        computerChoiceImg.setAttribute('src', 'images/' + String(computerChoice.toLowerCase()) + '.png');
        computerChoiceImg.setAttribute('style', 'height: 200px; width: 200px; padding: 20px 20px;');
        computerChoiceImgPlaceholder.append(computerChoiceImg);

        playerChoiceImgPlaceholder.innerHTML = '';

        // Getting the player Choice
        const playerChoice = button.firstChild.textContent.trim();
        console.log('Player choice: ' + playerChoice);
        const playerChoiceImg = document.createElement('img');
        playerChoiceImg.setAttribute('src', 'images/' + String(playerChoice.toLowerCase()) + '.png');
        playerChoiceImg.setAttribute('style', 'height: 200px; width: 200px; padding: 20px 20px;');
        playerChoiceImgPlaceholder.append(playerChoiceImg)

        let currentResult = '';
        // Determine winner
        if (playerChoice === computerChoice) {
            currentResult = (`TIE! Both of you chose ${playerChoice}`);
        } else if ((playerChoice === 'Rock' && computerChoice === 'Scissor') ||
            (playerChoice === 'Paper' && computerChoice === 'Rock') ||
            (playerChoice === 'Scissor' && computerChoice === 'Paper')) {
            currentResult = (`You Win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;

        } 
        else {
            currentResult = (`You LOSE! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
        }

        // Display scores
        computerScoreDev.innerHTML = '';
        playerScoreDev.innerHTML = '';
        console.log('Player: ' + playerScore + ', Computer: ' + computerScore);
        computerScoreDev.append('Computer: ' + computerScore);
        playerScoreDev.append('You: ' + playerScore);


        // Check if game is over after updating scores
        if (computerScore === 5 || playerScore === 5) {
            console.log("Game over. Please start a new game.");
            displayFinalResult();
        }
    });
});

function displayFinalResult() {
    if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("It's a tie!");
    }
}
