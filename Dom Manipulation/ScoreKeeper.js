var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var message = document.getElementById("winMessage");

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
			if(p1Score === winningScore) {
				p1Display.classList.add("winner");
				gameOver = true;
				message.textContent = "Player 1 has won!"
			}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
			if(p2Score === winningScore) {
				p2Display.classList.add("winner");
				gameOver = true;
				message.textContent = "Player 2 has won!"

			}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p2Score = 0;
	p1Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	message.textContent = " ";
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});