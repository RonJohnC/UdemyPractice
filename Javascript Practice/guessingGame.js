var secretNum = 7
var guess = Number(prompt("Guess a number!"));

if (guess === secretNum) {
	alert("You guessed it!!!");
} else if (guess < secretNum) {
	alert("Your guess was too low.");
} else {
	alert("Your guess was too high.");
}