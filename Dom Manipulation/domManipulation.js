// alert('Welcome to JS DOM Manipulation Practice');

var h1 = document.querySelector("h1");

h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if (isBlue) {
		body.style.background = "blue";
	} else {
		body.style.background = "red";
	}
	isBlue = !isBlue;
}, 200);