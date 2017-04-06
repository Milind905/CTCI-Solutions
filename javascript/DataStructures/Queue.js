var Node = require("./Nodes");

function Queue() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

/*
Add an item to the end of the list
Time Complexity: O(1)
*/
Queue.prototype.enqueue = function(data) {
	var myNode = new Node(data);
	if (this.length === 0) {
		this.head = myNode;
		this.tail = myNode;
	} else {
		this.tail.next = myNode;
		this.tail = myNode;
	}
	this.length++;
};

/*
Remove the item at the front of the list
Time Compelxity: O(1)
*/
Queue.prototype.dequeue = function() {
	if (this.length === 0) {
		return null;
	} else {
		var myNode = this.head;
		this.head = this.head.next;
		this.length--;
		return myNode;
	}
};

/*
Checks if the queue is empty
Time Complexity: O(1)
*/
Queue.prototype.isEmpty = function() {
	if (!this.head) {
		return true;
	} else {
		return false;
	}
};

/*
Prints the queue in an easy to read format
Time Complexity: O(n)
*/
Queue.prototype.toString = function() {
	if (this.length === 0) {
		return "Empty";
	}
	var returnString = "";
	var node = this.head;
	while (node !== null) {
		if (node.next === null) {
			returnString += "[" + node.data + "]";
		} else {
			returnString += "[" + node.data + "]-->";
		}
		node = node.next;
	}
	return returnString;
};

module.exports = Queue;


/*var myQueue = new Queue();
console.log(myQueue.toString());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
//console.log(myQueue.enqueue());
myQueue.enqueue(11);
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue().toString());
console.log(myQueue.isEmpty());
console.log(myQueue.toString());
myQueue.enqueue(11);
myQueue.enqueue(21);
myQueue.enqueue(25);
myQueue.enqueue(7);
myQueue.enqueue(18);
myQueue.enqueue(43);
console.log(myQueue.toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.dequeue().toString());
console.log(myQueue.toString());
console.log(myQueue.isEmpty());
myQueue.enqueue(11);
myQueue.enqueue(43);
myQueue.enqueue(21);
myQueue.enqueue(25);
myQueue.enqueue(7);
myQueue.enqueue(18);
console.log(myQueue.toString());
console.log(myQueue.isEmpty());*/