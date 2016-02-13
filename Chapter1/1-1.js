/*
Question
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures
*/

/*
My clarification questions and assumptions
1) Is captial A and lower case a the same character? No
2) Are the characters unicode or ASCII? ASCII
3) Do multiple spaces count as a duplicate? Yes
*/

function allUnique(inputStr) {
	var charArr = [];
	var index;

	if (!inputStr || inputStr.length <= 1) {
		return true;
	}

	for (var i = 0; i < 256; i++) {
		charArr[i] = 0;
	}

	for (var i = 0; i < inputStr.length; i++) {
		index = inputStr[i].charCodeAt(0);
		charArr[index]++;
		if (charArr[index] > 1) {
			return false;
		}
	}
	return true;
}

//Need to implement some sort of testing framework
console.log(allUnique()); //True
console.log(allUnique("a")); //True
console.log(allUnique("AaBbCc")); //True
console.log(allUnique("AaBbCc  ")); //False
console.log(allUnique("aabbcc")); //False
console.log(allUnique("The quick brown fox jumps over the lazy dog")); //False
console.log(allUnique("Thequickbrownfoxjumpsoverthelazydog")); //False
console.log(allUnique("Cwm fjordbank glyphs vext quiz")); //False
console.log(allUnique("abcdefghijklmnopqrstuvwxyz")); //True

/*
Analysis
Space complexity: O(256);
Time complexity: O(n) where n = length of string
*/