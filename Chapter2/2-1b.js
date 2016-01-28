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


function removeDuplicates(head) {
	if (head.data === null) {
		return head;
	}

	var p1 = head;
	var p2 = head;

	while(p1.next !== null){
		p2 = p1.next;
		if(p2.data === p1.data){
			p1.next = p2.next;
		}
		else {
			while(p2.next !== null){
				if(p2.next.data === p1.data){
					p2.next = p2.next.next;
				}
				else {
					p2 = p2.next;
				}
			}
			p1 = p1.next;
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
Space complexity: O(1) 
Time complexity: O(N^2) - where N is the length of the linkedlist
*/