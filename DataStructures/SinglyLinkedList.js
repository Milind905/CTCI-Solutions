var Node = require("./Nodes");

function SinglyLinkedList() {
	this.head = null;
	this.length = 0;
}

/*
Add a node to the end of the list
Time Complexity: O(length)
*/
SinglyLinkedList.prototype.append = function(data) {
	var tail = new Node(data);
	var node = this.head;

	if (this.head === null) {
		this.head = tail;
	} else {
		while (node.next !== null) {
			node = node.next;
		}
		node.next = tail;
	}
	this.length++;
	return this;
};

/*
Remove a node from the list given its value
Time Complexity: O(length)
*/
SinglyLinkedList.prototype.remove = function(data) {
	var node = this.head;

	if (this.head === null) {
		return this;
	}
	if (this.head.data === data) {
		this.head = this.head.next;
		this.length--;
		return this;
	}

	while (node.next !== null) {
		if (node.next.data === data) {
			node.next = node.next.next;
			this.length--;
			return this;
		}
		node = node.next;
	}
	return this; //Node not found so not deleted
};

/*
Search for a node based on its position (0-based) and return its data
Time Complexity: O(length)
*/
SinglyLinkedList.prototype.searchForNode = function(position) {
	if (position < 0) {
		throw new Error("Position must be a positive integer");
	}
	if (position >= this.length) {
		return null;
	}
	var node = this.head;
	for (var i = 0; i < position; i++) {
		node = node.next;
	}
	return node;
};

/*
Print the LinkedList in an easy to read format
Time Complexity: O(length)
*/
SinglyLinkedList.prototype.toString = function() {
	var node = this.head;
	var outputString = "";
	if (this.head === null) {
		return "Empty";
	}

	while (node !== null) {
		if (node.next === null) {
			outputString += "[" + node.data + "]";
		} else {
			outputString += "[" + node.data + "]-->";
		}
		node = node.next;
	}
	return outputString;
};

module.exports = SinglyLinkedList;