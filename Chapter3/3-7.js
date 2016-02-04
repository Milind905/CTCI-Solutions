/*
Question
An animal shelter holds only dogs and cats, and operates on a strictly "first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals
at the shelter, or they can select whether they would prefer a dog or a cat (and will
receive the oldest animal of that type). They cannot select which specific animal they
would like. Create the data structures to maintain this system and implement operations
such as enqueue, dequeueAny, dequeueDog and dequeueCat. You may
use the built-in Linked List data structure.

My clarification questions and assumptions
1) Can I use a queue instead of a built in linked list? (Queue is faster for both enqueue and dequeue) Yes
*/

var Queue = require("../DataStructures/Queue");
const CAT = "CAT";
const DOG = "DOG";

function Animal(data, added) {
	this.data = data;
	this.next = null;
	this.added = added;
}

Animal.prototype.toString = function() {
	return "[" + this.data + "]";
};

animalQueue.prototype = new Queue();

function animalQueue() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

animalQueue.prototype.enqueue = function(data, added) {
	if (!data || !added) {
		throw new Error("No data or date added");
	}
	var newAnimal = new Animal(data, added);
	if (!this.head) {
		this.head = newAnimal;
		this.tail = newAnimal;
	} else {
		this.tail.next = newAnimal;
		this.tail = newAnimal;
	}
	this.length++;
};

function AnimalShelter() {
	this.dogQueue = new animalQueue();
	this.catQueue = new animalQueue();
	this.number = 0;
}

AnimalShelter.prototype.enqueue = function(data, type) {
	if (!data || !type) {
		throw new Error("No data or type");
	}

	if (type === CAT) {
		this.number++;
		this.catQueue.enqueue(data, this.number);
	} else if (type === DOG) {
		this.number++;
		this.dogQueue.enqueue(data, this.number);
	} else {
		throw new Error("Invalid type");
	}
};

AnimalShelter.prototype.dequeueAny = function() {
	if (this.dogQueue.isEmpty() && this.catQueue.isEmpty()) {
		return "EMPTY";
	} else if (this.dogQueue.isEmpty()) {
		return this.catQueue.dequeue();
	} else if (this.catQueue.isEmpty()) {
		return this.dogQueue.dequeue();
	}

	if (this.dogQueue.head.added < this.catQueue.head.added) {
		return this.dequeueDog();
	} else {
		return this.dequeueCat();
	}
};

AnimalShelter.prototype.dequeueCat = function() {
	if (this.catQueue.isEmpty()) {
		return "EMPTY";
	} else {
		return this.catQueue.dequeue();
	}
};

AnimalShelter.prototype.dequeueDog = function() {
	if (this.dogQueue.isEmpty()) {
		return "EMPTY";
	} else {
		return this.dogQueue.dequeue();
	}
};

AnimalShelter.prototype.toString = function() {
	var returnString = "";

	returnString += "catQueue: "+this.catQueue.toString()+"\n";
	returnString += "dogQueue: "+this.dogQueue.toString();
	return returnString;
}


var myNewAnimalShelter = new AnimalShelter();
console.log(myNewAnimalShelter.toString());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.dequeueCat());
console.log(myNewAnimalShelter.dequeueDog());
myNewAnimalShelter.enqueue("C1", CAT);
myNewAnimalShelter.enqueue("C2", CAT);
myNewAnimalShelter.enqueue("D1", DOG);
myNewAnimalShelter.enqueue("C3", CAT);
myNewAnimalShelter.enqueue("D2", DOG);
console.log(myNewAnimalShelter.toString());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.dequeueAny());
console.log(myNewAnimalShelter.toString());



/*
Analysis
Space complexity: O(1) - no additional structures used anywhere
Time complexity:  O(1) - for all functions
*/