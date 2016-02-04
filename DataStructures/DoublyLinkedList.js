var Node = require("./DoublyNodes");

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

/*
Add a node to the end of the list
Time Complexity: O(1)
*/
DoublyLinkedList.prototype.append = function(data) {
	var myNode = new Node(data);

	if (this.length === 0) {
		this.head = myNode;
		this.tail = myNode;
	} else {
		var prevTail = this.tail;
		prevTail.next = myNode;
		myNode.prev = prevTail;
		this.tail = myNode;
	}
	this.length++;
};

/*
Remove a node from the list given its value
Time Complexity: O(length)
*/
DoublyLinkedList.prototype.remove = function(data) {
	if (this.head === null || this.tail === null) {
		return null;
	}

	//This looks ugly AF, will refactor later
	var toRemove = null;
	if (this.head.data === data) {
		toRemove = this.head;
		this.head = this.head.next;
		if(this.head === null) {
			this.tail = null;
		} else {
			this.head.prev = null;
		}
	} else if(this.tail.data === data) {
		toRemove = this.tail;
		this.tail = this.tail.prev;
		if(this.tail === null) {
			this.head = null;
		} else {
			this.tail.next = null;
		}
	} else {
		var node = this.head;
		while(node !== null){
			if(node.data === data) {
				toRemove = node;
				var prevNode = node.prev;
				var nextNode = node.next;
				prevNode.next = nextNode;
				nextNode.prev = prevNode;
			}
			node = node.next;
		}
	}

	this.length--;
	if(toRemove !== null){
		return toRemove.data;
	} else {
		return null;
	}
};

/*
Search for a node based on its position (0-based) and return its data
Time Complexity: O(length)
*/
DoublyLinkedList.prototype.searchForNode = function(position) {
	if (position < 0 || position >= this.length) {
		throw new Error("Invalid position");
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
DoublyLinkedList.prototype.toString = function() {
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

module.exports = DoublyLinkedList;


var myDoublyLinkedList = new DoublyLinkedList();
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.append(20);
myDoublyLinkedList.append(50);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(50);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(20);
console.log(myDoublyLinkedList.toString());

myDoublyLinkedList.append(30);
myDoublyLinkedList.append(24);
myDoublyLinkedList.append(54);
myDoublyLinkedList.append(87);
myDoublyLinkedList.append(12);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(24);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(54);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(12);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(87);
console.log(myDoublyLinkedList.toString());
myDoublyLinkedList.remove(30);
console.log(myDoublyLinkedList.toString());