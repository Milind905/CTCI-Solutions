var LinkedList = require("./SinglyLinkedList");

function HashTable(size) {
	this.myValues = [];
	this.size = size;

	for (var i = 0; i < this.size; i++) {
		this.myValues[i] = new LinkedList();
	}
}

/*
Given a key k, return its hash value
Time Complexity: O(1)
*/
HashTable.prototype.hashFunction = function(k) {
	if (k === null || k === undefined) {
		throw new Error("Invalid key");
	}
	return k % this.size;
};

/*
Given a key k, insert it into the hash table
Time complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashInsert = function(k) {
	var index = this.hashFunction(k);
	this.myValues[index].append(k);
	return index;
};

/*
Given a key k, find its position in the hash table
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashSearch = function(k) {
	var index = this.hashFunction(k);
	if (this.myValues[index].search(k)) {
		return index;
	} else {
		return null;
	}
};

/*
Given a key k, find if it exists in the hash table then delete it
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashDelete = function(k) {
	var index = this.hashFunction(k);
	return this.myValues[index].remove(k);
};

/*
Check the size of a linked list at an index in the hashtable
Time Complexity: O(1)
*/
HashTable.prototype.checkLinkedListLength = function(index){
	if(index >= this.size || index < 0){
		throw new Error("Invalid input index");
	}

	return this.myValues[index].length;
};

/*
Print the hash table in an easy to read format
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.toString = function() {
	var returnString = "";

	for (var i = 0; i < this.size; i++) {
		returnString += this.myValues[i].toString() + "\n";
	}

	return returnString;
};

module.exports = HashTable;

/*var myHashTable = new HashTable(11);
console.log("Insert: " + myHashTable.hashInsert(12));
console.log("Insert: " + myHashTable.hashInsert(25));
console.log("Insert: " + myHashTable.hashInsert(26));
console.log("Insert: " + myHashTable.hashInsert(21));
console.log("Insert: " + myHashTable.hashInsert(412));
console.log("Insert: " + myHashTable.hashInsert(100));
console.log("Insert: " + myHashTable.hashInsert(77));
console.log("Insert: " + myHashTable.hashInsert(3));
console.log("Insert: " + myHashTable.hashInsert(5));
console.log("Insert: " + myHashTable.hashInsert(6));
console.log("Insert: " + myHashTable.hashInsert(11));
console.log("\nHashTable:\n" + myHashTable.toString());

console.log("Search: 11 " + myHashTable.hashSearch(11));
console.log("Search: 26 " + myHashTable.hashSearch(26));
console.log("Search: 3 " + myHashTable.hashSearch(3));
console.log("Search: 11 " + myHashTable.hashSearch(11));
console.log("Search: 27 " + myHashTable.hashSearch(27));
console.log("Search: 1080 " + myHashTable.hashSearch(1080));


console.log("Delete: 11 " + myHashTable.hashDelete(11));
console.log("Delete: 26 " + myHashTable.hashDelete(26));
console.log("Delete: 3 " + myHashTable.hashDelete(3));
console.log("Delete: 11 " + myHashTable.hashDelete(11));
console.log("Delete: 27 " + myHashTable.hashDelete(27));
console.log("Delete: 1080 " + myHashTable.hashDelete(1080));
console.log("\nHashTable:\n" + myHashTable.toString());
console.log("Insert: " + myHashTable.hashInsert(11));
console.log("\nHashTable:\n" + myHashTable.toString());*/