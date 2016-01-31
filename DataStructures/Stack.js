var Node = require("./Nodes");

function Stack() {
	this.top = null;
	this.length = 0;
}

Stack.prototype.push = function(data) {
	var cTop = this.top;
	var newTop = new Node(data);

	this.top = newTop;
	newTop.next = cTop;
	this.length++;
};

//Design decision to return just the data and not the entire object
Stack.prototype.pop = function() {
	if (this.top === null) {
		return null;
	}

	var cTop = this.top.data;
	this.top = this.top.next;
	this.length--;
	return cTop;
};

Stack.prototype.peek = function() {
	if (this.top) {
		return this.top.data;
	} else {
		return null;
	}
};

Stack.prototype.toString = function() {
	if(!this.top){
		return "Empty";
	}
	var returnString = "";
	var node = this.top;

	while(node){
		if(node.next){
			returnString += node.data+"-->";
		}
		else {
			returnString += node.data;
		}
		node = node.next;
	}
	return returnString;

};

module.exports = Stack;