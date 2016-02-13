/*
Question
Write a program to sort a stack in ascending order (with biggest items on top).
You may use at most one additional stack to hold items, but you may not copy the
elements into any other data structure (such as an array). The stack supports the
following operations: push, pop, peek, and isEmpty.

My clarification questions and assumptions
Am I building an "Ascending" stack or sorting a pre-built one? Building a stack
*/

var Stack = require("../DataStructures/Stack");

function maxStack() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}

/*
Time Complexity: O(2n) where n is the number of elements in the stack
*/
maxStack.prototype.push = function(data) {
	if (!data) {
		return;
	}

	if(this.isEmpty()){
		this.stack1.push(data);
		return;
	}

	var current = this.stack1.top;
	while (current !== null && current.data > data) {
		current = current.next;
		this.stack2.push(this.stack1.pop().data);
	}
	this.stack1.push(data);
	while (this.stack2.top !== null) {
		this.stack1.push(this.stack2.pop().data);
	}
};

/*
Time Complexity: O(1)
*/
maxStack.prototype.pop = function() {
	if (this.isEmpty()) {
		return "EMPTY";
	} else {
		return this.stack1.pop();
	}
};

/*
Time Complexity: O(1)
*/
maxStack.prototype.peek = function() {
	if (this.isEmpty()) {
		return "EMPTY";
	} else {
		return this.stack1.top;
	}
};

/*
Time Complexity: O(1)
*/
maxStack.prototype.isEmpty = function() {
	if (this.stack1.top === null) {
		return true;
	} else {
		return false;
	}
};

maxStack.prototype.toString = function() {
	if(this.isEmpty()){
		return "EMPTY";
	} else {
		return this.stack1.toString();
	}
};

module.exports = maxStack;

var myMaxStack = new maxStack();
console.log(myMaxStack.toString());
console.log(myMaxStack.isEmpty());
myMaxStack.push(24);
myMaxStack.push(3);
myMaxStack.push(12);
myMaxStack.push(17);
myMaxStack.push(5);
console.log(myMaxStack.toString());
console.log(myMaxStack.isEmpty());
console.log(myMaxStack.peek().toString());
myMaxStack.pop()
console.log(myMaxStack.peek().toString());
myMaxStack.pop()
console.log(myMaxStack.toString());
console.log(myMaxStack.isEmpty());
myMaxStack.pop()
myMaxStack.pop()
myMaxStack.pop()
console.log(myMaxStack.peek().toString());
console.log(myMaxStack.isEmpty());

/*
Analysis
Space complexity: O(2n) where n is the number of elements in the stack
*/
