var age = prompt("What is your age?");
var ageLeft = 21 - age;
var ageOver = age - 21;
var ageSqrt = Math.sqrt(age);

if (age < 0) {
	document.write("Age entered incorrectly, negative number entered. ")
} else if (age == 21) {
	document.write("Happy 21st Birtday! ")
} else if (age < 21) {
	document.write("You have " + ageLeft + " years until you are 21. ")
} else {
	document.write("You are " + ageOver + " year's over 21. ")
}

if (age % 2 == 0) {
	document.write(" Your age is even. ")
} else if (age % 2 !== 0) {
	document.write(" Your age is odd. ")
}

if (age > 0 && ageSqrt % 1 === 0 ) {
	document.write("Your age is a perfect square!")
}

console.log(ageSqrt)