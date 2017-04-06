//Open-Addressing Hash Table

const DELETED = "deleted";

function HashTable(size) {
	this.myValues = [];
	this.size = size;
}

/*
Get the linear probe value given a key k and an iterator i
Time Complexity: O(1)
*/
HashTable.prototype.linearProbing = function(k, i) {
	return (this.hashFunction1(k) + i) % this.size;
};

/*
Get the double hashed probe value given a key k and an iterator i
Time Complexity: O(1)
*/
HashTable.prototype.doubleHash = function(k, i) {
	return (this.hashFunction1(k) + i * this.hashFunction2(k)) % this.size;
};

/*
Given a key k, return its hash value
Time Complexity: O(1)
*/
HashTable.prototype.hashFunction1 = function(k) {
	return k % this.size;
};

/*
Given a key k, return its hash2 value
Time Complexity: O(1)
*/
HashTable.prototype.hashFunction2 = function(k) {
	return k % (this.size - 1);
};

/*
Given a key k, insert it into the hash table
Time complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashInsert = function(k) {
	var i = 0;
	var j;

	while (i !== this.size) {
		j = this.doubleHash(k, i);
		if (this.myValues[j] === null || this.myValues[j] === undefined || this.myValues[j] === DELETED) {
			this.myValues[j] = k;
			return j;
		} else {
			i++;
		}
	}

	throw new Error("Table is already full");
};

/*
Given a key k, find its position in the hash table
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashSearch = function(k) {
	var i = 0;
	var j;

	while (i !== this.size) {
		j = this.doubleHash(k, i);
		if (this.myValues[j] === k) {
			return j;
		} else if (this.myValues[j] === null) {
			return null;
		} else {
			i++;
		}
	}

	return null;
};

/*
Given a key k, find if it exists in the hash table then delete it
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.hashDelete = function(k) {
	var i = 0;
	var j;

	while (i !== this.size) {
		j = this.doubleHash(k, i);
		if (this.myValues[j] === k) {
			this.myValues[j] = DELETED;
			return j;
		} else if (this.myValues[j] === null) {
			return null;
		} else {
			i++;
		}
	}

	return null;
};

/*
Print the hash table in an easy to read format
Time Complexity: O(m) where m is the size of the hash table
*/
HashTable.prototype.toString = function() {
	var returnString = "";

	for (var i = 0; i < this.size; i++) {
		returnString += "[" + this.myValues[i] + "] ";
	}

	return returnString;
};


/*var myHashTable = new HashTable(13);
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
console.log(myHashTable.toString());

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
console.log(myHashTable.toString());

console.log("Insert: " + myHashTable.hashInsert(11));
console.log(myHashTable.toString());*/