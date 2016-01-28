/*
Question
Write code to remove duplicates from an unsorted linked list.
*/

/*
My clarification questions and assumptions
1) Is it a singly linked list or doubly linked list? Singly
2) Is it a circular linked list? No
*/

var LinkedList = require("../DataStructures/SinglyLinkedList.js");


function removeDuplicates(head) {
	if (head.data === null) {
		return head;
	}

	var list = [];
	list.push(head.data);
	var node = head;

	while (node.next !== null) {
		if (list.indexOf(node.next.data) > -1) {
			node.next = node.next.next;
		} else {
			list.push(node.next.data);
			node = node.next;
		}
	}
	return head;
}



var head = new LinkedList(15);
head.appendToTail(14);
head.appendToTail(290);
head.appendToTail(544);
head.appendToTail(-1);
head.appendToTail(0);
head.appendToTail(14);
console.log(head.toString());
console.log(removeDuplicates(head).toString());

var head = new LinkedList(5);
head.appendToTail(4);
head.appendToTail(5);
head.appendToTail(4);
head.appendToTail(4);
head.appendToTail(3);
console.log(head.toString());
console.log(removeDuplicates(head).toString());


/*
Analysis
Space complexity: O(n) where n = length of linked list
Time complexity: O(n) - assuming indexOf is a constant time function
*/