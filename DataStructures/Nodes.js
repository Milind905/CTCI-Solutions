function Node(d) {
	if (d === null || d === undefined) {
		throw new Error("Cannot create an empty node");
	}

	this.next = null;
	this.data = d;
}

/*
Returns the node in an easy to read format
Time Complexity: O(1)
*/
Node.prototype.toString = function() {
	return "[" + this.data + "]";
};

/*
Checks if a this node is equal to another node
Time Complexity: O(1)
*/
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