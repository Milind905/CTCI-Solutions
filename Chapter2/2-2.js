/*
Question
Implement an algorithm to find the kth to last element of a singly linked list.
*/

/*
My clarification questions and assumptions
1) Is it a circular linked list? No
*/
var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function kLastNode(head, k) {
	if (k <= 0) {
		throw ("K must be a non-zero positive integer");
	}

	var length = 0;
	var node = head;
	while (node !== null) {
		length += 1;
		node = node.next;
	}

	node = head;
	if (k > length) {
		throw ("Must specify a lower K value");
	}
	console.log("length: "+length);
	for (var counter = 0; counter < (length - k); counter++) {
		node = node.next;
	}
	return node.data;
}

var head = new LinkedList(15);
head.appendToTail(14);
head.appendToTail(290);
head.appendToTail(544);
head.appendToTail(-1);
head.appendToTail(0);
head.appendToTail(14);
console.log(head.toString());
console.log(kLastNode(head, 4));


/*
Analysis
Space complexity: O(1) 
Time complexity: O(N) - where N is the length of the linkedlist
*/