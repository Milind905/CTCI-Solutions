/*
Question
Given an image represented by an NxN matrix, where each pixel in the image is
4 bytes, write a method to rotate the image by 90 degrees.
*/

/*
My clarification questions and assumptions
*/

function rotateMatrix(inputMatrix) {
	var N = inputMatrix.length;
	var newMatrix = [];

	if (N <= 1) {
		return inputMatrix;
	}

	for (var row = 0; row < N; row++) {
		newMatrix[row] = [];
	}

	for (var row = 0; row < N; row++) {
		for (var col = 0; col < N; col++) {
			newMatrix[row][col] = inputMatrix[N - 1 - col][row];
		}
	}

	return newMatrix;
}


//Need more tests
var matrix = [];
for (var i = 0; i < 4; i++) {
	matrix[i] = [];
	for (var j = 0; j < 4; j++) {
		matrix[i][j] = (i + 4) * (j + 1);
	}
}
console.log(matrix);
console.log();
console.log(rotateMatrix(matrix));

/*
Analysis
Space complexity: O(N^2) 
Time complexity: O(N^2) where is N is the number of rows or columns
*/