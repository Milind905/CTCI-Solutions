/*
Question
Given an image represented by an NxN matrix, where each pixel in the image is
4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
place?
*/

/*
My clarification questions and assumptions
*/

function rotateMatrix90(inputMatrix) {
	var N = inputMatrix.length;
	if (N <= 1) {
		return inputMatrix;
	}

	var f = Math.floor(N / 2);
	var c = Math.ceil(N / 2);

	for (var row = 0; row < f; row++) {
		for (var col = 0; col < c; col++) {
			var popped = inputMatrix[row][col];
			inputMatrix[row][col] = inputMatrix[N - 1 - col][row];
			inputMatrix[N - 1 - col][row] = inputMatrix[N - 1 - row][N - 1 - col];
			inputMatrix[N - 1 - row][N - 1 - col] = inputMatrix[col][N-1-row];
			inputMatrix[col][N-1-row] = popped;
		}
	}
	return inputMatrix;

}

var matrix = [];
for (var i = 0; i < 5; i++) {
	matrix[i] = [];
	for (var j = 0; j < 5; j++) {
		matrix[i][j] = (i + 5) * (j + 1);
	}
}
console.log(matrix);
console.log();
console.log(rotateMatrix90(matrix));

/*
Analysis
Space complexity: O(1) 
Time complexity: O(N^2) where is N is the number of rows or columns
*/