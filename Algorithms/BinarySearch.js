function BinarySearch(inputArray, x) {
	var minIndex = 0;
	var maxIndex = inputArray.length - 1;
	var currentIndex;

	while (minIndex <= maxIndex) {
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		if (x === inputArray[currentIndex]) {
			return currentIndex;
		} else if (x < inputArray[currentIndex]) {
			maxIndex = currentIndex - 1;
		} else {
			minIndex = currentIndex + 1;
		}
	}
	return null;
}

module.exports = BinarySearch;

var myArray = [20, 35, 41, 42, 43, 49, 54, 57];
console.log("Found at index: ", BinarySearch(myArray, 0));
console.log("Found at index: ", BinarySearch(myArray, 20));
console.log("Found at index: ", BinarySearch(myArray, 42));
console.log("Found at index: ", BinarySearch(myArray, 57));

myArray = [20, 35, 41, 42, 43, 49, 54];
console.log("Found at index: ", BinarySearch(myArray, 0));
console.log("Found at index: ", BinarySearch(myArray, 20));
console.log("Found at index: ", BinarySearch(myArray, 42));
console.log("Found at index: ", BinarySearch(myArray, 54));