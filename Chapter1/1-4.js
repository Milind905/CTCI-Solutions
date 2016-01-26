/*
Question
Write a method to replace all spaces in a string with %20
*/

/*
My clarification questions and assumptions
1) Can I use REGEX expressions? No
*/

function spaceToToken(inputStr) {
	if (!inputStr || inputStr.length === 0) {
		return inputStr;
	}

	if (inputStr.indexOf(" ") === -1) {
		return inputStr;
	}

	inputStr = inputStr.split(" ").join("%20");

	return inputStr;
}


//Need to implement some sort of testing framework
console.log(spaceToToken());
console.log(spaceToToken(""));
console.log(spaceToToken(" "));
console.log(spaceToToken("a"));
console.log(spaceToToken("A B Cc"));
console.log(spaceToToken(" a b c"));
console.log(spaceToToken("a b c "));
console.log(spaceToToken("   a b c  "));
console.log(spaceToToken("The quick brown fox jumps over the lazy dog"));

/*
Analysis
Space complexity: O(1);
Time complexity: O(n) where n = length of string (assuming split and join take O(n) time)
*/