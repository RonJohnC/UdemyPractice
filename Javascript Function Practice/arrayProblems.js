var nums = [1,2,3,4,5,6,7]

function printReverse(str){
    for(var i = str.length - 1; i >= 0; i--){
        console.log(str[i]);
    }
};

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	} 
	return true;
}

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element
	});
	return total;
}

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}