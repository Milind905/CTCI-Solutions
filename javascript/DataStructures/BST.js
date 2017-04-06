var TreeNode = require("./TreeNode");
var Stack = require("./Stack");

function BinarySearchTree() {
	this.root = null;
}

/*
Insert a node into the BST
Time Complexity: O(n)
*/
BinarySearchTree.prototype.insert = function(data) {
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

/*
Find a node given its value
Time Complexity: O(n)
*/
BinarySearchTree.prototype.search = function(k) {
	if (this.root === null) {
		return null;
	}

	var node = this.root;
	while (node !== null && k !== node.data) {
		if (k < node.data) {
			node = node.left;
		} else {
			node = node.right;
		}
	}

	return node;
};

/*
Return the minimum value in the BST
Time Complexity: O(n)
*/
BinarySearchTree.prototype.getMin = function(node) {
	if (!this.root) {
		return null;
	}

	if (!node) {
		node = this.root;
	}

	while (node.left !== null) {
		node = node.left;
	}
	return node;
};

/*
Return the maximum value in the BST
Time Complexity: O(n)
*/
BinarySearchTree.prototype.getMax = function(node) {
	if (!this.root) {
		return null;
	}

	if (!node) {
		node = this.root;
	}

	while (node.right !== null) {
		node = node.right;
	}
	return node;
};

/*
Print the tree using in order traversal (Left -> Node -> Right)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.inOrderTraversal = function(node) {
	if (!node) {
		return;
	} else {
		this.inOrderTraversal(node.left);
		console.log(node.toString());
		this.inOrderTraversal(node.right);
	}
};

/*
Print the tree using in order traversal without recursion(Left -> Node -> Right)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.inOrderTraversalNoRecursion = function() {
	if (this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	while (node !== null) {
		node.travelled = false;
		if (node.left && node.left.travelled) {
			node = node.left;
		} else if (node.right && node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
	node = this.root;

	while (node !== null) {
		if (node.left && !node.left.travelled) {
			node = node.left;
			continue;
		}
		if (!node.travelled) {
			console.log(node.toString());
			node.travelled = true;
		}
		if (node.right && !node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
};

/*
Print the tree using pre order traversal (Node -> Left -> Right)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.preOrderTraversal = function(node) {
	if (!node) {
		return;
	} else {
		console.log(node.toString());
		this.preOrderTraversal(node.left);
		this.preOrderTraversal(node.right);
	}
};

/*
Print the tree using pre order traversal without recursion (Node -> Left -> Right)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.preOrderTraversalNoRecursion = function() {
	if (this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	while (node !== null) {
		node.travelled = false;
		if (node.left && node.left.travelled) {
			node = node.left;
		} else if (node.right && node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
	node = this.root;

	while (node !== null) {
		if (!node.travelled) {
			console.log(node.toString());
			node.travelled = true;
		}

		if (node.left && !node.left.travelled) {
			node = node.left;
		} else if (node.right && !node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
};

/*
Print the tree using post order traversal (Left -> Right -> Node)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.postOrderTraversal = function(node) {
	if (!node) {
		return;
	} else {
		this.postOrderTraversal(node.left);
		this.postOrderTraversal(node.right);
		console.log(node.toString());
	}
};

/*
Print the tree using post order traversal without recursion (Left -> Right -> Node)
Time Complexity: O(n)
*/
BinarySearchTree.prototype.postOrderTraversalNoRecursion = function() {
	if (this.root === null) {
		return "EMPTY";
	}

	var node = this.root;
	while (node !== null) {
		node.travelled = false;
		if (node.left && node.left.travelled) {
			node = node.left;
		} else if (node.right && node.right.travelled) {
			node = node.right;
		} else {
			node = node.parent;
		}
	}
	node = this.root;

	while (node !== null) {
		if (node.left !== null && !node.left.travelled) {
			node = node.left;
		} else if (node.right !== null && !node.right.travelled) {
			node = node.right;
		} else {
			console.log(node.toString());
			node.travelled = true;
			node = node.parent;
		}
	}
};

/*
Find the successor of a node
Time Complexity: O(n)
*/
BinarySearchTree.prototype.getSuccessor = function(k) {
	var node = this.search(k);
	if (!node || !k) {
		return null;
	}

	//If it has a right subtree, get the smallest value in right subtree
	if (node.right !== null) {
		return this.getMin(node.right);
	}

	//Otherwise find the first ancestor that has the node in its left subtree
	var parent = null;
	while (node !== null) {
		parent = node.parent;
		if (!parent) {
			return null;
		}
		if (parent.left.equals(node)) {
			return parent;
		} else {
			node = parent;
		}
	}
	return null;
};

/*
Find the predecessor of a node
Time Complexity: O(n)
*/
BinarySearchTree.prototype.getPredecessor = function(k) {
	var node = this.search(k);
	if (!node || !k) {
		return null;
	}

	//If it has a left subtree, get the largest value in its left subtree
	if (node.left !== null) {
		return this.getMax(node.left);
	}

	var parent;
	while (node !== null) {
		parent = node.parent;
		if (!parent) {
			return null;
		}
		if (parent.right.equals(node)) {
			return parent;
		} else {
			node = parent;
			parent = parent.parent;
		}
	}
	return null;
};

/*
Delete a node given its value
Time Complexity: O(n)
*/
BinarySearchTree.prototype.delete = function(k) {
	if (!k) {
		throw new Error("Invalid input value");
	}

	var z = this.search(k);
	if (!z) {
		return null;
	}

	//If z has two children, get its successor (must exist b/c z has a right subtree)
	if (z.left !== null && z.right !== null) {
		var y = this.getSuccessor(z.data);
		//If z is not the direct parent of y then swap y with its own right child
		//y will never have a left child (b/c y is the successor)
		if (!(z.equals(y.parent))) {
			switchNodes(this, y, y.right);
			y.right = z.right;
			y.right.parent = y;
		}
		//Swap y and z, giving y the left subtree of z
		switchNodes(this, z, y);
		y.left = z.left;
		y.left.parent = y;
	}
	//If z has no children, then simply set its parent pointer to null
	else if (z.left === null && z.right === null) {
		var y = z.parent;
		if (!y) {
			this.root = null;
		} else if (y.left && z.equals(y.left)) {
			y.left = null;
		} else {
			y.right = null;
		}
	}
	//If z has only a right child, swap it with its right child
	else if (z.left === null) {
		switchNodes(this, z, z.right);
	}
	//If z has only a left child, swap it with its left child
	else {
		switchNodes(this, z, z.left);
	}

	return z;
};

/*
Helper function to swap two nodes  
Time Complexity: O(1)
*/
function switchNodes(Tree, u, v) {
	if (u.parent === null) {
		if (v) {
			Tree.root = v;
		} else {
			Tree.root = null;
			return;
		}
	} else if (u.equals(u.parent.left)) {
		u.parent.left = v;
	} else {
		u.parent.right = v;
	}
	if (v !== null) {
		v.parent = u.parent;
	}
}

/*
Prints the tree in an easy to read format
Time Complexity: O(n)
*/
BinarySearchTree.prototype.toString = function() {
	if (this.root === null) {
		console.log("EMPTY");
	} else {
		this.inOrderTraversal(this.root);
	}
};

module.exports = BinarySearchTree;


/*var myTree = new BinarySearchTree();
console.log("PRINTING MY TREE");
myTree.toString();
//myTree.delete();
console.log(myTree.delete(15));
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
console.log("Tree min: ", myTree.getMin(myTree.root).toString());
console.log("Tree max: ", myTree.getMax(myTree.root).toString());
console.log("Search 10: ", myTree.search(10).toString());
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
console.log("Successor to root: ", myTree.getSuccessor(15).toString());
console.log("Successor to 6: ", myTree.getSuccessor(6).toString());
console.log("Successor to 10: ", myTree.getSuccessor(10).toString());
console.log("Predecessor to root: ", myTree.getPredecessor(15).toString());
console.log("Predecessor to 20: ", myTree.getPredecessor(20).toString());
console.log("Predecessor to 11: ", myTree.getPredecessor(11).toString());
console.log("Delete node 6: ");
myTree.delete(6);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 4: ");
myTree.delete(4);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 8: ");
myTree.delete(8);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 25: ");
myTree.delete(25);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 15: ");
myTree.delete(15);
console.log("PRINTING MY TREE");
myTree.toString();
console.log("Current root: ", myTree.root.toString());

console.log("Delete node 36: ");
myTree.delete(36);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 10: ");
myTree.delete(10);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 14: ");
myTree.delete(14);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 20: ");
myTree.delete(20);
console.log("PRINTING MY TREE");
myTree.toString();

console.log("Delete node 11: ");
myTree.delete(11);
console.log("PRINTING MY TREE");
myTree.toString();*/