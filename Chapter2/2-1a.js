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


function removeDuplicates(list) {
	if (list.head === null) {
		return;
	}
	var node = list.head;
	var myList = [];
	myList.push(node.data);

	while (node.next !== null) {
		if (myList.indexOf(node.next.data) > -1) {
			node.next = node.next.next;
			list.length--;
		} else {
			myList.push(node.next.data);
			node = node.next;
		}
	}
}



var list = new LinkedList();
list.append(15);
list.append(14);
list.append(290);
list.append(544);
list.append(-1);
list.append(0);
list.append(14);
console.log(list.toString(), "length: ", list.length);
removeDuplicates(list);
console.log(list.toString(), "length: ", list.length);

list = new LinkedList();
list.append(5);
list.append(4);
list.append(5);
list.append(4);
list.append(4);
list.append(3);
console.log(list.toString(), "length: ", list.length);
removeDuplicates(list);
console.log(list.toString(), "length: ", list.length);

list = new LinkedList();
console.log(list.toString(), "length: ", list.length);
removeDuplicates(list);
console.log(list.toString(), "length: ", list.length);
/*
Analysis
Space complexity: O(n) where n = length of linked list
Time complexity: O(n) - assuming indexOf is a constant time function
*/