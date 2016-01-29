/*
Question
Implement an algorithm to delete a node in the middle of a singly linked list,
given only access to that node.
*/

/*
My clarification questions and assumptions
1) Do I have a reference to any previous nodes? No
2) Is it a circular linked list? No;
*/

var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function deleteNode(n) {
	if(n === null){
		return false;
	}

	//doesn't work - why??
	if(n.next === null){
		n = null;
		return true;
	}
	else {
		n.data = n.next.data;
		n.next = n.next.next;
		return true;
	}
}


var head = new LinkedList(15);
head.appendToTail(14);
head.appendToTail(290);
head.appendToTail(544);
head.appendToTail(-1);
head.appendToTail(0);
head.appendToTail(14);
console.log(head.toString());
if(deleteNode(head.next.next)){
	console.log(head.toString());
}

/*
Analysis
Space complexity: O(1) 
Time complexity: O(1)
*/