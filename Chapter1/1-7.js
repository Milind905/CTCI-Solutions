/*
Question
Write an algorithm such that if an element in an MxN matrix is 0, its entire row
and column are set to 0
*/

/*
My clarification questions and assumptions
*/

function setZero(inputMatrix) {
	if(!inputMatrix || inputMatrix.length === 0) {
		return inputMatrix;
	}

	var M = inputMatrix.length;
	var N = inputMatrix[0].length;
	var rowArray = [];
	var colArray = [];

	for(var row=0; row<M; row++){
		for(var col=0; col<N; col++){
			if(inputMatrix[row][col] === 0){
				rowArray.push(row);
				colArray.push(col);
			}
		}
	}
	
	for(var i=0; i<rowArray.length; i++){
		for(var col=0; col<N; col++){
			inputMatrix[rowArray[i]][col] = 0;
		}
	}

	for(var i=0; i<colArray.length; i++){
		for(var row=0; row<M; row++){
			inputMatrix[row][colArray[i]] = 0;
		}
	}

	return inputMatrix;
}

var matrix = [];
for (var i = 0; i < 4; i++) {
	matrix[i] = [];
	for (var j = 0; j < 4; j++) {
		matrix[i][j] = (i + 3) * (j + 1);
	}
}
matrix[2][3] = 0;
matrix[0][1] = 0;

console.log(matrix);
console.log();
console.log(setZero(matrix));

/*
Analysis
Space complexity: O(M*N) where M = #rows and N= #columns 
Time complexity: O(M*N) - Probably not the best solution :/
*/