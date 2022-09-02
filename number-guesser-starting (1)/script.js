let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate Number function
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
// Guessing Function
const compareGuesses = (userGuess, computerGuess, targetGuess) => {
    const userDifference = Math.abs(targetGuess - userGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    return userDifference <= computerDifference;
};

const updateScore = winner => {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
