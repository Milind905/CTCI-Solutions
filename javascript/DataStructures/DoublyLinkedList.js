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
Time Complexity: O(n)
*/
DoublyLinkedList.prototype.remove = function(data) {
	if (!data) {
		throw new Error("No input data");
	}

	if (this.head === null || this.tail === null) {
		return null;
	}

	var toRemove = null;
	if (this.head.data === data) {
		toRemove = this.head;
		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		}
	}
	if (this.tail.data === data) {
		toRemove = this.tail;
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		}
	} else {
		var node = this.head;
		while (node !== null && node.data !== data) {
			node = node.next;
		}
		if (node) {
			toRemove = node;
			var prevNode = node.prev;
			var nextNode = node.next;
			prevNode.next = nextNode;
			nextNode.prev = prevNode;
		}
	}

	if (toRemove) {
		this.length--;
		return toRemove;
	} else {
		return null;
	}
};

/*
Search for a node based on its data, return node
Time Complexity: O(n)
*/
DoublyLinkedList.prototype.search = function(data) {
	if (!data) {
		throw new Error("No data specified");
	}

	var node = this.head;
	if (!node) {
		return null;
	}
	while (node !== null) {
		if (node.data === data) {
			return node;
		}
		node = node.next;
	}

	return null;
};


/*
Search for a node based on its position (0-based) and return its data
Time Complexity: O(n)
*/
DoublyLinkedList.prototype.searchWithIndex = function(position) {
	if (position === undefined || position === null || position < 0) {
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
Time Complexity: O(n)
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


/*var myList = new DoublyLinkedList();
console.log(myList.toString());
console.log(myList.toString());
console.log(myList.search(12));
console.log(myList.searchWithIndex(12));
console.log(myList.remove(6));
//console.log(myList.remove())
//console.log(myList.search());
//console.log(myList.searchWithIndex());
//console.log(myList.searchWithIndex(-2));
myList.append(12);
myList.append(21);
myList.append(13);
myList.append(11);
myList.append(7);
console.log(myList.toString());
console.log(myList.search(22));
console.log(myList.search(12).toString());
console.log(myList.search(7).toString());
console.log(myList.search(13).toString());
console.log(myList.searchWithIndex(0).toString());
console.log(myList.searchWithIndex(myList.length-1).toString());
console.log(myList.searchWithIndex(3).toString());
console.log(myList.toString());
console.log(myList.remove(7).toString());
console.log(myList.remove(12).toString());
console.log(myList.remove(11).toString());
console.log(myList.remove(13).toString());
console.log(myList.remove(21).toString());
console.log(myList.toString());
myList.append(12);
myList.append(21);
myList.append(13);
myList.append(11);
myList.append(7);
console.log(myList.toString());*/