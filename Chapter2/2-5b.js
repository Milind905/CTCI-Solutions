
/*
Question
You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the 1s digit is at the
head of the list. Write a function that adds the two numbers and returns the sum
as a linked list. Now Suppose the digits are stored in forward order (1s digit is at
the end of the list).


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

	var aStack = new Stack();
	var bStack = new Stack();
	var aNode = a.head;
	var bNode = b.head;

	while (aNode !== null) {
		aStack.push(aNode.data);
		aNode = aNode.next;
	}
	while (bNode !== null) {
		bStack.push(bNode.data);
		bNode = bNode.next;
	}

	if (bStack.length > aStack.length) {
		return sumStacks(bStack, aStack);
	} else {
		return sumStacks(aStack, bStack);
	}
}

function sumStacks(longer, shorter) {
	var a, b, sum;
	var carry = 0;
	var result = 0;
	var length = longer.length;
	for (var i = 0; i < length; i++) {
		a = longer.pop();
		if (shorter.length > 0) {
			b = shorter.pop();
		} else {
			b = 0;
		}

		sum = a + b + carry;
		if (sum >= 10) {
			sum = sum % 10;
			carry = 1;
		} else {
			carry = 0;
		}
		result += sum * Math.pow(10, i);
	}
	result += carry * Math.pow(10, length);
	return result;
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
listA.append(1);
listA.append(8);
listA.append(2);
listA.append(7);
var listB = new LinkedList();
listB.append(2);
listB.append(9);
listB.append(5);
console.log(sumLinkedLists(listA, listB));
console.log(sumLinkedLists(listB, listA));


/*
Analysis
Space complexity: O(A + B) where A = a.length and B = b.length
Time complexity: O(N) where N = max(a.length, b.length)
*/