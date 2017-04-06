function TreeNode(data) {
	if (data === null || data === undefined) {
		throw new Error("Cannot create an empty node");
	}

	this.data = data;
	this.left = null;
	this.right = null;
	this.parent = null;
}

/*
Returns the node in an easy to read format
Time Complexity: O(1)
*/
TreeNode.prototype.toString = function() {
	return "[" + this.data + "]";
};

/*
Checks if a this node is equal to another node
Time Complexity: O(1)
*/
TreeNode.prototype.equals = function(node) {
	if (this.data !== node.data) {
		return false;
	} else if (this.left !== node.left) {
		return false;
	} else if (this.right !== node.right) {
		return false;
	} else if (this.parent !== node.parent) {
		return false;
	} else {
		return true;
	}
};

module.exports = TreeNode;