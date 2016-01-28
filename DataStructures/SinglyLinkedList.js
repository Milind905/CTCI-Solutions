/*
This is not the best implementation. Using this because
this is how they did it in the CTCI book.
*/

function Node(d) {
	this.next = null;
	this.data = d;
}

Node.prototype.appendToTail = function(d) {
	var tail = new Node(d);
	var n = this;

	while (n.next !== null) {
		n = n.next;
	}
	n.next = tail;
};

Node.prototype.deleteNode = function(d) {
	var n = this;

	if (n.data === d) {
		return this.next; //head deleted
	}

	while (n.next !== null) {
		if (n.next.data === d) {
			n.next = n.next.next; //node deleted
			return this;
		}
		n = n.next;
	}
	return this; //Node not found so not deleted
};

Node.prototype.toString = function() {
	if (!this || this.data === null) {
		return "EMPTY";
	}

	var outputString = "";
	var n = this;
	while (n.data !== null) {
		if (n.next === null) {
			outputString += "[" + n.data + "]";
			break;
		} else {
			outputString += "[" + n.data + "]-->";
		}
		n = n.next;
	}

	return outputString;
};

module.exports = Node;