/*
Question
Given two strings, write a method to decide if one is permuation of the other
*/

/*
My clarification questions and assumptions
1) Is captial A and lower case a the same character? No
2) Are the characters unicode or ASCII? ASCII
*/

function isPermutation(a, b) {
	if (!a || !b) {
		throw ("Atleast one of the input strings is empty");
	} else {
		a = a.trim();
		b = b.trim();
	}

	//Two strings cannot be permutations if not of same length
	if (a.length != b.length) {
		return false;
	}

	var aChars = [];
	for (var i = 0; i < 256; i++) {
		aChars[i] = 0;
	}

	for (var i = 0; i < a.length; i++) {
		aChars[a[i].charCodeAt(0)]++;
	}

	for (var i = 0; i < b.length; i++) {
		aChars[b[i].charCodeAt(0)]--;
		if (aChars[b[i].charCodeAt(0)] < 0) {
			return false;
		}
	}

	return true;
}

//Need to implement some sort of testing framework
console.log(isPermutation("a", "abcde")); //False
console.log(isPermutation("abcde", "a")); //False
console.log(isPermutation("abc", "abc")); //True
console.log(isPermutation("fat", "atf")); //True
console.log(isPermutation("llllloo", "lolololo")); //False
console.log(isPermutation("ermagad", "nopeima")); //False
console.log(isPermutation("ermagad", "  ermagad ")); //True
console.log(isPermutation("Thequickbrownfoxjumpsoverthelazydog", "The quick brown fox jumps over the lazy dog")); //False

/*
Analysis
Space complexity O(256)
Time complexity O(256) 
*/