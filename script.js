let choices = ["ROCK", "PAPER", "SCISSOR"];


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt("Rock, paper, or scissors? ");
    computerSelection = getComputerChoice();
    playerSelection = playerChoice;
    playerSelection = playerSelection.toUpperCase();
    let result = "";

    // Tie possibility
    if (playerSelection === computerSelection){
        result = `TIE! Both of you chose ${computerSelection}`;
        
    }
    // Rock possibilities
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        result = `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
        result = `You WIN! ${playerSelection} beats ${computerSelection}`;
    }   
    // Paper possibilities
    else if (playerSelection === "PAPER" && computerSelection === "SCISSOR"){
        result = `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        result = `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
    // Scissors possibilities
    else if (playerSelection === "SCISSOR" && computerSelection === "ROCK"){
        result = `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        result = `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
    
    return result;
}

function playGame(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
}

playGame();