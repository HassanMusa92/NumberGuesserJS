let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess === computerGuess) {
        return true;
    } else if ((Math.abs(humanGuess - targetGuess) <= (Math.abs(computerGuess - targetGuess)))) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => {
    currentRoundNumber ++;
}