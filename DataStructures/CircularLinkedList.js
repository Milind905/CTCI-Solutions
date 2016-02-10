var Node = require("./Nodes");

function CircularLinkedList() {
	this.head = null;
	this.length = 0;
}

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

CircularLinkedList.prototype.delete = function(data) {
	if (!data) {
		throw new Error("Invalid input data");
	}

	var node = this.head;
	var counter = 0;

	if (this.length === 0) {
		return null;
	}

	while (counter <= this.length) {
		if (node.next.data === data) {
			this.length--;
			if (node.next.equals(this.head)) {
				this.head = this.head.next;
			}
			return actuallyDelete(node);
		} else {
			node = node.next;
		}
		counter++;
	}

	return null;
};

function actuallyDelete(prevNode) {
	var toReturn = prevNode.next;
	var newNext = prevNode.next.next;
	prevNode.next = newNext;
	return toReturn.toString();
}

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
console.log(myList.toString());
myList.insert(13);
console.log(myList.toString());
myList.insert(15);
myList.insert(16);
myList.insert(19);
myList.insert(21);
console.log(myList.toString());
console.log("Delete 13: ", myList.delete(13));
console.log(myList.toString());
console.log("Delete 21: ", myList.delete(21));
console.log(myList.toString());
console.log("Delete 10: ", myList.delete(10));
console.log(myList.toString());
console.log("Delete 15: ", myList.delete(15));
console.log(myList.toString());
console.log("Delete 19: ", myList.delete(19));
console.log(myList.toString());
console.log("Delete 16: ", myList.delete(16));
console.log(myList.toString());*/