function isEven(x) {
	if (x%2===0){
		return true;
	}
	else {return false}
}

function factorial(num) {
	var result = 1;
	for (var i = 2; i <= num; i++) {
		result *=i;
	}
	return result;
}

function kebabToSnake(str) {
	var fixed = str.replace("-", "_")
	return fixed;
}
