var TreeNode = require("./TreeNode");
var Stack = require("./Stack");

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.insert = function(data) {
	if (data === null || data === undefined) {
		return;
	}

	var addNode = new TreeNode(data);
	var node = this.root;
	var parent = null;
	if (this.root === null) {
		this.root = addNode;
		return;
	}

	while (node !== null) {
		parent = node;
		if (data <= node.data) {
			node = node.left;
		} else {
			node = node.right;
		}
	}

	if (data <= parent.data) {
		parent.left = addNode;
	} else {
		parent.right = addNode;
	}
	addNode.parent = parent;
};

BinarySearchTree.prototype.search = function(k) {
	if (this.root === null) {
		return false;
	}

	var node = this.root;
	while (node !== null && k !== node.data) {
		if (k < node.data) {
			node = node.left;
		} else {
			node = node.right;
		}
	}
	if (node === null) {
		return false;
	} else {
		return true;
	}
};

BinarySearchTree.prototype.getMin = function(node) {
	while (node.left !== null) {
		node = node.left;
	}
	return node;
};

BinarySearchTree.prototype.getMax = function(node) {
	while (node.right !== null) {
		node = node.right;
	}
	return node;
};

BinarySearchTree.prototype.inOrderTraversal = function(node) {
	if (node === null || node === undefined) {
		return;
	} else {
		this.inOrderTraversal(node.left);
		console.log(node.data + "->");
		this.inOrderTraversal(node.right);
	}
};

BinarySearchTree.prototype.inOrderTraversalNoRecursion = function() {
	if(this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	while(node !== null) {
		if(node.left && !node.left.travelled) {
			node = node.left;
			continue;
		}
		if(!node.travelled) {
			console.log(node.data);
			node.travelled = true;
		}
		if(node.right && !node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
}

BinarySearchTree.prototype.preOrderTraversal = function(node) {
	if (node === null) {
		return;
	} else {
		console.log(node.data + "->");
		this.preOrderTraversal(node.left);
		this.preOrderTraversal(node.right);
	}
};

BinarySearchTree.prototype.preOrderTraversalNoRecursion = function() {
	if (this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	while (node !== null) {
		if (!node.printed) {
			console.log(node.data);
			node.printed = true;
		}

		if (node.left && !node.left.printed) {
			node = node.left;
		}
		else if(node.right && !node.right.printed) {
			node = node.right;
		}
		else {
			node = node.parent;
		}
	}
};

BinarySearchTree.prototype.postOrderTraversal = function(node) {
	if (node === null) {
		return;
	} else {
		this.postOrderTraversal(node.left);
		this.postOrderTraversal(node.right);
		console.log(node.data + "->");
	}
};

BinarySearchTree.prototype.postOrderTraversalNoRecursion = function() {
	if (this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	var myStack = new Stack();
	while (node !== null) {
		myStack.push(node.data);
		if (node.left !== null && !node.left.traveled) {
			node = node.left;
		} else if (node.right !== null && !node.right.traveled) {
			node = node.right;
		} else {
			console.log(myStack.pop());
			node.traveled = true;
			node = node.parent;
		}
	}
};

BinarySearchTree.prototype.getSuccessor = function(node) {
	if (node.right !== null) {
		return this.getMin(node.right);
	}

	var parent;
	while (node !== null) {
		parent = node.parent;
		if (!parent) {
			break;
		}
		if (parent.left.equals(node)) {
			break;
		} else {
			node = parent;
			parent = parent.parent;
		}
	}
	return parent;
};

BinarySearchTree.prototype.getPredecessor = function(node) {
	if (node.left !== null) {
		return this.getMax(node.left);
	}

	var parent;
	while (node !== null) {
		parent = node.parent;
		if (!parent) {
			break;
		}
		if (parent.right.equals(node)) {
			break;
		} else {
			node = parent;
			parent = parent.parent;
		}
	}
	return parent;
};

BinarySearchTree.prototype.delete = function(z) {
	if (!z) {
		return;
	}

	if (z.left !== null && z.right !== null) {
		var y = this.getSuccessor(z);
		if (!(z.equals(y.parent))) {
			switchNodes(this, y, y.right);
			y.right = z.right;
			y.right.parent = y;
		}
		switchNodes(this, z, y);
		y.left = z.left;
		y.left.parent = y;
	} else if (z.left === null && z.right === null) {
		var y = z.parent;
		if (!y) {
			z = null;
			return;
		}
		if (z.equals(y.left)) {
			y.left = null;
		} else {
			y.right = null;
		}
	} else if (z.left === null) {
		switchNodes(this, z, z.right);
	} else {
		switchNodes(this, z, z.left);
	}
};

BinarySearchTree.prototype.toString = function() {
	if (this.root === null) {
		console.log("EMPTY");
	} else {
		this.inOrderTraversal(this.root);
	}
};

function switchNodes(Tree, u, v) {
	if (u.parent === null) {
		Tree.root = null;
		return;
	} else if (u.equals(u.parent.left)) {
		u.parent.left = v;
	} else {
		u.parent.right = v;
	}
	if (v !== null) {
		v.parent = u.parent;
	}
}

module.exports = BinarySearchTree;

/*
var myTree = new BinarySearchTree();
console.log("PRINTING MY TREE");
myTree.toString();
myTree.insert(15);
myTree.insert(8);
myTree.insert(25);
myTree.insert(6);
myTree.insert(4);
myTree.insert(10);
myTree.insert(11);
myTree.insert(14);
myTree.insert(20);
myTree.insert(36);
console.log("PRINTING MY TREE");
myTree.toString();
console.log("Tree min: ", myTree.getMin(myTree.root).data);
console.log("Tree max: ", myTree.getMax(myTree.root).data);
console.log("Search 10: ", myTree.search(10));
console.log("Search 21: ", myTree.search(21));
console.log("IN ORDER TRAVERSAL");
myTree.inOrderTraversal(myTree.root);
console.log("IN ORDER TRAVERSAL NO RECURSION");
myTree.inOrderTraversalNoRecursion();
console.log("PRE ORDER TRAVERSAL");
myTree.preOrderTraversal(myTree.root);
console.log("PRE ORDER TRAVERSAL NO RECURSION");
myTree.preOrderTraversalNoRecursion();
console.log("POST ORDER TRAVERSAL");
myTree.postOrderTraversal(myTree.root);
console.log("POST ORDER TRAVERSAL NO RECURSION");
myTree.postOrderTraversalNoRecursion();
console.log("Successor to root: ", myTree.getSuccessor(myTree.root).data);
console.log("Successor to 6: ", myTree.getSuccessor(myTree.root.left.left).data);
console.log("Predecessor to root: ", myTree.getPredecessor(myTree.root).data);
console.log("Predecessor to 20: ", myTree.getPredecessor(myTree.root.right.left).data);
console.log("Predecessor to 11: ", myTree.getPredecessor(myTree.root.left.right.right).data);
console.log("Delete node 6: ");
myTree.delete(myTree.root.left.left);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 4: ");
myTree.delete(myTree.root.left.left);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 8: ");
myTree.delete(myTree.root.left);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 25: ");
myTree.delete(myTree.root.right);
console.log("PRINTING MY TREE");
myTree.toString();

var myTree = new BinarySearchTree();
myTree.insert(15);
myTree.insert(8);
myTree.insert(25);
myTree.insert(6);
myTree.insert(4);
myTree.insert(13);
myTree.insert(10);
myTree.insert(11);
myTree.insert(20);
myTree.insert(36);
console.log("PRINTING MY TREE");
myTree.toString();


console.log("Delete node 8: ");
myTree.delete(myTree.root.left);
console.log("PRINTING MY TREE");
myTree.toString();
*/