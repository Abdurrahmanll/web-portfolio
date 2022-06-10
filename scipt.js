function shuffleArray(array) {
	for (var i = array.length -1; i > 0; i--){

		var A = math.floor(math.random() * (i + 1));

		var temp = array[i];
		array[i] = array[A]
		array[A] = temp;
	}

	return array;
}

function show() {
	var arr = ["Tochiku", "precious", "imam", "israel", "chiamaka", "mary"];
	var arr1 = shuffleArray(arr)

	document.write(arr1)
}