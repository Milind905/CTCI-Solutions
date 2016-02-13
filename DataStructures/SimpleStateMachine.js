var states = {
	state1: 1,
	state2: 2
};

function countWords(input, seperator) {
	var prevState = null;
	var curState = states.state2;
	var wordCount = 0;

	for (var i = 0; i < input.length; i++) {
		prevState = curState;
		if (input[i] === seperator) {
			curState = states.state2;
		} else {
			curState = states.state1;
		}

		if (prevState === states.state2 && curState === states.state1) {
			wordCount++;
		}
	}

	return wordCount;
}

console.log(countWords("ABC DE", " "));
console.log(countWords(" ABC DE", " "));
console.log(countWords(" ABC DE ", " "));
console.log(countWords("THE QUICK Brown fox jumped over the large   ", " "));
console.log(countWords("   THE QUICK Brown fox jumped over the large   ", " "));