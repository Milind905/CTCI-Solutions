/*
Question
Implement a function which reverses a (null-terminated) string
*/

/*
My clarification questions and assumptions
1) This is a C/C++ question but I will do it disregarding the null-terminated part (which is probably the challenging part)
*/

function reverseString(inputStr) {
	if (!inputStr || inputStr.length <= 1) {
		return inputStr;
	} else {
		inputStr = inputStr.trim().split('');
	}

	var temp;
	var length = inputStr.length;
	for (var i = 0; i < Math.floor(length / 2); i++) {
		temp = inputStr[i];
		inputStr[i] = inputStr[length - 1 - i];
		inputStr[length - 1 - i] = temp;
	}
	return inputStr.join('');
}

//Need to implement some sort of testing framework
console.log(reverseString());
console.log(reverseString("a"));
console.log(reverseString("AaBbCc"));
console.log(reverseString("AaBbCc  "));
console.log(reverseString("aabbcc"));
console.log(reverseString("The quick brown fox jumps over the lazy dog"));
console.log(reverseString("Cwm fjordbank glyphs vext quiz"));

/*
Analysis
Space complexity: O(1);
Time complexity: O(n) where n = length of string
*/