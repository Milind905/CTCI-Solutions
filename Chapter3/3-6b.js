/*
Question
Write a program to sort a stack in ascending order (with biggest items on top).
You may use at most one additional stack to hold items, but you may not copy the
elements into any other data structure (such as an array). The stack supports the
following operations: push, pop, peek, and isEmpty.

My clarification questions and assumptions
Am I building an "Ascending" stack or sorting a pre-built one? Sort a pre-built
*/

var Stack = require("../DataStructures/Stack");

function sortAscendingStack(unsortedStack) {
	var sortedStack = new Stack();
	if (unsortedStack.length === 0) {
		return unsortedStack;
	}

	while (unsortedStack.length !== 0) {
		if (sortedStack.length === 0) {
			sortedStack.push(unsortedStack.pop());
		} else {
			var temp = unsortedStack.pop();
			while (sortedStack.top && sortedStack.top.data >  temp){
				unsortedStack.push(sortedStack.pop());
			}
			sortedStack.push(temp);
		}
	}

	return sortedStack;
}



var myStack = new Stack();
console.log(myStack.toString());
myStack.push(24);
myStack.push(3);
myStack.push(12);
myStack.push(17);
myStack.push(5);
console.log(myStack.toString());
console.log(sortAscendingStack(myStack).toString());

/*
Analysis
Space complexity: O(2n) where n is the number of elements in the stack
Time complexity: O(n^2) where n is the number of elements in the stack
*/