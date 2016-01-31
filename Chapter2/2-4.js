
/*
Question
Write code to partition a linked list around a value x, such that all nodes less than
x come before all nodes greater than or equal to x.


My clarification questions and assumptions
1) Can I use Dynamically resizing arrays? No
*/

var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function partitionList(list, x) {
	if (list.head === null) {
		return list;
	}

	var lessThanList = new LinkedList();
	var greaterThanList = new LinkedList();
	var node = list.head;

	while (node !== null) {
		if (node.data < x) {
			lessThanList.append(node.data);
		} else {
			greaterThanList.append(node.data);
		}
		node = node.next;
	}

	if (lessThanList.length === 0) {
		return greaterThanList;
	} else if (greaterThanList.length === 0) {
		return lessThanList;
	} else {
		var endOfLessList = lessThanList.searchForNode(lessThanList.length - 1);
		endOfLessList.next = greaterThanList.head;
		endOfLessList.length += greaterThanList.length;
		return lessThanList;
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
var splitList = partitionList(list, 20);
console.log(splitList.toString());

/*
Analysis
Space complexity: O(N) where n is the length of the linked list
Time complexity: O(N) where n is the length of the linked list
*/