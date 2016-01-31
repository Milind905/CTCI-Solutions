var Node = require("./Nodes");

function Queue() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

Queue.prototype.enqueue = function(data) {
	var myNode = new Node(data);
	if (this.length === 0) {
		this.head = myNode;
		this.tail = myNode;
	} else {
		this.tail.next = myNode;
		this.tail = myNode;
	}
	this.length++;
};

//Design decision to return just the data and not the entire object
Queue.prototype.dequeue = function() {
	if (this.length === 0) {
		return null;
	} else {
		var myNode = this.head;
		this.head = this.head.next;
		this.length--;
		return myNode.data;
	}
};

Queue.prototype.toString = function() {
	if (this.length === 0) {
		return "Empty";
	}
	var returnString = "";
	var node = this.head;
	while (node !== null) {
		if (node.next === null) {
			returnString += "[" + node.data + "]";
		} else {
			returnString += "[" + node.data + "]-->";
		}
		node = node.next;
	}
	return returnString;
};

module.exports = Queue;