var Node = require("./Nodes");

function Stack() {
	this.top = null;
	this.length = 0;
}

/*
Add an item to the top of the stack
Time Complexity: O(1)
*/
Stack.prototype.push = function(data) {
	var cTop = this.top;
	var newTop = new Node(data);

	this.top = newTop;
	newTop.next = cTop;
	this.length++;
};

/*
Pop an item from the top of the stack
Time Compelxity: O(1)
*/
Stack.prototype.pop = function() {
	if (this.top === null) {
		return null;
	}

	var cTop = this.top;
	this.top = this.top.next;
	this.length--;
	return cTop;
};

/*
Pop an item from the bottom of the stack
Time Complexity: O(n)
*/
Stack.prototype.popBottom = function() {
	var node = this.top;
	var parent = null;

	if (node === null) {
		return null;
	}

	while (node.next !== null) {
		parent = node;
		node = node.next;
	}

	if (!parent) {
		this.top = null;
	} else {
		parent.next = null;
	}
	this.length--;

	return node;
};

/*
Take a look at the top of the stack
Time Complexity: O(1)
*/
Stack.prototype.peek = function() {
	if (this.top) {
		return this.top;
	} else {
		return null;
	}
};

Stack.prototype.isEmpty = function() {
	if (this.length === 0) {
		return true;
	} else {
		return false;
	}
};

/*
Print the stack in an easy to read format
Time Complexity: O(n)
*/
Stack.prototype.toString = function() {
	if (!this.top) {
		return "Empty";
	}
	var returnString = "";
	var node = this.top;

	while (node) {
		if (node.next) {
			returnString += node.data + "-->";
		} else {
			returnString += node.data;
		}
		node = node.next;
	}
	return returnString;

};

module.exports = Stack;


/*var myStack = new Stack();
console.log(myStack.toString());
console.log(myStack.pop());
console.log(myStack.popBottom());
console.log(myStack.peek());
console.log(myStack.isEmpty());
//console.log(myStack.push());
myStack.push(11);
console.log(myStack.pop().toString());
myStack.push(11);
console.log(myStack.peek().toString());
console.log(myStack.popBottom().toString());
console.log(myStack.isEmpty());
myStack.push(11);
myStack.push(21);
myStack.push(25);
myStack.push(7);
myStack.push(18);
myStack.push(43);
console.log(myStack.isEmpty());
console.log(myStack.toString());
console.log(myStack.popBottom().toString());
console.log(myStack.peek().toString());
console.log(myStack.pop().toString());
console.log(myStack.pop().toString());
console.log(myStack.popBottom().toString());
console.log(myStack.pop().toString());
console.log(myStack.pop().toString());
console.log(myStack.toString());
console.log(myStack.isEmpty());
myStack.push(25);
console.log(myStack.isEmpty());
myStack.push(7);
myStack.push(18);
myStack.push(11);
myStack.push(21);
myStack.push(43);
console.log(myStack.toString());*/