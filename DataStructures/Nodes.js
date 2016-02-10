function Node(d) {
	if (d === null || d === undefined) {
		throw new Error("Cannot create an empty node");
	}

	this.next = null;
	this.data = d;
}

Node.prototype.toString = function() {
	return "[" + this.data + "]";
};

Node.prototype.equals = function(node) {
	if (this.next !== node.next) {
		return false;
	} else if (this.data !== node.data) {
		return false;
	} else {
		return true;
	}
};
module.exports = Node;