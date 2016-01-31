/*
Question
Implement a function to check if a linked list is a palindrome


My clarification questions and assumptions
1) Is this a double linked list? No
2) Do I have a reference to the tail? No
*/
var LinkedList = require("../DataStructures/SinglyLinkedList.js");

function isPalindrome(list) {
	if (list.head === null) {
		return false;
	}

	var node = list.head;
	var nodeArray = [];
	while (node !== null) {
		nodeArray.push(node.data);
		node = node.next;
	}

	var end = nodeArray.length - 1;
	for (var i = 0; i < end; i++) {
		if (nodeArray[i] !== nodeArray[end]) {
			return false;
		}
		end--;
	}
	return true;
}

var list = new LinkedList();
list.append("A");
console.log(list.toString());
console.log(isPalindrome(list));

var list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("C");
list.append("B");
list.append("A");
console.log(list.toString());
console.log(isPalindrome(list));

var list = new LinkedList();
list.append("M");
list.append("I");
list.append("L");
list.append("A");
list.append("N");
console.log(list.toString());
console.log(isPalindrome(list));

var list = new LinkedList();
list.append("M");
list.append("I");
list.append("L");
list.append("I");
list.append("N");
list.append("D");
list.append("D");
list.append("N");
list.append("I");
list.append("L");
list.append("L");
list.append("I");
list.append("M");
console.log(list.toString());
console.log(isPalindrome(list));

/*
Analysis
Space complexity: O(N) where n is the length of the list
Time complexity: O(N) where n is the length of the list
*/