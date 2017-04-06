function maxHeap() {
	this.myArray = [];
	this.size = 0;
}

/*
Insert a value into the max heap
Time Complexity: O(lgn)
*/
maxHeap.prototype.insert = function(x) {
	this.size++;
	this.myArray[this.size] = x;
	this.bubbleUp(this.size);
};

/*
Remove the top element from the max heap and re-arrange the heap
Time Complexity: O(lgn)
*/
maxHeap.prototype.extractMax = function() {
	if (this.size === 0) {
		return null;
	}

	var intToReturn = this.myArray[1];
	this.myArray[1] = this.myArray[this.size];
	this.myArray[this.size] = null;
	this.size--;
	this.bubbleDown(1);
	return intToReturn;
};

/*
Delete an element at the index specified and then re-arrange the heap
Time Complexity: O(lgn)
*/
maxHeap.prototype.deleteIndex = function(index) {
	if (!index) {
		throw new Error("Invalid index");
	}
	if (index > this.size) {
		return null;
	}

	var intToReturn = this.myArray[index];
	this.myArray[index] = this.myArray[this.size];
	this.myArray[this.size] = null;
	this.size--;
	this.bubbleDown(index);
	return intToReturn;
};

/*
Move the value at the specified index up the heap to satisfy the max-heap property
Time Complexity O(lgn)
*/
maxHeap.prototype.bubbleUp = function(index) {
	var parent = Math.floor(index / 2);
	while ((this.myArray[index] > this.myArray[parent]) && (index > 0)) {
		this.swap(index, parent);
		index = parent;
		parent = Math.floor(index / 2);
	}

	return;
};

/*
Move the value at the specified index down the heap to satisfy the max-heap property
Time Complexity O(lgn)
*/
maxHeap.prototype.bubbleDown = function(index) {
	var leftChild = 2 * index;
	var rightChild = 2 * index + 1;
	var maxIndex;

	while (index <= this.size && leftChild <= this.size && rightChild <= this.size) {
		if (this.myArray[index] < this.myArray[leftChild] || this.myArray[index] < this.myArray[rightChild]) {
			//Swap with the larger child
			if (this.myArray[leftChild] > this.myArray[rightChild]) {
				maxIndex = leftChild;
			} else {
				maxIndex = rightChild;
			}

			this.swap(index, maxIndex);
			index = maxIndex;
			leftChild = 2 * index;
			rightChild = 2 * index + 1;
		} else {
			return;
		}
	}
};

/*
Swap two elements at the indicies specified
Time Complexity: O(1)
*/
maxHeap.prototype.swap = function(first, second) {
	var temp = this.myArray[first];
	this.myArray[first] = this.myArray[second];
	this.myArray[second] = temp;
};

/*
Print the heap as an array
Time Complexity: O(n)
*/
maxHeap.prototype.toString = function() {
	return this.myArray;
};

module.exports = maxHeap;


/*var myMaxHeap = new maxHeap();
console.log(myMaxHeap.toString());
console.log(myMaxHeap.extractMax());
//myMaxHeap.deleteIndex();
console.log(myMaxHeap.deleteIndex(1));
myMaxHeap.insert(15);
myMaxHeap.insert(25);
myMaxHeap.insert(11);
myMaxHeap.insert(44);
myMaxHeap.insert(23);
myMaxHeap.insert(41);
myMaxHeap.insert(17);
myMaxHeap.insert(18);
console.log(myMaxHeap.toString());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.toString());
console.log(myMaxHeap.deleteIndex(2));
console.log(myMaxHeap.toString());
console.log(myMaxHeap.deleteIndex(6));
console.log(myMaxHeap.toString());
console.log(myMaxHeap.deleteIndex(2));
console.log(myMaxHeap.toString());
console.log(myMaxHeap.deleteIndex(3));
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
*/