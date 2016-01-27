/*
Question
Assume you have a method isSubstring which checks if one word is a
substring of another. Given two strings, s1 and s2, write code to check if s2 is
a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation
of "erbottlewat").
*/

/*
My clarification questions and assumptions
1) Do I have to use isSubstring at all? Yes
2) Do spaces on the ends count as part of the string? Yes
*/

function isSubstring(s1, s2) {
	return ((s1.indexOf(s2) > -1) || (s2.indexOf(s1) > -1));
}

function isRotation(s1, s2) {
	if (!s1 || !s2) {
		throw ("Error, one of the strings is empty");
	}

	if (s1.length != s2.length) {
		return false;
	}

	var rotate = -1;
	for (var i = 0; i < s2.length; i++) {
		if (s2[i] === s1[0]) {
			rotate = i;
		}
	}

	if (rotate === 0) {
		return isSubstring(s1, s2);
	} else if (rotate > 0) {
		var newS2 = [];
		for (var i = 0; i < s2.length; i++) {
			newS2[i] = s2[((i + rotate) % s2.length)];
		}
		return isSubstring(s1, newS2.join(""));
	} else {
		return false;
	}
}

console.log(isRotation("a", "a"));
console.log(isRotation("a", "b"));
console.log(isRotation("abcdef", "cdefab"));
console.log(isRotation("abcdef", "fedcba"));
console.log(isRotation("llll", "mnop"));
console.log(isRotation("llll", "llli"));
console.log(isRotation("abcd ef", "cdef ab"));
console.log(isRotation("abcd ef", "cd efab"));
console.log(isRotation("abcd ef", "cd  efab"));

/*
Analysis
Space complexity: O(n) where N is the length of s2
Time complexity: O(n) where N is the length of s2
*/