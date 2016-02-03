/*
Question
Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack
exceeds some threshold. Implement a data structure SetOf Stacks that mimics
this. SetOf Stacks should be composed of several stacks and should create a
new stack once the previous one exceeds capacity. SetOf Stacks. push() and
SetOf Stacks. pop() should behave identically to a single stack (that is, popO
should return the same values as it would if there were just a single stack).
Also Implement a function popAt(int index) which performs a pop operation on
a specific sub-stack.

My clarification questions and assumptions
1) Can I use a dynamically resizing array? Yes
*/
var Node = require("../DataStructures/Nodes.js");
var Stack = require("../DataStructures/Stack.js");

/*
 	Space complexity: O(n) where n is the number of inputs
*/
function setOfStacks() {
	this.maxCapacity = 5;
	this.stackArray = [];
	this.currentIndex = 0;
	this.stackArray[this.currentIndex] = new Stack();
}

/*
	Time Complexity O(1)
*/
setOfStacks.prototype.push = function(data) {
	if (!data) {
		return;
	}

	if (this.stackArray[this.currentIndex].length >= this.maxCapacity) {
		this.currentIndex++;
		this.stackArray[this.currentIndex] = new Stack();
	}
	this.stackArray[this.currentIndex].push(data);
};

/*
	Time Complexity O(1)
*/
setOfStacks.prototype.pop = function() {
	if (this.stackArray[0].top === null) {
		return;
	}

	var prevNode = this.stackArray[this.currentIndex].pop();
	if(this.stackArray[this.currentIndex].top === null){
		this.currentIndex--;
	}
	
	return prevNode;
};

setOfStacks.prototype.popAt = function (index) {
	this.stackArray[index].pop();
	
	for(var i = index+1; i<this.stackArray.length; i++){
		var toMove = this.stackArray[i].popBottom();
		if(toMove === null){
			this.stackArray.splice(i, 1);
		 	this.currentIndex--;
		 	continue;
		}
		this.stackArray[i-1].push(toMove.data);
	}
};

/*
	Time Complexity O(1)
*/
setOfStacks.prototype.peek = function() {
	return this.stackArray[this.currentIndex].top;
};


/*
	Time Complexity O(n) where n is the number of items
*/
setOfStacks.prototype.toString = function() {
	var returnString = "";
	
	for(var i=this.currentIndex; i>=0; i--) {
		var node = this.stackArray[i].top;
		while(node !== null){
			if(node.next){
				returnString += node.data+"-->";
			}
			else {
				returnString += node.data+"...";
			}
			node = node.next;
		}
	}

	return returnString;
};

/*var mySet = new setOfStacks();
mySet.push();
mySet.pop();
console.log(mySet.toString());
mySet.push(4);
mySet.push(7);
mySet.push(11);
mySet.push(3);
mySet.push(2);
console.log(mySet.toString());
mySet.pop();
console.log(mySet.toString());
mySet.push(2);
mySet.push(12);
console.log(mySet.toString());
mySet.pop();
console.log(mySet.toString());
mySet.push(30);
mySet.push(40);
mySet.push(50);
mySet.push(60);
mySet.push(70);
mySet.push(129);
console.log(mySet.toString());
mySet.popAt(0);
console.log(mySet.toString());
mySet.popAt(0);
console.log(mySet.toString());
mySet.push(25);
console.log(mySet.toString());
mySet.push(26);
console.log(mySet.toString());
console.log(mySet.peek());*/

