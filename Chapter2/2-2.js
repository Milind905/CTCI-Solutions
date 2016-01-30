/*
Question
Implement an algorithm to find the kth to last element of a singly linked list.
*/

/*
My clarification questions and assumptions
1) Is it a circular linked list? No
2) Can I use the length property? Yes
*/
var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function kthLastNode(list, k) {
	if (k <= 0) {
		throw new Error("K must be a non-zero positive integer");
	}
	if (k > list.length) {
		return null;
	}
	if (list.head === null) {
		return null;
	}

	node = list.head;
	for (var counter = 0; counter < (list.length - k); counter++) {
		node = node.next;
	}
	return node.data;
}

var list = new LinkedList();
list.append(15);
list.append(14);
list.append(290);
list.append(544);
list.append(-1);
list.append(0);
list.append(14);
console.log(list.toString());
console.log(kthLastNode(list, 4));

/*
Analysis
Space complexity: O(1) 
Time complexity: O(N) - where N is the length of the linkedlist
*/