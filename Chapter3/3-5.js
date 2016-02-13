/*
Question
Implement a MyQueue class which implements a queue using two stacks.

My clarification questions and assumptions
*/

var Stack = require("../DataStructures/Stack");

function stacksAsQueue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}

/*
Time Complexity: O(1)
*/
stacksAsQueue.prototype.enqueue = function(data) {
	if (!data) {
		return null;
	}

	this.stack1.push(data);
};

/*
Time Complexity: O(2n) where n is the number of elements in the queue
*/
stacksAsQueue.prototype.dequeue = function() {
	while (this.stack1.top !== null) {
		this.stack2.push(this.stack1.pop().data);
	}
	var toReturn = this.stack2.pop();
	while (this.stack2.top !== null) {
		this.stack1.push(this.stack2.pop().data);
	}
	return toReturn;
};

/*
Time Complexity: O(2n) where n is the number of elements in the queue
*/
stacksAsQueue.prototype.toString = function() {
	var returnString = "";
	if (this.stack1.top === null) {
		return "EMPTY";
	}

	while (this.stack1.top !== null) {
		this.stack2.push(this.stack1.pop().data);
	}
	returnString = this.stack2.toString();
	while (this.stack2.top !== null) {
		this.stack1.push(this.stack2.pop().data);
	}
	return returnString;
};

module.exports = stacksAsQueue;

var myQueue = new stacksAsQueue();
console.log(myQueue.dequeue());
console.log(myQueue.toString());
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
console.log(myQueue.toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.toString());

/*
Analysis
Space complexity: O(2n) where n is the number of elements in the queue
*/