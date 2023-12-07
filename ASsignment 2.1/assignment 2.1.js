// Function to simulate a coin flip
function flipCoin() {
    // Generate a random number (0 or 1) to represent heads or tails
    const randomNumber = Math.floor(Math.random() * 2);

    // Return "Heads" for 0 and "Tails" for 1
    return (randomNumber === 0) ? "Heads" : "Tails";
}

// Function to play the coin flip game
function playGame() {
    // Call the flipCoin function to get the result
    const result = flipCoin();

    // Display the result on the webpage
    const resultElement = document.getElementById("result");

    // Use innerHTML to update the content of the result element
    resultElement.innerHTML = `You got: ${result}!`;

    // Check the result and provide additional messages based on the outcome
    if (result === "Heads") {
        resultElement.innerHTML += " Nice flip! You win!";
    } else {
        resultElement.innerHTML += " Better luck next time!";
    }
}
