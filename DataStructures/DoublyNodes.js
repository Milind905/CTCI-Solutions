function DoubleNode(d) {
	if (!d) {
		throw new Error("Cannot create an empty node");
	}

	this.next = null;
	this.prev = null;
	this.data = d;
}

DoubleNode.prototype.toString = function() {
	return "[" + this.data + "]";
};

DoubleNode.prototype.equals = function(node) {
	if (this.data !== node.data) {
		return false;
	} else if (this.next !== node.next) {
		return false;
	} else if (this.prev !== node.prev) {
		return false;
	} else {
		return true;
	}
};

module.exports = DoubleNode;