/*
Question
Implement an algorithm to delete a node in the middle of a singly linked list,
given only access to that node.


My clarification questions and assumptions
1) Do I have a reference to any previous nodes? No
2) Is it a circular linked list? No
*/

var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function deleteNode(n) {
	if (!n) {
		throw new Error("Cannot delete an empty node");
	}
	if(!n.hasOwnProperty("next") || !n.hasOwnProperty("data")){
		throw new Error("Input must be a node");
	}

	//Only issue is, the length of the linkedlist will be wrong now
	if (n.next === null) {
		n = null;
		return true;
	} else {
		n.data = n.next.data;
		n.next = n.next.next;
		return true;
	}
}


var list = new LinkedList();
list.append(4);
list.append(25);
list.append(5);
list.append(55);
list.append(9090);
list.append(5);
console.log(list.toString());
if (deleteNode(list.head.next.next)) {
	console.log(list.toString());
}

/*
Analysis
Space complexity: O(1) 
Time complexity: O(1)
*/