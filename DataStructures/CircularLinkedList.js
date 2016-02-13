var Node = require("./Nodes");

function CircularLinkedList() {
	this.head = null;
	this.length = 0;
}

/*
Add a node to the end of the list
Time Complexity: O(n)
*/
CircularLinkedList.prototype.insert = function(data) {
	var newNode = new Node(data);

	if (!data) {
		throw new Error("Invalid input data");
	}

	if (this.length === 0) {
		this.head = newNode;
	}

	var node = this.head;
	for (var i = 0; i < (this.length - 1); i++) {
		node = node.next;
	}

	node.next = newNode;
	newNode.next = this.head;
	this.length++;
};

/*
Delete a node (based on its value)
Time Complexity: O(n)
*/
CircularLinkedList.prototype.delete = function(data) {
	if (!data) {
		throw new Error("Invalid input data");
	}

	var node = this.head;
	var parent = null;
	var counter = 0;

	if (this.length === 0) {
		return null;
	}

	for (var i = 0; i <= this.length; i++) {
		parent = node;
		node = node.next;
		if (node.data === data) {
			this.length--;
			if (node.equals(this.head)) {
				this.head = this.head.next;
			}
			return actuallyDelete(parent);
		}
	}

	return null;
};

/*
Removes all references to the node in the linked list
Time Complexity: O(1)
*/
function actuallyDelete(prevNode) {
	var toReturn = prevNode.next;
	prevNode.next = toReturn.next;
	return toReturn;
}

/*
Prints the linked list in an easy to read format
Time Complexity: O(n)
*/
CircularLinkedList.prototype.toString = function() {
	if (this.length === 0) {
		return "EMPTY";
	}

	var returnString = "";
	var node = this.head;
	for (var i = 0; i < this.length; i++) {
		returnString += "[" + node.data + "]-->";
		node = node.next;
	}

	return returnString;
};

module.exports = CircularLinkedList;

/*var myList = new CircularLinkedList();
console.log(myList.toString());
myList.insert(10);
myList.insert(13);
myList.insert(15);
myList.insert(16);
myList.insert(19);
myList.insert(21);
console.log(myList.toString());
console.log("Delete 13: ", myList.delete(13).toString());
console.log(myList.toString());
console.log("Delete 21: ", myList.delete(21).toString());
console.log(myList.toString());
console.log("Delete 10: ", myList.delete(10).toString());
console.log(myList.toString());
console.log("Delete 15: ", myList.delete(15).toString());
console.log(myList.toString());
console.log("Delete 19: ", myList.delete(19).toString());
console.log(myList.toString());
console.log("Delete 16: ", myList.delete(16).toString());
console.log(myList.toString());*/