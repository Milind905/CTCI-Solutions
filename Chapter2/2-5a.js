/*
Question
You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the Ts digit is at the
head of the list. Write a function that adds the two numbers and returns the sum
as a linked list.


My clarification questions and assumptions
1) Can I use Dynamically resizing arrays? No
2) Can I use a stack? Yes
*/

var LinkedList = require("../DataStructures/SinglyLinkedList.js");
var Stack = require("../DataStructures/Stack.js");

function sumLinkedLists(a, b) {
	if (a === null && b === null) {
		return 0;
	}

	var mainNode = a.head;
	var secondaryNode = b.head;
	var mainValue, secondaryValue;
	var result = 0;
	var carry = 0;
	var myStack = new Stack();

	while (mainNode !== null) {
		if (secondaryNode === null) {
			secondaryValue = 0;
		} else {
			secondaryValue = secondaryNode.data;
		}
		mainValue = mainNode.data;
		result = mainValue + secondaryValue + carry;
		if (result >= 10) {
			result = result % 10;
			carry = 1;
		} else {
			carry = 0;
		}

		myStack.push(result);

		if (mainNode.next) {
			mainNode = mainNode.next;
			if (secondaryNode) {
				secondaryNode = secondaryNode.next;
			}
		} else {
			if (secondaryNode && secondaryNode.next) {
				var temp = mainNode;
				mainNode = secondaryNode;
				secondaryNode = temp;
				mainNode = mainNode.next;
				secondaryNode = secondaryNode.next;
			} else {
				break;
			}
		}
	}

	myStack.push(carry);
	var returnValue = 0;
	while (myStack.length > 0) {
		returnValue += myStack.pop().data * Math.pow(10, myStack.length);
	}
	return returnValue;
}

var listA = new LinkedList();
listA.append(2);
listA.append(9);
listA.append(4);
listA.append(5);
var listB = new LinkedList();
listB.append(3);
listB.append(6);
listB.append(8);
listB.append(7);
console.log(sumLinkedLists(listA, listB));
console.log(sumLinkedLists(listB, listA));

var listA = new LinkedList();
listA.append(2);
listA.append(9);
listA.append(4);
var listB = new LinkedList();
listB.append(3);
listB.append(6);
listB.append(8);
listB.append(7);
listB.append(7);
console.log(sumLinkedLists(listA, listB));
console.log(sumLinkedLists(listB, listA));

/*
Analysis
Space complexity: O(N) where N = max(a.length, b.length)
Time complexity: O(N) where N = max(a.length, b.length)
*/