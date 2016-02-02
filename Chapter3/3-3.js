/*
Question
Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack
exceeds some threshold. Implement a data structure SetOf Stacks that mimics
this. SetOf Stacks should be composed of several stacks and should create a
new stack once the previous one exceeds capacity. SetOf Stacks. push() and
SetOf Stacks. pop() should behave identically to a single stack (that is, popO
should return the same values as it would if there were just a single stack).

My clarification questions and assumptions
1) Can I use a dynamically resizing array? Yes
*/
var Node = require("../DataStructures/Nodes.js");
var Stack = require("../DataStructures/Stack.js");

function setOfStacks() {
	this.maxCapacity = 5;
	this.stackArray = [];
	this.currentIndex = 0;
	this.stackArray[this.currentIndex] = new Stack();
}

setOfStacks.prototype.push = function(data) {

};

setOfStacks.prototype.pop = function() {

};

setOfStacks.prototype.peek = function() {
	
};

setOfStacks.prototype.toString = function() {

};



/*
Analysis
Space complexity: 
Time complexity: 
*/