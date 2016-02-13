/*
Question
Implement an algorithm to determine if a string has all unique characters.
*/

/*
My clarification questions and assumptions
1) Is captial A and lower case a the same character? No
2) Are the characters unicode or ASCII? Unicode
3) Do multiple spaces count as a duplicate? Yes
*/

var Hashtable = require("../DataStructures/HashTableChaining.js");

//So this doesn't work with my hashtable (bad hashfunction?) but will work 
//with something like Java's HashSet
function allUnique(inputStr){

	var myHashtable = new Hashtable(inputStr.length);
	if (!inputStr || inputStr.length <= 1) {
		return true;
	}

	for (var i = 0; i < inputStr.length; i++) {
		var key = inputStr[i].charCodeAt(0);
		var index = myHashtable.hashInsert(key);
		if(myHashtable.checkLinkedListLength(index) > 1){
			return false;
		}
	}
	return true;
}

console.log(allUnique("AaBbCc"));



/*
Analysis
Space complexity: O(n) where n is the length of the string
Time complexity: O(n) where n is the length of the string
*/