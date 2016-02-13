/*
Question
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string
*/

/*
My clarification questions and assumptions
*/

function compressString(inputStr) {
	//If empty or 2chars or less, compressed string cannot be smaller than original
	if (!inputStr || inputStr.length <= 2) {
		return inputStr;
	}

	var counter = 1;
	var outputStr = "";
	var curChar = inputStr[0];

	for (var i = 1; i < inputStr.length; i++) {
		if (inputStr[i] === curChar) {
			counter++;
		} else {
			outputStr += curChar + counter.toString();
			curChar = inputStr[i];
			counter = 1;
		}
	}
	outputStr += curChar + counter.toString();

	if (outputStr.length < inputStr.length) {
		return outputStr;
	} else {
		return inputStr;
	}
}

console.log(compressString(""));
console.log(compressString("a"));
console.log(compressString("ab"));
console.log(compressString("aa"));
console.log(compressString("iiiissupmyyyyyyman"));
console.log(compressString("iiiiissupmyyyyyyman"));
console.log(compressString("iiiiiiissupmyyyyyyman"));
console.log(compressString("aabcccccaaa"));



/*
Analysis
Space complexity: O(2n) where n is the length of the string
Time complexity: O(n) where n is the length of the string
*/