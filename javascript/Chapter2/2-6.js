/*
Question
Given a circular linked list, implement an algorithm which returns the node at
the beginning of the loop.


My clarification questions and assumptions
1) This is not a true circular linked list, this is a corrupt one.
2) This is a linked list with a loop somewhere in it: A->B->C->D->E->C(same)->D(same)->etc...
3) Can I assume each node has unique data? yes
	-- If each node doesn't have unique data, this can still be done, but the Underscore library is needed (for javascript)
*/
var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function findLoopStart(list) {
	if (list.head === null) {
		return null;
	}

	var nodeArray = [];
	var node = list.head;
	while (node !== null) {
		if (nodeArray.indexOf(node.data) > -1) {
			return node;
		}
		nodeArray.push(node.data);
		node = node.next;
	}
	return null; //No loop found
}

var list = new LinkedList();
list.append(4);
list.append(25);
list.append(5);
list.append(55);
list.append(20);
list.append(55);
list.append(20);
console.log(list.toString());
console.log(findLoopStart(list).toString());

/*
Analysis
Space complexity: O(N) where n is the length of the linked list
Time complexity: O(N) where n is the length of the linked list
*/