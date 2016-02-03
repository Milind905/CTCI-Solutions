/*
Question
How would you design a stack which, in addition to push and pop, also has a
function min which returns the minimum element? Push, pop and min should all
operate in 0(1) time.

My clarification questions and assumptions
*/

var Node = require("../DataStructures/Nodes.js");
var Stack = require("../DataStructures/Stack.js");

diffStack.prototype = new Stack();

function diffStack() {
	this.top = null;
	this.length = 0;
	this.minStack = new Stack();
}

diffStack.prototype.push = function(data) {
	var cTop = this.top;
	var newTop = new Node(data);

	this.top = newTop;
	newTop.next = cTop;
	this.length++;

	if (this.minStack.top === null) {
		this.minStack.push(newTop.data);
	} else {
		if (newTop.data <= this.minStack.top.data) {
			this.minStack.push(newTop.data);
		}
	}
};

diffStack.prototype.pop = function() {
	if (this.top === null) {
		return null;
	}

	var cTop = this.top.data;
	this.top = this.top.next;
	this.length--;

	if (cTop === this.minStack.top.data) {
		this.minStack.pop();
	}

	return cTop;
};

diffStack.prototype.getMin = function() {
	if (this.top === null) {
		return null;
	}
	return this.minStack.top.data;
};

var myStack = new diffStack();
console.log(myStack.pop());
console.log(myStack.toString());
console.log(myStack.getMin());
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(5);
myStack.push(4);
myStack.push(1);
console.log(myStack.toString());
console.log(myStack.getMin().toString());
myStack.pop();
myStack.pop();
console.log(myStack.toString());
console.log(myStack.getMin().toString());
myStack.pop();
myStack.pop();
console.log(myStack.toString());
console.log(myStack.getMin().toString());

/*
Analysis
Space complexity: O(N) where N is the size of the original stack
Time complexity: O(1)
*/