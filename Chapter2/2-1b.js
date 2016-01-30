/*
Question
Write code to remove duplicates from an unsorted linked list.
How would you solve this problem if a temporary buffer is not allowed?
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

	var p1 = list.head;
	var p2 = list.head;

	while (p1.next !== null) {
		p2 = p1.next;
		if (p2.data === p1.data) {
			p1.next = p2.next;
		} else {
			while (p2.next !== null) {
				if (p2.next.data === p1.data) {
					p2.next = p2.next.next;
				} else {
					p2 = p2.next;
				}
			}
			p1 = p1.next;
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
console.log(list.toString());
removeDuplicates(list);
console.log(list.toString());

list = new LinkedList();
list.append(5);
list.append(4);
list.append(5);
list.append(4);
list.append(4);
list.append(3);
console.log(list.toString());
removeDuplicates(list);
console.log(list.toString());

list = new LinkedList();
console.log(list.toString());
removeDuplicates(list);
console.log(list.toString());


/*
Analysis
Space complexity: O(1) 
Time complexity: O(N^2) - where N is the length of the linkedlist
*/