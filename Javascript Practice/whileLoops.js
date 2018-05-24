var number = -10;
var even = 10;
var odd = 301;
var counter = 5

while (number <= 19) {
	document.write(number);
	number++;
}

while (even <= 40){
	document.write(even);
	even+=2;
}

while (odd <= 333){
	document.write(" " + odd);
	odd+=2;
}

while ( counter <= 50) {
	if (counter % 3 === 0 && counter % 5 === 0){
		document.write("  " + counter);
	}
	counter+=1;
}

	