const randomNumber = Math.floor(Math.random() * 10) + 1;

function promptGuess() {
  const myGuess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (myGuess === randomNumber) {
    console.log("You are write");
  } else if (myGuess > 10) {
    console.log("Please enter between 1 and 10");
  } else {
    console.log("Your guess is wrong");
  }
}

promptGuess();
