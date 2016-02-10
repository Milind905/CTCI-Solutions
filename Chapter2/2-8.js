/*
Question
Insert a node into a circular singly linked list that is sorted from
smallest to largest. Insertion must maintain this ordering. The function
gets as input the value to insert and a RANDOM node from the linked list.
- this question is not from the CTCI book

My clarification questions and assumptions
1) Do I have a reference to the linked list? No
*/

var Node = require("../DataStructures/Nodes.js");
var CircularLinkedList = require("../DataStructures/CircularLinkedList.js");

CircularLinkedList.prototype.insertOrdered = function(value, myNode) {
	var newNode = new Node(value);

	while (myNode.data <= myNode.next.data) {
		myNode = myNode.next;
	}
	//Found end of list
	if (newNode.data > myNode.data) {
		myInsert(newNode, myNode);
	} else if (newNode.data < myNode.next.data) {
		this.head = newNode;
		myInsert(newNode, myNode);
	} else {
		//get start of list
		myNode = myNode.next;
		while (myNode.next.data < newNode.data) {
			myNode = myNode.next;
		}
		myInsert(newNode, myNode);
	}
	this.length++;
};


function myInsert(newNode, prevNode) {
	var nextNode = prevNode.next;
	prevNode.next = newNode;
	newNode.next = nextNode;
}


var theList = new CircularLinkedList();
console.log(theList.toString());
theList.insert(10);
theList.insert(13);
theList.insert(15);
theList.insert(16);
theList.insert(19);
theList.insert(21);
console.log(theList.toString());
theList.insertOrdered(11, theList.head.next.next);
console.log(theList.toString());
theList.insertOrdered(9, theList.head.next.next);
console.log(theList.toString());
theList.insertOrdered(25, theList.head.next.next);
console.log(theList.toString());


/*
Analysis
Space complexity: O(1)
Time complexity: O(2n) where n is the size of the linked list
*/