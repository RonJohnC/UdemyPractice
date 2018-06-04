// var number = -10;
// var even = 10;
// var odd = 301;
// var counter = 5

// while (number <= 19) {
// 	document.write(number);
// 	number++;
// }
 for (var i = -10; i <= 19; i++) {
 	console.log(i);
 }

// while (even <= 40){
// 	document.write(even);
// 	even+=2;
// }

for (var i = 10; i <= 40; i+=1) {
	if (i % 2 === 0 ) {
		console.log(i);
	}
}

// while (odd <= 333){
// 	document.write(" " + odd);
// 	odd+=2;
// }

for (var i=301; i <= 333; i+=1) {
	if (i%2 !== 0){
	console.log(i);
	}
}
// while ( counter <= 50) {
// 	if (counter % 3 === 0 && counter % 5 === 0){
// 		document.write("  " + counter);
// 	}
// 	counter+=1;
// }

for (var i=5; i<=50; i+=1)	{
	if (i%3 === 0 && i%5 === 0) {
		console.log(i);
	}
}