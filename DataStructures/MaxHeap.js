function maxHeap() {
	this.myArray = [];
	this.size = 0;
}

maxHeap.prototype.insert = function(x) {
	this.size++;
	this.myArray[this.size] = x;
	this.bubbleUp(this.size);
};

maxHeap.prototype.extractMax = function() {
	var intToReturn = this.myArray[0];
	this.myArray[1] = this.myArray[this.size];
	this.myArray[this.size] = null;
	this.size--;
	this.bubbleDown(1);
	return intToReturn;
};

maxHeap.prototype.deleteIndex = function(index) {
	var intToReturn = this.myArray[index];
	this.myArray[index] = this.myArray[this.size];
	this.myArray[this.size] = null;
	this.size--;
	this.bubbleDown(index);
	return intToReturn;
};

maxHeap.prototype.bubbleUp = function(index) {
	var parent = Math.floor(index/2);
	while((this.myArray[index] > this.myArray[parent]) && (index > 0)) {
		this.swap(index, parent);
		index = parent;
		parent = Math.floor(index/2);
	}

	return;
};

maxHeap.prototype.bubbleDown = function(index) {
	var leftChild = 2*index;
	var rightChild = 2*index+1;
	var maxIndex;

	while(index <= this.size && leftChild <=this.size && rightChild <= this.size){
		if(this.myArray[index] < this.myArray[leftChild] || this.myArray[index] < this.myArray[rightChild]) {

			if(this.myArray[leftChild] > this.myArray[rightChild]){
				maxIndex = leftChild;
			} else {
				maxIndex = rightChild;
			}

			this.swap(index, maxIndex);
			index = maxIndex;
			leftChild = 2*index;
			rightChild = 2*index+1;
		} else {
			return;
		}
	}
};

maxHeap.prototype.swap = function(first, second) {
	var temp = this.myArray[first];
	this.myArray[first] = this.myArray[second];
	this.myArray[second] = temp;
};

maxHeap.prototype.toString = function() {
	return this.myArray;
};

module.exports = maxHeap;


var myMaxHeap = new maxHeap();
console.log(myMaxHeap.toString());
myMaxHeap.insert(15);
console.log(myMaxHeap.toString());
myMaxHeap.insert(25);
myMaxHeap.insert(11);
myMaxHeap.insert(44);
myMaxHeap.insert(23);
myMaxHeap.insert(41);
myMaxHeap.insert(17);
myMaxHeap.insert(18);
console.log(myMaxHeap.toString());
myMaxHeap.extractMax();
console.log(myMaxHeap.toString());
console.log(myMaxHeap.deleteIndex(2));
console.log(myMaxHeap.toString());